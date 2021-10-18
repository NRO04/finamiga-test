export interface Character {
    name: string;
    id: string;
    image: string;
    status: string;
    species: string;
    origin: {
        name: string,
        url: string
    },
}