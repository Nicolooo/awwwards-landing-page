import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton';

export default function Description() {  // Renamed component to "Description"
    const phrase = "Empowering brands to shine in the digital era. Together, we’ll redefine the standard—focused, innovative, and always ahead of the curve.";
    const description = useRef(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                    {
                        phrase.split(" ").map((word, index) => (
                            <span key={index} className={styles.mask}>
                                <motion.span
                                    variants={slideUp}
                                    custom={index}
                                    animate={isInView ? "open" : "closed"}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        ))
                    }
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
                    My passion for design, coding, and interaction places me in a unique position within the web design world.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <p>About me</p>
                    </Rounded>
                </div>
            </div>
        </div>
    );
}
