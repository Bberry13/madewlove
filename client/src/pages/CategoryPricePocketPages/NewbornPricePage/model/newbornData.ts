import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import { newbornFAQData } from "./FAQ_data";

export const newbornData = {
  title: "Ньюборн",
  introText:
    "Мы снимаем все виды ньюборн-съёмок — от домашних до студийных,\n\rно наш главный фокус — натуральность и искренние эмоции.\n\r\n\rМы создали два пакета:\n\rNATURAL и CLASSIC NEWBORN — каждый с душой и вниманием к деталям.\n\rМинимум обмоток и фотошопа, максимум тепла: светлые и кофейные тона, натуральные ткани, настоящие чувства.\n\rКаждая родинка, маленькие ручки и ножки — это история, которую хочется сохранить.\n\rМы приедем со всем реквизитом, идеями и заботой — а вы получите тёплые, живые кадры, которые захочется пересматривать снова и снова",
  faqData: newbornFAQData,
  priceGroupIndex: 6, // Индекс группы цен для ньюборн
  photos: [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3],
  additionalInfo: {
    title:
      "У нас два формата newborn-съёмки: NATURAL NEWBORN и CLASSIC NEWBORN",

    note: "Natural - живые, нежные кадры в лайф-стиле, съёмку можно провести и в роддоме\nClassic - постановочная журнальная эстетика со студийным светом у вас дома",
  },
};
