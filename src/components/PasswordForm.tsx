import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import styles from '@styles/components/PasswordForm.module.scss';
import Input from './Input';
import Button from './Button';

type FormValues = {
  password: string;
  repeat_password: string;
};

type FormProps = {
  saveData: (data: FormValues) => void;
};

const validationSchema = object().shape({
  password: string().required(),
  repeat_password: string().required()
});

const PasswordForm = ({ saveData }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange'
  });

  const { t } = useTranslation();

  const submitHandler = (data: FormValues) => {
    saveData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={styles.container}
      data-testid="PasswordForm">
      <Input
        type={'text'}
        id={'password'}
        dataTestId={'password'}
        register={register('password')}
        label={t('passwordForm.password.label')}
        placeholder={t('passwordForm.password.placeholder') ?? ''}
        error={errors.password?.message}
      />
      <Input
        type={'text'}
        id={'repeat_password'}
        dataTestId={'repeat_password'}
        register={register('repeat_password')}
        label={t('passwordForm.repeat_password.label')}
        placeholder={t('passwordForm.repeat_password.placeholder') ?? ''}
        error={errors.repeat_password?.message}
      />
      <Button label={t('button.continue')} dataTestId={'button'} disabled={!isValid} />
    </form>
  );
};

export default PasswordForm;
