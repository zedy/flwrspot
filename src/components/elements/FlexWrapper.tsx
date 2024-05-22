import React from 'react';

// typeface
export type FlexWrapperProperties = {
  children: React.ReactNode;
  flexDirection?: 'row' | 'col';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  classes?: string;
};

const justifyContentClasses = {
  center: 'justify-center',
  start: 'justify-start',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
};

const alignItemsClasses = {
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
 * @example <FlexWrapper flexDirection="col" justifyContent="center" alignItems="center" classes="bg-red-500">Hello World</FlexWrapper>
 * @params @see FlexWrapperProperties
 * @returns React.ReactNode
 */
export default function FlexWrapper({
  children,
  classes = '',
  flexDirection = 'row',
  justifyContent = 'start',
  alignItems = 'start',
}: FlexWrapperProperties) {
  // TODO rename classes to className
  const direction = flexDirection === 'row' ? 'flex-row' : 'flex-col';
  const justify = justifyContentClasses[justifyContent] || 'justify-start';
  const align = alignItemsClasses[alignItems] || 'items-start';

  return (
    <div className={`w-full flex ${direction} ${justify} ${align} ${classes}`}>
      {children}
    </div>
  );
}
