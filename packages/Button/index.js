import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, text, children, dataActionDetail, onClick, disabled, id } =
    props;
  const buttonClass = `cursor-pointer ${className || ''}`;
  return (
    <button
      // role={"button"}
      className={buttonClass}
      data-action-detail={dataActionDetail}
      onClick={onClick}
      disabled={disabled}
      id={id}
    >
      {children || text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  children: PropTypes.object,
  dataActionDetail: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
};

export default Button;
