import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';

import Button from '../button';
import Icon from '../icon';
import ModalPortal from '../modal-portal';
import createLazyComponent from '../createLazyComponent';

export default class CreateModalButton extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    iconUrl: PropTypes.string,
    modal: PropTypes.objectOf(Promise).isRequired,
    onShow: PropTypes.func,
    onHide: PropTypes.func,
    text: PropTypes.string,
  };

  static defaultProps = {
    icon: '',
    iconUrl: '',
    onShow: undefined,
    onHide: undefined,
    text: 'Create',
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleHideModal = this.handleHideModal.bind(this);
  }

  handleShowModal() {
    const { onShow } = this.props;
    this.setState({
      showModal: true,
    });

    if (typeof onShow === 'function') {
      onShow();
    }
  }

  handleHideModal() {
    const { onHide } = this.props;
    this.setState({
      showModal: false,
    });

    if (typeof onHide === 'function') {
      onHide();
    }
  }

  render() {
    const { icon, iconUrl, modal: modalImport, text, onHide, onShow, ...attr } = this.props;
    const ModalComponent = createLazyComponent(modalImport);

    const modal = this.state.showModal ? (
      <ModalPortal key="modal-portal">
        <ModalComponent onHide={this.handleHideModal} />
      </ModalPortal>
    ) : null;

    return ([
      <Button {...attr} onClick={this.handleShowModal} key="button" action={kebabCase(`action-${text}`)}>
        {(iconUrl || icon) && <Icon imgSrc={icon} src={iconUrl} alt={text} />}
        {text}
      </Button>,
      modal,
    ]);
  }
}
