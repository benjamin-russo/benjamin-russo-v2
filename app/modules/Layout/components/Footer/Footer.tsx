import Logo from '@/modules/Common/icons/Logo';

import styles from './Footer.module.scss';
import Linkedin from '@/modules/Common/icons/Linkedin';
import Instagram from '@/modules/Common/icons/Instagram';
import Link from 'next/link';
import { IconColors } from '@/modules/Common/consts';

const Footer = () => {
  return (
    <footer className={styles['Footer']}>
      <div className={styles['Footer-top']}>
        <Link aria-label='accueil' className={styles['Footer-iconlink']} href='/'>
          <Logo color={IconColors.white} height={70} width={70} />
        </Link>
        <div className={styles['Footer-socials']}>
          <p className={styles['Footer-text']}>Retrouvez moi sur</p>
          <ul className={styles['Footer-ul']}>
            <li className={styles['Footer-li']}>
              <a aria-label='linkedin' href='/'>
                <Linkedin color={IconColors.yellow} />
              </a>
            </li>
            <li className={styles['Footer-li']}>
              <a aria-label='instagram' href='/'>
                <Instagram color={IconColors.yellow} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles['Footer-bottom']}>
        <nav>
          <ul className={styles['Footer-ul']}>
            <li className={styles['Footer-li']}>
              <Link className={styles['Footer-link']} href='/mentions-legales'>
                Mentions Légales
              </Link>
            </li>
            <li className={styles['Footer-li']}>
              <Link className={styles['Footer-link']} href='/politique-de-confidentialite'>
                Politique de confidentialité
              </Link>
            </li>
            <li className={styles['Footer-li']}>
              <Link className={styles['Footer-link']} href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <p className={styles['Footer-copyright']}>©2023 Tout droits réservés Benjamin RUSSO</p>
      </div>
    </footer>
  );
};

export default Footer;
