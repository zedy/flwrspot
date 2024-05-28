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
  version?: 'default' | 'outline' | 'icon-only';
};

const DEFAULT_CLASS =
  'text-sm font-medium text-main-0 flex font-montserrat justify-center border-0 items-center rounded-full border-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed';

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
  version = 'default',
  ...props
}: ButtonProperties) {
  // TODO refactor this component, it's ****
  // TODO implement a better hover transition
  let baseClass;

  switch (version) {
    case 'outline':
      baseClass = classParser(
        DEFAULT_CLASS,
        'text-peach-darker hover:text-main-100'
      );
      break;
    case 'icon-only':
      baseClass = classParser(DEFAULT_CLASS, 'rounded-full bg-main-0 p-2');
      break;
    default:
      baseClass = classParser(
        DEFAULT_CLASS,
        'h-10 px-5 bg-gradient-to-r from-peach-light to-peach-normal hover:to-peach-darker'
      );
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
