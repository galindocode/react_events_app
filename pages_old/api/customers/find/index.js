import { getOrders, getEmployeFromOrder } from "../../../../utils/customerApi";
import JSONdb from "simple-json-db";

const db = new JSONdb("./customers.json");

const cleanPhoneNumber = (phoneNumber) => {
	return phoneNumber.replace(/[^0-9]/g, "");
};

const findNumberInDb = (phoneNumber) => {
	let ordersId = [];
	phoneNumber = cleanPhoneNumber(phoneNumber);
	const dataRaw = db.JSON();
	const dataAll = Object.values(dataRaw);
	const keys = Object.keys(dataRaw);
	const dataraw = dataAll.filter((customer, index) => {
		if (typeof customer.phoneNumber === "string") {
			if (cleanPhoneNumber(customer.phoneNumber).includes(phoneNumber)) {
				ordersId.push(keys[index]);
				return true;
			}
		}
		return false;
	});
	const data = dataraw.map((customer, index) => {
		customer.orderId = ordersId[index];
		return customer;
	});
	return {
		success: true,
		length: data.length,
		data,
	};
};

const findDeep = async (phoneNumber) => {
	phoneNumber = cleanPhoneNumber(phoneNumber);
	let customer = {};
	customer.phoneNumber = "";
	let page = 0;
	while (!cleanPhoneNumber(customer.phoneNumber).includes(phoneNumber)) {
		const { items: orders } = await getOrders(page, 100);

		try {
			orders.length > 0 &&
				(await Promise.all([
					orders.some(async (order) => {
						if (!db.has(order.orderId)) {
							const result = await getEmployeFromOrder(order);
							if (result) {
								customer = { ...result };
								db.set(order.orderId, result);
							}
							if (
								customer &&
								customer.phoneNumber &&
								cleanPhoneNumber(customer.phoneNumber).includes(
									phoneNumber
								)
							) {
								customer.orderId = order.orderId;

								return true;
							} else {
								customer.phoneNumber = "";
							}
						}
					}),
				]));
		} catch (error) {
			console.log(customer);
			console.log(error);
		}
		page++;

		//customer.phoneNumber = phoneNumber;
	}
	return customer;
};

export default async function handler(req, res) {
	const { phoneNumber } = req.query;
	// try find in local db
	let data = findNumberInDb(phoneNumber);
	if (data.length < 1) {
		data = await findDeep(phoneNumber);
	}
	res.json(data);
}
