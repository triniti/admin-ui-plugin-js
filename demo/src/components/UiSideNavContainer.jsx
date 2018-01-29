import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import { ListGroup, ListGroupItem } from '../../../src/components';

import UiComponents from '../config.module';

class UiSideNavContainer extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  handleClick(e) {
    const to = e.target.getAttribute('to');
    this.props.history.push(to);
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
      <ListGroup nav className="pt-3 pb-4">
        { uiElementsList }
      </ListGroup>
    );
  }
}

UiSideNavContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object,
};

export default UiSideNavContainer;
