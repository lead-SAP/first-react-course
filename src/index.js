import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
//Below imports the default export
//import FavouritesContextProvider  from "./store/favourites-context";
//Below imports instead the  component other than the default export
import { FavouritesContextProvider } from "./store/favourites-context";

ReactDOM.render(
  <FavouritesContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavouritesContextProvider>,
  document.getElementById("root")
);