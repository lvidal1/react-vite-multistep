import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
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
        label="Username"
        error={errors.username?.message}
      />
      <Input
        type={'email'}
        id={'email'}
        dataTestId={'email'}
        register={register('email')}
        label="Email"
        error={errors.email?.message}
      />
      <Select
        id={'country'}
        dataTestId={'country'}
        register={register('country')}
        label="Country"
        error={errors.country?.message}
      />
      <Button label={'Continue'} dataTestId={'button'} disabled={!isValid} />
    </form>
  );
};

export default PersonalForm;
