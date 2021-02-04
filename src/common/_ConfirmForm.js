import React, { Component, createRef } from 'react';

type Props = {
    /**
     * Function to step on click.
     */
    onStep: Function;


    /**
     * Function set Verification code to upper state 
     */
    onSetCode: Function;
};

type State = {

    verificationCode: String[];
};


export class ConfirmForm extends Component<Props, State> {

    state: State;

    static defaultProps = {
        type: 'text',
        fields: 6,
        autoFocus: true
    }

    /**
     * Initializes a new {@code ConfirmForm} instance.
     *
     * @param {Props} props - The React {@code Component} props to initialize
     * the new {@code ConfirmForm} instance with.
     */
    constructor(props){
        super(props);

        const { fields } = props;
        const autoFocusIndex = 0;
        
        this.state = {
            verificationCode: Array(fields).fill(''),
            autoFocusIndex
        };

        this.iRefs = [];
        for (let i = 0; i < fields; i++) {
            this.iRefs.push(createRef())
        }

        this._changeInput = this._changeInput.bind(this);
        this._submitVerificationCode = this._submitVerificationCode.bind(this); 
    }

    /**
     * Render
     *
     * @private
     * @returns {void}
     */
    render() {

        const {
            autoFocusIndex
        } = this.state;

        const {
            autoFocus,
            type
        } = this.props;

        const inputsCode = this.state.verificationCode.map((value, index) => {
            return (
                <fieldset 
                    key = { index }
                    style = { {display: 'inline-block'} }>
                    
                    <input 
                        type = { type }
                        autoFocus = { autoFocus && index === autoFocusIndex }
                        id = { index }
                        style = { {marginRight: '8px', width: '20px'} }
                        value = { value }
                        ref = { this.iRefs[index] }
                        maxLength = '1'
                        onChange = { this._changeInput }/>
                </fieldset>
            );
        })

        return (
            <>
                <h1>Confirmation Access</h1>

                <form>
                    <h2>Enter the six-digit verification code.</h2>

                    { inputsCode }

                    <button onClick = { this._submitVerificationCode }>Continue</button>
                </form>
            </>
        );
    }

    /**
     * Set state after changed verification code.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @private
     * @returns {void}
     */
    _changeInput(event) {
        const { value, id } = event.target;
        let {
            verificationCode,
            autoFocusIndex
        } = this.state;

        verificationCode[id] = value;
        autoFocusIndex = autoFocusIndex + 1
        
        this.setState({ verificationCode, autoFocusIndex });
    }

    /**
     * Submit verification code.
     *
     * @param {Event} event - The HTML Event which details the form submission.
     * @protected
     * @returns {void}
     */
    _submitVerificationCode(event) {
        event.preventDefault();

        const code = this.state.verificationCode;
        const isEvery = code.every(v => Boolean(v));

        if (isEvery) {
            this.props.onSetCode(code.join(''));
            this.props.onStep(3);
        }
    }
}