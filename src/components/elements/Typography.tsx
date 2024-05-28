// libs
import React from 'react';

// utils
import classParser from '@/utils/classParser';

// typefaces
export enum Type {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  P = 'p',
  SPAN = 'span',
}

// defaults
const DEFAULT_TEXT_SIZE = 'font-medium font-montserrat';

/**
 * General typography component.
 * Use this component to create a typography element such
 * as h1, h2, h3, h4, h5, h6, p, span.
 *
 * @example <Typography component={Type.H1} className="text-red-500">Hello World</Typography>
 * @param children - The content of the typography
 * @param component - The type of the typography
 * @param isSr - If the typography is for screen readers
 * @param className - The className to be added to the typography
 *
 * @returns The typography component
 */
export default function Typography({
  children,
  component,
  isSr = false,
  className = '',
}: Readonly<{
  children: React.ReactNode;
  component: Type;
  isSr?: boolean;
  className?: string;
}>) {
  let baseClass;
  // TODO refactor this it's ****
  switch (component) {
    case 'h1':
      baseClass = classParser(DEFAULT_TEXT_SIZE, 'text-4xl font-semibold');
      break;
    case 'h3':
      baseClass = classParser(DEFAULT_TEXT_SIZE, 'text-2xl');
      break;
    case 'h4':
      baseClass = classParser(DEFAULT_TEXT_SIZE, 'text-xl');
      break;
    default:
      baseClass = ''; // classParser(DEFAULT_TEXT_SIZE, 'text-sm');
      break;
  }

  const classNames = classParser(
    baseClass,
    `${isSr ? 'sr-only' : ''} ${className}`
  );

  return React.createElement(component, { className: classNames }, children);
}
