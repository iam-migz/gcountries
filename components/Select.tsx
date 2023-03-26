import s from '@/styles/Select.module.css';

interface Props {
	title: string;
	data: string[];
}
const Select = ({ title, data }: Props) => {
	return (
		<div className={s.selectContainer}>
			<label htmlFor={title}>{title}</label>
			<select name={title} id={title}>
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
