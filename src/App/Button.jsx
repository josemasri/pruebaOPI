import React from 'react';
// import PropTypes from 'prop-types';
import ButtonElemet from '@material-ui/core/Button';
import './Button.css';


function Button (props) {
    return (
        <ButtonElemet
            className="points-button"
            color="primary"
            variant="contained">
            Obtener puntos
        </ButtonElemet>
    );
}

export default Button;
