export const BD_PRATICO = {
  id: "BD_PRAT",
  name: "BD_PRAT",
  monogram: "BD_PRAT",
  description: "BD_PRAT",
  questions: [
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Analise o comando: \"SELECT concat('Cadastro realizado!', nome, ' tem o cpf ', IFNULL(cpf, 'Sem cpf'), ' e o salário é ', CASE WHEN salario > 1000 THEN 'Ganha bem' ELSE 'Ganha mais ou menos' END) AS FRASE_COMPLETA FROM cadastro;\". Qual das alternativas representa a saída exata para o registro de \"Rock\" (salário 600.99, CPF nulo) baseado no script?",
      options: [
        "Cadastro realizado!Rock tem o cpf Sem cpf e o salário é Ganha mais ou menos",
        "Cadastro realizado! Rock tem o cpf Sem cpf e o salário é Ganha mais ou menos",
        "Cadastro realizado!Rock tem o cpf Sem_cpf e o salário é Ganha mais ou menos",
        "Cadastro realizado!Rock tem o cpf Sem cpf e o salario é Ganha mais ou menos",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Média)
    {
      type: "select",
      difficulty: "média",
      template:
        "Para validar o formato de um e-mail na tabela cadastro, foi utilizada a estrutura: {{0}} chkEmail {{1}}(email like '%@%')",
      blanksOptions: [
        ["constraint", "restrict", "condition"],
        ["check", "verify", "match"],
      ],
      blanksCorrect: ["constraint", "check"],
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na tabela `cadastro`, como é calculada a idade exata do indivíduo no momento da consulta utilizando as datas fornecidas no script?",
      options: [
        "SELECT dtNasc, timestampdiff(YEAR, dtNasc, curdate()) AS IDADE FROM cadastro;",
        "SELECT dtNasc, timestampdiff(YEAR, dtNasc, now()) AS IDADE FROM cadastro;",
        "SELECT dtNasc, datediff(YEAR, dtNasc, now()) AS IDADE FROM cadastro;",
        "SELECT dtNasc, timediff(YEAR, dtNasc, curdate()) AS IDADE FROM cadastro;",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Fácil)
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual restrição garante que um valor NULO não pode ser armazenado em uma coluna, como aplicado na coluna `nome` da tabela `cadastro` segundo o documento[cite: 1]?",
      options: [
        "CONSTRAINT NO NULL",
        "CONSTRAINT NONULL ",
        "CONSTRAINT NOT NULL",
        "CONSTRAINT NOTNULL ",
      ],
      correctIndex: 2,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Quando executamos `INSERT INTO sensor (temperaturaIdeal, locall, statuss) VALUES (25.4, 'Quadrante B', 'Inativo');`, qual será o valor atribuído à coluna `tipo`?",
      options: [
        "Será atribuído o valor NULO, pois a coluna não foi mencionada no comando de inserção de dados",
        "Será atribuído o valor 'DHT11', pois é o valor DEFAULT especificado na criação desta tabela",
        "Será atribuído o valor 'LM35', pois o banco copia o valor do último registro recém-inserido",
        "A inserção falhará porque a coluna 'tipo' não permite valores nulos e não foi listada ali",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Observe o comando: `ALTER TABLE cadastro MODIFY COLUMN cpf char(11) unique, MODIFY COLUMN email varchar(60) not null;`. Qual é o resultado estrutural exato desta operação no banco de dados?",
      options: [
        "Altera a coluna cpf para char(11) unique e adiciona a coluna email como varchar(60) not null",
        "Modifica a coluna cpf para char(11) unique e modifica a coluna email para varchar(60) not null",
        "Modifica a coluna cpf para char(11) not null e modifica a coluna email para varchar(60) unique",
        "Altera a coluna cpf para char(10) unique e modifica a coluna email para varchar(60) not null",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Média)
    {
      type: "fill",
      difficulty: "média",
      template:
        "Na tabela `sensor`, o comando `ALTER TABLE sensor {{0}} CONSTRAINT chkStatuss {{1}} (statuss IN ('Ativo', 'Inativo', 'Em manutenção'));` adiciona a nova regra.",
      blanksCorrect: ["ADD", "CHECK"],
      options: ["ADD", "INSERT", "CHECK", "VERIFY"],
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Segundo o material sobre Constraints[cite: 1], qual é o Error Code exato gerado ao tentar inserir o status 'manutenção' violando a constraint `chkStatusSensor` original?",
      options: [
        "Error Code: 3819. Check constraint 'chkStatusSensor' is violated.",
        "Error Code: 3918. Check constraint 'chkStatusSensor' is violated.",
        "Error Code: 1064. Check constraint 'chkStatusSensor' is violated.",
        "Error Code: 1452. Check constraint 'chkStatusSensor' is violated.",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "O que define a constraint `DEFAULT` quando aplicada a uma coluna no momento da criação da tabela, de acordo com o material[cite: 1]?",
      options: [
        "Consiste em um conjunto de valores padrão inseridos quando múltiplos valores conflitantes são detectados",
        "Consiste em um conjunto de valores padrão para uma coluna quando nenhum valor é inserido ou especificado",
        "Consiste em uma restrição que impede a inserção de valores iguais aos já existentes em outras colunas",
        "Consiste em uma restrição que acelera a recuperação de dados usando um índice de busca bem estruturado",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Média)
    {
      type: "mcq",
      difficulty: "média",
      template:
        "A função do comando INDEX em um banco de dados, segundo o material abordado[cite: 1], serve principalmente para:",
      options: [
        "Garantir que todos os valores armazenados em uma determinada coluna sejam sempre únicos e exclusivos",
        "Criar e recuperar dados do banco de dados de maneira muito mais rápida e otimizada pelo mecanismo",
        "Validar se os dados inseridos em uma coluna específica correspondem a uma condição predefinida",
        "Configurar um conjunto de valores padrão a serem inseridos automaticamente na ausência de dados",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "O uso do comando `{{0}} TABLE cadastro {{1}} CONSTRAINT chkSalario CHECK (salario >= 0 );` é responsável por aplicar a validação estrutural na coluna salário.",
      blanksCorrect: ["ALTER", "ADD"],
      options: ["ALTER", "MODIFY", "ADD", "INSERT"],
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Para alterar uma tabela adicionando uma coluna e uma constraint na mesma instrução: ALTER TABLE cadastro {{0}} COLUMN statusCadastro TINYINT, {{1}} CONSTRAINT chkStatusCadastro CHECK(statusCadastro IN (0,1));",
      blanksOptions: [
        ["ADD", "INSERT", "NEW"],
        ["ADD", "SET", "PUT"],
      ],
      blanksCorrect: ["ADD", "ADD"],
    },
    // ------------------------------------------------------------
    // Questão (Fácil)
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual o valor inicial do auto_increment especificado na criação da tabela `sensor`?",
      options: [
        "O valor inicial configurado é exatamente 1000 na cláusula auto_increment",
        "O valor inicial configurado é exatamente 2000 na cláusula auto_increment",
        "O valor inicial configurado é exatamente 100 na cláusula auto_increment",
        "O valor inicial configurado é exatamente 0001 na cláusula auto_increment",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Analisando a query `UPDATE cadastro SET dtCadastro = curdate() WHERE id >= 2000;` versus a função `now()`, qual é a diferença exata nos dados armazenados na coluna `dtCadastro`?",
      options: [
        "A função curdate() armazena apenas a data atual mantendo o horário como 00:00:00, enquanto now() armazena data e hora exatas",
        "A função curdate() armazena apenas a data atual mantendo o horário como 12:00:00, enquanto now() armazena data e hora exatas",
        "A função curdate() armazena a data e hora exatas, enquanto now() armazena apenas a hora atual com a data em 0000-00-00",
        "A função curdate() armazena a data e hora exatas, enquanto now() armazena apenas a data atual mantendo o horário 00:00:00",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Qual o impacto do comando `ALTER TABLE cadastro ADD COLUMN dtCadastro DATETIME DEFAULT current_timestamp;` em registros já existentes na tabela?",
      options: [
        "A nova coluna será adicionada vazia (NULL) para os registros antigos e preenchida apenas nos novos inseridos",
        "A nova coluna será adicionada e preenchida com a data e hora do momento da execução do comando ALTER TABLE",
        "O comando falhará porque não é possível adicionar colunas com DEFAULT dinâmico em tabelas já populadas",
        "A nova coluna será adicionada, porém os registros antigos deverão ser atualizados manualmente usando DEFAULT",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Para formatar a data na tabela `sensor` exibindo dia/mês/ano hora:minuto, utilizamos: SELECT {{0}}(dataHora, {{1}}) as dataHora FROM sensor;",
      blanksCorrect: ["date_format", "'%d/%m/%Y %h:%i'"],
      options: [
        "date_format",
        "format_date",
        "'%d/%m/%Y %h:%i'",
        "'%D/%M/%Y %H:%I'",
      ],
    },
    // ------------------------------------------------------------
    // Questão (Média)
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Qual instrução MySQL atualiza os cadastros a partir do id 2000 atribuindo a data e hora completas atuais do sistema à coluna dtCadastro?",
      options: [
        "UPDATE cadastro SET dtCadastro = sysdate() WHERE id >= 2000;",
        "UPDATE cadastro SET dtCadastro = current() WHERE id >= 2000;",
        "UPDATE cadastro SET dtCadastro = now() WHERE id >= 2000;",
        "UPDATE cadastro SET dtCadastro = today() WHERE id >= 2000;",
      ],
      correctIndex: 2,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Como excluímos corretamente a constraint `chkStatus` da tabela `sensor` via linha de comando segundo a sintaxe documentada no material[cite: 1]?",
      options: [
        "ALTER TABLE sensor DROP CONSTRAINT chkStatus;",
        "ALTER TABLE sensor DEL CONSTRAINT chkStatus;",
        "ALTER TABLE sensor REM CONSTRAINT chkStatus;",
        "ALTER TABLE sensor EXC CONSTRAINT chkStatus;",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "No trecho específico do script de consultas: SELECT ifnull (cpf, 'Estrangeiro') as CPF, concat('Nome é ', {{0}}) as {{1}}",
      blanksOptions: [
        ["nome", "nasc"],
        ["NOME", "NOME_COMPLETO"],
      ],
      blanksCorrect: ["nome", "NOME"],
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Para buscar cadastros onde o CPF não foi preenchido, qual é a cláusula WHERE sintaticamente correta utilizada no script fornecido?",
      options: [
        "WHERE cpf == null",
        "WHERE cpf is null",
        "WHERE cpf = null ",
        "WHERE null in cpf",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Fácil)
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "De acordo com o material sobre Constraints[cite: 1], qual a principal função da restrição UNIQUE aplicável a uma coluna como `locall`?",
      options: [
        "Garante que absolutamente todos os valores na coluna referenciada sejam sempre idênticos",
        "Garante que absolutamente todos os valores na coluna referenciada sejam sempre diferentes",
        "Garante que absolutamente nenhum valor na coluna referenciada seja deixado nulo ou vazio",
        "Garante que absolutamente nenhum valor na coluna referenciada seja preenchido previamente",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Qual o resultado gerado pela consulta `SELECT tipo AS 'Qualquer Coisa' FROM sensor;` em comparação com `SELECT tipo AS Tipo FROM sensor;` no script fornecido?",
      options: [
        'A primeira define o cabeçalho como "Qualquer Coisa" com aspas, a segunda gera erro sintático',
        "A primeira define o cabeçalho como Qualquer Coisa (com espaço), a segunda define como Tipo",
        "Ambas geram erro de sintaxe pois o ALIAS não aceita espaços mesmo utilizando aspas simples",
        "Ambas retornam os dados agrupados, porém a primeira converte os tipos para texto formatado",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "O que a instrução `DESCRIBE cadastro;` faz detalhadamente quando executada no banco de dados?",
      options: [
        "Exibe todos os registros atualmente armazenados em todas as colunas existentes dentro da tabela cadastro",
        "Exibe a estrutura completa da tabela cadastro, detalhando suas colunas, tipos de dados e restrições ativas",
        "Gera um relatório descritivo sobre o desempenho e a velocidade de indexação da respectiva tabela cadastro",
        "Exclui todo o conteúdo da tabela cadastro preservando apenas as regras descritas durante a sua criação",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Média)
    {
      type: "mcq",
      difficulty: "média",
      template:
        "No comando `SELECT IFNULL(statuss, 'Não preenchido') AS 'Status' FROM sensor;`, qual é o comportamento correto avaliado pelo `IFNULL`?",
      options: [
        "Retorna o valor 'Não preenchido' caso a coluna statuss contenha um valor nulo, caso contrário, retorna o próprio statuss",
        "Retorna o valor 'Não preenchido' caso a coluna statuss contenha qualquer valor, caso contrário, retorna um valor nulo",
        "Retorna a string 'Status' caso a coluna statuss contenha um valor nulo, caso contrário, retorna o próprio valor statuss",
        "Retorna a string 'Status' caso a coluna statuss contenha qualquer valor, caso contrário, retorna o valor vazio ou nulo",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Como a constraint `chkStatusCadastro` restringe os dados inseridos na coluna `statusCadastro` do tipo TINYINT na tabela `cadastro`?",
      options: [
        "Garante que apenas os valores numéricos inteiros 0 ou 1 possam ser inseridos, bloqueando qualquer outro numeral",
        "Garante que apenas os valores numéricos inteiros 1 ou 2 possam ser inseridos, bloqueando qualquer outro numeral",
        'Garante que apenas valores puramente textuais "0" ou "1" possam ser inseridos, bloqueando numerais verdadeiros',
        "Garante que apenas os valores lógicos booleanos TRUE e FALSE possam ser inseridos, bloqueando o tipo TINYINT",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Difícil)
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na tabela `cadastro`, a coluna `salario` foi definida como `decimal(10,2)`. O que o parâmetro `(10,2)` estabelece com precisão matemática?",
      options: [
        "Que o número pode ter até 10 dígitos no total, sendo 2 deles obrigatoriamente casas decimais após a vírgula",
        "Que o número pode ter até 10 dígitos inteiros e mais 2 dígitos adicionais como casas decimais após a vírgula",
        "Que o número pode ter até 12 dígitos no total, sendo 10 dígitos inteiros e 2 casas decimais após a vírgula",
        "Que o número deve obrigatoriamente possuir 10 dígitos inteiros e permitir até 2 casas decimais na precisão",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Analise o script: `INSERT INTO sensor VALUES (default, 'LM35', 29.2, 'Quadrante A', 'Ativo', '2026-08-18 10:47:00');`. O que a palavra reservada `default` na primeira posição realiza exatamente no banco de dados?",
      options: [
        "Força a coluna id a assumir um valor nulo, pois o default para chaves primárias sem valor é sempre a nulidade",
        "Instrui o MySQL a utilizar a regra auto_increment definida na tabela para gerar o próximo id automaticamente",
        "Aciona uma violação de constraint, pois a coluna id é do tipo inteiro e não aceita inserir palavras reservadas",
        "Substitui o id pelo valor 1000, independentemente de quantos registros já existam previamente nesta tabela",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão (Super difícil)
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Na inserção `INSERT INTO sensor (temperaturaIdeal, statuss) VALUES (19.0, 'Em manutenção');`, por que ocorreu a violação da constraint `chkStatus` reportada no script?",
      options: [
        "Porque a constraint original definia explicitamente que statuss deveria ser apenas 'Ativo' ou 'Inativo' naquele exato momento",
        "Porque a temperatura ideal de 19.0 acionava uma trigger oculta que invalidava o status 'Em manutenção' inserido na tabela ali",
        "Porque o campo statuss não aceitava valores textuais com espaços ou caracteres especiais como 'Em manutenção' inserido ali",
        "Porque a constraint original definia explicitamente que statuss deveria ser apenas 'Ativo' ou 'Desativado' naquele exato momento",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão Fill 1 (Média)
    {
      type: "fill",
      difficulty: "média",
      template:
        "Segundo o material sobre Constraints[cite: 1], a restrição que garante que todos os valores em uma coluna sejam diferentes é a `{{0}}`, enquanto a restrição que impede expressamente o armazenamento de valores vazios é a `{{1}}`.",
      blanksCorrect: ["UNIQUE", "NOT NULL"],
      options: ["PRIMARY KEY", "NOT NULL", "UNIQUE", "DEFAULT"],
    },
    // ------------------------------------------------------------
    // Questão Fill 2 (Super difícil)
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Para redefinir a estrutura do tipo de dado de uma coluna já existente na tabela `cadastro`, utilizamos a declaração exata `ALTER TABLE cadastro {{0}} COLUMN cpf char(11) {{1}};` conforme demonstrado no script.",
      blanksCorrect: ["MODIFY", "UNIQUE"],
      options: ["CHANGE", "UNIQUE", "MODIFY", "PREFIX"],
    },
    // ------------------------------------------------------------
    // Questão Fill 3 (Difícil)
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Na construção de uma frase concatenada tratando possíveis valores nulos, a sintaxe correta do script é: `SELECT {{0}}('O tipo do sensor é ', tipo, ' e seu status é ', {{1}}(statuss, 'Não preenchido')) AS Frase FROM sensor;`",
      blanksCorrect: ["CONCAT", "IFNULL"],
      options: ["APPEND", "IFNULL", "CONCAT", "ISNULL"],
    },
    // ------------------------------------------------------------
    // Questão Fill 4 (Média)
    {
      type: "fill",
      difficulty: "média",
      template:
        "A estrutura condicional incorporada diretamente no `SELECT` da tabela `sensor` inicia-se com a palavra reservada `{{0}}`, avalia as condições, e deve ser obrigatoriamente finalizada com a instrução `{{1}} AS Temperatura`.",
      blanksCorrect: ["CASE", "END"],
      options: ["WHEN", "CASE", "THEN", "END"],
    },
    // ------------------------------------------------------------
    // Questão Fill 5 (Difícil)
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Para atualizar os registros cujo identificador seja maior ou igual a 2000 atribuindo a data e hora completas atuais do sistema, utiliza-se o comando: `{{0}} cadastro {{1}} dtCadastro = now() WHERE id >= 2000;`",
      blanksCorrect: ["UPDATE", "SET"],
      options: ["MODIFY", "UPDATE", "ADD", "SET"],
    },
    // ------------------------------------------------------------
    // Questão Fill 6 (Super difícil)
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "No cálculo dinâmico da idade exata dos indivíduos na tabela `cadastro`, a função apropriada utilizada em conjunto com a data de nascimento no script é `{{0}}({{1}}, dtNasc, now()) AS IDADE`.",
      blanksCorrect: ["timestampdiff", "YEAR"],
      options: ["datetime_diff", "YEAR", "timestampdiff", "TIME"],
    },
    // ------------------------------------------------------------
    // Questão Fill 7 (Difícil)
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Para remover a restrição original pelo terminal, primeiro executamos `ALTER TABLE sensor {{0}} CONSTRAINT chkStatus;` e, em seguida, para colocar a nova validação usamos `ALTER TABLE sensor {{1}} CONSTRAINT chkStatuss...`[cite: 1].",
      blanksCorrect: ["DROP", "ADD"],
      options: ["DROP", "SET", "DEL", "ADD"],
    },
    // ------------------------------------------------------------
    // Questão Fill 8 (Super difícil)
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Na formatação customizada de datas no MySQL, o comando `SELECT {{0}}(dataHora, {{1}}) as dataHora FROM sensor;` retorna de forma precisa os dados no padrão visual dia/mês/ano hora:minuto.",
      blanksCorrect: ["date_format", "'%d/%m/%Y %h:%i'"],
      options: [
        "'%D/%M/%Y %H:%I'",
        "data_format",
        "date_format",
        "'%d/%m/%Y %h:%i'",
      ],
    },
  ],
};
