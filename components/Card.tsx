import Image from 'next/image';
import React from 'react';
import styles from '@/styles/Card.module.css';
import Link from 'next/link';
import { formatNumber } from '@/utils';

interface Props {
	name: string;
	alpha3Code: string;
	population: number;
	region: string;
	capital?: string;
	flag: string;
}

function Card({ name, alpha3Code, population, region, capital, flag }: Props) {
	return (
		<Link href={`/details/${alpha3Code}`}>
			<div className={styles.card}>
				<Image src={flag} alt={`flag of ${name}`} width={300} height={200} priority />
				<div>
					<h3>{name}</h3>
					<ul>
						<li>
							<span>Population: </span>
							{formatNumber(population) ?? '-'}
						</li>
						<li>
							<span>Region: </span>
							{region ?? '-'}
						</li>
						<li>
							<span>Capital: </span>
							{capital ?? '-'}
						</li>
					</ul>
				</div>
			</div>
		</Link>
	);
}

export default Card;
