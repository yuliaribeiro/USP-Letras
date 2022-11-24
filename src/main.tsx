import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>
);
