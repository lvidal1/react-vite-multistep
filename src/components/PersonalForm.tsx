import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import styles from '@styles/components/PersonalForm.module.scss';
import Input from './Input';
import Select from './Select';
import Button from './Button';

type FormValues = {
  username: string;
  email: string;
  country: string;
};

type FormProps = {
  saveData: (data: FormValues) => void;
};

const validationSchema = object().shape({
  username: string().required(),
  email: string().email().required(),
  country: string().required()
});

const PersonalForm = ({ saveData }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema), mode: 'onChange' });

  const { t } = useTranslation();

  const submitHandler = (data: FormValues) => {
    saveData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={styles.container}
      data-testid="personalForm">
      <Input
        type={'text'}
        id={'username'}
        dataTestId={'username'}
        register={register('username')}
        label={t('userForm.username.label')}
        placeholder={t('userForm.username.placeholder') ?? ''}
        error={errors.username?.message}
      />
      <Input
        type={'email'}
        id={'email'}
        dataTestId={'email'}
        register={register('email')}
        label={t('userForm.email.label')}
        placeholder={t('userForm.email.placeholder') ?? ''}
        error={errors.email?.message}
      />
      <Select
        id={'country'}
        dataTestId={'country'}
        register={register('country')}
        label={t('userForm.country.label')}
        placeholder={t('userForm.country.placeholder') ?? ''}
        error={errors.country?.message}
      />
      <Button label={t('button.continue')} dataTestId={'button'} disabled={!isValid} />
    </form>
  );
};

export default PersonalForm;
