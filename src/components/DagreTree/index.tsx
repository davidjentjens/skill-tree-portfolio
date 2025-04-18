import { action, toJS } from "mobx";
import { observer } from "mobx-react-lite";
import { useMemo } from "react";
import { ConnectionLineType, Controls, MiniMap } from "reactflow";

import { tree } from "../../data/tree";
import { FlowHandler } from "../../models/FlowHandler";
import { TreeHandler, TreeHandlerContext } from "../../models/TreeHandler";
import { Direction, getLayoutedElements } from "../../utils/dagre";
import { convertTreeNodeToNodesAndEdges } from "../../utils/nodes-edges";
import { treeNodeHeight, treeNodeWidth } from "../TreeNode/styles";
import ParticlesBackground from "../ui/ParticlesBackground";
import { CustomReactFlow } from "./styles";
import { nodeTypes } from "./types";
import { injectDataProperties } from "./utils";

export const DagreTree = observer(() => {
  const changeShowingChildren = action(
    (nodeId: string, showChildren: boolean) => {
      console.log("changeShowingChildren", nodeId, showChildren);
      const node = flowHandler.nodes.find((node) => node.id === nodeId);

      if (!node) return;

      node.data.showingChildren = showChildren;
    }
  );

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => convertTreeNodeToNodesAndEdges(tree, changeShowingChildren),
    []
  );

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () =>
      getLayoutedElements(
        initialNodes,
        initialEdges,
        Direction.Vertical,
        treeNodeWidth,
        treeNodeHeight
      ),
    [initialNodes, initialEdges]
  );

  const { nodes: hidableNodes, edges: hidableEdges } = useMemo(
    () =>
      injectDataProperties(layoutedNodes, layoutedEdges, changeShowingChildren),
    [layoutedNodes, layoutedEdges]
  );

  const flowHandler = useMemo(
    () => new FlowHandler(hidableNodes, hidableEdges, Direction.Vertical),
    [layoutedNodes, layoutedEdges]
  );

  const treeHandler = useMemo(
    () => new TreeHandler(flowHandler),
    [flowHandler]
  );

  return (
    <TreeHandlerContext.Provider value={treeHandler}>
      <CustomReactFlow
        defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        minZoom={0.2}
        maxZoom={1.5}
        proOptions={{
          hideAttribution: true,
        }}
        nodes={toJS(treeHandler.nodes)}
        nodeTypes={nodeTypes}
        edges={toJS(treeHandler.edges)}
        zoomOnDoubleClick={false}
        onNodesChange={flowHandler.onNodesChange}
        onEdgesChange={flowHandler.onEdgesChange}
        onConnect={flowHandler.onConnect}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{ padding: 0.5, duration: 300 }}
      >
        <MiniMap zoomable pannable />
        <Controls showInteractive={false} />
        <ParticlesBackground />
      </CustomReactFlow>
    </TreeHandlerContext.Provider>
  );
});
