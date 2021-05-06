import alertConstants from 'constants/alert.constants';

const success = (message) => ({
  type: alertConstants.SUCCESS, message,
});

const error = (message) => ({
  type: alertConstants.ERROR, message,
});

const clear = () => ({
  type: alertConstants.CLEAR,
});

const doNotClear = () => ({
  type: alertConstants.DO_NOT_CLEAR,
  doNotClear: true,
});

export default {
  success,
  error,
  clear,
  doNotClear,
};