import React from 'react';

import { ReactComponent as Main } from '../icons/main.svg';
import { ReactComponent as Stores } from '../icons/stores.svg';
import { ReactComponent as Sales } from '../icons/sales.svg';
import { ReactComponent as Costumers } from '../icons/costumers.svg';
import { ReactComponent as Products } from '../icons/products.svg';
import { ReactComponent as Plans } from '../icons/plans.svg';
import { ReactComponent as Config } from '../icons/config.svg';

export default [
  {
    baseName: 'Visão Geral',
    path: 'main',
    icon: <Main />,
  },
  {
    baseName: 'Lojas',
    path: 'stores',
    icon: <Stores />,
  },
  {
    baseName: 'Vendas',
    path: 'sales',
    icon: <Sales />,
  },
  {
    baseName: 'Clientes',
    path: 'costumers',
    icon: <Costumers />,
  },
  {
    baseName: 'Produtos',
    path: 'products',
    icon: <Products />,
  },
  {
    baseName: 'Planos e Metas',
    path: 'plans',
    icon: <Plans />,
  },
  {
    baseName: 'Configurações',
    path: 'config',
    icon: <Config />,
  },
];
