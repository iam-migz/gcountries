import { useEffect, useState } from 'react';
import { FILTER_DATA } from '@/utils/constants';
import Dropdown from './Dropdown';
import Select from './Select';
import s from '@/styles/FilterBox.module.css';
import { IoFilterOutline } from 'react-icons/io5';
import { MdClear } from 'react-icons/md';

function FilterBox() {
	const [checked, setChecked] = useState(false);
	const [region, setRegion] = useState('None');
	const [regionIndex, setRegionIndex] = useState(0);
	const [subRegion, setSubRegion] = useState('None');

	const handleChange = () => {
		setChecked(!checked);
	};

	const handleClearFilters = () => {
		setChecked(false);
		setRegion('None');
		setSubRegion('None');
	};

	useEffect(() => {
		setRegionIndex(FILTER_DATA.findIndex((d) => d.region === region));
	}, [region]);
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
					<Select title="Regions" data={FILTER_DATA.map((data) => data.region)} action={setRegion} />
					<Select title="Sub Regions" data={FILTER_DATA[regionIndex].subregions} action={setSubRegion} />
					<div>
						<p>Independent</p>
						<label className={s.toggle}>
							<input type="checkbox" checked={checked} onChange={handleChange} />
							<span className={s.slider}></span>
						</label>
					</div>
					<div className={s.clearFiltersContainer} onClick={handleClearFilters}>
						<button className={s.clearFilters}>
							<MdClear />
							Clear Filters
						</button>
					</div>
				</div>
			}
		/>
	);
}

export default FilterBox;
