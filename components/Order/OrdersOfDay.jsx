import { DataGrid } from "@mui/x-data-grid";

import { columns } from "./data/columns";
import { HashLoader } from "react-spinners";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

const OrdersOfDay = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("/api/orders")
			.then((response) => response.json())
			.then((json) => {
				const rows = json.sort((a, b) =>
					a.orderDate > b.orderDate ? 1 : -1
				);

				setData(rows);
				setLoading(false);
			});
	}, []);

	return (
		<div className='flex items-center h-screen justify-center py-4 bg-gray-100'>
			{loading ? (
				<HashLoader color='#3b82f6' loading={loading} size={50} />
			) : (
				<Box
					sx={{
						width: "90%",
						height: "90%",
					}}
				>
					<DataGrid
						rows={data}
						columns={columns}
						pageSize={20}
						rowsPerPageOptions={[20]}
					/>
				</Box>
			)}
		</div>
	);
};

export default OrdersOfDay;
