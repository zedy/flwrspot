/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { expect, test, describe, beforeEach, afterEach } from 'vitest';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// components
import LoginAuth from '@/components/LoginAuth';
import { ModalContextProvider } from '@/context/ModalContext';
import { MenuContextProvider } from '@/context/MenuContext';

const queryClient = new QueryClient();

describe('Show modal', () => {
  beforeEach(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    const modalRoot = document.getElementById('modal-root');
    if (modalRoot) {
      document.body.removeChild(modalRoot);
    }
  });

  test('displays the modal when the button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <QueryClientProvider client={queryClient}>
          <ModalContextProvider>
            <MenuContextProvider>
              <LoginAuth />
            </MenuContextProvider>
          </ModalContextProvider>
        </QueryClientProvider>
      </MemoryRouter>
    );

    const openModalButton = screen.getByTestId('modal-open-button');
    fireEvent.click(openModalButton);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
