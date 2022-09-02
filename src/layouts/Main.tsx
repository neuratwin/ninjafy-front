import { FunctionComponent, useCallback, DragEvent  } from "react";
import SearchBar from "../Components/SearchBar";
import DocumentNode from "../Components/CustomeNodes/DocumentNode";
import DocumentBucketNode from "../Components/CustomeNodes/DocumentBucketNode";
import Resizable from "../Components/CustomeNodes/Resizable";
import ConditonNode from "../Components/CustomeNodes/ConditionBlock";
import EmailNode from "../Components/CustomeNodes/EmailNode";
import useStore from "./store";
import { CustomEdgeButton } from "../Components/CustomLinks/CustomLinkButton";
import InformationNode from "../Components/CustomeNodes/InformationNode";

import ReactFlow, {
  FitViewOptions,
  Background,
  Controls,
} from "react-flow-renderer";
import RightPanel from "../layouts/RightPanel";

const nodeTypes = {
  documentNode: DocumentNode,
  documentBucketNode: DocumentBucketNode,
  resizable: Resizable as FunctionComponent,
  conditionNode: ConditonNode,
  informationNode: InformationNode,
  emailNode: EmailNode as FunctionComponent,

};

const edgeTypes = {
  deletableEdge: CustomEdgeButton,
};

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

function Main() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);


  return (
    <>
      <div className="h-screen flex-row border-black">
        <div className="h-16 p-2 border-gray-600 border-b ">
          <SearchBar />
        </div>
        <div className="flex" id="moveableContainer">
          <div style={{ width: "95%", height: "calc(100vh - 4rem)" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              fitViewOptions={fitViewOptions}
              onDragOver={onDragOver}
            >
              <Background gap={30} size={1} color="#c8c8c8" />
              <Controls />
            </ReactFlow>
          </div>
          <div className="w-64 border-l border-gray-600">
            <RightPanel />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
