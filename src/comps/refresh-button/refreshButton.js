import React, { useState } from "react";
import { ReactComponent as Refresh } from "../../assets/Refresh-Button.svg";

import { motion } from "framer-motion";

import "./refresh-button.css";

const RefreshButton = () => {
  const [rotateAnimation, setRotateAnimation] = useState(false);

  const variants = {
    go: { scale: 1, y: 0, rotate: 0 },
    stop: { scale: 1.1, y: 5, rotate: 360 },
  };

  return (
    <motion.div
      variants={variants}
      animate={rotateAnimation ? "go" : "stop"}
      className="refresh-button-wrapper"
    >
      <Refresh
        onClick={() => {
          setRotateAnimation(true);
          setTimeout(() => {
            setRotateAnimation(false);
          }, 600);
        }}
      ></Refresh>
    </motion.div>
  );
};

export default RefreshButton;
