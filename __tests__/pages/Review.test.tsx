import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Review from '../../src/pages/Review';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("Review page", () => {

  it("should include form", async () => {

    renderForm(<Review />);

    await waitFor(() => {
      expect(screen.getByTestId("ReviewForm")).toBeInTheDocument()
    })

  });

});

const renderForm = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(component),
  };
}
