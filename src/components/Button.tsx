import classNames from 'classnames';
import styles from '@styles/components/Button.module.scss';

type ButtonProps = {
  dataTestId?: string;
  disabled?: boolean;
  label: string;
  onClick: () => void;
};

function Button({ dataTestId, label, disabled, onClick }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, disabled ? styles.disabled : '')}
      data-testid={dataTestId}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
