import { TOriginalDataProp } from "../types/types";
import NewOrderDialog from "./NewOrderDialog";
import Searchbar from "./Searchbar";
import TypeFilter from "./TypeFilter";

const Controls = ({ originalData }: TOriginalDataProp) => {
  return (
    <div className="flex p-4 space-x-2">
      <Searchbar originalData={originalData} />
      <NewOrderDialog />
      <TypeFilter originalData={originalData} />
    </div>
  );
};

export default Controls;
