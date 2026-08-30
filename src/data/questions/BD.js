const BD = {
  id: "BD",
  name: "BD",
  monogram: "BD",
  description: "BD",
  questions: [
    {
      id: "aula02_conceitos_19",
      dificuldade: "Muito Difícil",
      enunciado:
        "Um incidente de cibersegurança afetou uma tabela de auditoria hospitalar. O Analista Pleno solicitou ao DBA que o tamanho do campo 'LogAcesso' fosse modificado de VARCHAR(255) para TEXT e, sequencialmente, que o IP '192.168.0.5' fosse purgado (deletado) dos registros comprometidos já gravados. Avaliando de forma microscópica as camadas linguísticas do banco de dados relacional, qual o veredito exato da aplicação de ações requeridas pelo DBA?",
      opcoes: {
        A: "A primeira ação configura-se como uma modificação estrutural pontual via comando MODIFY no domínio da DML; a segunda configura-se como uma remoção específica de tuplas via instrução DROP inserida no escopo da DDL.",
        B: "A primeira ação configura-se como uma manipulação estrutural formal via comando UPDATE no domínio da DDL; a segunda configura-se como uma remoção total de tuplas via instrução TRUNCATE inserida no escopo da DML.",
        C: "A primeira ação configura-se como uma redefinição sistêmica formal via comando ALTER no domínio da DDL; a segunda configura-se como uma remoção específica de tuplas via instrução DELETE inserida no escopo da DML.",
        D: "A primeira ação configura-se como uma redefinição sistêmica formal via comando ALTER no domínio da DML; a segunda configura-se como uma remoção específica de tabelas via instrução DELETE inserida no escopo da DCL.",
        E: "A primeira ação configura-se como uma reestruturação relacional complexa via comando ALTER no domínio da DDL; a segunda configura-se como uma revogação imediata de atributos via instrução REVOKE inserida no escopo da DCL.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_17",
      dificuldade: "Difícil",
      enunciado:
        "Um veículo espacial em reentrada atmosférica calcula trajetórias orbitais críticas a cada microssegundo, salvando as parciais diretas na memória L1. Levando em consideração a natureza de um SGBD genérico moderno, o que desqualificaria seu emprego nessa camada de voo autônoma?",
      opcoes: {
        A: "A incompatibilidade gritante com restrições flexíveis de processos transacionais contínuos de backup e os altíssimos retornos informacionais fornecidos.",
        B: "A incompatibilidade gritante com restrições extremas de tempo real (latência estrutural zero) demandadas e os altíssimos custos computacionais exigidos.",
        C: "A incompatibilidade gritante com transações seguras e criptografadas de dados relacionais espaciais e os altíssimos custos computacionais exigidos.",
        D: "A incompatibilidade gritante com linguagens orientadas a objeto aplicadas a equipamentos geográficos e os altíssimos custos computacionais exigidos.",
        E: "A incompatibilidade gritante com conexões de banda larga intermitentes e ambientes em múltiplos arrays e os baixos volumes de hardware embarcado.",
      },
      correta: "B",
    },
    {
      id: "aula02_conceitos_11",
      dificuldade: "Difícil",
      enunciado:
        "A gerência de logística exigiu a inclusão do rastreio GPS para frotas. O DBA deve incluir a coluna 'Coordenadas' e depois populá-la com o valor 'Pendente' nos registros inativos. Quais comandos estruturais e transacionais, respectivamente, concluem perfeitamente essa demanda?",
      opcoes: {
        A: "Primeiramente aplica-se o comando MODIFY TABLE (DDL) para moldar a tabela, e sequencialmente o comando UPDATE (DML) para gravar o status.",
        B: "Primeiramente aplica-se o comando ALTER TABLE (DDL) para moldar a tabela, e sequencialmente o comando MODIFY (DML) para gravar o status.",
        C: "Primeiramente aplica-se o comando ALTER TABLE (DDL) para moldar a tabela, e sequencialmente o comando UPDATE (DML) para gravar o status.",
        D: "Primeiramente aplica-se o comando CREATE TABLE (DDL) para moldar a tabela, e sequencialmente o comando INSERT (DML) para gravar o status.",
        E: "Primeiramente aplica-se o comando ALTER TABLE (DML) para moldar a tabela, e sequencialmente o comando UPDATE (DDL) para gravar o status.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_22",
      dificuldade: "Muito Difícil",
      enunciado:
        "Modelos em Rede tratavam multiplicidades N:M utilizando encadeamentos lógicos entre as fronteiras dos registros via CODASYL. Codd revolucionou ao extinguir a necessidade desses ponteiros. Considerando o estado da arte do esquema relacional de Codd padronizado posteriormente, como a cardinalidade muitos-para-muitos desvencilhou-se dessa amarra topológica mantendo a pureza matemática baseada puramente em chaves primárias bidirecionais?",
      opcoes: {
        A: "A resolução cristalizou-se na eliminação de entidades associativas cruzadas nativamente pelo SGBD, exigindo que as identificações primárias dos entes fossem unificadas em uma única estrutura colunar composta, simulando com êxito os antigos arrays encadeados dinâmicos.",
        B: "A resolução cristalizou-se na absorção da cardinalidade máxima no lado da entidade forte, que instancia simultaneamente vetores alocados na memória dos entes conectados e os submete cooperativamente ao controle rígido de chaves estrangeiras multidimensionais e irrestritas.",
        C: "A resolução cristalizou-se na derivação de um novo subgrafo de associação matriz-ponteiro, que absorve simultaneamente os índices primários dos entes conectados e os promove cooperativamente ao status de atributos redundantes dentro de suas referidas hierarquias isoladas.",
        D: "A resolução cristalizou-se na derivação de uma nova entidade tabular relacional intermediária, que herda simultaneamente as identificações primárias dos entes conectados e as promove cooperativamente ao status de chaves estrangeiras conjugadas dentro de sua própria geografia.",
        E: "A resolução cristalizou-se na derivação de uma nova entidade tabular relacional estática, que herda alternadamente as identificações secundárias dos entes não-relacionais adjacentes e as promove separadamente ao status de chaves criptografadas autônomas e indelegáveis.",
      },
      correta: "D",
    },
    {
      id: "aula02_conceitos_28",
      dificuldade: "Muito Difícil",
      enunciado:
        "A Primary Key, espinha dorsal da álgebra referencial idealizada, assegura a individualidade hermética e insubstituível das entidades tabuladas em todo o ecossistema SGBD. Delineando os corolários inquebrantáveis que brotam da seleção mecânica desse construto específico sobre a coluna 'Código_Serial' em um registro de fábrica de maquinário aeronáutico, qual pilar restritivo é cravado imperiosamente a nível físico-lógico do sistema na exata concepção da chave?",
      opcoes: {
        A: "Ergue-se a restrição analítica irremovível de que em todas as esferas computacionais futuras ancoradas nesse sistema corporativo purista isolado, as matrizes atreladas a este pilar absorverão a duplicidade operacional forçada sem incorrer em interrupções abruptas do mecanismo processual interno caso a violação seja mascarada pela manipulação do espaço nulo sistêmico tolerado (branco relacional).",
        B: "Ergue-se a prerrogativa irrevogável de que em toda e qualquer instância gravada superficialmente nessa matriz analítica flexível, o campo associado a este referencial admitirá a sobreposição nula de estados desconhecidos (ausência relativa formal tolerada) desde que protegido hermeticamente contra cruzamentos idênticos perigosos advindos da rede hierárquica transversal originária.",
        C: "Ergue-se a prerrogativa incontestável de que em toda e qualquer instância histórica ou futura gravada nessa coleção matemática, o vetor subjacente sob este pilar estará permanentemente expurgado de dubiedades (ausência formal de nulos) e totalmente vacinado contra clonagens semânticas exatas na sua linhagem primária (valores idênticos prévios).",
        D: "Ergue-se a prerrogativa incontestável de que em toda e qualquer transação de inserção sequencial nessa organização em rede padronizada, o vetor subjacente correspondente sofrerá a redefinição arbitrária baseada puramente na exclusão contínua em cascata imediata e protegida perfeitamente contra inconsistências sistêmicas derivadas puramente da linguagem DCL empregada pelo construtor do modelo.",
        E: "Ergue-se a imposição técnica relacional limitante que assegura firmemente a vinculação externa inabalável de que toda instância presente nas filiais ligadas indiretamente a esta relação central deva repassar compulsoriamente este atributo isolado perante qualquer tentativa de reconfiguração de registros nulos sem duplicidade (valores limpos espelhados isolados horizontalmente da rede original padronizada e otimizada).",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_07",
      dificuldade: "Média",
      enunciado:
        "Como a disposição lógica e a navegabilidade física das informações eram tratadas no clássico modelo estrutural hierárquico?",
      opcoes: {
        A: "Os registros estão rigorosamente organizados em matrizes, onde um nó pai pode possuir múltiplos nós filhos vinculados a ele diretamente.",
        B: "Os registros estão rigorosamente organizados em árvores, onde um nó filho pode possuir múltiplos nós pais vinculados a ele diretamente.",
        C: "Os registros estão rigorosamente organizados em grafos, onde um nó pai pode possuir múltiplos nós filhos vinculados a ele diretamente.",
        D: "Os registros estão rigorosamente organizados em árvores, onde um nó pai pode possuir múltiplos nós filhos vinculados a ele diretamente.",
        E: "Os registros estão rigorosamente organizados em grafos, onde um nó filho pode possuir múltiplos nós pais vinculados a ele diretamente.",
      },
      correta: "D",
    },
    {
      id: "aula02_conceitos_06",
      dificuldade: "Média",
      enunciado:
        "Um analista necessita revogar urgentemente privilégios de acesso que haviam sido concedidos a um auditor. Como ele procede?",
      opcoes: {
        A: "Utilizando o comando REVOKE, que pertence à subcategoria Data Control Language (DCL) e serve para retirar direitos atribuídos.",
        B: "Utilizando o comando DELETE, que pertence à subcategoria Data Control Language (DCL) e serve para retirar direitos atribuídos.",
        C: "Utilizando o comando DROP, que pertence à subcategoria Data Control Language (DCL) e serve para retirar direitos atribuídos.",
        D: "Utilizando o comando REVOKE, que pertence à subcategoria Data Definition Language (DDL) e serve para retirar direitos atribuídos.",
        E: "Utilizando o comando ALTER, que pertence à subcategoria Data Manipulation Language (DML) e serve para retirar direitos atribuídos.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_12",
      dificuldade: "Difícil",
      enunciado:
        "Numa equipe de engenharia bancária, Roberto está entrevistando caixas para descobrir como lidam com transferências diárias, enquanto Mariana está definindo os tipos numéricos e textuais para arquivar essas rotinas. Segundo a divisão formal de atores de SGBD, quais são as posições de ambos?",
      opcoes: {
        A: "Roberto atua estritamente como Projetista de Banco de Dados em rede; Mariana atua estritamente como Analista de Sistemas de negócio puro.",
        B: "Roberto atua estritamente como Analista de Sistemas de negócio; Mariana atua estritamente como Projetista de Banco de Dados relacional.",
        C: "Roberto atua estritamente como Analista de Sistemas de negócio; Mariana atua estritamente como Administradora de Banco de Dados em rede.",
        D: "Roberto atua estritamente como Administrador de Dados de negócio; Mariana atua estritamente como Projetista de Banco de Dados relacional.",
        E: "Roberto atua estritamente como Analista de Banco de Dados relacional; Mariana atua estritamente como Projetista de Sistemas de negócio.",
      },
      correta: "B",
    },
    {
      id: "aula02_conceitos_15",
      dificuldade: "Difícil",
      enunciado:
        "As grandes corporações contam com atores de bastidores. João otimiza os binários e módulos de segurança de encriptação primária do SGBD, e Carlos projeta scripts externos para simular 10.000 requisições simultâneas de usuários por minuto. Qual a nomenclatura exata desses especialistas técnicos?",
      opcoes: {
        A: "João desempenha a função de Desenvolvedor Utilizante de Sistemas SGBD; Carlos desempenha a função utilitária de Projetista de Banco de Dados.",
        B: "João desempenha a função de Administrador e Mantenedor de Infra SGBD; Carlos desempenha a função utilitária de Desenvolvedor de Ferramentas.",
        C: "João desempenha a função de Projetista/Implementador de Sistemas SGBD; Carlos desempenha a função utilitária de Administrador de Banco Operacional.",
        D: "João desempenha a função de Operador/Especialista de Hardware SGBD; Carlos desempenha a função utilitária de Analista e Integrador Ferramentas.",
        E: "João desempenha a função de Projetista/Implementador de Sistemas SGBD; Carlos desempenha a função utilitária de Desenvolvedor de Ferramentas.",
      },
      correta: "E",
    },
    {
      id: "aula02_conceitos_10",
      dificuldade: "Difícil",
      enunciado:
        "Durante uma consultoria de arquitetura empresarial, os dados precisam transitar desde as regras de negócio puras até o software implementado. Considerando a visão macro teórica do projeto de banco de dados, como se desenvolve a camada focada exclusivamente na estruturação?",
      opcoes: {
        A: "Flui do modelo Lógico baseado em Informação para o modelo Conceitual ancorado no SGBD, desaguando nos limites do sistema processual.",
        B: "Flui do modelo Conceitual baseado em Processos para o modelo Lógico ancorado em Programas, desaguando nos limites do sistema físico.",
        C: "Flui do modelo Conceitual baseado em Informação para o modelo Físico ancorado no SGBD, desaguando nos limites do sistema processual.",
        D: "Flui do modelo Conceitual baseado em Informação para o modelo Lógico ancorado no SGBD, desaguando nos limites do sistema físico.",
        E: "Flui do modelo Físico baseado em Informação para o modelo Lógico ancorado no SGBD, desaguando nos limites do sistema conceitual.",
      },
      correta: "D",
    },
    {
      id: "aula02_conceitos_25",
      dificuldade: "Muito Difícil",
      enunciado:
        "Considere o teatro de operações dos recursos humanos alocados à engenharia SGBD: o agente Alpha codifica camadas sub-reptícias no núcleo de alocação de buffers para viabilizar indexações otimizadas B-Tree; o agente Beta projeta extensões dashboard plugáveis que injetam milhões de threads randômicas no SGBD testando gargalos operacionais. Sob a ótica da pirâmide estrutural dos bastidores da plataforma, qual o enquadramento exato desses indivíduos?",
      opcoes: {
        A: "O papel atribuído a Alpha confunde-se irrevogavelmente com os escopos periféricos focados no desenvolvimento utilitário de ferramentas externas essenciais; a conduta de Beta classifica-se indubitavelmente no raio de atuação dos Projetistas de Infraestrutura Lógica nativos do banco central.",
        B: "O papel atribuído a Alpha confunde-se irrevogavelmente com os escopos transacionais genéricos dos Administradores Lógicos e Físicos de Dados (DBA); a conduta de Beta classifica-se indubitavelmente no raio de atuação periférica dos Programadores Nativos de Aplicações corporativas.",
        C: "O papel atribuído a Alpha confunde-se irrevogavelmente com os escopos fundacionais dos Projetistas e Implementadores nativos do SGBD; a conduta de Beta classifica-se indubitavelmente no raio de atuação periférica dos Desenvolvedores especializados em Ferramentas.",
        D: "O papel atribuído a Alpha confunde-se irrevogavelmente com os escopos fundacionais dos Projetistas e Extratores Analíticos do Negócio; a conduta de Beta classifica-se indubitavelmente no raio de atuação nuclear dos Desenvolvedores Estruturais focados inteiramente no SGBD principal.",
        E: "O papel atribuído a Alpha confunde-se irrevogavelmente com os escopos fundacionais dos Operadores Técnicos e Supervisores de Manutenção Física; a conduta de Beta classifica-se indubitavelmente no raio de atuação periférica dos Programadores Avançados e Administradores de Logs.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_13",
      dificuldade: "Difícil",
      enunciado:
        "Em uma infraestrutura de folha de pagamento, um atributo de chave estrangeira foi introduzido na tabela de 'Holerites'. Qual o exato propósito funcional que garante a segurança sistêmica dessa modelagem adotada?",
      opcoes: {
        A: "A referida chave estrangeira obriga o apontamento exclusivo para uma chave primária de outra tabela, prevenindo o isolamento da relação.",
        B: "A referida chave estrangeira flexibiliza o apontamento exclusivo para uma chave secundária de outra tabela, acelerando o isolamento relacional.",
        C: "A referida chave secundária flexibiliza o apontamento exclusivo para uma chave primária de outra tabela, prevenindo o isolamento da relação.",
        D: "A referida chave primária obriga o apontamento exclusivo para uma chave estrangeira de outra tabela, prevenindo o isolamento da relação.",
        E: "A referida chave estrangeira obriga o apontamento exclusivo para uma chave estrangeira de outra tabela, prevenindo o isolamento da relação.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_20",
      dificuldade: "Muito Difícil",
      enunciado:
        "O slide 'Visão macro do projeto de banco de dados' orquestra de maneira vetorial a transição lógica dos requisitos. Observando a polaridade horizontal que divide 'Dados' e 'Funções' (da esquerda para a direita) e a verticalidade que desce do plano 'Conceitual' ao 'Físico', como a representação fundamental da persistência cruza essas barreiras na dimensão estrita esquerda do referencial orquestrado?",
      opcoes: {
        A: "No estrato Conceitual reside a essência da 'Informação', que ascende ontologicamente para a camada sistêmica abstrata de 'Programas' no estrato Lógico, interconectado perfeitamente às lógicas algorítmicas computacionais transacionais.",
        B: "No estrato Físico reside a essência orgânica do 'Sistema', que descende ontologicamente para a persistência granular do 'SGBD' no estrato Lógico, isolado categoricamente do diagrama original arquitetado pelas restrições do hardware.",
        C: "No estrato Lógico reside a essência da 'Informação', que descende ontologicamente para o encapsulamento estruturado do 'Sistema' no estrato Físico, convergindo intrinsicamente com as diretrizes de interface de rede computacional.",
        D: "No estrato Conceitual reside a essência do 'Processo', que descende ontologicamente para a camada tangível dos 'Programas' no estrato Lógico, isolado das diretrizes puras da semântica relacional de informações armazenadas.",
        E: "No estrato Conceitual reside a essência da 'Informação', que descende ontologicamente para o encapsulamento estruturado do 'SGBD' no estrato Lógico, isolado das diretrizes puras de fluxo sistêmico computacional.",
      },
      correta: "E",
    },
    {
      id: "aula02_conceitos_16",
      dificuldade: "Difícil",
      enunciado:
        "Antes de qualquer codificação física, a fase de modelagem conceitual atua como alicerce do projeto de banco de dados. Dentre as alternativas, qual delineia de maneira cirúrgica o propósito central integrativo desse estágio preparatório?",
      opcoes: {
        A: "Ela viabiliza fundamentalmente o nivelamento cognitivo das necessidades de negócio e promove ativamente o compartilhamento coeso das estruturas.",
        B: "Ela viabiliza fundamentalmente o nivelamento processual das necessidades de hardware e promove passivamente o mascaramento técnico das estruturas.",
        C: "Ela viabiliza fundamentalmente a distribuição fragmentada das necessidades de negócio e promove ativamente a restrição lógica coesa das estruturas.",
        D: "Ela viabiliza fundamentalmente o nivelamento cognitivo das necessidades operacionais e promove ativamente o bloqueio físico das matrizes lógicas.",
        E: "Ela viabiliza fundamentalmente o isolamento cognitivo das necessidades de negócio e restringe ativamente o compartilhamento coeso das estruturas.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_26",
      dificuldade: "Muito Difícil",
      enunciado:
        "A adoção em larga escala de modelos estritamente voltados a paradigmas relacionais aniquilou virtualmente as implementações comerciais de bancos de dados nativamente baseados em Objetos na gestão de fluxo logístico tradicional. Sob a ótica da flexibilidade manipulativa, por que o avanço tecnológico na semântica puramente OO foi sistematicamente repudiado pelas metodologias analíticas empresariais cotidianas?",
      opcoes: {
        A: "O confinamento algorítmico natural dos modelos OO prejudicava a intersecção livre de construtos não antevistos (consultas ad-hoc), cenário onde as projeções matemáticas relacionais e a aderência universal à linguagem padronizada SQL brilhavam e forneciam fluidez operacional incomensurável.",
        B: "O confinamento algorítmico restritivo das chaves estrangeiras relacionais beneficiava a segurança transacional bloqueada e limitada, cenário onde a fragmentação infinita abstrata do modelo OO propunha uma falha sistêmica irreversível nas metodologias empresariais tradicionais dependentes diretas do SGBD.",
        C: "O confinamento físico irredutível dos modelos OO sobrecarregava as limitações de latência RAM dos hardwares subjacentes e matrizes estáticas, cenário onde as indexações restritivas hierárquicas e a aderência local às redes conectadas SQL despontavam e proporcionavam estabilidade absoluta corporativa.",
        D: "O confinamento semântico transversal dos modelos relacionais potencializava a intersecção livre de construtos não hierárquicos (consultas ad-hoc), cenário onde as abstrações O.O. universais orientadas pelas conexões CODASYL ofuscavam a lentidão matemática dos arrays relacionais SQL puros.",
        E: "O confinamento algorítmico natural dos modelos OO facilitava irrestritamente a extração analítica caótica (consultas autônomas abertas), cenário onde o aprisionamento estruturado imposto vigorosamente pelo modelo relacional fornecia segurança burocrática inestimável requisitada fortemente pelas corporações padronizadas.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_02",
      dificuldade: "Fácil",
      enunciado:
        "Quem é o profissional tecnológico estritamente responsável por autorizar acessos e monitorar o uso do SGBD?",
      opcoes: {
        A: "O Programador de App, que foca na autorização de acesso e no constante monitoramento geral do sistema de banco de dados.",
        B: "O Analista Sistemas, que foca na autorização de acesso e no constante monitoramento geral do sistema de banco de dados.",
        C: "O Desenvolvedor Tool, que foca na autorização de acesso e no constante monitoramento geral do sistema de banco de dados.",
        D: "O Projetista de Banco, que foca na autorização de acesso e no constante monitoramento geral do sistema de banco de dados.",
        E: "O Administrador (DBA), que foca na autorização de acesso e no constante monitoramento geral do sistema de banco de dados.",
      },
      correta: "E",
    },
    {
      id: "aula02_conceitos_14",
      dificuldade: "Difícil",
      enunciado:
        "O modelo relacional de Edgar Codd causou uma grande disrupção no mercado em 1970. Além de propor as tabelas como relações intrínsecas, o que fundamentou sua supremacia técnica no aumento de desempenho de manutenibilidade do ciclo de software?",
      opcoes: {
        A: "A fundamentação rigorosa baseada puramente na arquitetura de grafos verticais, elevando formidavelmente a independência física dos hardwares.",
        B: "A fundamentação rigorosa baseada puramente na álgebra relacional de conjuntos, elevando formidavelmente a dependência cruzada dos aplicativos.",
        C: "A fundamentação rigorosa baseada puramente na álgebra relacional de conjuntos, elevando formidavelmente a independência lógicas dos dados.",
        D: "A fundamentação rigorosa baseada puramente na álgebra estrutural de matrizes, rebaixando formidavelmente a independência lógicas dos dados.",
        E: "A fundamentação rigorosa baseada puramente na engenharia reversa de objetos, elevando formidavelmente a dependência orgânica dos hardwares.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_03",
      dificuldade: "Fácil",
      enunciado:
        "Qual grupo fundamental de instruções SQL é focado de maneira exclusiva em consultar e alterar os registros?",
      opcoes: {
        A: "As instruções de Autorização (DAL), que envolvem operações como consultar, inserir, atualizar ou excluir os dados tabulares.",
        B: "As instruções de Definição (DDL), que envolvem operações como consultar, inserir, atualizar ou excluir os dados tabulares.",
        C: "As instruções de Manipulação (DML), que envolvem operações como consultar, inserir, atualizar ou excluir os dados tabulares.",
        D: "As instruções de Controle (DCL), que envolvem operações como consultar, inserir, atualizar ou excluir os dados tabulares.",
        E: "As instruções de Estruturação (DSL), que envolvem operações como consultar, inserir, atualizar ou excluir os dados tabulares.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_18",
      dificuldade: "Difícil",
      enunciado:
        "Embora o Modelo Orientado a Objetos (OO) tenha revolucionado a capacidade expressiva de atributos e comportamentos encapsulados, ele não obliterou o Modelo Relacional na maior parte das aplicações. O que fundamenta tecnicamente a resiliência relacional face ao modelo OO em corporações de gestão tradicional?",
      opcoes: {
        A: "A superioridade matemática pragmática e a flexibilidade das heranças profundas do Relacional no cruzamento ad-hoc perante a desestruturação livre do OO.",
        B: "A superioridade computacional gráfica e a rigidez imutável das estruturas em rede do Relacional no isolamento ad-hoc perante a segmentação intrínseca do OO.",
        C: "A superioridade matemática pragmática e a flexibilidade das matrizes puras do Relacional no cruzamento ad-hoc perante a segmentação intrínseca do OO.",
        D: "A superioridade matemática conceitual e a inflexibilidade limitadora das consultas analíticas do Relacional no encapsulamento perante o processamento purista do OO.",
        E: "A debilidade matemática perceptível e a vulnerabilidade das chaves estrangeiras do Relacional no cruzamento ad-hoc comparado com as classes nativas do OO.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_27",
      dificuldade: "Muito Difícil",
      enunciado:
        "A implementação de microprocessadores biomédicos restritivos e hermeticamente selados para o monitoramento invasivo e momentâneo de picos de fibrilação cardíaca descarta, via de regra, a adoção de subsistemas complexos gerenciadores de dados transacionais integrados (SGBD completos). Analisando friamente a documentação técnica de viabilidade de projetos críticos de alta concisão apresentados, qual a barreira arquitetural mortífera associada ao seu emprego neste host?",
      opcoes: {
        A: "A inflexibilidade iminente dos sistemas gerenciadores robustos em fornecer latência quase inexistente combinada de forma predatória ao exíguo e escasso escopo de recursos de memória permanente nativa que compõem intrinsecamente os circuitos restritos desse aparato embarcado descartável.",
        B: "A inflexibilidade iminente dos registros em matrizes de chaves estrangeiras em fornecer escalabilidade irrestrita, combinada inevitavelmente à absurda expansão de dados que fragmentaria de forma fatal a volumosa capacidade permanente inerente aos circuitos amplos dessa complexa central hospitalar isolada e ininterrupta.",
        C: "A incompatibilidade gritante e irresolúvel dos SGBDs baseados em arquiteturas relacionais de rede que não permitem a retenção de logísticas matemáticas estritamente complexas ou processamentos analíticos profundos de inteligência clínica exigidos intrinsecamente por hardwares hospitalares remotos de alta performance.",
        D: "A latência insuperável oriunda da falta de estruturas lógicas pré-processadas baseadas exclusivamente na flexível linguagem abstrata de orientação a objetos corporativa que impossibilita categoricamente a gravação síncrona persistente e serializada exigida rigorosamente por todos os aparelhos autônomos cirúrgicos e ambulatoriais do sistema.",
        E: "A vulnerabilidade intrínseca imposta pela conexão necessária aos servidores externos, que compromete ativamente a rigidez transacional militar de tempo real exigida e combinada estruturalmente com as múltiplas sessões assíncronas geradas e armazenadas dentro das partições voláteis limitadas desse hardware biológico.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_05",
      dificuldade: "Média",
      enunciado:
        "Em qual dos ambientes corporativos ou industriais descritos abaixo a implementação de um SGBD NÃO seria tecnicamente recomendada?",
      opcoes: {
        A: "Em sistemas embarcados de hardware com capacidades de processamento restritas e requisitos rigorosos de ação de tempo real.",
        B: "Em sistemas corporativos de varejo com capacidades de processamento restritas e requisitos rigorosos de ação de tempo real.",
        C: "Em sistemas de processamento de RH com capacidades de processamento restritas e requisitos rigorosos de ação de tempo real.",
        D: "Em sistemas embarcados de hardware com capacidades de processamento robustas e requisitos flexíveis de ação de longo prazo.",
        E: "Em sistemas analíticos estruturados com capacidades de processamento robustas e requisitos flexíveis de ação de longo prazo.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_23",
      dificuldade: "Muito Difícil",
      enunciado:
        "Um Analista Júnior foi promovido, passando a exigir os direitos executivos de manipular os dados da infraestrutura financeira sem, no entanto, deter poderes para reescrever, expurgar ou mutilar a arquitetura tabular que alicerça o sistema. Em uma manobra minuciosa de Data Control Language (DCL), como o DBA articula perfeitamente essa limitação de escopo funcional contra potenciais acidentes catastróficos?",
      opcoes: {
        A: "Empregando a cláusula ALTER, injeta autorizações irrestritas nas searas transacionais de inserção e atualização sistêmica regidas pelo espectro da DML, e deliberadamente garante a revogação de acessos na visualização de esquemas de colunas e chaves estrangeiras vinculadas aos domínios da DDL.",
        B: "Empregando a cláusula GRANT, injeta autorizações restritivas nas searas transacionais de consultas genéricas e simples regidas pelo espectro da DCL, e deliberadamente exime-se de invocar restrições sobre exclusões definitivas de colunas e dados massivos inerentes às subcategorias de DDL.",
        C: "Empregando a cláusula GRANT, injeta autorizações irrestritas nas searas transacionais de inserção e atualização massiva regidas pelo espectro da DML, e deliberadamente exime-se de conceder jurisdição sobre criações ou supressões de colunas e tabelas inerentes à DDL.",
        D: "Empregando a cláusula GRANT, injeta autorizações irrestritas nas searas transacionais de inserção e redefinição de esquemas regidas pelo espectro da DDL, e deliberadamente exime-se de conceder jurisdição sobre pesquisas e formatações de colunas e tabelas inerentes à DML.",
        E: "Empregando a cláusula REVOKE, injeta autorizações irrestritas nas searas estruturais de construção e reconstrução massiva regidas pelo espectro da DML, e deliberadamente exime-se de revogar jurisdições sobre criações operacionais e lógicas de registros atreladas rigidamente à DDL.",
      },
      correta: "C",
    },
    {
      id: "aula02_conceitos_08",
      dificuldade: "Média",
      enunciado:
        "Quando um usuário final ignora o preenchimento de seu complemento residencial em um aplicativo de cadastro, o que o SGBD registrará?",
      opcoes: {
        A: "O SGBD processará o campo como valor Zero, indicando formalmente que a referida informação encontra-se inteiramente ausente ou vazia.",
        B: "O SGBD processará o campo como valor Branco, indicando formalmente que a referida informação encontra-se inteiramente ausente ou vazia.",
        C: "O SGBD processará o campo como valor Falso, indicando formalmente que a referida informação encontra-se inteiramente ausente ou vazia.",
        D: "O SGBD processará o campo como valor Chave, indicando formalmente que a referida informação encontra-se inteiramente ausente ou vazia.",
        E: "O SGBD processará o campo como valor NULL, indicando formalmente que a referida informação encontra-se inteiramente ausente ou vazia.",
      },
      correta: "E",
    },
    {
      id: "aula02_conceitos_09",
      dificuldade: "Difícil",
      enunciado:
        "Uma organização governamental ainda utiliza um mainframe padronizado pela CODASYL. A equipe de novos engenheiros notou que esse sistema permite cruzamentos de dados bidirecionais complexos. Qual característica desse modelo viabiliza essa flexibilidade anômala?",
      opcoes: {
        A: "A imposição das barreiras estritamente orientadas a objetos, permitindo que os registros formem grafos multiconectados de associações.",
        B: "A remoção das barreiras estritamente verticais da hierarquia, permitindo que os registros formem grafos multiconectados de associações.",
        C: "A remoção das barreiras estritamente relacionais das tabelas, permitindo que os registros formem grafos multiconectados de associações.",
        D: "A imposição das barreiras estritamente verticais da hierarquia, permitindo que os registros formem árvores multiconectadas de associações.",
        E: "A remoção das barreiras estritamente orientadas a objetos, permitindo que os registros formem grafos multiconectados de associações.",
      },
      correta: "B",
    },
    {
      id: "aula02_conceitos_24",
      dificuldade: "Muito Difícil",
      enunciado:
        "Sob o rigor absoluto da álgebra imposta pelas matrizes relacionais e em completa ausência de diretrizes paliativas ou triggers customizadas estabelecidas previamente pela arquitetura, qual é o destino ontológico inquestionável de uma tupla que venha a ser registrada omitindo dados textuais na coluna não classificada como chave de identificação essencial?",
      opcoes: {
        A: "O motor gerencial do modelo absorverá intrinsecamente essa incompletude transmutando-a no metadado isolado NULL, consagrando que naquela interseção não se dispõe de conhecimento prático factível, tangível ou mapeado no universo representativo.",
        B: "O motor gerencial do modelo absorverá intrinsecamente essa incompletude transmutando-a em uma formatação vazia, consagrando que naquela interseção o espaço geográfico alocado pelo disco foi preservado de fragmentações e corrupções sistêmicas inerentes ao registro.",
        C: "O motor gerencial do modelo bloqueará imediatamente essa inserção rejeitando-a com restrições severas, consagrando que em toda extensão do tecido lógico do banco a ausência transacional violenta de forma irrevogável as premissas matemáticas fundacionais estipuladas por E. Codd.",
        D: "O motor gerencial do modelo absorverá intrinsecamente essa incompletude referenciando-a a uma chave estrangeira invisível, consagrando que naquela interseção estrutural não se dispõe de garantias operacionais que comprovem a integridade transitiva baseada estritamente no universo físico.",
        E: "O motor gerencial do modelo absorverá temporariamente essa incompletude transmutando-a no metadado numérico nulo absoluto (zero matemático), consagrando que naquela interseção ocorreu um erro imperativo recuperável a longo prazo pelos utilitários e algoritmos de varredura.",
      },
      correta: "A",
    },
    {
      id: "aula02_conceitos_01",
      dificuldade: "Fácil",
      enunciado:
        "No contexto de modelagem relacional apresentada, como garantimos logicamente a unicidade estrutural de um registro?",
      opcoes: {
        A: "Utilizando a Foreign Key, que identifica de forma única a tupla (registro) dentro da tabela relacional selecionada.",
        B: "Utilizando a Primary Key, que identifica de forma única a tupla (registro) dentro da tabela relacional selecionada.",
        C: "Utilizando um SGBD local, que identifica de forma única a tupla (registro) dentro da tabela relacional selecionada.",
        D: "Utilizando um valor NULL, que identifica de forma única a tupla (registro) dentro da tabela relacional selecionada.",
        E: "Utilizando o modelo UML, que identifica de forma única a tupla (registro) dentro da tabela relacional selecionada.",
      },
      correta: "B",
    },
    {
      id: "aula02_conceitos_04",
      dificuldade: "Média",
      enunciado:
        "Uma empresa precisa modelar um Sistema de Informação Geográfica (GIS) avançado. Qual modelo histórico é o mais ideal?",
      opcoes: {
        A: "O Modelo de Sistema Arquivo, que surgiu comercialmente nos anos 80, ideal para suportar atributos e manipular tipos complexos.",
        B: "O Modelo Relacional de Dados, que surgiu comercialmente nos anos 80, ideal para suportar atributos e manipular tipos complexos.",
        C: "O Modelo Hierárquico de Nó, que surgiu comercialmente nos anos 80, ideal para suportar atributos e manipular tipos complexos.",
        D: "O Modelo em Rede (CODASYL), que surgiu comercialmente nos anos 80, ideal para suportar atributos e manipular tipos complexos.",
        E: "O Modelo Orientado a Objetos, que surgiu comercialmente nos anos 80, ideal para suportar atributos e manipular tipos complexos.",
      },
      correta: "E",
    },
    {
      id: "aula02_conceitos_21",
      dificuldade: "Muito Difícil",
      enunciado:
        "O Sistema Comercial IMS (Information Management System) inaugurou comercialmente o pragmatismo das implementações hierárquicas. Tomando a topologia top-down de árvores como axioma inflexível, suponha a existência de um nó superior T (Turma) e um nó inferior A (Aluno). Qual axioma de vinculação relacional é fisicamente irrevogável segundo as fundações estritas desse arranjo?",
      opcoes: {
        A: "Um vetor de ocorrência do nó T possui jurisdição relacional obrigatória para mapear um-para-um os vetores descendentes do nó A, eliminando a viabilidade física de matrizes espalhadas em múltiplos braços organizacionais no mesmo núcleo sistêmico superior.",
        B: "Um vetor de ocorrência do nó T possui jurisdição ilimitada para abraçar múltiplos vetores descendentes do nó A, permitindo, por regra nativa de redes invertidas, que o nó A vincule-se ativamente a constelações variadas e distantes de vetores superiores do nó T.",
        C: "Um vetor de ocorrência do nó T possui restrição ilimitada para rejeitar múltiplos vetores descendentes do nó A, garantindo que o núcleo referencial de cada nó A encontre-se perpetuamente livre para associar-se a infinitos parentais superiores do nó T.",
        D: "Um vetor de ocorrência do nó A possui jurisdição ilimitada para abraçar múltiplos vetores ascendentes do nó T, todavia, o núcleo referencial de cada nó T encontra-se perpetuamente atrelado à exclusividade de um único vetor parental inferior do nó A.",
        E: "Um vetor de ocorrência do nó T possui jurisdição ilimitada para abraçar múltiplos vetores descendentes do nó A, todavia, o núcleo referencial de cada nó A encontra-se perpetuamente atrelado à exclusividade de um único vetor parental superior do nó T.",
      },
      correta: "E",
    },
  ],
};
