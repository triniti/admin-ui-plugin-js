import React, { Component } from 'react';
import {
  CardImgOverlay,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Media
} from '../../../../src/components';

const items = [
  {
    src: 'http://www.telepixdev.com/triniti/carousel/1.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'http://www.telepixdev.com/triniti/carousel/2.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'http://www.telepixdev.com/triniti/carousel/3.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: 'http://www.telepixdev.com/triniti/carousel/4.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  },
  {
    src: 'http://www.telepixdev.com/triniti/carousel/5.jpg',
    altText: 'Slide 5',
    caption: 'Slide 5'
  },
];

class CarouselExample extends Component {
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
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="gradient-overlay"
        >
          <Media aspectRatio="16by9">
            <img src={item.src} alt={item.altText} className="img-fluid w-100" />
          </Media>
            <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
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
    );
  }
}


export default CarouselExample;