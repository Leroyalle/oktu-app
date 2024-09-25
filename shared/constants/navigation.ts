export const navigationData = {
  top: [
    {
      name: 'Новости',
      href: '/news',
      links: [],
    },
    {
      name: 'Галерея',
      href: '/gallery',
      links: [],
    },
    {
      name: 'Контакты',
      href: '/contacts',
      links: [],
    },
    {
      name: 'Руководство',
      href: '/structure/direction',
      links: [],
    },
    {
      name: 'Педагогический состав',
      href: '/structure/teach-staff',
      links: [],
    },
    {
      name: 'ФП "Профессионалитет"',
      href: '/fp-professionals',
      links: [],
    },
  ],
  bottom: [
    {
      name: 'Сведения об общеобразовательной организации',
      href: '/information',
      links: [
        {
          name: 'Основные сведения',
          href: '/structure/common',
        },
        {
          name: 'Структура и органы управления образовательной организацией',
          href: '/structure/cm',
        },
        {
          name: 'Документы',
          href: '/structure/docs',
        },
        {
          name: 'Образование',
          href: '/structure/education',
        },
        {
          name: 'Материально-техническое обеспечение и оснащенность образовательного процесса.',
          href: '/structure/objects',
        },
        {
          name: 'Доступная среда.',
          href: '/structure/accessible-env',
        },
        {
          name: 'Платные образовательные услуги',
          href: '/structure/paid_education',
        },
        {
          name: 'Финансово-хозяйственная деятельность',
          href: '/structure/budget',
        },
        {
          name: 'Вакантные места для приема (перевода) обучающихся',
          href: '/structure/vacancies',
        },
        {
          name: 'Стипендии и меры поддержки обучающихся',
          href: '/structure/support',
        },
        {
          name: 'Международное сотрудничество',
          href: '/structure/international',
        },
        {
          name: 'Организация питания в образовательной организации',
          href: '/structure/feeding',
        },
        {
          name: 'Образовательные стандарты и требования',
          href: '/structure/standard',
        },
      ],
    },
    {
      name: 'Студентам',
      href: '/students',
      links: [
        {
          name: 'Объявления',
          href: '/students/announce',
        },
        {
          name: 'Трудоустройство',
          href: '/students/work',
        },
      ],
    },
    {
      name: 'Абитуриентам',
      href: '/enrollee',
      links: [
        {
          name: 'Объявления',
          href: '/enrollee/announce',
        },
        {
          name: 'Статистика',
          href: '/enrollee/statistics',
        },
      ],
    },
    {
      name: 'Педагогам',
      href: '/teachers',
      links: [
        {
          name: 'Объявления',
          href: '/teachers/announce',
        },
        {
          name: 'Статистика',
          href: '/teachers/statistics',
        },
      ],
    },
    {
      name: 'Родителям',
      href: '/parents',
      links: [
        {
          name: 'Объявления',
          href: '/parents/announce',
        },
        {
          name: 'Статистика',
          href: '/parents/statistics',
        },
      ],
    },
  ],
  footerInfo: [
    {
      name: 'Сведения об общеобразовательной организации',
      href: '/information',
      links: [],
    },
    {
      name: 'Стипендии и меры поддержки обучающихся',
      href: '/structure/teach-staff',
      links: [],
    },
  ],
  footerNav: [
    {
      name: 'Новости',
      href: '/news',
      links: [],
    },
    {
      name: 'Галерея',
      href: '/gallery',
      links: [],
    },
    {
      name: 'Связаться с нами',
      href: '/contacts',
      links: [],
    },
    {
      name: 'Абитуриентам',
      href: '/news',
      links: [],
    },
    {
      name: 'Руководство',
      href: '/structure/teach-staff',
      links: [],
    },
    {
      name: 'Педагогический состав',
      href: '/structure/teach-staff',
      links: [],
    },
    {
      name: 'ФП "Профессионалитет"',
      href: '/fp-professionals',
      links: [],
    },
    {
      name: 'Документы',
      href: '/structure/docs',
      links: [],
    },
    {
      name: 'Образование',
      href: '/structure/education',
      links: [],
    },
  ],
};

export type TNavigation = typeof navigationData;
export type TNavigationDataTop = typeof navigationData.top;
export type TNavigationDataBottom = typeof navigationData.bottom;
export type TNavigationDataInfo = typeof navigationData.footerInfo;
export type TNavigationDataFooterNav = typeof navigationData.footerNav;
