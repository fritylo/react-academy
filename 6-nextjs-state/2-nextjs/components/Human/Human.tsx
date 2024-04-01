"use client";

interface HumanProps extends React.PropsWithChildren {
	className?: string;
	name: string;

	onNameClick: (name: string) => void;
}

export const HumanView: React.FC<HumanProps> = ({
	className,
	name,
	onNameClick,
}) => {
	return (
		<li className={className} onClick={() => onNameClick(name)}>
			{name}
		</li>
	);
};
