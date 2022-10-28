import { useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import styled from 'styled-components';
import pxToRem from '../../utils/pxToRem';
import breakpoints from '../../constants/breakpoints';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const StyledLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

const MainContainer = styled.main`
  position: relative;
  padding-top: ${pxToRem(130.15)};
  @media ${breakpoints.laptopL} {
    padding-top: ${pxToRem(190.61)};
  }
  @media ${breakpoints.laptop} {
    padding-top: ${pxToRem(100.15)};
  }
`;

const Layout = ({ children }) => {
  const scrollDirection = useScrollDirection();
  return (
    <StyledLayout>
      <Header display={scrollDirection} />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
