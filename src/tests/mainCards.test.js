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

  it('Contém card com título "Total de Lojas" e com valor correto', () => {
    const title = screen.getByTestId('total-stores-title');
    const quantity = screen.getByTestId('total-stores-quantity');

    expect(title).toHaveTextContent('Total de Lojas');
    expect(quantity).toHaveTextContent('7213');
  });

  it('Contém card com título "Faturamento Total" e com valor correto', () => {
    const title = screen.getByTestId('total-revenues-title');
    const value = screen.getByTestId('total-revenues-value');

    expect(title).toHaveTextContent('Faturamento Total');
    expect(value).toHaveTextContent('R$ 100.000,00');
  });

  it('Contém card com título "Loja Destaque" e com valor correto', () => {
    const title = screen.getByTestId('highlighted-store-title');
    const name = screen.getByTestId('highlighted-store-name');

    expect(title).toHaveTextContent('Loja Destaque');
    expect(name).toHaveTextContent('Estilo Pri');
  });

  it('Contém card com título "Meta Mensal" e com valor correto', () => {
    const title = screen.getByTestId('monthly-goal-title');
    const value = screen.getByTestId('monthly-goal-value');

    expect(title).toHaveTextContent('Meta Mensal');
    expect(value).toHaveTextContent('R$ 110.000,00');
  });
});
