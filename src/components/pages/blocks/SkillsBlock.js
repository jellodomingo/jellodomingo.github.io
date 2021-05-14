import { Container, Row, Col } from "react-bootstrap";
import {
    JavaLogo,
    JavascriptLogo,
    TypescriptLogo,
    PythonLogo,
    CSharpLogo,
    Html5Logo,
} from "../../../assets/icons/icons";
import { FadeInFromRight, FadeInFromLeft } from "../../Animations";

const SkillsBlock = () => {
    return (
        <Container class="bg-white">
            <FadeInFromLeft>
                <Row>
                    <h1 class="display-3 my-3 text-info">Languages</h1>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row
                    className="justify-content-center"
                    style={{ padding: "25px", paddingBottom: "100px" }}
                >
                    <Col sm="auto" md="auto">
                        <JavascriptLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <TypescriptLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <JavaLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <CSharpLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <PythonLogo width="100" height="100" />
                    </Col>
                    <Col sm="auto" md="auto">
                        <Html5Logo width="100" height="100" />
                    </Col>
                </Row>
            </FadeInFromRight>
            <FadeInFromLeft>
                <Row>
                    <h1 class="display-3 my-3 text-info">Technology</h1>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row style={{ padding: "10px" }}>
                    <Col>
                        <h3 class="text-info">Backend</h3>
                        <ul class="display-5 text-info">
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Spring Boot</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 class="text-info">Frontend</h3>
                        <ul class="display-5 text-info">
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Java Server Faces</li>
                        </ul>
                    </Col>
                </Row>
            </FadeInFromRight>
            <FadeInFromLeft>
                <Row style={{ padding: "10px" }}>
                    <Col>
                        <h3 class="text-info">Testing</h3>
                        <ul class="display-5 text-info">
                            <li>Postman</li>
                            <li>Sinon.js</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 class="text-info">Deployment/Hosting</h3>
                        <ul class="display-5 text-info">
                            <li>Linux</li>
                            <li>AWS</li>
                            <li>Docker</li>
                            <li>Tomcat</li>
                        </ul>
                    </Col>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row style={{ padding: "10px", paddingBottom: "200px" }}>
                    <Col>
                        <h3 class="text-info">Database</h3>
                        <ul class="display-5 text-info">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Firebase</li>
                        </ul>
                    </Col>
                    <Col>
                        <h3 class="text-info">Other</h3>
                        <ul class="display-5 text-info">
                            <li>Unity</li>
                            <li>Android Studio</li>
                            <li>React Native</li>
                            <li>XCode</li>
                        </ul>
                    </Col>
                </Row>
            </FadeInFromRight>
        </Container>
    );
};

export default SkillsBlock;
