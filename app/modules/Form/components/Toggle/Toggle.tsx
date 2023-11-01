import { Root } from '@radix-ui/react-toggle';

import styles from './Toggle.module.scss';

interface ToggleProps {
  label: string;
  labelId: string;
  onPressedChange: (labelId: string, pressed: boolean) => void;
  pressed: boolean;
}

const Toggle = (props: ToggleProps) => {
  const { label, labelId, onPressedChange, pressed } = props;

  const handleOnPressedChange = (pressed: boolean) => {
    onPressedChange(labelId, pressed);
  };

  return (
    <div className={styles['Toggle']}>
      <Root className={styles['Toggle-button']} aria-label={label} onPressedChange={handleOnPressedChange} pressed={pressed}>
        {label}
      </Root>
    </div>
  );
};

export default Toggle;
