import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import InstagramIcon from '../../images/icons/instagram-black.svg';
import LinkedinIcon from '../../images/icons/linkedin-black.svg';
import { Copyright, FooterLogo, NavLink, SocialsMedias, StyledFooter, Text } from './Footer.styled';

const Footer = (props) => {
  return (
    <StyledFooter>
      <FooterLogo />
      <SocialsMedias>
        <Text>Retrouvez moi sur</Text>
        <Link href='/instagram' passHref>
          <NavLink>
            <InstagramIcon />
          </NavLink>
        </Link>
        <Text>et</Text>
        <Link href='/linkedin' passHref>
          <NavLink>
            <LinkedinIcon />
          </NavLink>
        </Link>
      </SocialsMedias>
      <Copyright>©2022 Benjamin RUSSO</Copyright>
    </StyledFooter>
  );
};

Footer.propTypes = {};

export default Footer;
