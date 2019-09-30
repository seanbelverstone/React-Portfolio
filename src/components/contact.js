import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Example extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			formControls: {
				name: {
					value: ""
				},
				email: {
					value: ""
				},
				telephone: {
					value: ""
        },
        text: {
          value: ""
        }
			}
		};

		this.changeHandler = this.changeHandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	// Setting state for the values
	changeHandler(event) {

		const name = event.target.name;
		const value = event.target.value;

		this.setState({
			formControls: {
				...this.state.formControls,
				[name]: {
					...this.state.formControls[name],
					value
				}
			}

		});
	}

	onSubmit() {
		const name = this.state.formControls.name.value;
		const email = this.state.formControls.email.value;
    const telephone = this.state.formControls.telephone.value;
    const text = this.state.formControls.text.value;

		const data = {
			name: name,
			email: email,
      telephone: telephone,
      text: text
    };

    console.log(data);

  }


  render() {
    return (
      <AvForm id="form" onSubmit={this.handleSubmit}>
        <h2>Contact Form</h2>
        <AvField 
          name="name" 
          label={<FontAwesomeIcon icon="user" />} 
          type="text" placeholder="Your name" 
          value={this.state.formControls.name.value} 
          onChange={this.changeHandler}
          />

        <AvField 
          name="email" 
          label={<FontAwesomeIcon icon="envelope-open-text" />} 
          type="email" 
          placeholder="Email address" 
          value={this.state.formControls.email.value} 
          onChange={this.changeHandler}
          />

        <AvField 
          name="telephone" 
          label={<FontAwesomeIcon icon="phone" />} 
          type="tel" 
          placeholder="Telephone number" 
          value={this.state.formControls.telephone.value} 
          onChange={this.changeHandler}
          />

      <FormGroup>

      <Label>
        <FontAwesomeIcon icon="comment-alt" />
      </Label>

      <Input 
        type="textarea" 
        name="text" 
        id="message" 
        placeholder="Write your message here" 
        value={this.state.formControls.text.value} 
        onChange={this.changeHandler} 
        />

      </FormGroup>

      <Button 
        color="primary" 
        onClick={this.onSubmit}>
        Submit
      </Button>

      </AvForm>

    );
  }
}