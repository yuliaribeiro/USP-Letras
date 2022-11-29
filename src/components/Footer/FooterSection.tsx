import { IconButton, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn } from "../icons/fontAwesomeIcons";

export function FooterSection() {
	const listIcons = [
		{
			icon: <GitHub />,
			url: "https://github.com/yuliaribeiro",
		},
		{
			icon: <LinkedIn />,
			url: "https://www.linkedin.com/in/juliana-ribeiro-039883220/",
		},
		{
			icon: <Email />,
			url: "mailto:lutchenikova@gmail.com",
		},
	];

	const handleClick = (url: string) => {
		window.open(url, "_blank");
	};

	return (
		<div className="boxFooter">
			<Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
				<p className="py-2"> Did you like this website? Let's connect!</p>
				{Object.values(listIcons).map((item, index) => (
					<IconButton key={index} size="small" onClick={() => handleClick(item.url)}>
						{item.icon}
					</IconButton>
				))}
			</Stack>
		</div>
	);
}
