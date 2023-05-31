import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PasswordForm from '../../src/components/PasswordForm';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("PasswordForm", () => {

  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    const { user } = renderForm(<PasswordForm saveData={mockSave} />);
    await user.type(screen.getByTestId("password"), "dummyPass");
    await user.type(screen.getByTestId("repeat_password"), "dummyPass1");

    expect(mockSave).not.toBeCalled();
  });

});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
