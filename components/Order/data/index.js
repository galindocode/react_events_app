export const columns = [
	{
		field: "id",
		headerName: "Id",
		width: 20,
	},
	{
		field: "productName",
		headerName: "Nombre del producto",
		width: 280,
	},
	{
		field: "category",
		headerName: "Categoria",
		width: 200,
	},
	{
		field: "price",
		headerName: "Precio",
		width: 100,
		valueGetter: (params) => `$${params.row.price || ""}`,
	},
	{
		field: "tax",
		headerName: "Impuesto",
		width: 100,
		valueGetter: (params) => `$${params.row.tax || ""}`,
	},
	{
		field: "discount",
		headerName: "Descuento",
		width: 120,
		valueGetter: (params) => `${"$" + params.row.discount || ""}`,
	},
	{
		field: "quantity",
		headerName: "Cantidad",
		width: 120,
	},
];
