import DataTable from "./components/DataTable";
import { OrdersProvider } from "./context/OrderContext";

export default function Page() {
  return (
    <OrdersProvider>
      <DataTable />
    </OrdersProvider>
  );
}
