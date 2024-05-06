import classNames from 'classnames';

import {DetailedHTMLProps, InputHTMLAttributes, useEffect, useState} from 'react';
import {addRequiredStar} from '../helpers/addRequiredStar';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  name?: string;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: string;
  defaultValue?: string;
  fullHeight?: boolean;
  rows?: number;
  isValidating: boolean;
  variant?: 'white' | 'content-background';
}

export const TextAreaInput = ({
  inputMode = 'text',
  fullHeight,
  rows = 5,
  error,
  isValidating,
  required,
  variant = 'white',
  ...rest
}: Props) => {
  const [reactiveError, setReactiveError] = useState<string>();
  useEffect(() => {
    setReactiveError(error);
  }, [error, isValidating]);
  return (
    <div className='flex border rounded-md h-full w-full flex-col'>
      <textarea
        {...rest}
        placeholder={addRequiredStar(rest.placeholder, required)}
        onChange={(e) => {
          rest.onChange?.(e);
          setReactiveError('');
        }}
        rows={rows}
        inputMode={inputMode}
        className={classNames('input', {
          'border border-red': !!reactiveError,
          'h-full': fullHeight,
          'bg-content-background-light': variant === 'content-background',
        })}
      />
    </div>
  );
};

export default TextAreaInput;
