import create from "zustand";
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  addEdge,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  Position,
  applyNodeChanges,
  applyEdgeChanges,
} from "react-flow-renderer";

const initialNodes: Node[] = [
  {
    id: "111",
    position: { x: 100, y: 100 },
    data: {
      text: "I am an editable, resizable and rotatable node.",
      color: "#ff0072",
    },
    type: "resizable",
    sourcePosition: Position.Top,
    targetPosition: Position.Bottom,
  },
];

const initialEdges: Edge[] = [];

type RFState = {
  nodes: Node[];
  edges: Edge[];
  setNodes: (node: Node) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  setNodes: (node: Node) => {
    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (connection: Connection) => {
    set({
      edges: addEdge(connection, get().edges),
    });
  },
}));

export default useStore;
