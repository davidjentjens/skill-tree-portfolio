import dagre from "dagre";
import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { Edge, getIncomers, getOutgoers, Node, Position } from "reactflow";

import { treeNodeHeight, treeNodeWidth } from "../components/TreeNode/styles";
import { Direction } from "../utils/dagre";
import { FlowHandler } from "./FlowHandler";

export class TreeHandler {
  constructor(public flowHandler: FlowHandler) {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  getNodeById(id: string | null): Node | undefined {
    return this.flowHandler.nodes.find((node) => node.id === id);
  }

  getChildrenCount(node: Node): number {
    const outgoers = getOutgoers(
      node,
      this.flowHandler.nodes,
      this.flowHandler.edges
    );

    return outgoers.length;
  }

  getDescendantsCount(node: Node): number {
    const outgoers = getOutgoers(
      node,
      this.flowHandler.nodes,
      this.flowHandler.edges
    );

    return (
      outgoers.length +
      outgoers.reduce((acc, child) => acc + this.getDescendantsCount(child), 0)
    );
  }

  shouldNodeHide(node: Node): boolean {
    const parents = getIncomers(
      node,
      this.flowHandler.nodes,
      this.flowHandler.edges
    );

    if (parents.length === 0) {
      return false;
    }

    for (const parent of parents) {
      if (parent.data.showingChildren === false) {
        return true;
      }
    }

    return parents.some((parent) => this.shouldNodeHide(parent));
  }

  shouldEdgeHide(edge: Edge): boolean {
    return (
      (!!edge.sourceNode && this.shouldNodeHide(edge.sourceNode)) ||
      (!!edge.targetNode && this.shouldNodeHide(edge.targetNode))
    );
  }

  get nodes() {
    // Step 1: Identify visible nodes
    const visibleNodeIds = new Set(
      this.flowHandler.nodes
        .filter((node) => !this.shouldNodeHide(node))
        .map((node) => node.id)
    );

    // Step 2: Create a subgraph with only visible nodes and edges
    const visibleNodes = this.flowHandler.nodes.filter((node) =>
      visibleNodeIds.has(node.id)
    );

    const visibleEdges = this.flowHandler.edges.filter(
      (edge) =>
        visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );

    // Step 3: Apply layout while preserving hierarchy
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({
      rankdir: Direction.Vertical,
      ranker: "network-simplex",
    });

    // Add nodes with their original position relative to siblings
    visibleNodes.forEach((node, index) => {
      // Store original index to preserve order within same rank
      node.data.originalIndex = index;
      dagreGraph.setNode(node.id, {
        width: treeNodeWidth,
        height: treeNodeHeight,
        originalIndex: index, // This helps Dagre preserve ordering
      });
    });

    // Add edges to establish parent-child relationships
    visibleEdges.forEach((edge) => {
      dagreGraph.setEdge(edge.source, edge.target);
    });

    // Run the layout
    dagre.layout(dagreGraph);

    // Extract positioned nodes
    const layoutedNodes = visibleNodes.map((node) => {
      const nodeWithPosition = dagreGraph.node(node.id);
      const isHorizontal = this.flowHandler.direction === Direction.Horizontal;

      return {
        ...node,
        targetPosition: isHorizontal ? Position.Left : Position.Top,
        sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
        position: {
          x: nodeWithPosition.x - treeNodeWidth / 2,
          y: nodeWithPosition.y - treeNodeHeight / 2,
        },
      };
    });

    return layoutedNodes;
  }

  get edges() {
    return this.flowHandler.edges.map((edge) => ({
      ...edge,
      hidden: this.shouldEdgeHide(edge),
    }));
  }
}

export const TreeHandlerContext = createContext<TreeHandler | null>(null);

export const useTreeHandler = () => {
  const treeHandler = useContext(TreeHandlerContext);

  if (!treeHandler) {
    throw new Error("useTreeHandler must be used within a TreeHandlerProvider");
  }

  return treeHandler;
};
