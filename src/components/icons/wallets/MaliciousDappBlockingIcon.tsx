import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const MaliciousDappBlockingIcon = createIcon({
  displayName: "MaliciousDappBlockingIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <path
      fill="currentColor"
      d="M128 24C70.852 24 24 70.852 24 128s46.852 104 104 104 104-46.852 104-104S185.148 24 128 24zm56 160a8 8 0 01-11.314 0L128 139.314 83.314 184A8 8 0 1172 172.686L116.686 128 72 83.314A8 8 0 1183.314 72L128 116.686 172.686 72A8 8 0 11184 83.314L139.314 128 184 172.686A8 8 0 01184 184z"
    />
  ),
});
