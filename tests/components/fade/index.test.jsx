import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { TransitionGroup } from 'react-transition-group';
import { Fade } from '../../../src/components';

class Helper extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      showItem: props.showItem,
    };
  }

  toggle() {
    this.setState({
      showItem: !this.state.showItem,
    });
  }

  render() {
    return (
      <div>
        <div className="trigger" onClick={this.toggle}>Toggle</div>
        <TransitionGroup component="div">
          {this.state.showItem ? this.props.children : null}
        </TransitionGroup>
      </div>
    );
  }
}

let clock;

const setup = () => {
  clock = sinon.useFakeTimers();
};

const teardown = () => {
  clock.restore();
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
    teardown();
  });
};

test('Fade:: should transition classes from "fade" to "fade show" on appear', (t) => {
  const isOpen = true;
  const wrapper = mount(
    <Helper showItem={isOpen} >
      <Fade key={Math.random()}>Yo!</Fade>
      <Fade appear={false} key={Math.random()}>Yo 2!</Fade>
    </Helper>
  );

  t.equal(wrapper.find('div.fade').length, 2);
  t.equal(wrapper.find('div.fade.show').length, 2);

  clock.tick(300);

  t.equal(wrapper.find('div.fade.show').length, 2);

  wrapper.find('.trigger').simulate('click');
  t.equal(wrapper.find('div.fade.show').length, 0);
  t.end();
});

test('Fade:: should transition classes from "fade" to "fade show" on enter', (t) => {
  const onEnter = sinon.spy();
  const onExit = sinon.spy();
  const isOpen = false;
  const wrapper = mount(
    <Helper showItem={isOpen} >
      <Fade onEnter={onEnter} onExit={onExit} key={Math.random()}>Yo 3!</Fade>
      <Fade appear={false} enter={false} exit={false} key={Math.random()}>Yo 4!</Fade>
    </Helper>
  );

  t.equal(wrapper.find('div.fade').length, 0);
  t.equal(wrapper.find('div.fade.show').length, 0);

  wrapper.find('.trigger').simulate('click');

  t.equal(wrapper.find('div.fade').length, 2);
  t.equal(wrapper.find('div.fade.show').length, 2);
  t.true(onEnter.called);

  clock.tick(300);

  t.true(onEnter.called);
  t.true(onExit.notCalled);
  t.equal(wrapper.find('div.fade.show').length, 2);

  wrapper.find('.trigger').simulate('click');
  t.equal(wrapper.find('div.fade.show').length, 0);
  t.true(onExit.called);

  t.end();
});

test('Fade:: should pass className down', (t) => {
  const alert = mount(<Fade className="test-class-name">Yo!</Fade>);
  t.true(alert.find('.fade').prop('className').indexOf('test-class-name') !== -1);
  t.end();
});

test('Fade:: should pass other props down', (t) => {
  const alert = mount(<Fade data-testprop="testvalue">Yo!</Fade>);
  t.equal(alert.find('.fade').prop('data-testprop'), 'testvalue');
  t.end();
});

test('Fade:: should support custom tag', (t) => {
  const alert = mount(<Fade tag="p">Yo!</Fade>);
  t.equal(alert.find('p').length, 1);
  t.end();
});
