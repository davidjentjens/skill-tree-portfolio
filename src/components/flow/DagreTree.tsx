import { css } from '@emotion/react';
import { action, toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useMemo } from 'react';
import ReactFlow, { ConnectionLineType, Controls, Edge, MiniMap, Node } from 'reactflow';

import { tree } from '../../data/tree';
import { FlowHandler } from '../../models/FlowHandler';
import { TreeHandler, TreeHandlerContext } from '../../models/TreeHandler';
import { treeNodeHeight, treeNodeWidth } from '../../styles/treeNode';
import { Direction, getLayoutedElements } from '../../utils/dagre';
import { convertTreeNodeToNodesAndEdges } from '../../utils/nodes-edges';
import ParticlesBackground from '../ui/particles-background';
import { TreeNode } from './TreeNode';

function injectDataProperties(
  nodes: Node[],
  edges: Edge[],
  changeShowingChildren: (nodeId: string, showChildren: boolean) => void,
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

export enum NodeType {
  TreeNode = 'treeNode',
}

const nodeTypes = {
  [NodeType.TreeNode]: TreeNode,
} as const;

export const LayoutFlow = observer(() => {
  console.log('render');

  const changeShowingChildren = action((nodeId: string, showChildren: boolean) => {
    console.log('changeShowingChildren', nodeId, showChildren);
    const node = flowHandler.nodes.find((node) => node.id === nodeId);

    if (!node) return;

    node.data.showingChildren = showChildren;
  });

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => convertTreeNodeToNodesAndEdges(tree, changeShowingChildren),
    [],
  );

  const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
    () =>
      getLayoutedElements(
        initialNodes,
        initialEdges,
        Direction.Vertical,
        treeNodeWidth,
        treeNodeHeight,
      ),
    [initialNodes, initialEdges],
  );

  const { nodes: hidableNodes, edges: hidableEdges } = useMemo(
    () => injectDataProperties(layoutedNodes, layoutedEdges, changeShowingChildren),
    [layoutedNodes, layoutedEdges],
  );

  const flowHandler = useMemo(
    () => new FlowHandler(hidableNodes, hidableEdges),
    [layoutedNodes, layoutedEdges],
  );

  const treeHandler = useMemo(() => new TreeHandler(flowHandler), [flowHandler]);

  return (
    <TreeHandlerContext.Provider value={treeHandler}>
      <ReactFlow
        css={[reactFlowStyle]}
        minZoom={0.2}
        maxZoom={1.5}
        proOptions={{
          hideAttribution: false,
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
      >
        <MiniMap zoomable pannable />
        <Controls showInteractive={false} />
        <ParticlesBackground />
      </ReactFlow>
    </TreeHandlerContext.Provider>
  );
});

export const reactFlowStyle = css({
  '& .react-flow__handle': {
    opacity: 0,
    height: 0,
    width: 0,
  },
  '& .react-flow__handle-left': {
    left: 0,
  },
  '& .react-flow__handle-top': {
    top: 0,
  },
  '& .react-flow__handle-right': {
    right: 0,
  },
  '& .react-flow__handle-bottom': {
    bottom: 0,
  },
});
