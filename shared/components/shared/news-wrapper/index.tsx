'use client';
import React, { Suspense } from 'react';
import { Tags } from '../tags';
import { NewsContentWrapper } from '../news-content-wrapper';
import { Tag } from '@prisma/client';
import { useNewsData } from '@/shared/hooks';
import styles from './NewsWrapper.module.scss';

interface Props {
  tags: Tag[];
}

export const NewsWrapper: React.FC<Props> = ({ tags }) => {
  const [isShowItems, setIsShowItems] = React.useState(false);
  const { onChangeTag, tag } = useNewsData();

  return (
    <div className={styles.root}>
      <Tags
        isShowItems={isShowItems}
        setIsShowItems={() => setIsShowItems(!isShowItems)}
        items={tags}
        currentTagId={tag}
        onClick={onChangeTag}
        className="mb-[15px]"
      />
      <Suspense>
        <NewsContentWrapper />
      </Suspense>
    </div>
  );
};
