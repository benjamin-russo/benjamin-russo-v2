import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Arrow from '../../images/icons/arrow.svg';
import { Button, FullName, NavLink, Paragraph, SeeMore, StyledHero, Title } from './Hero.styled';

const Hero = (props) => {
  return (
    <StyledHero>
      <Title>Designer & Développeur Full-Stack</Title>
      <FullName>Benjamin RUSSO</FullName>

      <Paragraph>Je suis un développeur passionné de code, de technologie et de design.</Paragraph>
      <Link href='/portfolio' passHref>
        <NavLink>Voir mon portfolio</NavLink>
      </Link>

      <Button>
        <SeeMore>En voir plus</SeeMore>
        <Arrow />
      </Button>
    </StyledHero>
  );
};

Hero.propTypes = {};

export default Hero;
