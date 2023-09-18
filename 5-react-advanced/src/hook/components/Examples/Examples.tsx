import cn from "classnames";
import s from "./Examples.module.scss";

import { useCallback, useMemo, useReducer, useRef, useState } from "react";

interface IProps {
	className?: string;
}

export const Examples: React.FC<IProps> = ({ className }) => {
	return (
		<div className={cn(s.examples, className)}>
			<center>
				<h3>Examples</h3>
			</center>

			<Example1 />
			<Example2 />
			<Example3 />
			<Example4 />
		</div>
	);
};

const Example1: React.FC = () => {
	const [count, setCount] = useState(0);

	const handleButtonClick = () => {
		setCount(count + 1);
		setCount(count + 1);
	};

	return (
		<button onClick={handleButtonClick}>Increment twice "{count}"</button>
	);
};

const Example2: React.FC = () => {
	const [visible, setVisible] = useState(false);
	const [, forceUpdate] = useReducer((v) => v + 1, 0);

	// useCallback и новый реф каждый ререндер https://youtu.be/MLWsLn_jeGc?si=63ENCinzJVH43MQ5
	const pRef = (element: HTMLElement | null) => {
		console.log("Element:", element);
	};

	const handleToggleClick = () => {
		setVisible((v) => !v);
	};

	return (
		<div>
			<button onClick={forceUpdate}>Rerender</button>
			<button onClick={handleToggleClick}>Toggle</button>
			{visible && <p ref={pRef}>Hello, World!</p>}
		</div>
	);
};

type Handler = () => void;

const Example3: React.FC = () => {
	const refHandler1 = useRef<Handler | null>(null);
	const refHandler2 = useRef<Handler | null>(null);
	const refHandler3 = useRef<Handler | null>(null);

	const handler1 = () => {};
	const handler2 = useMemo(() => () => {}, []);
	const handler3 = useCallback(() => {}, []);

	//const foo = () => {};
	//const handler4 = useMemo(() => foo, []);
	//const handler5 = useCallback(foo, []);

	const isSameHandler1 = refHandler1.current === handler1;
	const isSameHandler2 = refHandler2.current === handler2;
	const isSameHandler3 = refHandler3.current === handler3;

	refHandler1.current = handler1;
	refHandler2.current = handler2;
	refHandler3.current = handler3;

	console.log({
		isSameHandler1,
		isSameHandler2,
		isSameHandler3,
	});

	const [, dispatch] = useReducer((v) => v + 1, 0);

	return <button onClick={dispatch}>Click me</button>;
};

const Example4: React.FC = () => {
	// @see https://youtu.be/yEPukn2rS28?si=diuKEpyx9Ixi9aPv

	console.log("Render Parent");

	const [, rerender] = useReducer((v) => v + 1, 0);

	const changeParentState = () => rerender(); // TODO: Add useCallback

	return (
		<div>
			<button onClick={rerender}>Rerender Parent</button>

			<Example4_Child changeParentState={changeParentState} />
		</div>
	);
};
const Example4_Child: React.FC<{ changeParentState: () => void }> = ({ // TODO: Add memo
	changeParentState,
}) => {
	console.log("Render Child");

	return <button onClick={changeParentState}>Change Parent State</button>;
};
