import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardBody, CardTitle, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from '../../../../src/components';
import './style.scss';

const LinkCreationModal2 = ({ onToggle, history, isOpen }) => (
  <Modal size="lg" backdropClassName="modal-backdrop-create-article" toggle={onToggle} isOpen={isOpen}>
    <ModalHeader toggle={onToggle}>
       Create Demo 2
    </ModalHeader>
    <ModalBody>
      <Jumbotron theme="light">
        <CardBody>
          <CardTitle display="1" tag="h1">Hey Ho Let's go</CardTitle>
          <p className="lead">This is <b>another</b> creation modal from the app menu.</p>
        </CardBody>
      </Jumbotron>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => history.push('/welcome')}>Go to Welcome Page</Button>
      <Button onClick={onToggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

LinkCreationModal2.propTypes = {
  onToggle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
};

LinkCreationModal2.defaultProps = {
  isOpen: false,
};

export default LinkCreationModal2;
