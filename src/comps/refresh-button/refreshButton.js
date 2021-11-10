import React from "react";
import { ReactComponent as Refresh } from "../../assets/Refresh-Button.svg";

import { motion } from "framer-motion";

import "./refresh-button.css";

const RefreshButton = () => {
  return (
    <motion.div
      whileTap={{ scale: 1.1, y: 5, rotate: 270 }}
      className="refresh-button-wrapper"
    >
      <Refresh onClick={() => console.log("Clicked refresh!")}></Refresh>
    </motion.div>
  );
};

export default RefreshButton;
