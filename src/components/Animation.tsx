// libs
import Lottie from 'react-lottie';

type Props = {
  animation: any;
};

/**
 * The main component for the Lottie files. This is where we define the main config
 * for the components and just pass in the JSON of the animation.
 *
 * @param {Object} props - The component props.
 * @param {animation} any - The JSON config file for the animation.
 * @returns {JSX.Element} - The rendered component.
 */
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
