import { useCallback, useState, ChangeEvent, memo } from "react";
import { Handle, Position, NodeProps, Node } from "react-flow-renderer";
import SideNodePanel from "../SideNodePanel";
import useStore from "../../layouts/store";

function DocumentNode({ id, data }: NodeProps<Node>) {
  const [documentName, setDocumentName] = useState<string>((data as any).value);
  const [nodeColor, setNodeColor] = useState<string>("#fff");
  const setNodeData = useStore((state) => state.setNodeData);

  const onChange = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      setDocumentName(evt.target.value);
      setNodeData("value", id, evt.target.value);
    },
    [id, setNodeData]
  );

  return (
    <div className="flex">
      <div
        style={{ backgroundColor: nodeColor }}
        className="border p-2 border-gray-600 rounded-lg text-sm bg-white "
      >
        <Handle type="target" position={Position.Top} />
        <div>
          {documentName ? documentName.split("\\").pop() : ""}
          {!documentName && (
            <div>
              <label htmlFor="text" className="block text-sm">
                File link
              </label>
              <div>
                <div className=" text-center border w-32 border-gray-700 p-2 rounded-lg text-sm">
                  Upload your file
                </div>
                <div>
                  <input
                    type="file"
                    id="avatar"
                    name="avatar"
                    accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/msword"
                    className="opacity-0 w-32 -mt-8 absolute text-xs border-2 rounded-lg"
                    onChange={onChange}
                  />
                </div>
              </div>
              <div className="flex ">
                <div className="absolute ml-28 cursor-nwse-resize opacity-0">
                  ++
                </div>
              </div>
            </div>
          )}
        </div>
        <Handle type="source" position={Position.Bottom} id="b" />
      </div>
      <SideNodePanel
        id={id}
        nodeColor={nodeColor}
        setNodeColor={setNodeColor}
      />
    </div>
  );
}

export default memo(DocumentNode);
