import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const InputSearch = ({ onSearch }) => {
	return (
		<Box
			sx={{
				my: 2,
			}}
		>
			<TextField
				id='outlined-search'
				label='Buscar'
				type='search'
				onChange={onSearch}
			/>
		</Box>
	);
};
