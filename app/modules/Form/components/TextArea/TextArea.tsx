import styles from './TextArea.module.scss';

interface TextAreaProps {
  label: string;
  labelId: string;
  onChange: (labelId: string, value: string) => void;
  placeholder?: string;
  required?: boolean;
  rows?: number;
  value: string;
}

const TextArea = (props: TextAreaProps) => {
  const { label, labelId, onChange, placeholder, required, rows = 10, value } = props;

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => onChange(labelId, event.target.value);

  return (
    <div className={styles['TextArea']}>
      <label className={styles['TextArea-label']} htmlFor={labelId}>
        {label}
        {required && <span>*</span>}
      </label>
      <textarea
        className={styles['TextArea-field']}
        rows={rows}
        id={labelId}
        onChange={handleOnChange}
        placeholder={placeholder}
        required={required}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
