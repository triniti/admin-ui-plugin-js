import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Screen } from '../../../../src/components';
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
      <Screen
      sidenav={<Sidenav activeScreen="tooltips" />}
      sidenavHeader
      header="Tooltips"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
      primaryActions={<PrimaryActions />}
      body={
      <Card>
        <CardBody>
          { this.state.tooltips.map((tooltip, i) =>
            <TooltipItem key={tooltip.placement} item={tooltip} id={i} />)}
        </CardBody>
      </Card>
      }
      />
    );
  }
}

export default UiTooltip;
