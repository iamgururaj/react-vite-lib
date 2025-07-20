import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button className="lib-btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button; 