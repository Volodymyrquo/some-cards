import React, { Component } from 'react';
import { makeFetch, fetchAuth, END_POINTS } from '../common/functions';
import person from '../images/sumra/icon-person.svg';
import lock from '../images/sumra/icon-lock.svg';
import logout from '../images/sumra/icon-logout.svg';
import { connect } from 'react-redux';
import { _signIn } from '../redux/auth-reducer';

/**
 * type State
 */
type Props = {
  /**
   * Function change step authentification
   */
  onStep: Function,
};

/**
 * type State
 */
type State = {
  /**
   * User name
   */
  username: String,

  /**
   * Password
   */
  password: String,
};

/**
 * The Login form  rendering the login page.
 *
 * @extends Component
 */
class LoginForm extends Component<Props, State> {
  /**
   * constructor
   */
  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  /**
   * render
   */
  render() {
    let { className } = this.props;
    className += ' login-form';
    return (
      <div className={className}>
        <h1 className='h1-title'>Login with Sumra ID</h1>

        <form onSubmit={this._onFormSubmit}>
          <fieldset className='sumra-input-fieldset'>
            <legend>User name</legend>

            <img
              className='sumra-input-fieldset-icon'
              src={person}
              alt='person'
            />

            <input
              type='text'
              placeholder='Enter username'
              value={this.state.username}
              onChange={this._changeUserName}
            />
          </fieldset>

          <fieldset className='sumra-input-fieldset'>
            <legend>Password</legend>

            <img className='sumra-input-fieldset-icon' src={lock} alt='lock' />

            <input
              type='text'
              placeholder='Enter password'
              value={this.state.password}
              onChange={this._changePassword}
            />
          </fieldset>

          <button className='sumra-Button' type='submit'>
            <img
              className='sumra-Button-icon-left'
              src={logout}
              width='18'
              alt='logout'
            />
            <span>Sign up</span>
          </button>

          <div className='sumra-link-forgotPassword'>Forgot password?</div>
          <div className='sumra-link-createUser'>
            New user?
            <span onClick={this._goToRegistration}>Create a Sumra ID</span>
          </div>
        </form>
      </div>
    );
  }

  /**
   * Handler input user name
   *
   * @param {Event} event - The HTML Event which details the form submission.
   * @private
   * @returns {void}
   */
  _changeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  /**
   * Handler input password
   *
   * @param {Event} event - The HTML Event which details the form submission.
   * @private
   * @returns {void}
   */
  _changePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  /**
   * Prevents submission of the form and sign up user.
   *
   * @param {Event} event - The HTML Event which details the form submission.
   * @private
   * @returns {void}
   */
  _onFormSubmit = (event) => {
    debugger;
    event.preventDefault();

    if (this.state.username && this.state.password) {
      const { username, password } = this.state;

      this.props._signIn({ username, password });
    }
  };

  /**
   * Create user
   * @private
   * @returns {void}
   */
  /*   _signIn = () => {
    const { username, password } = this.state;

    fetchAuth({ username, password })
      .then((response) => response.json())
      .then((result) => {
        const {
          access_token,
          meet_token,
          expires_in,
          refresh_token,
          token_type,
        } = result;

        const { location, localStorage } = window;

        localStorage.setItem('access_token', access_token);
        location.href = 'https://meet.sumra.net/defaultRoom?jwt=' + meet_token;
      });
  };
 */
  /**
   * Back to the first step, registration
   * @private
   * @returns {void}
   */
  _goToRegistration = () => {
    this.props.onStep(1);
  };
}
const mapStateToProps = (state) => ({
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps, { _signIn })(LoginForm);
