import { useState } from "react";
import Row from "./components/Row";
import "./index.css";
function App() {
	const [allChecked, setAllChecked] = useState(false);
	const [individualChecked, setIndividualChecked] = useState(
		Array.from({ length: 4 }, (_, i) => false)
	);

	const handleAllCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const isChecked = e.target.checked;
		setAllChecked(isChecked);
		setIndividualChecked(Array(4).fill(isChecked));
	};

	const handleIndividualCheckedChange = (index: number) => {
		const updatedIndividualChecked = [...individualChecked];
		updatedIndividualChecked[index] = !updatedIndividualChecked[index];
		setIndividualChecked(updatedIndividualChecked);
		setAllChecked(updatedIndividualChecked.every((checked) => checked));
	};

	return (
		<>
			<div className="bg-white flex justify-center items-center w-[100vw] h-[100vh]">
				<div className="max-w-lg w-full shadow-[0px_8px_15px_0px_#1414141F] p-4 text-center">
					<div className="w-full flex justify-between items-center border-b border-gray-600 h-12 mx-2 my-2">
						<h1>All Pages</h1>
						<input
							className="mr-4 h-6 w-6 rounded-xl"
							type="checkbox"
							onChange={handleAllCheckedChange}
							checked={allChecked}
						/>
					</div>
					{Array.from({ length: 4 }, (_, i) => (
						<Row
							key={i}
							text={`Page ${i + 1}`}
							checked={individualChecked[i]}
							onChange={() => handleIndividualCheckedChange(i)}
						/>
					))}
					<div className="border-b border-gray-600 w-full mb-4"></div>
					<button className="w-full rounded h-12 bg-[#FFCE22] text-white">
						Done
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
