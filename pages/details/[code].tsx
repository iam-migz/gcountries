/* eslint-disable @next/next/no-img-element */
import { Country } from '@/types';
import Image from 'next/image';
import styles from '@/styles/Detail.module.css';

interface Props {
	country: Country;
}

function details({ country }: Props) {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.flag}>
					<img src={country.flag} alt={`flag of ${country.name}`} />
				</div>
				<div className={styles.detail}>
					<h2>{country.name}</h2>
					<div className={styles.info}>
						<ul>
							<li>
								<span>Native Name:</span> {country.name}
							</li>
							<li>
								<span>Other Names:</span> {country.altSpellings?.toString() ?? ''}
							</li>
							<li>
								<span>Demonym:</span> {country.demonym}
							</li>
							<li>
								<span>Currencies:</span> {country.currencies?.map((c) => c.name)}
							</li>
							<li>
								<span>Regional Bloc:</span>{' '}
								{country.regionalBlocs?.length ? country.regionalBlocs.map((m) => m.acronym) : 'None'}
							</li>
						</ul>
						<ul>
							<li>
								<span>Region:</span> {country.region}
							</li>
							<li>
								<span>Subregion:</span> {country.subregion}
							</li>
							<li>
								<span>Capital:</span> {country.capital ?? ''}
							</li>
							<li>
								<span>Population:</span> {country.population}
							</li>
						</ul>
					</div>
					<div className={styles.borders}>
						<h4>Border Countries:</h4>
						<div>{country.borders?.toString()}</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default details;

export const getStaticPaths = async () => {
	const res = await fetch('https://restcountries.com/v2/all?fields=alpha3Code');
	const data = await res.json();
	const paths = data.map((d: Country) => {
		return {
			params: {
				code: d.alpha3Code,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context: any) => {
	const { code } = context.params;
	const res = await fetch(
		`https://restcountries.com/v2/alpha/${code}?fields=name,alpha3Code,capital,altSpellings,subregion,region,population,demonym,borders,nativeName,flag,currencies,regionalBlocs,independent`
	);
	const data = await res.json();
	console.log('data :>> ', data);
	return {
		props: {
			country: data,
		},
	};
};
