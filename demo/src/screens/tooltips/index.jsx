import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Screen } from '../../../../src/components';
import TooltipItem from './TooltipItem';

export default class TooltipsScreen extends React.Component {
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
        header="Tooltips"
        sidenav={<Sidenav activeScreen="tooltips" />}
        sidenavHeader
        primaryActions={<PrimaryActions />}
        body={
          <Card>
            <CardBody>
              {this.state.tooltips.map((tooltip, i) => (
                <TooltipItem key={tooltip.placement} item={tooltip} id={i} />
              ))}
            </CardBody>
          </Card>
        }
      />
    );
  }
}
