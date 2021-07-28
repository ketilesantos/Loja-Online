import React from 'react';
import ImageListItem from '@material-ui/core/ImageListItem';

import { List, ListContainer, ListItemBar, Link, Paginations } from './styles';
import { Product } from '../../interface';

interface ListProductsProps {
  page: number;
  count: number;
  onPage: (value: number) => void;
  products: Product[];
}

export const ListProducts = ({
  page,
  count,
  onPage,
  products,
}: ListProductsProps): JSX.Element => {
  return (
    <div>
      <ListContainer>
        <List gap={10} cols={3}>
          {products.map((product) => (
            <ImageListItem key={product.id}>
              <img
                srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format 1x,
              https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={product.product}
                loading="lazy"
              />
              <ListItemBar
                title={product.product}
                subtitle={<span> R$ {product.price}</span>}
                position="below"
              />
              <Link href="http"> Comprar </Link>
            </ImageListItem>
          ))}
        </List>
      </ListContainer>
      <div>
        <Paginations
          page={page + 1}
          count={count}
          onChange={(_, selectedPage) => onPage(selectedPage - 1)}
          shape="rounded"
        />
      </div>
    </div>
  );
};
