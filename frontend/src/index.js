import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux"; /* //!MIRAR */
import store from "./store";

//!ALERT-ERROR - NO SE SI HACE FALTA
import { positions, transitions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//!ALERT-ERROR - NO SE SI HACE FALTA
const options = {
  timeout: 5000,
  positions: positions.BOTTOM_CENTER, //! import de react-alert
  transition: transitions.SCALE, //! import de react-alert
};

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* //!ALERT-ERROR - NO SE SI HACE FALTA */}
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("root")
);
