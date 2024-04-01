import { List } from "@/components/List";
import { Menu } from "@/components/Menu";

export default function Home() {
	return (
		<>
			<Menu />
			<main>
				<h1>Home page</h1>
				<List />
			</main>
		</>
	);
}
