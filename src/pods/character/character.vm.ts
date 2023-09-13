export interface Character {
  id: number;
  image: string;
  name: string;
  status: string;
  type: string;
  gender:string;
  origin: string,
  url: string;
  species: string,
  bestSentences: string[]
}

export const createEmptyCharacter = (): Character => ({
  id: 0,
  image: '',
  name: 'test',
  status: 'test',
  type: 'test',
  gender:'test',
  origin: 'test',
  url: 'test',
  species: 'test',
  bestSentences: ['']
});
