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
  console.log(orders, action);
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
    // case "added": {
    //   return [
    //     ...tasks,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       done: false,
    //     },
    //   ];
    // }
    // case "changed": {
    //   return tasks.map((t) => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    // case "deleted": {
    //   return tasks.filter((t) => t.id !== action.id);
    // }
    default: {
      return orders;
    }
  }
}

const initialOrders: TOrder[] = [
  { createdByUserName: "", createdDate: "", customerName: "", orderId: "", orderType: "" },
];
