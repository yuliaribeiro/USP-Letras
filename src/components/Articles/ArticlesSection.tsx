import { Link } from "react-router-dom";
import { Article } from "./Article";
import { Button, Grid } from "@mui/material";

export function ArticlesSection() {
	return (
		<>
			<h1 className="pageTitle"> Most recent articles</h1>
			<Grid container spacing={2} sx={{ marginLeft: "auto", marginRight: "auto", paddingBottom: 10, width: "60%" }}>
				{/*TODO query only last 2 articles on H. to show bellow */}

				<Grid item sm={12} md={12} lg={6}>
					<Article />
				</Grid>
				<Grid item sm={12} md={12} lg={6}>
					<Article />
				</Grid>
			</Grid>

			<Grid container sx={{ marginBottom: 15 }}>
				<Button
					color="error"
					size="large"
					sx={{
						borderRadius: 5,
						fontFamily: "montserrat",
						fontWeight: "bold",
						margin: "auto",
						":hover": {
							bgcolor: "lightRed.main",
						},
					}}
					variant="contained"
				>
					<Link to="/articles">See all</Link>
				</Button>
			</Grid>
		</>
	);
}
