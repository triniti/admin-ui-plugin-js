import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import noop from 'lodash/noop';
import { Button, CardBody, CardTitle, Jumbotron, Modal, ModalBody, ModalFooter, ModalHeader } from '../../../../src/components';

const LinkCreationModal2 = ({ history, onHide, onToggle }) => (
  <Modal size="lg" backdropClassName="modal-backdrop-create" toggle={onToggle} isOpen>
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
      <Button onClick={onHide}>Cancel</Button>
    </ModalFooter>
  </Modal>
);

LinkCreationModal2.propTypes = {
  onHide: PropTypes.func,
  onToggle: PropTypes.func,
  history: PropTypes.object.isRequired,
};

LinkCreationModal2.defaultProps = {
  onHide: noop,
  onToggle: noop,
};

export default withRouter(LinkCreationModal2);
