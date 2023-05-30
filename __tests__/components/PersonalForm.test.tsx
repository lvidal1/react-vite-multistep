import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import PersonalForm from '../../src/components/PersonalForm';

describe("PersonalForm", () => {

  it("should validate form fields", async () => {
    const mockSave = jest.fn();
    const { user } = renderForm(<PersonalForm saveData={mockSave} />);
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
