import React, { createContext, useContext, useState } from 'react';

interface FilterContextType {
	isIndependent: boolean | null;
	region: string;
	subRegion: string;
}

interface ExtendedFilterContextType extends FilterContextType {
	updateFilters: (updatedFilters: Partial<FilterContextType>) => void;
}

const defaultFilterContext: FilterContextType = {
	isIndependent: null,
	region: 'None',
	subRegion: 'None',
};

const FilterContext = createContext<ExtendedFilterContextType>({ ...defaultFilterContext, updateFilters: () => {} });

const useFilter = () => useContext(FilterContext);

interface FilterProviderProps {
	children: React.ReactNode;
}

const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
	const [filters, setFilters] = useState<FilterContextType>(defaultFilterContext);

	const updateFilters = (updatedFilters: Partial<FilterContextType>) => {
		setFilters({ ...filters, ...updatedFilters });
	};

	return <FilterContext.Provider value={{ ...filters, updateFilters }}>{children}</FilterContext.Provider>;
};

export { FilterContext, useFilter, FilterProvider };
