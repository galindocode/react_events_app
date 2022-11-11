import React from "react";
import { TextField } from "@mui/material";
import PropTypes from "prop-types";

const CustomerData = ({ order }) => {
	return (
		<div className='p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
			{order && order.customer && (
				<>
					<TextField
						label='Name'
						defaultValue={order.customer.name}
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						label='Email'
						defaultValue={order.customer.email}
						InputProps={{
							readOnly: true,
						}}
					/>
					<TextField
						label='Customer phone number'
						defaultValue={order.customer.phoneNumber}
						InputProps={{
							readOnly: true,
						}}
					/>
				</>
			)}
		</div>
	);
};

CustomerData.propTypes = {
	order: PropTypes.object,
};

CustomerData.defaultProps = {
	order: {},
};

export default CustomerData;
