import type { SVGProps } from "react";
import * as React from "react";

const SVGApple = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M16.366 6.414c-1.89 0-2.688.902-4.005.902-1.35 0-2.379-.895-4.016-.895-1.603 0-3.313.978-4.399 2.646-1.524 2.351-1.265 6.78 1.204 10.552.883 1.35 2.062 2.865 3.609 2.881h.028c1.345 0 1.744-.88 3.594-.89h.028c1.823 0 2.188.885 3.527.885h.028c1.547-.016 2.79-1.695 3.673-3.04.636-.967.872-1.453 1.36-2.547-3.572-1.356-4.146-6.42-.614-8.36-1.078-1.35-2.593-2.132-4.021-2.132l.004-.002Z"
      fill="currentColor"
    />
    <path
      d="M15.949 1.5c-1.125.076-2.438.793-3.207 1.728-.697.847-1.27 2.104-1.046 3.324h.09c1.198 0 2.425-.722 3.14-1.646.69-.88 1.214-2.127 1.023-3.406Z"
      fill="currentColor"
    />
  </svg>
);

export default SVGApple;
