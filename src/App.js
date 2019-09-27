import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import MainSection from "./components/jumbotron";
import Projects from "./components/projects";
import Contact from "./components/contact";
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Header />

        <Route exact path="/" component={MainSection} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default App;
