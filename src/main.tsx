import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./Theme.ts";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../src/stores/rootReducer.ts";
import { Provider } from "react-redux";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"


const config = configureStore({
  reducer: rootReducer
})

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Provider store={config}>
          <App />
          </Provider>
        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
