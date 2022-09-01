import { MouseEventHandler } from "react";
import useStore from "./store";
import NodeAddButton from "../Components/NodeAddButton";
import { resizeDetails, 
  documentDetails, 
  // documentSubNodeDetails, 
  // bucketCreatorDetails,
  conditionNodeDetails,
  informationNodeDetails,
documentBucketNode } from "../utils/NodeDetails";
 import {Node} from "react-flow-renderer";


const NodePanel = () => {
  type TypeOfNode = {
    clickFnc: MouseEventHandler;
    label: string
  }

  // const [bucketId, setBucketId] = useState<string>(`${Math.random()}`);
  const [setNodes] = useStore((state) =>[state.setNodes]);

  const addResizableBlock = () => {
  setNodes(resizeDetails())
  };

  const addDocumentNode = () => {
    setNodes(documentDetails());
  };

  // const addSubNode = (documentBucketId: string) => {
  //   setNodes(documentSubNodeDetails(documentBucketId));
  // };

  // const bucketCreator = () => {
  //   setBucketId(`${Math.random()}`);
  //   setNodes(bucketCreatorDetails(bucketId, addSubNode, deleteNode ));
  // };
  const bucketCreator = () => {
    setNodes(documentBucketNode());
  };

  const conditionCreator = () => {
    const conditionDetails:Node[]= conditionNodeDetails();
    conditionDetails.forEach((nodeDetails:Node)=>{
      setNodes(nodeDetails)
    })
  };

  const informationNodeCreator = () => {
    setNodes(informationNodeDetails());
  }

const typesOfNodes:TypeOfNode[] = [{clickFnc:addDocumentNode, label: "Document Node"},
                      {clickFnc:bucketCreator, label: "Document Bucket"},
                      {clickFnc: addResizableBlock, label:"Resizable Node"},
                      {clickFnc: conditionCreator, label:"Condition Block"},
                      {clickFnc: informationNodeCreator, label:"Information Block"}
                    ]

  return (
    <div className="flex-row">
      <div className="text-center font-bold text-gray-800">
        Nodes
      </div>
        {typesOfNodes.map(({clickFnc, label})=>(<NodeAddButton key={label} clickFnc={clickFnc} label={label}/>))}
    </div>
    
  );
};

export default NodePanel;