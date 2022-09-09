import { useCallback, DragEvent, useRef, useState } from "react";
import DocumentNode from "../Components/CustomeNodes/DocumentNode";
import DocumentBucketNode from "../Components/CustomeNodes/DocumentBucketNode";
import Resizable from "../Components/CustomeNodes/Resizable";
import ConditonNode from "../Components/CustomeNodes/ConditionBlock";
import EmailNode from "../Components/CustomeNodes/EmailNode";
import useStore from "./store";
import CustomEdgeButton from "../Components/CustomLinks/CustomLinkButton";
import InformationNode from "../Components/CustomeNodes/InformationNode";

import ReactFlow, {
  FitViewOptions,
  Background,
  Controls,
} from "react-flow-renderer";
import { PanOnScrollMode } from "react-flow-renderer";

const nodeTypes = {
  documentNode: DocumentNode,
  documentBucketNode: DocumentBucketNode,
  resizable: Resizable,
  conditionNode: ConditonNode,
  informationNode: InformationNode,
  emailNode: EmailNode,
};

const edgeTypes = {
  deletableEdge: CustomEdgeButton,
};

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

function ReactFlowCanvas() {
  console.log("render");

  const { nodes, edges, setNodes, onNodesChange, onEdgesChange, onConnect } =
    useStore();

  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!reactFlowWrapper.current) {
        return;
      } else {
        const reactFlowBounds =
          reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData("application/reactflow");

        // check if the dropped element is valid
        if (typeof type === "undefined" || !type) {
          return;
        }

        const position = reactFlowInstance.project({
          x: event.clientX - reactFlowBounds.left,
          y: event.clientY - reactFlowBounds.top,
        });
        const newNode = {
          id: `${Math.random()}`,
          type,
          position,
          data: { label: `${type} node` },
        };
        setNodes(newNode);
      }
    },
    [reactFlowInstance, setNodes]
  );

  // const onMoveStart = useCallback(() => {
  //   const nodes = getNodes().map((n) => {
  //     n.selected = false;
  //     return n;
  //   });

  //   setnodes(nodes);
  // }, []);

  return (
    <div
      style={{ width: "100%", height: "calc(100vh - 4rem)" }}
      ref={reactFlowWrapper}
    >
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitViewOptions={fitViewOptions}
        onInit={setReactFlowInstance}
        onDragOver={onDragOver}
        onDrop={onDrop}
        panOnScroll={true}
        panOnScrollMode={PanOnScrollMode.Vertical}
      >
        <Background
          gap={90}
          size={1}
          color="#f8f9fa"
          style={{ backgroundColor: "#f8f9fa" }}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default ReactFlowCanvas;
