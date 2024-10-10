import React from 'react';
import { Dialog, DialogContent } from '../ui';

interface Props {
  isOpened: boolean;
  src: string;
  onClose: VoidFunction;
}

export const GalleryItemFull: React.FC<Props> = ({ isOpened, src, onClose }) => {
  return (
    <Dialog open={isOpened} onOpenChange={onClose}>
      <DialogContent className="w-full xl:max-w-[1000px] p-0 overflow-hidden">
        {src && <img className="w-full object-cover" src={src} alt="Фото из галереи" />}
      </DialogContent>
    </Dialog>
  );
};
