import { MouseEventHandler, memo } from "react";
import useStore from "./store";
import NodeAddButton from "../Components/NodeAddButton";
import shallow from "zustand/shallow";

import {
  resizeDetails,
  documentDetails,
  // documentSubNodeDetails,
  // bucketCreatorDetails,
  conditionNodeDetails,
  informationNodeDetails,
  documentBucketNode,
  emailNode,
} from "../utils/NodeDetails";
import { Node } from "react-flow-renderer";

const NodePanel = () => {
  type TypeOfNode = {
    clickFnc: MouseEventHandler;
    label: string;
    type: string;
  };

  // const [bucketId, setBucketId] = useState<string>(`${Math.random()}`);
  // const setNodes = (e: any) => console.log(1);
  const [setNodes] = useStore((state) => [state.setNodes], shallow);

  const addResizableBlock = () => {
    setNodes(resizeDetails());
  };

  const addEmailNode = () => {
    setNodes(emailNode());
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
    const conditionDetails: Node[] = conditionNodeDetails();
    conditionDetails.forEach((nodeDetails: Node) => {
      setNodes(nodeDetails);
    });
  };

  const informationNodeCreator = () => {
    setNodes(informationNodeDetails());
  };

  const typesOfNodes: TypeOfNode[] = [
    { clickFnc: addDocumentNode, label: "Document Node", type: "documentNode" },
    {
      clickFnc: bucketCreator,
      label: "Document Bucket",
      type: "documentBucketNode",
    },
    {
      clickFnc: addResizableBlock,
      label: "Resizable Node",
      type: "resizable",
    },
    {
      clickFnc: conditionCreator,
      label: "Condition Block",
      type: "conditionNode",
    },
    {
      clickFnc: informationNodeCreator,
      label: "Information Block",
      type: "informationNode",
    },
    { clickFnc: addEmailNode, label: "Email Node", type: "emailNode" },
  ];

  return (
    <div className="flex-row">
      <div className="text-center font-bold text-gray-800">Nodes</div>
      {typesOfNodes.map(({ clickFnc, label, type }) => (
        <NodeAddButton
          key={label}
          clickFnc={clickFnc}
          label={label}
          type={type}
        />
      ))}
    </div>
  );
};

export default memo(NodePanel);
