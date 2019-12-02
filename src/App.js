import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import Navbar from "./components/navbar";
import MainSection from "./components/jumbotron";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelopeOpenText, faPhone, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(faUser, faEnvelopeOpenText, faPhone, faCommentAlt);

ReactGA.initialize(153622944);
ReactGA.pageview('/');


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
