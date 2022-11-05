// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "../../../utils/api";
import JSONdb from "simple-json-db";

const db = new JSONdb("./customers.json");

const getOrders = async (page) => {
	page = page || 1;
	const { data } = await api.get(`/orders?page=${page}`);
	return data;
};

const getEmployeFromOrder = async (order) => {
	console.log(`/orders/${order.orderId}/customer`);
	try {
		const response = await api.get(`/orders/${order.orderId}/customer`);

		return response.data;
	} catch (error) {
		return false;
	}
};

const parseData = (dataRaw, page) => {
	const dataAll = Object.values(dataRaw);
	const data = dataAll.slice(page * 10 - 10, page * 10);
	return {
		success: true,
		length: data.length,
		data,
	};
};

const saveCustomersFromOrders = async (orders) => {
	await Promise.all(
		orders.map(async (order) => {
			if (!db.has(order.orderId)) {
				console.log("saving order", order.orderId);
				const customer = await getEmployeFromOrder(order);

				customer && db.set(order.orderId, customer);
			}
		})
	);
};

export default async function handler(req, res) {
	const page = req.query.page || 1;
	const { items: orders } = await getOrders(page);

	// save
	await saveCustomersFromOrders(orders);

	const dataRaw = await db.JSON();
	res.status(200).json(parseData(dataRaw, page));
}
