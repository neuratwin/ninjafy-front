import NodePanel from "./NodePanel";
import LinkPanel from "./LinkPanel";
import History from "./History";
import ResetButton from "../Components/CustomeNodes/ResetButton";

const RightPanel = () => {
  return (
    <div className="border-l border-gray-200 h-full py-2">
      <ResetButton />
      <div className="flex-row space-y-8">
        <NodePanel />
        <LinkPanel />
        <History />
      </div>
    </div>
  );
};

export default RightPanel;
