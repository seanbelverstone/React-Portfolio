import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";
import items from "../projectsList";

// Move the description box to the right and the slideshow smaller, and to the left. This will add more to the page

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
        <div className="carouselContainer">
          <div className="imgContainer">
            <img width="100%" src={item.src} alt={item.altText} />
          </div>
          <div className="textContainer">
            <CarouselCaption captionHeader={item.altText}  captionText={item.caption} />
            <div className="githubLink">
              <a href={item.link} id="gitLink">Code on GitHub</a>
              <a href={item.live} id="liveLink">Live Application</a>
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
          interval="10000"
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