import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { PageProvider } from "./context";
import Content from "./components/Content";
import "./theme.css";

const App = () => {
    return (
        <PageProvider>
            <NavBar />
            <Content />
        </PageProvider>
    );
};

export default App;
