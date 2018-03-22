import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Collapse,
  Icon,
  Table,
  Row,
  Col,
  Jumbotron,
  Screen,
} from '../../../../src/components';
import Sidenav from '../../components/sidenav';

class Jumbotrons extends Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.toggleCode4 = this.toggleCode4.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false,
      collapseCode4: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  toggleCode3() {
    this.setState({ collapseCode3: !this.state.collapseCode3 });
  }

  toggleCode4() {
    this.setState({ collapseCode4: !this.state.collapseCode4 });
  }

  render() {
    return (
  <Screen
    header="Jumbotrons"
    sidenav={<Sidenav activeScreen="jumbotrons" />}
    sidenavHeader
    body={[
      <Card key="jumbotron1">
        <CardHeader fullWidth>Jumbotron Theme Dark
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode1}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Jumbotron theme="dark">
        <Container fluid>
          <CardTitle display="1" tag="h1">Inside Container Fluid</CardTitle>
          <p className="lead">This is a modified jumbotron that occupies the entire
            horizontal space of its parent.
          </p>
        </Container>
      </Jumbotron>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <Jumbotron theme="dark">
          <Container fluid>
            <CardTitle display="1" tag="h1">Inside Container Fluid</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire
              horizontal space of its parent.
            </p>
          </Container>
        </Jumbotron>
      </Card>,

      <Card key="jumbotron2">
        <CardHeader fullWidth>Jumbotron Theme Light
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode2}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Jumbotron theme="light">
        <CardBody>
          <CardTitle display="1" tag="h1">Inside CardBody</CardTitle>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
            parent.
          </p>
        </CardBody>
      </Jumbotron>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <Jumbotron theme="light">
          <CardBody>
            <CardTitle display="1" tag="h1">Inside CardBody</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
              parent.
            </p>
          </CardBody>
        </Jumbotron>
      </Card>,

      <Card key="jumbotron3">
        <CardHeader fullWidth>Jumbotron Default inside CardBody & Container
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode3} active={this.state.collapseCode3}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode3}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Jumbotron>
        <CardBody>
          <CardTitle display="3" tag="h1">Hello, world!</CardTitle>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
            attention to featured content or information.
          </p>
          <hr />
          <p>
            It uses utility classes for typgraphy and spacing to space content out
            within the larger container.
          </p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
        </CardBody>
      </Jumbotron>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody>
          <Jumbotron>
            <CardBody>
              <CardTitle display="3" tag="h1">Hello, world!</CardTitle>
              <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                attention to featured content or information.
              </p>
              <hr />
              <p>
                It uses utility classes for typgraphy and spacing to space content out
                within the larger container.
              </p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </CardBody>
          </Jumbotron>
        </CardBody>
      </Card>,

      <Card key="jumbotron4">
        <CardHeader fullWidth>Jumbotron inside Container Fluid
          <Button radius="circle" color="hover-bg" onClick={this.toggleCode4} active={this.state.collapseCode4}>
              <Icon imgSrc="code" size="md"/>
           </Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapseCode4}>
          <CardBody className="pl-0 pr-0 bg-light">
            <pre className="pl-5 pr-3">
              <code>
                  {`
import React from 'react';
import { Progress } from '@triniti/admin-ui-plugin/components';

const Example = (props) => {
  return (
      <Jumbotron>
        <Container fluid>
          <CardTitle display="2" tag="h1">Fluid Jumbotron</CardTitle>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
              parent.
          </p>
        </Container>
      </Jumbotron>
  );
};

export default Example;
                  `}
              </code>
            </pre>
          </CardBody>
        </Collapse>

        <Jumbotron>
          <Container fluid>
            <CardTitle display="2" tag="h1">Fluid Jumbotron</CardTitle>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its
                parent.
            </p>
          </Container>
        </Jumbotron>

      </Card>,

      <Card key="props">
        <CardHeader>Progress Properties</CardHeader>
        <CardBody className="pt-3">
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
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">fluid</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>oneOfType</td>
              <td></td>
              <td>([PropTypes.func, PropTypes.string])</td>
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

export default Jumbotrons;