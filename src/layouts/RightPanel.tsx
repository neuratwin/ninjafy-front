import { useState } from "react";
import useStore from "./store";

const RightLayout = () => {
  const [bucketId, setBucketId] = useState<string>(`${Math.random()}`);

  const setNodes = useStore((state) => state.setNodes);
  const clickHandler = () => {
    setNodes({
      id: `${Math.random()}`,
      type: "documentNode",
      data: { value: 123 },
      position: { x: Math.random() * 100, y: Math.random() * 100 },
    });
  };

  const addSubNode = (documentBucketId: string) => {
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
    <>
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
    </>
  );
};

export default RightLayout;
