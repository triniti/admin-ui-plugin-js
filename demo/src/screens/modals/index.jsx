import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import classnames from 'classnames';
import Masonry from 'react-masonry-css';
import { BackgroundImage, Button, Card, CardBody, CardColumns, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, Col, Collapse, Icon, Input, InputGroup, InputGroupAddon, Media, Modal, ModalHeader, ModalBody, ModalFooter, Nav, NavItem, Row, Screen, ScrollableContainer, Stepper, Table } from '../../../../src/components';

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
      modalBlock: false,
      modalMasonry: false,
      modalSquare: false,
      modalSquare2: false,
      activeTab: 'tab1',
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
    this.toggleSmall = this.toggleSmall.bind(this);
    this.toggleSingle = this.toggleSingle.bind(this);
    this.toggleSpinner = this.toggleSpinner.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleBlock = this.toggleBlock.bind(this);
    this.toggleMasonry = this.toggleMasonry.bind(this);
    this.toggleSquare = this.toggleSquare.bind(this);
    this.toggleSquare2 = this.toggleSquare2.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
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

  toggleBlock() {
    this.setState({
      modalBlock: !this.state.modalBlock,
    });
  }

  toggleMasonry() {
    this.setState({
      modalMasonry: !this.state.modalMasonry,
    });
  }

  toggleSquare() {
    this.setState({
      modalSquare: !this.state.modalSquare,
    });
  }

  toggleSquare2() {
    this.setState({
      modalSquare2: !this.state.modalSquare2,
    });
  }

  toggleNav(tab1) {
    if (this.state.activeTab !== tab1) {
      this.setState({
        activeTab: tab1,
      });
    }
  }

  render() {
    const breakpointColumnsObj = {
    default: 6,
    1400: 5,
    1100: 4,
    920: 3,
    700: 2,
    500: 1,
  };

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
                <ModalHeader toggle={this.toggle}>Add Image Block <Button color="primary" className="ml-3" size="sm">Upload</Button></ModalHeader>
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
              <Modal centered isOpen={this.state.smallModal} toggle={this.toggleSmall} size="sm" modalClassName="animate-center" >
                <ModalBody className="text-center modal-wrapper"><h2>Modal Action</h2><p className="text-body-light">Do you want to clear everything?</p></ModalBody>
                <ModalFooter buttons>
                  <Button outline color="danger" size="lg" onClick={this.toggleSmall}>Clear</Button>
                  <Button outline color="secondary" size="lg" onClick={this.toggleSmall}>Cancel</Button>
                </ModalFooter>
              </Modal>

              <Button outline onClick={this.toggleSingle}>Sweet Alert Style Modal</Button>
              <Modal centered size="sd" isOpen={this.state.singleModal} toggle={this.toggleSingle} modalClassName="animate-center">
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
                modalClassName="animate-center"
                isOpen={this.state.spinnerModal}
                toggle={this.toggleSpinner}>
              </Modal>

              <Button color="primary" onClick={this.toggleBlock}>Block Editor - CSS Columns</Button>
              <Modal centered isOpen={this.state.modalBlock} toggle={this.toggleBlock} size="xxl">
                <ModalHeader toggle={this.toggleBlock}>
                  <span className="nowrap">Update Image Block</span>
                  <div className="ml-auto d-none d-sm-block" style={{ width: '30%', minWidth: '306px'}}><Stepper className="p-0 bg-gray-100" steps={ [{title: 'Select Options'}, {title: 'Customize Options'}] } activeStep={ 0 } horizontal fullWidth /></div>
                </ModalHeader>
                <ModalBody className="p-0">
                <Nav underline>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab1' })}
                      onClick={() => { this.toggleNav('tab1'); }}
                    >
                      Linked
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab2' })}
                      onClick={() => { this.toggleNav('tab2'); }}
                    >
                      Search
                    </div>
                  </NavItem>
                </Nav>
                  <ScrollableContainer className="bg-gray-400" style={{height:'calc(98vh - 240px)'}}>
<CardColumns className="px-3 gutter-sm pt-3" style={{columns: '6 240px', columnGap: '0', columnFill: 'balance'}}>
  <Col className="d-inline-block">
    <Card className="image-preview image-preview-selected">
      <div className="px-2 py-1 bg-gray-500">Future Chrome - HTTPS.png</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/89/o/2018/04/24/895a5c64f0e144a0b7ec0a0213560298.png" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1lily-aldridge-at-gigi-hadid-birthday-gettyimages-950518133.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/b4/o/2018/04/24/b4cfc46fbff742479f76b60568b071b1.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">tristan-party.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/4b/o/2018/04/24/4b5870112dda40949e8021e17b6d1d8a.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">tristan.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/cf/o/2018/04/24/cffb71378a3f4439b11d5e21df2d8a07.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1bella-hadid-at-gigi-hadid-birthday-gettyimages-950475617.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/3e/o/2018/04/24/3e1b3d194cdd4c089cc07fb8b2d26261.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1hailey-baldwin-and-joan-smalls-at-gigi-hadid-birthday-gettyimages.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0a/o/2018/04/24/0a98c6ce345c4ffd9cc1b9fdb287a574.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1gigi-and-bella-hadid-at-gigi-birthday-party-gettyimages-950504491.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/93/o/2018/04/24/9332d0e59ada4edd88155ee1921cd820.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0424-josh-brolin-genes-docs-primary-2.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0c/o/2018/04/24/0c1e215a0003425fa55593bf025b40c5.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0411-kevin-spacey-serious-getty-7.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/dc/o/2018/04/26/dc900a0d4a8f43348424490ce0b490df.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0418-matt-mantei-getty-6.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/6d/o/2018/04/24/6dd845b4428247d2bf1bb330ed82464f.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">scott.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/96/o/2018/04/24/965ce61903cc42cb99999e0103f04b26.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">27577255_230320494383277_3216189493996421120_n.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/d0/o/2018/04/26/d0e70b8aff1544e1a7d5b3e46852dce3.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
  <Col className="d-inline-block">
    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">google_self_driving_car-11324210.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/ca/o/2018/04/26/ca39f232abd34d66ad6719938b638543.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>
  </Col>
</CardColumns>
                  </ScrollableContainer>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" className="mr-auto">Upload</Button>
                  <Button>Cancel</Button>
                  <Button>Next</Button>
                  <Button disabled>Update</Button>
                </ModalFooter>
              </Modal>


              <Button color="primary" onClick={this.toggleMasonry}>Block Editor - CSS Masonry</Button>
              <Modal centered isOpen={this.state.modalMasonry} toggle={this.toggleMasonry} size="xxl">
                <ModalHeader toggle={this.toggleMasonry}>
                  <span className="nowrap">Update Image Block</span>
                  <div className="ml-auto d-none d-sm-block" style={{ width: '30%', minWidth: '306px'}}><Stepper className="p-0 bg-gray-100" steps={ [{title: 'Select Options'}, {title: 'Customize Options'}] } activeStep={ 0 } horizontal fullWidth /></div>
                </ModalHeader>
                <ModalBody className="p-0">
                <Nav underline>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab1' })}
                      onClick={() => { this.toggleNav('tab1'); }}
                    >
                      Linked
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab2' })}
                      onClick={() => { this.toggleNav('tab2'); }}
                    >
                      Search
                    </div>
                  </NavItem>
                </Nav>
                  <ScrollableContainer className="bg-gray-400" style={{height:'calc(98vh - 240px)'}}>

<div className="p-3">
  <Masonry
  breakpointCols={6}
  breakpointCols={breakpointColumnsObj}
  className="tri-masonry-grid"
  columnClassName="tri-masonry-grid-column">


    <Card className="image-preview image-preview-selected">
      <div className="px-2 py-1 bg-gray-500">Future Chrome - HTTPS.png</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/89/o/2018/04/24/895a5c64f0e144a0b7ec0a0213560298.png" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1lily-aldridge-at-gigi-hadid-birthday-gettyimages-950518133.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/b4/o/2018/04/24/b4cfc46fbff742479f76b60568b071b1.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">tristan-party.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/4b/o/2018/04/24/4b5870112dda40949e8021e17b6d1d8a.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">tristan.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/cf/o/2018/04/24/cffb71378a3f4439b11d5e21df2d8a07.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1bella-hadid-at-gigi-hadid-birthday-gettyimages-950475617.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/3e/o/2018/04/24/3e1b3d194cdd4c089cc07fb8b2d26261.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1hailey-baldwin-and-joan-smalls-at-gigi-hadid-birthday-gettyimages.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0a/o/2018/04/24/0a98c6ce345c4ffd9cc1b9fdb287a574.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">1gigi-and-bella-hadid-at-gigi-birthday-party-gettyimages-950504491.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/93/o/2018/04/24/9332d0e59ada4edd88155ee1921cd820.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0424-josh-brolin-genes-docs-primary-2.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0c/o/2018/04/24/0c1e215a0003425fa55593bf025b40c5.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0411-kevin-spacey-serious-getty-7.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/dc/o/2018/04/26/dc900a0d4a8f43348424490ce0b490df.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">0418-matt-mantei-getty-6.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/6d/o/2018/04/24/6dd845b4428247d2bf1bb330ed82464f.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">scott.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/96/o/2018/04/24/965ce61903cc42cb99999e0103f04b26.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">27577255_230320494383277_3216189493996421120_n.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/d0/o/2018/04/26/d0e70b8aff1544e1a7d5b3e46852dce3.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

    <Card className="image-preview">
      <div className="px-2 py-1 bg-gray-500">google_self_driving_car-11324210.jpg</div>
      <img src="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/ca/o/2018/04/26/ca39f232abd34d66ad6719938b638543.jpg" alt="thumbnail" className="img-fluid"/>
    </Card>

  </Masonry>
</div>
                  </ScrollableContainer>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" className="mr-auto">Upload</Button>
                  <Button>Cancel</Button>
                  <Button>Next</Button>
                  <Button disabled>Update</Button>
                </ModalFooter>
              </Modal>


              <Button color="primary" onClick={this.toggleSquare}>Block Editor - Square</Button>
              <Modal centered isOpen={this.state.modalSquare} toggle={this.toggleSquare} size="xxl">
                <ModalHeader toggle={this.toggleSquare}>
                  <span className="nowrap">Update Image Block</span>
                  <div className="ml-auto d-none d-sm-block" style={{ width: '30%', minWidth: '306px'}}><Stepper className="p-0 bg-gray-100" steps={ [{title: 'Select Options'}, {title: 'Customize Options'}] } activeStep={ 0 } horizontal fullWidth /></div>
                </ModalHeader>
                <ModalBody className="p-0">
                <Nav underline>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab2' })}
                      onClick={() => { this.toggleNav('tab2'); }}
                    >
                      Linked
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab1' })}
                      onClick={() => { this.toggleNav('tab1'); }}
                    >
                      Search
                    </div>
                  </NavItem>
                </Nav>
                  <ScrollableContainer className="bg-gray-400" style={{height:'calc(98vh - 240px)'}}>
                    <div className="sticky-top px-4 py-2 shadow-depth-2 bg-white">
                      <InputGroup size="sm">
                        <Input
                          placeholder="Search Images..."
                          type="search"
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary">
                            <Icon imgSrc="search" className="mr-0" />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>

                    </div>
                    <Row className="m-0 px-3 gutter-sm pt-3">
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview media-preview-selected">
                          <div className="media-preview-title">Future Chrome - HTTPS.png</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/1.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">1lily-aldridge-at-gigi-hadid-birthday-gettyimages-950518133.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/2.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">tristan-party.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/3.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">tristan.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/4.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">1bella-hadid-at-gigi-hadid-birthday-gettyimages-950475617.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/5.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">1hailey-baldwin-and-joan-smalls-at-gigi-hadid-birthday-gettyimages.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/6.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">1gigi-and-bella-hadid-at-gigi-birthday-party-gettyimages-950504491.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/7.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">0424-josh-brolin-genes-docs-primary-2.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/8.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">0411-kevin-spacey-serious-getty-7.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/9.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">0418-matt-mantei-getty-6.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/10.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">scott.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/11.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">27577255_230320494383277_3216189493996421120_n.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/12.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                      <Col xs="12" sm="6" md="4" lg="3" xl="2" className="d-inline-block">
                        <Card className="media-preview">
                          <div className="media-preview-title">google_self_driving_car-11324210.jpg</div>
                          <img src="http://www.telepixdev.com/triniti/masonry/13.jpg" alt="thumbnail" className="img-fluid"/>
                        </Card>
                      </Col>
                    </Row>
                  </ScrollableContainer>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" className="mr-auto">Upload</Button>
                  <Button>Cancel</Button>
                  <Button>Next</Button>
                  <Button disabled>Update</Button>
                </ModalFooter>
              </Modal>


              <Button color="primary" onClick={this.toggleSquare2}>Block Editor - Square Final</Button>
              <Modal centered isOpen={this.state.modalSquare2} toggle={this.toggleSquare2} size="xxl">
                <ModalHeader toggle={this.toggleSquare2}>
                  <span className="nowrap">Update Image Block</span>
                  <div className="ml-auto d-none d-sm-block" style={{ width: '30%', minWidth: '306px'}}><Stepper className="p-0 bg-gray-100" steps={ [{title: 'Select Options'}, {title: 'Customize Options'}] } activeStep={ 0 } horizontal fullWidth /></div>
                </ModalHeader>
                <ModalBody className="p-0">
                <Nav underline>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab2' })}
                      onClick={() => { this.toggleNav('tab2'); }}
                    >
                      Linked
                    </div>
                  </NavItem>
                  <NavItem>
                    <div
                      className={classnames('nav-link tabindex', { active: this.state.activeTab === 'tab1' })}
                      onClick={() => { this.toggleNav('tab1'); }}
                    >
                      Search
                    </div>
                  </NavItem>
                </Nav>
                  <ScrollableContainer className="bg-gray-400" style={{height:'calc(98vh - 240px)'}}>
                    <div className="sticky-top px-4 py-2 shadow-depth-2 bg-white">
                      <InputGroup size="sm">
                        <Input
                          placeholder="Search Images..."
                          type="search"
                        />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary">
                            <Icon imgSrc="search" className="mr-0" />
                          </Button>
                        </InputGroupAddon>
                      </InputGroup>

                    </div>
                    <Row className="m-0 px-3 gutter-sm pt-3">
                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2 selected">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/89/o/2018/04/24/895a5c64f0e144a0b7ec0a0213560298.png"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">Future Chrome - HTTPS.png</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/b4/o/2018/04/24/b4cfc46fbff742479f76b60568b071b1.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">1lily-aldridge-at-gigi-hadid-birthday-gettyimages-950518133.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                            imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/4b/o/2018/04/24/4b5870112dda40949e8021e17b6d1d8a.jpg"
                            alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">tristan-party.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                            imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/cf/o/2018/04/24/cffb71378a3f4439b11d5e21df2d8a07.jpg"
                            alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">tristan.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/3e/o/2018/04/24/3e1b3d194cdd4c089cc07fb8b2d26261.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">1bella-hadid-at-gigi-hadid-birthday-gettyimages-950475617.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0a/o/2018/04/24/0a98c6ce345c4ffd9cc1b9fdb287a574.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">1hailey-baldwin-and-joan-smalls-at-gigi-hadid-birthday-gettyimages.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/93/o/2018/04/24/9332d0e59ada4edd88155ee1921cd820.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">1gigi-and-bella-hadid-at-gigi-birthday-party-gettyimages-950504491.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/0c/o/2018/04/24/0c1e215a0003425fa55593bf025b40c5.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">0424-josh-brolin-genes-docs-primary-2.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/dc/o/2018/04/26/dc900a0d4a8f43348424490ce0b490df.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">0411-kevin-spacey-serious-getty-7.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/6d/o/2018/04/24/6dd845b4428247d2bf1bb330ed82464f.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">0418-matt-mantei-getty-6.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/96/o/2018/04/24/965ce61903cc42cb99999e0103f04b26.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">scott.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/d0/o/2018/04/26/d0e70b8aff1544e1a7d5b3e46852dce3.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">27577255_230320494383277_3216189493996421120_n.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>

                      <Col xs="12" sm="6" md="4" lg="3" xl="2">
                        <Card shadow inverse hoverBorder className="p-2">
                          <Media aspectRatio="1by1">
                            <BackgroundImage
                              imgSrc="https://s3-us-west-2.amazonaws.com/wb-tmzlabs-tmz-dev-us-west-2-dam/image/ca/o/2018/04/26/ca39f232abd34d66ad6719938b638543.jpg"
                              alt="thumbnail" />
                            <CardImgOverlay>
                              <CardTitle className="h5 mb-0">google_self_driving_car-11324210.jpg</CardTitle>
                            </CardImgOverlay>
                          </Media>
                        </Card>
                      </Col>
                    </Row>
                  </ScrollableContainer>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" className="mr-auto">Upload</Button>
                  <Button>Cancel</Button>
                  <Button>Next</Button>
                  <Button disabled>Update</Button>
                </ModalFooter>
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
