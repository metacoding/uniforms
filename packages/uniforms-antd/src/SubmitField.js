import Button from 'antd/lib/button';
import React from 'react';
import context from 'uniforms/context';
import {Component} from 'react';

class SubmitField extends Component {
  static contextType = context;

  render() {
    const {inputRef, value, ...props} = this.props;
    const {
      error,
      state: {disabled}
    } = this.context.uniforms;

    return (
      <Button disabled={!!(error || disabled)} htmlType="submit" ref={inputRef} type="primary" {...props}>
        {value}
      </Button>
    );
  }
}

SubmitField.defaultProps = {value: 'Submit'};

export default SubmitField;
