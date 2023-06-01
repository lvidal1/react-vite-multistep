import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import HomeForm from '../../src/components/HomeForm';
import { IUser } from '../../src/store/types';


jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

type TMock = () => void;

describe("HomeForm", () => {
  let mockStart: TMock, mockReview: TMock, userState: IUser

  beforeEach(() => {
    mockStart = jest.fn();
    mockReview = jest.fn();
    userState = { username: "lvidalio", email: "lvidal@gmail.com" };
  })

  it("should trigger handleStart callback", async () => {

    const { user } = renderForm(<HomeForm handleReview={mockReview}
      handleStart={mockStart}
      userInfo={{}}
      wizardCompleted={false} />);

    await user.click(screen.getByTestId("button"));

    expect(mockStart).toBeCalled();
  });

  it("should trigger handleReview callback", async () => {

    const { user } = renderForm(<HomeForm handleReview={mockReview}
      handleStart={mockStart}
      userInfo={userState}
      wizardCompleted={true} />);

    await user.click(screen.getByTestId("HomeForm.username"));

    expect(mockReview).toBeCalled();
  });

  it("should username should be shown", async () => {

    renderForm(<HomeForm handleReview={mockReview}
      handleStart={mockStart}
      userInfo={userState}
      wizardCompleted={true} />);

    expect(screen.getByTestId("HomeForm.title")).toBeInTheDocument()
  });

});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
