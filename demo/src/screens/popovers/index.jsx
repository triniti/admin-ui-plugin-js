import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Card, CardBody, Screen } from '../../../../src/components';
import PopoverItem from './PopoverItem';

class UiPopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
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
      sidenav={<Sidenav activeScreen="popovers" />}
      sidenavHeader
      header="Popovers"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
      primaryActions={<PrimaryActions />}
      body={
      <Card>
        <CardBody className="text-center">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          { this.state.popovers.map((popover, i) => <PopoverItem key={i} item={popover} id={i} />)}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </CardBody>
      </Card>
      }
      />
    );
  }
}

export default UiPopover;
