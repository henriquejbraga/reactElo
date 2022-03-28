import { screen } from "@testing-library/react";
import renderPath from "./helpers/renderPath";
import { defaultUser } from "./mocks";


describe('1 - Crie as rotas necessárias para a aplicação', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify(defaultUser));
    localStorage.setItem('favorite_songs', JSON.stringify([]));
    jest.restoreAllMocks();
  });

  it('Será validado que rota / é uma rota existente e que ela renderiza com data-testid login ser acessada',
    async () => {
      localStorage.clear();
      renderPath("/");
        
      expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('Será validado que rota /newlead é uma rota existente e que ela renderiza o componente com data-testid newlead',
  async () => {
    renderPath("/newlead");
      
    expect(screen.getByTestId('newlead')).toBeInTheDocument();
  });
})