import { createIcon } from "@chakra-ui/react";
import { commonIconDefaultProps } from "../utils"; // Adjust the import path as needed

export const AuditReportsPublishedIcon = createIcon({
  displayName: "AuditReportsPublishedIcon",
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
        d="M216 40h-56.37a12 12 0 01-8.48-3.51L132 13.34A11.95 11.95 0 00123.69 10H40a16 16 0 00-16 16v204a16 16 0 0016 16h176a16 16 0 0016-16V56a16 16 0 00-16-16zM128 40.66l24 24V56a16 16 0 00-16-16h-8zM200 224H56V40h56v56h88zm-24-88h-56a8 8 0 000 16h56a8 8 0 000-16zm0-40h-56a8 8 0 000 16h56a8 8 0 000-16zm-56-40h-8a8 8 0 000 16h8a8 8 0 000-16z"
        transform="scale(0.85) translate(19, 19)"
      />
    </>
  ),
});
