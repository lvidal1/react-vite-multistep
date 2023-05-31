import { BrowserRouter } from 'react-router-dom';
import { render } from "@testing-library/react"
import Layout from "@components/Layout"


const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate
}));

describe("<Layout />", function () {

  it("should mount correctly", function () {
    const screen = render(<BrowserRouter><Layout /></BrowserRouter>)

    const layout = screen.getByTestId("layout")

    expect(layout).toBeInTheDocument();
  })

})