import { observable } from "mobx";

export const counter = observable({
	count: 0,
	increment() {
		this.count++;
	},
	decrement() {
		this.count--;
	},
	reset() {
		this.count = 0;
	},
});
