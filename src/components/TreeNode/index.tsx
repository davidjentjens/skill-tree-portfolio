// src/components/TreeNode/index.tsx
import { observer } from "mobx-react-lite";
import { NodeProps, useNodeId } from "reactflow";

import { useTreeHandler } from "../../models/TreeHandler";
import { TreeViewData } from "../../utils/nodes-edges";
import { RegularNode } from "./RegularNode";
import { RootNode } from "./RootNode";

export type TreeNodeProps = NodeProps<TreeViewData>;

export const TreeNode = observer((props: TreeNodeProps) => {
  const treeHandler = useTreeHandler();
  const nodeId = useNodeId();
  const node = treeHandler.getNodeById(nodeId);

  const childCount = node ? treeHandler.getChildrenCount(node) : 0;
  const descendantsCount = node ? treeHandler.getDescendantsCount(node) : 0;

  const { data, isConnectable, id } = props;

  // Render the root node
  if (id === "root") {
    return (
      <RootNode
        data={data}
        isConnectable={isConnectable}
        childCount={childCount}
      />
    );
  }

  // Render regular nodes
  return (
    <RegularNode
      data={data}
      isConnectable={isConnectable}
      childCount={childCount}
      descendantsCount={descendantsCount}
    />
  );
});
