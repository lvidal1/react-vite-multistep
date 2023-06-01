import PhoneInput from 'react-phone-input-2';
import styles from '@styles/components/Input.module.scss';
import 'react-phone-input-2/lib/style.css';
import ErrorText from './ErrorText';

type SelectProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  placeholder?: string;
  onChange: (e: string) => void;
  value?: string;
  country?: string;
};

function PhoneNumberInput({
  id,
  label,
  error,
  placeholder,
  onChange,
  value,
  dataTestId,
  country
}: SelectProps) {
  return (
    <div className={styles.formGroup} data-testid={dataTestId}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={styles.customSection}>
        <PhoneInput
          country={country}
          value={value}
          onChange={(e) => onChange(e)}
          disableDropdown
          placeholder={placeholder}
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%', borderRadius: 0, height: '2.5rem' }}
        />
      </div>
      {error && <ErrorText message={error} />}
    </div>
  );
}

export default PhoneNumberInput;
