import { makeAutoObservable } from "mobx";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from "reactflow";

export class FlowHandler {
  constructor(public nodes: Node[], public edges: Edge[]) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  onNodesChange = (nodeChanges: NodeChange[]) => {
    applyNodeChanges(nodeChanges, this.nodes);
  };

  onEdgesChange = (edgeChanges: EdgeChange[]) => {
    applyEdgeChanges(edgeChanges, this.edges);
  };

  onConnect = (params: Connection) => {
    this.edges = addEdge(params, this.edges);
  };
}
