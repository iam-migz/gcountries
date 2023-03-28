import { FilterProperties } from '@/types';
import React, { createContext, useContext, useState } from 'react';

interface ExtendedFilterContextType extends FilterProperties {
	updateFilters: (updatedFilters: Partial<FilterProperties>) => void;
}

const defaultFilterContext: FilterProperties = {
	independent: true,
	region: 'None',
	subregion: 'None',
};

const FilterContext = createContext<ExtendedFilterContextType>({ ...defaultFilterContext, updateFilters: () => {} });

const useFilter = () => useContext(FilterContext);

interface FilterProviderProps {
	children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const [filters, setFilters] = useState<FilterProperties>(defaultFilterContext);

	const updateFilters = (updatedFilters: Partial<FilterProperties>) => {
		setFilters({ ...filters, ...updatedFilters });
	};

	return <FilterContext.Provider value={{ ...filters, updateFilters }}>{children}</FilterContext.Provider>;
};

export { FilterContext, useFilter, FilterProvider };
