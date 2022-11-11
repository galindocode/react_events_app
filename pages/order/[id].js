import { useRouter } from "next/router";
import OrderItem from "../../components/Order/OrderItem";

const Order = () => {
	const router = useRouter();
	const { id } = router.query;

	return <OrderItem orderId={id} />;
};

export default Order;
