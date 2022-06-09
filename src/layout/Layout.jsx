import React from "react";
import styled from "styled-components";
import { Navbar } from "../components";

const Grid = styled.div.attrs({
  className:
    "h-1/2 lg:h-screen dark:bg-indigo-950 dark:bg-opacity-80 bg-opacity-5 bg-primary ",
})`
  display: grid;
`;

const Header = styled.div.attrs({
  className: " fixed z-9999",
})``;

const Content = styled.div.attrs({
  className: "px-8",
})`
  margin-top: 4.5em;
`;

const Layout = ({ children }) => {
  return (
    <Grid>
      <Header>
        <Navbar />
      </Header>
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
