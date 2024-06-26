import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  link?: string;
  label: string;
  innerClassName?: string;
  type?: 'button' | 'submit';
  variant?: 'outline' | 'primary' | 'white' | 'red';
  buttonBig?: boolean;
}

const Button = ({
  link,
  rel,
  disabled,
  className,
  innerClassName,
  type,
  variant = 'primary',
  buttonBig,
  ...rest
}: Props) => {
  return (
    <div className={classNames(className, {'w-max': !className?.includes('w-')})}>
      {!!link && (
        <Link href={link}>
          <InnerButton
            disabled={disabled}
            buttonBig={buttonBig}
            innerClassName={innerClassName}
            {...rest}
            variant={variant}
          />
        </Link>
      )}
      {(type === 'submit' || !link) && (
        <button type={type} className='w-full' disabled={disabled} {...rest}>
          <InnerButton
            disabled={disabled}
            buttonBig={buttonBig}
            innerClassName={innerClassName}
            {...rest}
            variant={variant}
          />
        </button>
      )}
    </div>
  );
};

export default Button;

const InnerButton = ({
  label,
  variant,
  innerClassName,
  buttonBig,
  disabled,
}: {
  disabled: Props['disabled'];
  label: Props['label'];
  variant?: Props['variant'];
  innerClassName: Props['innerClassName'];
  buttonBig?: Props['buttonBig'];
}) => {
  return (
    <div
      className={classNames('flex rounded-md leading-none w-full flex-row items-center', innerClassName, {
        'text-white bg-blueberry hover:opacity-100 opacity-95': variant === 'primary' && !disabled,
        'text-blueberry border border-blueberry': variant === 'outline',
        'text-white border border-white': variant === 'white',
        'text-red border border-red': variant === 'red',
        'bg-grey': disabled,
      })}>
      <div
        className={classNames('gap-x-2.5', {
          ' px-6 md:px-9 py-2 md:py-3 text-15': !buttonBig,
          'p-6 text-22 md:p-9': buttonBig,
        })}>
        {label}
      </div>
    </div>
  );
};
