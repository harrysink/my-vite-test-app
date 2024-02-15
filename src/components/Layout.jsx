import React from "react";
import "./Layout.css"

function Layout({children}) {
    return (
        <div>
            <h1>My Test App</h1>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <main>{children}</main>
            <footer>My Test App &copy; 2024</footer>
        </div>
    )
}

export default Layout;