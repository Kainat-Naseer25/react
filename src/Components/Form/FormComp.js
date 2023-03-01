import React, {useState} from 'react';
import './FormComp.css';
import addimage from './addimage.png';
import { Form, FormGroup, Label, Input, Button  } from 'reactstrap';

function FormComp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleInput = () => {
    console.log(name, email, phone);
    
  };

  return (
    <div>
    <Form>
    
    <p className="addContact"> Add Contact</p>
    <FormGroup className='form'><Label for="exampleName"> Name </Label>
    <Input id="exampleName" name="text" placeholder="Enter Your Name" onChange={e => setName(e.target.value)} type="text" /></FormGroup>

    <FormGroup className='form'><Label for="exampleEmail"> Email </Label>
    <Input id="exampleEmail" name="email" placeholder="Enter Your Email Address" onChange={e => setEmail(e.target.value)} type="email" /></FormGroup>

    <FormGroup className='form'><Label for="examplePhone"> Phone </Label>
    <Input id="examplePhone" name="phone" placeholder="Enter Your Phone Number" onChange={e => setPhone(e.target.value)} type="tel" /></FormGroup>

    <img src={addimage} alt="addimage.png" width="200px" height="200px"/>

    <FormGroup className='form'><Label for="exampleFile"> File </Label>
    <Input id="exampleFile" name="file" type="file" /></FormGroup>

    <FormGroup tag="fieldset" className='form'>
    <legend> Gender </legend>
    
    <FormGroup check inline><Input name="radio1" type="radio" />
    {' '}
    <Label check> male </Label></FormGroup>

    <FormGroup check inline><Input name="radio1" type="radio" />
    {' '}
    <Label check> female </Label></FormGroup>
    
    </FormGroup>
    <Button onClick={handleInput}>Add Contact</Button>

    </Form>
    </div>

  );
}
export default FormComp;