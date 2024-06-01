// utils
import classParser from '@/utils/classParser';

type ButtonProperties = {
  children?: React.ReactNode;
  onClick?: (event: React.BaseSyntheticEvent) => void;
  onMouseDown?: (event: React.BaseSyntheticEvent) => void;
  icon?: React.ReactNode | undefined;
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  version?: 'modal-cta' | 'outline' | 'icon-cta' | 'icon-only' | 'cta';
};

const DEFAULT_CLASS =
  'text-sm flex justify-center border-0 items-center border-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed';

/**
 * Basic function button component.
 * It cannot be used as a link, so please don't pass in
 * any anchors. For that use router link.
 *
 * The icons are passed in as React.ReactNode.
 *
 * @params @see ButtonProperties
 * @returns React.ReactNode
 */
export default function Button({
  children,
  icon,
  className,
  onClick,
  onMouseDown,
  type = 'button',
  disabled,
  version,
  ...props
}: ButtonProperties) {
  let baseClass;

  switch (version) {
    case 'outline':
      baseClass = classParser(
        DEFAULT_CLASS,
        'font-medium font-montserrat text-peach-darker hover:text-main-100'
      );
      break;
    case 'icon-cta':
      baseClass = classParser(
        DEFAULT_CLASS,
        'rounded-full bg-main-0 hover:bg-peach-darker p-2'
      );
      break;
    case 'icon-only':
      baseClass = classParser(DEFAULT_CLASS, 'bg-transparent');
      break;
    case 'cta':
      baseClass = classParser(
        DEFAULT_CLASS,
        'rounded-full whitespace-nowrap font-medium font-montserrat text-main-0 py-[10px] px-6 bg-gradient-to-r to-peach-light from-peach-normal hover:to-peach-normal'
      );
      break;
    case 'modal-cta':
      baseClass = classParser(
        DEFAULT_CLASS,
        'rounded font-medium font-ubuntu text-main-0 py-4 px-12 bg-gradient-to-r to-peach-light from-peach-normal hover:to-peach-normal'
      );
      break;
    default:
      baseClass = classParser(DEFAULT_CLASS, '');
      break;
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      type={type === 'submit' ? 'submit' : 'button'}
      className={classParser(baseClass, className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
