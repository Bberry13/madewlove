import mainPagePhoto1 from "@/assets/MainPage/Photos/mainPagePhoto1.jpg";
import mainPagePhoto2 from "@/assets/MainPage/Photos/mainPagePhoto2.jpg";
import mainPagePhoto3 from "@/assets/MainPage/Photos/mainPagePhoto3.jpg";
import { pregnancyFAQData } from "./FAQ_data";

export const pregnancyData = {
  title: "Беремeнность",
  introText:
"Красота и чудо беременности – это настоящая магия, когда в теле женщины зарождается новая жизнь. Запечатлеть свою беременность для нашей команды - это прийти расслабленной на съемку, не продумывая самостоятельно кучу образов, не подбирая украшения и не придумывая идеи, ведь мы как женщины, понимаем, что самое сложное на последних месяцах беременности - это сборы и подготовка к съемке: наша команда во всем вам поможет и берет это на себя. Вам остается только максимально отдохнуть перед съемкой, приехать вовремя и насладиться процессом.",
  faqData: pregnancyFAQData,
  priceGroupIndex: 1, // Индекс группы цен для обремененных
  photos: [mainPagePhoto1, mainPagePhoto2, mainPagePhoto3],
  additionalInfo: {
    title: "НЕ ВКЛЮЧЕНО:",
  items: [
    "Визаж и укладка. Исключение в пакете «PREMIUM», где все включено.",
    "Стилист по гардеробу.",
    "Плата за такси, парковку и т.д.",
  ],
  note: "*Каждый дополнительный час съемки или каждое дополнительное фото на обработку обсуждать с менеджером.",
  }
};