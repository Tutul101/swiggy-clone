import React from "react";

import "./form-input.scss";

const FormInput = ({ label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" {...props} />
      {label && <label className="input-label">{label}</label>}
    </div>
  );
};

export default FormInput;
