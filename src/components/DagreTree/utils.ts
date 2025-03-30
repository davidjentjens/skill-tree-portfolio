import { Edge, Node } from "reactflow";

import { NodeType } from "./types";

export function injectDataProperties(
  nodes: Node[],
  edges: Edge[],
  changeShowingChildren: (nodeId: string, showChildren: boolean) => void
): { nodes: Node[]; edges: Edge[] } {
  const updatedNodes = nodes.map((node) => {
    if (node.type === NodeType.TreeNode) {
      return {
        ...node,
        data: {
          ...node.data,
          showingChildren: false,
          changeShowingChildren,
        },
      };
    }
    return node;
  });

  return { nodes: updatedNodes, edges };
}
