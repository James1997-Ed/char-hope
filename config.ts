import { MTNConfig } from "./types/mtn-types";


export const mtnConfig : MTNConfig = {
    collection: {
      baseUrl: process.env.MTN_BASE_URL + 'collection/',
      apiUserId: process.env.MTN_COLLECTION_API_USER_ID as string,
      apiKey: process.env.MTN_COLLECTION_API_USER_KEY as string,
      subscriptionKey: process.env.MTN_COLLECTION_PRODUCT_SUBSCRIPTION_KEY as string,
      targetEnv: process.env.MTN_TARGET_ENV as string,
    },
  }





