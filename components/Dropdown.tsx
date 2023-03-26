import { ReactElement, useEffect, useRef, useState } from 'react';
import s from '@/styles/Dropdown.module.css';

interface Props {
	button: ReactElement;
	content: ReactElement;
}

const Dropdown = ({ button, content }: Props) => {
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<any>(null);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: any) => {
		setIsOpen(false);
	};

	const handleClickOutside = (event: any) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className={s.dropdown} ref={dropdownRef}>
			<div className={s.dropdownToggle} onClick={handleToggle}>
				{button}
			</div>
			{isOpen && <div className={s.dropdownOptionsContainer}>{content}</div>}
		</div>
	);
};

export default Dropdown;
