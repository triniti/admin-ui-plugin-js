import React from 'react';
import tape from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { DropdownItem } from '../../../src/components';

let isOpen;
let toggle;

const setup = () => {
  isOpen = false;
  toggle = () => { isOpen = !isOpen; };
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
  });
};

test('should render a single child', (t) => {
  const wrapper = mount(<DropdownItem>Ello world</DropdownItem>);

  t.equal(wrapper.text(), 'Ello world');
  t.true(wrapper.find('button').hasClass('dropdown-item'));
  t.equal(wrapper.find('button').length, 1);

  t.end();
});

test('should render type as "button" by default when tag is "button"', (t) => {
  const wrapper = mount(<DropdownItem>Home</DropdownItem>);

  t.equal(wrapper.find('button').prop('type'), 'button');
  t.equal(wrapper.text(), 'Home');

  t.end();
});

test('should render type as undefined by default when tag is "button" and toggle is false', (t) => {
  const wrapper = mount(<DropdownItem toggle={false}>Home</DropdownItem>);

  t.same(wrapper.find('button').prop('type'), undefined);
  t.equal(wrapper.text(), 'Home');

  t.end();
});

test('should render type as "button" by default when tag is "button" and onClick is provided', (t) => {
  const wrapper = mount(<DropdownItem onClick={() => {}}>Home</DropdownItem>);

  t.equal(wrapper.find('button').prop('type'), 'button');
  t.equal(wrapper.text(), 'Home');

  t.end();
});

test('should render type as user defined when defined by the user', (t) => {
  const wrapper = mount(<DropdownItem type="submit">Home</DropdownItem>);

  t.equal(wrapper.find('button').prop('type'), 'submit');
  t.equal(wrapper.text(), 'Home');

  t.end();
});

test('should not render type by default when the type is not defined and the tag is not "button"', (t) => {
  const wrapper = mount(<DropdownItem tag="a">Home</DropdownItem>);

  t.same(wrapper.find('a').prop('type'), undefined);
  t.equal(wrapper.text(), 'Home');
  t.end();
});

test('should render custom element', (t) => {
  const Link = props => <a href="/home" {...props}>{props.children}</a>;
  const wrapper = mount(<DropdownItem tag={Link}>Home</DropdownItem>);

  t.equal(wrapper.find('a').length, 1);
  t.true(wrapper.find('a').hasClass('dropdown-item'));
  t.equal(wrapper.text(), 'Home');

  t.end();
});

test('should render h6 tag heading', (t) => {
  const wrapper = mount(<DropdownItem header>Heading</DropdownItem>);

  t.equal(wrapper.find('h6').length, 1);
  t.true(wrapper.find('h6').hasClass('dropdown-header'));
  t.equal(wrapper.text(), 'Heading');

  t.end();
});

test('should render an active class', (t) => {
  const wrapper = mount(<DropdownItem active />);

  t.equal(wrapper.find('.active').length, 1);

  t.end();
});

test('should render a divider element', (t) => {
  const wrapper = mount(<DropdownItem divider />);

  t.equal(wrapper.find('.dropdown-divider').length, 1);

  t.end();
});

test('should render an anchor tag', (t) => {
  const wrapper = mount(<DropdownItem href="#">GO!</DropdownItem>);

  t.equal(wrapper.find('a').length, 1);
  t.true(wrapper.find('a').hasClass('dropdown-item'));
  t.equal(wrapper.text(), 'GO!');

  t.end();
});

test('should not be called when disabled', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = mount(<DropdownItem disabled>Item</DropdownItem>);
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(preventDefault.called);

  t.end();
});

test('should not be called when divider is set', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = mount(<DropdownItem divider />);
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(preventDefault.called);

  t.end();
});

test('should not be called when header item', (t) => {
  const preventDefault = sinon.spy();
  const wrapper = mount(<DropdownItem header>Header</DropdownItem>);
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(preventDefault.called);

  t.end();
});


test('should be called when not disabled, heading, or divider', (t) => {
  const preventDefault = sinon.spy();
  const onClick = sinon.spy();
  const wrapper = mount(
    <DropdownItem onClick={() => onClick()}>Click me</DropdownItem>,
    {
      context: {
        toggle,
      },
    },
  );
  const instance = wrapper.instance();

  instance.onClick({ preventDefault });
  t.true(onClick.called);

  t.end();
});

test('should call toggle', (t) => {
  toggle = sinon.spy();
  const wrapper = mount(
    <DropdownItem>Click me</DropdownItem>,
    {
      context: {
        toggle,
      },
    },
  );

  wrapper.simulate('click');
  t.true(toggle);

  t.end();
});
