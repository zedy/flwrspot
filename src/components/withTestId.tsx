// libs
import React from 'react';

interface TestIdProps {
  children?: React.ReactNode;
}

/**
 * withTestId HOC that adds a data-testid attribute to the wrapped component
 * so it can be targeted in tests.
 *
 * @param {React.ComponentType} WrappedComponent The component to wrap.
 * @param {string} testId The value for the data-testid attribute.
 * @returns {React.FC} A new component with the data-testid attribute added.
 */
function withTestId<P>(
  WrappedComponent: React.ComponentType<P>,
  testId: string
) {
  return function TestIdWrapper(props: P & TestIdProps) {
    const { children, ...restProps } = props;

    const enhancedChildren = React.Children.map(children, (child) => {
      return child;
    });

    return (
      <WrappedComponent {...(restProps as P)} data-testid={testId}>
        {enhancedChildren}
      </WrappedComponent>
    );
  };
}

export default withTestId;
