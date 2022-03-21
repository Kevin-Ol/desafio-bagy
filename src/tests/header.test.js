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

describe('Verifica se Header possui títulos corretos', () => {
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

  it('O header contém o título Visão Geral na página "/dashboard/main"', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Visão Geral/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Lojas na página "/dashboard/stores"', async () => {
    renderWithRouter(<App />, ['/dashboard/stores']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Lojas/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Vendas na página "/dashboard/sales"', async () => {
    renderWithRouter(<App />, ['/dashboard/sales']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Vendas/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Clientes na página "/dashboard/costumers"', async () => {
    renderWithRouter(<App />, ['/dashboard/costumers']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Clientes/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Produtos na página "/dashboard/products"', async () => {
    renderWithRouter(<App />, ['/dashboard/products']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Produtos/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Planos e Metas na página "/dashboard/plans"', async () => {
    renderWithRouter(<App />, ['/dashboard/plans']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Planos e Metas/i});
    expect(title).toBeInTheDocument();
  });

  it('O header contém o título Configurações na página "/dashboard/config"', async () => {
    renderWithRouter(<App />, ['/dashboard/config']);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const title = screen.getByRole('heading', {name: /Configurações/i});
    expect(title).toBeInTheDocument();
  });
});

describe('Verifica se Header possui elementos corretos', () => {
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

  it('O header contém ícone de pesquisa', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });

    const icon = screen.getByTestId('search-icon');
    expect(icon).toBeInTheDocument();
  });

  it('O header contém ícone de notificações', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });
    
    const icon = screen.getByTestId('notifications-icon');
    expect(icon).toBeInTheDocument();
  });

  it('O header contém o nome do usuário', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });
    
    const userName = screen.getByTestId('user-name');
    expect(userName).toHaveTextContent('Matheus Borges');
  });

  it('O header contém imagem do usuário', async () => {
    renderWithRouter(<App />);

    await waitFor(() => {
      expect(screen.queryByText("Carregando")).toBe(null);
    });
    
    const userImage = screen.getByAltText('Imagem do usuário');
    expect(userImage).toBeInTheDocument();
  });

});
