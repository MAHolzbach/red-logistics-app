import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { FormEvent, useContext, useState } from "react";
import { OrdersDispatchContext } from "../context/OrderContext";
import { TOriginalDataProp } from "../types/types";

export default function Searchbar({ originalData }: TOriginalDataProp) {
  const dispatch = useContext(OrdersDispatchContext);

  const [textInput, setTextInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredTypes = originalData.filter((item: { orderId: string }) => item.orderId.includes(textInput));

    dispatch({ payload: filteredTypes, type: "filterBySearch" });
  };

  return (
    <form className="flex" onSubmit={(e) => handleSubmit(e)}>
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
              <Button variant="text" type="submit">
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
