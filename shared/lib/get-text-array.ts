export const getTextArray = (text: string) => {
  return text.split('/P/').filter((item) => item);
};
