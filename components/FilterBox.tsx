import { IoFilterOutline } from 'react-icons/io5';
import s from '@/styles/FilterBox.module.css';
function FilterBox() {
	return (
		<button className={s.filterbox}>
			<IoFilterOutline className={s.icon} />
			<span>Filter</span>
		</button>
	);
}

export default FilterBox;
