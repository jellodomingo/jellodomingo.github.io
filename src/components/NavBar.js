import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { PageContext } from "../context";

const NavBar = () => {
    const [, setPage] = useContext(PageContext);
    return (
        <div class="bg-dark">
            <div class="container justify-content-center">
                <Nav
                    activeKey="/home"
                    class="navbar navbar-expand-md bg-black navbar-dark"
                    style={{ height: "10vh" }}
                >
                    <Nav.Item class="nav-item mx-2">
                        <Nav.Link
                            class="nav-link"
                            eventKey="/home"
                            onClick={() => setPage("home")}
                        >
                            Home
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item class="nav-item mx-2">
                        <Nav.Link
                            class="nav-link"
                            eventKey="/about"
                            onClick={() => setPage("about")}
                        >
                            About
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item class="nav-item mx-2">
                        <Nav.Link
                            class="nav-link"
                            eventKey="/projects"
                            onClick={() => setPage("projects")}
                        >
                            Projects
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};

export default NavBar;
