// components
import Animation from '@/components/Animation';

// assets
import animation from '@/assets/under-construction.json';

/**
 * Simple presentational component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function Favorites() {
  return <Animation animation={animation} />;
}
