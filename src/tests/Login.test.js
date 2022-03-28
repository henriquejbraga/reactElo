import { screen } from '@testing-library/react';

import renderPath from './helpers/renderPath';

describe('2 - Crie um formulário para identificação', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.restoreAllMocks();
  });

  it('Será validado se ao navegar para a rota /, o input e os passwords especificados estão presentes',
    async () => {
      renderPath("/");

      expect(screen.getByText(/nome/i)).toBeInTheDocument();
      expect(screen.getByTestId('password')).toBeInTheDocument();
      expect(screen.getByTestId('cpassword')).toBeInTheDocument();
    });
})