import { useTranslation } from 'react-i18next';

import styles from '@styles/components/HomeForm.module.scss';

import Button from './Button';
import { IUser } from '../store/types';

type FormProps = {
  start: () => void;
  userInfo?: IUser;
  wizardCompleted: boolean;
};

const HomeForm = ({ start, userInfo, wizardCompleted }: FormProps) => {
  const { t } = useTranslation();

  const submitHandler = () => {
    start();
  };

  const { username } = userInfo || {};

  return (
    <div className={styles.container} data-testid="HomeForm">
      {wizardCompleted && (
        <h4 className="text-white text-3xl text-center">
          Hi there, <span className="underline"> {username}</span>!
        </h4>
      )}

      <Button
        label={wizardCompleted ? t('button.retry') : t('button.start')}
        dataTestId={'button'}
        onClick={submitHandler}
      />
    </div>
  );
};

export default HomeForm;
