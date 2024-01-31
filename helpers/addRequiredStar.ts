export const addRequiredStar = (val?: string, isRequired?: boolean) => {
  if (!isRequired) return val;
  if (!val) return;
  if (val.charAt(val.length - 1) === '*') return val;
  return `${val}*`;
};
