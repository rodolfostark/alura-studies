import React from 'react';
import style from './button.module.scss';

class Button extends React.Component<{
  type?: "button" | "submit" | "reset" | undefined
}> {
  render() {
    const { type = "button"} = this.props;
    return (
      <button className={style.botao} type={type}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;