import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./Context/ShopContext";



ReactDOM.render(<BrowserRouter> <ShopContextProvider> <App /> </ShopContextProvider> </BrowserRouter>, document.getElementById('root'));