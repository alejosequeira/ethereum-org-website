import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const PrivacyResistanceIcon = createIcon({
  displayName: "PrivacyResistanceIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <path
      fill="currentColor"
      d="M128 24C70.852 24 24 70.852 24 128s46.852 104 104 104 104-46.852 104-104S185.148 24 128 24zm0 192c-48.523 0-88-39.477-88-88s39.477-88 88-88 88 39.477 88 88-39.477 88-88 88zm0-152c-35.346 0-64 28.654-64 64s28.654 64 64 64 64-28.654 64-64-28.654-64-64-64zm0 112c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48z"
    />
  ),
});
