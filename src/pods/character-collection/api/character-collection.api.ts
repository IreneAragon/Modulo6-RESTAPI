import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';
// import { mockCharacterCollection } from './character-collection.mock-data';

// let characterCollection = [...mockCharacterCollection];

const url = '/api/characters/'; 

export const getCharacterCollection = () => {
  return axios.get<CharacterEntityApi[]>(url).then(({ data }) => data);
};

// export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
//   return characterCollection;
// };

// export const deleteCharacter = async (id: number): Promise<boolean> => {
//   characterCollection = characterCollection.filter((h) => h.id !== id);
//   return true;
// };