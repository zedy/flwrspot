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
    // Create a div with #modal-root id and append it to document.body
    // This simulates the modal root element that your modal portals into
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    // Clean up the modal root from the document body to avoid pollution between tests
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

    // @ts-ignore: issue with type mismatch from extended matchers
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
