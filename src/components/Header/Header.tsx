import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Button, Typography } from '@material-ui/core';

import { Search } from '../Search/Search';
import { Container } from './style';

interface HeaderProps {
  setBusca: (value: string) => void;
  onPage: (page: number) => void;
}

export const Header = ({ setBusca, onPage }: HeaderProps): JSX.Element => {
  return (
    <Container>
      <Typography variant="h6">Loja Online</Typography>
      <Search setBusca={setBusca} onPage={onPage} />
      <Typography variant="subtitle1">serviços e atendimento</Typography>
      <Typography variant="subtitle1">Minha conta meus pedidos</Typography>
      <Button>
        <LocalMallIcon color="secondary" />
      </Button>
    </Container>
  );
};
