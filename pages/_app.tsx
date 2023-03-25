import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prev) => !prev);
	};
	return (
		<>
			<div className={isDarkMode ? 'dark' : ''} id="app">
				<Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
				<Component {...pageProps} />
			</div>
		</>
	);
}
