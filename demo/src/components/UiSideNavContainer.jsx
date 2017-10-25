import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { Button, ListGroup, ListGroupItem, ScrollableContainer, SidenavHeader, Tooltip } from '../../../src/components';

import iconArrowLeft from '../assets/img/svg/icons/angle-left.svg';
import UiComponents from '../config.module';

class UiSideNavContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.toggleSideWrapper = this.toggleSideWrapper.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  handleClick(e) {
    const to = e.target.getAttribute('to');
    this.props.history.push(to);
  }

  toggleSideWrapper() {
    const sideNavWrapper = document.getElementById('sidenav');
    if (sideNavWrapper.classList.contains('offcanvas-left')) {
      sideNavWrapper.classList.remove('offcanvas-left');
    } else {
      sideNavWrapper.classList.add('offcanvas-left');
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  generateElementListItem(names) {
    const isActive = this.props.match.params.componentId;

    return names.map((componentName) => {
      const displayName = componentName.split('-').map(startCase).join(' ');
      return (
        <ListGroupItem
          active={isActive === componentName}
          key={componentName}
          to={componentName}
          onClick={this.handleClick}
        >
          {displayName}
        </ListGroupItem>
      );
    });
  }

  render() {
    const componentIds = Object.keys(UiComponents);
    const uiElementsList = this.generateElementListItem(componentIds);
    return (
      <div className="sidenav-container" id="sidenav">
        <SidenavHeader title="Filter Results">
          <Button outline color="hover" className={'btn-header-close-sidenav'} onClick={this.toggleSideWrapper} id={'tooltip-sidenav-btn-header'}>
            <img src={iconArrowLeft} alt="<" />
          </Button>
        </SidenavHeader>
        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target={'tooltip-sidenav-btn-header'} toggle={this.toggle} className={'tooltip-sidepanel'}>
          Toggle Side Panel
        </Tooltip>

        <ScrollableContainer>
          <ListGroup className={'list-group-border list-group-nav bg-lightest'}>
            { uiElementsList }
          </ListGroup>
        </ScrollableContainer>

      </div>
    );
  }
}

UiSideNavContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default UiSideNavContainer;
