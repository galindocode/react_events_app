import { Box, TextField } from "@mui/material";
import React from "react";

export const Order = ({ order }) => {
	return (
		<Box
			sx={{
				marginTop: "1rem",
				display: "grid",
				gridTemplateColumns: "repeat(4, 1fr)",
				gridGap: "1rem",
			}}
		>
			{order.cancelDate && (
				<TextField
					id='outlined-read-only-input'
					label='Fecha de cancelación'
					defaultValue={order.cancelDate}
					InputProps={{
						readOnly: true,
					}}
				/>
			)}
			<TextField
				id='outlined-read-only-input'
				label='Monto adeudado'
				defaultValue={`$${order.balanceDue}`}
				InputProps={{
					readOnly: true,
				}}
			/>

			<TextField
				id='outlined-read-only-input'
				label='Fecha de cierre'
				defaultValue={order.dateClosed}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Fecha de ultima actualización'
				defaultValue={order.lastUpdated}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Fecha de la orden'
				defaultValue={order.orderDate}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Pagos totales'
				defaultValue={`$${order.totalPayments}`}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Reembolsos totales'
				defaultValue={`$${order.totalRefunds}`}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Subtotal'
				defaultValue={`$${order.subTotal}`}
				InputProps={{
					readOnly: true,
				}}
			/>
		</Box>
	);
};
