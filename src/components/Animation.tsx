// libs
import Lottie from 'react-lottie';

type Props = {
  animation: any;
};

// Component
export default function Animation({ animation }: Props) {
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
