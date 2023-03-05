export interface Country {
	name: Name;
	independent?: boolean;
	unMember: boolean;
	capital?: string[];
	altSpellings: string[];
	region: Region;
	subregion?: string;
	languages?: { [key: string]: string };
	borders?: string[];
	flag: string;
	maps: Maps;
	population: number;
	fifa?: string;
	timezones: string[];
	continents: Continent[];
	flags: Flags;
	coatOfArms: CoatOfArms;
}

export interface CoatOfArms {
	png?: string;
	svg?: string;
}

export enum Continent {
	Africa = 'Africa',
	Antarctica = 'Antarctica',
	Asia = 'Asia',
	Europe = 'Europe',
	NorthAmerica = 'North America',
	Oceania = 'Oceania',
	SouthAmerica = 'South America',
}

export interface Flags {
	png: string;
	svg: string;
	alt?: string;
}

export interface Maps {
	googleMaps: string;
	openStreetMaps: string;
}

export interface Name {
	common: string;
	official: string;
	nativeName?: { [key: string]: Translation };
}

export interface Translation {
	official: string;
	common: string;
}

export enum Region {
	Africa = 'Africa',
	Americas = 'Americas',
	Antarctic = 'Antarctic',
	Asia = 'Asia',
	Europe = 'Europe',
	Oceania = 'Oceania',
}
