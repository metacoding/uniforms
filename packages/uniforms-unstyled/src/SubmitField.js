import React from 'react';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import {useContext} from 'react';

function SubmitField({disabled, inputRef, value, ...props}) {
  const {error, state} = useContext(context).uniforms;

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

export default SubmitField;
