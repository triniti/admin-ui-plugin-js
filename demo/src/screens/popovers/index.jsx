import React from 'react';
import PrimaryActions from '../../components/primary-actions';
import Sidenav from '../../components/sidenav';
import { Button, Card, CardBody, CardHeader, Col, Collapse, Icon, IconGroup, Input, InputGroup, InputGroupAddon, Popover, PopoverHeader, PopoverBody, Row, Screen, ScrollableContainer, Table } from '../../../../src/components';
import PopoverItem from './PopoverItem';
import './styles.scss';

class UiPopover extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleCode1 = this.toggleCode1.bind(this);
    this.toggleCode2 = this.toggleCode2.bind(this);

    this.state = {
      popovers: [
        {
          placement: 'left',
          text: 'Left',
        },
        {
          placement: 'top',
          text: 'Top',
        },
        {
          placement: 'bottom',
          text: 'Bottom',
        },

        {
          placement: 'right',
          text: 'Right',
        },
      ],
      collapseCode1: false,
      popoverOpen: false,
    };
  }

  toggleCode1() {
    this.setState({ collapseCode1: !this.state.collapseCode1 });
  }

  toggleCode2() {
    this.setState({ collapseCode2: !this.state.collapseCode2 });
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <Screen
        sidenav={<Sidenav activeScreen="popovers" />}
        sidenavHeader
        header="Popovers"
      // tabs={[
      //   { to: '/welcome', text: 'Tab1' },
      //   { to: '#/test2', text: 'Tab2' },
      // ]}
        primaryActions={<PrimaryActions />}
        body={[
          <Card key="popovers">
            <CardHeader>Popovers
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode1} active={this.state.collapseCode1}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode1}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from '@triniti/admin-ui-plugin/components';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover1" onClick={this.toggle}>
          Launch Popover
        </Button>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
      </div>
    );
  }
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody className="text-center">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              { this.state.popovers.map((popover, i) => <PopoverItem key={i} item={popover} id={i} />)}
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </CardBody>
          </Card>,

          <Card key="popover-example">
            <CardHeader>Scrollable Popover
              <Button radius="circle" color="hover-bg" onClick={this.toggleCode2} active={this.state.collapseCode2}>
                <Icon imgSrc="code" size="md"/>
              </Button>
            </CardHeader>
            <Collapse isOpen={this.state.collapseCode2}>
              <CardBody className="pl-5 bg-light">
<pre>
<code>{`import React from 'react';
import { Button, Icon, Popover, PopoverHeader, PopoverBody, ScrollableContainer } from '@triniti/admin-ui-plugin/components';
import './styles.scss'; // requires custom popover-scrollable styles

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="Popover2" onClick={this.toggle} color="hover" radius="circle">
          <Icon imgSrc="plus-outline" size="xl"/>
        </Button>
        <Popover placement="auto" i21 sOpen={this.state.popoverOpen} target="Popover2" toggle={this.toggle} className="popover-scrollable">
          <ScrollableContainer>
          <PopoverHeader className="text-center">Popover with Scrollable Container</PopoverHeader>
          <PopoverBody>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisi arcu, sollicitudin ut blandit a, maximus scelerisque dui. Integer eleifend nibh eget turpis gravida, in varius nulla gravida. Proin rutrum tortor ac arcu imperdiet porta. Nam justo ex, egestas ut nulla eget, laoreet luctus erat. Ut malesuada eget leo ut maximus. Morbi ligula magna, vehicula eu porta ac, fermentum in elit. Nulla facilisi. Phasellus feugiat iaculis felis. Proin nec convallis neque, vitae condimentum orci.</p>
            <p>Nunc a sem eget elit pretium varius. Donec sit amet congue sem. Nullam interdum erat vitae lorem lacinia, dapibus varius felis molestie. Nulla consequat feugiat ultricies. Proin sed lectus ut massa dignissim mattis. Morbi vulputate elit quis felis suscipit accumsan. Nam suscipit dapibus nibh, id ullamcorper sapien sollicitudin vel. Nunc augue arcu, vulputate vitae interdum eget, bibendum a massa. Aliquam vehicula rhoncus tristique. Vivamus sed magna consectetur, venenatis quam eu, porta tortor. Aliquam vitae lorem porttitor, scelerisque velit non, vehicula leo. Nullam at libero ac turpis porttitor gravida.</p>
            <p>Quisque non elit nec nisl pulvinar malesuada. Etiam eget dui lectus. Nunc eu dui ac purus elementum tempor sodales ut ligula. Etiam ut luctus dui. Donec pretium, libero sed malesuada interdum, sem nisl cursus sem, non fringilla libero diam non ex. Maecenas nec felis mattis eros varius egestas. Integer auctor lorem in mi tristique semper. Aliquam vitae massa et ligula porta pretium at in ante. Integer semper vel tellus in mollis. Nullam nec erat nec mi volutpat blandit. Suspendisse posuere malesuada arcu eu accumsan. Etiam lobortis venenatis aliquet.</p>
            <p>Ut vulputate, lorem at rhoncus efficitur, arcu nisl semper ex, eu finibus quam ipsum ac sem. Sed tempus dignissim iaculis. Curabitur lobortis fringilla mauris eu aliquet. Mauris facilisis iaculis nisl a fermentum. Duis fermentum lacus non velit posuere, eu dictum nunc mollis. Curabitur vel dolor purus. In porta nec neque ut consequat. Sed sed est id dolor imperdiet gravida.</p>
            <p>Quisque ornare maximus auctor. Aenean vel pellentesque metus. Nullam purus lacus, vehicula vulputate tincidunt quis, scelerisque id turpis. Aenean venenatis nisi molestie velit malesuada convallis. Ut pulvinar mi id tempus sollicitudin. Nullam lacus purus, blandit at fermentum at, viverra eget ipsum. Suspendisse potenti. Nam non elit est. Maecenas felis lectus, fringilla sit amet volutpat sodales, placerat ut lorem. Phasellus cursus vestibulum tincidunt. Etiam aliquam pharetra est vel vulputate. Fusce at posuere tellus. Fusce lacinia ligula vitae dui auctor condimentum.</p>
          </PopoverBody>
          </ScrollableContainer>
        </Popover>
      </div>
    );
  }
}`}</code></pre>
              </CardBody>
            </Collapse>
            <CardBody>
              <Button id="Popover2" onClick={this.toggle} color="hover" radius="circle">
                <Icon imgSrc="plus-outline" size="xl"/>
              </Button>
              <Popover placement="auto" isOpen={this.state.popoverOpen} target="Popover2" toggle={this.toggle} className="popover-scrollable">
                <ScrollableContainer>
                <PopoverHeader className="sticky-top">
                  <InputGroup>
                    <Input
                      className="form-control"
                      name="q"
                      onChange={this.handleSearch}
                      placeholder="Search Blocks..."
                      type="search"
                      autoComplete="off"
                      theme="white"
                    />
                    <InputGroupAddon addonType="append">
                      <Button color="secondary">
                        <Icon imgSrc="search" className="mr-0" />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </PopoverHeader>
                <PopoverHeader className="text-center">Twitter</PopoverHeader>
                <PopoverBody>
                  <div className="popover-row">
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="timeline" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Timeline</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="collection" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Collection Timeline</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="bolt-outline" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Moment</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="search" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Search Timeline</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="tweet" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Tweet</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="user" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter User Timeline</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="twitter" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Twitter Video</div>
                    </a>
                  </div>
                </PopoverBody>
                <PopoverHeader className="text-center">Facebook</PopoverHeader>
                <PopoverBody>
                  <div className="popover-row">
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="pencil" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="facebook" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Facebook Post</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="facebook" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Facebook Video</div>
                    </a>
                  </div>
                </PopoverBody>
                <PopoverHeader className="text-center">Other</PopoverHeader>
                <PopoverBody>
                  <div className="popover-row">
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="pin-outline-slanted" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="pinterest" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Pinterest Pin</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="apps" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="pinterest" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Pinterest Board</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="photo" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="instagram" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Instagram Media</div>
                    </a>
                    <a className="button-icon-group">
                      <Icon imgSrc="code" alert size="sm" radius="rounded" border/>
                      <div>Code</div>
                    </a>
                    <a className="button-icon-group">
                      <Icon imgSrc="iframe-text" size="xxl"/>
                      <div>iFrame</div>
                    </a>
                    <a className="button-icon-group">
                      <Icon imgSrc="google-maps" size="xxl"/>
                      <div>Google Maps</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="pencil" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="imgur" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Imgur Post</div>
                    </a>
                  </div>
                </PopoverBody>
                <PopoverHeader className="text-center">Video</PopoverHeader>
                <PopoverBody>
                  <div className="popover-row">
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="youtube" alert size="xxs" outline/>
                      </IconGroup>
                      <div>YouTube Video</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="playlist" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="youtube" alert size="xxs" outline/>
                      </IconGroup>
                      <div>YouTube Playlist</div>
                    </a>
                    <a className="button-icon-group">
                      <IconGroup left>
                        <Icon imgSrc="play-stroke" alert size="sm" radius="rounded" border/>
                        <Icon imgSrc="vevo" size="lg" className="bg-white"/>
                      </IconGroup>
                      <div>Vevo Video</div>
                    </a>
                  </div>
                </PopoverBody>
                </ScrollableContainer>
              </Popover>
            </CardBody>
          </Card>,

          <Card key="props">
            <CardHeader>Popover Properties</CardHeader>
            <CardBody>
              <Table hover responsive size="sm">
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
                  <th scope="row">container</th>
                  <td>oneOfType</td>
                  <td>body</td>
                  <td>Where to inject the popper DOM node<br/>
                      ([PropTypes.string, PropTypes.func, DOMElement])</td>
                </tr>
                <tr>
                  <th scope="row">delay</th>
                  <td>oneOfType</td>
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
                  <th scope="row">hideArrow</th>
                  <td>bool</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">innerClassName</th>
                  <td>string</td>
                  <td></td>
                  <td>Apply class to the inner-popover</td>
                </tr>
                <tr>
                  <th scope="row">isOpen</th>
                  <td>bool</td>
                  <td></td>
                  <td>Boolean to control the state of the popover</td>
                </tr>
                <tr>
                  <th scope="row">modifiers</th>
                  <td>object</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">placement</th>
                  <td>oneOf</td>
                  <td></td>
                  <td>'auto',
                      'auto-start',
                      'auto-end',
                      'top',
                      'top-start',
                      'top-end',
                      'right',
                      'right-start',
                      'right-end',
                      'bottom',
                      'bottom-start',
                      'bottom-end',
                      'left',
                      'left-start',
                      'left-end',
                </td>
                </tr>
                <tr>
                  <th scope="row">placementPrefix</th>
                  <td>string</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row">target</th>
                  <td>oneOfType</td>
                  <td>*<i>Required</i></td>
                  <td>PropTypes.string,<br/>
                      PropTypes.func,<br/>
                      DOMElement, (instanceof Element)</td>
                </tr>
                <tr>
                  <th scope="row">toggle</th>
                  <td>func</td>
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

export default UiPopover;
