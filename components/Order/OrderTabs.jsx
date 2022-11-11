import React, { useEffect } from "react";
import PrintIcon from "@mui/icons-material/Print";
import { Box, Tabs, Tab, Button } from "@mui/material";

const OrderTabs = ({ setTab, tab }) => {
	useEffect(() => {}, [tab]);
	return (
		<>
			<Box
				sx={{
					borderBottom: 1,
					borderColor: "divider",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Tabs
					value={tab}
					onChange={(e, newValue) => setTab(newValue)}
					aria-label='basic tabs example'
				>
					<Tab label='Order' />
					<Tab label='Customer' />
					<Tab label='Items' />
				</Tabs>
				<Box
					sx={{
						padding: "0.5rem",
					}}
				>
					<Button>
						<PrintIcon />
					</Button>
				</Box>
			</Box>
		</>
	);
};

export default OrderTabs;
