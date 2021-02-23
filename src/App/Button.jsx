import "./Button.css";

import ButtonElemet from "@material-ui/core/Button";
import PropTypes from "prop-types";
import React from "react";

function Button(props) {
  const { onClick, isDisabled } = props;
  return (
    <ButtonElemet
      onClick={onClick}
      className="points-button"
      color="primary"
      variant="contained"
      disabled={isDisabled}
    >
      Obtener puntos
    </ButtonElemet>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};

export default Button;
