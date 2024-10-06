import { prisma } from './prisma-client';

async function up() {
  await prisma.department.createMany({
    data: [
      {
        name: 'Электрик',
        shortDescription:
          'Специалист, который устанавливает, обслуживает и ремонтирует системы электроснабжения, сети связи, электроцепи, системы освещения и управления электрооборудованием, электрические приборы.',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=9963f9a84e26801ded6c30bedf1c577f_l-5249239-images-thumbs&n=13',
      },
      {
        name: 'Повар-кондитер',
        shortDescription:
          'Высококвалифицированное приготовление пищи и десертов в ресторанах, кафе и других заведениях общественного питания.',
        imageUrl:
          'https://vpechatleniya.ru/upload/iblock/3b6/5xzp61a4a5ngatd7m1wze166mebgzf1x.jpeg',
      },
      {
        name: 'Туризм и гостеприимство',
        shortDescription:
          'Комплексная организация и проведение экскурсий, путешествий для групп и индивидуальных туристов.',
        imageUrl:
          'https://avatars.dzeninfra.ru/get-zen_doc/1525719/pub_6030eea7a332dd7373ec4f30_6030f24e084cc34524836db7/scale_1200',
      },
      {
        name: 'Экономика и бухгалтерское учет',
        shortDescription:
          'Анализ экономических данных, составление детальных финансовых отчетов, управление сложными бюджетами крупных организаций.',
        imageUrl: 'https://пресса56.рф/uploads/posts/2022-07/financial-min.webp',
      },
      {
        name: 'Торговое дело',
        shortDescription:
          'Разработка и реализация стратегий розничной и оптовой торговли, управление сетями торговых центров и супермаркетов.',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=a97d857536e74771f230a212188fc4a0_l-5884156-images-thumbs&n=13',
      },
      {
        name: 'Документальное обеспечение управления',
        shortDescription:
          'Подготовка и оформление официальных документов, связанных с принятием важных управленческих решений.',
        imageUrl:
          'https://i.vuzopedia.ru/storage/app/uploads/public/633/ed7/ac1/633ed7ac18798340724464.jpg',
      },
      {
        name: 'Информационные системы и программирование',
        shortDescription:
          'Специальность охватывает достаточно широкий спектр сфер профессиональной деятельности, что позволяет получить знания о безопасности информационных систем, техническом обслуживании и ремонте компьютеров, администрировании сетей, прикладном и системном программировании, WEB-дизайне и графическом моделировании объектов.',
        imageUrl:
          'https://razoom.mgutm.ru/pluginfile.php/932/course/overviewfiles/dcb4bf9ef3dceed4e45e918a91a0e65209826062_1024_568.jpg',
      },
      {
        name: 'Технология машиностроения',
        shortDescription:
          'Для тех, кто стремится что-то делать своими руками, управлять современными станками и сложными машинами, выполнять чертежи на компьютере, точить детали на станке.',
        imageUrl:
          'https://www.mivlgu.ru/iop/pluginfile.php/57698/course/overviewfiles/1614858190_129-p-inzhenernii-fon-152.jpg',
      },
      {
        name: 'Слесарь',
        shortDescription:
          'Специалист по ручной обработке металлов, древесины и других материалов, включая операции по их сборке, разборке и ремонту на производстве или в быту',
        imageUrl:
          'https://www.allianzgi.com/-/media/allianzgi/globalagi/editorial/booming-us-economy/2304x1296-booming-us-economy.jpg?rev=67f166b3cdfb49b4b8c49a394cf21f74&hash=D44E15A9C382F3D911BE7EBF0495B92B',
      },
    ],
  });

  await prisma.departmentItem.createMany({
    data: [
      {
        bigImageUrl: 'https://gorodrabot.ru/images/news/102664.jpg?v=1590011018',
        topDescription:
          'Повар-кондитер - это высококвалифицированный специалист, который занимается приготовлением различных блюд и десертов в ресторанах, кафе и других заведениях общественного питания./P/ Основные обязанности повара-кондитера включают в себя приготовление сложных блюд, создание кондитерских изделий, разработку новых рецептов и контроль качества готовой продукции./P/ Для работы в этой профессии требуется не только отличное знание кулинарного искусства, но и творческий подход, внимательность к деталям и способность работать в условиях высокого темпа./P/ Повар-кондитер должен быть в курсе последних кулинарных трендов, уметь работать с различными ингредиентами и технологиями приготовления, а также соблюдать правила гигиены и санитарии./P/ Эта профессия требует постоянного совершенствования навыков и знаний, поэтому многие повара-кондитеры продолжают обучение на протяжении всей карьеры, посещая мастер-классы и кулинарные курсы.',
        bottomDescription:
          'Выбор профессии повара-кондитера - это отличная возможность для тех, кто любит кулинарию и хочет создавать вкусные и красивые блюда. Эта профессия открывает широкие возможности для карьерного роста и творческого развития, а также позволяет работать в разных странах и культурах.  /P/ Повар-кондитер имеет возможность не только удовлетворять свои кулинарные амбиции, но и приносить радость и удовольствие людям через свою работу. Это профессия, которая сочетает в себе искусство, науку и креативность, что делает ее привлекательной для тех, кто ищет не только стабильную работу, но и возможность для постоянного развития и самореализации.',
        departmentId: 2,
      },
    ],
  });

  await prisma.mainSliderData.createMany({
    data: [
      {
        title: 'ГАПОУ КО «Обнинский колледж технологий и услуг',
        text: 'Министерство образования и науки Калужской Области',
        imageUrl: 'https://i.pinimg.com/originals/e8/cf/4f/e8cf4f370ac203852ca706f70229e1dc.jpg',
      },
      {
        title: 'Информационные системы и программирование',
        text: 'Стань востребованным специалистом в сфере IT',
        imageUrl:
          'https://avatars.mds.yandex.net/get-altay/9833397/2a00000188f7c674bae6c89f2b612d16e872/orig',
      },
      {
        title: 'Объявялется набор!',
        text: 'В ОКТУ во всю идет прием новых абитуриентов. Приемная комиссия работает до 21 августа. Успейте подать документы!',
        imageUrl: 'https://mguu.ru/wp-content/uploads/2016/07/21B8727-1.jpg',
      },
    ],
  });

  await prisma.quote.create({
    data: {
      author: 'Директор ОКТУ Ксения Николаевна Лаптева',
      text:
        'Мы уже более 100 лет готовим кадры для всевозможных отраслей Калужской области. Сегодня\n' +
        'обучение в техникуме ведётся по семи основным профессиональным образовательным программам\n' +
        'среднего профессионального образования.',
      imageUrl: '/assets/master.jpg',
    },
  });

  await prisma.titlesSection.createMany({
    data: [
      {
        name: 'Абитуриентам',
        href: '/enrollee',
        imageUrl: 'https://cdn.culture.ru/images/a5f89336-b34e-58b8-9850-69a8b6eef443',
      },
      {
        name: 'Студентам',
        href: '/students',
        imageUrl: 'https://www.hse.ru/data/2019/07/09/1480012687/1shutterstock_1077839504.jpg',
      },
      {
        name: 'Педагогам',
        href: '/teachers',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=02c1a67a8fb08273ebd84327311f824a_l-5233966-images-thumbs&n=13',
      },
      {
        name: 'Образование',
        href: '/structure/education',
        imageUrl:
          'https://avatars.dzeninfra.ru/get-zen_doc/4581585/pub_640d6c350c912a32a1938ad7_640d6dbd352af862c44ec20e/scale_1200',
      },
      {
        name: 'Профессионалитет',
        href: '/fp-professionals',
        imageUrl:
          'https://sun9-44.userapi.com/impg/TZZu-o-5SAR2XX-yFJkZv3C39uzQXQoyaljHiA/EkT2fWTziXc.jpg?size=807x454&quality=96&sign=e7ffccd3f77500773ed396fb47269480&c_uniq_tag=tcDWX0dnb4AAqzm_fVXaCHTgOdEalQbx_T_3RaCl-sk&type=album',
      },
    ],
  });

  await prisma.post.createMany({
    data: [
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
      {
        name: 'Шахматный турнир открыт!',
        shortDescription: 'В ОКТУ начался отбор первого тура шахматного турнира Сутулая Пешка',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=cdf2d76e485908eaf391fae7edf9fe1c_l-5468554-images-thumbs&n=13',
      },
      {
        name: 'Вкусно и точка.',
        shortDescription:
          'Со следующей недели в нашем колледже еда в столовой выйдет на новый уровень!',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=e617fbac4d50e0028654f4e1b514678d_l-6625580-images-thumbs&n=13',
      },
      {
        name: 'Снова разборки...',
        shortDescription:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4ebccee4fdb3c283ad7ba845af92df3a_l-8312904-images-thumbs&n=13',
      },
      {
        name: 'Завершился  третий Хакатон!',
        shortDescription: 'Грандиозная победа в состезании HTML-gods',
        imageUrl: 'https://live.staticflickr.com/8273/8824555500_865d4e1f26_b.jpg',
      },
      {
        name: 'Приглашаем всех',
        shortDescription: 'Сегодня во всех 3 отделениях начался день открытых дверей',
        imageUrl:
          'https://www.transitionslifecare.org/wp-content/uploads/2023/02/hd-wallpaper-gb7b6997dc_1920.jpg',
      },
      {
        name: 'Новая звезда',
        shortDescription: 'Новый преподаватель уже во всю обучает студентов IT направления',
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=4529b2f7d26f3fc55bca3b6debe22b18_l-7046448-images-thumbs&n=13',
      },
    ],
  });

  await prisma.postItem.createMany({
    data: [
      {
        description:
          'В столовой после приема пищи, местный бунтарь Женя опять устроил бутчу из-за недоложенных кобачков в порции /P/ События развернулись в обеденное время, когда студенты собрались в столовой, чтобы подкрепиться после напряженного утреннего блока занятий. Женя, известный своей активной позицией и требовательностью к качеству питания, внимательно осмотрел свою порцию и обнаружил, что количество кобачков не соответствует его ожиданиям. /P/ Начав с мирного диалога с персоналом столовой, Женя постепенно перешел к более решительным действиям. Он поднял свой голос, привлекая внимание окружающих, и начал убедительно объяснять, почему недодача кобачков является нарушением его прав как потребителя и студента. Вскоре в столовую прибыли представители администрации, которые попытались урегулировать конфликт. /P/ После длительных переговоров было принято решение дополнительно выдать кобачки всем желающим. Женя, удовлетворенный результатом, объявил о завершении бутча и призвал всех вернуться к спокойному приему пищи.',
        postId: 3,
      },
    ],
  });

  await prisma.image.createMany({
    data: [
      {
        name: 'На всеобщем собрании',
      },
      {
        name: 'Собрание перед повышением квалификации',
      },
      {
        name: 'Атомный диктант',
      },
    ],
  });

  await prisma.imageItem.createMany({
    data: [
      {
        imageUrl:
          'https://avatars.mds.yandex.net/i?id=2a000001921cac0d87d36cc3d3fc31ec391e-934138-fast-images&n=13',
        imageId: 1,
      },
      {
        imageUrl: 'https://smolgazeta.ru/fc-web/fc-files/2024/09/147762.jpg',
        imageId: 1,
      },
      {
        imageUrl: 'https://img-fotki.yandex.ru/get/103922/319871141.41/0_1d9f09_bf7effb_orig.jpg',
        imageId: 2,
      },
      {
        imageUrl: 'https://apt29.ru/wp-content/uploads/2021/06/DSC_0007-3-2048x1365.jpg',
        imageId: 2,
      },
      {
        imageUrl:
          'https://ilmen.minobr63.ru/wp-content/uploads/IMG-8759ad1130b718b6ab3f6e9d331cb7a7-V.jpg',
        imageId: 3,
      },
    ],
  });

  await prisma.direction.createMany({
    data: [
      {
        role: 'Директор',
        fullName: 'Лаптева Ксения Николаевна',
        phone: 74843960167,
        email: 'ksl299@yandex.ru',
      },
      {
        role: 'Зам. директора по УР',
        fullName: 'Наталья Лучина',
        phone: 74843963888,
        email: 'kolledg-nmz@mail.ru',
      },
      {
        role: 'Зам. директора по УПР',
        fullName: 'Вера Тарасова',
        phone: 74843933186,
        email: 'vera-tumanova@mail.ru',
      },
      {
        role: 'Зам. директора по УПР',
        fullName: 'Юлия Кочеватова',
        phone: 74843967321,
        email: 'jul_informatio@mail.ru',
      },
      {
        role: 'Зам. директора по УВР',
        fullName: 'Елена Бусловская',
        phone: 74843964487,
        email: 'buelvl@mail.ru',
      },
    ],
  });

  await prisma.teachStaff.createMany({
    data: [
      {
        role: 'Педагог',
        fullName: 'Ирина Станиславовна',
      },
      {
        role: 'Педагог',
        fullName: 'Светлана Григорьевна',
      },
      {
        role: 'Педагог',
        fullName: 'Сергей Сергеевич',
      },
      {
        role: 'Педагог',
        fullName: 'Татьяна Витальевна',
      },
      {
        role: 'Педагог',
        fullName: 'Светлана Филипповна',
      },
      {
        role: 'Педагог',
        fullName: 'Александр Новиков',
      },
    ],
  });

  await prisma.file.createMany({
    data: [
      {
        name: 'Программа модернизации ОКТУ на 2018-2024 гг',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 0,
      },
      {
        name: 'Программа профессионального воспитания и социализации обучающихся на 2019-2022 гг.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 0,
      },
      {
        name: 'Программа профессионального воспитания и социализации обучающихся на 2019-2023 гг.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 0,
      },
      {
        name: 'Положение о порядке оказания платных образовательных услуг',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 0,
      },
      {
        name: 'Публичный отчет за 2023 г.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 0,
      },
      {
        name: 'Основные сведения',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 1,
      },
      {
        name: 'Положение об учебной части ОКТУ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 2,
      },
      {
        name: 'Положение о хозяйственной части ОКТУ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 2,
      },
      {
        name: 'Положение о ресурсном центре ОКТУ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 2,
      },
      {
        name: 'Положение о библиотеке ОКТУ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 2,
      },
      {
        name: 'Положение об архиве ОКТУ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 2,
      },
      {
        name: 'Правила внутреннего распорядка обучающихся',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 3,
      },
      {
        name: 'Правила внутреннего трудового распорядка работников',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 3,
      },
      {
        name: 'Коллективный договор. Дополнение к коллективному договору 2024',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 3,
      },
      {
        name: 'Отчет о результатах самообследования за 2023 год',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 3,
      },
      {
        name: 'Календарный план воспитательной работы',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 3,
      },
      {
        name: 'Программа воспитания 2023 г.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 4,
      },
      {
        name: 'Календарный план воспитательной работы',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 4,
      },
      {
        name: 'Численность обучающихся за счет бюджетных ассигнований на 01 декабря 2023 года',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 4,
      },
      {
        name: 'Количество мест для перевода в 2023-2024 уч.году',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 4,
      },
      {
        name: 'Результаты приема абитуриентов в 2023 году',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 4,
      },
      {
        name: 'Оснащенность аудиторий',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 5,
      },
      {
        name: 'Информация об условиях питания, в том числе для лиц с ОВЗ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Информация о наличии специальных технических средств обучения коллективного и индивидуального пользования для инвалидов и лиц с ОВЗ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Информация об электронных образовательных ресурсах, к которым обеспечивается доступ обучающихся, в том числе приспособленных для использования инвалидами и лицами с ОВЗ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Информация об условиях охраны здоровья обучающихся, в том числе инвалидов и лиц с ОВЗ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Информация о доступе к информационным системам и информационным телекоммуникационным сетям, в том числе приспособленным для использования инвалидами и лицами с ОВЗ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Подключение к ЭБС',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 6,
      },
      {
        name: 'Договор на оказание платных образовательных услуг (СПО)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Договор на оказание платных образовательных услуг (ДПО)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Договор на оказание платных образовательных услуг (ПО)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Договор на оказание платных услуг с несовершеннолетними обучающимися (ПО)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Калькуляции платных образовательных услуг',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Калькуляция затрат по профессии 16675 Повар (профессиональная подготовка)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 7,
      },
      {
        name: 'Финансово-хозяйственная деятельность',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 8,
      },
      {
        name: 'План финансово хозяйственной деятельности на 2022 год',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 8,
      },
      {
        name: 'Отчет об исполнении государственного задания за 2021 г.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 8,
      },
      {
        name: 'Госзадание на 2022 год и плановый период 2023 и 2024 гг.',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 8,
      },
      {
        name: 'Численность студентов ГАПОУ КО "ОКТУ", обучающихся по программам СПО',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 9,
      },
      {
        name: 'Вакантные места по программам СПО',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 9,
      },
      {
        name: 'Положение о порядке назначения и выплаты государственной академической и социальной стипендии',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 10,
      },
      {
        name: 'Приказ о внесении изменений от 26.09.2023 г №784',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 10,
      },
      {
        name: 'Положение о стипендиальной комиссии',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 10,
      },
      {
        name: 'Заключенный  договор с  Профессиональным Лицеем Гостиничного и Ресторанного дела и Питания им. Жана Монз в Лиможе (Франция), в лице его Провизора господина Филиппа ШАДЕЛА',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 11,
      },
      {
        name: 'Организация питания в образовательной организации',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 12,
      },
      {
        name: '08.02.01 Строительство и эксплуатация зданий и сооружений',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '07.02.01 Архитектура',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '35.02.12 Садово-парковое и ландшафтное строительство',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.07 Монтаж и эксплуатация внутренних сантехнических устройств, кондиционирования воздуха и вентиляции',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.08 Монтаж и эксплуатация оборудования и систем газоснабжения',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.04 Водоснабжение и водоотведение',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.01.25 Мастер отделочных строительных и декоративных работ',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '35.02.12 Садово-парковое и ландшафтное строительство 2022 г',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.01.28 Мастер отделочных строительных и декоративных работ 2022 г',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '54.01.20 Графический дизайнер',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.14 Эксплуатация и обслуживание многоквартирного дома',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.15 Информационное моделирование в строительстве',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '07.02.01 Архитектура 2023 г',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '54.02.01 Дизайн (по отраслям)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.04 Водоснабжение и водоотведение (2023)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '08.02.13 Монтаж и эксплуатация внутрених сантехнических устройств, кондиционирования воздуха и вентиляции',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: '07.02.01 Архитектура (2014)',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 13,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 14,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 14,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 15,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 15,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 16,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 16,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 17,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 17,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 18,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 18,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 19,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 19,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 19,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 20,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 20,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 21,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 21,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 22,
      },
      {
        name: 'Тестовый файл',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 22,
      },
      {
        name: 'Как оставить свой отзыв о качестве услуг, предоставляемых нашей образовательной организацией',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 23,
      },
      {
        name: 'План мероприятий по улучшению качества оказания образовательных услуг',
        href: 'https://docs.google.com/document/d/1e8shSom31_wT0mty0sRhf0uNLE_M_zim_p_Y7t7N1Cg/edit',
        category: 23,
      },
    ],
  });

  await prisma.paidEducation.createMany({
    data: [
      {
        department: 'Повар',
        duration: '4 месяца',
        making: '2-3 разряд',
        price: 18000,
        comment: 'Начало занятий 01.10.22г.',
      },
      {
        department: 'Повар',
        duration: '1 месяц',
        making: '3-4 разряд',
        price: 0,
        comment: 'По проекту «Содействие занятости», прием через ЦЗН',
      },
      {
        department: 'Официант',
        duration: '1 месяц',
        making: '3 разряд',
        price: 0,
        comment: 'По проекту «Содействие занятости», прием через ЦЗН',
      },
      {
        department: 'Бармен',
        duration: '1 месяц',
        making: '3 разряд',
        price: 0,
        comment: 'По проекту «Содействие занятости», прием через ЦЗН',
      },
      {
        department: 'Сварщик ручной дуговой сварки плавящимся покрытым электродом',
        duration: '3,5 месяца',
        making: '3 разряд',
        price: 30000,
        comment: 'Тел. 8(48439)67321 Кочеватова Юлия Александровна',
      },
    ],
  });

  await prisma.professionals.createMany({
    data: [
      {
        title: 'Профессионалитет 2022',
        description:
          '01 сентября 2022 года День знаний явился для Обнинского колледжа технологий и услуг рядом знаменательных событий! /P/ В этот день состоялось торжественное открытие двух новых мастерских в рамках проекта «Молодые профессионалы» по компетенциям «Промышленная механика и монтаж» и «Электромонтаж». На данном мероприятии присутствовали руководители ведущих предприятий города и области с которыми колледж активно сотрудничает, а именно: ООО «РАСТР-технология», ПАО ПЗ «Сигнал», Филиал АО ЦС «Звездочка» опытный завод «Вега». /P/ В связи с реформами в сфере среднего профессионального образования, направленными на развитие отечественной промышленности, в нашем колледже к обучению приступили студенты группы ТМ 11-22 по специальности «Технология машиностроения» в рамках Федерального проекта «ПРОФЕССИОНАЛИТЕТ», так как Калужская область вошла в число пилотных регионов, которые участвуют в проекте по направлению машиностроение. (В калужской области всего 5 учебных заведений участвуют в ФП «ПРОФЕССИОНАЛИТЕТ»).',
      },
      {
        title: 'ПЛАНЕТА ЧПУ',
        description:
          '22.12.2022 года состоялась экскурсия на филиал АО ЦС «Звездочка, опытный завод «Вега». В экскурсии приняли участие студенты первого курса ГАПОУ КО «ОКТУ», обучающиеся по специальности «Технология машиностроения», которые, в свою очередь являются участниками федеральной программы «Профессионалитет». /P/ Организация экскурсии была осуществлена в рамка сотрудничества «Обнинского колледжа технологий и услуг» и представителей администрации опытного завода «Вега». /P/ Студенты колледжа ознакомились со структурой производства завода «Вега», проследовали в основные и вспомогательные цеха предприятия. /P/ Продукция, производимая заводом – сложные по форме и конфигурации элементы гребных винтов военных и гражданских кораблей. По этому основной объем работ выполняется на станках с числовым программным управлением. /P/ Частью экскурсии было увлекательное интерактивное занятие со студентами колледжа. Ребята ознакомились с работой пятикоординатного обрабатывающего центра с ЧПУ. Изучили основные элементы чертежа обрабатываемой детали, такие как: линейные размеры, допуски на линейные размеры, допуски формы и расположения поверхностей, шероховатость поверхности.',
      },
      {
        title:
          'Стажировка на предприятии – лидере отрасли по калужской области ООО «Людиновский тепловозостроительный завод».',
        description:
          'С 22.11.2022 по 25.11.2022 г. сотрудники Обнинского колледжа технологий и услуг проходили стажировку на одном из старейших машиностроительных заводов калужской области – ООО «Людиновский тепловозостроительный завод», являющимся предприятием – лидером отрасли. /P/ Стажировка проводилась в рамках федерального проекта «Профессионалитет». В процессе стажировки преподаватели колледжа ознакомились с технологическим циклом изготовления продукции производства. Была проведена теоретическая и практическая подготовка к работе на современном промышленном оборудовании, станках с числовым программным управлением, автоматизированных конвейерных линий по сборке технологических узлов механизмов. Большую помощь в процессе теоретического и практического обучения оказали наставники стажировки, общение с которыми проходило в легком и не принудительном формате. /P/ Навыки, полученные в процессе стажировки на предприятии, буду служить серьезным фундаментом для подготовки будущих специалистов, обучающихся по специальности «Технология машиностроения» в рамках федерального проекта «Профессионалитет». ',
      },
      {
        title: 'Прохождение стажировки на базе современных мастерских колледжей.',
        description:
          'В рамках федерального проекта «Профессионалитет» сотрудники Обнинского колледжа технологий и услуг проходили стажировку на базе современных мастерских колледжей. Стажировка проводилась с 28.11.2022 по 08.12.2022 г. на базе стажировочной площадки Уфимского авиационного техникума Уфимского университета науки и технологий и Смоленской академии профессионального образования в мастерских «Токарные работы на станках с ЧПУ». /P/ В процессе стажировки преподавателями Обнинского колледжа технологий и услуг были получены качественные навыки работы на станках с ЧПУ. Детально был проработан процесс создания управляющей программы для токарного станка с ЧПУ при помощи программного CAM – модуля (Mastercam) по автоматизированной разработке управляющих программ. После чего готовая программа была запущена на токарном станке с ЧПУ, результатом чего явилась готовая к использованию деталь.',
      },
      {
        title: 'Профессиональное тестирование "НАЙДИ СЕБЯ"',
        description:
          'Для определения зоны оптимального профессионального выбора школьников в рамках реализации ФП «Профессионалитет» на базе «Обнинского колледжа технологий и услуг» 23.01.2023г проведено профессиональное тестирование «Найди себя» для учащихся 9-х классов школ г.Обнинска. /P/ Данная методика была адаптирована под специальности колледжа, где по результатам тестирования можно определить ту специальность, которая входит в круг интересов и способностей школьника.',
      },
      {
        title:
          'Взаимодействие с работодателями по трудоустройству и организации практического обучения',
        description:
          'Трудоустройство молодого специалиста и начало работы по специальности - важнейший этап его профессиональной жизни, а успешность трудоустройства - один из главных показателей качества образования. /P/ 06.02.2023г в рамках ФП «Профессионалитет» «Обнинский колледж технологий и услуг» совместно с работодателям предприятий ОАО ПЗ «Сигнал», ГНЦ РФ – ФЭИ, ООО «Ниармедик Фарма» проанализировали потребность предприятий ОПК в выпускниках колледжа, возможность трудоустройства и производственного обучения, включая дипломное проектирование по тематике, согласованной с предприятием.',
      },
    ],
  });

  await prisma.npEducation.createMany({
    data: [
      {
        title: 'Реализация гранта',
        description:
          'Реализация гранта «Государственная поддержка профессиональных образовательных организаций в целях обеспечения соответствия их материально-технической базы современным требованиям» 2022 г. /P/ Реализация гранта «Государственная поддержка профессиональных образовательных организаций в целях обеспечения соответствия их материально-технической базы современным требованиям» 2019 г. /P/ В 2019 году по итогам конкурса Министерства просвещения РФ ГАПОУ КО "Обнинский колледж технологий и услуг» получил грант из федерального бюджета в форме субсидий юридическим лицам в рамках реализации мероприятия «Государственная поддержка профессиональных образовательных организаций в целях обеспечения соответствия их материально-технической базы современным требованиям» Федерального проекта «Молодые профессионалы» (Повышение конкурентоспособности профессионального образования) национального проекта «Образование» государственной программы «Развитие образования».',
      },
      {
        title: 'Создание современных мастерских позволит:',
        description:
          'увеличить количество реализуемых программ профессионального обучения и дополнительного профессионального образования по востребованным, новым и перспективным профессиям и специальностям в соответствии с приоритетами региона и обновить их содержание, внедрить новые средства и методы организации образовательного процесса; /P/ сформировать перечень дополнительных программ подготовки, переподготовки и повышения квалификации с учетом современных производственных технологий; /P/ расширить возможности использования демонстрационного экзамена как формы оценки качества подготовки специалистов по выбранному направлению; /P/ организовать работу по повышению квалификации сотрудников, занятых в использовании и обслуживании материально-технической базы мастерских; /P/ расширить возможности Организации по созданию площадок и проведению соревнований в рамках чемпионата «Молодые профессионалы» («Ворлдскиллс России»); /P/ продолжить развитие сетевого взаимодействия с образовательными организациями разных уровней, с организациями-работодателями с целью создания условий для проведения независимой оценки квалификации, распространения накопленного опыта; привлечь внимание абитуриентов к актуальным для экономики региона специальностям и профессиям.',
      },
    ],
  });

  await prisma.link.createMany({
    data: [
      {
        name: 'Основные сведения',
        href: '/structure/common',
        mainSliderDataId: 1,
      },
      {
        name: 'Перейти к профессии',
        href: '/department/7',
        mainSliderDataId: 2,
      },
      {
        name: 'Подать документы',
        href: '/contacts',
        mainSliderDataId: 3,
      },
      {
        name: 'К новостям',
        href: '/news',
        quoteId: 1,
      },
    ],
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Department" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "DepartmentItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "MainSliderData" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Link" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Quote" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "TitlesSection" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "PostItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Image" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ImageItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Direction" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "TeachStaff" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "File" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "PaidEducation" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Professionals" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "NpEducation" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
