import { NodeProps, Node } from "react-flow-renderer";
import useStore from "../../layouts/store";
import { documentSubNodeDetails } from "../../utils/NodeDetails";

function DocumentBucketNode({id, data}:NodeProps<Node>) {
  const [setNodes, deleteNode] = useStore((state)=>[state.setNodes, state.deleteNode])

  return (
    <div className="border border-black rounded-lg w-64 h-64 bg-gray-100 p-2">
    <div className="flex justify-between border-b border-black pb-2">
    <div className="text-gray-500 ml-2 flex  text-base">
      Document Bucket
      </div>
      <div
    onClick={()=>deleteNode(id)} 
    className="bg-gray-800 w-12 text-center rounded-lg text-xs text-white cursor-pointer my-2">Delete</div>
      <div
        onClick={() => setNodes(documentSubNodeDetails(id))}
        className="text-gray-800 text-base font-bold  bg-white rounded-md w-8 border border-gray-600 cursor-pointer hover:bg-gray-300"
      >
        +
      </div>
      </div>  
      </div>
  );
}

export default DocumentBucketNode;
