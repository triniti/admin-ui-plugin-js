import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Modal, ModalHeader, ModalBody, ModalFooter, Screen, Table } from '../../../../src/components';

class UiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      singleModal: false,
      smallModal: false,
      spinnerModal: false,
      collapseCode1: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleSingle = this.toggleSingle.bind(this);
    this.toggleSpinner = this.toggleSpinner.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
    });
  }

  toggleAll() {
    this.toggle();
    this.toggleNested();
  }

  toggleSmall() {
    this.setState({
      smallModal: !this.state.smallModal,
    });
  }

  toggleSingle() {
    this.setState({
      singleModal: !this.state.singleModal,
    });
  }

  toggleSpinner() {
    this.setState({
      spinnerModal: !this.state.spinnerModal,
    });
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="modals" />}
        sidenavHeader
        header="Modals"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="modals">
            <CardHeader>Modals
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
                <code>
                  {`
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from '@triniti/admin-ui-plugin/components';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="secondary" onClick={this.toggle}>Click Me</Button>
        <Modal centered isOpen={this.state.modal} toggle={this.toggle} size="lg">
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody className="pb-5">
            <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
            </p>
            <Button outline onClick={this.toggleNested}>Show Nested Modal</Button>
            <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} size="sm">
              <ModalBody className="text-center modal-wrapper"><h2>Nested Modal</h2><p className="text-body-light">Do you want to clear everything?</p></ModalBody>
              <ModalFooter buttons>
                <Button outline color="secondary" size="lg" onClick={this.toggleAll}>Clear</Button>
                <Button outline color="secondary" size="lg" onClick={this.toggleNested}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </ModalBody>
          <ModalFooter>
            <Button color="link-bg" onClick={this.toggleNested}>Not Done</Button>
            <Button color="secondary" onClick={this.toggle}>All Done</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;
                  `}
                </code>
              </pre>
              </CardBody>
            </Collapse>
            <CardBody indent>
              <Button color="secondary" onClick={this.toggle}>Click Me</Button>
              <Modal centered isOpen={this.state.modal} toggle={this.toggle} size="lg">
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody className="pb-5">
                  <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
                  </p>
                  <Button outline onClick={this.toggleNested}>Show Nested Modal</Button>
                  <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} size="sm">
                    <ModalBody className="text-center modal-wrapper"><h2>Nested Modal</h2><p className="text-body-light">Do you want to clear everything?</p></ModalBody>
                    <ModalFooter buttons>
                      <Button outline color="secondary" size="lg" onClick={this.toggleAll}>Clear</Button>
                      <Button outline color="secondary" size="lg" onClick={this.toggleNested}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button color="link-bg" onClick={this.toggleNested}>Not Done</Button>
                  <Button color="secondary" onClick={this.toggle}>All Done</Button>
                </ModalFooter>
              </Modal>

              <Button outline color="secondary" onClick={this.toggleSmall}>Small Modal</Button>
              <Modal centered isOpen={this.state.smallModal} toggle={this.toggleSmall} size="sm">
                <ModalBody className="text-center modal-wrapper"><h2>Modal Action</h2><p className="text-body-light">Do you want to clear everything?</p></ModalBody>
                <ModalFooter buttons>
                  <Button outline color="danger" size="lg" onClick={this.toggleSmall}>Clear</Button>
                  <Button outline color="secondary" size="lg" onClick={this.toggleSmall}>Cancel</Button>
                </ModalFooter>
              </Modal>

              <Button outline onClick={this.toggleSingle}>Sweet Alert Style Modal</Button>
              <Modal centered size="sd" isOpen={this.state.singleModal} toggle={this.toggleSingle}>
                <ModalBody className="text-center modal-wrapper">
                <Icon imgSrc="locked" alert size="lg" color="danger" border className="icon-modal" />
                <h2>Hey There!</h2><p className="text-modal">This modal mimics Sweet Alert!</p>
                <div className="modal-actions">
                  <Button color="danger" onClick={this.toggleSingle} className="btn-modal">Delete This</Button>
                  <Button color="secondary" onClick={this.toggleSingle} className="btn-modal">Cancel Deletion</Button>
                </div>
                </ModalBody>
              </Modal>

              <Button outline onClick={this.toggleSpinner}>Loading Spinner Modal</Button>
              <Modal
                centered
                size="xs"
                backdropClassName="modal-loading-bg"
                className="modal-loading"
                contentClassName="triniti-spinner"
                isOpen={this.state.spinnerModal}
                toggle={this.toggleSpinner}>
                <ModalBody className="text-center modal-wrapper">

                </ModalBody>
              </Modal>
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Modal Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">autoFocus</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">backdrop</th>
                    <td>oneOfType</td>
                    <td>true</td>
                    <td>Controls backdrop<br/>PropTypes.bool,<br/>PropTypes.oneOf(['static']),<br/>
                      see <a href="http://v4-alpha.getbootstrap.com/components/modal/#options" target="blank">
                      http://v4-alpha.getbootstrap.com/components/modal/#options
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">backdropClassName</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">backdropTransition</th>
                    <td>string</td>
                    <td>150ms</td>
                    <td>Controls backdrop transition<br/>Timeout is 150ms by default to match bootstrap<br/>see Fade for more details</td>
                  </tr>
                  <tr>
                    <th scope="row">centered</th>
                    <td>bool</td>
                    <td></td>
                    <td>If modal should be centered vertically in viewport</td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">fade</th>
                    <td>bool</td>
                    <td></td>
                    <td>Boolean to control whether the fade transition occurs (default: true)</td>
                  </tr>
                  <tr>
                    <th scope="row">isOpen</th>
                    <td>bool</td>
                    <td></td>
                    <td>Boolean to control the state of the popover</td>
                  </tr>
                  <tr>
                    <th scope="row">keyboard</th>
                    <td>bool</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">cssModule</th>
                    <td>object</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">labelledBy</th>
                    <td>string</td>
                    <td></td>
                    <td>Used to reference the ID of the title element in the modal</td>
                  </tr>
                  <tr>
                    <th scope="row">maxWidth</th>
                    <td>string</td>
                    <td></td>
                    <td>Allows you to set a custom max-width for the modal</td>
                  </tr>
                  <tr>
                    <th scope="row">modalClassName</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">modalTransition</th>
                    <td>shape(Fade.propTypes)</td>
                    <td>300ms</td>
                    <td>modalTransition - controls modal transition<br/>timeout is 300ms by default to match bootstrap<br/>see Fade for more details</td>
                  </tr>
                  <tr>
                    <th scope="row">onClosed</th>
                    <td>func</td>
                    <td></td>
                    <td>Called when done transitioning out</td>
                  </tr>
                  <tr>
                    <th scope="row">onEnter</th>
                    <td>func</td>
                    <td></td>
                    <td>Allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons<br/>external: PropTypes.node,<br/>called on componentDidMount</td>
                  </tr>
                  <tr>
                    <th scope="row">onExit</th>
                    <td>func</td>
                    <td></td>
                    <td>Called on componentWillUnmount</td>
                  </tr>
                  <tr>
                    <th scope="row">onOpened</th>
                    <td>func</td>
                    <td></td>
                    <td>Called when done transitioning in</td>
                  </tr>
                  <tr>
                    <th scope="row">role</th>
                    <td>string</td>
                    <td>dialog</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">size</th>
                    <td>string</td>
                    <td></td>
                    <td>size="xs" 240px, "sm" 300px, "sd" 450px, "md" 560px, "lg" 800px, "xl" 1000px</td>
                  </tr>
                  <tr>
                    <th scope="row">toggle</th>
                    <td>func</td>
                    <td></td>
                    <td>Callback for toggling isOpen in the controlling component</td>
                  </tr>
                  <tr>
                    <th scope="row">wrapClassName</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">zIndex</th>
                    <td>oneOfType</td>
                    <td>1050, set by bootstrap</td>
                    <td>PropTypes.number,<br/>PropTypes.string,
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>ModalHeader Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">children</th>
                    <td>node</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">cssModule</th>
                    <td>object</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">closeAriaLabel</th>
                    <td>string</td>
                    <td>'Close'</td>
                    <td>Label added to close button.</td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>h4</td>
                    <td>Tag wrapping header text.</td>
                  </tr>
                  <tr>
                    <th scope="row">toggle</th>
                    <td>func</td>
                    <td></td>
                    <td>Toggles appearance of close button in header.</td>
                  </tr>
                  <tr>
                    <th scope="row">wrapTag</th>
                    <td>oneOfType</td>
                    <td>'div'</td>
                    <td>Wrapping tag containing class modal-header.</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>ModalBody Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">cssModule</th>
                    <td>object</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>div</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props4">
            <CardHeader>ModalFooter Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">buttons</th>
                    <td>bool</td>
                    <td></td>
                    <td>Adds class .modal-footer-buttons which makes buttons fill footer.</td>
                  </tr>
                  <tr>
                    <th scope="row">className</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">cssModule</th>
                    <td>object</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">tag</th>
                    <td>oneOfType</td>
                    <td>div</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

        ]}
      />
    );
  }
}

export default UiModal;
