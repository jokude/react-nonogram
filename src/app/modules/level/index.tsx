import * as React from "react";

export interface IProps {
  onClick: () => void;
}

export const Level: React.SFC<IProps> = ({ onClick }) => (
  <div style={{ height: "500px", width: "500px" }} onClick={onClick}>
    <div>Click to start</div>
  </div>
);
