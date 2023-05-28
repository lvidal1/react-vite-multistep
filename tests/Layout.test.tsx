import { render } from "@testing-library/react"
import Layout from "@components/Layout"

describe("<Layout />", function () {

  it("should mount correctly", function () {
    const screen = render(<Layout />)

    const layout = screen.getByTestId("layout")

    expect(layout).toBeInTheDocument();
  })

})