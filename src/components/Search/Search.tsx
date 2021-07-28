import React, { ChangeEvent } from 'react';

import { SearchInput } from './style';

interface SearchProps {
  setBusca: (value: string) => void;
  onPage: (page: number) => void;
}

export const Search = ({ setBusca, onPage }: SearchProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onPage(0);
    setBusca(e.target.value);
  };

  return (
    <SearchInput
      placeholder="Pesquise por produtos aqui..."
      inputProps={{ 'aria-label': 'search' }}
      color="primary"
      onChange={handleChange}
    />
  );
};
