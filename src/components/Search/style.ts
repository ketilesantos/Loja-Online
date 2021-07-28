import styled from 'styled-components';
import { InputBase } from '@material-ui/core';

export const SearchInput = styled(InputBase)`
  width: 40%;
  border: 1px solid #ddd;
  padding: 0 1rem;
  border-radius: 4px;

  & ::placeholder {
    color: var(--dark-color);
  }
`;
