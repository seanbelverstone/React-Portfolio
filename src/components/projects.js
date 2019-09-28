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

const items = [
  {
    id: 1,
    src: fureverHome,
    altText: 'FurEver Home',
    caption: 'Enter Description Here'
  },
  {
    id: 2,
    src: burger,
    altText: 'Sequelized Burger',
    caption: 'Enter Description Here'
  },
  {
    id: 3,
    src: clicky,
    altText: 'Halo Themed Clicky Game',
    caption: 'Enter Description Here'
  },
  {
    id: 4,
    src: friendFinder,
    altText: 'Friend Finder',
    caption: 'Enter Description Here'
  },
  {
    id: 5,
    src: bamazon,
    altText: 'Bamazon',
    caption: 'Enter Description Here'
  },
  {
    id: 6,
    src: liri,
    altText: 'LIRI - Node App',
    caption: 'Enter Description Here'
  },
  {
    id: 7,
    src: fridgeChef,
    altText: 'Fridge Chef',
    caption: 'Enter Description Here'
  },
  {
    id: 8,
    src: trivia,
    altText: 'Lord of the Rings Trivia',
    caption: 'Enter Description Here'
  },
  {
    id: 9,
    src: trainTimes,
    altText: 'Train Times',
    caption: 'Enter Description Here'
  },
  {
    id: 10,
    src: giftastic,
    altText: 'GifTastic',
    caption: 'Enter Description Here'
  },
  {
    id: 11,
    src: crystal,
    altText: 'Crystal Collector',
    caption: 'Enter Description Here'
  },
  {
    id: 12,
    src: hangman,
    altText: 'UK Hangman',
    caption: 'Enter Description Here'
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
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
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
          <img src={item.src} alt={item.altText} className="projectImage"/>
          <CarouselCaption className="text-white" captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
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