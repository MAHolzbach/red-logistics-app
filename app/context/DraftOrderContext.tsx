"use client";

import { ReactNode, createContext, useReducer } from "react";
import { TOrder } from "../types/types";

export const DraftOrderContext = createContext<TOrder | null>(null);
export const DraftOrderDispatchContext = createContext<any>(null);

export function DraftOrderProvider({ children }: { children: ReactNode }) {
  const [draftOrder, draftOrderDispatch] = useReducer(draftOrderReducer, initialDraftOrder);

  return (
    <DraftOrderContext.Provider value={draftOrder}>
      <DraftOrderDispatchContext.Provider value={draftOrderDispatch}>{children}</DraftOrderDispatchContext.Provider>
    </DraftOrderContext.Provider>
  );
}

function draftOrderReducer(draftOrder: TOrder, action: any): any {
  switch (action.type) {
    case "create": {
      return action.payload;
    }
    case "clear": {
      return action.payload;
    }
    default: {
      return draftOrder;
    }
  }
}

const initialDraftOrder: TOrder | null = null;
