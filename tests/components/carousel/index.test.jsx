import React from 'react';
import test from 'tape';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Carousel } from '../../../src/components';
import CarouselItem from '../../../src/components/carousel-item';
import CarouselIndicators from '../../../src/components/carousel-indicators';
import CarouselControl from '../../../src/components/carousel-control';
import CarouselCaption from '../../../src/components/carousel-caption';

const setup = () => {
  const clock = sinon.useFakeTimers();
  const items = [
    { src: '', altText: 'a', caption: 'caption 1' },
    { src: '', altText: 'b', caption: 'caption 2' },
    { src: '', altText: 'c', caption: 'caption 3' },
  ];

  const fixtures = { clock, items };
  return fixtures;
};

const teardown = (fixtrues) => {
  fixtrues.clock.restore();
  fixtrues.items = [];
};

test('Carousel', (t) => {
  const fixtures = setup();
  const { items } = fixtures;

  let wrapper = mount(<CarouselCaption captionHeader="abc" captionText="def" />);
  t.equal(1, wrapper.find('h3').length, 'should render a header and a caption');
  t.equal(1, wrapper.find('p').length, 'should render a header and a caption');

  wrapper = mount(
    <CarouselItem src={items[0].src} altText={items[0].altText}>
      <CarouselCaption captionHeader="abc" captionText="def" />
    </CarouselItem>,
  );
  t.equal(1, wrapper.find('img').length, 'should render an img tag');

  wrapper = mount(
    <CarouselItem src={items[0].src} altText={items[0].src}>
      <CarouselCaption captionHeader="text" captionText="text" />
    </CarouselItem>,
  );
  t.equal(1, wrapper.find(CarouselCaption).length, 'should render a caption if one is passed in');

  teardown(fixtures);
  t.end();
});

test('Carousel transition', (t) => {
  const fixture = setup();
  const { clock, items } = fixture;
  let wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentWillEnter(() => {});
  t.same(
    ['carousel-item-next', 'carousel-item-left'],
    wrapper.state('animation'),
    'should add the appropriate classes when componentWillEnter is fired',
  );
  wrapper.setContext({ direction: 'left' });
  wrapper.instance().componentWillEnter(() => {});
  t.same(
    ['carousel-item-prev', 'carousel-item-right'],
    wrapper.state('animation'),
    'should add the appropriate classes when componentWillEnter is fired',
  );

  let callback = sinon.spy();
  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentWillEnter(callback);
  clock.tick(500);
  t.true(callback.calledOnce, 'should call the callback after 500 when componentWillEnter is called');

  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentDidEnter();
  t.same(['active'], wrapper.state('animation'), 'should add the appropriate classes when componentDidEnter is fired');

  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentWillLeave(() => {});
  t.same(['carousel-item-left', 'active'], wrapper.state('animation'), 'should add the appropriate classes when componentWillLeave is fired');
  wrapper.setContext({ direction: 'left' });
  wrapper.instance().componentWillLeave(() => {});
  t.same(['carousel-item-right', 'active'], wrapper.state('animation'));

  callback = sinon.spy();
  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentWillLeave(callback);
  clock.tick(500);
  t.true(callback.calledOnce, 'should call the callback after 500 when componentWillLeave is called');

  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentDidLeave();
  t.same([], wrapper.state('animation'), 'should add the appropriate classes when componentDidLeave is fired');

  wrapper = mount(<CarouselItem src={items[0].src} altText={items[0].src} />, { context: { direction: 'right' } });
  wrapper.instance().componentWillAppear(() => {});
  t.same(['active'], wrapper.state('animation'), 'should add the appropriate classes when componentWillAppear is fired');

  teardown(fixture);
  t.end();
});

test('Carousel indicators', (t) => {
  const fixture = setup();
  const { items } = fixture;

  let wrapper = mount(<CarouselIndicators items={items} activeIndex={0} onClickHandler={() => {}} />);
  t.equal(1, wrapper.find('ol').length, 'should render a list with the right number of items');
  t.equal((items.length || 0), wrapper.find('li').length, 'should render a list with the right number of items');
  t.equal(1, wrapper.find('.active').length, 'should append the correct active class');

  const onClick = sinon.spy();
  wrapper = shallow(<CarouselIndicators items={items} activeIndex={0} onClickHandler={onClick} />);
  wrapper.find('li').first().simulate('click', { preventDefault: () => {} });
  t.true(onClick.called, 'should call the click hanlder');

  teardown(fixture);
  t.end();
});

test('Carousel controls', (t) => {
  const onClick = sinon.spy();
  const wrapper = mount(<CarouselControl direction={'next'} onClickHandler={onClick} />);
  wrapper.find('a').first().simulate('click');

  t.equal(1, wrapper.find('a').length, 'should render an anchor tag');
  t.true(onClick.called, 'should call the onClickHandler');

  t.end();
});

test('Carousel rendering', (t) => {
  const fixture = setup();
  const { items } = fixture;

  let slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  let wrapper = mount(
    <Carousel activeIndex={0} next={() => {}} previous={() => {}}>
      <CarouselIndicators items={slides} activeIndex={0} onClickHandler={() => {}} />
      {slides}
    </Carousel>,
  );
  t.equal(1, wrapper.find(CarouselIndicators).length, 'should show the carousel indicators');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel activeIndex={0} next={() => {}} previous={() => {}}>
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
    </Carousel>,
  );
  t.equal(2, wrapper.find(CarouselControl).length, 'should show controls');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel activeIndex={0} next={() => {}} previous={() => {}}>
      {slides}
    </Carousel>,
  );
  t.equal(1, wrapper.find(CarouselItem).length, 'should show a single slide');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel activeIndex={0} next={() => {}} previous={() => {}}>
      <CarouselIndicators items={slides} activeIndex={0} onClickHandler={() => {}} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={() => {}} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={() => {}} />
    </Carousel>,
  );

  t.equal(2, wrapper.find(CarouselControl).length, 'should show indicators and controls');
  t.equal(1, wrapper.find(CarouselIndicators).length, 'should show indicators and controls');

  teardown(fixture);
  t.end();
});

test('Carousel carouseling', (t) => {
  const fixture = setup();
  const { items } = fixture;

  let slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  let wrapper = mount(
    <Carousel interval={1000} activeIndex={0} next={() => {}} previous={() => {}}>
      {slides}
    </Carousel>,
  );

  wrapper.setProps({ activeIndex: 1 });
  t.equal('right', wrapper.state().direction, 'should go right when the index increases');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel interval={1000} activeIndex={1} next={() => {}} previous={() => {}}>
      {slides}
    </Carousel>,
  );

  wrapper.setProps({ activeIndex: 0 });
  t.equal('left', wrapper.state().direction, 'should go left when the index decreases');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel interval={1000} activeIndex={2} next={() => {}} previous={() => {}}>
      {slides}
    </Carousel>,
  );

  wrapper.setProps({ activeIndex: 0 });
  t.equal('right', wrapper.state().direction, 'should go right if transitioning from the last to first slide');

  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel interval={1000} activeIndex={0} next={() => {}} previous={() => {}}>
      {slides}
    </Carousel>,
  );

  wrapper.setProps({ activeIndex: 2 });
  t.equal('left', wrapper.state().direction, 'should go left if transitioning from the first to last slide');

  teardown(fixture);
  t.end();
});

test('Carousel interval', (t) => {
  const fixture = setup();
  const { clock, items } = fixture;

  let next = sinon.spy(() => true);
  let slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  let wrapper = mount(
    <Carousel next={next} interval={1000} activeIndex={0} paused previous={() => {}}>
      {slides}
    </Carousel>,
  );
  clock.tick(1000);
  t.false(next.called, 'should not cycle when paused');
  wrapper.unmount();

  next = sinon.spy();
  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel next={next} interval={1000} activeIndex={0} previous={() => {}}>
      {slides}
    </Carousel>,
  );
  clock.tick(1000);
  t.true(next.called, 'should accept a number');
  wrapper.unmount();

  next = sinon.spy();
  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel next={next} activeIndex={0} interval={false} previous={() => {}}>
      {slides}
    </Carousel>,
  );
  clock.tick(5000);
  t.false(next.called, 'should accept a boolean');
  wrapper.unmount();

  next = sinon.spy();
  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel next={next} activeIndex={0} previous={() => {}}>
      {slides}
    </Carousel>,
  );
  clock.tick(5000);
  t.true(next.called, 'should default to 5000');
  wrapper.unmount();

  next = sinon.spy();
  slides = items.map((item, idx) => (
    <CarouselItem
      key={idx}
      src={item.src}
      altText={item.altText}
    >
      <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    </CarouselItem>
  ));

  wrapper = mount(
    <Carousel next={next} interval="1000" activeIndex={0} previous={() => {}}>
      {slides}
    </Carousel>,
  );
  clock.tick(1000);
  t.true(next.called, 'it should accept a string');
  wrapper.unmount();

  teardown(fixture);
  t.end();
});
