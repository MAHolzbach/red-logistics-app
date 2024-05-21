export type TOrder = {
  createdByUserName: string;
  createdDate: string;
  customerName: string;
  orderId: string;
  orderType: string;
};

export type TOrderFetchAction = {
  type: string;
  payload: TOrder[];
};

export type TOriginalDataProp = {
  originalData: TOrder[];
};
