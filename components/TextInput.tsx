import classNames from 'classnames';

import {DetailedHTMLProps, FC, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useState} from 'react';
import {addRequiredStar} from '../helpers/addRequiredStar';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name?: string;
  type?: HTMLInputTypeAttribute;
  value?: string;
  inputMode?: 'text' | 'email';
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  wrapperClassName?: string;
  isValidating: boolean;
  variant?: 'white' | 'grey-bg';
}

export const TextInput: FC<Props> = ({
  inputMode = 'text',
  error,
  wrapperClassName,
  isValidating,
  required,
  variant = 'grey-bg',
  ...rest
}) => {
  const [reactiveError, setReactiveError] = useState<string>();
  useEffect(() => {
    setReactiveError(error);
  }, [error, isValidating]);
  return (
    <div className={classNames('flex h-max w-full flex-col', wrapperClassName, {})}>
      {rest.title && <p className='mb-2 text-18 text-readable-text'>{addRequiredStar(rest.title, required)}</p>}
      <input
        {...rest}
        onChange={(e) => {
          rest.onChange?.(e);
          setReactiveError('');
        }}
        placeholder={addRequiredStar(rest.placeholder, required)}
        inputMode={inputMode}
        className={classNames(
          'input',
          {
            'border border-red': !!reactiveError,
            'bg-light-grey': variant === 'grey-bg',
          },
          rest.className
        )}
      />
    </div>
  );
};

export default TextInput;
