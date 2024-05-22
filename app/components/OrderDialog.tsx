import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";

import { FormEvent, useContext, useState } from "react";
import { OrdersDispatchContext } from "../context/OrderContext";

import { v4 as uuidv4 } from "uuid";
import { DraftOrderContext, DraftOrderDispatchContext } from "../context/DraftOrderContext";

export default function OrderDialog({ type }: { type: string }) {
  const dispatch = useContext(OrdersDispatchContext);
  const dispatchDraftOrder = useContext(DraftOrderDispatchContext);

  const draft = useContext(DraftOrderContext);

  const [open, setOpen] = useState(false);
  const [isDraft, setIsDraft] = useState(false);

  const resumingDraft = type === "draft";

  const handleClickOpen = () => {
    setIsDraft(false);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDraftOrderDispatch = (payload: any, type: string) => {
    dispatchDraftOrder({ payload, type });
  };

  const handleOrderDispatch = (payload: any, type: string) => {
    dispatch({ payload, type });

    if (resumingDraft) {
      dispatchDraftOrder({ payload: null, type: "clear" });
    }
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen}>
        {resumingDraft ? "Resume Draft" : "Add Order"}
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

            formJson.saveAsDraft === "on"
              ? handleDraftOrderDispatch(formJson, "create")
              : handleOrderDispatch(formJson, "create");

            handleClose();
          },
        }}
      >
        <DialogTitle>
          <p>New Order</p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter the new order data.</DialogContentText>
          <TextField
            InputProps={{
              readOnly: true,
            }}
            defaultValue={resumingDraft ? draft?.orderId : uuidv4()}
            margin="dense"
            id="orderId"
            name="orderId"
            label="Order ID"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            defaultValue={resumingDraft ? draft?.customerName : ""}
            autoFocus
            required={!isDraft}
            margin="dense"
            id="customerName"
            name="customerName"
            label="Customer Name"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            defaultValue={resumingDraft ? draft?.createdDate : new Date().toDateString()}
            InputProps={{
              readOnly: true,
            }}
            required={!isDraft}
            margin="dense"
            id="createdDate"
            name="createdDate"
            label="Creation Date"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            defaultValue={resumingDraft ? draft?.createdByUserName : ""}
            autoFocus
            required={!isDraft}
            margin="dense"
            id="createdByUserName"
            name="createdByUserName"
            label="Created By"
            type="text"
            fullWidth
            variant="outlined"
          />
          <TextField
            defaultValue={resumingDraft ? draft?.orderType : ""}
            autoFocus
            required={!isDraft}
            margin="dense"
            id="orderType"
            name="orderType"
            label="Order Type"
            type="text"
            fullWidth
            variant="outlined"
          />
          <FormControlLabel
            control={<Checkbox id="saveAsDraft" name="saveAsDraft" onClick={() => setIsDraft(!isDraft)} />}
            label="Save as Draft"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{isDraft ? "Save Draft" : "Submit Order"}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
