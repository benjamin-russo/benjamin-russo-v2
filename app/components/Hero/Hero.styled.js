import styled from 'styled-components';
import breakpoints from '../../constants/breakpoints';
import pxToRem from '../../utils/pxToRem';

export const StyledHero = styled.main`
  position: relative;
  gap: ${pxToRem(10)};
  display: flex;
  align-items: center;
  flex-direction: column;
  @media ${breakpoints.tablet} {
    margin: 0 ${pxToRem(20)};
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.serif};
  font-size: ${({ theme }) => theme.fontSize.titleL};
  text-align: center;
  @media ${breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.titleM};
  }
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.titleS};
  }
`;

export const FullName = styled.h2`
  margin-bottom: ${pxToRem(40)};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.titleXL};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: uppercase;
  text-align: center;
  @media ${breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.titleL};
  }
`;

export const Paragraph = styled.p`
  margin-bottom: ${pxToRem(10)};
  max-width: ${pxToRem(450)};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.pM};
  line-height: 1.4;
  text-align: center;
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.pS};
  }
`;

export const NavLink = styled.a`
  padding: ${pxToRem(12)} ${pxToRem(30)};
  border-radius: ${pxToRem(40)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.pM};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
  }
  @media ${breakpoints.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.p};
  }
`;

export const Button = styled.button`
  display: none;
  position: absolute;
  bottom: 0;
  border: none;
  background: initial;
`;

export const SeeMore = styled.section`
  padding: ${pxToRem(5)} ${pxToRem(10)};
  border-radius: ${pxToRem(30)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
`;
