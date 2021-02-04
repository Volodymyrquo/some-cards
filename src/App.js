import React, { Component } from 'react';
import './App.scss';
import { FirstForm } from './components/FirstForm';
import { ConfirmForm } from './components/ConfirmForm';
import { UserForm } from './components/UserForm';
import LoginForm from './components/LoginForm';

/**
 * The type of the React {@code Component} props of {@link AuthPage}.
 */
type Props = {
  /**
   * Additional CSS class names to add to the root of the authpage.
   */
  className: string,
};

/**
 * Represents the authentification page.
 *
 * @extends Component
 */
export default class AuthPage extends Component<Props, State> {
  static defaultProps = {
    className: 'authentification-form',
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,

      currentStep: 1,
      verificationCode: '',
    };

    this._goToStep = this._goToStep.bind(this);
    this._onSetVerificationCode = this._onSetVerificationCode.bind(this);
  }

  /**
   * Render
   */
  render() {
    const { className } = this.props;
    const getForm = () => {
      switch (this.state.currentStep) {
        case 1:
          return <FirstForm className={className} onStep={this._goToStep} />;
        case 2:
          return (
            <ConfirmForm
              className={className}
              onStep={this._goToStep}
              onSetCode={this._onSetVerificationCode}
            />
          );
        case 3:
          return <UserForm className={className} state={this.state} />;
        case 4:
          return <LoginForm className={className} onStep={this._goToStep} />;
        default:
          break;
      }
    };
    const step = getForm();

    return (
      <>
        <header className='sumra-header'>
          <div className='logotype'></div>
        </header>
        <main className='sumra-main'>{step}</main>
        <footer className='sumra-footer'></footer>
      </>
    );
  }

  /**
   *
   * @param {number} value
   */
  _goToStep(value) {
    this.setState({ currentStep: value });
  }

  /**
   *
   * @param {string} code
   */
  _onSetVerificationCode(code) {
    this.setState({ verificationCode: code.toUpperCase() });
  }
}
