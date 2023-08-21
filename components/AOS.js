import { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const AOS = ({ children, repeat = false, xStart = -100, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !repeat });
  const animationControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      animationControl.start("finish");
    } else {
      animationControl.start("start");
    }
  }, [isInView, animationControl]);
  return (
    <motion.div
      ref={ref}
      variants={{
        start: { x: xStart, opacity: 0 },
        finish: { x: 0, opacity: 1 },
      }}
      initial={"start"}
      animate={animationControl}
      transition={{ duration: 0.4, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export const AOS2 = ({ children, repeat = false, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: !repeat });
  const animationControl = useAnimation();
  useEffect(() => {
    if (isInView) {
      animationControl.start("finish");
    } else {
      animationControl.start("start");
    }
  }, [isInView, animationControl]);
  return (
    <motion.div
      ref={ref}
      variants={{
        start: { opacity: 0, scale: 0.5 },
        finish: { opacity: 1, scale: 1 },
      }}
      initial={"start"}
      animate={animationControl}
      transition={{ duration: 0.5, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default AOS;
