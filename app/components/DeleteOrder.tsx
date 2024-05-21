import Button from "@mui/material/Button";

export default function DeleteOrder() {
  //! 1. Implement dedicated context for the row selection.
  //! 2. Update that context on checkbox changes inside the DataTable component: https://mui.com/x/react-data-grid/row-selection/#controlled-row-selection
  //! 3. Import that context here, and filter in memory orders based on what has been selected.
  return <Button color="error">Delete Selected</Button>;
}
