import React from 'react';

export interface AlertProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
}

const Alert: React.FC<AlertProps> = ({ message, type = 'info' }) => {
  return (
    <div className={`lib-alert lib-alert-${type}`}>
      {message}
    </div>
  );
};

export default Alert; 