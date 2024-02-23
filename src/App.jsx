import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MissingPage from "./pages/MissingPage";
import "./App.css"

const NavBar = ({routes}) => {
  const links = routes.map(({component, path}) => (
      <Link key={component} to={path}
        style={{
          padding: 13,
        }}
      >
        {component}
      </Link>
  ))
  return (
      <div>
          {links}
      </div>
  )
}

function App() {
    const routes = [
      {
        component: 'Home',
        path: "/"
      },
      {
        component: 'About',
        path: "/pages/About"
      },
      {
        component: 'Contact',
        path: "/pages/Contact"
      },
    ];

    const routesComponents = routes.map(({component, path}) => (
        <Route key={component} path={path} element={<h4>{component}</h4>}/>
    ));

    return (
        <div className="App">
          <h1>My Test App</h1>
          <Router>
              <NavBar routes={routes} />
              <Routes>
                  {routesComponents}
                  <Route path="*" element={MissingPage}/>
              </Routes>
          </Router>
          {Outlet}
          <footer>My Test App &copy; 2024</footer>
        </div>
    );
}

export default App;