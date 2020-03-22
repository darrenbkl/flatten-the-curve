import React from "react";
import Typography from "@material-ui/core/Typography";

const Paragraph = ({ children }) => {
  return (
    <Typography variant="body1" component="p" gutterBottom>
      {children}
    </Typography>
  );
};

export default Paragraph;