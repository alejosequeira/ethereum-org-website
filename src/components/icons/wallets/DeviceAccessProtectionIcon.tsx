import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const DeviceAccessProtectionIcon = createIcon({
  displayName: "DeviceAccessProtectionIcon",
  viewBox: "0 0 256 256",
  defaultProps: {
    width: "256px",
    height: "256px",
    ...commonIconDefaultProps,
  },
  path: (
    <path
      fill="currentColor"
      d="M128 16C64.478 16 16 64.478 16 128s48.478 112 112 112 112-48.478 112-112S191.522 16 128 16zm0 208c-53.02 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96zm0-128c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32zm0 48c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z"
    />
  ),
});
