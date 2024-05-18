/* eslint-disable react-hooks/exhaustive-deps */
import addNotification from '@/helpers/addNotification';
import {useEffect} from 'react';

const useNotification = (
  actionData?: {
    errors?: Record<string, any> | null;
    error?: string | null;
    success?: boolean;
  },
  meta?: {
    successMessage?: string;
    errorMessage?: string;
    successCb?: () => void;
    errorCb?: () => void;
    stringify?: boolean;
  }
) => {
  console.log(actionData);
  useEffect(() => {
    if (actionData?.errors) {
      addNotification({
        type: 'error',
        messages: Object.values(actionData.errors),
      });
      meta?.errorCb?.();
    }
  }, [actionData?.errors]);
  useEffect(() => {
    if (!actionData?.success) return;
    if (meta?.successMessage) {
      addNotification({type: 'success', messages: [meta?.successMessage]});
    }
    meta?.successCb?.();
  }, []);
};
export default useNotification;
