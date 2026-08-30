export const BD = {
  id: "BD",
  name: "BD",
  monogram: "BD",
  description: "BD",
  questions: [
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Nos primórdios da computação na década de 1960, a alta interoperabilidade departamental esbarrava no obstáculo da modelagem crua, onde um 'Programa Delta', ao intentar requisitar dados do 'Programa Sigma', chocava-se contra um paradigma onde o conhecimento do método proprietário de gravação de bytes era um pré-requisito inescapável. Sob o prisma da evolução arquitetural dos dados, qual foi o avanço tangível entregue pelo elemento do SGBD denominado 'Metadado' que liquidou este impasse interdepartamental?",
      options: [
        "O mecanismo de Metadado suprimiu a proliferação anárquica obrigando estritamente os engenheiros a convergirem suas implementações para os ritos do antigo modelo CODASYL de redes complexas transpassadas através de grafos rigidamente definidos em linguagem C de baixo nível.",
        "O mecanismo de Metadado orquestrou a clonagem autônoma e descentralizada das bases vitais de forma iterativa, instanciando repositórios completos e inertes nas memórias RAM particulares de cada sistema, desonerando conexões diretas nos processamentos concorrentes.",
        "O mecanismo de Metadado transformou o SGBD na única entidade responsável por portar e centralizar as descrições intrincadas das matrizes lógicas e físicas, atuando como um barramento que exime solenemente os diversos sistemas clientes do ônus de mapear bytes a nível de disco rígido.",
        "O mecanismo de Metadado encapsulou-se na integridade das bibliotecas internas de cada aplicação individualmente, provocando uma metamorfose em que cada framework externo atuava imperativamente como um fragmento de SGBD autônomo acoplado no coração das camadas de negócio locais.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante o refatoramento complexo do serviço de biometria facial, uma tabela de alta dependência cruzada 'Pessoa' passou pela aprovação do seguinte comando: 'ALTER TABLE Pessoa DROP COLUMN dtNascimento;'. No ecossistema tecnológico integrado da instituição, várias aplicações satélites antigas conectadas utilizam sintaxes DML como 'SELECT * FROM Pessoa'. Baseado puramente nos comportamentos arquiteturais subjacentes de um banco de dados relacional clássico acoplado a SGBDs padrão de mercado, qual é a ramificação sistêmica exata desencadeada por este expurgo em produção?",
      options: [
        "O ambiente de processamento inferirá a ausência vitalétrica, criando por deduções implícitas do motor de integração um sinônimo de acesso transparente. Qualquer requisição obsoleta voltada ao 'dtNascimento' será milagrosamente repassada pelo sistema para o ID primário mitigando a quebra imediata de scripts.",
        "O SGBD, imbuído de lógicas de proteção relacional autônomas, monitorará as conexões concorrentes bloqueando silenciosamente a submissão do DROP caso o algoritmo interno compute estatisticamente que a dita coluna tem sido alvo de leituras constantes pelo serviço backend num recorte temporal recente.",
        "O campo deixará de existir perpetuamente no modelo físico; entretanto, componentes legados que apelam genericamente para o 'SELECT *' absorverão os dados restantes com êxito adaptativo, ao passo que eventuais views e subqueries ancoradas fixamente no rótulo expresso 'dtNascimento' irão irremediavelmente colapsar na extração.",
        "O comando DDL surtirá tão e unicamente um efeito efêmero de encapsulamento virtual sobre a visualização gerencial da entidade, permitindo que todas as aplicações dependentes perpetuem suas inserções nativas mascaradas utilizando um proxy de cache pré-compilado na memória do servidor local.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um grande ecossistema tecnológico lida com sensores enviando milhões de requisições por hora na forma de metadados brutos e altamente mutáveis. O conselho de TI delibera trocar a arquitetura legada para uma que possua esquema puramente dinâmico, forte escalonamento horizontal e distribuição intrínseca. Essa decisão os direciona estrategicamente para:",
      options: [
        "Modelos de Bancos de Dados NoSQL, que não dependem apenas da linguagem estruturada padrão e são altamente projetados para comportar fluxos colossais típicos da era do Big Data.",
        "Bancos de Dados Relacionais padronizados, haja vista sua escalabilidade horizontal irrestrita e capacidade dinâmica de alterar esquemas sem a interferência explícita de comandos DDL.",
        "Sistemas Baseados em Arquivos Departamentais, estruturados essencialmente através de processos de indexação isolados para evitar contenção de memória lógica compartilhada.",
        "Modelos de Bancos de Dados Hierárquicos nativos, suportados preferencialmente por linguagens orientadas a objeto e estruturados logicamente no padrão clássico UML.",
      ],
      correctIndex: 0,
    },
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "No passado, as empresas sofriam com a acentuada {{0}} existente entre o código dos programas e a matriz de dados, forçando regravações pesadas a cada ajuste. A inserção da arquitetura centralizada com SGBDs proveu a almejada {{1}}, dissociando completamente as modificações no banco da sintaxe das regras de negócios da aplicação.",
      blanksCorrect: ["Dependência", "Independência"],
      options: ["Dependência", "Independência", "Complexidade", "Sabedoria"],
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Apesar do consenso mercadológico sobre os benefícios dos SGBDs, existem cenários raros onde sua implantação seria inadequada. Um engenheiro de software desenha um chip para frenagem autônoma de um trem-bala, onde memória interna é ínfima e a instrução deve completar execução estritamente em bilionésimos de segundo. Empregando os conhecimentos teóricos discutidos:",
      options: [
        "O uso do SGBD é plenamente recomendado e trivial, pois plataformas relacionais atuais foram desenvolvidas nativamente de forma a impedir qualquer impacto em memórias secundárias.",
        "O uso do SGBD é circunstancialmente indiferente ao domínio proposto, na medida que o rendimento físico dependerá irrestritamente apenas do tamanho das chaves primárias alocadas na tabela.",
        "O uso do SGBD é desaconselhado neste cenário fechado, uma vez que requisitos absurdamente rigorosos de tempo real crítico dificilmente seriam suportados pela sobrecarga operacional do gerenciador.",
        "O uso do SGBD é mandatório para assegurar a inviolabilidade, garantindo que toda a cadeia de processamento físico de frenagens seja registrada com redundância paralela instantânea.",
      ],
      correctIndex: 2,
    },
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Avaliando as minúcias estruturais relativas a strings e ordenações numéricas do SGBD, imagine que na composição de uma tabela provisória o analista injete alunos contendo os códigos RAs nominais ('10', '2', '20') em uma coluna deliberadamente forjada sob o formato VARCHAR(10). Na emissão da diretiva SQL acompanhada pela sintaxe ORDER BY ASC, os RAs eclodirão visualmente na cadeia léxica ordenados como {{0}}. Em paralelo, se operássemos um CAST imediato ou reformulação estrutural fixando o modelo em INT, a ordem ascendente extraída e visualizada pelo driver cliente espelharia matematicamente {{1}}.",
      blanksCorrect: ["'10', '2', '20'", "'2', '10', '20'"],
      options: [
        "'10', '2', '20'",
        "'2', '10', '20'",
        "'20', '10', '2'",
        "'2', '20', '10'",
      ],
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Durante uma manutenção não programada, um estagiário executou 'DELETE FROM Vendas;' e logo depois o Analista Sênior executou 'TRUNCATE TABLE Vendas;'. Assumindo a ausência de impedimentos por chaves estrangeiras, qual a diferença essencial de comportamento interno entre esses comandos na infraestrutura relacional?",
      options: [
        "Não existe absolutamente nenhuma diferença de processamento ou impacto lógico, uma vez que ambos são comandos do grupo DDL designados para limpar dependências lógicas preexistentes.",
        "O comando DELETE remove os registros mas não reseta as configurações internas como o auto-incremento da tabela, enquanto o comando TRUNCATE limpa os dados e reseta completamente a estrutura base da tabela.",
        "Ambos excluem fisicamente a tabela do disco rígido de forma irrecuperável, porém apenas o TRUNCATE mantém os índices salvos temporariamente na memória RAM do sistema gerenciador.",
        "O comando DELETE apenas oculta as linhas para o usuário atual sem apagar os dados do disco, ao passo que o TRUNCATE efetiva a remoção permanente e lógica de toda a base de informações.",
      ],
      correctIndex: 1,
    },
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "A governança de dados identificou que um analista não deveria ter permissões de deleção de registros sensíveis e emitiu o comando {{0}} sobre o seu perfil. Durante a integração da equipe no mês anterior, esse mesmo analista havia recebido o acesso primário justamente por meio do comando {{1}}. Estas instruções fazem parte do escopo de controle (DCL).",
      blanksCorrect: ["REVOKE", "GRANT"],
      options: ["REVOKE", "GRANT", "DENY", "ALLOW"],
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na arquitetura relacional de um ERP contemporâneo, avalia-se a integridade sistêmica da tabela 'Pedido', a qual detém uma coluna 'cod_cliente'. Esta coluna foi modelada propositalmente para apontar sempre para a restrição primária (id) presente na matriz da tabela 'Cliente'. Esse mecanismo de amarração referencial é formalmente denominado de:",
      options: [
        "Chave Primária (Primary Key), caracterizando-se por atuar como o principal localizador de instâncias dentro de um mesmo domínio contínuo para aquele pedido restrito.",
        "Índice Estruturado (Index Constraint), caracterizando-se por compilar os múltiplos parâmetros presentes otimizando pesadamente o custo binário das consultas internas.",
        "Restrição Isolada (Unique Constraint), caracterizando-se por certificar de maneira excludente que aquele cliente fará a requisição de tão somente um único pedido em toda sua vida útil.",
        "Chave Estrangeira (Foreign Key), caracterizando-se por atuar como o elo de integridade que vincula os dados de uma tabela de volta à chave mestre de outra.",
      ],
      correctIndex: 3,
    },
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Ao tentarmos adicionar um registro na tabela 'Sensor' incluindo o valor 'manutencao' no status, ocorre um erro 3819 imediato. A restrição violada que forçava valores precisos da lista ('ativo', 'inativo') é a {{0}}. Se quisermos garantir que o SGBD assinale 'ativo' sozinho sempre que o usuário omitir essa informação no INSERT, implementamos a restrição {{1}}.",
      blanksOptions: [
        ["CHECK", "UNIQUE", "INDEX"],
        ["DEFAULT", "PRIMARY KEY", "NOT NULL"],
      ],
      blanksCorrect: ["CHECK", "DEFAULT"],
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Após a implementação do banco de dados em produção, o time notou que a tabela 'Produto' possuía uma coluna chamada 'dtFabricacao', mas as diretrizes de padronização da empresa exigiam o nome 'dt_fabricacao'. Qual comando DDL promove a adequação sem provocar perda estrutural?",
      options: [
        "ALTER TABLE Produto MODIFY COLUMN dtFabricacao VARCHAR(50);",
        "ALTER TABLE Produto RENAME COLUMN dtFabricacao TO dt_fabricacao;",
        "ALTER TABLE Produto ALTER COLUMN dtFabricacao dt_fabricacao;",
        "ALTER TABLE Produto CHANGE dtFabricacao TO dt_fabricacao;",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Uma equipe de auditoria financeira solicitou a varredura emergencial do banco buscando credenciais anômalas. O requisito expresso no ticket foi: listar qualquer conta de e-mail que possua prefixo exato 'admin', imediatamente seguido por um (e somente um) caractere qualquer desconhecido, terminando com o sufixo '@sptech.school'. A instrução SQL matematicamente perfeita que exprime essa busca é:",
      options: [
        "SELECT * FROM Credencial WHERE email LIKE 'admin*@sptech.school';",
        "SELECT * FROM Credencial WHERE email LIKE 'admin_ %@sptech.school';",
        "SELECT * FROM Credencial WHERE email LIKE 'admin_@sptech.school';",
        "SELECT * FROM Credencial WHERE email LIKE 'admin%@sptech.school';",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Em uma empresa de logística, os dados operacionais eram armazenados em planilhas isoladas nos computadores dos funcionários. Com o rápido crescimento, a equipe de TI decidiu implantar um Sistema Gerenciador de Banco de Dados (SGBD). Qual é o principal benefício direto que essa mudança arquitetônica traz, conforme os conceitos iniciais de Bancos de Dados?",
      options: [
        "O SGBD permite que cada aplicação independente crie e mantenha suas próprias estruturas físicas exclusivas no disco rígido sem qualquer tipo de compartilhamento central.",
        "O SGBD substitui completamente a necessidade de qualquer rotina de backup, uma vez que os arquivos gerenciados por ele nunca corrompem ou sofrem perdas lógicas.",
        "O SGBD promove a independência entre as aplicações e os dados, além de possibilitar a eliminação de redundâncias e facilitar a manutenção e o acesso multiusuário.",
        "O SGBD garante que os dados fiquem estritamente dependentes do código das aplicações cliente para garantir uma maior camada de segurança impenetrável no servidor.",
      ],
      correctIndex: 2,
    },
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "A transição de gerações moldou profundamente a modelagem sistêmica. De um lado da cronologia da abstração dos dados desponta o modelo {{0}}, detentor de um legado notório por entrelaçar suas intrincadas relações lógicas no alicerce matemático complexo fundamentado unicamente na teoria universal dos grafos e manipulado por ponteiros em direções difusas sob o auspício primário do comitê CODASYL. No vértice subsequente da história consolidou-se irrevogavelmente a dominância do modelo {{1}}, cuja essência brilhante forjada inteiramente no berço cartesiano e algebra relacional concebida inicialmente pelas mãos do cientista Edgar Codd rege o intercâmbio coeso dos seus nós não mais por meio de caminhos predeterminados em links diretos, mas sob a maestria engenhosa do conceito universal de chaves operacionais exógenas (Foreign Keys).",
      blanksOptions: [
        ["Em Rede", "Hierárquico Tradicional", "Relacional"],
        ["Relacional", "Hierárquico Tradicional", "Orientado a Objetos UML"],
      ],
      blanksCorrect: ["Em Rede", "Relacional"],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um daemon (processo de fundo automatizado) vital programado em C# para realizar profilaxia e higienização lógicas conectou-se em uma instância crítica do MySQL na madrugada sob credenciais abertas, tentando processar uma massiva inativação das flags disparando globalmente: 'UPDATE controle_fatura SET fl_status = 'I';', isento voluntariamente da declaração WHERE. Estando a plataforma configurada rigorosamente sob os parâmetros de segurança empresariais padrão, descreva pontualmente a mecânica reacional desencadeada sob a arquitetura e seu efeito posterior palpável nos registros afetados do SGBD.",
      options: [
        "Em função de equívocos léxicos perpetuados pelo daemon desatualizado frente a motores otimizados, o processador interpretador converterá a intenção crua DML numa macro implícita DDL em nível administrativo corporativo; assim, a requisição em vez de afetar quaisquer tabelas prévias, passará unicamente a impingir aos registros futuros em seu evento gerador a inclusão por norma estatutária atrelada aos dados (DEFAULT definition).",
        "Em função das rotinas operacionais preventivas que inibem colapsos fatais, o motor analítico encarregado fragmentará arbitrariamente a modificação semântica, consumando a reversão e salvando com efetividade unicamente as primeiras e singulares 1.000 (mil) contagens transacionais registradas, expelindo subsequentemente avisos intermitentes de segurança diretamente no pipe output standard do terminal.",
        "Em função da alta envergadura computacional delegada às consultas estruturadas modernas e da permissividade subentendida, a transação supracitada concluirá em sua totalidade sua alteração global massiva imposta. Tal processo desenfreado, todavia, inflacionará grotescamente o tamanho do arquivo de buffer e acarretará travamentos assíncronos prolongados nos barramentos lógicos durante os logs temporais inerentes da máquina.",
        "Em função direta das instâncias parametrizadas para ambientes restritos chamados Safe Update Mode, a plataforma embarga e invalida a string malformada logo na varredura preliminar interpretativa e invoca um kill instantâneo na requisição. Nenhuma fração, parcial ou completa, dos dados sofrerá qualquer interferência binária sob o pretexto imperativo da carência lógica baseada no identificador primário explícito.",
      ],
      correctIndex: 3,
    },
    {
      type: "select",
      difficulty: "média",
      template:
        "No dimensionamento de um banco de dados, ao armazenar o texto 'Ana' em um campo estruturado como {{0}}, o SGBD alocará fisicamente 10 espaços no disco preenchendo o restante com caracteres em branco. Já em um campo estruturado como {{1}}, o SGBD alocará apenas o espaço dinâmico exigido pelo próprio tamanho da string inserida.",
      blanksOptions: [
        ["CHAR(10)", "VARCHAR(10)"],
        ["CHAR(10)", "VARCHAR(10)"],
      ],
      blanksCorrect: ["CHAR(10)", "VARCHAR(10)"],
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Uma tabela de clientes de uma loja virtual está sendo construída. Como regra de negócio essencial, o campo 'CPF' nunca pode receber registros vazios no momento em que um usuário faz o cadastro. Qual restrição (constraint) atende diretamente a essa necessidade operacional básica?",
      options: [
        "NOT NULL, que assegura que um valor ausente (nulo) não seja aceito ou armazenado na referida coluna durante uma inserção.",
        "CHECK, que assegura que o sistema avalie previamente a formatação textual do banco antes de validar qualquer preenchimento nulo.",
        "PRIMARY KEY, que assegura a unicidade e o auto-incremento de todos os valores de uma tabela mesmo que eles não possuam dados.",
        "UNIQUE, que assegura exclusivamente que os valores sejam criados em formato numérico e sem repetições dentro de toda a estrutura.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante o planejamento de performance e sizing (dimensionamento) de um Data Warehouse financeiro com dezenas de milhões de transações, um engenheiro distraído configurou a chave primária da entidade mestra de consolidações com o tipo CHAR(8). Após injetar volumes cavalares portando a cadeia nominal simples '123', as operações de Join (cruzamento referencial) desandaram comparativamente aos testes com Integer. Desconsiderando ruídos alheios de rede, fundamentado nas regras teóricas discutidas, qual a origem latente da deterioração de eficiência?",
      options: [
        "Tendo como premissa a padronização autônoma da inteligência artificial contida nos atuais otimizadores das linguagens de consulta estruturadas SQL, a plataforma rejeitaria em tese a alocação e converteria implicitamente a PK para INT em tempo de compilação sem notificação; a sensação ilusória da latência de performance é de fato resultado do overhead persistente dos pacotes no protocolo TCP/IP.",
        "Tendo como premissa o encapsulamento orgânico condicionado aos caracteres char, o input textual de mero 3 bytes gera um colapso lógico conhecido como fragmentação binária precoce de tupla variável. Essa ruptura desencadeia uma paralisação heurística generalizada onde o SGBD é incapaz de usar indexação em árvore limitando-se ao rastreio Full Scan permanente.",
        "Tendo como premissa os entraves e gatilhos atrelados às definições espaciais, as matrizes declaradas como tipo caractere para Primary Keys travam nativamente o direito do administrador a invocar o expurgo rápido com a clásula DELETE vazia de instâncias WHERE. Esta supressão acende processos transacionais lentos cronificando os tempos de buscas futuras em toda a engrenagem do schema.",
        "Tendo como premissa a natureza alocativa estática, o SGBD é compelido a preencher os vazios do input '123' atochando espaços em branco redundantes e fixos nos discos até completar os 8 bytes definidos; esta anomalia somada a um escrutínio caractere por caractere (comparações de strings são intrinsecamente lentas no nível do kernel relacional) sabota as operações de índices matemáticos em contraposição ao modelo INT.",
      ],
      correctIndex: 3,
    },
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Discutindo paradigmas avançados e extração qualitativa, depreende-se que as premissas arquiteturais sob as diretrizes complexas do {{0}} gravitam pesadamente além da singela ingestão aleatória de quantidades dantescas de blocos de bytes não-estruturados, focando estritamente nas ferramentas sistêmicas dedicadas a domar, processar e estruturar esses fluxos multiformes e caóticos gerando vertentes passíveis de uso empírico final. Na banda paralela corporativa visualizada, as correntes padronizadas inerentes ao {{1}} pressupõem invariavelmente uma alimentação estrutural coesa por meio de canalizações integradas, municiando analistas na confecção sintética de dashboards cruciais aplicáveis diretamente em decisões estratégicas pautadas pelo viés focado em modelos de negócios delimitados.",
      blanksCorrect: [
        "Big Data (Grande Massa de Dados)",
        "Business Intelligence (BI - Inteligência de Negócio)",
      ],
      options: [
        "Big Data (Grande Massa de Dados)",
        "Business Intelligence (BI - Inteligência de Negócio)",
        "Sistemas Tradicionais Legados Arquivados",
        "Algoritmos Criptográficos Embarcados",
      ],
    },
    {
      type: "fill",
      difficulty: "média",
      template:
        "Para um relatório gerencial, se precisarmos encontrar clientes cujo nome termine obrigatoriamente com a letra 'a' independente do que vier antes, utilizamos a cláusula de busca LIKE {{0}}. Por outro lado, para filtrar usuários onde a letra 'a' seja impreterivelmente a segunda letra do nome, utilizamos LIKE {{1}}.",
      blanksCorrect: ["'%a'", "'_a%'"],
      options: ["'%a'", "'_a%'", "'a%'", "'%a%'"],
    },
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "O engenheiro concebeu a tabela 'Maquina' contendo a tupla simplificada 'id INT PRIMARY KEY' e 'status VARCHAR(10)'. Posteriormente, visando rigor qualitativo, submeteu um DDL com a seguinte instrução: `ALTER TABLE Maquina ADD CONSTRAINT chkSts CHECK (status IN ('A', 'B'));`. Deste momento em diante, inserindo-se novos registros preenchidos unicamente com os caracteres brutos ('A', 'a', 'C'), a eficácia insercional se provará operante de maneira restrita apenas à opção {{0}}. Para os caracteres alternativos, o SGBD, assumindo sua típica case sensitivity, deflagrará sumariamente o respectivo erro fatal classificado como {{1}}.",
      blanksOptions: [
        ["'A'", "'A' e 'a'", "Nenhuma das opções"],
        [
          "Violação de Constraint (Check violated)",
          "Violação de Chave Estrangeira Limitrofe",
          "Corrupção Crítica de Integridade Nula",
        ],
      ],
      blanksCorrect: ["'A'", "Violação de Constraint (Check violated)"],
    },
    {
      type: "fill",
      difficulty: "fácil",
      template:
        "Durante a alocação de responsabilidades no projeto, o {{0}} tem como principal papel autorizar acessos e monitorar o uso da infraestrutura, enquanto o {{1}} foca em identificar quais dados serão armazenados e escolher as estruturas apropriadas.",
      blanksCorrect: ["Administrador de BD (DBA)", "Projetista de BD"],
      options: [
        "Administrador de BD (DBA)",
        "Projetista de BD",
        "Usuário Final",
        "Programador de Aplicações",
      ],
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Ao realizar o fechamento do ano, um desenvolvedor tentou padronizar todos os campos executando 'UPDATE Funcionario SET salario = salario * 1.1;' na interface de um MySQL recém-instalado, resultando em bloqueio da operação pelo SGBD. Com base no funcionamento particular desse software, qual é a justificativa técnica para o travamento da instrução?",
      options: [
        "O MySQL requer mandatoriamente que operações DML de alto impacto na base de dados inteira sejam antecedidas por comandos administrativos de destravamento, como UNLOCK TABLES.",
        "O MySQL possui uma proteção de segurança habilitada por padrão que bloqueia execuções dos comandos UPDATE e DELETE quando estes não estão acompanhados por uma cláusula WHERE baseada na chave primária.",
        "O MySQL avalia o comando sem condições WHERE e, de maneira inteligente, o converte silenciosamente para um TRUNCATE TABLE para evitar o consumo abusivo da memória transacional do sistema.",
        "O MySQL não suporta processamento de operações matemáticas (multiplicação ou divisão) diretamente acopladas na cláusula SET do comando UPDATE sem o uso prévio de variáveis de sessão.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Um desenvolvedor backend precisa escrever um script para, primeiramente, criar uma nova tabela estruturada para os logs de acesso e, na sequência, inserir a primeira linha de registro nesse arquivo. Quais categorias sequenciais de comandos da linguagem SQL ele utilizará nesse caso específico?",
      options: [
        "Data Definition Language (DDL) para o comando CREATE e Data Manipulation Language (DML) para o comando INSERT.",
        "Data Definition Language (DDL) para o comando ALTER e Data Manipulation Language (DML) para o comando SELECT.",
        "Data Manipulation Language (DML) para o comando CREATE e Data Definition Language (DDL) para o comando INSERT.",
        "Data Control Language (DCL) para o comando CREATE e Data Definition Language (DDL) para o comando UPDATE.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um gerente de infraestrutura percebeu um consumo excessivo em sua instância na nuvem e executou consecutivamente no console de produção os seguintes comandos: 'DELETE FROM transacoes;'; em seguida 'TRUNCATE TABLE transacoes;'; culminando por fim com um 'DROP TABLE transacoes;'. O que o terminal retornará se um operador júnior tentar na sequência imediata emitir o comando 'DESCRIBE transacoes;'?",
      options: [
        "O terminal acusará um erro crasso e obstrutivo atestando que a tabela de fato não existe no repositório, visto que o DROP final extirpou irreversivelmente toda a composição estrutural, incluindo os metadados associados ao seu nome.",
        "O terminal compilará as propriedades do campo indicando-os como vazios em virtude da flag oculta implantada na deleção lógica, salvaguardando a casca estrutural para inserções eventuais da aplicação cliente sem causar nenhum panic no sistema.",
        "O terminal despejará serenamente no output a estrutura limpa da tabela original, isso porque o comportamento subjacente do TRUNCATE age regenerando o contêiner virtual de maneira automática instantaneamente logo após a deleção feita pelo DROP.",
        "O terminal negará o acesso apontando violação explícita de privilégios e credenciais, já que interações sequenciais do subgrupo DDL blindam o dicionário de dados contra novas visualizações estruturais provindas do subgrupo de comandos DQL.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A transposição inadequada de constructos teóricos puros para estruturas binárias tangíveis num e-commerce global incitou o analista-chefe de infraestrutura a violar as leis matemáticas de normalização clássica, propagando conscientemente desnormalizações intempestivas do atributo 'CodID_Companhia' em extensas malhas de tabelas adjacentes para agilizar cruzamentos nas planilhas (queries). Subjulgando o pragmatismo temporário imposto na concepção desse modelo físico espelhado de um modelo lógico falho, qual seria a ruína orgânica primordial esperada à medida que as constantes dinâmicas e transacionais alterassem as propriedades matriz ao decorrer do ciclo vital da aplicação?",
      options: [
        "A pulverização generalizada dos referidos identificadores nas vertentes secundárias corroerá inexoravelmente a habilidade nativa da máquina SGBD transacional em acatar instruções DML simples interativas; com a progressão irremediável dos anos operacionais de tempo integral a equipe terá de invocar intervenções manuais via blocos de comandos estritamente orientados aos dialetos DDL hierárquicos precursores.",
        "A profusão generalizada dos atributos colaterais criará exponencialmente anomalias de atualização catastróficas encadeadas e ferirá de morte a consistência global; um único distúrbio matriz exigirá rastreios intermináveis para manutenção sincrônica, escancarando a falta severa na implementação rigorosa da disciplina base estipulada pela Normalização prévia teórica relacional.",
        "A complicação gerada consistirá isoladamente num agravamento agudo e persistente do custo nominal empenhado para manutenção magnética dos discos estáticos em infraestrutura alugada; abstrações de redundância jamais incorrerão num abalo contíguo da coesão se as definições semânticas constarem em repositórios independentes amarradas fortemente pela abstração intrínseca nos paradigmas dos Bancos NoSQL.",
        "A repetição exata dos vínculos, embora não muito elegante ao olhar empírico purista, não detém na sua concepção mecânica ou lógica ameaças à consistência referida, uma vez consolidado o dicionário central de dados; tal artifício de redundância extrema compõe indubitavelmente a pedra angular basilar pela qual a escalabilidade corporativa provê suporte analítico constante para as massas ativas em tempo simultâneo online (Alta Disponibilidade).",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Uma instituição mapeia suas filiais de modo que cada filial é representada como um nó 'pai' isolado, e os funcionários são nós 'filhos'. A regra é que um filho jamais pode possuir mais de um pai, formando uma estrutura de cima para baixo rígida. Qual modelo de dados descreve precisamente essa topologia clássica abordada em sala?",
      options: [
        "Modelo Orientado a Objetos, motivado pelas restrições modernas em lidar isoladamente com heranças polimórficas complexas UML.",
        "Modelo Relacional, elaborado na década de 1970 por Edgar Codd com base em matrizes matemáticas bidimensionais de tuplas.",
        "Modelo Hierárquico, amplamente utilizado no passado através do sistema IMS da IBM estruturado em formato de árvore.",
        "Modelo em Rede, padronizado historicamente pela conferência CODASYL e estruturado primariamente através de grafos flexíveis.",
      ],
      correctIndex: 2,
    },
    {
      type: "select",
      difficulty: "difícil",
      template:
        "No ecossistema que compõe o cenário de Banco de Dados, quem especifica tecnicamente os sistemas e documenta as carências transacionais dos usuários finais são primariamente os {{0}}. Em contrapartida, os responsáveis por aplicar fisicamente implementações profundas dos módulos internos e desenhar as próprias interfaces de uso abstrato do SGBD consistem nos {{1}}.",
      blanksOptions: [
        ["Analistas de Sistemas", "Projetistas de BD", "DBA"],
        [
          "Projetistas de Sistemas SGBD",
          "Desenvolvedores de Ferramentas",
          "Administradores (DBA)",
        ],
      ],
      blanksCorrect: ["Analistas de Sistemas", "Projetistas de Sistemas SGBD"],
    },
  ],
};
