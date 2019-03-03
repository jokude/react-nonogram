import * as React from "react";

const baseUrl = `${BASE_PATH}assets/svg/`;

interface IProps {
  path: string;
}

export const Icon: React.FunctionComponent<IProps> = ({ path, ...props }) => (
  <img
    width="100%"
    alt=""
    {...props}
    src={`${baseUrl}${path}.svg`}
  />
);
