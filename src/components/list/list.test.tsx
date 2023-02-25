import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { List } from './list';
import { getUsers } from '../../factories/user-factory';

test('renders headline', () => {
  render(<List getUsers={getUsers} />);
  const headlineElement = screen.getByText(/random users/i);
  expect(headlineElement).toBeInTheDocument();
});

test('should render the correct number of users', async () => {
  render(<List getUsers={getUsers} />);
  const teasers = await screen.findAllByTestId('teaser');
  expect(teasers).toHaveLength(20); // Default amount loaded in useEffect
});

test('should add more users when the "Add" button is clicked', async () => {
  render(<List getUsers={getUsers} />);
  const addButton = screen.getByTestId('add-user');
  fireEvent.click(addButton);
  const teasers = await screen.findAllByTestId('teaser');
  expect(teasers).toHaveLength(21); // One more user added
});

test('should renew all users when the "Renew Users" button is clicked', async () => {
  render(<List getUsers={getUsers} />);
  const renewButton = await screen.findByText(/Renew Users/);
  fireEvent.click(renewButton);
  const teasers = await screen.findAllByTestId('teaser');
  expect(teasers).toHaveLength(20); // Default amount loaded in useEffect
});

test('should remove a user when the remove button is clicked', async () => {
  render(<List getUsers={getUsers} />);

  // Check that 20 remove buttons exits
  const removeButtons = await screen.findAllByTestId('remove-user');
  expect(removeButtons.length).toEqual(20)

  // Click the first remove button and check that 19 teasers are left
  fireEvent.click(removeButtons[0]);
  const teasersUpdate = await screen.findAllByTestId('teaser');
  expect(teasersUpdate).toHaveLength(19);
});
