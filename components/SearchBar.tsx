import { AiOutlineSearch } from 'react-icons/ai';
import s from '@/styles/SearchBar.module.css';

interface Props {
	onSearch: (value: string) => void;
}

function SearchBar({ onSearch }: Props) {
	return (
		<div className={s.searchbar}>
			<input
				type="search"
				name=""
				id=""
				placeholder="Search for a country..."
				onChange={(e) => onSearch(e.target.value)}
			/>
			<AiOutlineSearch className={s.icon} />
		</div>
	);
}

export default SearchBar;
