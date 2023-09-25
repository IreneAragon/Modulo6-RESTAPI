import { Character } from './character.api-model';
import axios from 'axios';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

const url = '/api/characters/';

interface GetCharacterResponse {
  character: Character;
}

export const getCharacter = async (id: string): Promise<Character> => {
  const query = gql`
    query Character($id: ID!) {
      character(id: $id) {
        id
        name
        status
        species
        type
        gender
        origin {
          name
        }
        location {
          name
        }
        image
        created
      }
    }
  `;

  const { character } = await graphQLClient.request<GetCharacterResponse>(query, {id});
  return character;

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