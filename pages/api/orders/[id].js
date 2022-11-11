import api from "../../../utils/api";
import { nanoid } from "nanoid";
import moment from "moment/moment";

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

async function parseOrders(order) {
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
}

export default async function handler(req, res) {
	const { id } = req.query;
	const { data: orderResponse } = await api.get(`orders/${id}`);

	const ordersBase = orderResponse;
	res.status(200).json(await parseOrders(ordersBase));
}
