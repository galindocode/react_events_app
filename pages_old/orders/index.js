import api from "../../utils/api";
import { nanoid } from "nanoid";
import moment from "moment/moment";

function getOrderQuery() {
	const today = moment().format("YYYY-MM-DD");
	const tomorrow = moment().add(1, "days").format("YYYY-MM-DD");
	return `OrderDateStart=${today}T00:00:00&OrderDateEnd=${tomorrow}T00:00:00&Size=100`;
}

async function getParty(orderId) {
	let result = {};
	try {
		const { data } = await api.get(`/orders/${orderId}/party`);
		result = data;
	} catch (error) {}
	return result;
}
async function getGuestOfHonor(orderId) {
	let result = {};
	try {
		const { data } = await api.get(`/orders/${orderId}/guestsofhonor`);
		result = data;
	} catch (error) {}
	return result;
}
async function getCustomer(orderId) {
	let result = {};
	try {
		const { data } = await api.get(`/orders/${orderId}/customer`);
		result = data;
	} catch (error) {}
	return result;
}
async function getItems(orderId) {
	let result = {};
	try {
		const { data } = await api.get(`/orders/${orderId}/items`);
		result = data;
	} catch (error) {}
	return result;
}

async function parseOrders(orders) {
	const results = Promise.all(
		orders.map(async (order) => {
			let party = await getParty(order.orderId);
			let guestOfHonor = await getGuestOfHonor(order.orderId);
			let customer = await getCustomer(order.orderId);
			let items = await getItems(order.orderId);

			return {
				...order,
				party,
				guestOfHonor,
				customer,
				items,
				id: nanoid(),
			};
		})
	);

	return results;
}

export default async function handler(req, res) {
	const { data: orderResponse } = await api.get(`orders?${getOrderQuery()}`);
	const ordersBase = orderResponse.items;
	res.status(200).json(await parseOrders(ordersBase));
}
