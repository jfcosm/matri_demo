export type TemplateId =
    | 'classic_wedding'
    | 'kids_birthday'
    | 'adult_birthday'
    | 'religious_ceremony'
    | 'live_concert'
    | 'b2b_activation'
    | 'book_launch'
    | 'gala'
    | 'baby_shower'
    | 'corporate_dinner';

export interface TemplateFeatures {
    showCountdown: boolean;
    showGallery: boolean;
    showGiftSection: boolean;
    showRSVP: boolean;
    showTickets: boolean;
}

export interface TemplateTheme {
    primary: string;
    background: string;
    text: string;
    fonts: {
        script: string;
        serif: string;
        sans: string;
    };
    heroImage: {
        url: string;
        placeholder: string;
    };
}

export interface Template {
    id: TemplateId;
    name: string;
    features: TemplateFeatures;
    theme: TemplateTheme;
}

export const TEMPLATES: Template[] = [
    {
        id: 'classic_wedding',
        name: 'Matrimonio Clásico',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#8fa189',
            background: '#fdfcfb',
            text: '#4a4a4a',
            fonts: { script: 'Great Vibes', serif: 'Playfair Display', sans: 'Montserrat' },
            heroImage: { url: 'matri_hero.jpg', placeholder: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'kids_birthday',
        name: 'Cumpleaños Infantil',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#FF6B6B',
            background: '#F0F8FF',
            text: '#2F4F4F',
            fonts: { script: 'Fredoka', serif: 'Comic Neue', sans: 'Quicksand' },
            heroImage: { url: 'https://images.unsplash.com/photo-1530103862677-de3e1c6628b0?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1530103862677-de3e1c6628b0?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'adult_birthday',
        name: 'Cumpleaños de Adulto',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#D4AF37',
            background: '#121212',
            text: '#E0E0E0',
            fonts: { script: 'Dancing Script', serif: 'Cinzel', sans: 'Lato' },
            heroImage: { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'religious_ceremony',
        name: 'Bautizo / Comunión',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#AEC6CF',
            background: '#FFFFFF',
            text: '#555555',
            fonts: { script: 'Alex Brush', serif: 'Lora', sans: 'Open Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1438032005730-c7a3e01160ee?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1438032005730-c7a3e01160ee?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'live_concert',
        name: 'Concierto en Vivo',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: false, showTickets: true },
        theme: {
            primary: '#FF00FF',
            background: '#0a0a0a',
            text: '#ffffff',
            fonts: { script: 'Permanent Marker', serif: 'Russo One', sans: 'Roboto Mono' },
            heroImage: { url: 'https://images.unsplash.com/photo-1540039155732-d674d5e8fee0?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1540039155732-d674d5e8fee0?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'b2b_activation',
        name: 'Lanzamiento B2B',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#0056b3',
            background: '#f8f9fa',
            text: '#212529',
            fonts: { script: 'Caveat', serif: 'Merriweather', sans: 'Inter' },
            heroImage: { url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'book_launch',
        name: 'Estreno de Libro',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#8b4513',
            background: '#fff8dc',
            text: '#3e2723',
            fonts: { script: 'Homemade Apple', serif: 'Crimson Text', sans: 'PT Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'gala',
        name: 'Gala / Graduación',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: true },
        theme: {
            primary: '#a2a2bd',
            background: '#0a0a1a',
            text: '#f5f5f5',
            fonts: { script: 'Pinyon Script', serif: 'Cormorant Garamond', sans: 'Raleway' },
            heroImage: { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'baby_shower',
        name: 'Baby Shower',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#FFB6C1',
            background: '#FFFAFA',
            text: '#696969',
            fonts: { script: 'Pacifico', serif: 'Balsamiq Sans', sans: 'Nunito' },
            heroImage: { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=1000' }
        }
    },
    {
        id: 'corporate_dinner',
        name: 'Cena Corporativa',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#2E8B57',
            background: '#ffffff',
            text: '#333333',
            fonts: { script: 'Satisfy', serif: 'Libre Baskerville', sans: 'Work Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000', placeholder: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1000' }
        }
    }
];
