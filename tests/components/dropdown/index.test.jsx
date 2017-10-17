import React from 'react';
import tape from 'tape';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from '../../../src/components';
import { keyCodes } from '../../../src/components/utils';

// polyfill
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

window.cancelAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

// shared vars
let isOpen;
let toggle;
let element;
let componentDidUpdate;
let handleProps;
let handleDocumentClick;

const before = () => {
  isOpen = false;
  toggle = () => { isOpen = !isOpen; };
  componentDidUpdate = sinon.spy(Dropdown.prototype, 'componentDidUpdate');
  handleDocumentClick = sinon.spy(Dropdown.prototype, 'handleDocumentClick');
  handleProps = sinon.spy(Dropdown.prototype, 'handleProps');
  element = document.createElement('div');
  document.body.appendChild(element);
};

const after = () => {
  componentDidUpdate.restore();
  handleProps.restore();
  handleDocumentClick.restore();
  document.body.removeChild(element);
  element = null;
};

// setup
const test = (description, fn) => {
  tape(description, (t) => {
    before();
    fn(t);
    after();
  });
};

// start tests
test('Dropdown:: should render a single child', (t) => {
  const wrapper = mount(<Dropdown isOpen={isOpen} toggle={toggle}>Ello world</Dropdown>);

  t.equal(wrapper.text(), 'Ello world');
  t.end();
});

test('Dropdown:: should render multiple children when isOpen is true', (t) => {
  isOpen = true;
  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  t.equal(wrapper.find('.btn').text(), 'Toggle');
  t.equal(wrapper.find('.dropdown').length, 2);
  t.equal(wrapper.find('.dropdown-item').length, 1);
  t.equal(wrapper.children().length, 1);
  t.end();
});

test('Dropdown:: should not call props.toggle when disabled ', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy} disabled>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  const instance = wrapper.instance();
  instance.toggle({ preventDefault: () => { } });
  t.true(toggleSpy.notCalled);
  t.end();
});

test('Dropdown::handleProps:: should be called on componentDidUpdate when isOpen changed', (t) => {
  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
  );

  const instance = wrapper.instance();

  t.equal(componentDidUpdate.callCount, 0);
  t.equal(handleProps.callCount, 1);
  t.false(instance.props.isOpen);

  isOpen = true;
  wrapper.setProps({ isOpen });

  t.equal(componentDidUpdate.callCount, 1);
  t.equal(handleProps.callCount, 2);
  t.true(instance.props.isOpen);
  t.end();
});

test('Dropdown::handleProps:: should not be called on componentDidUpdate when isOpen did not change', (t) => {
  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
  );
  const instance = wrapper.instance();

  t.equal(componentDidUpdate.callCount, 0);
  t.equal(handleProps.callCount, 1);
  t.false(instance.props.isOpen);

  wrapper.setProps({ 'data-foo': 'bar' });

  t.equal(componentDidUpdate.callCount, 1);
  t.equal(handleProps.callCount, 1);
  t.false(instance.props.isOpen);

  t.end();
});

test('Dropdown::removeEvents:: should be called on componentWillUnmount', (t) => {
  const componentWillUnmount = sinon.spy(Dropdown.prototype, 'componentWillUnmount');
  const removeEvents = sinon.spy(Dropdown.prototype, 'removeEvents');
  isOpen = true;
  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  t.equal(componentWillUnmount.callCount, 0);
  t.equal(removeEvents.callCount, 0);

  wrapper.unmount();

  t.equal(componentWillUnmount.callCount, 1);
  t.equal(removeEvents.callCount, 1);
  componentWillUnmount.restore();
  removeEvents.restore();
  t.end();
});

test('Dropdown::handleDocumentClick should call toggle on document click', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  mount(<Dropdown isOpen={isOpen} toggle={toggleSpy}>
    <DropdownToggle>Toggle</DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Test</DropdownItem>
    </DropdownMenu>
  </Dropdown>);

  t.equal(handleDocumentClick.callCount, 0);
  t.equal(toggleSpy.callCount, 0);

  document.body.click();

  t.equal(handleDocumentClick.callCount, 1);
  t.equal(toggleSpy.callCount, 1);
  t.end();
});

test('Dropdown::handleDocumentClick:: should call toggle on container click', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown id="test" isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(handleDocumentClick.callCount, 0);
  t.equal(toggleSpy.callCount, 0);

  document.getElementById('test').click();

  t.equal(handleDocumentClick.callCount, 1);
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::handleDocumentClick:: should not call toggle on inner container click', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(handleDocumentClick.callCount, 0);
  t.equal(toggleSpy.callCount, 0);

  document.getElementById('divider').click();

  t.equal(handleDocumentClick.callCount, 1);
  t.equal(toggleSpy.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::handleDocumentClick:: should not call toggle when right-clicked', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.instance().handleDocumentClick({ type: 'click', which: 3 });
  t.equal(toggleSpy.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::handleDocumentClick:: should call toggle when key is tab', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  const wrapper = mount(<Dropdown isOpen={isOpen} toggle={toggleSpy}>
    <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.instance().handleDocumentClick({ type: 'keyup', which: keyCodes.tab });
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should call toggle on ESC keydown when it isOpen is true', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.esc });
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should call toggle on ESC keydown when it isOpen is true', (t) => {
  isOpen = false;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.esc });
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should call toggle on down arrow keydown when it isOpen is false', (t) => {
  isOpen = false;
  const toggleSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.down });
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should call toggle on up arrow keydown when it isOpen is false', (t) => {
  isOpen = false;
  const toggleSpy = sinon.spy();

  const wrapper = mount(<Dropdown isOpen={isOpen} toggle={toggleSpy}>
    <DropdownToggle>Toggle</DropdownToggle>
    <DropdownMenu right>
      <DropdownItem>Test</DropdownItem>
      <DropdownItem id="divider" divider />
    </DropdownMenu>
  </Dropdown>, { attachTo: element });

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.up });
  t.equal(toggleSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should focus the first menu item on up arrow keydown when it isOpen is true', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focusSpy = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onFocus={focusSpy}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.up });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focusSpy.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should focus the first menu item on down arrow keydown when it isOpen is true', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onFocus={focus1}>Test</DropdownItem>
        <DropdownItem onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.simulate('keydown', { which: keyCodes.down });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 1);
  t.equal(focus2.callCount, 0);
  t.equal(focus3.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should focus the next menu item on down arrow keydown when it isOpen is true and anther item is focused', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
        <DropdownItem onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
   );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('button').simulate('keydown', { which: keyCodes.down });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 0);
  t.equal(focus2.callCount, 1);
  t.equal(focus3.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should skip non-menu items focus the next menu item on down arrow keydown when it isOpen is true and anther item is focused', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
        <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#second').find('button').simulate('keydown', { which: keyCodes.down });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 0);
  t.equal(focus2.callCount, 0);
  t.equal(focus3.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should focus the previous menu item on up arrow keydown when it isOpen is true and anther item is focused', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
        <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#second').find('button').simulate('keydown', { which: keyCodes.up });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 1);
  t.equal(focus2.callCount, 0);
  t.equal(focus3.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not wrap focus with down arrow keydown', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
        <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#third').find('button').simulate('keydown', { which: keyCodes.down });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 0);
  t.equal(focus2.callCount, 0);
  t.equal(focus3.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not wrap focus with up arrow keydown', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const focus1 = sinon.spy();
  const focus2 = sinon.spy();
  const focus3 = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onFocus={focus1}>Test</DropdownItem>
        <DropdownItem id="second" onFocus={focus2}>Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third" onFocus={focus3}>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('button').simulate('keydown', { which: keyCodes.up });
  t.equal(toggleSpy.callCount, 0);
  t.equal(focus1.callCount, 1);
  t.equal(focus2.callCount, 0);
  t.equal(focus3.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown:: should trigger a click on links when an item is focused and space[bar] it pressed', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem href="#" id="first" onClick={click}>Test</DropdownItem>
        <DropdownItem id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('a').simulate('keydown', { which: keyCodes.space });

  t.equal(click.callCount, 1);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not trigger a click on buttons when an item is focused and space[bar] it pressed (browser does this)', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem id="first" onClick={click}>Test</DropdownItem>
        <DropdownItem id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('button').simulate('keydown', { which: keyCodes.space });
  t.equal(toggleSpy.callCount, 0);
  t.equal(click.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not trigger anything when within an input', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();
  const focus = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}><input id="input" /></DropdownItem>
        <DropdownItem id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#input').simulate('keydown', { which: keyCodes.up });
  wrapper.find('#input').simulate('keydown', { which: keyCodes.down });
  wrapper.find('#input').simulate('keydown', { which: keyCodes.space });
  t.equal(toggleSpy.callCount, 0);
  t.equal(click.callCount, 0);
  t.equal(focus.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not trigger anything when within a textarea', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();
  const focus = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}><textarea id="input" /></DropdownItem>
        <DropdownItem id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#input').simulate('keydown', { which: keyCodes.up });
  wrapper.find('#input').simulate('keydown', { which: keyCodes.down });
  wrapper.find('#input').simulate('keydown', { which: keyCodes.space });
  t.equal(toggleSpy.callCount, 0);
  t.equal(click.callCount, 0);
  t.equal(focus.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown:: should not trigger anything when disabled', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();
  const focus = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy} disabled>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag="div" id="first" onClick={click} onFocus={focus}>Test</DropdownItem>
        <DropdownItem id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.up });
  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.down });
  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.space });

  t.equal(toggleSpy.callCount, 0);
  t.equal(click.callCount, 0);
  t.equal(focus.callCount, 0);
  wrapper.detach();
  t.end();
});

test('Dropdown::keyboard events:: should not focus anything when all items disabled', (t) => {
  isOpen = true;
  const toggleSpy = sinon.spy();
  const click = sinon.spy();
  const focus = sinon.spy();

  const wrapper = mount(
    <Dropdown isOpen={isOpen} toggle={toggleSpy}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu right>
        <DropdownItem disabled tag="div" id="first" onClick={click} onFocus={focus}>Test</DropdownItem>
        <DropdownItem disabled id="second">Test</DropdownItem>
        <DropdownItem id="divider" divider />
        <DropdownItem disabled id="third">Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>,
    { attachTo: element }
  );

  t.equal(toggleSpy.callCount, 0);

  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.up });
  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.down });
  wrapper.find('#first').find('div').simulate('keydown', { which: keyCodes.space });
  t.equal(toggleSpy.callCount, 0);
  t.equal(click.callCount, 0);
  t.equal(focus.callCount, 0);

  wrapper.detach();
  t.end();
});

test('Dropdown:: should render different size classes', (t) => {
  const small = shallow(
    <Dropdown group isOpen={isOpen} size="sm" toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  const large = shallow(
    <Dropdown group isOpen={isOpen} size="lg" toggle={toggle}>
      <DropdownToggle>Toggle</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Test</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );

  t.equal(small.find('.btn-group-sm').length, 1);
  t.equal(large.find('.btn-group-lg').length, 1);
  t.end();
});
