import { Item } from '@radix-ui/react-toggle-group';

import styles from './ToggleGroupItem.module.scss';

interface ToggleGroupItemProps {
  label: string;
  value: string;
}

const ToggleGroupItem = (props: ToggleGroupItemProps) => {
  const { label, value } = props;
  return (
    <Item className={styles['ToggleGroupItem']} value={value} aria-label={label}>
      {label}
    </Item>
  );
};

export default ToggleGroupItem;
