import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Button } from "@mui/material";

export const parseDate = (date) => {
	const d = new Date(date);
	return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};

export const columns = [
	{ field: "name", headerName: "Nombre", width: 180 },

	{
		field: "accountStatus",
		headerName: "Estado de la cuenta",
		width: 200,
		renderCell: (params) => {
			return (
				<>
					{params.row.accountStatus === "Active" ? (
						<span className='py-1 cursor-default mx-2 bg-green-500 rounded-xl text-white px-3'>
							Activo
						</span>
					) : (
						<span>Inactivo</span>
					)}
				</>
			);
		},
	},
	{
		field: "email",
		headerName: "Correo",
		width: 200,
		valueGetter: (params) => `${params.row.email || ""}`,
	},
	{
		field: "phoneNumber",
		headerName: "Número Teléfono",
		width: 160,
		valueGetter: (params) =>
			`${params.row.phoneNumber ? params.row.phoneNumber : "N/A"}`,
	},
	{
		field: "action",
		headerName: "Acciones",
		width: 160,
		renderCell: (params) => (
			<Link
				href={params.row.url ? params.row.url : "#"}
				className=' px-2 py-1 rounded-md text-blue-500 hover:text-blue-600 transition-colors duration-200'
			>
				<VisibilityIcon
					sx={{
						cursor: "pointer",
					}}
				/>
				&nbsp;Ver Orden
			</Link>
		),
	},
];
