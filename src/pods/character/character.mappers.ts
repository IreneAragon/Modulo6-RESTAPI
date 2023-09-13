import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  ...character,
  id: character.id,
  name: character.name,
  origin: character.origin.name,
  status: character.status,
  gender: character.gender,
  type: character.type,
  image: character.image,
  species: character.species,
  bestSentences: character.bestSentences,
});

export const mapCharacterFromVmToApi = (character: viewModel.Character): apiModel.Character =>
  (({
    ...character,
    bestSentences: character.bestSentences,

  } as unknown) as apiModel.Character);
