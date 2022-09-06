import NodePanel from "./NodePanel";
import LinkPanel from "./LinkPanel";
import History from "./History";
import ResetButton from "../Components/CustomeNodes/ResetButton";

const RightLayout = () => {
  return (
    <div>
      <ResetButton />
      <div className="flex-row space-y-8">
        <NodePanel />
        <LinkPanel />
        <History />
      </div>
    </div>
  );
};

export default RightLayout;
