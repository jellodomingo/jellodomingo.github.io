import { useContext } from "react";
import { PageContext } from "../context";
import { Container, Row } from "react-bootstrap";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";

const Content = () => {
    const [page] = useContext(PageContext);

    const pages = {
        home: <HomePage />,
        projects: <ProjectPage />,
        about: <AboutPage />,
    };

    return (
        <div class="bg-dark" style={{ height: "100%" }}>
            <Container fluid>
                <Row>{pages[page]}</Row>
            </Container>
        </div>
    );
};

export default Content;
