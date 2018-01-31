/* eslint-disable no-alert */
import React from 'react';
import { Card, CardBody, CardHeader, Datalist, Screen } from '../../../../src/components';
import Sidenav from '../../components/sidenav';

const fields = [
  {
    input: {
      name: 'whatever',
    },
    addon: {},
    meta: {},
  },
  {
    input: {
      name: 'whatever2',
    },
    addon: {},
    meta: {
      touched: true,
      error: 'this one has an error.',
    },
  },
  {
    input: {
      name: 'whatever3',
    },
    addon: {
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNyIgaGVpZ2h0PSIxNyIgdmlld0JveD0iMCAwIDE3IDE3Ij48cGF0aCBkPSJNMTAuOTM1IDIuMDE2QTEuOTk5IDEuOTk5IDAgMCAwIDkgLjVjLS45MzIgMC0xLjcxLjY0My0xLjkzMSAxLjUxNkgzLjV2MWgxMXYtMWgtMy41NjV6TTkgMS41Yy4zODIgMCAuNzA1LjIyMS44NzUuNTE2SDguMTQyQS45ODguOTg4IDAgMCAxIDkgMS41ek0xMyA0aDF2MTAuNTE2YzAgLjgyNy0uNjczIDEuNS0xLjUgMS41aC03Yy0uODI3IDAtMS41LS42NzMtMS41LTEuNVY0aDF2MTAuNTE2YS41LjUgMCAwIDAgLjUuNWg3YS41LjUgMCAwIDAgLjUtLjVWNHpNOCA1djhIN1Y1aDF6bTMgMHY4aC0xVjVoMXoiLz48L3N2Zz4=',
      show: true,
      handleClick: () => window.alert('really top notch clicking there buddy!'),
    },
    meta: {
      touched: true,
      error: 'this one has an error and an addon image with a handleClick prop.',
    },
  },
];

const options = [];

const getOptions = () => {
  if (!options.length) {
    for (let i = 0; i < 30; i += 1) {
      options.push(Math.random().toString(36).substring(2));
    }
  }

  return options;
};

export default () => (
  <Screen
    header="Datalists"
    sidenav={<Sidenav activeScreen="datalists" />}
    sidenavHeader
    body={
      <Card>
        <CardHeader>A few Datalists with random options</CardHeader>
        <CardBody>
          {fields.map(({ addon, input, meta }) => (
            <Datalist
              key={input.name}
              addon={addon}
              input={input}
              meta={meta}
              options={getOptions()}
            />
          ))}
        </CardBody>
      </Card>
    }
  />
);