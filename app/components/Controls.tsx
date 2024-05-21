import NewOrderDialog from "./NewOrderDialog";
import TypeFilter from "./TypeFilter";

const Controls = ({ originalData }: any) => {
  return (
    <div className="flex p-4 justify-between">
      <NewOrderDialog />
      <TypeFilter originalData={originalData} />
    </div>
  );
};

export default Controls;
