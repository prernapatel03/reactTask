import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "navbar/Navbar"
import Home from "navbar/Home"
import store from "./redux/store"

import { Provider } from "react-redux"


import "./index.css";

const App = () => (
  <Provider store={store}>

  <div className="container">
    <Navbar name="app"/>
    {/* <Home /> */}

  </div>
  </Provider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)