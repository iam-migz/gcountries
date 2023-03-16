import styles from '@/styles/Header.module.css';
import Link from 'next/link';

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link href={'/'}>
					<h1>GCountries</h1>
				</Link>
				<nav className={styles.nav}>
					<h3>Browse</h3>
					<h3>Play</h3>
				</nav>
			</div>
		</header>
	);
}

export default Header;
