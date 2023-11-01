import classNames from 'classnames';
import { forwardRef } from 'react';

import * as SelectRadix from '@radix-ui/react-select';

import styles from './SelectItem.module.scss';

const SelectItem = forwardRef<any, any>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectRadix.Item className={classNames(styles['SelectItem'], className)} {...props} ref={forwardedRef}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  );
});

export default SelectItem;
