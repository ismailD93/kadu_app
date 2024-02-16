import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  link?: string;
  label: string;
  innerClassName?: string;
  type?: 'button' | 'submit';
  variant?: 'outline' | 'primary' | 'white';
}

const Button = ({link, rel, disabled, className, innerClassName, variant = 'primary', ...rest}: Props) => {
  return (
    <div className={classNames(className, {'w-max': !className?.includes('w-')})}>
      {!!link && (
        <Link href={link}>
          <InnerButton innerClassName={innerClassName} {...rest} variant={variant} />
        </Link>
      )}
      {!link && (
        <button className='w-full' disabled={disabled} {...rest}>
          <InnerButton innerClassName={innerClassName} {...rest} variant={variant} />
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
}: {
  label: Props['label'];
  variant?: Props['variant'];
  innerClassName: Props['innerClassName'];
}) => {
  return (
    <div
      className={classNames('flex rounded-md leading-none w-full flex-row items-center', innerClassName, {
        'text-white bg-blueberry': variant === 'primary',
        'text-blueberry border border-blueberry': variant === 'outline',
        'text-white border border-white': variant === 'white',
      })}>
      <div className='mx-auto flex items-center gap-x-2.5 px-6 md:px-9 py-2 md:py-3'>{!!label && <p>{label}</p>}</div>
    </div>
  );
};
