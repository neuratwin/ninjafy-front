// import { useCallback } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";

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
  MarkerType,
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
  setNodeData: (key: string, id: string, value: string) => void;
};

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<RFState>()(
  persist(
    (set, get) => ({
      nodes: initialNodes,
      edges: initialEdges,
      reset: () => {
        set(() => ({
          nodes: [],
        }));
        set(() => ({
          edges: [],
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
        set((state) => ({
          nodes: state.nodes.filter((item) => item.parentNode !== id),
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
        if (changes[0].type) {
          if (changes[0].type === "select") {
            if (changes[0].selected === false) {
              const EdgeId = changes[0].id;
              get().edges[get().edges.findIndex((edge) => edge.id === EdgeId)][
                "type"
              ] = "smoothstep";
              get().edges[get().edges.findIndex((edge) => edge.id === EdgeId)][
                "animated"
              ] = false;
            }
            if (changes[0].selected === true) {
              const EdgeId = changes[0].id;
              get().edges[get().edges.findIndex((edge) => edge.id === EdgeId)][
                "type"
              ] = "deletableEdge";
              get().edges[get().edges.findIndex((edge) => edge.id === EdgeId)][
                "animated"
              ] = true;
            }
          }
        }
      },
      onConnect: (connection: Connection) => {
        set(() => ({
          edges: addEdge(
            {
              ...connection,
              type: "smoothstep",
              markerEnd: {
                type: MarkerType.Arrow,
              },
            },
            get().edges
          ),
        }));
      },
      setNodeData: (key: string, id: string, value: string) => {
        get().nodes[get().nodes.findIndex((edge) => edge.id === id)]["data"][
          key
        ] = value;
      },
    }),
    { name: "suth-store" }
  )
);

export default useStore;
