import React from "react";

const FadeIn = ({ view = "-200px", yvalue = 20, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yvalue }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: `100% 0px ${view} 0px` }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
