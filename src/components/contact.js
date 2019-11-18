import React from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Button, FormGroup, Label, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Recaptcha from "react-google-invisible-recaptcha";
import emailjs from "emailjs-com";


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
      },
      confirmation: ""
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

  // Begins validation of user for recaptcha
	onSubmit = () => {
    this.recaptcha.execute();
  }

  // If successful, this function runs. It sends an email using emailjs.
  onResolved = () => {

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
    emailjs.send("gmail", "portfolio_template", data, "user_hCtShpO14VJ1zNpxU2xRi")
      .then(response => {
        console.log("Success", response.status, response.text);
      }, (err) => {
        console.log("Failed", err)

      });

      this.showConfirmation();

  }  

  // Sets the state of a success <p> tag to the following and clears the form.
  showConfirmation = () => {
    this.setState({confirmation: "Success! Message Sent."});
    this.form.reset();
    this.setState(prevState => ({
      formControls: {
        ...prevState.formControls,
          text: {
            ...prevState.formControls.text,
            value: ""
          }
        }
      }));

    setTimeout(() => {
      this.setState({confirmation: ""})
    }, 5000);

    
  }

  render() {
    return (
      <AvForm id="form" onSubmit={this.handleSubmit} ref={c => this.form = c}>
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
      <p id="confirmationMessage">{this.state.confirmation}</p>

      <Recaptcha 
        ref={ref => this.recaptcha = ref}
        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_ID}
        onResolved={this.onResolved}
        />

      </AvForm>

    );
  }
}