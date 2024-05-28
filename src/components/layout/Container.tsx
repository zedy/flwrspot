type Props = {
  children: React.ReactNode;
  padding?: boolean;
};

/**
 * Simple presentational component for the container class to give more robustness
 * and flexibility
 *
 * @param children JSX.Element
 * @returns JSX.Element
 */
export default function Container({ children, padding = true }: Props) {
  return (
    <div
      className={`w-full xl:max-w-[1220px] ${padding ? 'px-5 md:px-5' : 'p-0'}`}
    >
      {children}
    </div>
  );
}
