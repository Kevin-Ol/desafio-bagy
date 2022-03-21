import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import mock from './mocks';

jest.mock('axios', () => ({
  create: jest.fn().mockReturnThis(),
  post: jest.fn(() => Promise.resolve()),
}));

describe('Verifica se ProductsTable possui elementos corretos', () => {
  beforeEach(async () => {
    axios.post
    .mockImplementationOnce(() => Promise.resolve({ data: { data: mock.user } }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[0] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[1] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[2] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[3] }))

    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Contém as categorias corretas', () => {
    const expectedResults = ['Produto', 'Loja', 'Preço', 'Data']

    for(let index = 0; index < expectedResults.length; index++) {
      const storeCategory = screen.getByTestId(`products-category-${index}`);
      expect(storeCategory).toHaveTextContent(expectedResults[index]);
    }  
  });

  it('Contém os dados de vendas corretos ordenados pela data', () => {
    const expectedResults = [
      {
        name: 'Brincos #23',
        store: 'Estilo Pri',
        price: 'R$ 29,90',
        date: '16/07/20',
      },
      {
        name: 'Sandália #54',
        store: 'Vilma Calçados',
        price: 'R$ 89,90',
        date: '15/07/20',
      },
      {
        name: 'Conjunto #95',
        store: 'Mary Lingerie',
        price: 'R$ 49,90',
        date: '14/07/20',
      },
      {
        name: 'Body #77',
        store: 'Loja Belíssima',
        price: 'R$ 19,90',
        date: '13/07/20',
      },
      {
        name: 'Pijama #82',
        store: 'Mary Lingerie',
        price: 'R$ 35,90',
        date: '11/07/20',
      },
      {
        name: 'Vestido #65',
        store: 'Loja Belíssima',
        price: 'R$ 109,90',
        date: '10/07/20',
      },
      {
        name: 'Sapato #12',
        store: 'Vilma Calçados',
        price: 'R$ 79,90',
        date: '09/07/20',
      },
      {
        name: 'Pulseira #27',
        store: 'Estilo Pri',
        price: 'R$ 9,90',
        date: '07/07/20',
      },
    ]

    for(let index = 0; index < expectedResults.length; index++) {
      const productName = screen.getByTestId(`products-name-${index}`);
      const productStore = screen.getByTestId(`products-store-${index}`);
      const productPrice = screen.getByTestId(`products-price-${index}`);
      const productDate = screen.getByTestId(`products-date-${index}`);

      expect(productName).toHaveTextContent(expectedResults[index].name);
      expect(productStore).toHaveTextContent(expectedResults[index].store);
      expect(productPrice).toHaveTextContent(expectedResults[index].price);
      expect(productDate).toHaveTextContent(expectedResults[index].date);
    }    
  });
});
