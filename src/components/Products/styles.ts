import { ImageList, ImageListItemBar, Pagination } from '@material-ui/core';
import styled from 'styled-components';

export const List = styled(ImageList)`
  width: 60%;
  height: 450;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5rem 0 1rem;

  li {
    border: 1px solid var(--secondary-color);
    height: 80px;
    padding: 1rem 1rem 2rem;

    img {
      border-radius: 4px;
    }
  }
`;

export const ListItemBar = styled(ImageListItemBar)`
  text-align: center;
  height: 130px;
  border-radius: 4px;

  div.MuiImageListItemBar-subtitle {
    font-size: 1.3rem;
    text-align: center;
    color: var(--primary-color);
    font-weight: 600;
    margin: 1rem 0;
  }

  div.MuiImageListItemBar-title {
    font-size: 1.2rem;
    margin-top: 1rem;
    white-space: inherit !important;
  }
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;

  color: var(--base-color);
  background-color: var(--primary-color);

  text-decoration: none;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`;

export const Paginations = styled(Pagination)`
  display: flex;
  justify-content: center;
  padding: 2rem 0;

  button.Mui-selected,
  button.Mui-selected:hover {
    background-color: var(--primary-color);
    color: var(--base-color);
    filter: none;
  }
`;
