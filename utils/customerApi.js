import api from "./api";

export const getOrders = async (page, size) => {
	page = page || 1;
	size = size || 10;
	const { data } = await api.get(`/orders?page=${page}&size=${size}`);
	return data;
};

export const getEmployeFromOrder = async (order) => {
	try {
		const response = await api.get(`/orders/${order.orderId}/customer`);

		return response.data;
	} catch (error) {
		return false;
	}
};
