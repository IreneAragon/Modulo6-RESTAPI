export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  type: string;
  gender:string;
  origin: {
    name: string,
    url: string,
  },
  url: string;
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  image: 'f',
  name: 'test',
  status: 'test',
  type: 'test',
  gender:'test',
  origin: {
    name: 'test',
    url: 'test',
  },
  url: 'test',
});
