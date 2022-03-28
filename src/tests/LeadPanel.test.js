import { screen } from '@testing-library/react';

import renderPath from './helpers/renderPath';

describe('Crie um painel de leads', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('Será validado se ao navegar para a rota /leadpanel, o painel de lead está presente',
    async () => {
      renderPath("/leadpanel");

      expect(screen.getByTestId('panellead')).toBeInTheDocument();

    });
    it('Será validado se ao navegar para a rota /leadpanel, o botao de adicionar novos leads existe',
    async () => {
      renderPath("/leadpanel");

      expect(screen.getByTestId('link')).toBeInTheDocument();
    });
})