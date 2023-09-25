import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onDetails: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onDetails } = props;
  const itemsPerPage = 5; 
  const [currentPage, setCurrentPage] = React.useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = characterCollection.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={classes.root}>
      <ul className={classes.list}>
        {currentItems.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onDetails={onDetails}/>
          </li>
        ))}
      </ul>
      <div className={classes.pagination}>
        <ul className={classes.paginationList}>
          {Array.from({ length: Math.ceil(characterCollection.length / itemsPerPage) }, (_, index) => (
            <li key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? classes.activePage : classes.page}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
