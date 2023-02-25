import React from 'react';
import { render, screen } from '@testing-library/react';
import { Teaser } from './teaser';
import { getUser } from '../../factories/user-factory';

test('renders full name', () => {
  const user = getUser();
  render(
    <Teaser
      onRemove={() => {}}
      user={user}
    />
  );

  const nameElement = screen.getByText(user.name.first + ' ' + user.name.last);
  expect(nameElement).toBeInTheDocument();
});
