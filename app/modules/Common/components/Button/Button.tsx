import classNames from 'classnames';

import Link from 'next/link';

import { ButtonVariants } from '../../consts';

import styles from './Button.module.scss';

interface ButtonProps {
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: string;
}

const Button = (props: ButtonProps) => {
  const { href, label, onClick, variant } = props;

  const className = classNames({
    [styles['Button']]: true,
    [styles['Button--secondary']]: variant === ButtonVariants.secondary,
    [styles['Button--tertiary']]: variant === ButtonVariants.tertiary,
  });

  if (href)
    return (
      <Link className={className} href={href}>
        {label}
      </Link>
    );

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
