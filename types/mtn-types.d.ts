export type BaseEndpoint = "collection" | "disbursement" 
    // type NestedEndpoint = "request-to-pay" | "token" | ""
    
export type MTNConfigBody = {
    baseUrl: string,
    apiKey: string,
    subscriptionKey: string,
    apiUserId: string,
    targetEnv: string,
} 

export interface MTNConfig {
    collection:MTNConfigBody,
    disbursment?:MTNConfigBody
}

export interface MTNRequestToPayPayload {
    amount: number,
    currency: string,
    partyIdType: string,
    partyId: string,
    token: string,
}

export interface MTNGetStatusPayload {
    token: string,
    id: string,
}

export interface MTNDepositPayload {
    amount: number,
    currency: string,
    partyIdType: string,
    partyId: string,
    token: string,
}

export interface MTNRefundPayload {
    referenceIdToRefund: string,
    amount: number,
    currency: string,
    token: string,
}