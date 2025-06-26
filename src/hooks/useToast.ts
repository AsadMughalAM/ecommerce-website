import { useState, useCallback } from 'react';
import { ToastProps } from '../components/ui/Toast';

type ToastType = 'success' | 'error' | 'warning' | 'info';

interface ToastOptions {
  title: string;
  message?: string;
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = useCallback((type: ToastType, options: ToastOptions) => {
    const id = Math.random().toString(36).substr(2, 9);
    const toast: ToastProps = {
      id,
      type,
      ...options,
      onClose: (toastId: string) => {
        setToasts(prev => prev.filter(t => t.id !== toastId));
      }
    };
    setToasts(prev => [...prev, toast]);
  }, []);

  const toast = {
    success: (options: ToastOptions) => addToast('success', options),
    error: (options: ToastOptions) => addToast('error', options),
    warning: (options: ToastOptions) => addToast('warning', options),
    info: (options: ToastOptions) => addToast('info', options),
  };

  return { toasts, toast };
};