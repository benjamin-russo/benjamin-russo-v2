import { Indicator, Root } from '@radix-ui/react-checkbox';
import Check from '@/modules/Common/icons/Check';

import { IconColors } from '@/modules/Common/consts';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  label: string;
  labelId: string;
  onChange: (labelId: string, checked: boolean) => void;
  required?: boolean;
  value: number;
}

const Checkbox = (props: CheckboxProps) => {
  const { label, labelId, onChange, required, value } = props;

  const handleOnChange = (checked: boolean) => {
    onChange(labelId, checked);
  };

  return (
    <div className={styles['Checkbox']}>
      <Root className={styles['Checkbox-field']} id={labelId} onCheckedChange={handleOnChange} required={required} value={value}>
        <Indicator className={styles['Checkbox-indicator']}>
          <Check color={IconColors.white} />
        </Indicator>
      </Root>
      <label className={styles['Checkbox-label']} htmlFor={labelId}>
        {label}
        {required && <span>*</span>}
      </label>
    </div>
  );
};

export default Checkbox;
