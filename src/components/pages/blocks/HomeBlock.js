import { Col, Row } from "react-bootstrap";
import { GithubLogo, LinkedInLogo } from "../../../assets/icons/icons";
import {
    FadeInFromTop,
    FadeInFromLeft,
    FadeInFromRight,
} from "../../Animations";

const HomeBlock = () => {
    return (
        <div class="heading-3 center text-info">
            <FadeInFromTop>
                <Row>
                    <h3 class="display-4 auto">Angelo Dominic Domingo</h3>
                </Row>
            </FadeInFromTop>
            <FadeInFromLeft>
                <Row>
                    <h3 class="display-6 auto">Full-Stack Software Engineer</h3>
                </Row>
            </FadeInFromLeft>
            <FadeInFromRight>
                <Row>
                    <Col sm={{ span: 2 }} md={{ span: 2, offset: 8 }}>
                        <GithubLogo
                            width="50"
                            height="50"
                            onClick={() => {
                                window.location.href =
                                    "https://github.com/jellodomingo";
                            }}
                        />
                    </Col>
                    <Col sm={{ span: 2 }} md={{ span: 2 }}>
                        <LinkedInLogo
                            style={{ borderRadius: "15px" }}
                            width="50"
                            height="50"
                            onClick={() => {
                                window.location.href =
                                    "https://www.linkedin.com/in/angelo-domingo/";
                            }}
                        />
                    </Col>
                </Row>
            </FadeInFromRight>
        </div>
    );
};

export default HomeBlock;
