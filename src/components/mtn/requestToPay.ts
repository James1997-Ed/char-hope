import { useState } from "react";
import axios from "axios";

const tokenKey = "mtn_token_key";

const getTokenFromStorage = () => {
	return localStorage.getItem(tokenKey);
};

const setTokenInStorage = (_token: string) => {
	localStorage.setItem(tokenKey, JSON.stringify(_token));
};

// use only on client side scripts
export default async function RequestToPayAsync (partyId, amount, currency) {
	const token = getTokenFromStorage()

    const auth = async () => {
		const _token = await axios
			.post("/api/mtn/collection/token")
			.then((res) => {
				const _token = res.data.access_token;
				setTokenInStorage(_token);
				return _token
			})
			//Handle Error Response Yourself
			.catch((err) => {
                alert(err.data)
                return err
            });

        return await requestToPay(_token)
	};

	const requestToPay = async (token) => {
		return await axios
			.post("/api/mtn/collection/request-to-pay", {
				token,
				amount: amount,
				partyIdType: "MSSID",
				partyId,
				currency,
			})
			.then((res) => {
                alert(res)
                return res.data
            })
			.catch((err) => err);
	};

    if(token){
        return await requestToPay(token)
    }

    else{
        await auth()
    }

}
