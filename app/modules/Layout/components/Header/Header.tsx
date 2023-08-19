'use client';

import { useState } from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import Burger from '@/modules/Common/icons/Burger';
import Close from '@/modules/Common/icons/Close';
import Instagram from '@/modules/Common/icons/Instagram';
import Linkedin from '@/modules/Common/icons/Linkedin';
import Logo from '@/modules/Common/icons/Logo';

import { headerLinks } from '../../consts';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = headerLinks.map((link) => {
    const { slug, title } = link;

    const href = '/' + slug;
    const isActive = href === pathname;
    const className = classNames({ [styles['Header-link']]: true, [styles['Header-link--active']]: isActive });

    return (
      <li key={title} className={styles['Header-li']}>
        <Link className={className} href={'/' + slug}>
          {title}
        </Link>
        {isActive && <div className={styles['Header-dot']}></div>}
      </li>
    );
  });

  return (
    <header className={styles['Header']}>
      <Link className={styles['Header-iconlink']} href='/'>
        <Logo width={40} height={40} />
      </Link>
      <button className={styles['Header-burger']} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <Burger /> : <Close />}
      </button>
      <nav>
        <ul className={styles['Header-nav']}>
          {links}
          <div className={styles['Header-socials']}>
            <li className={styles['Header-li']}>
              <a className={styles['Header-iconlink']} href='/'>
                <Linkedin />
              </a>
            </li>
            <li className={styles['Header-li']}>
              <a className={styles['Header-iconlink']} href='/'>
                <Instagram />
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
