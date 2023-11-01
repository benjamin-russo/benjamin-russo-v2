import classNames from 'classnames';

import Link from 'next/link';

import { ButtonVariants } from '../../consts';

import styles from './Button.module.scss';

interface ButtonProps {
  className?: string;
  href?: string;
  label: string;
  onClick?: () => void;
  variant?: string;
}

const Button = (props: ButtonProps) => {
  const { className = '', href, label, onClick, variant } = props;

  const buttonClassName = classNames({
    [styles['Button']]: true,
    [className]: className,
    [styles['Button--secondary']]: variant === ButtonVariants.secondary,
    [styles['Button--tertiary']]: variant === ButtonVariants.tertiary,
  });

  if (href)
    return (
      <Link className={buttonClassName} href={href}>
        {label}
      </Link>
    );

  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
