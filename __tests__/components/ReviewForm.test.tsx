import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import ReviewForm from '../../src/components/ReviewForm';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("ReviewForm", () => {

  it("should render user information", async () => {
    const mockSave = jest.fn();
    const userInfo = {
      username: "dummy",
      email: "dummy@email.com",
      country: "Peru"
    }
    renderForm(<ReviewForm saveData={mockSave} defaultValues={userInfo} />);

    waitFor(() => {
      expect(screen.getByTestId("username").innerHTML).toContain(userInfo.username)
      expect(screen.getByTestId("email").innerHTML).toContain(userInfo.email)
      expect(screen.getByTestId("country").innerHTML).toContain(userInfo.country)
    })
  });


});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
