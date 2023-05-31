import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Password from '../../src/pages/Password';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("Password page", () => {

  it("should include form", async () => {

    renderForm(<Password />);

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
