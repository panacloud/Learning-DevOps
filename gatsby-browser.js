import ReactDOM from "react-dom";

import "./node_modules/bootstrap/dist/css/bootstrap.css"
import './node_modules/font-awesome/css/font-awesome.min.css';


export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
