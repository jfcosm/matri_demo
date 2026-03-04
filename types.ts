
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface RSVPData {
  name: string;
  attendance: 'yes' | 'no';
  dietaryRestrictions: string;
  songRequest: string;
  message: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption?: string;
}
