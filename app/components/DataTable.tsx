"use client";

import Skeleton from "@mui/material/Skeleton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { useContext, useEffect } from "react";
import useGetOrders from "../api/useGetOrders";
import { OrdersContext, OrdersDispatchContext } from "../context/OrderContext";
import Filters from "./Controls";

const columns: GridColDef[] = [
  { field: "orderId", headerName: "Order ID", flex: 1.25 },
  { field: "customerName", headerName: "Customer Name", flex: 1 },
  { field: "createdDate", headerName: "Creation Date", flex: 1 },
  {
    field: "createdByUserName",
    headerName: "Created By",
    flex: 1,
  },
  {
    field: "orderType",
    headerName: "Order Type",
    flex: 0.75,
  },
];

const DataTable = () => {
  const { data, error, isLoading } = useGetOrders();

  const orders = useContext(OrdersContext);
  const dispatch = useContext(OrdersDispatchContext);

  useEffect(() => {
    dispatch({ payload: data, type: "fetch" });
  }, [data, dispatch]);

  if (error) {
    console.log(error);
  }

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton height="80px" />
          <Skeleton height="80px" />
          <Skeleton height="80px" />
          <Skeleton height="80px" />
          <Skeleton height="80px" />
        </>
      ) : (
        <div style={{ height: "auto", width: "100%" }}>
          <Filters />
          <DataGrid
            rows={orders || data}
            columns={columns}
            getRowId={(row) => row.orderId}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 25 },
              },
            }}
            pageSizeOptions={[25, 50]}
            checkboxSelection
          />
        </div>
      )}
    </>
  );
};

export default DataTable;
