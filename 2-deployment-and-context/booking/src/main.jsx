import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

// Mantine CSS Imports
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/spotlight/styles.css";
import "./global.css";
import App from "./App";
import { BookingProvider } from "./components/BookingContext";

// Render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookingProvider>
    <App />
    </BookingProvider>
  </StrictMode>
);
