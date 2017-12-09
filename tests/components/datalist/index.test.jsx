import React from 'react';
import test from 'tape';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { Datalist } from '../../../src/components';

test('Datalist:: should render with the intended options', (t) => {
  const config = {
    input: {
      name: 'whatever',
    },
    addon: {},
    meta: {},
  };

  const options = [];
  for (let i = 0; i < 10; i += 1) {
    options.push(Math.random().toString(36).substring(2));
  }

  const datalist = mount(<Datalist
    key={config.input.name}
    addon={config.addon}
    input={config.input}
    meta={config.meta}
    options={options}
  />);

  options.forEach((option) => {
    t.notEqual(datalist.html().indexOf(`<option value="${option}">`), -1);
  });
  t.end();
});

test('Datalist:: should be able to render with an error', (t) => {
  const config = {
    input: {
      name: 'whatever',
    },
    addon: {},
    meta: {
      touched: true,
      error: {
        message: 'this one has an error.',
      },
    },
  };
  const datalist = mount(<Datalist
    key={config.input.name}
    addon={config.addon}
    input={config.input}
    meta={config.meta}
    options={[]}
  />);
  t.equal(datalist.find('.invalid-feedback').text(), 'this one has an error.');
  t.end();
});

test('Datalist:: should be able to render with an addon img', (t) => {
  const config = {
    input: {
      name: 'whatever',
    },
    addon: {
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij48cGF0aCBkPSJNMTAuOTM1IDIuMDE2QTEuOTk5IDEuOTk5IDAgMCAwIDkgLjVjLS45MzIgMC0xLjcxLjY0My0xLjkzMSAxLjUxNkgzLjV2MWgxMXYtMWgtMy41NjV6TTkgMS41Yy4zODIgMCAuNzA1LjIyMS44NzUuNTE2SDguMTQyQS45ODguOTg4IDAgMCAxIDkgMS41ek0xMyA0aDF2MTAuNTE2YzAgLjgyNy0uNjczIDEuNS0xLjUgMS41aC03Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNVY0aDF2MTAuNTE2YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgLjUtLjVWNHpNOCA1djhIN1Y1aDF6bTMgMHY4aC0xVjVoMXoiLz48L3N2Zz4=',
      show: true,
      handleClick: () => {},
    },
    meta: {},
  };
  const datalist = mount(<Datalist
    key={config.input.name}
    addon={config.addon}
    input={config.input}
    meta={config.meta}
    options={[]}
  />);
  t.notEqual(datalist.find('img').first().html().indexOf('PHN2ZyB4bWxucz0iaHR0cDo'), -1);
  t.end();
});

test('Datalist:: should not render the addon img if the flag is not set', (t) => {
  const config = {
    input: {
      name: 'whatever',
    },
    addon: {
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij48cGF0aCBkPSJNMTAuOTM1IDIuMDE2QTEuOTk5IDEuOTk5IDAgMCAwIDkgLjVjLS45MzIgMC0xLjcxLjY0My0xLjkzMSAxLjUxNkgzLjV2MWgxMXYtMWgtMy41NjV6TTkgMS41Yy4zODIgMCAuNzA1LjIyMS44NzUuNTE2SDguMTQyQS45ODguOTg4IDAgMCAxIDkgMS41ek0xMyA0aDF2MTAuNTE2YzAgLjgyNy0uNjczIDEuNS0xLjUgMS41aC03Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNVY0aDF2MTAuNTE2YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgLjUtLjVWNHpNOCA1djhIN1Y1aDF6bTMgMHY4aC0xVjVoMXoiLz48L3N2Zz4=',
      show: false,
      handleClick: () => {},
    },
    meta: {},
  };
  const datalist = mount(<Datalist
    key={config.input.name}
    addon={config.addon}
    input={config.input}
    meta={config.meta}
    options={[]}
  />);
  t.equal(datalist.find('img').length, 0);
  t.end();
});

test('Datalist:: should call the handleClick prop when the img is clicked', (t) => {
  const config = {
    input: {
      name: 'whatever',
    },
    addon: {
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij48cGF0aCBkPSJNMTAuOTM1IDIuMDE2QTEuOTk5IDEuOTk5IDAgMCAwIDkgLjVjLS45MzIgMC0xLjcxLjY0My0xLjkzMSAxLjUxNkgzLjV2MWgxMXYtMWgtMy41NjV6TTkgMS41Yy4zODIgMCAuNzA1LjIyMS44NzUuNTE2SDguMTQyQS45ODguOTg4IDAgMCAxIDkgMS41ek0xMyA0aDF2MTAuNTE2YzAgLjgyNy0uNjczIDEuNS0xLjUgMS41aC03Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNVY0aDF2MTAuNTE2YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgLjUtLjVWNHpNOCA1djhIN1Y1aDF6bTMgMHY4aC0xVjVoMXoiLz48L3N2Zz4=',
      show: true,
      handleClick: sinon.spy(),
    },
    meta: {},
  };
  const datalist = mount(<Datalist
    key={config.input.name}
    addon={config.addon}
    input={config.input}
    meta={config.meta}
    options={[]}
  />);
  datalist.find('img').simulate('click');
  t.true(config.addon.handleClick.called);
  t.end();
});
