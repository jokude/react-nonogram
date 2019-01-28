import * as React from "react";
import { Link } from "react-router-dom";

export interface IProps {
  onClick: () => void;
}

export const Home: React.SFC<IProps> = ({ onClick }) => (
  <div
    style={{ height: "100%", width: "100%", background: "red" }}
    onClick={onClick}
  >
    <Link to="/category/5x5">Click to start</Link>
  </div>
);
