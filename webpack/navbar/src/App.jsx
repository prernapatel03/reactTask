import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./Components/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux"

const App = () => (
  <Provider store={store}>

  <div className="container">
    <Navbar name="navbar"/>  
  </div>
  </Provider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)