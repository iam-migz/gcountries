import { IoFilterOutline } from 'react-icons/io5';
import s from '@/styles/FilterBox.module.css';
import Dropdown from './Dropdown';
import Select from './Select';
import { REGIONAL_BLOCS, REGIONS, SUB_REGIONS } from '@/utils/constants';
import { useState } from 'react';

function FilterBox() {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};
	return (
		<Dropdown
			button={
				<button className={s.filterButton}>
					<IoFilterOutline className={s.icon} />
					<span>Filters</span>
				</button>
			}
			content={
				<div className={s.options}>
					<Select title="Regions" data={REGIONS} />
					<Select title="Sub Regions" data={SUB_REGIONS} />
					<Select title="Regional Blocs" data={REGIONAL_BLOCS} />
					<div>
						<p>Independent</p>
						<label className={s.toggle}>
							<input type="checkbox" checked={checked} onChange={handleChange} />
							<span className={s.slider}></span>
						</label>
					</div>
					<div className={s.clearFiltersContainer}>
						<button className={s.clearFilters}>
							<svg viewBox="0 0 10 10" width="10" height="10">
								<line x1="1" y1="1" x2="9" y2="9" stroke="#fff" stroke-width="2" />
								<line x1="1" y1="9" x2="9" y2="1" stroke="#fff" stroke-width="2" />
							</svg>
							Clear Filters
						</button>
					</div>
				</div>
			}
		/>
	);
}

export default FilterBox;
