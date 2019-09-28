import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input} from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <AvForm id="form">
        <AvField name="name" label="Name" type="text" />
        <AvField name="email" label="Email Address" type="email" />
        <AvField name="telephone" label="Telephone Number" type="tel" />
      <FormGroup>
      <Label for="message">Write Your Message Here</Label>
      <Input type="textarea" name="text" id="message" />
      </FormGroup>
      <Button color="primary">Submit</Button>
      </AvForm>

    );
  }
}