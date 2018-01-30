import React from 'react';
import { Card, CardBody, ScreenBody } from '../../../../src/components';
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
    <ScreenBody
      body={
      <Card>
        <CardBody className="text-center" spacing="lg">
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
      >
      </ScreenBody>
    );
  }
}

export default UiPopover;
