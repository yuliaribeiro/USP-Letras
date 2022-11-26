import { gql, useQuery } from "@apollo/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";

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
			<RouterProvider router={routes} />
		</>
	);
}

export default App;
