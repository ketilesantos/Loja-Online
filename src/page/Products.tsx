import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header/Header';
import { ListProducts } from '../components/Products/ListProducts';
import axios from '../config/axios';
import { Product } from '../interface';
import useDebounce from '../hooks/useDebounce';

const PER_PAGE = 6;

export const Products = (): JSX.Element => {
  const [busca, setBusca] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const debounceChange = useDebounce<string>(busca, 500);

  useEffect(() => {
    axios
      .get('/findAllProducts', {
        params: { search: debounceChange, page, size: PER_PAGE },
      })
      .then(({ data }) => {
        setProducts(data.content);
        setCount(data.totalPage);
      });
  }, [debounceChange, page]);

  return (
    <>
      <Header setBusca={setBusca} onPage={setPage} />
      <ListProducts
        page={page}
        onPage={setPage}
        products={products}
        count={count}
      />
    </>
  );
};
