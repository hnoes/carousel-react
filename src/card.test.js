// Card.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('renders without crashing', () => {
  render(<Card caption="Test Caption" src="test.jpg" currNum={1} totalNum={3} />);
});
