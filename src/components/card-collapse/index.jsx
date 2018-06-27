import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import Button from '../button';
import Card from '../card';
import CardBody from '../card-body';
import CardHeader from '../card-header';

class CardCollapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = { collapse: [] };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse(collapseId) {
    const { collapse } = this.state;
    const collapseIndex = collapse.indexOf(collapseId);
    if (collapseIndex > -1) {
      this.setState({
        collapse: [
          ...collapse.slice(0, collapseIndex),
          ...collapse.slice(collapseIndex + 1),
        ],
      });
    } else {
      this.setState({
        collapse: [
          ...collapse,
          collapseId,
        ],
      });
    }
  }

  render() {
    const {
      cardCollapseBody,
      cardCollapseHeaderItems,
      cardCollapseTitle,
      cardHeaderClassName,
      className,
    } = this.props;

    return (
      <Card className={className}>
        {cardCollapseTitle &&
        <CardHeader toggler className={cardHeaderClassName}>
          <Button color="toggler" onClick={() => this.toggleCollapse('toggle1')} active={this.state.collapse.includes('toggle1')}>{cardCollapseTitle}</Button>
         {cardCollapseHeaderItems}
        </CardHeader>}
        <Collapse isOpen={this.state.collapse.includes('toggle1')}>
          {cardCollapseBody}
        </Collapse>
      </Card>
    );
  }
}

Screen.propTypes = {
  cardCollapseBody: PropTypes.node,
  cardCollapseHeaderItems: PropTypes.node,
  cardCollapseTitle: PropTypes.string,
  cardHeaderClassName: PropTypes.string,
  className: PropTypes.string,
};

Screen.defaultProps = {
  cardCollapseBody: [],
  cardCollapseHeaderItems: [],
  cardCollapseTitle: '',
  cardHeaderClassName: '',
  className: '',
};

export default CardCollapse;
