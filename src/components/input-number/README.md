# InputNumber

The InputNumber component provides a wrapper of [react-numeric-input](https://github.com/vlad-ignatov/react-numeric-input) in triniti admin-ui-plugin. It adapts all react-numeric-input props and features.

[Read More](https://github.com/vlad-ignatov/react-numeric-input/blob/master/README.md)

## how to use
```jsx harmony
import { FormGroup, InputNumber } from 'admin-ui';

// this is important, the onChange listener is special on this component 
const handleInputNumberChange = (valueAsNumber, valueAsString, inputElem) => console.log(valueAsNumber, valueAsString, inputElem);

<FormGroup inline>
  <span className="ml-3" style={{ width: '80px' }}>
    <InputNumber size="sm" min={0} max={100} step={0.1} name="inputnumber" id="inputnumber" value={this.state.inputNumberValue} onChange={handleInputNumberChange} />
  </span>
</FormGroup>
```


