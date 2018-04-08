export default {
  discardNonNumeric(string) {
    return string.replace(/[^\d+]/g, '');
  },
};
