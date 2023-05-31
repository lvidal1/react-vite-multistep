import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import InitialInfo from '../../src/pages/InitialInfo';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("InitialInfo page", () => {

  it("should include form", async () => {

    renderForm(<InitialInfo />);

    await waitFor(() => {
      expect(screen.getByTestId("userForm")).toBeInTheDocument()
    })

  });

});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
