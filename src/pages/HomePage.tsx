// components
import Hero from '@/components/elements/Hero';
import Container from '@/components/layout/Container';

// assets
import hero from '@/assets/pl-hero-min.png';

// Component
export default function HomePage() {
  return (
    <Container>
      <Hero image={hero} />
    </Container>
  );
}
