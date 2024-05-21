import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContext, useState } from "react";
import { OrdersDispatchContext } from "../context/OrderContext";
import { TOriginalDataProp } from "../types/types";

export default function TypeFilter({ originalData }: TOriginalDataProp) {
  const dispatch = useContext(OrdersDispatchContext);

  const [orderType, setOrderType] = useState<string[]>([]);

  const defaultOrderTypes = ["Standard", "SaleOrder", "PurchaseOrder", "TransferOrder", "ReturnOrder"];

  const handleChange = (event: SelectChangeEvent<typeof orderType>) => {
    const {
      target: { value },
    } = event;
    setOrderType(typeof value === "string" ? value.split(",") : value);
  };

  const handleSubmit = () => {
    const filteredTypes = orderType.length
      ? originalData.filter((item: { orderType: string }) => orderType.includes(item.orderType))
      : originalData;

    dispatch({ payload: filteredTypes, type: "filterByType" });
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Order Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          size="small"
          margin="dense"
          multiple
          value={orderType}
          onChange={handleChange}
          onClose={handleSubmit}
          input={<OutlinedInput label="Order Type" />}
          renderValue={(selected) => selected.join(", ")}
        >
          {defaultOrderTypes.map((type) => (
            <MenuItem key={type} value={type}>
              <Checkbox checked={orderType.indexOf(type) > -1} />
              <ListItemText primary={type} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
