import React, {useState} from 'react'
import {Collapse,Nav,Navbar,NavbarBrand,NavbarToggler,NavItem} from "reactstrap"
import {NavLink as RouterLink} from "react-router-dom"
import style from "./Header.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Header = (props) => {
    const {logo, navItems} = props;
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink activeClassName={style.active} to={item.url} className={style.navLink}>
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });
    return (
        <div className={style.navBar}>
            <Navbar expand="md" full light className={style.navbarNav}>
                <div className="container d-flex">
                    <NavbarBrand className={style.navBrand}>
                        <RouterLink to="/" className="router-link">
                            <img className={style.logo} src={logo} alt=""/>
                        </RouterLink>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle}/>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav navbar className="d-flex justify-content-center w-100 align-items-center">
                            {itemList}
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </div>
    )
}

export default Header