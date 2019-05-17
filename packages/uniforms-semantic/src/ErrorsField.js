import React from 'react';
import classnames from 'classnames';
import context from 'uniforms/context';
import filterDOMProps from 'uniforms/filterDOMProps';
import nothing from 'uniforms/nothing';
import {Component} from 'react';

class ErrorsField extends Component {
  static contextType = context;

  render() {
    const {children, className, ...props} = this.props;
    const {error, schema} = this.context.uniforms;

    return !error && !children ? (
      nothing
    ) : (
      <div className={classnames('ui', className, 'error message')} {...filterDOMProps(props)}>
        {children}

        <ul className="list">
          {schema.getErrorMessages(error).map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ErrorsField;
