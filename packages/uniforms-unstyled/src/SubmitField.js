import React from 'react';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Component} from 'react';

class SubmitField extends Component {
  static contextType = context;

  render() {
    const {disabled, inputRef, value, ...props} = this.props;
    const {error, state} = this.context.uniforms;

    return (
      <input
        disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
        ref={inputRef}
        type="submit"
        {...(value ? {value} : {})}
        {...filterDOMProps(props)}
      />
    );
  }
}

export default SubmitField;
