# CreateModalButton

The CreateModalButton component provides a wrapper of `Button` in triniti admin-ui-plugin. Gives the button ability to call a `Modal` popup. It adapts all `Button` props and features.

## props
+ modal - Component, required. Lazy loaded Modal. The modal component which has to be exported by `createLazyComponent`
+ text - String, optional. The button text. e.g: text="Create Article". default: 'Create'
+ All other `Button` props.

## how to use
```jsx harmony
import Modal from 'path/to/lazy/loaded/Modal';
import { CreateModalButton } from 'admin-ui';

<div>
  <CreateModalButton
    className="flex-order-1"
    color="info"
    icon="add-item"
    modal={Modal}
    outline
    onClick={() => console.info('%c [onClick] This button open up a modal', 'background: #222; color: #bada55')}
    text="Create Page"
  />,
</div>
```





