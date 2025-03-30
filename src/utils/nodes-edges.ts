import { Edge, Node } from "reactflow";

import { NodeType } from "../components/DagreTree/types";
import { Skill } from "../types";

const position = { x: 0, y: 0 };
const edgeType = "smoothstep";

export interface TreeViewData extends Skill {
  showingChildren: boolean;
  setShowingChildren?(showingChildren: boolean): void;
}

export interface TreeNode {
  id: string;
  data: Skill;
  children?: TreeNode[];
}

export function convertTreeNodeToNodesAndEdges(
  treeNode: TreeNode,
  changeShowingChildren: (nodeId: string, showChildren: boolean) => void
): {
  nodes: Node<TreeViewData>[];
  edges: Edge[];
} {
  const nodes: Node<TreeViewData>[] = [];
  const edges: Edge[] = [];

  function traverse(node: TreeNode, parent?: TreeNode) {
    nodes.push({
      id: node.id,
      data: {
        showingChildren: true,
        setShowingChildren: (showingChildren: boolean) => {
          changeShowingChildren(node.id, showingChildren);
        },
        ...node.data,
      },
      position,
      draggable: false,
      deletable: false,
      type: NodeType.TreeNode,
    });

    if (parent) {
      edges.push({
        id: `e${parent.id}${node.id}`,
        source: parent.id,
        target: node.id,
        type: edgeType,
        animated: false,
        // markerEnd: {
        //   type: MarkerType.ArrowClosed,
        // },
      });
    }

    if (node.children) {
      node.children.forEach((child) => traverse(child, node));
    }
  }

  traverse(treeNode);

  return { nodes, edges };
}
