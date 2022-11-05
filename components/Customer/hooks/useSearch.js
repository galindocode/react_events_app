export const useSearch = ({ event, setData, data, optionToSearch }) => {
	const value = event.target.value.toLowerCase();
	const filteredData = data.filter((item) => {
		item[optionToSearch] = item[optionToSearch] || "";
		return item[optionToSearch].toLowerCase().includes(value);
	});
	setData(filteredData);
};
