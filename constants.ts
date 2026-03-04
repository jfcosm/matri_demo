
// Fecha del matrimonio: 15 de Septiembre de 2026 a las 16:30
// El mes en JS es 0-indexed (8 = Septiembre)
export const WEDDING_DATE = new Date(2026, 8, 15, 16, 30, 0);

export const BRIDE_NAME = 'Alison';
export const GROOM_NAME = 'Javier';

// Número de teléfono para recibir confirmaciones (Formato internacional sin el +)
// Por defecto se usará un número de ejemplo, cámbialo por el real.
export const RSVP_PHONE_NUMBER = '56963516527'; 

export const COLORS = {
  sage: '#8fa189',
  sageLight: '#f4f6f3',
  sageDark: '#6d7b68',
  cream: '#fdfcfb',
  text: '#4a4a4a'
};

export const CEREMONY_DETAILS = {
  venue: 'Iglesia San Francisco',
  time: '16:30 HRS',
  date: '15 SEPT',
  address: 'La Serena, Región de Coquimbo',
  mapUrl: 'https://maps.google.com/?q=Iglesia+San+Francisco+La+Serena'
};

export const CELEBRATION_DETAILS = {
  venue: 'Espacio Serena Norte',
  time: '19:00 HRS',
  date: '15 SEPT',
  address: 'Sector Norte, La Serena',
  mapUrl: 'https://maps.google.com/?q=Espacio+Serena+Norte+La+Serena'
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
// v1.14 - Añadido número de contacto para RSVP.
