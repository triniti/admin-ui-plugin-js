import React from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';
import Button from '../button';
import Card from '../card';
import CardHeader from '../card-header';

class CardCollapse extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const {
      cardHeaderClassName,
      children,
      className,
      isStacked,
      title,
    } = this.props;

    const cardClasses = `card-collapse ${isStacked ? 'mb-0' : ''} ${className}`;

    return (
      <Card className={cardClasses}>
        <CardHeader toggler className={cardHeaderClassName}>
          <Button color="toggler" onClick={this.toggle} active={this.state.isOpen}>{title}</Button>
        </CardHeader>
        <Collapse isOpen={this.state.isOpen}>
          {children}
        </Collapse>
      </Card>
    );
  }
}

CardCollapse.propTypes = {
  title: PropTypes.string,
  cardHeaderClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isOpen: PropTypes.bool,
  isStacked: PropTypes.bool,
};

CardCollapse.defaultProps = {
  title: '',
  cardHeaderClassName: '',
  className: '',
  isOpen: false,
  isStacked: false,
};

export default CardCollapse;
