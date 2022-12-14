import React from "react";
import {Link} from "react-router-dom";

interface ButtonLinkProps {
    title: string,
    link?: string,
    color?: 'orange' | 'black'
}

/**
 * Button link component.
 *
 * @constructor
 */
const ButtonLink: React.FC<ButtonLinkProps> = ({link, title, color}: ButtonLinkProps) => {
    const colorClass = color ? `c-button-link--${color}` : '';

    return (
        <Link to={link ?? '#'}
              className={`c-button-link ${colorClass}`}>{title}</Link>
    )
};

export default ButtonLink;