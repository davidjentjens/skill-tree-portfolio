// styles.ts
import { styled } from "@stitches/react";
import ReactFlow from "reactflow";

export const treeNodeWidth = 272;
export const treeNodeHeight = 260;

export const CustomReactFlow = styled(ReactFlow, {
  "& .react-flow__handle": {
    opacity: 0,
    height: 0,
    width: 0,
  },
  "& .react-flow__handle-left": {
    left: 0,
  },
  "& .react-flow__handle-top": {
    top: 0,
  },
  "& .react-flow__handle-right": {
    right: 0,
  },
  "& .react-flow__handle-bottom": {
    bottom: 0,
  },
});
