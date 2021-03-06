import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardText, CardTitle, CardSubtitle, CardsContainer, Col, Container, Divider, Row, Screen, Table } from '../../../../src/components';

const UiCard = () => (
  <Screen
    maxWidth="100%"
    sidenav={<Sidenav activeScreen="cards" />}
    sidenavHeader
    header="Cards"
    // tabs={[
    //   { to: '/welcome', text: 'Tab1' },
    //   { to: '#/test2', text: 'Tab2' },
    // ]}
    primaryActions={<PrimaryActions />}
    body={[
      <div key="cards1">
        <Row className="gutter-sm">
          <Col xs="12" sm="6" md="4" lg="3">
            <Card hover shadow>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Gutter Small</CardTitle>
                <CardSubtitle>Tighter Sub Grids</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card hover shadow>
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
              </CardBody>
              <img
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                    content.
                </CardText>
                <Divider size="sm" />
                <CardLink href="#">Card Link</CardLink>
                <CardLink href="#">Another Link</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card body hover className="text-center" shadow>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card hover shadow>
              <CardHeader tag="h3">Featured</CardHeader>
              <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>Go somewhere</Button>
              </CardBody>
              <CardFooter className="text-muted">Footer</CardFooter>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card hover shadow>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </CardText>
                <hr className="mb-0" />
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card hover shadow>
              <CardBody>
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardBody>
              <CardImg
                bottom
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                alt="Card image cap"
              />
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card inverse shadow>
              <CardImg
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
                alt="Card image cap"
              />
              <CardImgOverlay className="p-4">
                <CardTitle>Card Title</CardTitle>
                <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                    This content is a little bit longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card body inverse hover color="dark" shadow>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <hr />
              <Button>Button</Button>
            </Card>
          </Col>
          <Col xs="12" sm="6" md="4" lg="3">
            <Card body outline hover color="primary" shadow>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
              <Button color="second">Button</Button>
            </Card>
          </Col>
        </Row>
      </div>,

      <CardTitle tag="h4" key="cardtitle2" className="mt-4">Card Group</CardTitle>,

      <CardGroup key="cardgroup2">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardGroup>,

      <CardTitle tag="h4" key="cardtitle3" className="mt-5">Card Deck</CardTitle>,

      <CardDeck key="carddeck3">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>,

      <CardTitle tag="h4" key="cardtitle4" className="mt-5">Card Columns</CardTitle>,

      <CardColumns key="cardcolumns4">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
        </Card>
        <Card body inverse color="secondary">
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
        <Card body inverse color="dark">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Button</Button>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content.
                This card has even longer content than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card body inverse color="primary">
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </CardColumns>,

      <Card key="props1">
        <CardHeader>Card Properties</CardHeader>
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
                <td>Adds a 'card' and 'card-body' class to tag</td>
              </tr>
              <tr>
                <th scope="row">className</th>
                <td>string</td>
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
                <th scope="row">inverse</th>
                <td>bool</td>
                <td></td>
                <td>Sets text color to white</td>
              </tr>
              <tr>
                <th scope="row">outline</th>
                <td>bool</td>
                <td></td>
                <td>Sets text color to white</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props2">
        <CardHeader>CardBody Properties</CardHeader>
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
                <th scope="row">indent</th>
                <td>bool</td>
                <td></td>
                <td>Adds 'card-body-indent' class which adds extra side padding.</td>
              </tr>
              <tr>
                <th scope="row">tag</th>
                <td>oneOfType</td>
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props3">
        <CardHeader>CardColumns Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props4">
        <CardHeader>CardDeck Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props5">
        <CardHeader>CardFooter Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props6">
        <CardHeader>CardGroup Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props7">
        <CardHeader>CardHeader Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props8">
        <CardHeader>CardImg Properties</CardHeader>
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
                <th scope="row">bottom</th>
                <td>bool</td>
                <td></td>
                <td>Adds class 'card-img-bottom'. Useful when card has rounded corners.</td>
              </tr>
              <tr>
                <th scope="row">className</th>
                <td>string</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">tag</th>
                <td>oneOfType</td>
                <td>'div'</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">top</th>
                <td>bool</td>
                <td></td>
                <td>Adds class 'card-img-top'. Useful when card has rounded corners.</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props9">
        <CardHeader>CardImgOverlay Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props10">
        <CardHeader>CardLink Properties</CardHeader>
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
                <th scope="row">innerRef</th>
                <td>oneOfType</td>
                <td></td>
                <td>Ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).</td>
              </tr>
              <tr>
                <th scope="row">tag</th>
                <td>oneOfType</td>
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props11">
        <CardHeader>CardSubtitle Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props12">
        <CardHeader>CardText Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,

      <Card key="props13">
        <CardHeader>CardTitle Properties</CardHeader>
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
                <td>'div'</td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>,
    ]}
  />
);

export default UiCard;
