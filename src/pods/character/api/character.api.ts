import { Character } from './character.api-model';
import axios from 'axios';

const url = '/api/characters/'; 

export const getCharacter = async (id: string): Promise<Character> => {
  const { data } = await axios.get(`${url}${id}`).then((response) => {
    return response;
  });
  return data;
};

export const updateCharacter = async (character: Character): Promise<boolean> => {
  await axios.patch(`${url}/${character.id}`, character);
  return true;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  if (character.id) {
    await axios.put<Character>(`${url}/${character.id}`, character);
  }
  return true;
};