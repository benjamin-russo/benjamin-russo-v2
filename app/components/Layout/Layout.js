import { useEffect, useState } from 'react';
import useScrollDirection from '../../hooks/useScrollDirection';
import styled from 'styled-components';
import pxToRem from '../../utils/pxToRem';
import breakpoints from '../../constants/breakpoints';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const StyledLayout = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  min-height: 100vh;
`;

const MainContainer = styled.main``;

const Layout = ({ children }) => {
  const scrollDirection = useScrollDirection();
  return (
    <StyledLayout>
      <Header display={scrollDirection} />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
