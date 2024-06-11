import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const IntendedActionVerificationIcon = createIcon({
  displayName: "IntendedActionVerificationIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <path
      fill="currentColor"
      d="M128 24C70.852 24 24 70.852 24 128s46.852 104 104 104 104-46.852 104-104S185.148 24 128 24zm-8 160l-40-40 11.314-11.314L120 151.314 172.686 98.63 184 110l-64 64z"
    />
  ),
});
