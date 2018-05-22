import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Collapse, Icon, Media, Row, Screen, Table } from '../../../../src/components';

class UiMedia extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);
    this.toggleCode3 = this.toggleCode3.bind(this);
    this.toggleCode4 = this.toggleCode4.bind(this);
    this.toggleCode5 = this.toggleCode5.bind(this);
    this.state = {
      collapseCode1: false,
      collapseCode2: false,
      collapseCode3: false,
      collapseCode4: false,
      collapseCode5: false,
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

  toggleCode5() {
    this.setState({ collapseCode5: !this.state.collapseCode5 });
  }

  render() {
    return (
  <Screen
    sidenav={<Sidenav activeScreen="media" />}
    sidenavHeader
    header="Media"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="media1">
        <CardHeader>Media Left
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

const Example = () => {
  return (
      <Media>
        <Media left href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media>
        <Media left href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Media heading
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <Media>
            <Media left href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
          </Media>
            <Media body>
            <Media heading>
                Nested media heading
            </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          </Media>
        </Media>
      </Media>
    );
};

export default Example;`}
</code>
                </pre>
              </CardBody>
            </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Media>
                <Media left href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>

              <Media>
                <Media left href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Media heading
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  <Media>
                    <Media left href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                  </Media>
                    <Media body>
                    <Media heading>
                        Nested media heading
                    </Media>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </Media>
                  </Media>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="media2">
        <CardHeader>Vertical Alignment
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

const Example = () => {
  return (
      <Media>
        <Media left top href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Top aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="align-items-center">
        <Media left href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Middle aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>

      <Media className="align-items-end">
        <Media left bottom href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
            Bottom aligned media
          </Media>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </Media>
      </Media>
    );
};

export default Example;`}
</code>
                </pre>
              </CardBody>
            </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Media>
                <Media left top href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Top aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>

              <Media className="align-items-center">
                <Media left href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Middle aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>

              <Media className="align-items-end">
                <Media left bottom href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                    Bottom aligned media
                  </Media>
                  Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="media3">
        <CardHeader>Media List
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode3} active={this.state.collapseCode3}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode3}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

const Example = () => {
  return (
      <Media list>
        <Media tag="li">
          <Media left hover="outline" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
          </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
            <Media left href="#">
              <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                  Nested media heading
              </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              <Media>
                <Media left href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                </Media>
                <Media body>
                  <Media heading>
                      Nested media heading
                  </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                </Media>
              </Media>
            </Media>
          </Media>
            <Media>
            <Media left href="#">
              <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                  Nested media heading
              </Media>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
          </Media>
          </Media>
        </Media>
        <Media tag="li">
          <Media body>
            <Media heading>
              Media heading
          </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
          <Media right href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=80%C3%9780&w=80&h=80" alt="Generic placeholder image" className="rounded-circle" />
          </Media>
        </Media>
      </Media>
    );
};

export default Example;`}
</code>
                </pre>
              </CardBody>
            </Collapse>
        <CardBody>
          <Row>
            <Col>
              <Media list>
                <Media tag="li">
                  <Media left hover="outline" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                  <Media body>
                    <Media heading>
                      Media heading
                  </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    <Media>
                    <Media left href="#">
                      <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                          Nested media heading
                      </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                      <Media>
                        <Media left href="#">
                          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                        </Media>
                        <Media body>
                          <Media heading>
                              Nested media heading
                          </Media>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </Media>
                      </Media>
                    </Media>
                  </Media>
                    <Media>
                    <Media left href="#">
                      <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=50%C3%9750&w=50&h=50" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                      <Media heading>
                          Nested media heading
                      </Media>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                  </Media>
                  </Media>
                </Media>
                <Media tag="li">
                  <Media body>
                    <Media heading>
                      Media heading
                  </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                  </Media>
                  <Media right href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=80%C3%9780&w=80&h=80" alt="Generic placeholder image" className="rounded-circle" />
                  </Media>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="media5">
        <CardHeader>Media hover="shadow"
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode4} active={this.state.collapseCode4}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode4}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

const Example = () => {
  return (
      <Media left hover="shadow" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Media left hover="shadow" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Media left hover="shadow" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Row>
        <Col>
          <Media heading>Media Hover inside MediaList with img-thumbnail class on img</Media>
          <Media list>
            <Media tag="li">
              <Media left hover="shadow" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
              </Media>
              <Media left hover="shadow" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
              </Media>
              <Media left hover="shadow" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
              </Media>
            </Media>
          </Media>
        </Col>
      </Row>
    );
};

export default Example;`}
</code>
                </pre>
              </CardBody>
            </Collapse>
        <CardBody>
          <Media left hover="shadow" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="shadow" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="shadow" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Row className="mt-4">
            <Col>
              <Media heading>Media hover="shadow" inside MediaList with img-thumbnail class on img</Media>
              <Media list>
                <Media tag="li">
                  <Media left hover="shadow" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
                  </Media>
                  <Media left hover="shadow" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
                  </Media>
                  <Media left hover="shadow" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" className="img-thumbnail" />
                  </Media>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="media6">
        <CardHeader>Media hover="outline"
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode5} active={this.state.collapseCode5}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode5}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

const Example = () => {
  return (
      <Media left hover="outline" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Media left hover="outline" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Media left hover="outline" href="#">
        <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
      </Media>
      <Row>
        <Col>
          <Media heading>Media hover="outline" inside MediaList</Media>
          <Media list>
            <Media tag="li">
              <Media left hover="outline" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
              </Media>
              <Media left hover="outline" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
              </Media>
              <Media left hover="outline" href="#">
                <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
              </Media>
            </Media>
          </Media>
        </Col>
      </Row>
    );
};

export default Example;`}
</code>
                </pre>
              </CardBody>
            </Collapse>
        <CardBody>
          <Media left hover="outline" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="outline" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="outline" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Row className="mt-4">
            <Col>
              <Media heading>Media hover="outline" inside MediaList</Media>
              <Media list>
                <Media tag="li">
                  <Media left hover="outline" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                  <Media left hover="outline" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                  <Media left hover="outline" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="media7">
        <CardHeader>Media hover="opacity"</CardHeader>
        <CardBody>
          <Media left hover="opacity" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="opacity" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Media left hover="opacity" href="#">
            <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
          </Media>
          <Row className="mt-4">
            <Col>
              <Media heading>Media hover="outline" inside MediaList</Media>
              <Media list>
                <Media tag="li">
                  <Media left hover="opacity" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                  <Media left hover="opacity" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                  <Media left hover="opacity" href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                  </Media>
                </Media>
              </Media>
            </Col>
          </Row>
        </CardBody>
      </Card>,

      <Card key="props">
        <CardHeader>Table Properties</CardHeader>
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
              <th scope="row">body</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">bottom</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">children</th>
              <td>node</td>
              <td></td>
              <td></td>
            </tr>
             <tr>
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">heading</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">hover</th>
              <td>string</td>
              <td></td>
              <td>'opacity', 'outline', 'shadow'</td>
            </tr>
            <tr>
              <th scope="row">left</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">list</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">middle</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
             <tr>
              <th scope="row">object</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">right</th>
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
            <tr>
              <th scope="row">top</th>
              <td>bool</td>
              <td></td>
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

export default UiMedia;
