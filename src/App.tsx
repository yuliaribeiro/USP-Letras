import { gql, useQuery } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

import { theme } from "./styles/reactColorThemes";
import { ThemeProvider } from "@mui/material/styles";

const colorThemesForComponents = theme;

const GET_ARTICLES_QUERY = gql`
	query {
		articles {
			id
			title
			description
		}
	}
`;

function App() {
	//const { data } = useQuery<{ articles: Articles[] }>(GET_ARTICLES_QUERY);

	return (
		<>
			<ThemeProvider theme={colorThemesForComponents}>
				<RouterProvider router={routes} />
			</ThemeProvider>
		</>
	);
}

export default App;
