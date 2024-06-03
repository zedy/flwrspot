import React from 'react';

// typeface
export type FlexWrapperProperties = {
  children: React.ReactNode;
  flexDirection?: 'row' | 'col';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  className?: string;
};

const justifyContentclassName = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const alignItemsclassName = {
  center: 'items-center',
  start: 'items-start',
  end: 'items-end',
  between: 'items-stretch',
  around: 'items-baseline',
};

/**
 * Presentational component used as the main DIV wrapper component
 * throughout the app. I mainly use FLEX for layouting, so this
 * component is used a lot.
 *
 * @example <FlexWrapper flexDirection="col" justifyContent="center" alignItems="center" className="bg-red-500">Hello World</FlexWrapper>
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} children - The children elements to be wrapped.
 * @param {string} flexDirection - The direction of the flex
 * @param {string} justifyContent - The justify-content property of the component
 * @param {string} alignItems - The align-items property of the component
 * @param {string} className - The additional classes passed into the component
 * @returns {JSX.Element} - The rendered component.
 */
export default function FlexWrapper({
  children,
  className = '',
  flexDirection = 'row',
  justifyContent = 'start',
  alignItems = 'start',
}: FlexWrapperProperties) {
  const direction = flexDirection === 'row' ? 'flex-row' : 'flex-col';
  const justify = justifyContentclassName[justifyContent] || 'justify-start';
  const align = alignItemsclassName[alignItems] || 'items-start';

  return (
    <div
      className={`w-full flex ${direction} ${justify} ${align} ${className}`}
    >
      {children}
    </div>
  );
}
