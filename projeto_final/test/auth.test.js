    // TESTE DE CADASTRO

const { createUser } = require('./modelDeUsuario');

describe('Teste de criação de usuário', () => {
    test('Deve criar um usuário com sucesso', async () => {

      const response = await createUser({
        nome: 'Exemplo',
        email: 'exemplo@gmail',
        senha: '123',
      });
  
      expect(response.status).toBe(200);
      
      const json_data = response.data;
  
      // Verifica se os dados do usuário criado correspondem aos esperados
      expect(json_data.nome).toBe('Exemplo');
      // Aqui você deve colocar a lógica de hash da senha para verificar, este exemplo usa uma string pré-calculada
      expect(json_data.senha).toBe('hashEspecificaASenha');
    });
});


  // TESTE DE LOGIN

const { loginUser } = require('./funcaoLoginUsuario');

describe('Teste de login de usuário - Login bem-sucedido', () => {
    test('Deve fazer login de usuário com sucesso', async () => {
      const response = await loginUser({
        email: 'exemplo@gmail',
        senha: '123',
      });
  
      expect(response.status).toBe(200); // ou outra verificação de código de status de sucesso
  
      const userData = response.data;
  
      expect(userData.token).toBeTruthy(); // Verifica se um token de autenticação foi retornado
    });
});
  
describe('Teste de login de usuário - Login mal-sucedido', () => {
    test('Deve falhar no login de usuário com credenciais inválidas', async () => {
      const response = await loginUser({
        email: 'emailinvalido@gmail',
        senha: 'senhaerrada',
      });
  
      expect(response.status).toBe(400); // ou outra verificação de código de status de falha de autenticação
    });
});

    // ALTERAR DADOS DO USUÁRIO

const { alterarDadosUsuario } = require('./funcaoAlterarUsuario');

describe('Teste de alteração de dados do usuário', () => {
    test('Deve alterar os dados de um usuário com sucesso', async () => {
        // Simula a requisição para alterar dados do usuário
        const response = await alterarDadosUsuario('idDoUsuario', {
          nome: 'Novo Nome',
          email: 'novoemail@gmail',
          // outros campos a serem atualizados
        });
    
        expect(response.status).toBe(200);
    
        const updatedUserData = response.data;
    
        expect(updatedUserData.nome).toBe('Novo Nome');
    
        expect(updatedUserData.email).toBe('novoemail@gmail');

    });
    
});

    // EXCLUSÃO DE USUÁRIOS

const { excluirUsuario } = require('./FuncaoExclusaoDeUsuario');

describe('Teste de exclusão de usuário', () => {
  test('Deve excluir um usuário com sucesso', async () => {
    // Simula a requisição para excluir um usuário
    const response = await excluirUsuario('idDoUsuario');

    // Verifica se a resposta da requisição foi bem-sucedida (código 204 para exclusão com sucesso)
    expect(response.status).toBe(200); // ou outra verificação de código de status de sucesso para exclusão

    // Você pode verificar se a resposta está vazia, pois uma exclusão bem-sucedida geralmente não retorna dados
    expect(response.data).toBeFalsy();
  });

  // Adicione mais testes para situações como tentativa de exclusão de um usuário inexistente, etc., conforme necessário
});

    // FILTRAR PREÇO

const { filtrarPrecos } = require('./FuncaoDeFiltro');

describe('Teste de filtragem de preços - Ordem Crescente', () => {
    const listaDePrecos = [100, 50, 200, 25, 75];
    
    test('Deve filtrar os preços em ordem crescente', () => {
        const preçosOrdenadosCrescente = filtrarPrecos(listaDePrecos, 'crescente');
        const preçosEsperadosCrescente = [25, 50, 75, 100, 200];
    
        expect(preçosOrdenadosCrescente).toEqual(preçosEsperadosCrescente);
      });
    });
    
    describe('Teste de filtragem de preços - Ordem Decrescente', () => {
      const listaDePrecos = [100, 50, 200, 25, 75];
    
      test('Deve filtrar os preços em ordem decrescente', () => {
        const preçosOrdenadosDecrescente = filtrarPrecos(listaDePrecos, 'decrescente');
        const preçosEsperadosDecrescente = [200, 100, 75, 50, 25];
    
        expect(preçosOrdenadosDecrescente).toEqual(preçosEsperadosDecrescente);
      });
    });

    // FILTRAR DISTÂNCIA

const { filtrarDistancias } = require('./FuncaoDeFiltroDistancia');

describe('Teste de filtragem de distâncias - Menor para Maior', () => {
  const listaDeDistancias = [50, 20, 100, 10, 80];

  test('Deve filtrar as distâncias em ordem da menor para a maior', () => {
    const distanciasMenorParaMaior = filtrarDistancias(listaDeDistancias, 'menor-para-maior');
    const distanciasEsperadasMenorParaMaior = [10, 20, 50, 80, 100];

    expect(distanciasMenorParaMaior).toEqual(distanciasEsperadasMenorParaMaior);
  });
});

describe('Teste de filtragem de distâncias - Maior para Menor', () => {
  const listaDeDistancias = [50, 20, 100, 10, 80];

  test('Deve filtrar as distâncias em ordem da maior para a menor', () => {
    const distanciasMaiorParaMenor = filtrarDistancias(listaDeDistancias, 'maior-para-menor');
    const distanciasEsperadasMaiorParaMenor = [100, 80, 50, 20, 10];

    expect(distanciasMaiorParaMenor).toEqual(distanciasEsperadasMaiorParaMenor);
  });
});
