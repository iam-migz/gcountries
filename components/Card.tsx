import { Country } from '@/types';
import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Card.module.css';

interface Props {
	country: Country;
}
function Card({ country }: Props) {
	return (
		<div className={styles.card}>
			<Image src={country.flags.svg} alt={country.flag} width={300} height={300} />
			<div>
				<h3>{country.name.common}</h3>
				<ul>
					<li>
						<span>Population: </span>
						{country.population}
					</li>
					<li>
						<span>Region: </span>
						{country.region ?? '-'}
					</li>
					<li>
						<span>Capital: </span>
						{country.capital ?? '-'}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Card;
