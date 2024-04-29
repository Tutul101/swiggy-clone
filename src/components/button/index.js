import React from "react";

import "./button.scss";

const Button = ({ name, onButtonClick, ...props }) => {
  return (
    <div className="btn-wrapper" onClick={onButtonClick} {...props}>
      {name}
    </div>
  );
};

export default Button;
