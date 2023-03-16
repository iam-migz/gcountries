import { AiOutlineSearch } from 'react-icons/ai';
import s from '@/styles/SearchBar.module.css';

function SearchBar() {
	return (
		<div className={s.searchbar}>
			<input type="search" name="" id="" placeholder="Search for a country..." />
			<AiOutlineSearch className={s.icon} />
		</div>
	);
}

export default SearchBar;
