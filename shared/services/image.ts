import { ImageWithRelations } from '@/@types/dataDTO';
import { ApiRouter } from './constants';
import { axiosInstance } from './instance';

export const getAll = async (params: string) => {
  return (await axiosInstance.get<ImageWithRelations>(`${ApiRouter.image}?${params}`)).data;
};
