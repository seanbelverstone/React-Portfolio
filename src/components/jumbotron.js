import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const MainSection = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">From Full English to Full Stack</h1>
          <p className="lead">My personal journey from chef to coder.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default MainSection;