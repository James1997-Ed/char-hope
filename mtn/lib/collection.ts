import { mtnConfig } from "../../config"
import axios from "axios"
import { MTNConfigBody, MTNGetStatusPayload, MTNRequestToPayPayload } from "../../types/mtn-types"
import { NextApiRequest, NextApiResponse } from "next"
import { MTNAPI } from "./baseClass"
import generateUUID from "../../utils/genUUID"



class Collection extends MTNAPI{
    
    constructor(req:NextApiRequest, res:NextApiResponse, config:MTNConfigBody){
        super(req,res,config)
    }

    handler(): Promise<any> {
        switch(this.nestedEndpoint){
            case "request-to-pay":
                return this.requestToPay()
            case "get-transaction":
                return this.getTransaction()
            case "token":
                return this.authorization()
            default:
                return this.throwError()
        }
    }

    private async requestToPay(){
        this.url += `v1_0/requesttopay`
        const body = this.req.body as MTNRequestToPayPayload

        if(!body.token || !body.amount|| !body.partyIdType || !body.partyId || !body.currency){
            return this.throwError()
        }

        const {
            method
        } = this.req 

        if(method != "POST"){
            return this.throwError()
        }

        try {
            const transactionId = generateUUID()
            const response = await axios.post(this.url,
                {
                    amount: body.amount,
                    currency: this.config.targetEnv != "sandbox" ? body.currency :"EUR",
                    externalId:generateUUID(),
                    payer:{
                        partyIdType:body.partyIdType,
                        partyId: body.partyId
                    },
                    payerMessage: "Bought this from that",
                    payeeNote: "Bought this from that",
                }, 
                {
                headers:{
                    "X-Reference-Id": transactionId,
                    "X-Target-Environment": this.config.targetEnv,
                    "Ocp-Apim-Subscription-Key": this.config.subscriptionKey,
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${body.token}`,
                },
            });

        
            if (response.status === 202) {
              return this.res.status(202).json({ status: true, transactionId });
            }
            return this.res.status(response.status).json({ status: false, error: response.data["message"] ?? "Bad Request error" });
          } catch (error) {
            console.error("request to pay: Error:", error);

            if (axios.isAxiosError(error)) {
              if (error.response) {
                return this.res.status(error.response.status).json({ status: false, error: "Error in MTN request to pay. Please try again or contact supports." });
              }
            }
            return this.res.status(500).json({ status: false, error: "Error in MTN request to pay. Please try again or contact support." });
          }
    }

    private async getTransaction(){
        return await this.getStatus("v1_0/requesttopay")
    }
}

export default (req:NextApiRequest, res:NextApiResponse) => new Collection(req, res, mtnConfig.collection)