import { Grid } from "@mui/material";
import { AboutUs } from "./AboutUs";
import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function LandingPage() {
	return (
		<>
			<Grid className="dimentionToScreen">
				<NavBar />
				<h1 className="landingPageTitle">
					Falantes de <span className=" text-red-500">Russo</span> no <span className="text-blue-400">BR</span>
				</h1>
			</Grid>
			<AboutUs />
			<Grid className="w-screen h-auto">
				<Articles />
			</Grid>
			<Grid>
				<Footer />
			</Grid>
		</>
	);
}
