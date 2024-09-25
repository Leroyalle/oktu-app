import React from 'react';
import { useGalleryStore } from '../store';
import { useInView } from 'react-intersection-observer';
import { Api } from '../services/api-client';
import { Image, ImageItem } from '@prisma/client';
import { ImageWithItems } from '@/@types/dataDTO';

interface ReturnProps {
  galleryStore: {
    items: ImageWithItems[];
    totalCount: number;
    skip: number;
    loading: boolean;
    error: boolean;
    setItems: (data: ImageWithItems[], count: number) => void;
    setSkip: (length: number) => void;
    fetchItems: VoidFunction;
    resetStore: VoidFunction;
  };
  ref: (node?: Element | null) => void;
}

export const useGalleryData = (): ReturnProps => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const galleryStore = useGalleryStore();

  React.useEffect(() => {
    galleryStore.fetchItems();
    return () => galleryStore.resetStore();
  }, []);

  React.useEffect(() => {
    if (inView && galleryStore.items.length < galleryStore.totalCount) {
      (async function () {
        try {
          const data = await Api.image.getAll(`skip=${galleryStore.skip}&take=6`);
          galleryStore.setItems(data.images, data.totalCount);
          galleryStore.setSkip(6);
        } catch (error) {
          console.log('Error [MORE-GALLERY_GET]', error);
          throw error;
        }
      })();
    }
  }, [inView]);

  return {
    galleryStore,
    ref,
  };
};
