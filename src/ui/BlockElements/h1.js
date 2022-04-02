import React from 'react'
import PropTypes from 'prop-types';

export default function H1({ children, className, style }) {
    return (
        <h1 className={className} style={style}>{children}</h1>
    )
}

H1.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.object,
};