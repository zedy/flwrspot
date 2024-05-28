// components
import Hero from '@/components/elements/Hero';
import Container from '@/components/layout/Container';
import FlowerListings from '@/components/FlowerListings';

// Component
export default function HomePage() {
  // TODO check with api if there's a endpoint for the counter number of sightings
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
