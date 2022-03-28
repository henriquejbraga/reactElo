import { screen } from '@testing-library/react';

import renderPath from './helpers/renderPath';

describe('Crie um formulário para identificação', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('Será validado se ao navegar para a rota /newlead, os inputs especificados estão presentes',
    async () => {
      renderPath("/newlead");

      expect(screen.getByTestId('nome')).toBeInTheDocument();
      expect(screen.getByTestId('tel')).toBeInTheDocument();
      expect(screen.getByTestId('email')).toBeInTheDocument();
    });
    it('Será validado se ao navegar para a rota /newlead, os checkbox especificados estão presentes',
    async () => {
      renderPath("/newlead");

      expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    });
})