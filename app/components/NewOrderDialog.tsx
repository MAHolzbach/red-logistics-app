import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import { FormEvent, useContext, useState } from "react";
import { OrdersDispatchContext } from "../context/OrderContext";

import { v4 as uuidv4 } from "uuid";

export default function NewOrderDialog() {
  const dispatch = useContext(OrdersDispatchContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        Add Order
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            dispatch({ payload: formJson, type: "create" });

            handleClose();
          },
        }}
      >
        <DialogTitle>New Order</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter the new order data.</DialogContentText>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            defaultValue={uuidv4()}
            margin="dense"
            id="orderId"
            name="orderId"
            label="Order ID"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="customerName"
            name="customerName"
            label="Customer Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            InputProps={{
              readOnly: true,
            }}
            required
            defaultValue={new Date().toDateString()}
            margin="dense"
            id="createdDate"
            name="createdDate"
            label="Creation Date"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="createdByUserName"
            name="createdByUserName"
            label="Created By"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="orderType"
            name="orderType"
            label="Order Type"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
