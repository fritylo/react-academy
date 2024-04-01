'use client';

import { HumanView } from "./Human";

interface HumanProps extends React.PropsWithChildren {
	className?: string;
	name: string;
};

export const Human: React.FC<HumanProps> = ({ className, name }) => {
	const handleClick = () => {
		console.log(`Has clicked name: ${name}`);
	};

	return (
		<HumanView
			className={className}
			name={name}
			onNameClick={handleClick}
		/>
	);
};

