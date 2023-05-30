import styles from '@styles/components/Input.module.scss';

type SelectProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  register: any;
};

function Select({ id, label, dataTestId, register, error }: SelectProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select id={id} data-testid={dataTestId} {...register} className={styles.input}>
        <option value="">Select Country</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="UK">UK</option>
      </select>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Select;
