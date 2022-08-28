import NodePanel from "./NodePanel";
import LinkPanel from "./LinkPanel";

const RightLayout = () => {
 
  return (
    <div className="flex-row">
      <NodePanel />
      <LinkPanel />
    </div>
    
  );
};

export default RightLayout;
