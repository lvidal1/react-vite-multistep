import { Controller, useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import styles from '@styles/components/UserForm.module.scss';
import Input from './Input';
import CountrySelect from './CountrySelect';
import Button from './Button';
import { ICountryOption, IUser } from '../store/types';

type FormValues = {
  username: string;
  email: string;
  country: ICountryOption;
};

type FormProps = {
  saveData: (data: FormValues) => void;
  defaultValues?: IUser;
};

const validationSchema = object().shape({
  username: string().required(),
  email: string().email().required(),
  country: object().required()
});

const UserForm = ({ saveData, defaultValues }: FormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors }
  } = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues
  });

  const { t } = useTranslation();

  const submitHandler = (data: FormValues) => {
    saveData(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={styles.container}
      data-testid="userForm">
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
      <Controller
        control={control}
        name="country"
        render={({ field: { onChange } }) => (
          <CountrySelect
            id={'country'}
            dataTestId={'country'}
            label={t('userForm.country.label')}
            placeholder={t('userForm.country.placeholder') ?? ''}
            error={errors.country?.message}
            onChange={onChange}
            value={defaultValues?.country}
          />
        )}
      />
      <Button label={t('button.continue')} dataTestId={'button'} disabled={!isValid} />
    </form>
  );
};

export default UserForm;
