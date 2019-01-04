import React from 'react';
import Form from '../Form/Form';

class Signin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      singInEmail: '',
      singInPassword: ''
    };
  }

  onEmailChange = event => {
    this.setState({ singInEmail: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ singInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.singInEmail,
        password: this.state.singInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };

  render() {
    return (
      <Form
        formName="Sign In"
        onEmailChange={this.onEmailChange}
        onPasswordChange={this.onPasswordChange}
        onSubmitSignIn={this.onSubmitSignIn}
      />
    );
  }
}

export default Signin;
