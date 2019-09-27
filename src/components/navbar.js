import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Router>
            <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">sean belverstone</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav navbar>
                <NavItem>
                    <NavLink>
                        <Link to="/">
                            Home
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>

        {/* Uncomment this when components have been defined */}
            {/* <Route path="/" exact component={About} />
            <Route path="/about/" component={Projects} />
            <Route path="/users/" component={Contact} /> */}



        </Router>
      </div>
    );
  }
}