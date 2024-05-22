import OrderDialog from "@/app/components/OrderDialog";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("OrderDialog", () => {
  it("renders an Order Dialog button and form for a draft order", async () => {
    render(<OrderDialog type={"draft"} />);

    const button = screen.getByText("Resume Draft");

    expect(button).toBeInTheDocument();

    await userEvent.click(button);

    const customerNameInput = await screen.findByLabelText("Customer Name *");

    expect(customerNameInput).toBeInTheDocument();

    await userEvent.type(customerNameInput, "Test");

    expect(customerNameInput).toHaveValue("Test");
  });
});
