import s from '@/styles/Select.module.css';

interface Props {
	title: string;
	data: string[];
	action: React.Dispatch<React.SetStateAction<string>>;
}
const Select = ({ title, data, action }: Props) => {
	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value;
		action(value);
	};

	return (
		<div className={s.selectContainer}>
			<label htmlFor={title}>{title}</label>
			<select name={title} id={title} onChange={handleChange}>
				{data.map((d) => (
					<option value={d} key={d}>
						{d}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
