// libs
import Lottie from 'react-lottie';

// assets
import animation from '@/assets/under-construction.json';

// Component
export default function UnderConstruction() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
