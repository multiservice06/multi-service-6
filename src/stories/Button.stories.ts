import React from 'react';
import Button from '../pages/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => (
  <Button
    onClick={() => console.log('Clicked')}
    className="bg-blue-500 hover:bg-blue-800 hover:text-white text-black font-bold py-2 px-10"
    style={{ borderRadius: '4px' }}
  >
    Get Started
  </Button>
);
