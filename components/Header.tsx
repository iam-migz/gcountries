import styles from '@/styles/Header.module.css';

function Header() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>GCountries</h1>
				<nav className={styles.nav}>
					<h3>Browse</h3>
					<h3>Play</h3>
				</nav>
			</header>
		</div>
	);
}

export default Header;
