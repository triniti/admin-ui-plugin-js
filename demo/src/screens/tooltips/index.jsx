import React from 'react';
import { Card, CardBody, ScreenBody } from '../../../../src/components';
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
      <ScreenBody
      body={
      <Card>
        <CardBody spacing="lg">
          { this.state.tooltips.map((tooltip, i) =>
            <TooltipItem key={tooltip.placement} item={tooltip} id={i} />)}
        </CardBody>
      </Card>
      }
      >
      </ScreenBody>
    );
  }
}

export default UiTooltip;
