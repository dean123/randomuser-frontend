import React from 'react';
import { render, screen } from '@testing-library/react';
import { Teaser } from './teaser';

test('renders full name', () => {
  render(
    <Teaser
      onRemove={() => console.log('on remove')}
      user={{
        name: {
          first: 'Test',
          last: 'Tester',
        },
        gender: 'female',
        dob: {
          age: 31,
          date: '1990-20-11',
        },
        picture: {
          thumbnail: '',
          medium: '',
          large: '',
        },
        phone: '123',
        nat: 'DE',
        location: {
          city: 'Berlin',
          country: 'Germany',
        },
      }
    } />
  );

  const nameElement = screen.getByText(/Test Tester/i);
  expect(nameElement).toBeInTheDocument();

});
