import SectionPregnancyPhoto1 from "@/assets/MainPage/Photos/SectionPregnancyPhoto1.jpg";
import SectionPregnancyPhoto2 from "@/assets/MainPage/Photos/SectionPregnancyPhoto2.jpg";
import SectionPregnancyPhoto3 from "@/assets/MainPage/Photos/SectionPregnancyPhoto3.jpg";
import { pregnancyFAQData } from "./FAQ_data";

export const pregnancyData = {
  title: "Беремeнность",
  introText:
    "Красота и чудо беременности – это настоящая магия, когда в теле женщины зарождается новая жизнь и это особенное время, которое хочется сохранить. \n\n Мы берём на себя всю подготовку: образы, аксессуары, идеи и организацию, во все наши пакеты включена студия, чтоб вы могли максимально расслабиться и насладиться моментом!",
  faqData: pregnancyFAQData,
  priceGroupIndex: 1, // Индекс группы цен для обремененных
  photos: [
    SectionPregnancyPhoto1,
    SectionPregnancyPhoto2,
    SectionPregnancyPhoto3,
  ],
  additionalInfo: {
    title: "НЕ ВКЛЮЧЕНО",
    items: [
      "Визаж и укладка. Исключение в пакете «PREMIUM», где все включено.",
      "Стилист по гардеробу.",
      "Плата за такси, парковку и т.д.",
    ],
    note: "*Каждый дополнительный час съемки или каждое дополнительное фото на обработку обсуждать с менеджером.",
  },
};