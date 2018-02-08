import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Screen } from '../../../../src/components';

class UiModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      singleModal: false,
      smallModal: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleSingle = this.toggleSingle.bind(this);
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
        body={
          <Card>
            <CardBody>
              <Button color="secondary" onClick={this.toggle}>Click Me</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
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
          </Card>
      }
      />
    );
  }
}

export default UiModal;
