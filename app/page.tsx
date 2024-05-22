"use client";

import DataTable from "./components/DataTable";
import Header from "./components/Header";
import { OrdersProvider } from "./context/OrderContext";
import { TableRowSelectionProvider } from "./context/TableRowSelectionContext";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <OrdersProvider>
        <TableRowSelectionProvider>
          <Header />
          <DataTable />
        </TableRowSelectionProvider>
      </OrdersProvider>
    </ThemeProvider>
  );
}
