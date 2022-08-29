import NodePanel from "./NodePanel";
import LinkPanel from "./LinkPanel";
import ResetButton from "../Components/CustomeNodes/ResetButton";

const RightLayout = () => {
 
  return (
    <div>
      <ResetButton />
      <div className="flex-row">
        <NodePanel />
        <LinkPanel />
      </div>
    </div>
  );
};

export default RightLayout;
