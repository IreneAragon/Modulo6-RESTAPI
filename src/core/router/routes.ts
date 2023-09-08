import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  characterDetails: string;
  // createCharacter: string;
  // editCharacter: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  characterDetails: '/characters/:id',
  // createCharacter: '/characters/create',
  // editCharacter: '/characters/:id',
};

type NavigationFunction = (id: number) => string;

interface LinkRoutes extends Omit<SwitchRoutes, 'characterDetails'> {
  characterDetails: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  characterDetails: (id) => generatePath(switchRoutes.characterDetails, { id }),
};
