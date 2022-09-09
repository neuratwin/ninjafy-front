import { Handle, Position, NodeProps, Node } from "react-flow-renderer";
import { memo } from "react";
import SideNodePanel from "../SideNodePanel";

function ConditonNode({ id, data }: NodeProps<Node>) {
  return (
    <div className="flex">
      <div>
        <Handle type="target" position={Position.Top} id="xatop" />

        <div className="border border-black p-2 rounded-lg text-cyan-600">
          Condition Approved ?
        </div>

        <Handle type="source" position={Position.Bottom} id="xab" />
      </div>
      <SideNodePanel id={id} />
    </div>
  );
}

export default memo(ConditonNode);
