import { Container } from "react-bootstrap";
import BioBlock from "./blocks/BioBlock";
import SkillsBlock from "./blocks/SkillsBlock";

const AboutPage = () => {
    return (
        <Container>
            <BioBlock />
            <SkillsBlock />
        </Container>
    );
};

export default AboutPage;
