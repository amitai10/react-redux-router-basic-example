import React, {Component} from 'react';
import { browserHistory } from 'react-router'; 
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InputField from '../common/InputField';
import * as loginActions from '../../actions/loginActions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      errors: ''
    }
  }

  onChangePassword = (e) => {
    this.setState({ ...this.state, password: e.target.value })
  }


  onChangeEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value})
  }
  

  onSubmit = (e) => {
    e.preventDefault();
    this.props.actions.login(this.state).then(() => {
      console.log("then");
      browserHistory.push('/greet')
    })
    .catch((err) => {
      this.setState({ ...this.state, errors: err})
    })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.errors === '' ? '' : <div className="alert alert-danger">{this.state.errors}</div>}
        <InputField name="email" onChange={this.onChangeEmail} />
        <InputField name="Password" onChange={this.onChangePassword}  />
        <input className="btn btn-primary btn-lg" type="submit" value="login"/>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(loginActions, dispatch),
    };
}

export default connect(null, mapDispatchToProps)(LoginForm);
