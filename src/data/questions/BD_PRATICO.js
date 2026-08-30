export const BD_PRATICO = {
  id: "BD_PRAT",
  name: "BD_PRAT",
  monogram: "BD_PRAT",
  description: "BD_PRAT",
  questions: [
    // 1
    {
      type: "fill",
      difficulty: "média",
      template:
        "Com base no script fornecido, complete o comando para alterar as colunas da tabela cadastro: ALTER TABLE cadastro {{0}} COLUMN cpf char(11) unique, {{1}} COLUMN email varchar(60) {{2}};",
      blanksCorrect: ["MODIFY", "MODIFY", "not null"],
      options: [
        "MODIFY",
        "ALTER",
        "CHANGE",
        "not null",
        "unique",
        "primary key",
        "default",
      ],
    },
    // 2
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Segundo o material fornecido sobre Constraints[cite: 1], qual é o exato código e mensagem de erro ao tentar inserir um registro que viola a constraint CHECK no exemplo de sensor?",
      options: [
        "Error Code: 1064. Check constraint 'chkStatus Sensor' is violated.",
        "Error Code: 3819. Constraint check 'chkStatus' is violated.",
        "Error Code: 1048. Check constraint 'chkStatus Sensor' is violated.",
        "Error Code: 3810. Check constraint 'chkStatusSensor' is violated.",
        "Error Code: 3819. Check constraint 'chkStatus Sensor' is violated.",
      ],
      correctIndex: 4,
    },
    // 3
    {
      type: "select",
      difficulty: "fácil",
      template:
        "Ao criar a tabela sensor, o campo id foi configurado como id INT PRIMARY KEY {{0}}, e o campo tipo como tipo VARCHAR(50) {{1}} 'DHT11'.",
      blanksOptions: [
        ["AUTO_INCREMENT", "AUTOINCREMENT", "SERIAL"],
        ["DEFAULT", "CHECK", "UNIQUE"],
      ],
      blanksCorrect: ["AUTO_INCREMENT", "DEFAULT"],
    },
    // 4
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Na tabela de cadastro, o comando UPDATE cadastro SET dtCadastro = curdate() WHERE id >= 2000; atualiza a data e hora. Qual a diferença prática de usar curdate() em relação a now(), de acordo com o código fornecido?",
      options: [
        "CURDATE() preenche apenas a data e a hora fica 00:00:00, enquanto NOW() insere a data e hora completas.",
        "CURDATE() preenche a data e hora do servidor, enquanto NOW() preenche a hora local da máquina.",
        "CURDATE() preenche a data com formato brasileiro, enquanto NOW() utiliza o formato americano.",
        "CURDATE() insere a data sem formatação e NOW() exige a formatação com o comando date_format.",
        "CURDATE() funciona apenas para o tipo DATE, e NOW() apenas para o tipo DATETIME.",
      ],
      correctIndex: 0,
    },
    // 5
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Preencha as lacunas para montar a frase completa exatamente como no script: SELECT {{0}}('Cadastro realizado!', nome, ' tem o cpf ', {{1}}(cpf, 'Sem cpf'), ' e o salário é ', {{2}} WHEN salario > 1000 THEN 'Ganha bem' ELSE 'Ganha mais ou menos' {{3}}) AS FRASE_COMPLETA FROM cadastro;",
      blanksCorrect: ["concat", "IFNULL", "CASE", "END"],
      options: [
        "concat",
        "concatenate",
        "IFNULL",
        "ISNULL",
        "CASE",
        "WHEN",
        "END",
        "FINISH",
      ],
    },
    // 6
    {
      type: "select",
      difficulty: "média",
      template:
        "Para buscar os registros com CPF nulo, o comando correto é: SELECT cpf FROM cadastro WHERE cpf {{0}} {{1}};",
      blanksOptions: [
        ["=", "is", "like"],
        ["null", "NULL", "'null'"],
      ],
      blanksCorrect: ["is", "null"],
    },
    // 7
    {
      type: "mcq",
      difficulty: "média",
      template:
        "De acordo com o material anexo sobre Constraints[cite: 1], qual a principal função da restrição UNIQUE?",
      options: [
        "Garante que todos os valores em uma coluna sejam do mesmo tipo de dado.",
        "Garante que todos os valores em uma coluna são diferentes.",
        "Consiste em um conjunto de valores padrão para uma coluna quando nenhum valor é inserido.",
        "Garante que um valor NULO não pode ser armazenado em uma coluna.",
        "Garante que todos os valores em uma coluna satisfaçam uma condição específica.",
      ],
      correctIndex: 1,
    },
    // 8
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Para calcular a idade no banco de dados, utilizamos a função: SELECT dtNasc, {{0}}({{1}}, dtNasc, {{2}}()) AS IDADE FROM cadastro;",
      blanksCorrect: ["timestampdiff", "YEAR", "now"],
      options: [
        "timestampdiff",
        "datediff",
        "YEAR",
        "YYYY",
        "now",
        "curdate",
        "current_date",
      ],
    },
    // 9
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "A sintaxe exata utilizada no arquivo de script para configurar a data e hora do sensor com máscara é: SELECT {{0}}(dataHora, {{1}}) as dataHora FROM sensor;",
      blanksOptions: [
        ["date_format", "format_date", "convert"],
        ["'%d/%m/%Y %h:%i'", "'%d-%m-%Y %H:%i'", "'%D/%M/%Y %h:%m'"],
      ],
      blanksCorrect: ["date_format", "'%d/%m/%Y %h:%i'"],
    },
    // 10
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Ao inserir os registros de sensores no script, um dos comandos omite as colunas id, tipo e dataHora. Qual é exatamente a instrução INSERT INTO utilizada no script para inserir os quadrantes B e C?",
      options: [
        "INSERT INTO sensor (temperaturaIdeal, locall, statuss) VALUES (25.4, 'Quadrante B', 'Inativo'), (23.1, 'Quadrante C', 'Ativo');",
        "INSERT INTO sensor (temperaturaIdeal, locall, status) VALUES (25.4, 'Quadrante B', 'Inativo'), (23.1, 'Quadrante C', 'Ativo');",
        "INSERT INTO sensor (temperaturaIdeal, locall, statuss) VALUES (25.4, 'Quadrante B', Inativo), (23.1, 'Quadrante C', Ativo);",
        "INSERT INTO sensor (temperaturaIdeal, locall, statuss) VALUES ('25.4', 'Quadrante B', 'Inativo'), ('23.1', 'Quadrante C', 'Ativo');",
        "INSERT INTO sensor VALUES (default, default, 25.4, 'Quadrante B', 'Inativo', default), (default, default, 23.1, 'Quadrante C', 'Ativo', default);",
      ],
      correctIndex: 0,
    },
    // 11
    {
      type: "fill",
      difficulty: "fácil",
      template:
        "No script, ao criar a tabela cadastro, a validação de email utiliza o trecho: constraint chkEmail {{0}}(email {{1}} '%@%')",
      blanksCorrect: ["check", "like"],
      options: ["check", "constraint", "like", "in", "=", "contains"],
    },
    // 12
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Na alteração da tabela cadastro para incluir statusCadastro, utilizou-se: ALTER TABLE cadastro ADD COLUMN statusCadastro {{0}}, ADD CONSTRAINT {{1}} CHECK(statusCadastro IN (0,1));",
      blanksOptions: [
        ["TINYINT", "INT", "BOOLEAN"],
        ["chkStatusCadastro", "chkStatus", "checkStatus"],
      ],
      blanksCorrect: ["TINYINT", "chkStatusCadastro"],
    },
    // 13
    {
      type: "mcq",
      difficulty: "média",
      template:
        "O que o comando SELECT tipo AS 'Qualquer Coisa' FROM sensor; faz no banco de dados de acordo com os comentários do script?",
      options: [
        "Altera permanentemente o nome da coluna tipo para 'Qualquer Coisa' na estrutura da tabela.",
        "Cria uma nova tabela chamada 'Qualquer Coisa' baseada na coluna tipo.",
        "Aplica um apelido (ALIAS) temporário à coluna tipo apenas para a visualização dos resultados.",
        "Substitui todos os valores da coluna tipo pelo texto 'Qualquer Coisa'.",
        "Filtra os resultados onde o tipo é igual a 'Qualquer Coisa'.",
      ],
      correctIndex: 2,
    },
    // 14
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "O comando para alterar a tabela e garantir que salários não sejam negativos é: ALTER TABLE cadastro ADD {{0}} chkSalario {{1}} (salario {{2}} 0 );",
      blanksCorrect: ["CONSTRAINT", "CHECK", ">="],
      options: ["CONSTRAINT", "COLUMN", "CHECK", "RULE", ">=", ">", "=>"],
    },
    // 15
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "No SELECT avançado com múltiplos IFNULL e CONCAT no script do sensor, a instrução correta é: SELECT CONCAT('O tipo do sensor é ', tipo,' ', 'e seu status é ', {{0}}(statuss, {{1}})) AS Frase FROM sensor;",
      blanksOptions: [
        ["IFNULL", "ISNULL", "COALESCE"],
        ["'Não preenchido'", "'Vazio'", "'Sem status'"],
      ],
      blanksCorrect: ["IFNULL", "'Não preenchido'"],
    },
    // 16
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na explicação da restrição INDEX do material anexo[cite: 1], qual a sua definição?",
      options: [
        "Garante que um valor NULO não pode ser armazenado em uma coluna muito rapidamente.",
        "Garante que todos os valores em uma coluna satisfaçam uma condição específica para busca.",
        "Consiste em um conjunto de valores padrão para uma coluna indexada.",
        "Usado para criar e recuperar dados do banco de dados muito rapidamente.",
        "Significa restrição de chave primária, usada para agilizar procuras.",
      ],
      correctIndex: 3,
    },
    // 17
    {
      type: "fill",
      difficulty: "média",
      template:
        "Para eliminar uma constraint existente na tabela sensor conforme o script, digita-se: ALTER TABLE sensor {{0}} {{1}} chkStatus;",
      blanksCorrect: ["DROP", "CONSTRAINT"],
      options: ["DROP", "DELETE", "REMOVE", "CONSTRAINT", "CHECK"],
    },
    // 18
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Na cláusula CASE da tabela sensor no script, a estrutura usada é: {{0}} WHEN temperaturaIdeal > 20 THEN 'Temperatura Alta' WHEN temperaturaIdeal = 20 THEN 'Temperatura Ideal' {{1}} 'Temperatura não tratada' {{2}} AS Temperatura",
      blanksOptions: [
        ["CASE", "IF"],
        ["ELSE", "ELIF", "OTHERWISE"],
        ["END", "END CASE", "DONE"],
      ],
      blanksCorrect: ["CASE", "ELSE", "END"],
    },
    // 19
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Sobre a criação e inserção na tabela \"sensor\", verifique o comando: \"INSERT INTO sensor VALUES (default, 'LM35', 29.2, 'Quadrante A', 'Ativo', '2026-08-18 10:47:00');\". Qual das alternativas reflete corretamente o efeito desse comando frente às constraints estabelecidas?",
      options: [
        "O 'default' no ID falhará se não for especificado null ou não for omitido da instrução VALUES.",
        "A inserção falhará pois a data '2026-08-18 10:47:00' não obedece ao padrão do MySQL para datetime.",
        "A temperatura ideal 29.2 será arredondada por estar numa coluna definida como INT e gerará erro de truncamento.",
        "O 'Quadrante A' ocupará a coluna locall que possui restrição UNIQUE, impedindo futuras inserções com este exato valor.",
        "O status 'Ativo' gerará erro pois a constraint CHECK exige que as palavras sejam inseridas estritamente em letras minúsculas.",
      ],
      correctIndex: 3,
    },
    // 20
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Complete a restrição da tabela sensor para suportar o status de manutenção (após excluir a constraint anterior): ALTER TABLE sensor ADD CONSTRAINT chkStatuss CHECK (statuss IN ({{0}}, {{1}}, {{2}}));",
      blanksCorrect: ["'Ativo'", "'Inativo'", "'Em manutenção'"],
      options: [
        "'Ativo'",
        "'Inativo'",
        "'Em manutenção'",
        "'Manutenção'",
        "'Inativo'",
        "'Desativado'",
      ],
    },
    // 21
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Em relação ao valor padrão para a coluna `dtCadastro` na tabela `cadastro`, a instrução correta utilizada no script foi: ALTER TABLE cadastro ADD COLUMN dtCadastro DATETIME DEFAULT {{0}};",
      blanksOptions: [["current_timestamp", "now()", "curdate()", "timestamp"]],
      blanksCorrect: ["current_timestamp"],
    },
    // 22
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Com base no documento em PDF, qual é a definição estrita da restrição NOT NULL[cite: 1]?",
      options: [
        "Essa restrição garante que todos os valores em uma coluna não podem ser zero.",
        "Usado para recuperar dados não nulos do banco de dados muito rapidamente.",
        "Garante que todos os valores nulos sejam substituídos por um DEFAULT.",
        "Significa restrição: regras aplicadas nas colunas para evitar caracteres em branco.",
        "Garante que um valor NULO não pode ser armazenado em uma coluna.",
      ],
      correctIndex: 4,
    },
    // 23
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Atualização complexa da tabela cadastro: {{0}} cadastro {{1}} cpf = '01234567890', altura = 1.67, salario = {{2}} {{3}} id = 2000;",
      blanksCorrect: ["UPDATE", "SET", "NULL", "WHERE"],
      options: [
        "UPDATE",
        "ALTER",
        "SET",
        "MODIFY",
        "NULL",
        "'NULL'",
        "WHERE",
        "WHEN",
      ],
    },
    // 24
    {
      type: "select",
      difficulty: "média",
      template:
        "Qual é o resultado esperado do trecho de código: SELECT ifnull (cpf, {{0}}) as CPF, concat({{1}}, nome) as NOME FROM cadastro;",
      blanksOptions: [
        ["'Estrangeiro'", "'Desconhecido'", "'Sem CPF'"],
        ["'Nome é '", "'Nome: '", "'O nome é '"],
      ],
      blanksCorrect: ["'Estrangeiro'", "'Nome é '"],
    },
    // 25
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A definição da chave primária das tabelas inicia com um valor específico no script fornecido. Qual das opções abaixo reproduz fielmente a sintaxe final que define o valor inicial do auto_increment na tabela `cadastro`?",
      options: [
        ") AUTO_INCREMENT = 2000;",
        ") auto_increment = 1000;",
        ") AUTO_INCREMENT = 1;",
        ") auto_increment = 2000;",
        ") start_with = 2000;",
      ],
      correctIndex: 3,
    },
    // 26
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "No select que testa IFNULL e formatação no sensor, é adicionado um sensor extra apenas com temperaturaIdeal. Qual é o insert correto do script? INSERT INTO sensor ({{0}}) VALUES ({{1}});",
      blanksCorrect: ["temperaturaIdeal", "19.3"],
      options: ["temperaturaIdeal", "temperatura", "19.3", "19,3", "19.0"],
    },
    // 27
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Sobre os comandos de constraint CHECK abordados tanto no script quanto no PDF[cite: 1], a instrução para exclusão da restrição no PDF é: ALTER TABLE sensor {{0}} {{1}} chkStatusSensor;",
      blanksOptions: [
        ["drop", "delete", "remove"],
        ["constraint", "check", "index"],
      ],
      blanksCorrect: ["drop", "constraint"],
    },
    // 28
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        'No que se refere às definições do material sobre "DEFAULT"[cite: 1], qual a melhor descrição dada no arquivo anexo?',
      options: [
        "Consiste num limite máximo de tamanho de caracteres quando nenhum tamanho é estipulado.",
        "Consiste em um conjunto de valores padrão para uma coluna quando nenhum valor é inserido ou especificado.",
        "Significa restrição primária de valor automático em caso de esquecimento no insert.",
        "Garante que um valor será armazenado como 'default' quando não encontrar referência numa chave estrangeira.",
        "Cria um índice automático que recupera os dados do banco mais rapidamente quando houver campos sem valor.",
      ],
      correctIndex: 1,
    },
  ],
};
