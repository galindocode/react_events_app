import React from "react";
import CustomerData from "./CustomerData";
import ItemsData from "./ItemsData";
import OrderData from "./OrderData";
import OrderTabs from "./OrderTabs";

const tabPanels = new Map();
tabPanels.set(0, (order) => <OrderData order={order} />);
tabPanels.set(1, (order) => <CustomerData order={order} />);
tabPanels.set(2, (order) => <ItemsData order={order} />);

const OrderItem = ({ orderId }) => {
	const [tab, setTab] = React.useState(0);
	const [order, setOrder] = React.useState(null);

	React.useEffect(() => {
		fetch(`/api/orders/${orderId}`)
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				setOrder(json);
			});
	}, [orderId]);

	return (
		<div className='flex items-center h-screen justify-center py-4 shadow-md bg-gray-100'>
			<div className='w-[90%] h-[90%] bg-white rounded-md border '>
				<OrderTabs setTab={setTab} tab={tab} />
				{tabPanels.get(tab)(order)}
			</div>
		</div>
	);
};

export default OrderItem;
