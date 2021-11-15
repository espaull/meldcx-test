import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';

test('displays an error message if an error message is passed', () => {
  render(<LoginForm errorMessage="Error!" />);

  const errorMessage = screen.getByLabelText('error-message');

  expect(errorMessage).toBeInTheDocument();
});

test('calls the handleLogin function on submit with correct params', () => {
  const cb = jest.fn();

  render(<LoginForm handleLogin={cb} />);

  const emailInput = screen.getByLabelText('input-email');
  const passwordInput = screen.getByLabelText('input-password');
  const submitButton = screen.getByLabelText('input-login');

  fireEvent.change(emailInput, { target: { value: 'test@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: 'meld123' } });
  fireEvent.click(submitButton);

  expect(cb).toHaveBeenCalled();
});
