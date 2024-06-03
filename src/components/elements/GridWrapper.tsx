// typeface
export type GridWrapperProperties = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Presentational component used as the main grid wrapper for the listings.
 *
 * @example <GridWrapper className="bg-red-500">Hello World</GridWrapper>
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} children - The children elements to be wrapped.
 * @param {string} className - The additional classes passed into the component
 * @returns {JSX.Element} - The rendered component.
 */
export default function GridWrapper({
  children,
  className = '',
}: GridWrapperProperties) {
  const gridClass = `w-full grid grid-cols-1 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 px-5`;

  return <div className={`${gridClass} ${className}`}>{children}</div>;
}
