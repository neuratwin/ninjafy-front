import { Handle, Position, NodeProps, Node } from "react-flow-renderer";
import SideNodePanel from "../SideNodePanel";
import { memo, useState, ChangeEvent, useCallback } from "react";
import useStore from "../../layouts/store";

const InformationNode = ({ id, data }: NodeProps<Node>) => {
  const [nodeName, setNodeName] = useState((data as any).nodeName);
  const [nodeInformation, setNodeInformation] = useState(
    (data as any).nodeInformation
  );
  const setNodeData = useStore((state) => state.setNodeData);

  const onChangeNodeName = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setNodeName(evt.target.value);
      setNodeData("nodeName", id, evt.target.value);
    },
    [id, setNodeData]
  );
  const onChangeInfo = useCallback(
    (evt: ChangeEvent<HTMLTextAreaElement>) => {
      setNodeInformation(evt.target.value);
      setNodeData("nodeInformation", id, evt.target.value);
    },
    [id, setNodeData]
  );

  return (
    <div className="flex">
      <div className="border-black border-2 border p-4 rounded bg-white ">
        <Handle type="target" position={Position.Top} id="nodextop1"></Handle>
        <div className="flex-row space-y-2">
          <div>
            <input
              type="text"
              placeholder="Node Name"
              className="placeholder:text-gray-300 placeholder:italic focus:outline-none"
              value={nodeName}
              onChange={onChangeNodeName}
            ></input>
          </div>
          <div>
            <textarea
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              className="text-xs text-gray-800 outline-none border-0 box-border w-full h-full focus:outline-none placeholder:text-gray-300 placeholder:italic"
              placeholder="Add node description"
              value={nodeInformation}
              onChange={onChangeInfo}
            ></textarea>
          </div>
        </div>
        <Handle type="source" position={Position.Bottom} id="nodex1"></Handle>
      </div>
      <SideNodePanel id={id} />
    </div>
  );
};

export default memo(InformationNode);
