interface RowProps {
	text: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Row({ text, checked, onChange }: RowProps) {
	return (
		<div className="w-full flex justify-between items-center h-12 mx-2 my-2">
			<h1>{text}</h1>
			<input
				type="checkbox"
				className="mr-4 h-6 w-6 rounded-lg"
				onChange={onChange}
				checked={checked}
			/>
		</div>
	);
}

export default Row;
