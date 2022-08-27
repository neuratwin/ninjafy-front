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
      extent: "parent",
    });
  };

  const bucketCreator = () => {
    setBucketId(`${Math.random()}`);
    setNodes({
      id: bucketId,
      data: {
        label: (
          <div className="text-blue-400">
            Document Bucket
            <div
              onClick={() => addSubNode(bucketId)}
              className="rounded-lg border border-black cursor-pointer text-gray-600"
            >
              Add subNodes
            </div>
          </div>
        ),
      },
      position: { x: Math.random() * 100, y: Math.random() * 100 },
      style: {
        width: 250,
        height: 250,
        backgroundColor: "rgba(240,240,240,0.25)",
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
