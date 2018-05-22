import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Badge, Button, Card, CardBody, CardHeader, CardTitle, Collapse, Icon, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Screen, Table } from '../../../../src/components';

class UiListGroup extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEvent1 = this.toggleEvent1.bind(this);
        this.toggleEvent2 = this.toggleEvent2.bind(this);
        this.toggleEvent3 = this.toggleEvent3.bind(this);
        this.toggleEvent4 = this.toggleEvent4.bind(this);
        this.toggleEvent5 = this.toggleEvent5.bind(this);
        this.state = {
            collapseEvent1: null
        };
    }

    toggleEvent1() {
        this.setState({ collapseEvent1: !this.state.collapseEvent1 });
    }

    toggleEvent2() {
        this.setState({ collapseEvent2: !this.state.collapseEvent2 });
    }

    toggleEvent3() {
        this.setState({ collapseEvent3: !this.state.collapseEvent3 });
    }

    toggleEvent4() {
        this.setState({ collapseEvent4: !this.state.collapseEvent4 });
    }

    toggleEvent5() {
        this.setState({ collapseEvent5: !this.state.collapseEvent5 });
    }

    render() {
        return (
  <Screen
    sidenav={<Sidenav activeScreen="list-groups" />}
    sidenavHeader
    header="List Groups"
  // tabs={[
  //   { to: '/welcome', text: 'Tab1' },
  //   { to: '#/test2', text: 'Tab2' },
  // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <Card key="list-group1">
        <CardHeader>List Group Items</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem action>List Group Item action</ListGroupItem>
            <ListGroupItem active>List Group Item active</ListGroupItem>
            <ListGroupItem disabled>List Group Item disabled</ListGroupItem>
            <ListGroupItem tag="a" href="#">This is a linked list item</ListGroupItem>
            <ListGroupItem className="d-flex justify-content-between">List item with Badge <Badge pill color="dark">4</Badge></ListGroupItem>
            <ListGroupItem>List item with Badge alert<Badge pill alert>9</Badge>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group2">
        <CardHeader>Buttons</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
            <ListGroupItem active tag="button" action>active Button</ListGroupItem>
            <ListGroupItem tag="button" action>Button</ListGroupItem>
            <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group3">
        <CardHeader>Buttons Flush</CardHeader>
        <CardBody>
          <ListGroup flush>
            <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
            <ListGroupItem active tag="button" action>active Button</ListGroupItem>
            <ListGroupItem tag="button" action>Button</ListGroupItem>
            <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group4">
        <CardHeader>Buttons Borderless</CardHeader>
        <CardBody>
          <ListGroup borderless>
            <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
            <ListGroupItem active tag="button" action>active Button</ListGroupItem>
            <ListGroupItem tag="button" action>Button</ListGroupItem>
            <ListGroupItem disabled tag="button" action>Disabled Button</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group5">
        <CardHeader>Contextual Color Alert</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem color="success">Cras justo odio</ListGroupItem>
            <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
            <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group6">
        <CardHeader>Heading and Item Text</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem active>
              <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
              <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
              <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
              <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group7">
        <CardHeader>List Group Nav</CardHeader>
        <CardBody>
          <ListGroup nav>
            <ListGroupItem active>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group8">
        <CardHeader>List Group Nav Borderless</CardHeader>
        <CardBody>
          <ListGroup borderless nav>
            <ListGroupItem active>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a href="">
                <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                <ListGroupItemText className="mb-0">
              Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
              </ListGroupItemText>
              </a>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group9">
        <CardHeader>List Group Roles</CardHeader>
        <ListGroup>
          <ListGroupItem className="list-group-item-roles">
            <ListGroupItemText>
            create-form-event
            </ListGroupItemText>
            <span>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
          <ListGroupItem className="list-group-item-roles">
            <ListGroupItemText>
                role-create-node
            </ListGroupItemText>
            <span>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
          <ListGroupItem className="list-group-item-roles">
            <ListGroupItemText>
                custom-delegate
            </ListGroupItemText>
            <span>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="icon-hover-bg" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
        </ListGroup>
      </Card>,

      <Card key="list-group10">
        <CardHeader>List Group Chat</CardHeader>
        <CardBody>
          <ListGroup theme="chat">
            <ListGroupItem className="list-group-chat-item-me">
              <ListGroupItemHeading>Me <small>3 minutes ago</small></ListGroupItemHeading>
              <ListGroupItemText>
                  My phone got wet and I lost all of my numbers. Please text me.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Albert Gutierrez<small>2 minutes ago</small></ListGroupItemHeading>
              <ListGroupItemText>
                  1 2 3 4 5 6 7 8 9 0 That should be all of them.
              </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
              <ListGroupItemHeading>Albert Gutierrez<small>a few seconds ago</small></ListGroupItemHeading>
              <ListGroupItemText>
                  Feel free to rearrange.
              </ListGroupItemText>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group11">
        <CardHeader>List Group History - component Event Stream</CardHeader>
        <CardBody indent>
          <ListGroup theme="history">

            <ListGroupItem className="mb-0">
              <ListGroupItemText>
                <span className="mr-2 text-muted"><i>#1</i></span>
                <span className="mr-2"><strong>Article Marked As Draft</strong></span>
                by
                <span className="ml-2"><strong><a href="">Joel Capillo</a></strong></span>
                <span className="float-right"><i>an hour ago</i></span>
              </ListGroupItemText>
              <ListGroup borderless>
                <ListGroupItem className="mb-0">
                  <CardTitle tag="h5">
                    <a className="card-title-sm text-info pr-2 pl-2" onClick={this.toggleEvent1} active={this.state.collapseEvent1}>
                      View Event Details
                    </a>
                  </CardTitle>
                  <Collapse isOpen={this.state.collapseEvent1}>
                    <ul style={{border: '0px', padding: '0px', margin: '0.5em 0px 0.5em 0.125em', listStyle: 'none'}}><li style={{padding: '0px', margin: '0px'}}><ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx User Ref</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 2 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx App</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 5 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{paddingTop: '0.25em', paddingRight: '0px', marginLeft: '0.875em', userSelect: 'text', wordWrap: 'break-word', paddingLeft: '1.25em', textIndent: '-0.5em', wordBreak: 'break-all'}}><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px 0.5em 0px 0px'}}><strong>Ctx Ip</strong></label><span style={{color: 'rgb(108, 116, 31)'}}><strong className="bg-success text-white pl-2 pr-2">104.180.170.6</strong></span></li></ul></li></ul>
                  </Collapse>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

            <ListGroupItem className="mb-0">
              <ListGroupItemText>
                <span className="mr-2 text-muted"><i>#2</i></span>
                <span className="mr-2"><strong>Article Marked As Deleted</strong></span>
                by
                <span className="ml-2"><strong><a href="">Joel Capillo</a></strong></span>
                <span className="float-right"><i>2 hours ago</i></span>
              </ListGroupItemText>
              <ListGroup borderless>
                <ListGroupItem className="mb-0">
                  <CardTitle tag="h5">
                    <a className="card-title-sm text-info pr-2 pl-2" onClick={this.toggleEvent2} active={this.state.collapseEvent2}>
                      View Event Details
                    </a>
                  </CardTitle>
                  <Collapse isOpen={this.state.collapseEvent2}>
                    <ul style={{border: '0px', padding: '0px', margin: '0.5em 0px 0.5em 0.125em', listStyle: 'none'}}><li style={{padding: '0px', margin: '0px'}}><ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx User Ref</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 2 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx App</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 5 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{paddingTop: '0.25em', paddingRight: '0px', marginLeft: '0.875em', userSelect: 'text', wordWrap: 'break-word', paddingLeft: '1.25em', textIndent: '-0.5em', wordBreak: 'break-all'}}><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px 0.5em 0px 0px'}}><strong>Ctx Ip</strong></label><span style={{color: 'rgb(108, 116, 31)'}}><strong className="bg-success text-white pl-2 pr-2">104.180.170.6</strong></span></li></ul></li></ul>
                  </Collapse>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

            <ListGroupItem className="mb-0">
              <ListGroupItemText>
                <span className="mr-2 text-muted"><i>#3</i></span>
                <span className="mr-2"><strong>Article Marked As Draft</strong></span>
                by
                <span className="ml-2"><strong><a href="">Joel Capillo</a></strong></span>
                <span className="float-right"><i>15 hours ago</i></span>
              </ListGroupItemText>
              <ListGroup borderless>
                <ListGroupItem className="mb-0">
                  <CardTitle tag="h5">
                    <a className="card-title-sm text-info pr-2 pl-2" onClick={this.toggleEvent3} active={this.state.collapseEvent3}>
                      View Event Details
                    </a>
                  </CardTitle>
                  <Collapse isOpen={this.state.collapseEvent3}>
                    <ul style={{border: '0px', padding: '0px', margin: '0.5em 0px 0.5em 0.125em', listStyle: 'none'}}><li style={{padding: '0px', margin: '0px'}}><ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx User Ref</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 2 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx App</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 5 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li></ul></li></ul>
                  </Collapse>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

            <ListGroupItem className="mb-0">
              <ListGroupItemText>
                <span className="mr-2 text-muted"><i>#4</i></span>
                <span className="mr-2"><strong>Article Marked As Deleted</strong></span>
                by
                <span className="ml-2"><strong><a href="">Joel Capillo</a></strong></span>
                <span className="float-right"><i>17 hours ago</i></span>
              </ListGroupItemText>
              <ListGroup borderless>
                <ListGroupItem className="mb-0">
                  <CardTitle tag="h5">
                    <a className="card-title-sm text-info pr-2 pl-2" onClick={this.toggleEvent4} active={this.state.collapseEvent4}>
                      View Event Details
                    </a>
                  </CardTitle>
                  <Collapse isOpen={this.state.collapseEvent4}>
                    <ul style={{border: '0px', padding: '0px', margin: '0.5em 0px 0.5em 0.125em', listStyle: 'none'}}><li style={{padding: '0px', margin: '0px'}}><ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx User Ref</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 2 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx App</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 5 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li></ul></li></ul>
                  </Collapse>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

            <ListGroupItem className="mb-0">
              <ListGroupItemText>
                <span className="mr-2 text-muted"><i>#5</i></span>
                <span className="mr-2"><strong>Article Marked As Updated</strong></span>
                by
                <span className="ml-2"><strong><a href="">Joel Capillo</a></strong></span>
                <span className="float-right"><i>5 days ago</i></span>
              </ListGroupItemText>
              <ListGroup borderless>
                <ListGroupItem className="mb-0">
                  <CardTitle tag="h5">
                    <a className="card-title-sm text-info pr-2 pl-2" onClick={this.toggleEvent5} active={this.state.collapseEvent5}>
                      View Event Details
                    </a>
                  </CardTitle>
                  <Collapse isOpen={this.state.collapseEvent5}>
                    <ul style={{border: '0px', padding: '0px', margin: '0.5em 0px 0.5em 0.125em', listStyle: 'none'}}><li style={{padding: '0px', margin: '0px'}}><ul style={{padding: '0px', margin: '0px', listStyle: 'none'}}><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx User Ref</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 2 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li><li style={{position: 'relative', paddingTop: '0.25em', marginLeft: '0px', paddingLeft: '0px'}}><div style={{display: 'inline-block', paddingRight: '0.5em', paddingLeft: '0px', cursor: 'pointer'}}><div style={{marginLeft: '0px', transition: '150ms', transform: 'rotateZ(0deg)', transformOrigin: '45% 50% 0px', position: 'relative', lineHeight: '1.1em', fontSize: '0.75em', color: 'rgb(99, 132, 160)'}}>▶</div></div><label style={{display: 'inline-block', color: 'rgb(99, 132, 160)', margin: '0px', padding: '0px', userSelect: 'inherit', cursor: 'pointer'}}><strong>Ctx App</strong></label><span style={{paddingLeft: '0.5em', cursor: 'default', color: 'rgb(108, 116, 31)'}}><span><span style={{marginLeft: '0.3em', marginRight: '0.3em'}}>{}</span> 5 keys</span></span><ul style={{padding: '0px', margin: '0px', listStyle: 'none', display: 'block'}}></ul></li></ul></li></ul>
                  </Collapse>
              </ListGroupItem>
              </ListGroup>
            </ListGroupItem>

          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="props1">
        <CardHeader>List Group Properties</CardHeader>
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
              <th scope="row">borderless</th>
              <td>bool</td>
              <td></td>
              <td>removes outer border and border on items</td>
            </tr>
            <tr>
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">flush</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>oneOfType</td>
              <td>'ul'</td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">theme</th>
              <td>string</td>
              <td></td>
              <td>'history', 'chat'</td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props2">
        <CardHeader>List Group Item Properties</CardHeader>
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
              <th scope="row">active</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">disabled</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">color</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">action</th>
              <td>bool</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td>'list-group-item-roles'</td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>oneOfType</td>
              <td>'li'</td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props3">
        <CardHeader>List Group Item Heading Properties</CardHeader>
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
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>oneOfType</td>
              <td>'h5'</td>
              <td></td>
            </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props4">
        <CardHeader>List Group Item Text Properties</CardHeader>
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
              <th scope="row">className</th>
              <td>string</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">tag</th>
              <td>oneOfType</td>
              <td>'p'</td>
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

export default UiListGroup;
