import { Component, MouseEventHandler, ReactNode } from "react";
import { Counter } from "./components/Counter/Counter";

interface IProps {}
interface IState {
	isCounterVisible: boolean;
}

const defaultState: IState = { isCounterVisible: true };

export class App extends Component<IProps, IState> {
	state = defaultState;

	constructor(props: IProps) {
		super(props);
	}

	handleToggleClick: MouseEventHandler<HTMLButtonElement> = () => {
		this.setState((state) => ({
			isCounterVisible: !state.isCounterVisible,
		}));
	};

	render(): ReactNode {
		return (
			<main className="app app_class">
				<h2>App Class</h2>

				<button onClick={this.handleToggleClick}>Toggle counter</button>

				{this.state.isCounterVisible && <Counter />}
			</main>
		);
	}
}
