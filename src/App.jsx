import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MissingPage from "./pages/MissingPage";
// import "./App.css"

function App() {
    const routes = [
      {
        component: Home,
        path: "/",
      },
      {
        component: About,
        path: "/pages/About",
      },
      {
        component: Contact,
        path: "/pages/Contact",
      },
      {
        component: MissingPage,
        path: "*",
      }
    ];

    const routesComponents = routes.map(({component, path}) => (
        <Route key={component} element={component} path={path}>
            {component}
        </Route>
    ));

    return (
        <div className="App">
            <Router>
                <Layout>
                    <Routes>
                        {routesComponents}
                    </Routes>
                </Layout>
            </Router>
        </div>
    )
}

export default App;