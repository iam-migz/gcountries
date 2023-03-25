import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { MdDarkMode, MdSunny } from 'react-icons/md';

interface Props {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

function Header({ isDarkMode, toggleDarkMode }: Props) {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Link href={'/'}>
					<h1>GCountries</h1>
				</Link>
				<nav className={styles.nav} onClick={toggleDarkMode}>
					{isDarkMode ? <MdDarkMode /> : <MdSunny />}
				</nav>
			</div>
		</header>
	);
}

export default Header;
