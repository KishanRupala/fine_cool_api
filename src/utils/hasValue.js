// ================================
// Helper Function
// ================================

const hasValue = (value) => {
  return (
    value !== null &&
    value !== undefined &&
    value !== ""
  );
};

module.exports = hasValue;