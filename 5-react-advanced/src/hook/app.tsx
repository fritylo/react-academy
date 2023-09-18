import { MouseEventHandler, useState } from "react";
import { Counter } from "./components/Counter/Counter";
import { Examples } from "./components/Examples/Examples";

interface IProps {}

export const App: React.FC<IProps> = () => {
	const [isCounterVisible, setIsCounterVisible] = useState(true);

	const handleToggleClick: MouseEventHandler<HTMLButtonElement> = () => {
		setIsCounterVisible((value) => !value);
	};

	return (
		<main className="app app_hook">
			<h2>App Hook</h2>

			<button onClick={handleToggleClick}>Toggle counter</button>

			{isCounterVisible && <Counter />}

			<Examples />
		</main>
	);
};
