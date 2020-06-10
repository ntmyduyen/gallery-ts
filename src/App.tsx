import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Routes } from "./route";
import configureStore from "./redux/store/configureStore";
import { NotificationContainer } from "./components/Notification";

function App() {
  const store = configureStore();
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <Footer />
        <NotificationContainer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
