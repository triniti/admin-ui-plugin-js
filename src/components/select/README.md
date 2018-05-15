# select

The select component provides a wrapper of [react-select](https://github.com/JedWatson/react-select) in triniti admin-ui-plugin. It supports all react-select props and features.

## props
The `dispatch` function is expected to be from redux.  This is needed to allow the `<AlertBar>` to dismiss messages.  It may be expanded in the future but it is not likely that this component will become a "container" (connected to redux).  The goal is for this to be responsible for placing components and styling, not managing state. 

className, radius, size, theme, async, creatable, component

+ __className:__ `PropTypes.string` - Custom class names which will be merged together with all other code generated classes.
+ __raduis:__ `PropTypes.string` - A triniti prop that give the input field different radius classes, e.g: "round".
+ __size:__ `PropTypes.string` - A triniti prop that give the input field different size classes, e.g. "lg". 
+ __theme:__ `PropTypes.string` - A triniti props that give the input field different theme classes, e.g: "light". 
+ __async:__ `PropTypes.bool` - When async is `true`, the Select component will uses ReactSelect.Async component. When both async and creatable are `true`, Select component will uses ReactSelect.AsyncCreatable component.
+ __creatable:__ `PropTypes.bool` - When creatable is `true`, the Select component will uses ReactSelect.Creatable component. When both async and creatable are `true`, Select component will uses ReactSelect.AsyncCreatable component.
+ __component:__ `PropTypes.func` - The Select component will uses this provided component no matter what `async` and `creatalbe` values are. It must be one of ReactSelect functions (ReactSelect, ReactSelect.Async, ReactSelect.Creatable, ReactSelect.AsyncCreatalbe);
+ __forwardRef:__ `PropTypes.func` - A function that will receive and forward ReactSelect's ref prop up the parent component);

> All other props will pass thru to the final ReactSelect component.

## how to use
```jsx harmony
import { Select } from 'admin-ui';

<Select async multi loadOptions={this.loadOptions} radius="round" forwardRef={(el) => { this.selectorRef = el; }} />
```


### this is equivalent to
```jsx harmony
import Select from 'react-select';

<Select.Async multi loadOptions={this.loadOptions} radius="round" ref={(el) => { this.selectorRef = el; }} />
```
