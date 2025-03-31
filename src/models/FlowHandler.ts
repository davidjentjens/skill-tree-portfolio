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

import { Direction } from "../utils/dagre";

export class FlowHandler {
  constructor(
    public nodes: Node[],
    public edges: Edge[],
    public direction: Direction = Direction.Vertical
  ) {
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
