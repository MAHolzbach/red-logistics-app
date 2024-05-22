import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { FormEvent, useContext, useState } from "react";

import { OrdersContext, OrdersDispatchContext } from "../context/OrderContext";
import { TableRowSelectionContext } from "../context/TableRowSelectionContext";

export default function DeleteOrder() {
  const orders = useContext(OrdersContext);
  const selectedOrders = useContext(TableRowSelectionContext);
  const deleteOrdersDispatch = useContext(OrdersDispatchContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color="error" disabled={!selectedOrders.length} onClick={handleClickOpen}>
        Delete Selected
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const filteredOrders = orders.filter((order) => selectedOrders.indexOf(order.orderId) === -1);
            deleteOrdersDispatch({ payload: filteredOrders, type: "delete" });

            handleClose();
          },
        }}
      >
        <DialogTitle>Delete Selected Orders</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>You are altering the deal. We pray you do not alter it any further.</p>
            <p>Please confirm you would like to delete the selected orders.</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
