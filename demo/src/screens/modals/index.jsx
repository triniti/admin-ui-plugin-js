import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Table, Modal, ModalHeader, ModalBody, ModalFooter, Screen } from '../../../../src/components';

class UiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      singleModal: false,
      smallModal: false,
      collapseCode1: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleSingle = this.toggleSingle.bind(this);
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
        <Card key="props">
        <CardHeader>Modal Properties</CardHeader>
        <CardBody>
          <Table hover responsive>
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
              <th scope="row">alert</th>
              <td>node</td>
              <td></td>
              <td>Adds class "badge-alert" which absolutley aligns badge to the upper right corner of the containing object, usually a button set to radius, circle.</td>
            </tr>
            <tr>
              <th scope="row">children</th>
              <td>node</td>
              <td></td>
              <td>Content shown inside the badge.  Usually numbers or highlight text like "new".</td>
            </tr>
            <tr>
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">color</th>
              <td>string</td>
              <td>'default'</td>
              <td>Adds class "badge-$color". Set background color of badge. Text is white for all badges.</td>
            </tr>
            <tr>
              <th scope="row">pill</th>
              <td>bool</td>
              <td></td>
              <td>Adds class "badge-pill", producing a pill shaped alert with round ends.  The default style is rounded corners.</td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>bool</td>
              <td>'span'</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">transition</th>
              <td>bool</td>
              <td>
                ...Fade.defaultProps,
                unmountOnExit: true,
              </td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,
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
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
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
              <Modal isOpen={this.state.modal} toggle={this.toggle} size="xl" maxWidth="1400px">
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
                    <ModalBody className="text-center modal-wrapper"><h4>Nested Modal title</h4>Do you want to clear everything?</ModalBody>
                    <ModalFooter buttons>
                      <Button outline color="primary" size="lg" onClick={this.toggleAll}>Clear</Button>
                      <Button outline color="primary" size="lg" onClick={this.toggleNested}>Cancel</Button>
                    </ModalFooter>
                  </Modal>
                </ModalBody>
                <ModalFooter>
                  <Button color="link-bg" onClick={this.toggleNested}>Not Done</Button>
                  <Button color="primary" onClick={this.toggle}>All Done</Button>
                </ModalFooter>
              </Modal>

              <Button outline color="secondary" onClick={this.toggleSmall}>Small Modal</Button>
              <Modal isOpen={this.state.smallModal} toggle={this.toggleSmall} size="sm">
                <ModalBody className="text-center modal-wrapper"><h4>Small Modal Action</h4>Do you want to clear everything?</ModalBody>
                <ModalFooter buttons>
                  <Button color="link-bg" size="lg" onClick={this.toggleSmall}>Clear</Button>
                  <Button color="link-bg" size="lg" onClick={this.toggleSmall}>Cancel</Button>
                </ModalFooter>
              </Modal>

              <Button outline onClick={this.toggleSingle}>Single XL Footer Button</Button>
              <Modal isOpen={this.state.singleModal} toggle={this.toggleSingle} size="sm">
                <ModalBody className="text-center modal-wrapper"><h4>Single Modal Button</h4>Do you want to clear everything?</ModalBody>
                <ModalFooter buttons>
                  <Button color="secondary" size="xl" onClick={this.toggleSingle}>Login</Button>
                </ModalFooter>
              </Modal>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiModal;
