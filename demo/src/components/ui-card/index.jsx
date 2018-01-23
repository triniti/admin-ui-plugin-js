import React from 'react';
import { Button, Card, CardBody, CardColumns, CardDeck, CardFooter, CardGroup, CardHeader, CardImg, CardImgOverlay, CardLink, CardText, CardTitle, CardSubtitle, CardsContainer, Col, Divider, Row } from '../../../../src/components';

const UiCard = () => (
  <div>
    <CardsContainer>
      <Row className="mb-3">
        <Col xs="12" sm="6" md="4" lg="3">
          <Card hover border>
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
          <Card hover border>
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
          <Card body hover className="text-center">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card hover border>
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
          <Card hover border>
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
          <Card hover border>
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
          <Card inverse hover>
            <CardImg
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
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
          <Card body inverse hover color="dark">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <hr />
            <Button>Button</Button>
          </Card>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3">
          <Card body border outline hover color="primary">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button color="second">Button</Button>
          </Card>
        </Col>
      </Row>
    </CardsContainer>

    <CardBody>
      <CardTitle tag="h4">Card Group</CardTitle>
      <Row>
        <Col>
          <CardGroup>
            <Card border>
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
            <Card border>
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
            <Card border>
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
          </CardGroup>
        </Col>
      </Row>

      <CardTitle tag="h4">Card Deck</CardTitle>
      <Row>
        <Col>
          <CardDeck>
            <Card border>
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
            <Card border>
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
            <Card border>
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
          </CardDeck>
        </Col>
      </Row>


      <CardTitle tag="h4">Card Columns</CardTitle>
      <Row>
        <Col>
          <CardColumns>
            <Card border>
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
            <Card border>
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
            <Card border>
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
          </CardColumns>
        </Col>
      </Row>
    </CardBody>
  </div>


);

export default UiCard;
