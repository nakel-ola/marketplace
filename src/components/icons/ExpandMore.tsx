import * as React from "react";
import type { SVGProps } from "react";
const SvgExpandMore = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M16.59 8.295 12 12.875l-4.59-4.58L6 9.705l6 6 6-6-1.41-1.41Z"
    />
  </svg>
);
export default SvgExpandMore;
