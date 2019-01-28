import * as PropTypes from "prop-types";
import * as React from "react";

const baseUrl = "/assets/svg/";

interface IProps {
  category: string;
  level: string;
}

const Icon: React.SFC<IProps> = ({ category, level, ...props }) => (
  <img
    width="100%"
    alt=""
    {...props}
    src={`${baseUrl}${category}/${level}.svg`}
  />
);

Icon.propTypes = {
  category: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default Icon;
