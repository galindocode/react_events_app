import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
export const columns = [
	{ field: "orderDate", headerName: "Hora y fecha", width: 170 },
	{ field: "orderNumber", headerName: "Order #", width: 170 },
	{
		field: "party",
		headerName: "Event name",
		width: 170,
		valueGetter: (params) => `${params.row.party?.name || ""}`,
	},
	{
		field: "notes",
		headerName: "Event notes",
		width: 170,
		minWidth: 170,
		maxWidth: 1000,
	},
	{
		field: "customerName",
		headerName: "Contact name",
		width: 170,
		valueGetter: (params) => `${params.row.customer?.name || ""}`,
	},
	{
		field: "customerPhone",
		headerName: "Contact phone",
		width: 170,
		valueGetter: (params) => `${params.row.customer?.phoneNumber || ""}`,
	},
	{
		field: "orderTotal",
		headerName: "Order total",
		width: 170,
		valueGetter: (params) =>
			`${params.row.orderTotal ? "$" + params.row.orderTotal : ""}`,
	},
	{
		field: "totalPayments",
		headerName: "Payments total",
		width: 170,
		valueGetter: (params) =>
			`${params.row.totalPayments ? "$" + params.row.totalPayments : ""}`,
	},
	{
		field: "balanceDue",
		headerName: "Balance Due",
		width: 170,
		valueGetter: (params) =>
			`${params.row.balanceDue ? "$" + params.row.balanceDue : ""}`,
	},
	{
		field: "orderId",
		headerName: "Acciones",
		width: 170,
		renderCell: (params) => (
			<div className='flex gap-3'>
				<button className='text-blue-500 hover:text-blue-600 transition-colors duration-200 '>
					<LocalPrintshopIcon />
				</button>
				<button className='text-blue-500 hover:text-blue-600 transition-colors duration-200'>
					<RemoveRedEyeIcon />
				</button>
			</div>
		),
	},
];
