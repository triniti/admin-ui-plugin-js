import React from 'react';
import tape from 'tape';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import { Modal, ModalBody } from '../../../src/components';

let isOpen;
let toggle;
let clock;

let isOpenNested;
let toggleNested;

const setup = () => {
  isOpen = false;
  toggle = () => { isOpen = !isOpen; };

  isOpenNested = false;
  toggleNested = () => { isOpenNested = !isOpenNested; };

  clock = sinon.useFakeTimers();
};

const teardown = () => {
  clock.tick(300);
  clock.restore();
};

const test = (description, fn) => {
  tape(description, (t) => {
    setup();
    fn(t);
    teardown();
  });
};

test('Modal:: should render modal portal into DOM', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.notEqual(wrapper.childAt(0).children().length, 0);
  wrapper.unmount();

  t.end();
});

test('Modal:: should render with the class "modal-dialog"', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  wrapper.unmount();

  t.end();
});

test('Modal:: should render external content when present', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} external={<button className="cool-close-button">&times;</button>}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('cool-close-button').length, 1);
  t.equal(document.getElementsByClassName('cool-close-button')[0].nextElementSibling.className.split('Modal::  ').indexOf('modal-dialog') > -1, true);
  wrapper.unmount();

  t.end();
});

test('Modal:: should render with the backdrop with the class "modal-backdrop" by default', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 1);
  wrapper.unmount();

  t.end();
});

test('Modal:: should render with the backdrop with the class "modal-backdrop" when backdrop is "static"', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should not render with the backdrop with the class "modal-backdrop" when backdrop is "false"', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} backdrop={false}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 0);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal-dialog" and have custom class name if provided', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} className="my-custom-modal">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('my-custom-modal').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal-dialog" w/o centered class if not provided', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('modal-dialog-centered').length, 0);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal-dialog" and centered class if provided', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} centered>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('modal-dialog-centered').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with additional props if provided', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} style={{ maxWidth: '95%' }}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('modal-dialog')[0].style.maxWidth, '95%');
  wrapper.unmount();

  t.end();
});

test('Modal:: should render without fade transition if provided with fade={false}', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} fade={false} modalClassName="fadeless-modal">
      Howdy!
    </Modal>
  ));

  // Modal should appear instantaneously
  clock.tick(1);

  const matchedModals = document.getElementsByClassName('fadeless-modal');
  const matchedModal = matchedModals[0];

  t.equal(matchedModals.length, 1);
  // Modal should not have the 'fade' class
  t.true(matchedModal.className.split('Modal::  ').indexOf('fade') < 0);

  wrapper.unmount();
  t.end();
});

test('Modal:: should render when expected when passed modalTransition and backdropTransition props', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal
      isOpen={isOpen}
      toggle={toggle}
      modalTransition={{ timeout: 2 }}
      backdropTransition={{ timeout: 10 }}
      modalClassName="custom-timeout-modal"
    >
      Hello, world!
    </Modal>
  ));

  clock.tick(20);

  const matchedModals = document.getElementsByClassName('custom-timeout-modal');

  t.equal(matchedModals.length, 1);

  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal" and have custom class name if provided with modalClassName', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} modalClassName="my-custom-modal">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.querySelectorAll('.modal.my-custom-modal').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with custom class name if provided with wrapClassName', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} wrapClassName="my-custom-modal">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('my-custom-modal').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal-content" and have custom class name if provided with contentClassName', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} contentClassName="my-custom-modal">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.querySelectorAll('.modal-content.my-custom-modal').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with class "modal-backdrop" and have custom class name if provided with backdropClassName', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} backdropClassName="my-custom-modal">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.querySelectorAll('.modal-backdrop.my-custom-modal').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render with the class "modal-${size}" when size is passed', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} size="crazy">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 1);
  t.equal(document.getElementsByClassName('modal-crazy').length, 1);
  wrapper.unmount();
  t.end();
});


test('Modal:: should render modal when isOpen is true', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal').length, 1);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 1);
  wrapper.unmount();
  t.end();
});

test('Modal:: should render modal with default role of "dialog"', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal')[0].getAttribute('role'), 'dialog');
  wrapper.unmount();
  t.end();
});

test('Modal:: should render modal with provided role', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} role="alert">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal')[0].getAttribute('role'), 'alert');
  wrapper.unmount();

  t.end();
});

test('Modal:: should render modal with aria-labelledby provided labelledBy', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} labelledBy="myModalTitle">
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal')[0].getAttribute('aria-labelledby'), 'myModalTitle');
  wrapper.unmount();

  t.end();
});

test('Modal:: should not render modal when isOpen is false', (t) => {
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.equal(wrapper.childAt(0).children().length, 0);
  t.equal(document.getElementsByClassName('modal').length, 0);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 0);
  wrapper.unmount();

  t.end();
});

test('Modal:: should toggle modal', (t) => {
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.false(isOpen);
  t.equal(wrapper.childAt(0).children().length, 0);
  t.equal(document.getElementsByClassName('modal').length, 0);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 0);

  toggle();
  wrapper.setProps({ isOpen });

  clock.tick(300);
  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);
  t.equal(document.getElementsByClassName('modal-backdrop').length, 1);
  wrapper.unmount();

  t.end();
});

test('Modal:: should call onClosed & onOpened', (t) => {
  const onOpened = sinon.spy(Modal.prototype, 'onOpened');
  const onClosed = sinon.spy(Modal.prototype, 'onClosed');
  const handleOpen = sinon.spy();
  const handleClose = sinon.spy();
  const wrapper = mount((
    <Modal isOpen={isOpen} onOpened={handleOpen} onClosed={handleClose} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.false(isOpen);
  t.true(handleOpen.notCalled);
  t.true(onOpened.notCalled);
  t.true(handleClose.notCalled);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.true(isOpen);
  t.true(handleOpen.called);
  t.true(onOpened.called);
  t.true(handleClose.notCalled);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.false(isOpen);
  t.true(handleClose.called);
  t.true(onClosed.called);

  wrapper.unmount();
  t.end();
});

test('Modal:: should call onClosed & onOpened when fade={false}', (t) => {
  const onOpened = sinon.spy();
  const onClosed = sinon.spy();
  const wrapper = mount(
    <Modal isOpen={isOpen} onOpened={onOpened} onClosed={onClosed} toggle={toggle} fade={false}>
      Yo!
    </Modal>,
  );

  clock.tick(1);
  t.false(isOpen);
  t.true(onOpened.notCalled);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(1);

  t.true(isOpen);
  t.true(onOpened.called);
  t.true(onClosed.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(1);

  t.false(isOpen);
  t.true(onClosed.called);

  wrapper.unmount();
  t.end();
});

test('Modal:: should not call init when isOpen does not change', (t) => {
  const init = sinon.spy(Modal.prototype, 'init');
  const componentDidUpdate = sinon.spy(Modal.prototype, 'componentDidUpdate');
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  clock.tick(300);
  t.false(isOpen);
  t.true(init.notCalled);
  t.true(componentDidUpdate.notCalled);

  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.false(isOpen);
  t.true(init.notCalled);
  t.true(componentDidUpdate.called);

  wrapper.unmount();
  t.end();
});

test('Modal:: should close modal when escape key pressed', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));
  const instance = wrapper.instance();

  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);

  instance.handleEscape({ keyCode: 13 });
  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);

  instance.handleEscape({ keyCode: 27 });
  clock.tick(300);

  t.false(isOpen);

  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.equal(document.getElementsByClassName('modal').length, 0);

  wrapper.unmount();
  t.end();
});

test('Modal:: should not close modal when escape key pressed when keyboard is false', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} keyboard={false}>
      Yo!
    </Modal>
  ));
  const instance = wrapper.instance();

  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);

  instance.handleEscape({ keyCode: 13 });
  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);

  instance.handleEscape({ keyCode: 27 });
  clock.tick(300);

  t.true(isOpen);

  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.equal(document.getElementsByClassName('modal').length, 1);

  wrapper.unmount();
  t.end();
});

test('Modal:: should close modal when clicking backdrop', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      <button id="clicker">Does Nothing</button>
    </Modal>
  ));

  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);
  //
  document.getElementById('clicker').click();
  clock.tick(300);

  t.true(isOpen);

  document.getElementsByClassName('modal')[0].click();
  clock.tick(300);

  t.false(isOpen);

  wrapper.unmount();
  t.end();
});

test('Modal:: should not close modal when clicking backdrop and backdrop is "static"', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle} backdrop="static">
      <button id="clicker">Does Nothing</button>
    </Modal>
  ));

  clock.tick(300);

  t.true(isOpen);
  t.equal(document.getElementsByClassName('modal').length, 1);

  document.getElementById('clicker').click();
  clock.tick(300);

  t.true(isOpen);

  document.getElementsByClassName('modal-backdrop')[0].click();
  clock.tick(300);

  t.true(isOpen);

  wrapper.unmount();
  t.end();
});

test('Modal:: should destroy this._element', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      <button id="clicker">Does Nothing</button>
    </Modal>
  ));
  const instance = wrapper.instance();

  clock.tick(300);
  t.ok(instance._element);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.false(isOpen);
  t.equal(instance._element, null);

  wrapper.unmount();
  t.end();
});

test('Modal:: should destroy this._element on unmount', (t) => {
  isOpen = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      <button id="clicker">Does Nothing</button>
    </Modal>
  ));
  const instance = wrapper.instance();

  clock.tick(300);
  t.ok(instance._element, 'instance._element should be truthy');

  wrapper.unmount();
  clock.tick(300);

  t.equal(instance._element, null);

  t.end();
});

test('Modal:: should render nested modals', (t) => {
  isOpen = true;
  isOpenNested = true;
  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalBody>
        <Modal isOpen={isOpenNested} toggle={toggleNested}>
          Yo!
        </Modal>
      </ModalBody>
    </Modal>
  ));

  clock.tick(300);
  t.equal(document.getElementsByClassName('modal-dialog').length, 2);
  t.equal(document.body.className, 'modal-open modal-open');

  wrapper.unmount();
  t.equal(document.getElementsByClassName('modal-dialog').length, 0);
  t.equal(document.body.className, '');
  t.end();
});

test('Modal:: should remove exactly modal-open class from body', (t) => {
  // set a body class which includes modal-open
  document.body.className = 'my-modal-opened';

  const wrapper = mount((
    <Modal isOpen={isOpen} toggle={toggle}>
      Yo!
    </Modal>
  ));

  // assert that the modal is closed and the body class is what was set initially
  clock.tick(300);
  t.false(isOpen);
  t.equal(document.body.className, 'my-modal-opened');

  toggle();
  wrapper.setProps({ isOpen });

  // assert that the modal is open and the body class is what was set initially + modal-open
  clock.tick(300);
  t.true(isOpen);
  t.equal(document.body.className, 'my-modal-opened modal-open');

  // append another body class which includes modal-open
  // using this to test if replace will leave a space when removing modal-open
  document.body.className += ' modal-opened';
  t.equal(document.body.className, 'my-modal-opened modal-open modal-opened');

  toggle();
  wrapper.setProps({ isOpen });

  // assert that the modal is closed and the body class is what was set initially
  clock.tick(301);
  t.false(isOpen);
  t.equal(document.body.className, 'my-modal-opened modal-opened');

  wrapper.unmount();
  t.end();
});

test('Modal:: should call onEnter & onExit props if provided', (t) => {
  const onEnter = sinon.spy();
  const onExit = sinon.spy();
  const wrapper = mount((
    <Modal isOpen={isOpen} onEnter={onEnter} onExit={onExit} toggle={toggle}>
      Yo!
    </Modal>
  ));

  t.false(isOpen);
  t.equal(onEnter.callCount, 1);
  t.true(onExit.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(300);

  t.true(isOpen);
  t.equal(onEnter.callCount, 1);
  t.true(onExit.notCalled);

  toggle();
  wrapper.setProps({ isOpen });
  clock.tick(300);

  wrapper.unmount();
  t.equal(onEnter.callCount, 1);
  t.equal(onExit.callCount, 1);
  t.true(onExit.calledAfter(onEnter));

  t.end();
});

test('Modal:: should update element z index when prop changes', (t) => {
  const wrapper = shallow((
    <Modal isOpen zIndex={0}>
      Yo!
    </Modal>
  ));
  t.equal(wrapper.instance()._element.style.zIndex, '0');
  wrapper.setProps({ zIndex: 1 });
  t.equal(wrapper.instance()._element.style.zIndex, '1');

  t.end();
});
