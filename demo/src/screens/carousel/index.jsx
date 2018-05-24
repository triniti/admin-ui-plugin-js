import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Collapse, Icon, Screen, Table } from '../../../../src/components';
import CarouselExample from './carousel';


class UiCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapseCode1: false,
    };

    this.toggleCode1 = this.toggleCode1.bind(this);
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="carousel" />}
        sidenavHeader
        header="Carousel"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="button0">
            <CardHeader>
              Carousel Component
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md" />
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                  <code>{`import React from 'react';
import { Label, Switch } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (

  );
};`}
                  </code>
                </pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <CarouselExample />
            </CardBody>
          </Card>,

          <Card key="props1">
            <CardHeader>Carousel Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">activeIndex</th>
                    <td>number</td>
                    <td></td>
                    <td>The current active slide of the carousel</td>
                  </tr>
                  <tr>
                    <th scope="row">children</th>
                    <td>array</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">interval</th>
                    <td>oneOfType</td>
                    <td>5000</td>
                    <td>The interval at which the carousel automatically cycles (default: 5000)</td>
                  </tr>
                  <tr>
                    <th scope="row">keyboard</th>
                    <td>bool</td>
                    <td></td>
                    <td>Controls if the left and right arrow keys should control the carousel</td>
                  </tr>
                  <tr>
                    <th scope="row">mouseEnter</th>
                    <td>func</td>
                    <td></td>
                    <td>Called when the mouse enters the Carousel</td>
                  </tr>
                  <tr>
                    <th scope="row">mouseLeave</th>
                    <td>func</td>
                    <td></td>
                    <td>Called when the mouse exits the Carousel</td>
                  </tr>
                  <tr>
                    <th scope="row">next</th>
                    <td>func</td>
                    <td></td>
                    <td>A function which should advance the carousel to the next slide (via activeIndex)</td>
                  </tr>
                  <tr>
                    <th scope="row">pause</th>
                    <td>bool</td>
                    <td>'hover'</td>
                    <td>If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")</td>
                  </tr>
                  <tr>
                    <th scope="row">previous</th>
                    <td>func</td>
                    <td></td>
                    <td>A function which should advance the carousel to the previous slide (via activeIndex)</td>
                  </tr>
                  <tr>
                    <th scope="row">ride</th>
                    <td>bool</td>
                    <td></td>
                    <td>Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load. This is how bootstrap defines it... I would prefer a bool named autoplay or something...</td>
                  </tr>
                  <tr>
                    <th scope="row">slide</th>
                    <td>bool</td>
                    <td></td>
                    <td>Controls whether the slide animation on the Carousel works or not</td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props2">
            <CardHeader>CarouselControl Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">direction</th>
                    <td>oneOf(['prev', 'next'])</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">directionText</th>
                    <td>string</td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">onClickHandler</th>
                    <td>func</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props3">
            <CardHeader>CarouselIndicators Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">activeIndex</th>
                    <td></td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">items</th>
                    <td>array</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">onClickHandler</th>
                    <td>func</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,

          <Card key="props4">
            <CardHeader>CarouselCaption Properties</CardHeader>
            <CardBody>
              <Table hover responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">captionHeader</th>
                    <td>string</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th scope="row">captionText</th>
                    <td>string</td>
                    <td>isRequired</td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>,
      ]}
      />
    );
  }
}

export default UiCarousel;
