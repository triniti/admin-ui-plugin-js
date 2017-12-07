import React from 'react';
import test from 'tape';
import { shallow } from 'enzyme';
import { Carousel, UncontrolledCarousel } from '../../../src/components';

const items = [
  { src: '', altText: 'a', caption: 'caption 1' },
  { src: '', altText: 'b', caption: 'caption 2' },
  { src: '', altText: 'c', caption: 'caption 3' },
];

test('UncontrolledCarousel:: should be an Carousel', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  t.is(carousel.type(), Carousel);
  t.end();
});

test('UncontrolledCarousel:: should have activeIndex default to 0', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  t.equal(carousel.prop('activeIndex'), 0);
  t.end();
});

test('UncontrolledCarousel:: should have next function', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  t.equal(typeof carousel.prop('next'), 'function');
  t.end();
});

test('UncontrolledCarousel:: should have prev function', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  t.equal(typeof carousel.prop('previous'), 'function');
  t.end();
});

test('UncontrolledCarousel:: should have ride set to "carousel" by default', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  t.equal(carousel.prop('ride'), 'carousel');
  t.end();
});

test('UncontrolledCarousel:: should increase the activeIndex when next is called', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  t.end();
});

test('UncontrolledCarousel:: should not increase the activeIndex when next is called while animating', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.animating = true;
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 0);
  t.end();
});

test('UncontrolledCarousel:: should wrap the activeIndex when next is called on the last item', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 2);
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 0);
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  t.end();
});

test('UncontrolledCarousel:: should decrease the activeIndex when previous is called', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  instance.previous();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 0);
  t.end();
});

test('UncontrolledCarousel:: should not decrease the activeIndex when previous is called while animating', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.next();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  instance.animating = true;
  instance.previous();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 1);
  t.end();
});

test('UncontrolledCarousel:: should wrap the activeIndex when previous is called on the first item', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.previous();
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 2);
  t.end();
});

test('UncontrolledCarousel:: should set the activeIndex when goToIndex is called with a value', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.goToIndex(2);
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 2);
  t.end();
});

test('UncontrolledCarousel:: should not set the activeIndex when goToIndex is called with a value when animating', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  instance.animating = true;
  instance.goToIndex(2);
  carousel.update();
  t.equal(carousel.prop('activeIndex'), 0);
  t.end();
});

test('UncontrolledCarousel:: should track animating of the slides', (t) => {
  const carousel = shallow(<UncontrolledCarousel items={items} />);
  const instance = carousel.instance();
  t.false(instance.animating);
  instance.onExiting();
  carousel.update();
  t.true(instance.animating);
  instance.onExited();
  carousel.update();
  t.false(instance.animating);
  t.end();
});
