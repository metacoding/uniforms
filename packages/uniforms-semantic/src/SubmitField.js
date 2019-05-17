import React from 'react';
import classnames from 'classnames';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Component} from 'react';

class SubmitField extends Component {
  static contextType = context;

  render() {
    const {className, disabled, inputRef, value, ...props} = this.props;
    const {error, state} = this.context.uniforms;

    return (
      <input
        className={classnames('ui', className, 'button')}
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
