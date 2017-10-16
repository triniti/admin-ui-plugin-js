import React from 'react';
import { mount } from 'enzyme';
import TransitionGroup from 'react-transition-group/TransitionGroup';
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
          { this.state.showItem ? this.props.children : null }
        </TransitionGroup>
      </div>
    );
  }
}

jest.useFakeTimers();

describe('Fade', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('should transition classes from "fade" to "fade show" on appear', () => {
    const isOpen = true;
    const wrapper = mount(<Helper showItem={isOpen} >
      <Fade key={Math.random()}>Yo!</Fade>
      <Fade transitionAppear={false} transitionEnter={false} transitionLeave={false} key={Math.random()}>Yo 2!</Fade>
    </Helper>);

    expect(wrapper.find('div.fade').length).toBe(2);
    expect(wrapper.find('div.fade.show').length).toBe(1);

    jest.runTimersToTime(300);

    expect(wrapper.find('div.fade.show').length).toBe(2);

    wrapper.find('.trigger').simulate('click');
    expect(wrapper.find('div.fade.show').length).toBe(0);
  });

  it('should transition classes from "fade" to "fade show" on enter', () => {
    const onEnter = jest.fn();
    const onLeave = jest.fn();
    const isOpen = false;
    const wrapper = mount(<Helper showItem={isOpen} >
      <Fade onEnter={onEnter} onLeave={onLeave} key={Math.random()}>Yo!</Fade>
      <Fade transitionAppear={false} transitionEnter={false} transitionLeave={false} key={Math.random()}>Yo 2!</Fade>
                          </Helper>);

    expect(wrapper.find('div.fade').length).toBe(0);
    expect(wrapper.find('div.fade.show').length).toBe(0);

    wrapper.find('.trigger').simulate('click');

    expect(wrapper.find('div.fade').length).toBe(2);
    expect(wrapper.find('div.fade.show').length).toBe(1);
    expect(onEnter).not.toHaveBeenCalled();

    jest.runTimersToTime(300);

    expect(onEnter).toHaveBeenCalled();
    expect(onLeave).not.toHaveBeenCalled();
    expect(wrapper.find('div.fade.show').length).toBe(2);

    wrapper.find('.trigger').simulate('click');
    expect(wrapper.find('div.fade.show').length).toBe(0);
  });
});
