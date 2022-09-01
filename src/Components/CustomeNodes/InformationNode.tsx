import { Handle, Position, NodeProps, Node } from "react-flow-renderer"
import useStore from "../../layouts/store";

const InformationNode = ({id, data}:NodeProps<Node> ) => {

const deleteNode = useStore((state)=>state.deleteNode)

  return (
    <div className="border-black border p-4 rounded-lg bg-red-500 text-white">
      <div
        onClick={()=>deleteNode(id)} 
        className="bg-gray-800 w-12 text-center rounded-lg text-xs text-white cursor-pointer my-2">Delete</div>
     <Handle type="target" position={Position.Top} id="nodextop1"></Handle>
     <div className="flex-row space-y-2">
     <div>
      <input type="text" placeholder="Node Name" className="bg-red-500 placeholder:text-gray-300 placeholder:italic  border-red-500 border focus:outline-none"></input>
      </div>
      <div>
      <textarea 
      style={{backgroundColor: "rgba(0,0,0,0)"}}
      className="outline-none border-0 box-border w-full h-full  text-white focus:outline-none placeholder:text-gray-300 placeholder:italic" placeholder="Add node description"></textarea>
      </div>
      </div>
      <Handle type="source" position={Position.Bottom} id="nodex1"></Handle>
    </div>
  )

}

export default InformationNode;