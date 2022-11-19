import { Grid } from "@mui/material";
import { AboutUs } from "./AboutUs";
import { Articles } from "./Articles";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";

export function LandingPage() {
	return (
		<>
			<Grid className="h-screen w-screen">
				<NavBar />
				<h1 className="landingPageTitle">
					Falantes de <span className=" text-red-500">Russo</span> no <span className="text-blue-400">BR</span>
				</h1>
				<h3 className="text-2xl text-center text-violet-500"> Oh no... Come back later, we are underconstruction :)</h3>
			</Grid>
			<AboutUs />
			<Articles />
			<Footer />
		</>
	);
}
