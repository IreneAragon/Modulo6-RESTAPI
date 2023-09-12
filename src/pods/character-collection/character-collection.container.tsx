import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from 'core/router';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection: loadCharacterCollection } = useCharacterCollection();
  const navigate = useNavigate();

  React.useEffect(() => {
    loadCharacterCollection();
  }, []);

  const handleDetails = (id) => {
    navigate(linkRoutes.characterDetails(id));
  };

  // const handleEdit = (id: number) => {
  //   navigate(linkRoutes.editCharacter(id));
  // };

  function onDetails(id: string): void {
    throw new Error('Function not implementedddddddd.');
  }

  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection} 
      onDetails={handleDetails}
    />
  ); 
};
