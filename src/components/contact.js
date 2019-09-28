import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Example extends React.Component {

  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }


  sendEmail() {
    console.log("Well done");
  }



  render() {
    return (
      <AvForm id="form">
        <h2>Contact Form</h2>
        <AvField name="name" label={<FontAwesomeIcon icon="user" />} type="text" placeholder="Your name" />
        <AvField name="email" label={<FontAwesomeIcon icon="envelope-open-text" />} type="email" placeholder="Email address" />
        <AvField name="telephone" label={<FontAwesomeIcon icon="phone" />} type="tel" placeholder="Telephone number" />
      <FormGroup>
      <Label>
        <FontAwesomeIcon icon="comment-alt" />
      </Label>
      <Input type="textarea" name="text" id="message" placeholder="Write your message here" />
      </FormGroup>
      <Button color="primary" onClick={this.sendEmail}>Submit</Button>
      </AvForm>

    );
  }
}