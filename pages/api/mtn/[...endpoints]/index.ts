import collection from "../../../../mtn/lib/collection";
// import disbursement from "../../../../mtn/lib/disbursement";
import { BaseEndpoint } from "../../../../types/mtn-types";
import { NextApiRequest, NextApiResponse } from "next";


class MTNAPI{
    private req!: NextApiRequest
    private res!: NextApiResponse

    async handler(req:NextApiRequest, res:NextApiResponse){
        this.req = req 
        this.res = res 
        
        const {
            query
        } = this.req
        
        if(!query.endpoints){
            return this.res.status(401).json({error: "Bad Reequest!"})
        }

        if(query.endpoints.length < 2){
            return this.res.status(401).json({error: "Bad Reequest!"})
        }
        
        const baseEndpoint = query.endpoints?.[0] as BaseEndpoint 
        
        switch(baseEndpoint){
            case "collection":
                return collection(this.req, this.res)
            // case "disbursement":
                // return disbursement(this.req, this.res)
            default:
                return this.res.status(400).json({error: ""});
        }
    }
}

export default (...args:[req: NextApiRequest, res: NextApiResponse]) => new MTNAPI().handler(...args)
