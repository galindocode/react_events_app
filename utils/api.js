import axios from "axios";

const api = axios.create({
	baseURL: "https://api.partycs.com/",
	headers: {
		"pcs-facility-id": process.env.API_KEY,
		accept: "text/plain",
	},
});

export default api;
