import { useTranslation } from 'react-i18next';

import styles from '@styles/components/HomeForm.module.scss';

import Button from './Button';
import { IUser } from '../store/types';

type FormProps = {
  handleStart: () => void;
  handleReview: () => void;
  userInfo?: IUser;
  wizardCompleted: boolean;
};

const HomeForm = ({ handleStart, handleReview, userInfo, wizardCompleted }: FormProps) => {
  const { t } = useTranslation();

  const { username } = userInfo || {};

  return (
    <div className={styles.container} data-testid="HomeForm">
      {wizardCompleted && (
        <h4 className={styles.title} data-testid="HomeForm.title">
          Hi there,
          <span className={styles.username} onClick={handleReview} data-testid="HomeForm.username">
            {username}
          </span>
          !
        </h4>
      )}
      <Button
        label={wizardCompleted ? t('button.retry') : t('button.start')}
        dataTestId={'button'}
        onClick={handleStart}
      />
    </div>
  );
};

export default HomeForm;
