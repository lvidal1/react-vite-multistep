import classNames from 'classnames';
import styles from '@styles/components/Input.module.scss';
import ErrorText from './ErrorText';

type InputProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  register: any;
  type: string;
  placeholder?: string;
};

function Input({ id, type, label, dataTestId, register, error, placeholder }: InputProps) {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        data-testid={dataTestId}
        {...register}
        placeholder={placeholder}
        className={classNames(styles.input, error ? styles.inputError : '')}
      />
      {error && <ErrorText message={error} />}
    </div>
  );
}

export default Input;
