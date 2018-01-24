import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormFeedback, Input, InputGroup, InputGroupButton } from '../../components';

const Datalist = ({
  addon,
  input,
  options,
  meta: { touched, error },
  ...custom
}) => (
  <div>
    <InputGroup className="mt-1 mb-2">
      <Input list={input.name} valid={touched ? !error : null} {...input} {...custom} />
      {
        addon.show
        &&
        <InputGroupButton>
          <Button outline color="light" onClick={addon.handleClick}><img src={addon.img} alt="button" /></Button>
        </InputGroupButton>
      }
      <datalist id={input.name}>
        {options.map((option, index) => <option value={option} key={`${option}-${index}`} />)}
      </datalist>
    </InputGroup>
    { touched && error && <FormFeedback>{error.message}</FormFeedback> }
  </div>
);

Datalist.propTypes = {
  addon: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,

  custom: PropTypes.object,
};

Datalist.defaultProps = {
  custom: {},
};

export default Datalist;
