import { Character } from './character.api-model';
import { Lookup } from 'common/models';
import { mockCharacterCollection } from './character.mock-data';
import axios from 'axios';

const url = '/api/characters/'; 

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get(`${url}${id}`).then((response) => {
    return response;
  });
  return data;
};

// export const getCharacter = () => {
//   return axios.get<CharacterEntityApi[]>(url).then(({ data }) => data);
// };

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
