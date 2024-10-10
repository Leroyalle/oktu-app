export const getTextArray = (text: string): string[] => {
  return text.split('/P/').filter((item) => item);
};
