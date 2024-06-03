type Props = {
  message: string;
};

/**
 * Basic presentational component to show an error message beneath it's paired input component.
 *
 * @param {Object} props - The component props.
 * @param {string} message - The message passed into the component to be displayed on error.
 * @returns {JSX.Element} - The rendered component.
 */
export default function FormError({ message }: Props) {
  return (
    <span className="block text-red-800 text-xss mt-1 mb-3">{message}</span>
  );
}
