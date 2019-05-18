import React from 'react';
import classnames from 'classnames';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';
import {useContext} from 'react';

function ErrorsField({children, className, ...props}) {
  const {error, schema} = useContext(context).uniforms;

  return !error && !children ? (
    nothing
  ) : (
    <div className={classnames('panel panel-danger', className)} {...filterDOMProps(props)}>
      <div className="panel-body">
        {children}
        {schema.getErrorMessages(error).map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default ErrorsField;
