export const mongooseSaveError = (error, data, next) => {
  error.status = 400;
  next();
};

export const setUpdateSettings = function (next) {
  this.getOptions.new = true;
  this.getOptions.runValidators = true;
  next();
};
