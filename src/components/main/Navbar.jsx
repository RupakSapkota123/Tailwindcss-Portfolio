import React, { lazy, Suspense } from "react";
import styled from "styled-components";

import withTheme from "../hoc/withTheme";
import ThemeToggler from "../shared/ThemeToggler";

const NavbarMobile = lazy(() => import("./NavbarMobile"));

const Nav = styled.nav.attrs({
  className:
    " contain flex justify-between items-center z-9999 px-8 dark:border-gray-900 align-center w-100 bg-white text-gray-700 h-60px py-2 fixed w-full shadow-sm dark:bg-indigo-1100",
})``;

const Container = styled.div.attrs({
  className: "container mx-auto py-3 flex justify-between items-center",
})``;

const LogoContainer = styled.div.attrs({
  className: "flex items-center font-poppins font-bold text-xl",
})``;

const NavLinks = styled.div.attrs({
  className:
    "flex items-center gap-70 font-medium text-blackish text-sm cursor-pointer",
})``;

const StyledLink = styled.a.attrs({
  className:
    "hover:text-primary dark:text-white cursor-pointer dark:hover:text-primary",
})``;

const Navbar = ({ theme }) => {
  const isLaptop = window.innerWidth >= 1024;

  return (
    <>
      {isLaptop ? (
        <>
          {/* Intro section  */}

          {/* Navbar */}
          <Nav>
            <Container>
              <LogoContainer>
                <span className="text-blackish cursor-pointer dark:text-white ">
                  Rup
                </span>
                <span className="text-primary cursor-pointer">ak.</span>
              </LogoContainer>
              <NavLinks>
                <StyledLink>My Works</StyledLink>
                <StyledLink>About Me</StyledLink>
                <StyledLink>Get Connected</StyledLink>
              </NavLinks>

              <ThemeToggler />
            </Container>
          </Nav>
        </>
      ) : (
        <Suspense
          fallback={
            <nav className="bg-white h-60px fixed top-0 left-0 w-full shadow-md"></nav>
          }
        >
          <NavbarMobile />
        </Suspense>
      )}
    </>
  );
};

export default withTheme(Navbar);
