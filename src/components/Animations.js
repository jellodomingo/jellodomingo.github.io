import VisibilitySensor from "./VisibilitySensor";
import { Spring, animated } from "react-spring";

const FadeInFromRight = ({ children }) => {
    return (
        <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
                <Spring
                    delay={150}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateX(0)"
                            : "translateX(200px)",
                    }}
                >
                    {(styles) => (
                        <animated.div style={styles}>{children}</animated.div>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    );
};

const FadeInFromLeft = ({ children }) => {
    return (
        <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
                <Spring
                    delay={150}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateX(0)"
                            : "translateX(-200px)",
                    }}
                >
                    {(styles) => (
                        <animated.div style={styles}>{children}</animated.div>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    );
};

const FadeIn = ({ children }) => {
    return (
        <VisibilitySensor once>
            {({ isVisible }) => (
                <Spring
                    delay={150}
                    to={{
                        opacity: isVisible ? 1 : 0,
                    }}
                >
                    {(styles) => (
                        <animated.div style={styles}>{children}</animated.div>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    );
};

const FadeInFromTop = ({ children }) => {
    return (
        <VisibilitySensor once>
            {({ isVisible }) => (
                <Spring
                    delay={150}
                    to={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                            ? "translateY(0)"
                            : "translateY(-100px)",
                    }}
                >
                    {(styles) => (
                        <animated.div style={styles}>{children}</animated.div>
                    )}
                </Spring>
            )}
        </VisibilitySensor>
    );
};

export { FadeInFromRight, FadeInFromLeft, FadeIn, FadeInFromTop };
