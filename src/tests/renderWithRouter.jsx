import React from 'react';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

const renderWithRouter = (component, initialEntries = ['/']) => {
  const history = createMemoryHistory({ initialEntries });
  return ({
    ...render(<HistoryRouter history={history}>{component}</HistoryRouter>),
    history,
  });
};

export default renderWithRouter;
