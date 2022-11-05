import React from "react";
import { CustomerApp } from "../../components/Customer/CustomerApp";

export default function index() {
	//return <h1>lo</h1>;
	return (
		<div className='flex items-center h-screen justify-center py-4 bg-gray-100'>
			<CustomerApp />;
		</div>
	);
}
