import { useState, memo } from "react";
import { NodeProps, Node, Handle, Position } from "react-flow-renderer";
import useStore from "../../layouts/store";
import { documentSubNodeDetails } from "../../utils/NodeDetails";
import { AiFillFileAdd } from "react-icons/ai";
import SideNodePanel from "../SideNodePanel";
import shallow from "zustand/shallow";

function DocumentBucketNode({ id, data }: NodeProps<Node>) {
  const setNodes = useStore((state) => state.setNodes, shallow);
  const [bucketName, setBucketName] = useState<string>("Bucket");

  return (
    <div className="flex">
      <div className="border-2 border-black rounded w-64 h-64 bg-white p-2">
        <Handle type="target" position={Position.Top} />
        <div className="flex justify-around border-b border-black pb-2">
          <div className="text-black ml-2 flex  text-base">
            <input
              type="text"
              className="bg-white px-2 focus:outline-none"
              placeholder="Your bucket name ..."
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
            />
          </div>
          <div className="flex ">
            <div
              onClick={() => setNodes(documentSubNodeDetails(id))}
              className=" flex justify-center items-center text-gray-800 text-base font-bold  bg-white rounded-md w-8 border border-gray-600 cursor-pointer hover:bg-gray-300"
            >
              <div>
                <AiFillFileAdd />
              </div>
            </div>
          </div>
          <Handle type="source" position={Position.Bottom} />
        </div>
      </div>
      <SideNodePanel id={id} />
    </div>
  );
}

export default memo(DocumentBucketNode);
