import React from "react";
import { Link } from "react-router-dom"
// import Home from "../pages/Home";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
import "./Layout.css"

const NavBar = ({routes}) => {
    const links = routes.map(({component, path}) => (
        <Link key={component} to={path}>
            {component}
        </Link>
    ))

    return (
        <div>
            {links}
        </div>
    )
}

function Layout() {
    return (
        <div>
            <h1>My Test App</h1>
            <NavBar routes={routes} />
            <footer>My Test App &copy; 2024</footer>
        </div>
    )
}

export default Layout;