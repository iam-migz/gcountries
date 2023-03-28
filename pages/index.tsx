import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { Country, FilteredCountry } from '@/types';
import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import FilterBox from '@/components/FilterBox';
import { useEffect, useState } from 'react';
import path from 'path';
import fs from 'fs';
import { useFilter } from '@/contexts/FilterContext';

interface Props {
	countriesOrig: FilteredCountry[];
}

export default function Home({ countriesOrig }: Props) {
	const { region, subRegion, isIndependent } = useFilter();
	const halfLength = Math.ceil(countriesOrig.length / 2);
	const firstHalf = countriesOrig.slice(0, halfLength);
	const secondHalf = countriesOrig.slice(halfLength);

	const [countries, setCountries] = useState(firstHalf);

	const onSearch = (value: string) => {
		if (value.length) {
			const temp = countries.filter((country) => {
				return country.name.trim().toLocaleLowerCase().startsWith(value);
			});
			setCountries(temp);
		} else {
			setCountries(firstHalf);
		}
	};

	useEffect(() => {
		type FilterTypes = Pick<FilteredCountry, 'region' | 'subregion' | 'independent'>;
		const properties: (keyof FilterTypes)[] = [];

		const tempObj: FilterTypes = {
			region,
			subregion: subRegion,
			independent: isIndependent === null ? false : isIndependent,
		};
		if (region !== 'None') {
			properties.push('region');
		}
		if (subRegion !== 'None') {
			properties.push('subregion');
		}
		if (isIndependent !== null) {
			properties.push('independent');
		}

		const final = countriesOrig.filter((country) => properties.every((prop) => country[prop] === tempObj[prop]));

		setCountries(final);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [region, subRegion, isIndependent]);

	return (
		<>
			<Head>
				<title>Browse | GCountries</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.container}>
				<div className={styles.filters}>
					<SearchBar onSearch={onSearch} />
					<FilterBox />
				</div>
				<div className={styles.card_container}>
					{countries && countries.map((c) => <Card key={c.alpha3Code} {...c} />)}
				</div>
			</main>
		</>
	);
}

export const getStaticProps = async () => {
	try {
		const dataFilePath = path.join(process.cwd(), 'public', 'data', 'countries.json');
		const jsonData: Country[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'));

		const propertiesToKeep = [
			'name',
			'alpha3Code',
			'capital',
			'region',
			'subregion',
			'independent',
			'population',
			'flag',
		];

		const filteredData = jsonData.map((country) => {
			const filteredEntries = Object.entries(country).filter(([key]) => propertiesToKeep.includes(key));
			const filteredObject = Object.fromEntries(filteredEntries);
			return filteredObject;
		});

		return {
			props: {
				countriesOrig: filteredData,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			notFound: true,
		};
	}
};
