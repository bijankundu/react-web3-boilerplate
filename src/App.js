import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { MoralisProvider } from "react-moralis";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import AppRoutes from "./Routes";
import store from "./store";

const moralisCreds = {
  appId: "",
  serverUrl: "",
  masterKey: "",
};

const App = () => {
  return (
    <Router>
      <ChakraProvider>
        <Provider store={store}>
          <MoralisProvider {...moralisCreds}>
            <AppRoutes />
          </MoralisProvider>
        </Provider>
      </ChakraProvider>
    </Router>
  );
};

export default App;
