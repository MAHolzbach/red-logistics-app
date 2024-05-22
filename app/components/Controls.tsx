import { TOriginalDataProp } from "../types/types";
import DeleteOrder from "./DeleteOrder";
import OrderDialog from "./OrderDialog";
import Searchbar from "./Searchbar";
import TypeFilter from "./TypeFilter";

const Controls = ({ originalData }: TOriginalDataProp) => {
  return (
    <div className="flex flex-col justify-between p-4 md:flex-row">
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <Searchbar originalData={originalData} />
        <TypeFilter originalData={originalData} />
      </div>
      <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
        <DeleteOrder />
        <OrderDialog type={"new"} />
      </div>
    </div>
  );
};

export default Controls;
