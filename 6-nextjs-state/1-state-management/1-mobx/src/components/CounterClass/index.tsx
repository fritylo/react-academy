import { observer } from "mobx-react-lite";
import { counter } from "stores/counter-class";

export const Counter: React.FC = observer(() => {
	return (
		<div className='counter'>
			<h2>class Counter</h2>
			<p>{counter.count}</p>
			<div>
				<button onClick={() => counter.increment()}>increment</button>
				<button onClick={() => counter.reset()}>reset</button>
				<button onClick={() => counter.decrement()}>decrement</button>
			</div>
		</div>
	);
});
