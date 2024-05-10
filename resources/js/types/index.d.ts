import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Pin {
    title: string,
    lat: number,
    lon: number,
    description: string,
}

export interface Map {
    id: number,
      title: string,
      description: string,
      center_lat: number,
      center_lon: number,
      zoom_level: number,
      pins: Array<Pin>,
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
