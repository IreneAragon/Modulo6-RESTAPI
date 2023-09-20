export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  type: string;
  gender:string;
  origin: {
    name: string;
    url: string;
  }
  location: {
    name: string;
    url: string;
  }
  url: string;
  species: string,
  bestSentences: string
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  image: '',
  name: 'test',
  status: 'test',
  type: 'test',
  gender:'test',
  origin:{
    name: 'test',
    url: 'test'
  },
  location:{
    name: 'test',
    url: 'test'
  },
  url: 'test',
  species: 'test',
  bestSentences: '',
});
