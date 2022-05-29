import { toast } from 'react-hot-toast';

const DEFAULT_OPTIONS = {
  position: 'bottom-right',
  duration: 2500,
};

export const success = (msg) => {
  toast.success(msg, DEFAULT_OPTIONS);
};

export const failure = (msg) => {
  toast.error(msg, DEFAULT_OPTIONS);
};
