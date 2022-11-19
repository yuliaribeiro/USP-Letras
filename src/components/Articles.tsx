import { Button, Grid } from "@mui/material";
import { Article } from "./Article";

export function Articles() {
	return (
		<Grid className="w-screen h-screen">
			<h1 className="pageTitle"> Most recent articles</h1>
			<Grid container sx={{ width: "60%", marginLeft: "auto", marginRight: "auto", paddingBottom: 10 }} rowGap={3}>
				<Grid item sm={12} md={12} lg={6}>
					<Article />
				</Grid>
				<Grid item sm={12} md={12} lg={6}>
					<Article />
				</Grid>
			</Grid>
			<Grid container>
				<Button variant="contained" sx={{ margin: "auto" }} color="success" size="large">
					See all
				</Button>
			</Grid>
		</Grid>
	);
}
