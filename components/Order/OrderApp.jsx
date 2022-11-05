import React from "react";
import { Box, Button } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import { Customer } from "./Customer";
import { Items } from "./Items";
import { Order } from "./Order";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const itemsHashTable = {
	0: (order) => <Order order={order} />,
	1: (order) => <Items order={order} />,
	2: (order) => <Customer order={order} />,
};

export const OrderApp = ({ order }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box
			sx={{
				width: "1200px",
				height: "700px",
				backgroundColor: "white",
				borderRadius: "10px",
				padding: "20px",
			}}
		>
			<Link href='/'>
				<Button
					sx={{
						marginBottom: "1rem",
					}}
				>
					<ArrowBackIcon />
					&nbsp;Volver
				</Button>
			</Link>
			<Tabs value={value} onChange={handleChange}>
				<Tab label='Orden' />
				<Tab label='Items' />
				<Tab label='Cliente' />
			</Tabs>
			{itemsHashTable[value](order)}
		</Box>
	);
};
