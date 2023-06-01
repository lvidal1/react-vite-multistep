import styles from '@styles/components/ErrorText.module.scss';

type ErrorProps = {
  message: string;
};

function ErrorText({ message }: ErrorProps) {
  return (
    <p className={styles.messageBox}>
      <span>{message}</span>
    </p>
  );
}

export default ErrorText;
