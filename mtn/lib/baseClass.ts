import axios from "axios"
import {MTNConfigBody, MTNGetStatusPayload } from "../../types/mtn-types"
import { NextApiRequest, NextApiResponse } from "next"

export class MTNAPI{
    protected req!: NextApiRequest
    protected res!: NextApiResponse
    protected url!: string
    protected nestedEndpoint!: string
    protected config!: MTNConfigBody

    constructor(req:NextApiRequest, res:NextApiResponse, config:MTNConfigBody){
        this.req = req 
        this.res = res 
        this.url = config.baseUrl
        this.config = config

        if(this.req.query.endpoints && this.req.query.endpoints.length > 1){
            this.nestedEndpoint = this.req.query.endpoints?.[1] 
        }

        this.handler()
    }

    async handler(){
        return this.res.status(200).json({})
    }

    async authorization(){
        this.url += "token/"

        const {
            method
        } = this.req 

        if(!this.config.apiKey || !this.config.subscriptionKey || !this.config.apiUserId){
            return this.res.status(400).json({error: "Bad Request!"}); 
        }

        if (method !== "POST") {
            return this.res.status(405).json({ status: false, error: `method ${method} not allowed!` });
        }

        try {
            const { status, data } = await axios.post(
                this.url,
                {},
                {
                    headers: {
                        "Ocp-Apim-Subscription-Key":this.config.subscriptionKey,
                    },
                    auth:{
                        username:this.config.apiUserId,
                        password: this.config.apiKey,
                    }
                }
            );
        
            if (status === 200) {
              return this.res.status(200).json({ status: true, access_token: data["access_token"], expires_in: data["expires_in"] });
            }
            return this.res.status(status).json({ status: false, error: data["error"] ?? "Internal server error" });
        } catch (error) {
            console.error("authenticate: Error:", error);
            return this.res.status(500).json({ status: false, error: "Error in MTN authentication. Please try again or contact support." });
        }
        
    }

    async getStatus(endpoint:string){
        const body  = this.req.body as MTNGetStatusPayload
        this.url += `${endpoint}/${body.id}`
        console.log(this.url)

        const {
            method
        } = this.req 

        if(method != "POST"){
            return this.throwError()
        }
        
        if(!body.token || !body.id){
            return this.throwError()
        }

        try {
            const response = await axios.get(this.url, {
                headers: {
                    "Ocp-Apim-Subscription-Key":this.config.subscriptionKey,
                    "X-Target-Environment":this.config.targetEnv,
                    Authorization: `Bearer ${body.token}`
                },
            })
        
            if (response.data.status === "SUCCESSFUL") {
              return this.res.status(200).json({ status: response.data.status });
            }

            return this.res.status(200).json({ status: response.data.status, reason: response.data.reason });
          } catch (error) {
                        console.error("transact status: Error:", error);

        
            if (axios.isAxiosError(error)) {
              if (error.response) {
                return this.res
                  .status(error.response.status)
                  .json({ status: false, error: "Error in MTN request to pay. Please try again or contact support." });
              }
            }
            return this.res
              .status(500)
              .json({ status: false, error: "Error in MTN get transaction. Please try again or contact support." });
          }

    }

    protected async throwError(){
        return this.res.status(500).json({error:"Bad Request"})
    }
}