import { useEffect, useState } from 'react';
import { FILTER_DATA } from '@/utils/constants';
import Dropdown from './Dropdown';
import s from '@/styles/FilterBox.module.css';
import { IoFilterOutline } from 'react-icons/io5';
import { MdClear } from 'react-icons/md';
import { useFilter } from '@/contexts/FilterContext';

function FilterBox() {
	const { region, subRegion, isIndependent, updateFilters } = useFilter();
	const [regionIndex, setRegionIndex] = useState(0);

	const handleClearFilters = () => {
		updateFilters({
			isIndependent: null,
			region: 'None',
			subRegion: 'None',
		});
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
					{/* select for region */}
					<div className={s.selectContainer}>
						<label htmlFor="region">Region</label>
						<select
							name="region"
							id="region"
							onChange={(e) => updateFilters({ region: e.target.value })}
							value={region}
						>
							{FILTER_DATA.map((data) => data.region).map((d) => (
								<option value={d} key={d}>
									{d}
								</option>
							))}
						</select>
					</div>

					{/* select for sub region */}
					<div className={s.selectContainer}>
						<label htmlFor="subregion">Sub Region</label>
						<select
							name="subregion"
							id="subregion"
							onChange={(e) => updateFilters({ subRegion: e.target.value })}
							value={subRegion}
						>
							{FILTER_DATA[regionIndex].subregions.map((d) => (
								<option value={d} key={d}>
									{d}
								</option>
							))}
						</select>
					</div>

					{/* isIndependent Toggle */}
					<div>
						<p>Independent</p>
						<label className={s.toggle}>
							<input
								type="checkbox"
								checked={isIndependent === null ? false : isIndependent}
								onChange={() => updateFilters({ isIndependent: !isIndependent })}
							/>
							<span className={s.slider}></span>
						</label>
					</div>

					{/* Clear Filters */}
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
