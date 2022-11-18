import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = props => {
        return (
            <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
                {props.children}
            </button>
        )
}
export const ButtonOutline = props => {
    return (
        <button className={`btn-outline ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
}

export const ButtonPlay = props => {
    return (
        <button className={`btn-play ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </button>
    )
}
Button.propTypes = {
    onClick: PropTypes.func
}

export default Button;
