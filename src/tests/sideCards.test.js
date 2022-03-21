import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import mock from './mocks';

jest.mock('axios', () => ({
  create: jest.fn().mockReturnThis(),
  post: jest.fn(() => Promise.resolve()),
}));

describe('Verifica contéudo da seção MainCards', () => {
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

  it('Contém card com título "Loja" e com valor correto', () => {
    const title = screen.getByTestId('store-title');
    const selectInput = screen.getByTestId('select-store');

    expect(title).toHaveTextContent('Loja');
    expect(selectInput).toBeInTheDocument();
  });

  it('Contém card com título "Mês" e com valor correto', () => {
    const title = screen.getByTestId('month-title');
    const selectInput = screen.getByTestId('select-month');

    expect(title).toHaveTextContent('Mês');
    expect(selectInput).toBeInTheDocument();
  });

  it('Contém card com título "Ano" e com valor correto', () => {
    const title = screen.getByTestId('year-title');
    const selectInput = screen.getByTestId('select-year');

    expect(title).toHaveTextContent('Ano');
    expect(selectInput).toBeInTheDocument();
  });

  it('Contém card com título "Total de faturamento" e altera valores com mudança de loja', () => {
    const title = screen.getByTestId('store-revenues-title');
    const selectInput = screen.getByTestId('select-store');

    const selectOptions = [
      {
        option: 'Vilma Calçados',
        value: 'R$ 42.568,00'
      },
      {
        option: 'Mary Lingerie',
        value: 'R$ 37.852,00'
      },
      {
        option: 'Loja Belíssima',
        value: 'R$ 84.152,00'
      },
      {
        option: 'Estilo Pri',
        value: 'R$ 45.000,00'
      },
    ]
    expect(title).toHaveTextContent('Total de faturamento');
    expect(selectInput).toBeInTheDocument();

    for(let index = 0; index < selectOptions.length; index++) {
      const value = screen.getByTestId('store-revenues-value');
      userEvent.selectOptions(selectInput, selectOptions[index].option);

      expect(value).toHaveTextContent(selectOptions[index].value);
    }  
  });

  it('Contém card com título "Análise comparativa" e com valor correto', () => {
    const title = screen.getByTestId('analysis-title');
    const value = screen.getByTestId('analysis-text');

    expect(title).toHaveTextContent('Análise comparativa');
    expect(value).toHaveTextContent('Positivo');
  });
});
