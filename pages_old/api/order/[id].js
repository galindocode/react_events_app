import { useRouter } from "next/router";
import { OrderApp } from "../../../components/Order/OrderApp";
import api from "../../../utils/api";

export async function getServerSideProps(context) {
	const { data: order } = await api.get(`/orders/${context.params.id}`);
	const { data: items } = await api.get(`/orders/${context.params.id}/items`);
	const { data: customer } = await api.get(
		`/orders/${context.params.id}/customer`
	);

	order.items = items;
	order.customer = customer;

	return {
		props: { order }, // will be passed to the page component as props
	};
}

const Order = ({ order }) => {
	return (
		<div className='flex items-center h-screen justify-center py-4 bg-gray-100'>
			<OrderApp order={order} />
		</div>
	);
};

export default Order;
