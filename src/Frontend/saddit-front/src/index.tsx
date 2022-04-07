import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Auth0ProviderWithHistory from "./components/auth/auth0-provider-with-history";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ChakraProvider>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </ChakraProvider>
    </BrowserRouter>
  </Provider>,
  rootElement
);
