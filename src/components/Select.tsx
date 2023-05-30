import styles from '@styles/components/Input.module.scss';
import ErrorText from './ErrorText';

type SelectProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  register: any;
  placeholder?: string;
};

function Select({ id, label, dataTestId, register, error, placeholder }: SelectProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        data-testid={dataTestId}
        {...register}
        className={styles.input}
        placeholder={placeholder}
        defaultValue="">
        <option value="">{placeholder}</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
      {error && <ErrorText message={error} />}
    </div>
  );
}

export default Select;
