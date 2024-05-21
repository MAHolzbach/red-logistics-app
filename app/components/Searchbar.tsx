import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { useContext, useState } from "react";
import { OrdersDispatchContext } from "../context/OrderContext";
import { TOriginalDataProp } from "../types/types";

export default function Searchbar({ originalData }: TOriginalDataProp) {
  const dispatch = useContext(OrdersDispatchContext);

  const [textInput, setTextInput] = useState("");

  const handleSubmit = () => {
    const filteredTypes = originalData.filter((item: { orderId: string }) => item.orderId.includes(textInput));

    dispatch({ payload: filteredTypes, type: "filterBySearch" });
  };

  return (
    <div className="flex">
      <TextField
        onChange={(e) => setTextInput(e.target.value)}
        value={textInput}
        margin="none"
        id="search"
        name="search"
        label="Search By ID"
        type="text"
        fullWidth
        variant="outlined"
        size="small"
        InputProps={{
          style: {
            padding: 0,
          },
          endAdornment: (
            <InputAdornment position="end">
              <Button onClick={handleSubmit}>
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
