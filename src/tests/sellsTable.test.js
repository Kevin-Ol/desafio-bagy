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

describe('Verifica se SellsTable possui elementos corretos', () => {
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

  it('Contém o título "Total de Compras"', () => {
    const title = screen.getByTestId('sells-title');
    expect(title).toHaveTextContent('Total de Compras');
  });

  it('Contém o campo com o valor geral', () => {
    const totalValue = screen.getByTestId('sells-total-value');
    expect(totalValue).toHaveTextContent('Valor geral: R$ 6.438,00');
  });

  it('Contém input para selecionar o período', () => {
    const periodInput = screen.getByTestId('sells-select-period');
    expect(periodInput).toBeInTheDocument();
  });

  it('Contém os dados de vendas corretos', () => {
    const expectedResults = [
      {
        name: 'Estilo Pri',
        quantity: '250 compras',
        price: 'R$ 4.238,00'
      },
      {
        name: 'Vilma Calçados',
        quantity: '187 compras',
        price: 'R$ 1.005,00'
      },
      {
        name: 'Mary Lingerie',
        quantity: '124 compras',
        price: 'R$ 914,00'
      },
      {
        name: 'Loja Belíssima',
        quantity: '89 compras',
        price: 'R$ 281,00'
      },
    ]

    for(let index = 0; index < expectedResults.length; index++) {
      const storeName = screen.getByTestId(`sells-name-${index}`);
      const storeQuantity = screen.getByTestId(`sells-quantity-${index}`);
      const storePrice = screen.getByTestId(`sells-price-${index}`);

      expect(storeName).toHaveTextContent(expectedResults[index].name);
      expect(storeQuantity).toHaveTextContent(expectedResults[index].quantity);
      expect(storePrice).toHaveTextContent(expectedResults[index].price);
    }    
  });
});
