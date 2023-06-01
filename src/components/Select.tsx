import styles from '@styles/components/Input.module.scss';
import ErrorText from './ErrorText';
import appStore from '../store/appStore';
import { useEffect, useState } from 'react';
import Select, { SingleValue, StylesConfig, components } from 'react-select';
import CheckIcon from './icons/CheckIcon';
import ArrowDownIcon from './icons/ArrowDownIcon';

type SelectProps = {
  dataTestId: string;
  error: string | undefined;
  id: string;
  label: string;
  placeholder?: string;
  onChange: (e: IOption) => void;
  value?: IOption;
};

export type IOption = {
  value: any;
  label: string;
};

const colourStyles: StylesConfig<any> = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    borderRadius: 0
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  }),
  indicatorSeparator: (base) => ({
    ...base,
    display: 'none'
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? '#F6F4FF'
        : isFocused
        ? '#F6F4FF'
        : undefined,
      color: isDisabled ? '#ccc' : '#413C5F'
    };
  }
};

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDownIcon />
    </components.DropdownIndicator>
  );
};

function CountrySelect({
  id,
  label,
  error,
  placeholder,
  onChange,
  value,
  dataTestId
}: SelectProps) {
  const { countries, fetchCountries } = appStore();

  const [data, setData] = useState<IOption[]>([]);

  const [selectedOption, setSelectedOption] = useState<SingleValue<IOption>>(value || null);

  const handleChange = (e: any) => {
    setSelectedOption(e);
    onChange(e);
  };

  useEffect(() => {
    if (countries.length == 0) {
      fetchCountries();
    }
  }, [fetchCountries, countries]);

  useEffect(() => {
    if (countries.length > 0) {
      setData(
        countries.map(({ iso2, name }) => {
          return {
            value: iso2,
            label: name
          };
        })
      );
    }
  }, [countries]);

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      <Select
        aria-label={dataTestId}
        components={{ DropdownIndicator }}
        onChange={handleChange}
        options={data}
        placeholder={placeholder}
        styles={colourStyles}
        value={selectedOption}
        formatOptionLabel={(e: IOption) => {
          const isSelected = selectedOption?.value === e.value;
          return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginLeft: 5, fontWeight: isSelected ? 600 : 400 }}>{e.label}</span>{' '}
              <span>{isSelected && <CheckIcon />}</span>
            </div>
          );
        }}
      />
      {error && <ErrorText message={error} />}
    </div>
  );
}

export default CountrySelect;
