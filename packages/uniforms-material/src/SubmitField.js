import Button from '@material-ui/core/Button';
import React from 'react';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Component} from 'react';

class SubmitField extends Component {
  static contextType = context;

  render() {
    const {children, disabled, inputRef, label, value, ...props} = this.props;
    const {error, state} = this.context.uniforms;

    return (
      <Button
        disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
        ref={inputRef}
        type="submit"
        value={value}
        {...filterDOMProps(props)}
      >
        {children || label}
      </Button>
    );
  }
}

SubmitField.defaultProps = {label: 'Submit', variant: 'contained'};

export default SubmitField;
