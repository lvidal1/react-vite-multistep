import styles from '@styles/components/Input.module.scss';
import ErrorText from './ErrorText';
import appStore from '../store/appStore';
import { useEffect } from 'react';

type SelectProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  register: any;
  placeholder?: string;
};

function Select({ id, label, dataTestId, register, error, placeholder }: SelectProps) {
  const { isLoading, countries, fetchCountries } = appStore();

  useEffect(() => {
    if (countries.length == 0) {
      fetchCountries();
    }
  }, [fetchCountries, countries]);

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        data-testid={dataTestId}
        {...register}
        className={styles.input}
        placeholder={placeholder}
        defaultValue="">
        <option key="0" value="">
          {isLoading ? 'Loading...' : placeholder}
        </option>
        {countries.map((country, _idx) => (
          <option key={_idx} value={country.iso3}>
            {country.name}
          </option>
        ))}
      </select>
      {error && <ErrorText message={error} />}
    </div>
  );
}

export default Select;
