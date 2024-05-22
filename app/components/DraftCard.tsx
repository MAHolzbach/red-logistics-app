"use client";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import { useContext } from "react";
import { DraftOrderContext } from "../context/DraftOrderContext";
import OrderDialog from "./OrderDialog";

const DraftCard = () => {
  const draft = useContext(DraftOrderContext);

  return (
    <div className="m-4">
      {draft ? (
        <Card>
          <CardContent>
            <p className="text-lg font-bold">Draft Order</p>
            <p className="text-md">
              <span className="font-bold">Order ID:</span> {draft.orderId || "N/A"}
            </p>
            <p className="text-md">
              <span className="font-bold">Creation Date:</span> {draft.createdDate || "N/A"}
            </p>
            <p className="text-md">
              <span className="font-bold">Created By:</span> {draft.createdByUserName || "N/A"}
            </p>
            <p className="text-md">
              <span className="font-bold">Customer Name:</span> {draft.customerName || "N/A"}
            </p>
            <p className="text-md">
              <span className="font-bold">Order Type:</span> {draft.orderType || "N/A"}
            </p>
            <CardActions>
              <OrderDialog type={"draft"} />
            </CardActions>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent>
            <p>No current Drafts</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default DraftCard;
