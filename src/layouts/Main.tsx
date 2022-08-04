import { useState, useCallback } from "react";

import ReactFlow, {
  addEdge,
  FitViewOptions,
  applyNodeChanges,
  applyEdgeChanges,
  Background,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  Connection,
} from "react-flow-renderer";

const initialNodes: Node[] = [
  { id: "1", data: { label: "Node 1" }, position: { x: 5, y: 5 } },
  { id: "2", data: { label: "Node 2" }, position: { x: 5, y: 100 } },
];

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];

const fitViewOptions: FitViewOptions = {
  padding: 0.2,
};

function Main() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div className="h-screen flex-row border-black">
      <div className="h-16 bg-gray-50 border-gray-600 border-b ">
        Main header
      </div>

      <div style={{ height: "calc(100vh - 4rem)" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          fitViewOptions={fitViewOptions}
        >
          <Background gap={15} size={2} color="#c8c8c8" />
        </ReactFlow>
      </div>
    </div>
  );
}

export default Main;
