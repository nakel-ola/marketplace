import type { SVGProps } from "react";
import * as React from "react";
const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M11 3H3V11H11V3Z" fill="currentColor" />
    <path d="M11 13H3V21H11V13Z" fill="currentColor" />
    <path d="M21 3H13V11H21V3Z" fill="currentColor" />
    <path d="M21 13H13V21H21V13Z" fill="currentColor" />
  </svg>
);
export default SvgGridView;
