import { Human } from "./Human/Human.hoc";

interface ListProps {}

type TResponse = {
	results: THuman[];
}
type THuman = {
	name: string;
};

export const List: React.FC<ListProps> = async () => {
	const json = await fetch("https://swapi.dev/api/people").then((res) =>
		res.json()
	) as TResponse;

	const people = json.results;

	return (
		<nav>
			<ul>
				{people.map((human, i) => (
					<Human name={human.name} key={i} />
				))}
			</ul>
		</nav>
	);
};
