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
 * @params @see FlexWrapperProperties
 * @returns React.ReactNode
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
