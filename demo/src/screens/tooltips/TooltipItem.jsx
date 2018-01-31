import React from 'react'; import Sidenav from '../../components/sidenav';
import { Button, Tooltip } from '../../../../src/components';

class TooltipItem extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  render() {
    return (
      <span>
        <Button className="mr-1" color="default" id={`Tooltip-${this.props.id}`}>
          {this.props.item.text}
        </Button>
        <Tooltip placement={this.props.item.placement} isOpen={this.state.tooltipOpen} target={`Tooltip-${this.props.id}`} toggle={this.toggle}>
          Tooltip Content!
        </Tooltip>
      </span>
    );
  }
}

export default TooltipItem;
