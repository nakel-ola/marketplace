import type { SVGProps } from "react";
import * as React from "react";
const SvgMail = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M20.1666 5.50002C20.1666 4.49169 19.3416 3.66669 18.3333 3.66669H3.66665C2.65831 3.66669 1.83331 4.49169 1.83331 5.50002V16.5C1.83331 17.5084 2.65831 18.3334 3.66665 18.3334H18.3333C19.3416 18.3334 20.1666 17.5084 20.1666 16.5V5.50002ZM18.3333 5.50002L11 10.0834L3.66665 5.50002H18.3333ZM18.3333 16.5H3.66665V7.33335L11 11.9167L18.3333 7.33335V16.5Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgMail;
