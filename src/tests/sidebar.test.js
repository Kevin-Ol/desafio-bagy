import React from 'react';
import axios from 'axios';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { screen, waitFor } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';
import mock from './mocks';

jest.mock('axios', () => ({
  create: jest.fn().mockReturnThis(),
  post: jest.fn(() => Promise.resolve()),
}));

describe('Verifica se sidebar redireciona para rotas corretas', () => {
  beforeEach(() => {
    axios.post
    .mockImplementationOnce(() => Promise.resolve({ data: { data: mock.user } }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[0] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[1] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[2] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[3] }))
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('A página inicial redireciona para "/dashboard/main"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });
  
    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/main');
  });

  it('Clicar no link "Lojas" redireciona para "/dashboard/stores"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Lojas/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/stores');
  });

  it('Clicar no link "Vendas" redireciona para "/dashboard/sales"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Vendas/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/sales');
  });

  it('Clicar no link "Clientes" redireciona para "/dashboard/costumers"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Clientes/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/costumers');
  });

  it('Clicar no link "Produtos" redireciona para "/dashboard/products"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Produtos/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/products');
  });

  it('Clicar no link "Planos e Metas" redireciona para "/dashboard/plans"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Planos e Metas/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/plans');
  });

  it('Clicar no link "Configurações" redireciona para "/dashboard/config"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Configurações/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/config');
  });

  it('Clicar no link "Visão Geral" redireciona para "/dashboard/main"', async () => {
    const { history } = renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('link', {name: /Configurações/i});
    userEvent.click(button);

    const { pathname } = history.location;
    expect(pathname).toBe('/dashboard/config');

    axios.post
    .mockImplementationOnce(() => Promise.resolve({ data: { data: mock.user } }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[0] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[1] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[2] }))
    .mockImplementationOnce(() => Promise.resolve({ data: mock.stores[3] }))

    const buttonMain = screen.getByRole('link', {name: /Visão Geral/i});
    userEvent.click(buttonMain);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const { pathname: mainPathname } = history.location;
    expect(mainPathname).toBe('/dashboard/main');
  });

  it('Existe o botão de logout', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const button = screen.getByRole('button', {name: /Sair/i});
    expect(button).toBeInTheDocument();
  });
});
