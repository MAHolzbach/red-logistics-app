import DataTable from "./components/DataTable";
import { OrdersProvider } from "./context/OrderContext";

export default function Page() {
  return (
    <OrdersProvider>
      {/* //TODO: Add Header component */}
      <DataTable />
    </OrdersProvider>
  );
}
