import useOnClickOutside from '@/hooks/useOnClickOutside';
import classNames from 'classnames';
import {
  useState,
  type ChangeEvent,
  type DetailedHTMLProps,
  type FC,
  type FocusEvent,
  type InputHTMLAttributes,
  useEffect,
  useRef,
} from 'react';

export interface InputComponentProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'classNames' | 'defaultValue' | 'readOnly'
  > {
  name: string;
  label?: string;
  error?: string | false;
  touched?: boolean;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  readOnly?: boolean | {showClickable: boolean; removeBg: boolean};
  type?: 'number' | 'text' | 'email' | 'password' | 'date';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
  hideErrorMessage?: boolean;
}

export const DateInput: FC<InputComponentProps> = ({
  label,
  name,
  error,
  touched,
  placeholder,
  value,
  disabled,
  onChange,
  readOnly,
  type = 'date',
  hideErrorMessage = false,
  defaultValue,
  className,
  ...rest
}) => {
  const [focused, setFocused] = useState<boolean>(false);
  const [hasValue, setHasValue] = useState<boolean>(!!value ?? !!defaultValue);
  const [internalValue, setInternalValue] = useState<string | number | undefined>(value ?? defaultValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const useDisabledBG =
    (typeof readOnly === 'object' && !readOnly.removeBg) || (typeof readOnly === 'boolean' && readOnly);

  useOnClickOutside(inputRef, () => setFocused(false));

  useEffect(() => {
    if (focused || !!internalValue || internalValue === 0) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, [internalValue, focused]);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);
  return (
    <div
      onClick={() => {
        if (readOnly) return;
        inputRef.current?.focus();
      }}
      className={classNames('flex w-full flex-col', className, {
        'cursor-not-allowed': !!readOnly,
        'cursor-text': !readOnly,
        'cursor-pointer': typeof readOnly === 'object' && readOnly.showClickable,
      })}>
      <div
        className={classNames('relative h-[64px] w-full rounded-lg border', {
          'bg-grey': disabled || useDisabledBG,
          'bg-white': !disabled && !useDisabledBG,
          'border-light-border': (!error || !touched) && !focused,
          'border-primary-new': !!focused,
          'border-orange': !!error && !!touched && !focused,
        })}>
        {!!label && (
          <div
            className={classNames(
              'absolute left-3 flex select-none items-center px-1 py-2 text-grey-light transition-all duration-[10]',
              {
                'top-1/2 -translate-y-1/2 text-16': !hasValue && type !== 'date',
                'top-1 text-12': hasValue || type === 'date',
              }
            )}>
            {label}
          </div>
        )}

        <input
          ref={inputRef}
          type={type}
          id={name}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
          value={value}
          onClick={() => {
            if (readOnly) return;
            setFocused(true);
          }}
          className={classNames(
            'absolute inset-x-0 top-[30px] w-full rounded-none bg-transparent px-4 focus:outline-none',
            {
              'cursor-not-allowed': !!readOnly,
              'cursor-pointer': typeof readOnly === 'object' && readOnly.showClickable,
            }
          )}
          aria-invalid={!!error && !!touched ? true : undefined}
          onChange={(event) => {
            onChange?.(event);
            setInternalValue(event.currentTarget.value);
          }}
          onBlur={() => setFocused(false)}
          onBlurCapture={() => setFocused(false)}
          onFocus={() => {
            if (!!readOnly) return;
            setFocused(true);
          }}
          readOnly={!!readOnly}
          defaultValue={defaultValue}
          {...rest}
        />
      </div>
      {!!error && !!touched && !hideErrorMessage && !focused && <div className='pl-4 pt-2 text-orange'>{error}</div>}
    </div>
  );
};
