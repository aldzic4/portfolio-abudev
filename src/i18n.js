import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    background: 'background',
    skills: 'skills',
    projects: 'projects',
    contact: 'contact',
    whoIsAbu: 'Who is Abu?',
    aboutMe: 'I’m a Fullstack Developer specializing in Laravel & VueJS, crafting scalable and user-friendly web applications.',
    contactMe: 'Contact Me',
    downloadResume: 'Download Resume',
    education: 'education',
    workExperience: 'experience',
    subtitle: "Let's make great things together.",
    getInTouch: 'Get in Touch',
    locationLabel: 'Location:',
    location: 'Graz, Austria',
    emailLabel: 'Email:',
    email: 'abdullahaldzic4@gmail.com',
    phoneLabel: 'Phone:',
    phone: '+4367761727795',
    reachMeAlsoOn: 'Reach me also on',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    sendMessage: 'Send Message',

  },
  bs: {
    background: 'karijera',
    skills: 'vještine',
    projects: 'projekti',
    contact: 'kontakt',
    whoIsAbu: 'Ko je Abu?',
    aboutMe: 'Ja sam Fullstack Developer specijaliziran za Laravel i VueJS, izrađujem skalabilne web aplikacije.',
    contactMe: 'Kontaktiraj me',
    downloadResume: 'Preuzmi CV',
    education: 'obrazovanje',
    workExperience: 'radno iskustvo',
    subtitle: 'Hajde da pravimo sjajne stvari zajedno.',
    getInTouch: 'Javi se',
    locationLabel: 'Lokacija:',
    location: 'Graz, Austrija',
    emailLabel: 'Email:',
    email: 'abdullahaldzic4@gmail.com',
    phoneLabel: 'Telefon:',
    phone: '+4367761727795',
    reachMeAlsoOn: 'Možeš me kontaktirati i na',
    formName: 'Ime',
    formEmail: 'Email',
    formMessage: 'Poruka',
    sendMessage: 'Pošalji Poruku',

  },
  de: {
    background: 'hintergrund',
    skills: 'fähigkeiten',
    projects: 'projekte',
    contact: 'kontakt',
    whoIsAbu: 'Wer ist Abu?',
    aboutMe: 'Ich bin Fullstack-Entwickler, spezialisiert auf Laravel & VueJS, und erstelle skalierbare und benutzerfreundliche Webanwendungen.',
    contactMe: 'Kontaktiere mich',
    downloadResume: 'Lebenslauf herunterladen',
    education: 'ausbildung',
    workExperience: 'berufserfahrung',
    subtitle: 'Lass uns großartige Dinge zusammen machen.',
    getInTouch: 'Kontaktiere mich',
    locationLabel: 'Ort:',
    location: 'Graz, Österreich',
    emailLabel: 'Email:',
    email: 'abdullahaldzic4@gmail.com',
    phoneLabel: 'Telefon:',
    phone: '+4367761727795',
    reachMeAlsoOn: 'Erreiche mich auch auf',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Nachricht',
    sendMessage: 'Nachricht senden',

  },
}

const savedLocale = localStorage.getItem('locale') || 'en'

console.log(savedLocale)
const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages,
})

export default i18n
