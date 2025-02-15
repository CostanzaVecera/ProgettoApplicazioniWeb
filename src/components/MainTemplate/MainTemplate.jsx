import React from 'react'
import PropTypes from 'prop-types'
import Footer from "../Footer/Footer.jsx"
import Header from "../Header/Header.jsx"

function MainTemplate(props) {
    const {children, navItems, logo} = props;

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header
                logo={logo}
                navItems={navItems} />
            <main className="flex-grow-1">
                {children}
            </main>
            <Footer
                navItems={navItems} />
        </div>
    );
}

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
    navItems: PropTypes.arrayOf(
        PropTypes.shape({
            url: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    ).isRequired,
    logo: PropTypes.string.isRequired
};

export default MainTemplate