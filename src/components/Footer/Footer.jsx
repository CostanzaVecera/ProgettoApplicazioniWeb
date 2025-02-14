import React from 'react'
import style from './Footer.module.css'
import F1_logo_blu from '../../assets/images/f1_logo_blu.png'
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function Footer(props) {
    const {navItems} = props;

    const itemList = navItems.map(item => {
        return (
            <li key={item.url} className="nav-item">
                <NavLink activeClassName={style.active} to={item.url}>
                    {item.text}
                    <div className={style.underline}></div>
                </NavLink>
            </li>
        )
    });

    return (
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <nav className="nav flex-column" id={style.copyright}>
                            <ul className="nav flex-row">
                                {itemList}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-2">
                        <div id={style.logo}>
                            <img src={F1_logo_blu} alt="F1_logo_blu"/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer