import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const InteractionSafeguardsIcon = createIcon({
  displayName: "InteractionSafeguardsIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <>
      
      <path
        fill="currentColor"
        d="M128 36l-64 32v64c0 51.6 36.1 96.6 80 106.3 43.9-9.7 80-54.7 80-106.3V68l-64-32zm0 180c-23.2-9-40-31.3-40-56v-56l40-20 40 20v56c0 24.7-16.8 47-40 56z"
      />
    </>
  ),
});
