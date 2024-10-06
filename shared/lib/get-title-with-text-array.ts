import { getTextArray } from './get-text-array';

export const getTitleWithTextArray = (text: string) => {
  const paragraphArr = text
    .split('/BLOCK/')
    .filter((el) => el.trim().length > 0)
    .map((el) => {
      const titleParts = el
        .trim()
        .split('/T/')
        .filter((el) => el.trim());
      const textParts = getTextArray(el.split('/P/').slice(1).join(','));

      return {
        title: titleParts.length > 1 ? titleParts[0].trim() : '',
        text: textParts,
      };
    });

  return paragraphArr;
};
