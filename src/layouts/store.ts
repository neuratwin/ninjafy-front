// import { useCallback } from "react";
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
  applyNodeChanges,
  applyEdgeChanges,
  // MarkerType,
} from "react-flow-renderer";

// interface NodeParent extends Node {
//   extent: string
// }

const initialNodes: Node[] = [];

const initialEdges: Edge[] = [];

type RFState = {
  nodes: Node[];
  edges: Edge[];
  setNodes: (node: Node) => void;
  setEdges: (edge: Edge) => void;
  reset: () => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  deleteNode: (id: string) => void;
  deleteEdge: (id: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  reset: () => {
    set(() => ({
      nodes: [],
    }));
  },
  setNodes: (node: Node) => {
    set((state) => ({
      nodes: [...state.nodes, node],
    }));
  },
  setEdges: (edge: Edge) => {
    set((state) => ({
      edges: [...state.edges, edge],
    }));
  },
  deleteNode: (id: string) => {
    set((state) => ({
      nodes: state.nodes.filter((item) => item.id !== id),
    }));
  },
  deleteEdge: (id: string) => {
    set((state) => ({
      edges: state.edges.filter((item) => item.id !== id),
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
    set(() => ({
      edges: addEdge({ ...connection, type: "deletableEdge" }, get().edges),
    }));
  },
}));

export default useStore;
