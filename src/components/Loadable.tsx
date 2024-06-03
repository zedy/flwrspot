// libs
import { ComponentType, Suspense } from 'react';

// components
import Loader from '@/components/Loader';

/**
 * A higher order component that wraps a component in a Suspense Component
 * and shows a loading spinner while the component is being loaded.
 *
 * @returns JSX.Element
 */
export default function Loadable<P>(Component: ComponentType<P>) {
  return function LoadableComponent(props: P & JSX.IntrinsicAttributes) {
    return (
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    );
  };
}
