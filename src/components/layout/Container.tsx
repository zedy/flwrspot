type Props = {
  children: React.ReactNode;
  padding?: boolean;
};

/**
 * Simple presentational component for the container class to give more robustness
 * and flexibility
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} children - The children elements to be wrapped.
 * @param {boolean} padding - Controlls the type of padding the component provides.
 * @returns {JSX.Element} - The rendered component.
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
