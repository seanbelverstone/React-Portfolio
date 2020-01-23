import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import image from "../images/about-me-photo.jpg";
import githubLogo from "../images/GitHub-Mark-120px-plus.png";
import linkedInLogo from "../images/linkedin.png";

const MainSection = (props) => {
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <Jumbotron fluid>
                    <Container fluid>
                    <h1 className="display-3">From Full English to Full Stack</h1>
                    <p className="lead">My personal journey from chef to coder.</p>

                    <a className="logo" href="https://github.com/seanbelverstone">
                        <img src={githubLogo} alt="GitHub logo" id="github" />
                    </a>
                    <a className="logo" href="https://www.linkedin.com/in/sean-belverstone/">
                        <img src={linkedInLogo} alt="LinkedIn logo" id="linkedin" />
                    </a>
                    <a className="logo" href="https://drive.google.com/file/d/1fXTNVPvD0wRBIUyHc-Y8QWaxbEOjTLP0/view?usp=sharing" id="cv">
                        CV
                    </a>
                    </Container>
                </Jumbotron>
            </div>
        </div>
        <div className="row">
            <div id="aboutMeSection">
                <div className="col-lg-3 col-12">
                    <img src={image} alt="Sean Belverstone" id="myPhoto" />
                </div>
                <div className="col-12">
                    <div id="aboutMeText">
                        <p>As an Englishman who's spent most of his career in the catering industry, I've made a smooth transition over to web development. After completing a Full Stack Web Developer bootcamp at UT Austin, I am now proficient in React, Javascript, Node.js, Express, HTML & CSS, among other programs, libraries and frameworks.</p>
                        <p>With a keen eye for designing front-end and a logical brain for tackling back-end, I'd be an essential asset to your team.</p>
                        <p>Feel free to peruse my favorite projects via the navbar above, or even visit my GitHub to see my full catalogue. I'd love to hear from you, too! Fire me an email from the contact page.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div id="aboutMeSection">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vestibulum sed arcu non odio euismod lacinia. Magna etiam tempor orci eu lobortis. Dolor purus non enim praesent elementum facilisis leo vel. Vel pretium lectus quam id leo in vitae turpis massa. Et malesuada fames ac turpis egestas maecenas. Nunc congue nisi vitae suscipit. Dui faucibus in ornare quam viverra orci. Nunc aliquet bibendum enim facilisis gravida. Scelerisque felis imperdiet proin fermentum leo. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Eu scelerisque felis imperdiet proin fermentum leo vel. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Consectetur purus ut faucibus pulvinar elementum. A diam maecenas sed enim ut sem. Non diam phasellus vestibulum lorem sed risus ultricies tristique nulla. Tempus quam pellentesque nec nam aliquam sem et tortor. Magna sit amet purus gravida.
                        In arcu cursus euismod quis viverra nibh cras pulvinar. Lacus sed viverra tellus in hac habitasse. Facilisi nullam vehicula ipsum a arcu. In eu mi bibendum neque egestas congue quisque egestas. Pellentesque sit amet porttitor eget dolor. Ante in nibh mauris cursus. Feugiat vivamus at augue eget. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Gravida quis blandit turpis cursus in. Diam sit amet nisl suscipit adipiscing bibendum est. Vel facilisis volutpat est velit egestas dui. Accumsan lacus vel facilisis volutpat est velit egestas dui. Purus in massa tempor nec feugiat nisl pretium. Convallis aenean et tortor at risus viverra. Viverra vitae congue eu consequat ac felis donec et odio. Risus viverra adipiscing at in tellus integer.
                        Urna neque viverra justo nec ultrices dui sapien eget mi. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Eget aliquet nibh praesent tristique. Eu augue ut lectus arcu. Quam nulla porttitor massa id neque aliquam. Laoreet sit amet cursus sit amet dictum sit amet justo. Lacinia quis vel eros donec ac odio. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Purus non enim praesent elementum facilisis leo vel. Lorem dolor sed viverra ipsum nunc aliquet bibendum. Sit amet dictum sit amet justo donec enim diam vulputate. Turpis tincidunt id aliquet risus feugiat in ante metus dictum.
                        Nibh praesent tristique magna sit. Etiam dignissim diam quis enim lobortis. Turpis nunc eget lorem dolor sed. Vitae semper quis lectus nulla at volutpat diam. At ultrices mi tempus imperdiet nulla malesuada pellentesque. Leo urna molestie at elementum eu facilisis sed odio morbi. Faucibus nisl tincidunt eget nullam non nisi. Quis auctor elit sed vulputate mi. Convallis tellus id interdum velit laoreet id donec ultrices tincidunt. A cras semper auctor neque vitae tempus quam pellentesque. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Adipiscing at in tellus integer feugiat scelerisque. Massa massa ultricies mi quis hendrerit. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Fermentum posuere urna nec tincidunt praesent. Vitae nunc sed velit dignissim sodales ut eu.
                        In pellentesque massa placerat duis ultricies. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Sagittis purus sit amet volutpat consequat mauris. In arcu cursus euismod quis. Ut tristique et egestas quis ipsum suspendisse ultrices. Sed velit dignissim sodales ut eu sem integer. Lacus suspendisse faucibus interdum posuere. Varius vel pharetra vel turpis. Curabitur gravida arcu ac tortor dignissim convallis aenean. Morbi leo urna molestie at elementum eu facilisis sed.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MainSection;