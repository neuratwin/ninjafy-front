import {Handle, Position, NodeProps, Node} from "react-flow-renderer";
import useStore from "../../layouts/store";


function ConditonNode({id, data}:NodeProps<Node> ) {
  const deleteNode = useStore((state)=>state.deleteNode)

  return (
    <div>
    <Handle type="target" position={Position.Top} id="xatop"/>
   
      <div className="border border-black p-2 rounded-lg text-cyan-600">
      <div
        onClick={()=>deleteNode(id)} 
        className="bg-gray-800 w-12 text-center rounded-lg text-xs text-white cursor-pointer my-2">
          Delete
      </div>
        Condition Approved ?
      </div>

      <Handle type="source" position={Position.Bottom} id="xab" />
      </div>
    );
}

export default ConditonNode;
