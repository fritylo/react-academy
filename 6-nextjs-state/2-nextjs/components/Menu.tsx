import Link from "next/link";

interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/login">Login</Link>
				</li>
			</ul>
		</nav>
	);
};
