import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/_index.scss";
import App from "./components/App";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarProvider
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      preventDuplicate
    >
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
