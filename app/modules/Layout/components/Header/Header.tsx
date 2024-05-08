'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import useScrollPosition from '@/hooks/useScrollPosition';

import Link from 'next/link';
import Burger from '@/modules/Common/icons/Burger';
import Close from '@/modules/Common/icons/Close';
import Instagram from '@/modules/Common/icons/Instagram';
import Linkedin from '@/modules/Common/icons/Linkedin';
import Logo from '@/modules/Common/icons/Logo';

import { headerLinks } from '../../consts';
import { IconColors } from '@/modules/Common/consts';

import styles from './Header.module.scss';
import FocusTrap from 'focus-trap-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const { lockScroll, unlockScroll } = useBodyScrollLock();
  const scrollPosition = useScrollPosition();

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      return lockScroll();
    }
    unlockScroll();
  };

  const links = headerLinks.map((link) => {
    const { slug, title } = link;

    const href = '/' + slug;
    const isActive = href === pathname;
    const linkClassNames = classNames({ [styles['Header-link']]: true, [styles['Header-link--active']]: isActive });

    return (
      <li key={title} className={styles['Header-li']}>
        <Link className={linkClassNames} href={'/' + slug}>
          {title}
        </Link>
        {isActive && <div className={styles['Header-dot']}></div>}
      </li>
    );
  });

  const headerClassNames = classNames({ [styles['Header']]: true, [styles['Header--scroll']]: scrollPosition });

  const navContainerClassNames = classNames({
    [styles['Header-navContainer']]: true,
    [styles['Header-navContainer--active']]: isOpen,
  });

  const navClassNames = classNames({ [styles['Header-nav']]: true, [styles['Header-nav--active']]: isOpen });

  const overlayClassNames = classNames({ [styles['Header-overlay']]: true, [styles['Header-overlay--active']]: isOpen });

  return (
    <header className={headerClassNames} id='header' role='navigation' aria-label='Main'>
      <Link aria-label='accueil' className={styles['Header-iconlink']} href='/'>
        <Logo
          width={40}
          height={40}
          color={isOpen ? IconColors.primary : scrollPosition ? IconColors.white : IconColors.primary}
        />
      </Link>
      <button aria-label='menu' className={styles['Header-burger']} onClick={handleIsOpen}>
        <Burger color={scrollPosition ? IconColors.white : IconColors.primary} height={40} width={40} />
      </button>
      <FocusTrap active={isOpen}>
        <div className={navContainerClassNames}>
          <nav className={navClassNames}>
            <button aria-label='close menu' className={styles['Header-close']} onClick={handleIsOpen}>
              <Close color={IconColors.primary} height={40} width={40} />
            </button>
            <ul className={styles['Header-navList']}>
              {links}
              <div className={styles['Header-socials']}>
                <li className={styles['Header-li']}>
                  <a
                    aria-label='linkedin'
                    className={styles['Header-iconlink']}
                    href='https://www.linkedin.com/in/benjamin-russo-b1292a19a'
                    target='_blank'
                  >
                    <Linkedin
                      color={isOpen ? IconColors.primary : scrollPosition ? IconColors.white : IconColors.primary}
                      height={isOpen ? 30 : 24}
                      width={isOpen ? 30 : 24}
                    />
                  </a>
                </li>
                <li className={styles['Header-li']}>
                  <a
                    aria-label='instagram'
                    className={styles['Header-iconlink']}
                    href='https://www.instagram.com/russo_benjamin'
                    target='_blank'
                  >
                    <Instagram
                      color={isOpen ? IconColors.primary : scrollPosition ? IconColors.white : IconColors.primary}
                      height={isOpen ? 30 : 24}
                      width={isOpen ? 30 : 24}
                    />
                  </a>
                </li>
              </div>
            </ul>
          </nav>
          <div onClick={handleIsOpen} className={overlayClassNames} aria-hidden></div>
        </div>
      </FocusTrap>
    </header>
  );
};

export default Header;
