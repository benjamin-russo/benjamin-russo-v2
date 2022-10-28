import React, { useState } from 'react';
import Link from 'next/link';

import Logo from '../../images/logos/white-logo.svg';
import InstagramIcon from '../../images/icons/instagram.svg';
import TwitterIcon from '../../images/icons/twitter.svg';
import {
  Dot,
  LogoLink,
  MenuBurger,
  Navbar,
  NavItem,
  NavItems,
  NavLink,
  SocialMedias,
  StyledBurgerIcon,
  StyledCloseIcon,
  StyledHeader,
} from './Header.styled';

const NavItemsEnum = [
  {
    title: 'Accueil',
    path: '/',
  },
  {
    title: 'Portfolio',
    path: '/portfolio',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

const SocialMediasEnum = [
  {
    title: 'Instagram',
    icon: InstagramIcon,
    path: '/instagram',
  },
  {
    title: 'Twitter',
    icon: TwitterIcon,
    path: '/twitter',
  },
];

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = NavItemsEnum.map((navItem) => (
    <NavItem>
      <Link id={navItem.title} href={navItem.path} passHref>
        <NavLink>{navItem.title}</NavLink>
      </Link>
      <Dot />
    </NavItem>
  ));

  const socialMediasItems = SocialMediasEnum.map((socialMedia) => {
    const Icon = socialMedia.icon;
    return (
      <Link id={socialMedia.title} href={socialMedia.path} passHref>
        <NavLink>
          <Icon />
        </NavLink>
      </Link>
    );
  });
  return (
    <StyledHeader>
      <Link href='/' passHref>
        <LogoLink>
          <Logo />
        </LogoLink>
      </Link>
      <Navbar display={isOpen}>
        <NavItems>{navItems}</NavItems>
        <SocialMedias>{socialMediasItems}</SocialMedias>
      </Navbar>
      <MenuBurger onClick={() => setIsOpen(!isOpen)}>
        <StyledBurgerIcon display={isOpen} />
        <StyledCloseIcon display={isOpen} />
      </MenuBurger>
    </StyledHeader>
  );
};

Header.propTypes = {};

export default Header;
