import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  & > :nth-child(n + 2) {
    margin-top: 2rem;
  }
`;

export const list = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 2rem;
  grid-column-gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const paginationList = css`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  
  // border: 1px solid red;
`;

export const activePage = css`
  background-color: #1976d2;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50%;
  cursor: pointer;
  
`;

export const page = css`
  // background-color: #1976d2;
  // color: white;
  // padding: 0.5rem 1rem;
  // border-radius: 50%;
  // cursor: pointer;
  // border: 1px solid red;
  padding: 0 1rem;
  cursor: pointer;
`;
