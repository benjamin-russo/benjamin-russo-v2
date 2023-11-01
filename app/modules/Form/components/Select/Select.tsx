'use client';

import classNames from 'classnames';
import { useState } from 'react';

import * as SelectRadix from '@radix-ui/react-select';
import ArrowDown from '@/modules/Common/icons/ArrowDown';
import ArrowUp from '@/modules/Common/icons/ArrowUp';

import styles from './Select.module.scss';

interface SelectProps {
  children: any;
  className?: string;
  label?: string;
  labelId: string;
  onChange: (labelId: string, value: string) => void;
  placeholder?: string;
  required?: boolean;
  value: string;
}

const Select = (props: SelectProps) => {
  const { children, className = '', label, labelId, onChange, placeholder, required, value } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnChange = (newValue: string) => onChange(labelId, newValue);

  const onOpenChange = () => setIsOpen(!isOpen);

  const selectClassName = classNames({
    [styles['Select']]: true,
    [className]: className,
  });

  return (
    <div className={selectClassName}>
      {label && (
        <label className={styles['Select-label']} htmlFor={labelId}>
          {label}
          {required && <span>*</span>}
        </label>
      )}
      <SelectRadix.Root onOpenChange={onOpenChange} onValueChange={handleOnChange} open={isOpen} value={value}>
        <SelectRadix.Trigger className={styles['SelectTrigger']} aria-label={label} id={labelId}>
          <SelectRadix.Value placeholder={placeholder} />
          <SelectRadix.Icon className={styles['SelectIcon']}>{isOpen ? <ArrowUp /> : <ArrowDown />}</SelectRadix.Icon>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content position='popper' sideOffset={5} className={styles['SelectContent']}>
            <SelectRadix.Viewport className={styles['SelectViewport']}>{children}</SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  );
};

export default Select;
