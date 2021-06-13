import { Container, Row, Col, Image } from "react-bootstrap";
import Profile from "../../../assets/sample.jpg";
import {
    FadeInFromLeft,
    FadeInFromRight,
} from "../../Animations";

const BioBlock = () => {
    return (
        <Container style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            <FadeInFromRight>
                <Row>
                    <h1 class="display-3 my-3 text-info">About Me</h1>
                </Row>
            </FadeInFromRight>
            <Row>
                <Col md={4}>
                    <FadeInFromLeft>
                        <Row>
                            <Image src={Profile} roundedCircle fluid />
                        </Row>
                    </FadeInFromLeft>
                </Col>

                <Col md={8}>
                    <FadeInFromRight>
                        <Container style={{ padding: "50px" }}>
                            <Row>
                                <p
                                    class="text-light"
                                    style={{ fontSize: "1.4em" }}
                                >
                                    I am a Los Angeles-based Software Engineer
                                    who specializes in full-stack web
                                    development.
                                    <br />
                                    <br />
                                    When I am not coding, I try to learn other
                                    technologies, draw, produce music, study
                                    Japanese, or work on fun and quick side
                                    projects.
                                </p>
                            </Row>
                            <Row style={{ padding: "10px" }}>
                                <p class="text-light">
                                    Graduated from the University of California
                                    ,Irvine
                                    <br />
                                    2016-2020
                                    <br />
                                    Majored in Computer Science
                                </p>
                            </Row>
                        </Container>
                    </FadeInFromRight>
                </Col>
            </Row>
        </Container>
    );
};

export default BioBlock;
