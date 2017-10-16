import React from 'react';
import { Card, CardBlock, Col, Row } from '../../../../src/components';
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
      <Card>
        <CardBlock className="text-center">
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
        </CardBlock>
      </Card>
    );
  }
}

export default UiPopover;
