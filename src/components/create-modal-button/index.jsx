import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import Button from '../button';
import Icon from '../icon';
import createLazyComponent from '../createLazyComponent';

export default class CreateModalButton extends React.Component {
  static propTypes = {
    icon: PropTypes.string,
    iconUrl: PropTypes.string,
    modal: PropTypes.objectOf(Promise).isRequired,
    onClick: PropTypes.func,
    text: PropTypes.string,
  };

  static defaultProps = {
    icon: '',
    iconUrl: '',
    onClick: noop,
    text: 'Create',
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    const { onClick } = this.props;
    this.setState({
      showModal: !this.state.showModal,
    }, onClick);
  }

  render() {
    const { icon, iconUrl, modal: modalImport, text, ...attr } = this.props;
    const ModalComponent = createLazyComponent(modalImport);
    const modal = this.state.showModal ? <ModalComponent onToggle={this.handleToggleModal} key="modal" /> : null;

    return [
      <Button {...attr} onClick={this.handleToggleModal} key="button">
        {(iconUrl || icon) && <Icon imgSrc={icon} src={iconUrl} alt={text} />}
        {text}
      </Button>,
      modal,
    ];
  }
}
