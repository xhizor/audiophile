import React, {useState} from "react";
import {Link} from 'react-router-dom';

import {menuItems} from '../../../data/menu-items';
import MenuItem from "../../../interfaces/MenuItem";
import pageLogo from '../../../assets/images/icons/logo.svg';
import {ReactComponent as CartIcon} from '../../../assets/images/icons/icon-cart.svg';
import {ReactComponent as HamburgerIcon} from '../../../assets/images/icons/icon-hamburger.svg';

/**
 * Header component.
 *
 * @constructor
 */
const Header: React.FC = () => {
    const [isMenuVisible, setMenuVisibility] = useState<boolean>(false);

    /**
     * Toggles the navbar menu visibility on tablet and mobile view.
     *
     * @param e
     */
    const toggleMenuVisibility = (e: React.MouseEvent) => {
        e.preventDefault();
        setMenuVisibility(isMenuVisible => !isMenuVisible);
    };

    return (
        <nav className="c-navbar" aria-label="Main navigation">
            <div className="c-container">
                <div className="c-navbar__container">
                    <div className="c-navbar__container__wrapper">
                        <a href="#"
                           className="c-navbar__container__wrapper__hamburger"
                           aria-label={`${!isMenuVisible ? 'Open' : 'Close'} main navigation`}
                           aria-expanded={isMenuVisible}
                           onClick={toggleMenuVisibility}>
                            <HamburgerIcon/>
                        </a>
                        <Link to="/"
                              className="c-navbar__container__wrapper__logo">
                            <img src={pageLogo} alt="Page logo"/>
                        </Link>
                    </div>
                    <div
                        className={`c-navbar__container__items ${isMenuVisible ? 'is-active' : ''}`}>
                        {
                            menuItems?.length && menuItems.map((menuItem: MenuItem) => {
                                const {id, name, link} = menuItem;

                                return (
                                    <Link key={id}
                                          to={link}
                                          className="c-navbar__container__items__item c-menu-item">
                                        {name}
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <div className="c-navbar__container__cart"
                         aria-label="Cart icon">
                        <Link to="/"
                              className="c-navbar__container__cart__icon">
                            <CartIcon/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default Header;