import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import pxToRem from '../../utils/pxToRem';

import BurgerIcon from '../../images/icons/burger.svg';
import CloseIcon from '../../images/icons/close.svg';

export const StyledHeader = styled.header`
  z-index: 100;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${pxToRem(50)} ${pxToRem(100)};
  transition: all 0.2s ease;
  @media ${breakpoints.tablet} {
    padding: ${pxToRem(50)};
  }
`;

export const Navbar = styled.nav`
  gap: ${pxToRem(75)};
  display: flex;
  align-items: center;
  @media ${breakpoints.laptop} {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: ${({ display }) => (display ? 'flex' : 'none')};
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: ${pxToRem(200)};
    background-color: ${({ theme }) => theme.colors.black80};
  }
`;

export const MenuBurger = styled.button`
  position: relative;
  display: none;
  background-color: initial;
  padding: initial;
  width: ${pxToRem(40)};
  height: ${pxToRem(40)};
  border: initial;
  cursor: pointer;
  @media ${breakpoints.laptop} {
    display: flex;
  }
`;

export const NavItems = styled.div`
  gap: ${pxToRem(75)};
  align-items: center;
  display: flex;
  @media ${breakpoints.laptop} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const LogoLink = styled.a``;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.pM};
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
  @media ${breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.pL};
    svg {
      width: ${pxToRem(40)};
      height: ${pxToRem(40)};
    }
  }
`;

export const Dot = styled.div`
  position: absolute;
  bottom: -10px;
  margin-top: ${pxToRem(5)};
  width: ${pxToRem(5)};
  height: ${pxToRem(5)};
  border-radius: ${pxToRem(5)};
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SocialMedias = styled.div`
  gap: ${pxToRem(20)};
  display: flex;
  @media ${breakpoints.laptop} {
    gap: ${pxToRem(40)};
  }
`;

export const StyledBurgerIcon = styled(BurgerIcon)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ display }) => (display ? 0 : 1)};
  transition: all 0.2s ease;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ display }) => (display ? 1 : 0)};
  transition: all 0.2s ease;
`;
