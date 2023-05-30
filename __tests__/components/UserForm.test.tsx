import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import UserForm from '../../src/components/UserForm';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("UserForm", () => {

  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    const { user } = renderForm(<UserForm saveData={mockSave} />);
    await user.type(screen.getByTestId("username"), "Leo");
    await user.type(screen.getByTestId("email"), "Vidal");
    await user.click(screen.getByTestId("country"));

    expect(mockSave).not.toBeCalled();
  });

});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
