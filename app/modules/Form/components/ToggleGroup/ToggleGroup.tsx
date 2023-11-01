import { Root } from '@radix-ui/react-toggle-group';

import styles from './ToggleGroup.module.scss';

interface ToggleGroupProps {
  children: any;
  label: string;
  labelId: string;
  onChange: (labelId: string, value: string) => void;
  value: string;
}

const ToggleGroup = (props: ToggleGroupProps) => {
  const { children, label, labelId, onChange, value } = props;

  const handleOnChange = (value: string) => {
    onChange(labelId, value);
  };

  return (
    <Root className={styles['ToggleGroup']} type='single' aria-label={label} onValueChange={handleOnChange} value={value}>
      {children}
    </Root>
  );
};

export default ToggleGroup;
