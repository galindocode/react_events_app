import { Tab, Tabs, Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { Table } from "../Customer/Table";

// export default function ({ results }) {
// 	const [value, setValue] = React.useState(0);

// 	const handleChange = (event, newValue) => {
// 		setValue(newValue);
// 	};
// 	return (
// 		<>
// 			<Box
// 				sx={{
// 					borderBottom: 1,
// 					borderColor: "divider",
// 					marginTop: "0.5rem",
// 				}}
// 			>
// 				<Tabs
// 					value={value}
// 					onChange={handleChange}
// 					aria-label='basic tabs example'
// 				>
// 					<Tab label='Cliente' />
// 					<Tab label='Orden' />
// 					<Tab label='Items de la orden' />
// 				</Tabs>
// 			</Box>
// 			<TabPanel value={value} index={0}>
// 				Item One
// 			</TabPanel>
// 			<TabPanel value={value} index={1}>
// 				Item Two
// 			</TabPanel>
// 			<TabPanel value={value} index={2}>
// 				Item Three
// 			</TabPanel>
// 		</>
// 	);
// }

export default function ({ results }) {
	useEffect(() => {}, [results]);
	return (
		<Box>
			{results.data && results.data.length > 0 ? (
				<Table data={results.data} />
			) : (
				"No hay resultados"
			)}
		</Box>
	);
}
