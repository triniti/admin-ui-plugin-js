import React from 'react';
import test from 'tape';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { TabContent, TabPane } from '../../../src/components';

let activeTab = '1';

test('Tabs:: should render', (t) => {
  activeTab = '1';
  const tab1 = mount(
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        Tab Content 1
      </TabPane>
      <TabPane tabId="2">
        TabContent 2
      </TabPane>
    </TabContent>,
  );

  t.equal(tab1.find('.tab-content').length, 1);
  t.equal(tab1.find('.tab-pane').length, 2);
  t.end();
});

test('Tabs:: should have tab1 as active', (t) => {
  activeTab = '1';
  const tab1 = mount(
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        Tab Content 1
      </TabPane>
      <TabPane tabId="2">
        TabContent 2
      </TabPane>
    </TabContent>,
  );

  t.equal(tab1.find('.tab-content .tab-pane').at(0).hasClass('active'), true);
  t.end();
});

test('Tabs:: should switch to tab2 as active when clicked', (t) => {
  activeTab = '2';
  const tab1 = mount(
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        Tab Content 1
      </TabPane>
      <TabPane tabId="2">
        TabContent 2
      </TabPane>
    </TabContent>,
  );

  t.equal(tab1.find('.tab-content .tab-pane').at(1).hasClass('active'), true);
  t.end();
});

test('Tabs:: should not setState when the active tab does not change during a prop update', (t) => {
  const tab1 = mount(<TabContent activeTab={1} />);
  const instance = tab1.instance();
  const setState = sinon.spy(instance, 'setState');

  tab1.setProps({ style: { textAlign: 'left' } });
  t.true(setState.notCalled);

  t.end();
});

test('Tabs:: should show no active tabs if active tab id is unknown', (t) => {
  activeTab = '3';
  const tab1 = mount(
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        Tab Content 1
      </TabPane>
      <TabPane tabId="2">
        TabContent 2
      </TabPane>
    </TabContent>,
  );
  /* Not sure if this is what we want. Toggling to an unknown tab id should
    render all tabs as inactive and should show no content.
    This could be a warning during development that the user is not having a proper tab ids.
    NOTE: Should this be different?
  */
  t.false(tab1.find('.tab-content .tab-pane').at(0).hasClass('active'));
  t.false(tab1.find('.tab-content .tab-pane').at(1).hasClass('active'));
  t.end();
});

test('Tabs:: should call setState when the active tab does change during a prop update', (t) => {
  const tab1 = mount(<TabContent activeTab={1} />);
  const instance = tab1.instance();
  const setState = sinon.spy(instance, 'setState');
  t.true(setState.notCalled);
  tab1.setProps({ activeTab: 2 });
  t.true(setState.called);
  t.end();
});

test('Tabs:: should render custom TabContent tag', (t) => {
  const wrapper = shallow(
    <TabContent tag="main" activeTab={activeTab}>
      <TabPane tabId="1">
        Tab Content 1
      </TabPane>
      <TabPane tabId="2">
        TabContent 2
      </TabPane>
    </TabContent>,
  );

  t.equal(wrapper.type(), 'main');
  t.end();
});

test('Tabs:: should render custom TabPane tag', (t) => {
  const wrapper = shallow(<TabPane tag="main" tabId="1">Tab Content 1</TabPane>, { context: {} });

  t.equal(wrapper.type(), 'main');
  t.end();
});
