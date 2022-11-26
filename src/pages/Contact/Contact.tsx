import { Grid } from "@mui/material";
import { ContactSection } from "../../components/Contact/ContactSection";
import { NavBarSection } from "../../components/NavBar/NavBarSection";

export default function Contact() {
	return (
		<div className="dimentionToScreen">
			<NavBarSection />
			<Grid container flexDirection="column" alignItems="center">
				<Grid item sx={{ marginBottom: 5 }}>
					<h1 className="landingPageTitle">
						Let's get in <span className="text-blue-400">touch</span>!
					</h1>
				</Grid>
				<Grid item>
					<ContactSection />
				</Grid>
			</Grid>
		</div>
	);
}
