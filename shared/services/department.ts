import { ApiRouter } from './constants';
import { axiosInstance } from './instance';

export const getAll = async () => {
  return (await axiosInstance.get(ApiRouter.department)).data;
};
