import { IconButton, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn } from "../icons/fontAwesomeIcons";

export function FooterSection() {
	const listIcons = {
		github: <GitHub />,
		linkedin: <LinkedIn />,
		email: <Email />,
	};
	return (
		<div className="boxFooter">
			<Stack direction="row" alignItems="center" justifyContent="center" spacing={2}>
				<p className="py-2"> Did you like this website? Let's connect!</p>
				{Object.values(listIcons).map((icon, index) => (
					<IconButton key={index} size="small">
						{icon}
					</IconButton>
				))}
			</Stack>
		</div>
	);
}
