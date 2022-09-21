import { render, screen } from "@testing-library/react";
import ProductItem from ".";

const mockProductItem = {
  imgSrc: "#",
  name: "product1",
  price: "1000",
  description: "product",
};
test("renders Product item component", () => {
  render(<ProductItem {...mockProductItem} />);

  const linkElement = screen.getByText(/product1/i);

  expect(linkElement).toBeInTheDocument();
});
