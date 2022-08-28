import {Handle, Position} from "react-flow-renderer";
function ConditonNode() {
  return (
    <>
    <Handle type="target" position={Position.Top} id="xatop"/>
      <div className="border border-black p-2 rounded-lg text-cyan-600">
        Condition Approved ?
      </div>
      <Handle type="source" position={Position.Bottom} id="xab" />
      </>
    );
}

export default ConditonNode;
