import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IAppStore, ICountryResponse } from './types';
import { getCountries } from '../services/countries';

const initialState = {
  countries: [],
  user: undefined,
  isLoading: false,
  error: undefined
};

const getError = (err: any) => err?.message || err?.data?.message || 'Unexpected network error.';

const useAppStore = create(
  persist<IAppStore>(
    (set) => ({
      ...initialState,
      countries: [],
      fetchCountries: async () => {
        try {
          set(() => ({ isLoading: true }));
          const countries: ICountryResponse = await getCountries();
          set(() => ({ countries: countries.data, isLoading: false }));
        } catch (err: any) {
          set(() => ({ isLoading: false, error: getError(err) }));
        }
      },
      clear: () => {
        set(() => initialState);
        localStorage.clear();
      }
    }),
    {
      name: 'app-storage',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default useAppStore;
