import fs from "fs";
import path from "path";

export const dataPath = path.join(
	process.cwd(),
	"app",
	"api",
	"todo",
	"data.json"
);

export function readData<T extends object[]>() {
	return JSON.parse(fs.readFileSync(dataPath).toString()) as T;
}

export function writeData<T extends object[]>(data: T) {
	fs.writeFileSync(dataPath, JSON.stringify(data));
}
