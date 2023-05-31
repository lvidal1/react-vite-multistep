import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { IAppStore, ICountryResponse, IStep } from './types';
import { getCountries } from '../services/countries';

const steps: IStep[] = [
  { path: '/initial-info', completed: false },
  { path: '/password', completed: false },
  { path: '/review', completed: false }
];

const initialState = {
  countries: [],
  user: undefined,
  isLoading: false,
  error: undefined,
  step: 0,
  steps
};

const getError = (err: any) => err?.message || err?.data?.message || 'Unexpected network error.';

const appStore = create(
  devtools(
    persist<IAppStore>(
      (set, get) => ({
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
        setUserInfo: (payload) => {
          const userDetails = get().user;
          set(() => ({ user: { ...userDetails, ...payload } }));
        },
        clear: () => {
          set(() => initialState);
          localStorage.clear();
        },
        setCurrentStep: (step) => {
          set(() => ({ step }));
        },
        completeStep: (stepIndex) => {
          const currentSteps = get().steps;
          const newStep = { ...currentSteps[stepIndex], completed: true };

          currentSteps.splice(stepIndex, 1, newStep);
          set(() => ({ steps: currentSteps }));
        }
      }),
      {
        name: 'app-storage',
        storage: createJSONStorage(() => localStorage)
      }
    ),
    { anonymousActionType: 'unknown' }
  )
);

export default appStore;
