import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './ContactUs.module.scss';
import { Title } from '../title';

interface Props {
  name: string;
  className?: string;
}

export const ContactUs: React.FC<Props> = ({ name, className }) => {
  return (
    <section className={cn(styles.root, className)}>
      <Title text={`Узнать больше:`} size={'lg'} />
      <ul>
        <li>
          <p>
            Номер телефона: <a href={'tel:74843960167'}>+7 (484) 396-01-67</a>
          </p>
        </li>
        <li>
          <p>
            Электронная почта: <a href={'mailto:ksl299@yandex.ru'}>ksl299@yandex.ru</a>
          </p>
        </li>
        <li>
          <p>
            Мы в жизни: <span>Калужская область, город Обнинск, ул Курчатова, д. 39</span>
          </p>
        </li>
      </ul>
    </section>
  );
};
