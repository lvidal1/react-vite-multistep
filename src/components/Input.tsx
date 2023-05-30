import styles from '@styles/components/Input.module.scss';

type InputProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  register: any;
  type: string;
};

function Input({ id, type, label, dataTestId, register, error }: InputProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type={type} id={id} data-testid={dataTestId} {...register} className={styles.input} />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
