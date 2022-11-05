import React from "react";
import { Box, TextField } from "@mui/material";

export const Customer = ({ order }) => {
	const data = order.customer;
	return (
		<Box
			sx={{
				marginTop: "1rem",
				display: "grid",
				gridTemplateColumns: "repeat(4, 1fr)",
				gridGap: "1rem",
			}}
		>
			{data.cancelDate && (
				<TextField
					id='outlined-read-only-input'
					label='Nombre'
					defaultValue={data.name}
					InputProps={{
						readOnly: true,
					}}
				/>
			)}
			{data.email && (
				<TextField
					id='outlined-read-only-input'
					label='Email'
					defaultValue={data.email.toLowerCase()}
					InputProps={{
						readOnly: true,
					}}
				/>
			)}

			{data.birthDate && (
				<TextField
					id='outlined-read-only-input'
					label='Fecha de nacimiento'
					defaultValue={data.birthDate}
					InputProps={{
						readOnly: true,
					}}
				/>
			)}

			<TextField
				id='outlined-read-only-input'
				label='Número de teléfono'
				defaultValue={data.phoneNumber}
				InputProps={{
					readOnly: true,
				}}
			/>
			<TextField
				id='outlined-read-only-input'
				label='Estado'
				defaultValue={data.active ? "Activo" : "Inactivo"}
				InputProps={{
					readOnly: true,
				}}
			/>
		</Box>
	);
};
