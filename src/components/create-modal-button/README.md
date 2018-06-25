# CreateModalButton

The CreateModalButton component provides a wrapper of `Button` in triniti admin-ui-plugin. Gives the button ability to call a `Modal` popup. It adapts all `Button` props and features.

## props
+ modal - Promise, required. The import statement of a `Modal` component. e.g: `modal={import('paht/to/me-modal')}`
+ text - String, optional. The button text. e.g: text="Create Article". default: 'Create'
+ All other `Button` props.

## how to use
```jsx harmony
import { CreateModalButton } from 'admin-ui';

<div>
  <CreateModalButton
    className="flex-order-1"
    color="info"
    icon="add-item"
    modal={import('components/creation-modal')}
    outline
    onClick={() => console.info('%c [onClick] This button open up a modal', 'background: #222; color: #bada55')}
    text="Create Page"
  />,
</div>
```





