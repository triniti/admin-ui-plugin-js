import React from 'react';
import PropTypes from 'prop-types';
import { Button, CardBody, CardTitle, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from '../../../../src/components';

const LinkCreationModal = ({ onToggle, history, isOpen }) => (
  <Modal size="lg" backdropClassName="modal-backdrop-create-article" toggle={onToggle} isOpen={isOpen}>
    <ModalHeader toggle={onToggle}>
       Create Demo
    </ModalHeader>
    <ModalBody>
      <Jumbotron theme="light">
        <CardBody>
          <CardTitle display="1" tag="h1">Hey Ho</CardTitle>
          <p className="lead">This is a creation modal from the app menu.</p>
        </CardBody>
      </Jumbotron>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" onClick={() => history.push('/welcome')}>Go to Welcome Page</Button>
      <Button onClick={onToggle}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

LinkCreationModal.propTypes = {
  onToggle: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  isOpen: PropTypes.bool,
};

LinkCreationModal.defaultProps = {
  isOpen: false,
};

export default LinkCreationModal;
