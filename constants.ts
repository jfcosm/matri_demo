
// Fecha del matrimonio: 15 de Septiembre de 2026 a las 16:30
// El mes en JS es 0-indexed (8 = Septiembre)
export const WEDDING_DATE = new Date(2026, 8, 15, 16, 30, 0);

export const BRIDE_NAME = 'Sofi';
export const GROOM_NAME = 'Max';

// Número de teléfono para recibir confirmaciones (Formato internacional sin el +)
// Por defecto se usará un número de ejemplo, cámbialo por el real.
export const RSVP_PHONE_NUMBER = '56930781181';
export const RSVP_DEADLINE_TEXT = 'Por favor, confirma antes del 15 de Agosto';

export const COLORS = {
  sage: '#8fa189',
  sageLight: '#f4f6f3',
  sageDark: '#6d7b68',
  cream: '#fdfcfb',
  text: '#4a4a4a'
};

export const CEREMONY_DETAILS = {
  venue: 'Catedral de Valdivia',
  time: '16:30 HRS',
  timeNote: 'Puntual',
  date: '15 AGOSTO',
  year: '2026',
  address: 'Valdivia, Región de Los Ríos',
  mapUrl: 'https://maps.google.com/?q=Catedral+de+Valdivia'
};

export const CELEBRATION_DETAILS = {
  venue: 'Centro de Eventos Mahuiza',
  time: '19:00 HRS',
  timeNote: 'Cena',
  date: '15 AGOSTO',
  year: '2026',
  address: 'Valdivia, Región de Los Ríos',
  mapUrl: 'https://maps.google.com/?q=Centro+de+Eventos+Mahuiza+Valdivia'
};

export const GALLERY_IMAGES = [
  { id: '1', url: 'matri1.jpg', placeholder: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600' },
  { id: '2', url: 'matri2.jpg', placeholder: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=600' },
  { id: '3', url: 'matri3.jpg', placeholder: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&q=80&w=600' },
  { id: '4', url: 'matri4.jpg', placeholder: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=600' },
  { id: '5', url: 'matri5.jpg', placeholder: 'https://images.unsplash.com/photo-1465495910483-0d674104c3c2?auto=format&fit=crop&q=80&w=600' },
  { id: '6', url: 'matri6.jpg', placeholder: 'https://images.unsplash.com/photo-1522673607200-164483ee7557?auto=format&fit=crop&q=80&w=600' },
];

export const HERO_IMAGE = {
  url: 'matri_hero.jpg',
  placeholder: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000'
};

export const HERO_TEXTS = {
  subtitle: 'Nuestra Boda',
  dateLocation: '15.08.2026 • Valdivia'
};

export const INSTAGRAM_DETAILS = {
  hashtag: '#sofiymax2026',
  url: 'https://www.instagram.com/explore/tags/sofiymax2026/'
};

export const WELCOME_TEXTS = {
  title: '¡Nos Casamos!',
  message: 'Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que quieres los hace inolvidables.'
};

export const CALENDAR_DETAILS = {
  title: 'Boda de Sofi y Max',
  location: 'Valdivia, Chile',
  description: '¡No te pierdas el gran día!'
};

export const BANK_DATA = {
  banco: "BCI / Banco Crédito e Inversiones",
  tipo: "Cuenta Corriente",
  numero: "777877642",
  rut: "18.247.442-K",
  titular: "MAXIMILIANO SEGURA"
};
// v1.14 - Añadido número de contacto para RSVP.
