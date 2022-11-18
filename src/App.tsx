import { gql, useQuery } from "@apollo/client";
import { LandingPage } from "./components/LandingPage";

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
			<LandingPage />
		</>
	);
}

export default App;
