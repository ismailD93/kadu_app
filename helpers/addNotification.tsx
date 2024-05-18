import MultiLineText from '@/components/MultilinText';
import classNames from 'classnames';
import type {Id, ToastOptions} from 'react-toastify';
import {toast} from 'react-toastify';

export interface NotificationProps {
  type: 'error' | 'success' | 'info';
  messages: (string | null | undefined)[];
}

const Notification = ({messages, type}: NotificationProps) => {
  return (
    <>
      {messages.map((m, idx) => {
        return (
          <div
            key={`toast_${type}_${idx}`}
            className={classNames('text-base_plain font-bold', {
              'text-red': type === 'error',
              'text-darker_slate': type !== 'error',
            })}>
            {<MultiLineText text={m ?? ''} />}
          </div>
        );
      })}
    </>
  );
};

export const removeToast = (id: Id) => toast.dismiss(id);

const addNotification = (notification?: NotificationProps, options?: ToastOptions): Id => {
  let id: Id | null = null;
  if (notification?.type) {
    id = toast(<Notification messages={notification.messages} type={notification.type} />, {
      ...(options || {
        type: notification.type,
        autoClose: 2000,
      }),
    });
  }
  return id || '';
};
export default addNotification;
