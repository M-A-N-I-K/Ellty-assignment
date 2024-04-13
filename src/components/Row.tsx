import { useState } from "react";

interface RowProps {
	text: string;
	checked: boolean;
	onChange: () => void;
}

function Row({ text, checked, onChange }: RowProps) {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		onChange();
	};
	return (
		<div
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={handleClick}
			className="w-full flex cursor-pointer justify-between items-center h-12 mx-2 my-2"
		>
			<h1>{text}</h1>
			<input
				type="checkbox"
				className="mr-4 h-6 w-6 rounded-lg"
				onChange={onChange}
				checked={checked || isHovered}
			/>
		</div>
	);
}

export default Row;
