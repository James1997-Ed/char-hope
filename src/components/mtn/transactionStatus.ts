import axios from "axios";

const tokenKey = "mtn_token_key";

const getTokenFromStorage = () => {
	return localStorage.getItem(tokenKey);
};

export default async function TransactionStatus(transactionId: string) {
	return await axios
		.post("/api/collection/get-transaction", {
			token: getTokenFromStorage(),
			id: transactionId,
		})
		.then((res) => res.data)
		.catch((err) => err);
}
