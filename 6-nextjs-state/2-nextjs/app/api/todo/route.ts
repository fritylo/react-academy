import path from "path";
import { readData } from "./data";

type Status = 'new' | 'completed';
type Item = {
	title: string,
	description: string,
	status: Status,
};
type Items = Item[];

export async function GET(request: Request) {
	const items = readData<Items>();

	return new Response(JSON.stringify(items), {
		status: 200,
	});
}

export async function POST(request: Request) {
	return new Response(`Endpoint method "${request.method}" not implemented`, {
		status: 502,
	});
}

export async function PUT(request: Request) {
	return new Response(`Endpoint method "${request.method}" not implemented`, {
		status: 502,
	});
}

export async function DELETE(request: Request) {
	return new Response(`Endpoint method "${request.method}" not implemented`, {
		status: 502,
	});
}
