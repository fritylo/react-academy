import { Observer } from "mobx-react-lite";
import { counter } from "stores/counter-auto";

export const Counter: React.FC = () => {
	return (
		<Observer>
			{() => (
				<div className='counter'>
					<h2>makeAutoObservable Counter</h2>
					<p>{counter.count}</p>
					<div>
						<button onClick={() => counter.increment()}>
							increment
						</button>
						<button onClick={() => counter.reset()}>reset</button>
						<button onClick={() => counter.decrement()}>
							decrement
						</button>
					</div>
				</div>
			)}
		</Observer>
	);
};

