import { CharacterEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface GetCharacterCollectionResponse {
  characters: {
    results: CharacterEntityApi[];
  };
}

export const getCharacterCollection = async (): Promise<CharacterEntityApi[]> => {
  const query = gql`
    query Characters {
      characters {
        results {
          id
          name
          status
          species
          type
          gender
          origin {
            name
          }
          image
          created
        }
      }
    }
  `;
  const { characters } = await graphQLClient.request<GetCharacterCollectionResponse>(query);
  return characters.results;
};
