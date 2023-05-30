import classNames from 'classnames';
import styles from '@styles/components/Button.module.scss';

type ButtonProps = {
  dataTestId: string;
  disabled: boolean;
  label: string;
};

function Button({ dataTestId, label, disabled }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, disabled ? styles.disabled : '')}
      data-testid={dataTestId}
      disabled={disabled}>
      {label}
    </button>
  );
}

export default Button;
