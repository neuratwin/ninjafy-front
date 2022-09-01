import { Position } from "react-flow-renderer";
import {Node} from "react-flow-renderer";

export function resizeDetails () :Node{
  return({
  id: `${Math.random()}`,
  position: { x: 100, y: 100 },
  data: {
    text: "I am an editable, resizable and rotatable node.",
    color: "rgba(240,240,240,0.7)",
  },
  type: "resizable",
  sourcePosition: Position.Top,
  targetPosition: Position.Bottom,
})
 }

 export function documentDetails () :Node{
 return ({
  id: `${Math.random()}`,
  type: "documentNode",
  data: { value: 123 },
  position: { x: Math.random() * 100, y: Math.random() * 100 },
})}

export function documentSubNodeDetails (documentBucketId:string):Node {
 return ({
  id: `${Math.random()}`,
  type: "documentNode",
  data: { value: 123 },
  position: { x: Math.random() * 100, y: Math.random() * 100 },
  parentNode: documentBucketId, 
  // expandParent: true,
  extent: 'parent',
 })
};

export function conditionNodeDetails ():Node[]{
  return ([{
    id: `${Math.random()}`,
    type: "conditionNode",
    data: { value: 123 },
    position: { x: Math.random() * 100, y: Math.random() * 100 },
 
   },  
  // { id: `${Math.random()}`,
  // data: { label: <div className="text-lg text-cyan-600"> Upload to Doc Control </div> },
  // position: { x: Math.random() * 200, y: Math.random() * 200 }
  // }
])
}

export function informationNodeDetails ():Node {
  return ({
   id: `${Math.random()}`,
   type: "informationNode",
   data: { value: 123 },
   position: { x: Math.random() * 100, y: Math.random() * 100 },

  })
 };

 export function documentBucketNode ():Node {
  return ({
   id: `${Math.random()}`,
   type: "documentBucketNode",
   data: { value: 123   },
   position: { x: Math.random() * 100, y: Math.random() * 100 },
  })
 };

export function bucketCreatorDetails(bucketId:string, addSubNode:any, deleteNode: any): Node {
  return({
    id: bucketId,
    data: {
      label: (
        <div className="flex justify-between border-b border-black pb-2">
        <div className="text-gray-500 ml-2 flex  text-base">
          Document Bucket
          </div>
          <div
        onClick={()=>deleteNode(bucketId)} 
        className="bg-gray-800 w-12 text-center rounded-lg text-xs text-white cursor-pointer my-2">Delete</div>
      

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
  })
}