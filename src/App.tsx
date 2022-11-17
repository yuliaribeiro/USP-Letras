import { gql, useQuery } from "@apollo/client";
import { NavBar } from "./components/NavBar";

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
			<NavBar />
			<h1 className="text-5xl text-blue-400 text-center">Oh no! This page is under construction...</h1>
			<h3 className="text-2xl text-center">Come back later :)</h3>
		</>
	);
}

export default App;
