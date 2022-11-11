import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

const ItemTable = ({ rows }) => {
	// console.log(rows);
	return (
		<DataGrid
			columns={[
				{
					field: "productName",
					width: 200,
					headerName: "Product Name",
				},
				{
					field: "category",
					width: 200,
					headerName: "Category",
				},
				{
					field: "productType",
					width: 200,
					headerName: "Product Type",
				},
				{
					field: "price",
					width: 200,
					headerName: "Price",
					valueGetter: (params) => `$${params.row.price}`,
				},
			]}
			rows={rows}
		></DataGrid>
	);
};

const ItemsData = ({ order }) => {
	const items = order.items;
	if (!items) return null;
	const rows = items.map((item, index) => ({ ...item, id: index }));
	console.log(rows);
	return (
		<Box
			sx={{
				height: 400,
				width: "100%",
				padding: 2,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{items && <ItemTable rows={rows} />}
		</Box>
	);
};

export default ItemsData;
