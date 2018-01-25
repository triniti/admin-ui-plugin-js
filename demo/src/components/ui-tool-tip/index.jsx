import React from 'react';
import { Card, CardBody, MainContent } from '../../../../src/components';
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
      <MainContent>
        <Card>
          <CardBody spacing="lg">
            { this.state.tooltips.map((tooltip, i) =>
              <TooltipItem key={tooltip.placement} item={tooltip} id={i} />)}
          </CardBody>
        </Card>
      </MainContent>
    );
  }
}

export default UiTooltip;
