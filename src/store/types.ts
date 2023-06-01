export interface ICountry {
  name: string;
  iso2: string;
  dial: string;
}

export interface ICountryResponse {
  data: ICountry[];
  results: number;
}

export interface ICountryOption {
  value: string;
  label: string;
}

export interface IUser {
  username?: string;
  email?: string;
  country?: ICountryOption;
}

export interface IAppStore {
  error?: string;
  isLoading?: boolean;
  countries: ICountry[];
  data?: ICountryResponse;
  user?: IUser;
  fetchCountries: () => Promise<void>;
  setUserInfo: (info: IUser) => void;
  clear: () => void;
  step: number;
  steps: IStep[];
  setCurrentStep: (step: number) => void;
  completeStep: (step: number) => void;
  completed: () => boolean;
}

export interface IStep {
  label: string;
  path: string;
  completed: boolean;
}
