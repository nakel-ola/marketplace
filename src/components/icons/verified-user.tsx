import type { SVGProps } from "react";
import * as React from "react";

const SvgVerifiedUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M10 0.833374L2.5 4.16671V9.16671C2.5 13.7917 5.7 18.1167 10 19.1667C14.3 18.1167 17.5 13.7917 17.5 9.16671V4.16671L10 0.833374ZM15.8333 9.16671C15.8333 12.9334 13.35 16.4084 10 17.4417C6.65 16.4084 4.16667 12.9334 4.16667 9.16671V5.25004L10 2.65837L15.8333 5.25004V9.16671ZM6.175 9.65837L5 10.8334L8.33333 14.1667L15 7.50004L13.825 6.31671L8.33333 11.8084L6.175 9.65837Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgVerifiedUser;
