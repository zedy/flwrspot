export type Props = {
  className: string;
};

/**
 * Simple presentational component that's used to add space between elements
 * without having to pass into margins or paddings or where it's imposible
 * to pass into without having to extend the component just for the sake of space.
 *
 * @param {Object} props - The component props.
 * @params {String} className that represents the collated tailwind classes
 * @returns {JSX.Element} The rendered component.
 */
export default function Divider({ className = '' }: Props) {
  return <div className={`block ${className}`} />;
}
