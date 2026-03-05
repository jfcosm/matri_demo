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
    primaryText: string;
    background: string;
    surface: string;
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
            primaryText: '#ffffff',
            background: '#fdfcfb',
            surface: 'rgba(0,0,0,0.05)',
            text: '#4a4a4a',
            fonts: { script: 'Great Vibes', serif: 'Playfair Display', sans: 'Montserrat' },
            heroImage: { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'kids_birthday',
        name: 'Cumpleaños Infantil',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#FF6B6B',
            primaryText: '#ffffff',
            background: '#F0F8FF',
            surface: 'rgba(47,79,79,0.05)',
            text: '#2F4F4F',
            fonts: { script: 'Fredoka', serif: 'Comic Neue', sans: 'Quicksand' },
            heroImage: { url: 'https://images.unsplash.com/photo-1530103862677-de3e1c6628b0?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1530103862677-de3e1c6628b0?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'adult_birthday',
        name: 'Cumpleaños de Adulto',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#D4AF37',
            primaryText: '#121212',
            background: '#121212',
            surface: 'rgba(255,255,255,0.05)',
            text: '#E0E0E0',
            fonts: { script: 'Dancing Script', serif: 'Cinzel', sans: 'Lato' },
            heroImage: { url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'religious_ceremony',
        name: 'Bautizo / Comunión',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#87CEFA',
            primaryText: '#ffffff',
            background: '#FFFFFF',
            surface: 'rgba(85,85,85,0.05)',
            text: '#555555',
            fonts: { script: 'Alex Brush', serif: 'Lora', sans: 'Open Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1438032005730-c7a3e01160ee?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1438032005730-c7a3e01160ee?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'live_concert',
        name: 'Concierto en Vivo',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: false, showTickets: true },
        theme: {
            primary: '#FF00FF',
            primaryText: '#ffffff',
            background: '#0a0a0a',
            surface: 'rgba(255,255,255,0.1)',
            text: '#ffffff',
            fonts: { script: 'Permanent Marker', serif: 'Russo One', sans: 'Roboto Mono' },
            heroImage: { url: 'https://images.unsplash.com/photo-1540039155732-d674d5e8fee0?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1540039155732-d674d5e8fee0?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'b2b_activation',
        name: 'Lanzamiento B2B',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#0056b3',
            primaryText: '#ffffff',
            background: '#f8f9fa',
            surface: 'rgba(0,0,0,0.05)',
            text: '#212529',
            fonts: { script: 'Caveat', serif: 'Merriweather', sans: 'Inter' },
            heroImage: { url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'book_launch',
        name: 'Estreno de Libro',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#8b4513',
            primaryText: '#ffffff',
            background: '#fff8dc',
            surface: 'rgba(62,39,35,0.08)',
            text: '#3e2723',
            fonts: { script: 'Homemade Apple', serif: 'Crimson Text', sans: 'PT Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'gala',
        name: 'Gala / Graduación',
        features: { showCountdown: true, showGallery: true, showGiftSection: false, showRSVP: true, showTickets: true },
        theme: {
            primary: '#a2a2bd',
            primaryText: '#101020',
            background: '#0a0a1a',
            surface: 'rgba(255,255,255,0.08)',
            text: '#f5f5f5',
            fonts: { script: 'Pinyon Script', serif: 'Cormorant Garamond', sans: 'Raleway' },
            heroImage: { url: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'baby_shower',
        name: 'Baby Shower',
        features: { showCountdown: true, showGallery: true, showGiftSection: true, showRSVP: true, showTickets: false },
        theme: {
            primary: '#D87093',
            primaryText: '#ffffff',
            background: '#FFFAFA',
            surface: 'rgba(105,105,105,0.05)',
            text: '#696969',
            fonts: { script: 'Pacifico', serif: 'Balsamiq Sans', sans: 'Nunito' },
            heroImage: { url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1000&q=80' }
        }
    },
    {
        id: 'corporate_dinner',
        name: 'Cena Corporativa',
        features: { showCountdown: true, showGallery: false, showGiftSection: false, showRSVP: true, showTickets: false },
        theme: {
            primary: '#2E8B57',
            primaryText: '#ffffff',
            background: '#ffffff',
            surface: 'rgba(51,51,51,0.05)',
            text: '#333333',
            fonts: { script: 'Satisfy', serif: 'Libre Baskerville', sans: 'Work Sans' },
            heroImage: { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80', placeholder: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80' }
        }
    }
];
