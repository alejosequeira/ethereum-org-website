import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const UnauthorizedDappBlockingIcon = createIcon({
  displayName: "UnauthorizedDappBlockingIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <path
      fill="currentColor"
      d="M128 24C70.852 24 24 70.852 24 128s46.852 104 104 104 104-46.852 104-104S185.148 24 128 24zm0 192c-48.523 0-88-39.477-88-88s39.477-88 88-88 88 39.477 88 88-39.477 88-88 88zm35.314-124.686a8 8 0 00-11.314 0L128 115.314l-23.314-23.314a8 8 0 00-11.314 11.314L116.686 128l-23.314 23.314a8 8 0 1011.314 11.314L128 140.686l23.314 23.314a8 8 0 1011.314-11.314L139.314 128l23.314-23.314a8 8 0 000-11.314z"
    />
  ),
});
