import PropTypes from 'prop-types';
import context from 'uniforms/context';
import {Component} from 'react';
import {createElement} from 'react';

import AutoField from './AutoField';

class AutoFields extends Component {
  static contextType = context;

  render() {
    const {autoField, element, fields, omitFields, ...props} = this.props;
    const {schema} = this.context.uniforms;

    return createElement(
      element,
      props,
      (fields || schema.getSubfields())
        .filter(field => omitFields.indexOf(field) === -1)
        .map(field => createElement(autoField, {key: field, name: field}))
    );
  }
}

AutoFields.propTypes = {
  autoField: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  element: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

  fields: PropTypes.arrayOf(PropTypes.string),
  omitFields: PropTypes.arrayOf(PropTypes.string)
};

AutoFields.defaultProps = {
  autoField: AutoField,
  element: 'div',
  omitFields: []
};

export default AutoFields;
