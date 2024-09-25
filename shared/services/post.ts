import { PostDTO } from '@/@types/dataDTO';
import { ApiRouter } from './constants';
import { axiosInstance } from './instance';

export const getAll = async (params: string) => {
  return (await axiosInstance.get<PostDTO>(`${ApiRouter.post}?${params}`)).data;
};
