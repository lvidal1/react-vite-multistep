export interface ICountry {
  name: string;
  iso3: string;
  dial: string;
}

export interface ICountryResponse {
  data: ICountry[];
  results: number;
}

export interface IUser {
  username?: string;
  email?: string;
  country?: string;
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
}

export interface IStep {
  path: string;
  completed: boolean;
}
