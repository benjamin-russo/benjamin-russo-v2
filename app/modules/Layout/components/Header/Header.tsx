'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import useScrollPosition from '@/hooks/useScrollPosition';

import Link from 'next/link';
import Burger from '@/modules/Common/icons/Burger';
import Close from '@/modules/Common/icons/Close';
import Instagram from '@/modules/Common/icons/Instagram';
import Linkedin from '@/modules/Common/icons/Linkedin';
import Logo from '@/modules/Common/icons/Logo';

import { headerLinks } from '../../consts';
import styles from './Header.module.scss';
import { IconColors } from '@/modules/Common/consts';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const scrollPosition = useScrollPosition();

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

  return (
    <header className={headerClassNames} id='header'>
      <Link aria-label='accueil' className={styles['Header-iconlink']} href='/'>
        <Logo width={40} height={40} color={scrollPosition ? IconColors.white : IconColors.primary} />
      </Link>
      <button aria-label='menu' className={styles['Header-burger']} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <Close color={scrollPosition ? IconColors.white : IconColors.primary} height={40} width={40} />
        ) : (
          <Burger color={scrollPosition ? IconColors.white : IconColors.primary} height={40} width={40} />
        )}
      </button>
      <nav className={styles['Header-nav']}>
        <ul className={styles['Header-navList']}>
          {links}
          <div className={styles['Header-socials']}>
            <li className={styles['Header-li']}>
              <a aria-label='linkedin' className={styles['Header-iconlink']} href='/'>
                <Linkedin color={scrollPosition ? IconColors.white : IconColors.primary} />
              </a>
            </li>
            <li className={styles['Header-li']}>
              <a aria-label='instagram' className={styles['Header-iconlink']} href='/'>
                <Instagram color={scrollPosition ? IconColors.white : IconColors.primary} />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
