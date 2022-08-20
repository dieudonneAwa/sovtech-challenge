import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import * as ReactDOMClient from "react-dom/client";

import App from "./App";
import { PeopleProvider } from "./context";
import { GlobalStyles, ResetStyles, theme } from "./global";
import client from "./graphql/client";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <PeopleProvider>
        <App />
      </PeopleProvider>
    </ThemeProvider>
  </ApolloProvider>
);
