import React from 'react';
import classnames from 'classnames';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import {Component} from 'react';

import gridClassName from './gridClassName';

class SubmitField extends Component {
  static contextType = context;

  render() {
    const {className, disabled, inputClassName, inputRef, value, wrapClassName, ...props} = this.props;
    const {error, state} = this.context.uniforms;

    const hasWrap = !!(state.grid || wrapClassName);

    const blockInput = (
      <input
        className={inputClassName}
        disabled={disabled === undefined ? !!(error || state.disabled) : disabled}
        ref={inputRef}
        type="submit"
        {...(value ? {value} : {})}
      />
    );

    return (
      <div className={classnames(className, {'has-danger': error, row: state.grid})} {...filterDOMProps(props)}>
        {hasWrap && (
          <label className={classnames('form-control-label', gridClassName(state.grid, 'label'))}>&nbsp;</label>
        )}

        {hasWrap && <div className={classnames(wrapClassName, gridClassName(state.grid, 'input'))}>{blockInput}</div>}

        {!hasWrap && blockInput}
      </div>
    );
  }
}

SubmitField.defaultProps = {inputClassName: 'btn btn-primary'};

export default SubmitField;
