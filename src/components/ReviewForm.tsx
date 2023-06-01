import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import styles from '@styles/components/ReviewForm.module.scss';
import Button from '@components/Button';
import { IUser } from '@store/types';

type FormProps = {
  saveData: () => void;
  defaultValues?: IUser;
};

const ReviewForm = ({ saveData, defaultValues = {} }: FormProps) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    formState: { isValid }
  } = useForm({
    mode: 'onChange'
  });

  const { username, email, country } = defaultValues;

  const submitHandler = () => {
    saveData();
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={styles.container}
      data-testid="ReviewForm">
      <div className={styles.detailContent}>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>{t('reviewForm.username.label')}</span>
          <span className={styles.detailValue} data-testid="username">
            {username}
          </span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>{t('reviewForm.email.label')}</span>
          <span className={styles.detailValue} data-testid="email">
            {email}
          </span>
        </div>
        <div className={styles.detailRow}>
          <span className={styles.detailLabel}>{t('reviewForm.country.label')}</span>
          <span className={styles.detailValue} data-testid="country">
            {country?.label}
          </span>
        </div>
      </div>
      <Button label={t('button.complete')} dataTestId={'button'} disabled={!isValid} />
    </form>
  );
};

export default ReviewForm;
