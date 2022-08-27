import { FunctionComponent } from "react";
import SearchBar from "../Components/SearchBar";
import DocumentNode from "../Components/CustomeNodes/DocumentNode";
import DocumentBucketNode from "../Components/CustomeNodes/DocumentBucketNode";
import Resizable from "../Components/CustomeNodes/Resizable";
import useStore from "./store";

import ReactFlow, { FitViewOptions, Background } from "react-flow-renderer";
import RightPanel from "../layouts/RightPanel";

const nodeTypes = {
  documentNode: DocumentNode,
  documentBucketNode: DocumentBucketNode,
  resizable: Resizable as FunctionComponent,
};


const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

function Main() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore();

  return (
    <>
      <div className="h-screen flex-row border-black">
        <div className="h-16 p-2 border-gray-600 border-b ">
          <SearchBar />
        </div>
        <div className="flex">
          <div style={{ width: "95%", height: "calc(100vh - 4rem)" }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitViewOptions={fitViewOptions}
            >
              <Background gap={30} size={1} color="#c8c8c8" />
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
