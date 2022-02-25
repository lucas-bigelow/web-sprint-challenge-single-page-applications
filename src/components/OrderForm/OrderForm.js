import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import formSchema from '../../validation';
import './OrderForm.css';

const initialFormValues = {
  name: '',
  size: 'small',
  pepperoni: false,
  onion: false,
  pepper: false,
  mushroom: false,
  special:''
}

function OrderForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  // validation
  const validate = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(setErrorMessage(''))
      .catch(err => setErrorMessage(err.message))
  }

  // 'home' button handler
  const handleBack = evt => {
    evt.preventDefault();
    history.push('/');
  }

  // change event handler, modified to work with checkboxes
  const change = evt => {
    const { name, type, value, checked } = evt.target;
    const newVal = type === 'checkbox' ? checked : value;
    // for now, only validating name for MVP
    if (name === 'name') {
      validate(name, newVal);
    }
    setFormValues({...formValues, [name]: newVal});
    console.log(formValues);
  }

  // 'submit' event handler

  return(
    <>
      <button onClick={handleBack}>Home</button>
      <form id='pizza-form'>
        <label>
          Name for Order:
          <input 
            name='name'
            type='text'
            onChange={change}
            value={formValues.name}
            id='name-input'
          />
        </label>
        <label>
          Pizza Size:
          <select name='size' id='size-dropdown' onChange={change}>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='enormous'>Enormous</option>
          </select>
        </label>
        <label>
          Pepperoni?
          <input 
            name='pepperoni'
            type='checkbox'
            onChange={change}
            value={formValues.pepperoni}
          />
        </label>
        <label>
          Onion?
          <input 
            name='onion'
            type='checkbox'
            onChange={change}
            value={formValues.onion}
          />
        </label>
        <label>
          Bell Peppers?
          <input 
            name='peppers'
            type='checkbox'
            onChange={change}
            value={formValues.peppers}
          />
        </label>
        <label>
          Mushrooms?
          <input 
            name='mushroom'
            type='checkbox'
            onChange={change}
            value={formValues.mushroom}
          />
        </label>
        <label>
          Special Instructions:
          <input 
            name='special'
            type='text'
            onChange={change}
            value={formValues.special}
            id='special-text'
          />
        </label>
        {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        <button type='submit' id='order-button'>Add to Order</button>
      </form>
    </>
  )
}

export default OrderForm;