import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: {
        translation: {
          "to_come_in": "Войти",
          "register" : "Зарегестрироваться",
          "or" : "или",
          "google" : "Войти через Google",
          "forgot_password" : 'Забыл пароль',
          "reset_the_password" : "Сбросить пароль",
          "Remembered_the_password" : "Вспомнил пароль",
          "Repeat_password" : "Повторите пароль",
          "continue" : "Продолжить",
          "to_your": "На вашу",
          "email_sent_link" : "почту отправлена ссылка",
          "to_reset_your_password" : "для сброса пароля",
          "confirm_mail" : "Подтвердите почту, чтобы активировать аккаунт",
          "if_the_letter_did_not_arrive" : ' Если письмо не пришло, проверьте папку "спам" или',
          "repeat_activation" : "повторите активацию",
          "city_of_residence" : "Город проживания",
          "school_name" : "Название школы",
          "school_number" : "Номер школы",
          "class_number" : "Номер класса",
          "entrance" : "Вход",
          "forgot_address" : " Забыли адрес эл. почты?",
          "app_makers" : " Приложению “Makers” будет предоставлен доступ к вашим данным: имени,адресу электронной почты, языковым настройкам и фото профиля. Прежде чем начать работу с приложением “Makers”, вы можете ознакомиться с его",
          "policy" : " политикой конфиденциальности и условиями использования.",
          "create_an_account" : "Создать аккаунт",


        },
      },
      kg: {
        translation: {
          "to_come_in": "Кируу",
          "register" : "Каттоо",
          "or" : "же",
          "google" : 'Google аркылуу кируу',
          "forgot_password" : 'Паролду унутуп калдыңыз',
          "reset_the_password" : "Сырсөздү кайра коюу",
          "Remembered_the_password" : "Сырсөздү эстеди",
          "Repeat_password" : "Сырсөздү кайталаңыз",
           "continue" : "Улантуу",
           "to_your": "Сиздин почтаңызга",
           "email_sent_link" : "сырсөздү калыбына келтирүү ",
           "to_reset_your_password" : "шилтемеси жөнөтүлдү",
           "confirm_mail" : "Каттоо эсебиңизди активдештирүү үчүн электрондук почтаңызды ырастаңыз",
           "if_the_letter_did_not_arrive" : ' Эгер сиз электрондук кат албасаңыз, спам папкаңызды текшериңиз же',
           "repeat_activation" : "кайра активдештирип көрүңүз.",
           "city_of_residence" : "Шаар же жашаган мамлекет",
           "school_name" : "Мектептин аты",
           "school_number" : "Мектептин номери ",
           "class_number" : "Класстын номери ",
           "entrance" : "Чыгуу",
           "forgot_address" : "Эл.почта дарегин унутуп калдым?",
           "app_makers" : " “Makers” колдонмосуна маалыматтарыңызга мүмкүнчүлүк берилет: аты-жөнү, электрондук почта дареги, тил жөндөөлөрү жана профиль сүрөтү. “Makers” колдонмосун баштоодон мурун, аны менен таанышып чыксаңыз болот",
           "policy" : "купуялык саясаты жана пайдалануу шарттары.",
           "create_an_account" : "Эсеп түзүү",


        },
      },
    },
    fallbackLng: 'ru', // Default language if translation for the chosen language is not found
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["cookie", "localStorage"],
      caches: ["cookie"]
    },
    debug: true,
  });

export default i18n;
