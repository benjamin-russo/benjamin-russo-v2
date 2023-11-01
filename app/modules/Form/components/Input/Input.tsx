'use client';

import styles from './Input.module.scss';

interface InputProps {
  label: string;
  labelId: string;
  onChange: (labelId: string, value: string) => void;
  placeholder?: string;
  type?: 'email' | 'number' | 'tel' | 'text';
  required?: boolean;
  value: string;
}

const Input = (props: InputProps) => {
  const { label, labelId, onChange, placeholder, type = 'text', required, value } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(labelId, event.target.value);

  return (
    <div className={styles['Input']}>
      <label className={styles['Input-label']} htmlFor={labelId}>
        {label}
        {required && <span>*</span>}
      </label>
      <input
        className={styles['Input-field']}
        id={labelId}
        onChange={handleOnChange}
        placeholder={placeholder}
        type={type}
        required={required}
        value={value}
      />
    </div>
  );
};

export default Input;
