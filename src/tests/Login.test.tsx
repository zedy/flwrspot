import { vi, describe, test, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from '@/components/forms/Login.form';
import { ModalContextProvider } from '@/context/ModalContext';

type Props = {
  email: string;
  password: string;
};

const data = {
  email: 'john@example.com',
  password: 'Password123!%',
};

describe('Login form component', () => {
  const mockMutationCallback = vi.fn();
  const callback = {
    mutationCallback: (formData: Props) => {
      return formData;
    },
  };

  const mutateSpy = vi.spyOn(callback, 'mutationCallback');

  beforeEach(() => {
    render(
      <ModalContextProvider>
        <LoginForm mutationCallback={mockMutationCallback} />
      </ModalContextProvider>
    );
  });

  test('renders form fields correctly', () => {
    expect(screen.getByLabelText('Email Address')).toBeDefined();
    expect(screen.getByLabelText('Password')).toBeDefined();
  });

  test('submits form data on button click', async () => {
    fireEvent.change(screen.getByLabelText('Email Address'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'Password123!%' },
    });

    fireEvent.click(screen.getByText('Login to your Account'));

    callback.mutationCallback({
      ...data,
    });

    await waitFor(() => {
      expect(mutateSpy).toHaveBeenCalledWith({
        email: 'john@example.com',
        password: 'Password123!%',
      });
    });
  });
});
