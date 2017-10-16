import React from 'react';
import { Card, CardBlock, Col, Row } from '../../../src/components';
import TooltipItem from './TooltipItem';

class UiTooltip extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tooltips: [
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'right',
          text: 'Right',
        },
      ],
    };
  }

  render() {
    return (
      <Card>
        <CardBlock>
          { this.state.tooltips.map((tooltip, i) =>
            <TooltipItem key={tooltip.placement} item={tooltip} id={i} />
          )}
        </CardBlock>
      </Card>
    );
  }
}

export default UiTooltip;
