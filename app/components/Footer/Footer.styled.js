import styled from 'styled-components';
import pxToRem from '../../utils/pxToRem';

import Logo from '../../images/logos/black-logo.svg';

export const StyledFooter = styled.footer`
  gap: ${pxToRem(10)};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${pxToRem(50)} 0;
  border-radius: ${pxToRem(20)} ${pxToRem(20)} 0 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const SocialsMedias = styled.div`
  gap: ${pxToRem(5)};
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.pM};
`;

export const NavLink = styled.a``;

export const Copyright = styled.p``;

export const FooterLogo = styled(Logo)`
  margin-bottom: ${pxToRem(20)};
`;
