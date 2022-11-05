import React from "react";
import Box from "@mui/material/Box";

import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { columns } from "./data/data";

const TableComponent = ({ rows, columns }) => {
	rows.map((row) => {
		row.url = `order/${row.orderId}`;
		return row;
	});
	useEffect(() => {}, [rows]);
	return (
		<Box
			sx={{
				height: 500,
				marginTop: "1rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<DataGrid rows={rows} columns={columns} />
		</Box>
	);
};

export const Table = ({ data }) => {
	useEffect(() => {}, [data]);
	return <TableComponent rows={data} columns={columns} />;
};
