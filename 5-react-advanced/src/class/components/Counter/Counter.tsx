import cn from "classnames";
import s from "./Counter.module.scss";

import { Component, ErrorInfo, ReactNode } from "react";

interface IProps {
	className?: string;
}
interface IState {
	value: number;
}

const defaultState: IState = {
	value: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function log(...messages: any[]) {
	console.log('[Class]', ...messages);
}

export class Counter extends Component<IProps, IState> {
	state = defaultState;

	increment() {
		this.setState((state) => ({ value: state.value + 1 }));
	}
	decrement() {
		this.setState((state) => ({ value: state.value - 1 }));
	}

	handlePlusButton: React.MouseEventHandler<HTMLButtonElement> = () => {
		this.increment();
	};
	handleMinusButton: React.MouseEventHandler<HTMLButtonElement> = () => {
		this.decrement();
	};

	componentDidMount(): void {
		log("Did Mount");
	}
	componentDidUpdate(
		prevProps: Readonly<IProps>,
		prevState: Readonly<IState>,
		//snapshot?: any
	): void {
		log("Did Update:", { prevProps, prevState });
	}
	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		log("Did Catch:", { error, errorInfo });
	}
	componentWillUnmount(): void {
		log("Will Unmount");
	}
	shouldComponentUpdate(
		nextProps: Readonly<IProps>,
		nextState: Readonly<IState>,
		//nextContext: any
	): boolean {
		log("Should Update:", { nextProps, nextState });

		return true;
	}

	constructor(props: IProps) {
		super(props);

		this.handlePlusButton.bind(this);
		this.handleMinusButton.bind(this);
	}

	render(): ReactNode {
		return (
			<div className={cn(s.counter, this.props.className)}>
				<span className={cn(s.counter__value)}>{this.state.value}</span>

				<div className={cn(s.counter__buttons)}>
					<button
						className={cn(s.counter__button)}
						onClick={this.handleMinusButton}
					>
						-
					</button>
					<button
						className={cn(s.counter__button)}
						onClick={this.handlePlusButton}
					>
						+
					</button>
				</div>
			</div>
		);
	}
}
