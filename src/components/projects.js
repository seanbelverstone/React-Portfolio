import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
// All images required for the Carousel
import fureverHome from "../images/fureverHome.png";
import burger from "../images/burger.png";
import clicky from "../images/clicky.png";
import friendFinder from "../images/friendFinder.png";
import bamazon from "../images/bamazon.jpg";
import crystal from "../images/crystalcollector.png";
import fridgeChef from "../images/fridgechef.png";
import giftastic from "../images/giftastic.png";
import hangman from "../images/hangman.png";
import liri from "../images/liri-node-app.png";
import trainTimes from "../images/traintimes.png";
import trivia from "../images/trivia.png";

// Move the description box to the right and the slideshow smaller, and to the left. This will add more to the page

const items = [
  {
    id: 1,
    src: fureverHome,
    altText: 'FurEver Home',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/FurEver-Home"
  },
  {
    id: 2,
    src: burger,
    altText: 'Sequelized Burger',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/sequelizedBurger"
  },
  {
    id: 3,
    src: clicky,
    altText: 'Halo Themed Clicky Game',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/Clicky-Game"
  },
  {
    id: 4,
    src: friendFinder,
    altText: 'Friend Finder',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/Friend-Finder"
  },
  {
    id: 5,
    src: bamazon,
    altText: 'Bamazon',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/Bamazon"
  },
  {
    id: 6,
    src: liri,
    altText: 'LIRI - Node App',
    caption: 'Enter Description Here',
    link: "https://github.com/seanbelverstone/liri-node-app"
  },
  {
    id: 7,
    src: fridgeChef,
    altText: 'Fridge Chef',
    caption: "Project one, what a blast. Myself and three fellow programmers created this website in just two weeks. Working in our amazing group made the whole project an absolute joy. We set off with the desire to incorporate as many of the technologies we had learnt on our first 9 weeks in the bootcamp, and we are all very satisfied with the end result. I predominantly worked on the Ingredient Entry page and had a lot of fun utilising local storage, however we all were happy to help each other when required. This page lets the user select common ingredients from their fridge and the website returns a recipe.",
    link: "https://github.com/seanbelverstone/Fridge-Chef"
  },
  {
    id: 8,
    src: trivia,
    altText: 'Lord of the Rings Trivia',
    caption: "A Lord of the Rings trivia quiz. With dynamically appending questions, countdown timers and a rating screen at the end, this was one of my favorite projects to work on. Not just because of the theme used, but also because this project was the first one with full creative freedom. My favorite piece of feedback from this was: 'Your UI is beautiful' So proud!",
    link: "https://github.com/seanbelverstone/TriviaGame"
  },
  {
    id: 9,
    src: trainTimes,
    altText: 'Train Times',
    caption: "This project contains my first ever use of the back-end service, Firebase. I am quite fond of Firebase and its intricacies and it was extremely exciting to utilize a server for the first time. I designed this page in the colors of my grandfather's favorite style of train, the Southern Railway King Arthur - Sir Lamiel.",
    link: "https://github.com/seanbelverstone/Train-Times"
  },
  {
    id: 10,
    src: giftastic,
    altText: 'GifTastic',
    caption: "This is a gif display website! Simply write in the name of a video game, click your shiny new button and an assortment of related gifs will display. I included an option for an amount of gifs to display for further functionality. This website required the use of APIs and AJAX calls, which were very exciting.",
    link: "https://github.com/seanbelverstone/Giftastic"
  },
  {
    id: 11,
    src: crystal,
    altText: 'Crystal Collector',
    caption: "A simple, yet addictive Crystal Collector game, where the user has to carefully select the crystals to reach the target number. Each crystal contains a value that is intially hidden but reveals itself on the first click. I showed this to my family back in the UK and they had a blast!",
    link: "https://github.com/seanbelverstone/unit-4-game"
  },
  {
    id: 12,
    src: hangman,
    altText: 'UK Hangman',
    caption: "This was my first website created during the bootcamp. I used a theme based on the wonderful United Kingdom and although I initially found certain parts of this application quite challenging, through perseverance and dedication I overcame those hurdles. I love revisiting this website because it's easy to see how far I've come since my first couple of weeks of the bootcamp!",
    link: "https://github.com/seanbelverstone/Word-Guess-Game"
  }
];


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.stopOnHover = this.stopOnHover.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  stopOnHover() {
    if (onmouseover(this)) {
      this.animating=false;
    }
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (

        <CarouselItem
          className="slide"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
        <div className='carouselContainer'>
          <div className='imgContainer'>
            <img width='100%' src={item.src} alt={item.altText} />
          </div>
          <div className='textContainer'>
            <CarouselCaption captionHeader={item.altText}  captionText={item.caption} />
            <div className="githubLink">
              <a href={item.link}>Click here to view the code on GitHub</a>
            </div>
          </div>
        </div>
      </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          className="projectsCarousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}


export default Projects;