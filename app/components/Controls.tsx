import { useState } from "react";
import NewOrderDialog from "./NewOrderDialog";

const Controls = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className="p-4">
      <NewOrderDialog />
    </div>
  );
};

export default Controls;
