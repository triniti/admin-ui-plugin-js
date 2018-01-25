import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, Col, MainContent, Media, Row } from '../../../../src/components';

const UiMedia = () => (
  <MainContent>
    <Card>
      <CardHeader spacing="lg" inset>Media Left</CardHeader>
      <CardBody spacing="lg">
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


      <CardHeader spacing="lg" inset>Vertical Alignment</CardHeader>
      <CardBody spacing="lg">
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

      <CardHeader spacing="lg" inset>Media List</CardHeader>
      <CardBody spacing="lg">
        <Row>
          <Col>
            <Media list>
              <Media tag="li">
                <Media left hoverOutline href="#">
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


      <CardHeader spacing="lg" inset>Media Hover</CardHeader>
      <CardBody spacing="lg">
        <Media left hover href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Media left hover href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Media left hover href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Row>
          <Col>
            <Media heading>Media Hover inside MediaList</Media>
            <Media list>
              <Media tag="li">
                <Media left hover href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
                <Media left hover href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
                <Media left hover href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
      </CardBody>

      <CardHeader spacing="lg" inset>Media HoverOutline</CardHeader>
      <CardBody spacing="lg">
        <Media left hoverOutline href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Media left hoverOutline href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Media left hoverOutline href="#">
          <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
        </Media>
        <Row>
          <Col>
            <Media heading>Media HoverOutline inside MediaList</Media>
            <Media list>
              <Media tag="li">
                <Media left hoverOutline href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
                <Media left hoverOutline href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
                <Media left hoverOutline href="#">
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=150%C3%97150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
      </CardBody>
    </Card>
  </MainContent>
);

export default UiMedia;
