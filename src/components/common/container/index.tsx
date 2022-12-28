import React from "react";
import { ContainerProps } from "@mui/material";
import Container from "@mui/material/Container";

interface IProps extends ContainerProps {}

const AppContainer: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <Container maxWidth={false} fixed {...props}>
      {children}
    </Container>
  );
};

export default AppContainer;
