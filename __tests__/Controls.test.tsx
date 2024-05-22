import Controls from "@/app/components/Controls";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Controls", () => {
  it("renders a Add Order button", () => {
    render(
      <Controls
        originalData={[
          {
            orderId: "23c95a81-661a-49c3-941f-3dc51f78f54d",
            orderType: "SaleOrder",
            customerName: "Home Depot",
            createdDate: "Friday, 10 May 2024",
            createdByUserName: "Austin Bearden",
          },
        ]}
      />
    );

    const button = screen.getByText("Add Order");

    expect(button).toBeInTheDocument();
  });
});
