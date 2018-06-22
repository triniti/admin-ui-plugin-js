/* eslint-disable react/jsx-indent */
import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Icon,  Row, Screen, Table } from '../../../../src/components';

class Tables extends React.Component {
    constructor(props) {
        super(props);
        this.toggleCode1 = this.toggleCode1.bind(this);
        this.toggleCode2 = this.toggleCode2.bind(this);
        this.toggleCode3 = this.toggleCode3.bind(this);
        this.toggleCode4 = this.toggleCode4.bind(this);
        this.toggleCode5 = this.toggleCode5.bind(this);
        this.toggleCode6 = this.toggleCode6.bind(this);
        this.toggleCode7 = this.toggleCode7.bind(this);
        this.toggleCode8 = this.toggleCode8.bind(this);
        this.toggleCode9 = this.toggleCode9.bind(this);
        this.toggleCode10 = this.toggleCode10.bind(this);
        this.state = {
            collapseCode1: false,
            collapseCode2: false,
            collapseCode3: false,
            collapseCode4: false,
            collapseCode5: false,
            collapseCode6: false,
            collapseCode7: false,
            collapseCode8: false,
            collapseCode9: false,
            collapseCode10: false,
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

    toggleCode6() {
        this.setState({ collapseCode6: !this.state.collapseCode6 });
    }

    toggleCode7() {
        this.setState({ collapseCode7: !this.state.collapseCode7 });
    }

    toggleCode8() {
        this.setState({ collapseCode8: !this.state.collapseCode8 });
    }

    toggleCode9() {
        this.setState({ collapseCode9: !this.state.collapseCode9 });
    }

    toggleCode10() {
        this.setState({ collapseCode10: !this.state.collapseCode10 });
    }

    render() {
        return (
    <Screen
      sidenav={<Sidenav activeScreen="tables" />}
      sidenavHeader
      header="Tables"
      pageCount={<span className="text-muted small">(Page 1 of 1)</span>}
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
      primaryActions={<PrimaryActions />}
      body={[
      <Card key="alert8">
        <CardHeader>
            Status Colors
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

export default class Example extends React.Component {
  render() {
    return (
    <Table borderless hover>
        <thead>
          <tr>
            <th>Status</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr className="status-archived">
            <th scope="row">Archived</th>
            <td>Jason</td>
            <td>Gregg</td>
            <td>@archived</td>
          </tr>
          <tr className="status-draft">
            <th scope="row">Draft</th>
            <td>Albert</td>
            <td>Wei</td>
            <td>@draft</td>
          </tr>
          <tr className="status-deleted">
            <th scope="row">Deleted</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@deleted</td>
          </tr>
          <tr className="status-expired">
            <th scope="row">Expired</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@expired</td>
          </tr>
          <tr className="status-pending">
            <th scope="row">Pending</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@pending</td>
          </tr>
          <tr className="status-published">
            <th scope="row">Published</th>
            <td>Miriam</td>
            <td>HQ</td>
            <td>@published</td>
          </tr>
          <tr className="status-scheduled">
            <th scope="row">Scheduled</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@scheduled</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}`}
               </code>
            </pre>
          </CardBody>
        </Collapse>
        <CardBody>
          <Row className="mb-3">
            <Col>
              <span className="status-copy status-archived">Archived</span>
              <span className="status-copy status-deleted">Deleted</span>
              <span className="status-copy status-draft">Draft</span>
              <span className="status-copy status-expired">Expired</span>
              <span className="status-copy status-pending">Pending</span>
              <span className="status-copy status-published">Published</span>
              <span className="status-copy status-scheduled">Scheduled</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <small className="status-copy status-archived">Archived</small>
              <small className="status-copy status-deleted">Deleted</small>
              <small className="status-copy status-draft">Draft</small>
              <small className="status-copy status-expired">Expired</small>
              <small className="status-copy status-pending">Pending</small>
              <small className="status-copy status-published">Published</small>
              <small className="status-copy status-scheduled">Scheduled</small>
            </Col>
          </Row>
        </CardBody>
        <CardBody>
          <Table hover sticky="head">
            <thead>
              <tr>
                <th>Status</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr className="status-archived">
                <th scope="row">Archived</th>
                <td>Jason</td>
                <td>Gregg</td>
                <td>@archived</td>
              </tr>
              <tr className="status-deleted">
                <th scope="row">Deleted</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@deleted</td>
              </tr>
              <tr className="status-draft">
                <th scope="row">Draft</th>
                <td>Albert</td>
                <td>Wei</td>
                <td>@draft</td>
              </tr>
              <tr className="status-expired">
                <th scope="row">Expired</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@expired</td>
              </tr>
              <tr className="status-pending">
                <th scope="row">Pending</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@pending</td>
              </tr>
              <tr className="status-published">
                <th scope="row">Published</th>
                <td>Miriam</td>
                <td>HQ</td>
                <td>@published</td>
              </tr>
              <tr className="status-scheduled">
                <th scope="row">Scheduled</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@scheduled</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <h2 key="cardtitle1" className="h4 mt-4 pb-1">Scrollable tbody className="sticky-tbody"</h2>,

      <Card key="table01">
        <Table size="sm" sticky="body">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="table1">
        <Table size="sm" fixed className="sticky-top">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
        </Table>
        <Table hover size="sm" borderless fixed>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="table2">
        <Table hover>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader3" className="mb-0">
        <CardHeader>Striped Table + Sticky
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

export default class Example extends React.Component {
  render() {
    return (
      <Table striped hover sticky="head">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
     </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table3">
        <Table striped hover sticky="head">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader4" className="mb-0">
        <CardHeader>Dark Table
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

export default class Example extends React.Component {
  render() {
    return (
      <Table striped className="sticky-top fixed">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
        </Table>
        <Table striped hover className="fixed mb-0">
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
     </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table4">
        <Table dark className="mb-0">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader5" className="mb-0">
        <CardHeader>Striped Table
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

export default class Example extends React.Component {
  render() {
    return (
      <Table striped className="mb-0">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table5">
        <Table striped className="mb-0">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader6" className="mb-0">
        <CardHeader>Bordered Table
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode6} active={this.state.collapseCode6}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode6}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Table bordered className="mb-0">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table6">
        <Table bordered className="mb-0">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader7" className="mb-0">
        <CardHeader>Borderless Table
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode7} active={this.state.collapseCode7}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode7}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Table hover borderless>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table7">
        <Table hover borderless>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader8" className="mb-0">
        <CardHeader>Hoverable Rows Table
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode8} active={this.state.collapseCode8}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode8}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Table hover>
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table8">
          <Table hover>
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
            </tbody>
          </Table>
      </Card>,

      <Card key="tableheader9" className="mb-0">
        <CardHeader>Small
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode9} active={this.state.collapseCode9}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode9}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Table size="sm">
          <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table9">
        <Table size="sm">
          <thead>
          <tr>
            <th className="table-col-sm">#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
          </tbody>
        </Table>
      </Card>,

      <Card key="tableheader10" className="mb-0">
        <CardHeader>Responsive Table
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode10} active={this.state.collapseCode10}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode10}>
              <CardBody className="pl-0 pr-0 bg-light">
                <pre className="pl-5 pr-3">
                    <code>
{`import React from 'react';
import { Table } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  render() {
    return (
      <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          </tbody>
      </Table>
    );
  }
}`}                </code>
                </pre>
              </CardBody>
            </Collapse>
      </Card>,

      <Card key="table10">
        <Table responsive>
          <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          </tbody>
        </Table>
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
              <th scope="row">bordered</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">dark</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">hover</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
             <tr>
              <th scope="row">responsive</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">size</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">striped</th>
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

export default Tables;
