// components
import Hero from '@/components/elements/Hero';
import Container from '@/components/layout/Container';
import FlowerListings from '@/components/FlowerListings';

/**
 * Simple presentational component.
 *
 * @returns {JSX.Element} - The rendered component.
 */
export default function HomePage() {
  return (
    <Container padding={false}>
      <Hero
        image="bg-hero"
        headline="Discover flowers around you"
        subtext="Explore between more than 8.427 sightings"
      />
      <FlowerListings />
    </Container>
  );
}
