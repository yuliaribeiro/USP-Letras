import { IconButton, Stack } from "@mui/material";
import { Email, GitHub, LinkedIn } from "../icons/fontAwesomeIcons";

export function Footer() {
	return (
		<>
			<footer className="boxFooter">
				<Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
					<p className="py-2"> Did you like this website? Let's connect!</p>
					<IconButton size="small">
						<GitHub />
					</IconButton>
					<IconButton size="small">
						<LinkedIn />
					</IconButton>
					<IconButton size="small">
						<Email />
					</IconButton>
				</Stack>
			</footer>
		</>
	);
}
