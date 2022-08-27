import { useState } from "react";
import useStore from "./store";
import { Position } from "react-flow-renderer";

const RightLayout = () => {
  const [bucketId, setBucketId] = useState<string>(`${Math.random()}`);

  const setNodes = useStore((state) => state.setNodes);

// adding resizable node
const addResizableBlock = () => {
  setNodes(  
    {
      id: `${Math.random()}`,
      position: { x: 100, y: 100 },
      data: {
        text: "I am an editable, resizable and rotatable node.",
        color: "rgba(240,240,240,0.7)",
      },
      type: "resizable",
      sourcePosition: Position.Top,
      targetPosition: Position.Bottom,
     },
    )
}

  const clickHandler = () => {
    console.log("addDocumentNode")
    setNodes({
      id: `${Math.random()}`,
      type: "documentNode",
      data: { value: 123 },
      position: { x: Math.random() * 100, y: Math.random() * 100 },
    });
  };

  const addSubNode = (documentBucketId: string) => {
    console.log("addSubNode")
    setNodes({
      id: `${Math.random()}`,
      type: "documentNode",
      data: { value: 123 },
      position: { x: Math.random() * 100, y: Math.random() * 100 },
      parentNode: documentBucketId,
      extent: "parent"

    });
  };

  const bucketCreator = () => {
    console.log("addbucketCreator")
    setBucketId(`${Math.random()}`);
    setNodes({
      id: bucketId,
      data: {
        label: (

          <div className="flex justify-between border-b border-black pb-2">
          <div className="text-cyan-500 ml-2 flex  text-base">
            Document Bucket
            </div>
            <div
              onClick={() => addSubNode(bucketId)}
              className="text-gray-800 text-base font-bold  bg-white rounded-md w-8 border border-gray-600 cursor-pointer hover:bg-gray-300"

            >
              +
            </div>
            
            </div>
          
        ),
      },
      position: { x: Math.random() * 100, y: Math.random() * 100 },
      style: {
        width: 250,
        height: 250,
        backgroundColor: "rgba(240,240,240,0.5)",
      },
    });
  };

  return (
    <div className="flex-row">

      <div
        onClick={clickHandler}
        className="text-xs border border-black text-center p-2 m-2  cursor-pointer rounded-lg"
      >
        Document Node
      </div>
      <div
        onClick={bucketCreator}
        className="text-xs border border-black text-center p-2 m-2 cursor-pointer rounded-lg"
      >
        Document Bucket
      </div>
      <div
      onClick={addResizableBlock}
        className="text-xs border border-black text-center p-2 m-2 cursor-pointer rounded-lg"
        >
        Resizable Node
      </div>

    </div>
  );
};

export default RightLayout;
