import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MainSection = (props) => {
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">From Full English to Full Stack</h1>
                    <p className="lead">My personal journey from chef to coder.</p>
                    </Container>
                </Jumbotron>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div id="aboutMeSection">
                    <p>As an Englishman who's spent most of his career in the catering industry, I've made a smooth transition over to web development. After completing a Full Stack Web Developer bootcamp at UT Austin, I am now proficient in React, Javascript, Node.js, Express, HTML & CSS, among many other programs, libraries and frameworks.</p>
                    <p>With a keen eye for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team.</p>
                    <p>Feel free to peruse my favorite projects via the navbar above, or even visit my GitHub to see my full catalogue. I'd love to hear from you, too! Fire me an email from the contact page.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MainSection;