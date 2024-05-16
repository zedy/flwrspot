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
};

const DEFAULT_CLASS =
  'h-10 px-5 text-sm font-medium text-main-0 flex font-montseratt bg-gradient-to-r from-[#EAA79E] to-[#ECBCB3] justify-center border-0 items-center rounded-full border-0 transition-all duration-300 ease-in-out focus:outline-none focus:ring-0 disabled:cursor-not-allowed';

/**
 * Basic function button component.
 * It cannot be used as a link, so please don't pass in
 * any anchors. For that use next/link.
 *
 * The icons are passed in as React.ReactNode, currently
 * we're using Ant Design icons, but it can be type of icon
 * just as long as it's React.ReactNode.
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
  ...props
}: ButtonProperties) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onMouseDown={onMouseDown}
      type={type === 'submit' ? 'submit' : 'button'}
      className={classParser(DEFAULT_CLASS, className)}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
