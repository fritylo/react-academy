import { makeObservable, observable, action, makeAutoObservable } from "mobx";

class Counter {
	count: number;

	constructor(count: number) {
		makeObservable(this, {
			count: observable,
			increment: action,
			decrement: action,
			reset: action,
		});
		this.count = count;
	}

	increment() {
		this.count++;
	}

	decrement() {
		this.count--;
	}

	reset() {
		this.count = 0;
	}
}

export const counter = new Counter(0);
