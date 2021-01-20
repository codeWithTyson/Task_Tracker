import React from "react";
import Button from "../blocks/Button";
import PropTypes from "prop-types";

const Header = ({ isVisibile, toggleVisibility }) => {
  return (
    <header className="header">
      <h1>Task tracker</h1>
      <Button
        text={isVisibile ? "Close" : "Add"}
        color={isVisibile ? "red" : "green"}
        hideShow={toggleVisibility}
      />
    </header>
  );
};

Header.propTypes = {
  isVisibile: PropTypes.bool.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
};

export default Header;
