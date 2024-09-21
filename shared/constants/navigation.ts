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
  ],
  bottom: [
    {
      name: 'Сведения об общеобразовательной организации',
      href: '/information',
      links: [
        {
          name: 'Основные сведения',
          href: '/information/common',
        },
        {
          name: 'Структура и органы управления образовательной организацией',
          href: '/information/structure',
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
          name: 'Материально-техническое обеспечение и оснащенность образовательного процесса. Доступная среда.',
          href: '/structure/teach-staff',
        },
        {
          name: 'Платные образовательные услуги',
          href: '/structure/teach-staff',
        },
        {
          name: 'Финансово-хозяйственная деятельность',
          href: '/structure/teach-staff',
        },
        {
          name: 'Вакантные места для приема (перевода) обучающихся',
          href: '/structure/teach-staff',
        },
        {
          name: 'Стипендии и меры поддержки обучающихся',
          href: '/structure/teach-staff',
        },
        {
          name: 'Международное сотрудничество',
          href: '/structure/teach-staff',
        },
        {
          name: 'Организация питания в образовательной организации',
          href: '/structure/teach-staff',
        },
        {
          name: 'Образовательные стандарты и требования',
          href: '/structure/teach-staff',
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
      name: 'Аббитаруенту',
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
};

export type TNavigation = typeof navigationData;
export type TNavigationDataTop = typeof navigationData.top;
export type TNavigationDataBottom = typeof navigationData.bottom;
