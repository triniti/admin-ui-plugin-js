import React from 'react';
import { Card, CardBlock, CardHeader, CardTitle, Col, Media, Row } from '../../../../src/components';

const UiMedia = () => {
  return (
    <Card>
      <CardHeader>Media Left</CardHeader>
      <CardBlock>
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
      </CardBlock>


      <CardHeader>Vertical Alignment</CardHeader>
      <CardBlock>
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

            <Media className={'align-items-center'}>
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

            <Media className={'align-items-end'}>
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
      </CardBlock>

      <CardHeader>Media List</CardHeader>
      <CardBlock>
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
                  <Media object src="https://placeholdit.imgix.net/~text?txtsize=16&txt=80%C3%9780&w=80&h=80" alt="Generic placeholder image" className={'rounded-circle'} />
                </Media>
              </Media>
            </Media>
          </Col>
        </Row>
      </CardBlock>



      <CardHeader>Media Hover</CardHeader>
      <CardBlock>
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
      </CardBlock>

      <CardHeader>Media HoverOutline</CardHeader>
      <CardBlock>
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
      </CardBlock>
    </Card>
  );
};

export default UiMedia;
