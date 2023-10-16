import React from "react";

type Props = {
  Icon: () => React.ReactNode;
  label?: string;
};
export const IconButton = ({ Icon, label }: Props) => {
  return (
    <button type="button">
      <Icon />
      <span className="">{label}</span>
    </button>
  );
};
