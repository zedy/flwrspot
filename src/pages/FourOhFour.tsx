// libs
import Lottie from 'react-lottie';

// assets
import animation from '@/assets/404.json';

// Component
export default function FourOhFour() {
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
