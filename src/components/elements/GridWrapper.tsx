// typeface
export type GridWrapperProperties = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Presentational component used as the main grid wrapper for the listings.
 *
 * @example <GridWrapper className="bg-red-500">Hello World</GridWrapper>
 * @params @see GridWrapperProperties
 * @returns React.ReactNode
 */
export default function GridWrapper({
  children,
  className = '',
}: GridWrapperProperties) {
  const gridClass = `w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5`;

  return <div className={`${gridClass} ${className}`}>{children}</div>;
}
