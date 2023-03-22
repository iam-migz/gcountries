import { AiOutlineSearch } from 'react-icons/ai';
import s from '@/styles/SearchBar.module.css';
import { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';

interface Props {
	onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: Props) {
	const [searchValue, setSearchValue] = useState('');

	const debouncedValue = useDebounce(searchValue);

	useEffect(() => {
		onSearch(debouncedValue.trim());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedValue]);

	return (
		<div className={s.searchbar}>
			<input
				type="search"
				placeholder="Search for a country..."
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			<AiOutlineSearch className={s.icon} />
		</div>
	);
}

export default SearchBar;
