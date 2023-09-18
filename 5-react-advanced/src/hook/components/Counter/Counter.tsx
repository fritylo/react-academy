import cn from "classnames";
import s from "./Counter.module.scss";

import { MouseEventHandler, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(...messages: any[]) {
	console.log("[Hook]", ...messages);
}

interface IProps {
	className?: string;
}

export const Counter: React.FC<IProps> = ({ className }) => {
	const [value, setValue] = useState(0);

	const increment = () => {
		setValue((state) => state + 1);
	};
	const decrement = () => {
		setValue((state) => state - 1);
	};

	const handlePlusButton: MouseEventHandler<HTMLButtonElement> = () => {
		increment();
	};
	const handleMinusButton: MouseEventHandler<HTMLButtonElement> = () => {
		decrement();
	};

	useEffect(() => {
		log("Did Mount");

		return () => {
			log("Will Unmount");
		};
	});

	return (
		<div className={cn(s.counter, className)}>
			<span className={cn(s.counter__value)}>{value}</span>

			<div className={cn(s.counter__buttons)}>
				<button
					className={cn(s.counter__button)}
					onClick={handleMinusButton}
				>
					-
				</button>
				<button
					className={cn(s.counter__button)}
					onClick={handlePlusButton}
				>
					+
				</button>
			</div>
		</div>
	);
};
