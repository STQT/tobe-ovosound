export interface SocialLink {
  name: string;
  icon: any; // Agar siz aniq turdagi ikonani ishlatsangiz, bu yerda uni `JSX.Element` yoki boshqa turga o'zgartiring
  link: string;
}

export interface Playlist {
  name: string;
  year: number;
  image: string;
  link: string;
}

export interface YouTube {
  link: string;
  image: string;
}

export interface ArtistImage {
  image: string;
  ref: string;
  x: string;
  y: string;
  moveY: number;
  zIndex: number;
  width: string;
}

export interface Artist {
  id: number;
  name: string;
  tag: string;
  socials: SocialLink[];
  profile_image: string;
  playlists: Playlist[];
  other_image: string;
  youtube: YouTube;
  artist_images: ArtistImage[];
} 