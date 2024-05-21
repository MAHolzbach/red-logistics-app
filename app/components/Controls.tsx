import { TOriginalDataProp } from "../types/types";
import DeleteOrder from "./DeleteOrder";
import NewOrderDialog from "./NewOrderDialog";
import Searchbar from "./Searchbar";
import TypeFilter from "./TypeFilter";

const Controls = ({ originalData }: TOriginalDataProp) => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex space-x-2">
        <Searchbar originalData={originalData} />
        <TypeFilter originalData={originalData} />
      </div>
      <div className="space-x-2">
        <DeleteOrder />
        <NewOrderDialog />
      </div>
    </div>
  );
};

export default Controls;
