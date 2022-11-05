import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./data";
import React from "react";

export const Items = ({ order }) => {
	const [rows, setRows] = React.useState(order.items);
	rows.map((row, index) => (row.id = index + 1));

	return (
		<div className='h-[400px] my-4 px-4'>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
			/>
		</div>
	);
};
