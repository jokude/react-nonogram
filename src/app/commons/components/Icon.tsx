import * as React from "react";

const baseUrl = `${BASE_PATH}assets/svg/`;

export const Icon: React.FunctionComponent<React.ImgHTMLAttributes<any>> = ({ src, ...props }) => (
  <img src={`${baseUrl}${src}.svg`} {...props} />
);
