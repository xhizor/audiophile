import React from "react";
import {Link} from 'react-router-dom';

import {menuItems} from '../../../data/menu-items';
import MenuItem from "../../../interfaces/MenuItem";
import pageLogo from '../../../assets/images/icons/logo.svg';
import {ReactComponent as FacebookIcon} from '../../../assets/images/icons/icon-facebook.svg';
import {ReactComponent as TwitterIcon} from '../../../assets/images/icons/icon-twitter.svg';
import {ReactComponent as InstagramIcon} from '../../../assets/images/icons/icon-instagram.svg';

/**
 * Footer component.
 *
 * @constructor
 */
const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="c-container">
                <div className="footer__container">
                    <div className="footer__container__top">
                        <Link to="/"
                              className="footer__container__top__logo">
                            <img src={pageLogo} alt="Page logo"/>
                        </Link>
                        <nav aria-label="Footer navigation"
                             className="footer__container__top__items">
                            {
                                menuItems?.length && menuItems.map((menuItem: MenuItem) => {
                                    const {id, name, link} = menuItem;

                                    return (
                                        <Link key={id}
                                              to={link}
                                              className="footer__container__items__top__item c-menu-item">
                                            {name}
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </div>
                    <div className="footer__container__mid">
                        <p className="footer__container__mid__text footer__container__text">
                            Audiophile is an all in one stop to fulfill your
                            audio needs. We're a small team of music lovers and
                            sound specialists who are devoted to helping you get
                            the most out of personal audio. Come and visit our
                            demo facility - we’re open 7 days a week.
                        </p>
                        <SocialIcons/>
                    </div>
                    <div className="footer__container__bottom">
                        <p className="footer__container__bottom__copyright footer__container__text">
                            <strong>
                                Copyright {currentYear}. All Rights Reserved
                            </strong>
                        </p>
                        <SocialIcons/>
                    </div>
                </div>
            </div>
        </footer>
    )
};

/**
 * Social icons component.
 *
 * @constructor
 */
const SocialIcons: React.FC = () => {
    return (
        <div
            className="footer__container__social">
            <a href="https://www.facebook.com"
               target="_blank"
               className="footer__container__social__item"
               aria-label="Facebook logo">
                <FacebookIcon/>
            </a>
            <a href="https://www.twitter.com"
               target="_blank"
               className="footer__container__social__item"
               aria-label="Twitter logo">
                <TwitterIcon/>
            </a>
            <a href="https://www.instagram.com"
               target="_blank"
               className="footer__container__social__item"
               aria-label="Instagram logo">
                <InstagramIcon/>
            </a>
        </div>
    )
};

export default Footer;