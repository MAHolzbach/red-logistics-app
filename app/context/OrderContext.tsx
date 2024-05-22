"use client";

import { ReactNode, createContext, useReducer } from "react";
import { TOrder } from "../types/types";

export const OrdersContext = createContext<TOrder[]>([]);
export const OrdersDispatchContext = createContext<any>(null);

export function OrdersProvider({ children }: { children: ReactNode }) {
  const [orders, dispatch] = useReducer(ordersReducer, initialOrders);

  return (
    <OrdersContext.Provider value={orders}>
      <OrdersDispatchContext.Provider value={dispatch}>{children}</OrdersDispatchContext.Provider>
    </OrdersContext.Provider>
  );
}

function ordersReducer(orders: TOrder[], action: any): TOrder[] {
  switch (action.type) {
    case "fetch": {
      return action.payload;
    }
    case "create": {
      return [...orders, action.payload];
    }
    case "filterByType": {
      return action.payload;
    }
    case "filterBySearch": {
      return action.payload;
    }
    case "delete": {
      return action.payload;
    }
    default: {
      return orders;
    }
  }
}

const initialOrders: TOrder[] = [
  { createdByUserName: "", createdDate: "", customerName: "", orderId: "", orderType: "" },
];
