"use client";

import { ReactNode, createContext, useReducer } from "react";

export const TableRowSelectionContext = createContext<string[]>([]);
export const TableRowSelectionDispatchContext = createContext<any>(null);

export function TableRowSelectionProvider({ children }: { children: ReactNode }) {
  const [selectedRows, selectedRowsDispatch] = useReducer(tableRowSelectionReducer, initialOrders);

  return (
    <TableRowSelectionContext.Provider value={selectedRows}>
      <TableRowSelectionDispatchContext.Provider value={selectedRowsDispatch}>
        {children}
      </TableRowSelectionDispatchContext.Provider>
    </TableRowSelectionContext.Provider>
  );
}

function tableRowSelectionReducer(selectedRows: string[], action: any): string[] {
  switch (action.type) {
    case "update": {
      return action.payload;
    }
    default: {
      return selectedRows;
    }
  }
}

const initialOrders: string[] = [];
