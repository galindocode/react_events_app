import { Box, Button, TextField } from "@mui/material";

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import SearchResult from "./SearchResult";
import { ClipLoader } from "react-spinners";

export const Home = () => {
	const [search, setSearch] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	const [searchResults, setSearchResults] = React.useState([]);
	const onChange = (e) => {
		setSearch(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		fetch(`/api/customers/find?phoneNumber=${search}`)
			.then((res) => res.json())
			.then((data) => {
				setSearchResults(data);
				setLoading(false);
			});
	};

	return (
		<>
			<Box
				sx={{
					width: "1200px",
					height: "700px",
					backgroundColor: "white",
					borderRadius: "10px",
					padding: "20px",
				}}
			>
				<form className='flex'>
					<TextField
						fullWidth
						id='outlined-search'
						label='Buscar empleado por numero de telefono'
						type='search'
						onChange={onChange}
						value={search}
					/>
					<Button type='submit' onClick={onSubmit}>
						<SearchIcon />
					</Button>
				</form>
				{searchResults.length < 1 || !search ? (
					<div className='flex items-center justify-center w-full h-full'>
						{loading ? (
							<ClipLoader color='#36d7b7' />
						) : (
							<Image
								className='mx-auto w-[300px] h-[300px]'
								src='/undraw_the_search_s0xf.svg'
								alt='Picture of the author'
								width={300}
								height={300}
							/>
						)}
					</div>
				) : (
					<SearchResult results={searchResults} />
				)}
			</Box>
		</>
	);
};
