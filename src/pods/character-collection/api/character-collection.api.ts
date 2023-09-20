import axios from 'axios';
import { CharacterEntityApi } from './character-collection.api-model';

const url = '/api/characters/'; 

export const getCharacterCollection = () => {
  return axios.get<CharacterEntityApi[]>(url).then(({ data }) => data);
};
