import { gql, useQuery } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";

const GET_ARTICLES_QUERY = gql`
	query {
		articles {
			id
			title
			description
		}
	}
`;

interface Articles {
	id: string;
	title: string;
	description: string;
}

function App() {
	//const { data } = useQuery<{ articles: Articles[] }>(GET_ARTICLES_QUERY);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
