import { Box, Grid, Pagination } from "@mui/material";
import { Article } from "../../components/Articles/Article";
import { NavBarSection } from "../../components/NavBar/NavBarSection";

export function ArticlesPage() {
	return (
		<div className="max-h-screen">
			<Box sx={{ display: "grid" }}>
				<NavBarSection />
				<h1 className="landingPageTitle">Articles</h1>
			</Box>

			{/*TODO query ALL the articles on H. to show bellow Hint: run a map in the list that will come and pass data as Props for Articles */}
			<Grid container spacing={3} sx={{ marginX: "auto", paddingTop: 9, paddingBottom: 10, width: "90%" }}>
				<Grid item sm={12} md={6} lg={4}>
					<Article />
				</Grid>
				<Grid item sm={12} md={6} lg={4}>
					<Article />
				</Grid>
				<Grid item sm={12} md={6} lg={4}>
					<Article />
				</Grid>
			</Grid>

			{/*TODO: Must finish the pagination when collect data from H. */}
			<Box sx={{ display: "grid", bgcolor: "orange" }}>
				<Pagination count={10} color="standard" size="large" sx={{ marginX: "auto" }} />
			</Box>
		</div>
	);
}
