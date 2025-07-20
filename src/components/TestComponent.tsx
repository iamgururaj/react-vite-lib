import React from 'react';
import Button from './Button';
import Card from './Card';
import Alert from './Alert';

const TestComponent: React.FC = () => (
  <div>
    <h2>TestComponent Demo</h2>
    <Button label="Test Button" onClick={() => alert('Button clicked!')} />
    <Card title="Test Card">
      <p>This is a test card content.</p>
    </Card>
    <Alert message="This is an info alert" type="info" />
    <Alert message="This is a success alert" type="success" />
    <Alert message="This is an error alert" type="error" />
    <Alert message="This is a warning alert" type="warning" />
  </div>
);

export default TestComponent; 