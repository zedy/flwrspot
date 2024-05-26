/**
 * Simple presentational component for the container class to give more robustness
 * and flexibility
 *
 * @param children JSX.Element
 * @returns JSX.Element
 */
export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-5 xl:max-w-[1220px] md:px-5">{children}</div>
  );
}
