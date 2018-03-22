import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Badge, Button, Card, CardBody, CardHeader, Icon, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Screen } from '../../../../src/components';

const UiListGroup = () => (
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
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem tag="a" href="#">This is a linked list item</ListGroupItem>
            <ListGroupItem>List item with badge in pill style<Badge
              pill
            >1
            </Badge>
            </ListGroupItem>
          </ListGroup>
        </CardBody>
      </Card>,

      <Card key="list-group2">
        <CardHeader>Buttons</CardHeader>
        <CardBody>
          <ListGroup>
            <ListGroupItem tag="a" href="#" action>Link</ListGroupItem>
            <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
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
            <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
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
            <ListGroupItem active tag="button" action>Active Button</ListGroupItem>
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
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
          <ListGroupItem className="list-group-item-roles">
            <ListGroupItemText>
                role-create-node
            </ListGroupItemText>
            <span>
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
          <ListGroupItem className="list-group-item-roles">
            <ListGroupItemText>
                custom-delegate
            </ListGroupItemText>
            <span>
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="eye" alt="details" />
              </Button>
              <Button radius="circle" color="hover" className="mb-0">
                <Icon imgSrc="pencil" alt="edit" />
              </Button>
            </span>
          </ListGroupItem>
        </ListGroup>
      </Card>,

      <Card key="list-group10">
        <CardHeader>List Group Chat</CardHeader>
        <CardBody>
          <ListGroup className="list-group-chat">
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
    ]}
    maxWidth='768px'
  />
);

export default UiListGroup;
