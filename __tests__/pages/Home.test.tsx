import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Home from '../../src/pages/home';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string): string => str,
    };
  },
}));

describe("Home page", () => {

  it("should include form", async () => {

    renderPage(<Home />);

    await waitFor(() => {
      expect(screen.getByTestId("HomeForm")).toBeInTheDocument()
    })

  });

});

const renderPage = (component: any) => {
  return {
    user: userEvent.setup(),
    ...render(<BrowserRouter>
      {component}
    </BrowserRouter>),
  };
}
