import { Counter as CounterAuto } from "./CounterAuto";
import { Counter as CounterClass } from "./CounterClass";
import { Counter as CounterObserver } from "./CounterObserver";

export const App = () => {
	return (
		<>
			<center>
				<img src='/src/assets/logo.svg' width='200' />
			</center>
			<CounterAuto />
			<CounterObserver />
			<CounterClass />
		</>
	);
};
