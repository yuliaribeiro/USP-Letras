import { gql, useQuery } from "@apollo/client";

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
	const { data } = useQuery<{ articles: Articles[] }>(GET_ARTICLES_QUERY);

	console.log(data);
	return (
		<div>
			<h1 className="temporary">Oh no! This page is under construction...</h1>
			<h3 className="text-2xl">Come back later :)</h3>
			{
				// TODO: Delete
				//Testing API GraphCMS
				/* <ul>
				{data?.articles.map((article) => {
					return <li key={article.id}>{article.title}</li>;
				})}
			</ul> */
			}
		</div>
	);
}

export default App;
