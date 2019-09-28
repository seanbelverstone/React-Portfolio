import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MainSection from "./components/jumbotron";
import Projects from "./components/projects";
import Contact from "./components/contact";
import './App.css';

function App() {
  return (
    <Router>

      <div>
        <Navbar />

        <Route exact path="/" component={MainSection} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />

      </div>
    </Router>
  );
}


export default App;
