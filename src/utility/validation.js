export const commentValidation = content => {
  if (!content) return false;
  return true;
};

export const postValidation = values => {
  if (!values.message) return false;
  return true;
};
