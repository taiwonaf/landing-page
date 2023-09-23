import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
}
const Reveal: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("vissible");
    }
    // console.log("isInView");
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          vissible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        // animate="vissible"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
