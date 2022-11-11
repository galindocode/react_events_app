import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const OrderData = ({ order }) => {
	console.log("OrderData", order);
	return (
		<div className='p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{order && (
				<>
					<TextField
						label='Order Number'
						defaultValue={`#${order.orderId}`}
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						label='Order Datetime'
						defaultValue={`${order.orderDate.split("T")[0]} ${
							order.orderDate.split("T")[1]
						}`}
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						label='Event start'
						defaultValue={`${
							order.eventStartDateTime.split("T")[0]
						} ${order.eventStartDateTime.split("T")[1]}
						`}
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						label='Event end'
						defaultValue={`${
							order.eventEndDateTime.split("T")[0]
						} ${order.eventEndDateTime.split("T")[1]}
						`}
						InputProps={{
							readOnly: true,
						}}
					/>
					{/* Party data */}
					{order.party && (
						<>
							<TextField
								label='Party name'
								defaultValue={order.party.name}
								InputProps={{
									readOnly: true,
								}}
							/>
							<TextField
								label='Category'
								defaultValue={order.party.category}
								InputProps={{
									readOnly: true,
								}}
							/>
						</>
					)}
				</>
			)}
		</div>
	);
};

OrderData.propTypes = {
	order: PropTypes.object,
};

OrderData.defaultProps = {
	order: {},
};

export default OrderData;
