import React, { type JSX, useState } from 'react';
import styles from './styles.module.css';
import videoBg from '@/assets/MainPage/Main_Video.mp4';
import downArrow from '@/assets/MainPage/downArrow.svg';
import photo1 from '@/assets/MainPage/Photos/mainPagePhoto1.jpg';
import photo2 from '@/assets/MainPage/Photos/mainPagePhoto2.jpg';
import photo3 from '@/assets/MainPage/Photos/mainPagePhoto3.jpg';
import photo4 from '@/assets/MainPage/Photos/mainPagePhoto4.jpg';
import photo5 from '@/assets/MainPage/Photos/mainPagePhoto5.jpg';
import photo6 from '@/assets/MainPage/Photos/mainPagePhoto6.jpg';
import photo7 from '@/assets/MainPage/Photos/mainPagePhoto7.jpg';
import photo8 from '@/assets/MainPage/Photos/mainPagePhoto8.jpg';
import photo9 from '@/assets/MainPage/Photos/mainPagePhoto9.jpg';
import photo10 from '@/assets/MainPage/Photos/mainPagePhoto10.jpg';
import photo11 from '@/assets/MainPage/Photos/mainPagePhoto11.jpg';
import photo12 from '@/assets/MainPage/Photos/mainPagePhoto12.jpg';
import photo13 from '@/assets/MainPage/Photos/mainPagePhoto13.jpg';
import photo14 from '@/assets/MainPage/Photos/mainPagePhoto14.jpg';
import photo15 from '@/assets/MainPage/Photos/mainPagePhoto15.jpg';
import photo16 from '@/assets/MainPage/Photos/mainPagePhoto16.jpg';
import photo17 from '@/assets/MainPage/Photos/mainPagePhoto17.jpg';
import photo18 from '@/assets/MainPage/Photos/mainPagePhoto18.jpg';
import photo19 from '@/assets/MainPage/Photos/mainPagePhoto19.jpg';
import photo20 from '@/assets/MainPage/Photos/mainPagePhoto20.jpg';
import photo21 from '@/assets/MainPage/Photos/mainPagePhoto21.jpg';
import photo22 from '@/assets/MainPage/Photos/mainPagePhoto22.jpg';
import photo23 from '@/assets/MainPage/Photos/mainPagePhoto23.jpg';
import photo24 from '@/assets/MainPage/Photos/mainPagePhoto24.jpg';
import photo25 from '@/assets/MainPage/Photos/mainPagePhoto25.jpg';
import photo26 from '@/assets/MainPage/Photos/mainPagePhoto26.jpg';
import photo27 from '@/assets/MainPage/Photos/mainPagePhoto27.jpg';
import Marquee from 'react-fast-marquee';
import { RecordingForm } from '@/entities/recorder/ui/RecForm';
import { useNavigate } from 'react-router';

const photos = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  photo13,
  photo14,
  photo15,
  photo16,
  photo17,
  photo18,
  photo19,
  photo20,
  photo21,
  photo22,
  photo23,
  photo24,
  photo25,
  photo26,
  photo27,
];

export function MainPage(): JSX.Element {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  // FAQ state
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // masonry-группы по 3 фото
  const groups = [];
  for (let i = 0; i < photos.length; i += 3) {
    groups.push([
      photos[i % photos.length],
      photos[(i + 1) % photos.length],
      photos[(i + 2) % photos.length],
    ]);
  }

  // Дублируем массив masonry-групп для длинной ленты (2-3 раза)
  const allGroups = [...groups, ...groups, ...groups];

  // FAQ data
  const faq = [
    {
      question: 'Что включено в съемку "Рождение"?',
      answer: `• съемка всего процесса родов, без анатомических подробностей\n\n• трогательный фильм с родов от 2-3 минут⁃ от 40 художественных фотографий в авторской обработке (обычно выходит около 50-80, сорок - это минимальный порок, который может быть при экстренных ситуациях)\n\n• ретушь всех кадров`,
    },
    {
      question: 'Когда нужно записываться на съемку родов?',
      answer:
        'Запись осуществляется за 1-2 месяца ДО ПДР \n\nМеста на съемку ограничены, поэтому желательно записываться заранее, чтоб гарантированно получить съемку\n\nКак записаться? \nВы пишите нам о своем желании, мы направляем вам анкету для записи\nОтправляетеответы нам - мы подтверждаем запись, высылая Вам подробную инструкцию по вызову фотографа. \nЖелательно, чтоб Вы предупредили своего парнера \n(мужа, сестру, маму) о нашей инструкции, чтоб когда у вас начались роды Вы про нас не забыли и не вызвали в последний момент, поскольку мы можем не успеть доехать',
    },
    {
      question: 'Что делать если съемка начнется раньше или позже ПДР?',
      answer:
        'У нас в проекте работает несколько фотографов и если вы у нас записаны и мы подтверждаем Вам запись, мы гарантированно ждем вашего звонка\n\nЗа 2 недели до и после ПДР фотограф сдает нужные анализы и ожидает вашего звонка\nНаш график настолько гармонично составлен, что фотографы дежурят 24/7, поэтому ничего страшного если все случится раньше, либо позже\n Ваш фотограф будет вас очень ждать.🤍',
    },
    {
      question: 'Как проходит съемка выписки?',
      answer:
        'Съемка выписки длится около 30-40 минут рассчиттывайте, пожалуйста, заранее время, чтоб фотографам не приходилось ждать, мы понимаем, как все мамочки хотят домой, поэтому выбирайте время, чтоб не задерживать следующие съемки\n\nСъемка выписки начинается в палате, фотограф приезжает в родддом тогда, когда Вы просите всех гостей приехать и привезти вам вещи на выписку.К моменту, когда приезжают гости, к вам в палату поднимется фотограф. Вы уже должны быть собраны, накрашены, малыш должен быть накормлен\n\n Мы делаем каждой нашей маме красивейшие портреты в стиле «утро перед выпиской», когда мама в халатике, а малыш на ручках в памперсе. Это занимает около 10 минут, поэтому гостям долго ждать не придется\n\nПосле того, как фотограф сделает вам эти милые кадры, вы зовете медсестру и та начинает одевать малыша, паралелльно одевается мама. Далее вы все вместе спускатесь в выписной зал и там происходит самая главная встреча - торжественная передача малыша папе и основная фотосессия на фотозоне. Если погода позволяет, то фотограф будет рад сделать вам несколько кадров на улице!',
    },
    {
      question: 'Что такое Natural Newborn?',
      answer:
        'Наш ньюборн - это новый виток в съемках новорожденных малышей, напоминаем, что это не классический ньюборн.\n\n Миссия нашего проекта - запечталеть как можно больше деталей и теплых моментов, ведь нам искренне кажется, что когда через десятки лет вы откроете свои кадры со съемки ньюборн - они будут не просто милые, а трогать до глубины души. Ведь первый поцелуй папы в макушку, мамины нежные руки - это именно те моменты, которые вернут вас в то самое время\n\nСъемка осуществляется после рождения в течение 72 часов в стенах роддома (либо у вас дома в течени 3-4 после рождения)\n\n• Съемка в палате/дома (1 час)\n\n• Милейшие первые кадры малыша в авторской обработке, первые семейные кадры, которые вы захотите поставить в рамку (от 30 кадров в серии)\n\n• Ретушь всех кадров',
    },
    {
      question: 'Сроки отдачи материала?',
      answer:
        'Сроки отдачи материала с фотосъемки родов - до 2-ух месяцев со дня рождения\n\nСроки отдачи материала со съемки «Natural newborn» - месяц со съемки\n\nСроки отдачи материала со съемки выписки - месяц со дня выписки\n\n*СРОЧНАЯ ОБРАБОТКА ФОТО И ВИДЕО В ТЕЧЕНИЕ НЕДЕЛИ - 10.000',
    },
    {
      question: 'Как получить материал с фотосъемки?',
      answer:
        'Наши менеждеры тщательно следят за сроками, и отправят Вашу красоту в течении указанного срока ссылкой на Яндекс Диск. по Вашему номеру телефона в Whatsapp\n\n*Ваш материал хранится на Яндекс Диске 1 месяц, настоятельно рекомендуем Вам скачивать материал на свои носители до окончания срока хранения.',
    },
  ];

  return (
    <>
      <div className={styles.mainPage}>
        <div className={styles.videoContainer}>
          <video autoPlay muted loop playsInline className={styles.videoBg}>
            <source src={videoBg} type='video/mp4' />
            Ваш браузер не поддерживает воспроизведение видео.
          </video>
          <div className={styles.videoOverlay}></div>
          <div className={styles.gradientFade}></div>
        </div>
        <div className={styles.centerContent}>
          <div className={styles.mainPage_content}>
            <p className={styles.mainPage_title}>Истории семьи в кадре</p>
            <p className={styles.mainPage_subtitle}>
              От первых минут жизни до больших праздников —<br />
              мы рядом, чтобы сохранить главное
            </p>
            <button className={styles.mainPage_button}>Записаться</button>
          </div>
          <div className={styles.mainPage_link}>
            <img src={downArrow} alt='downArrow' className={styles.downArrow} />
            <p className={styles.mainPage_link_text}>узнать о нас больше</p>
          </div>
        </div>
      </div>
      <div>
        <section className={`${styles.advantagesGrid} ${styles.wrapper}`}>
          <div className={styles.advantageItem}>
            <div className={styles.advantageTitle}>
              <span className={styles.advantageAccent}>7</span> лет опыта
            </div>
            <div className={styles.advantageLine}></div>
            <div className={styles.advantageDesc}>
              Опыт в профессиональной
              <br />
              фотографии
            </div>
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.advantageTitle}>
              <span className={styles.advantageAccent}>Премиум</span>
            </div>
            <div className={styles.advantageLine}></div>
            <div className={styles.advantageDesc}>
              Используем только лучшую
              <br />и качественную технику
            </div>
          </div>
          <div className={styles.advantageItem}>
            <div className={styles.advantageTitle}>
              <span className={styles.advantageAccent}>Комплекс</span> услуг
            </div>
            <div className={styles.advantageLine}></div>
            <div className={styles.advantageDesc}>
              Организация фотосессии от
              <br />
              платья до фотокниги
            </div>
          </div>
        </section>
      </div>
      <section className={styles.masonryCarouselSection}>
        <Marquee
          pauseOnHover={false}
          pauseOnClick={false}
          play={!isPaused}
          speed={60}
          gradient={false}
          style={{ width: '100vw', height: '100vh', alignItems: 'center' }}
        >
          {allGroups.map((group, idx) => (
            <div
              className={styles.masonryGroup}
              key={idx}
              style={{
                minWidth: 480,
                marginRight: 3,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={group[0]}
                className={styles.masonryLarge}
                alt=''
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              />
              <div className={styles.masonrySmallCol}>
                <img
                  src={group[1]}
                  className={styles.masonrySmall}
                  alt=''
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
                <img
                  src={group[2]}
                  className={styles.masonrySmall}
                  alt=''
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </section>

      <button
        type="button"
        className={styles.outlineButton}
        onClick={() => navigate('/')}
      >
        <span className={styles.cameraIcon}>
          <svg
            width="23"
            height="23"
            viewBox="0 0 20 20"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3"
              y="6"
              width="14"
              height="10"
              rx="3"
              stroke="#222"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="11" r="3" stroke="#222" strokeWidth="1.5" />
            <rect
              x="7"
              y="3"
              width="6"
              height="3"
              rx="1.5"
              stroke="#222"
              strokeWidth="1.5"
            />
          </svg>
        </span>
        Смотреть все работы
      </button>

      <RecordingForm />

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQ / Вопрос-ответ</h2>
        <div className={styles.faqAccordion}>
          {faq.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                {item.question}
                <span className={styles.faqArrow}>
                  {openIndex === idx ? '▲' : '▼'}
                </span>
              </button>
              {openIndex === idx && (
                <div className={styles.faqAnswer}>
                  {item.answer.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
