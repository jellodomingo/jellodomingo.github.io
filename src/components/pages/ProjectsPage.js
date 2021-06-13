import { Container, Row, Col } from "react-bootstrap";
import { GithubLogo } from "../../assets/icons/icons";
import { FadeInFromLeft } from "../Animations";

// TODO: Programmatically create the projects blocks from a json.

const ProjectPage = () => {
    return (
        <Container>
            <FadeInFromLeft>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Random Anime Picker</h3>
                            <p>
                                A small React app written in Typescript using the Jikan API to get a random anime 
                                sorted by season and year. Mainly a practice for frontend development
                                and UI/UX Design. 
                                <br/>
                                <a href ="https://jellodomingo.github.io/random_anime_website/">View Here</a>
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/jellodomingo/random_anime_website";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Personal Website</h3>
                            <p>
                                This personal website is open-source and free to
                                use as a template. Developed using React and
                                hosted on Github Pages as SPA (Single Page
                                Application).
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/jellodomingo/jellodomingo.github.io";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>SugoiFridge</h3>
                            <p>
                                Ever open your refridgerator and wonder what you
                                can make? SugoiFridge can help you with that!
                                SugoiFridge keeps track of what food ingredients
                                are in your fridge. Whenever you don't know what
                                to make, SugoiFridge will suggest recipes based
                                off of the food you have.{" "}
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/jellodomingo/SugoiFridge";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3>Effigy</h3>
                            <p>
                                A 3D horror game run on the Unity Engine. Follow
                                the journey of an unfortunate soul lost in a
                                seemingly endless maze. As you search for a way
                                out, you remember why you're there.... and you
                                may no longer want to leave.{" "}
                            </p>
                            <p>
                                Worked on this project over the course of ten
                                weeks with a group of five team members
                                including myself.
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/richardhsw/HorrorMaze";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3 class="">SleepApp</h3>
                            <p>
                                An iOS application that allows users to keep
                                track of how many hours they sleep every night
                                and give health advice based on it. This
                                application is developed in Swift and uses an
                                Dockerized Flask backend connected to a MySQL
                                server hosted on AWS to serve and store
                                information for each user.
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/jellodomingo/SleepApp";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
                <Container style={{ padding: "50px" }}>
                    <Row>
                        <Col>
                            <h3 class="">Zombie Game</h3>
                            <p>
                                A PC based single player game where players take
                                on the role of Zac Miller. The player must try
                                to survive as long as possible from a zombie
                                horde using a variety of weapons. This is a
                                small Unity game made for a computer game class
                                in college. I am planning to update this game
                                with a fresh look with more mechanics.
                            </p>
                            <GithubLogo
                                width="40"
                                height="40"
                                onClick={() => {
                                    window.location.href =
                                        "https://github.com/jellodomingo/ZombieGame";
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </FadeInFromLeft>
        </Container>
    );
};

export default ProjectPage;
