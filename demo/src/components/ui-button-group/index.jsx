import React from 'react';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from '../../../../src/components';

const UiButtonGroup = () => (
  <Card>
    <CardBody spacing="lg">
      <ButtonToolbar>
        <ButtonGroup className={'mr-3'}>
          <Button outline>1</Button>
          <Button outline>2</Button>
          <Button outline>3</Button>
          <Button outline>4</Button>
        </ButtonGroup>
        <ButtonGroup className={'mr-3'}>
          <Button>5</Button>
          <Button>6</Button>
          <Button>7</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="primary">8</Button>
          <Button color="primary">9</Button>
          <Button color="primary">10</Button>
        </ButtonGroup>
      </ButtonToolbar>
    </CardBody>
  </Card>
);

export default UiButtonGroup;
