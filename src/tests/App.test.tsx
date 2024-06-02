/* eslint-disable @typescript-eslint/ban-ts-comment */
// libs
import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';

// components
import App from '@/App';
import Hero from '@/components/elements/Hero';

describe('Generic App tests', () => {
  render(<App />);
  const app = document.querySelector('.App');

  test('app is loading and has correct classes', () => {
    expect(app).toBeDefined();
    expect(app?.classList).toContain([
      'App',
      'w-screen',
      'min-h-screen',
      'overflow-x-hidden',
    ]);
  });

  test('loads header component', async () => {
    const component = app?.querySelector('.header');
    expect(component).toBeDefined();
  });

  test('loads hero component', async () => {
    const component = app?.querySelector('.hero');
    expect(component).toBeDefined();
  });

  test('loads Login auth component', async () => {
    const component = app?.querySelector('.login-trigger');
    expect(component).toBeDefined();
  });

  test('loads Signup auth component', async () => {
    const component = app?.querySelector('.signup-trigger');
    expect(component).toBeDefined();
  });
});

describe('Hero component', () => {
  test('checks if hero is rendered with props passed in', () => {
    const headline = 'Headline test';
    const subtext = 'Subtext test';
    const image = 'bg-hero-image-test';

    render(<Hero image={image} headline={headline} subtext={subtext} />);

    const headlineElement = screen.getByText(headline);
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement.tagName).toBe('H1');

    const subtextElement = screen.getByText(subtext);
    expect(subtextElement).toBeInTheDocument();
    expect(subtextElement.tagName).toBe('H4');

    const sectionElement = screen.getByTestId('hero');
    expect(sectionElement).toHaveClass(image);
  });
});
