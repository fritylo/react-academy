import { makeAutoObservable } from "mobx";

export const counter = makeAutoObservable({
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
