import React from "react";
import PropTypes from "prop-types";

const Button = ({ text, color = "green", hideShow }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={() => hideShow((prevState) => !prevState)}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Button;
