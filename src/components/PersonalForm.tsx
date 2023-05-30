import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

type FormValues = {
  firstName: string;
  lastName: string;
  country: string;
};

type FormProps = {
  saveData: (data: FormValues) => void;
};

const validationSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  country: string().required()
});

const PersonalForm = ({ saveData }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormValues>({ resolver: yupResolver(validationSchema) });

  const submitHandler = (data: FormValues) => {
    console.log(data);
    saveData(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" data-testid="firstName" {...register('firstName')} />
        {errors?.firstName && <p>{errors.firstName.message}</p>}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" data-testid="lastName" {...register('lastName')} />
        {errors?.lastName && <p>{errors.lastName.message}</p>}
      </div>
      <div>
        <label htmlFor="country">Country</label>
        <select id="country" {...register('country')} data-testid="country">
          <option value="">Select Country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
        </select>
        {errors?.country && <p>{errors.country.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonalForm;
