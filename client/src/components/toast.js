import { toast } from 'react-toastify';

export const SuccessToast = (message) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};

export const ErrorToast = (message) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 3000,
  });
};
