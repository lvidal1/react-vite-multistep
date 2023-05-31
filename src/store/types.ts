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
  clear: () => void;
  step?: number;
}
