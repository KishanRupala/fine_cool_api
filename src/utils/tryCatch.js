// const tryCatch = (fn) => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };

// module.exports = tryCatch;


const tryCatch = (fn) =>
  (req, res, next) => {
    return fn(req, res, next).catch(next);
  };

module.exports = tryCatch;
