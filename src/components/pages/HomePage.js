import { Container, Row } from "react-bootstrap";
import HomeBlock from "./blocks/HomeBlock";

const HomePage = () => {
    return (
        <Container class="center">
            <Row>
                <HomeBlock />
            </Row>
        </Container>
    );
};

export default HomePage;
