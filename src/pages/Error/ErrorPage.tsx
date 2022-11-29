import { Grid } from "@mui/material";
import { Link, useRouteError } from "react-router-dom";

export function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Grid container className="dimentionToScreen">
			<Grid item>
				<img className="max-h-195" src="/robot-unsplash-by-Jason-Leung.png"></img>
			</Grid>
			<Grid item sx={{ marginX: "auto" }}>
				<p className="pageErrorTitle">BIP-BOP</p>
				<p className="pageErrorOhNo">Oh no!</p>
				<p className="pageErrorMessage">
					An <span className="text-red-500">error</span> occurred..
				</p>
				<p className="pageErrorGoBack">
					It's better to get back,
					<Link to="/">
						<span className="text-blue-400"> click here</span>
					</Link>
				</p>
			</Grid>
		</Grid>
	);
}
