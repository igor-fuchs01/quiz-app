export const TI = {
  id: "TI",
  name: "TI",
  monogram: "TI",
  description: "TI",
  questions: [
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Analisando o ciclo de vida completo de um projeto de TI, quais são as diferenças fundamentais de propósito entre a Fase de Iniciação e a Fase de Encerramento?",
      options: [
        "Na iniciação constrói-se rigorosamente o backlog refinado; no encerramento, ajustam-se as execuções.",
        "Na iniciação define-se claramente o propósito final e o problema; no encerramento, avalia-se a eficácia.",
        "Na iniciação avalia-se pontualmente a eficácia do produto pronto; no encerramento, define-se o contexto.",
        "Na iniciação executam-se os testes integrais de homologação; no encerramento, define-se a meta SMART.",
        "Ambas as fases são dedicadas inteiramente à escrita das restrições e da validação de requisitos formais.",
      ],
      correctIndex: 1,
    },
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Em um complexo projeto hospitalar, a diretoria estabeleceu que o sistema deve rodar sem conexão à internet se houver queda (uma regra operacional rigorosa do ambiente). Ao mapear essa característica sistêmica essencial, o analista está documentando um {{0}}. Se a diretoria estipular que a aprovação do projeto depende de que nenhum leito seja desativado durante a instalação, isso representa uma clara {{1}}.",
      blanksCorrect: ["requisito técnico base", "restrição de execução"],
      options: [
        "requisito técnico base",
        "restrição de execução",
        "premissa contratual",
        "oportunidade latente",
        "exclusão documentada",
        "justificativa gerencial",
      ],
    },
    {
      type: "select",
      difficulty: "média",
      template:
        "No planejamento de projetos, a ferramenta 5W2H estrutura as estratégias operacionais. Nessa matriz, a diretriz focada em 'Quem (Who)' define o {{0}}, enquanto a diretriz focada em 'Como (How)' estabelece o {{1}} que será adotado.",
      blanksOptions: [
        ["Responsável", "Cronograma", "Justificativa"],
        ["Processo", "Orçamento", "Local de uso"],
      ],
      blanksCorrect: ["Responsável", "Processo"],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "No refinamento de requisitos (Backlog), o material ressalta que 'um backlog mal escrito às vezes é pior que não ter nenhum backlog'. Sob o ponto de vista da eficiência de desenvolvimento de TI abordado nas aulas teóricas, qual é a justificativa gerencial correta para essa premissa alarmante?",
      options: [
        "Pois induz a equipe inteira a gastar tempo precioso trilhando firmemente a direção fundamentalmente errada.",
        "Pois substitui rapidamente a necessidade formal de aprovação jurídica, ampliando o escopo criativo oculto.",
        "Pois acelera artificialmente o processo logístico, forçando a equipe a codificar módulos inacabados no fim.",
        "Pois restringe radicalmente o emprego de metodologias tradicionais, obrigando à adoção do Manifesto Ágil.",
        "Pois desativa silenciosamente os indicadores de rastreabilidade previstos na fase original de encerramento.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Durante a etapa de Execução de um projeto de TI, o progresso é acompanhado de perto. Se algo sair do planejado devido a falhas imprevistas na infraestrutura do cliente, qual é a ação processual correta recomendada?",
      options: [
        "Alterar a justificativa do projeto imediatamente para que ela se adeque perfeitamente ao novo cenário.",
        "Encerrar o projeto temporariamente, visto que o planejamento estrutural inicial não pode ser modificado.",
        "Modificar as premissas do cliente sem informá-lo detalhadamente, garantindo o cumprimento do prazo.",
        "Ajustar as estratégias planejadas cuidadosamente para garantir que os objetivos centrais sejam atingidos.",
        "Ignorar os indicadores de progresso reportados, pois a fase de execução foca apenas na codificação.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "No contexto da gestão de projetos de TI e sua respectiva documentação estrutural, qual documento é o responsável por conter o argumento mais sólido e convincente da proposta elaborada?",
      options: [
        "A justificativa, pois detalha um argumento sólido e convincente sobre todos os benefícios da proposta.",
        "O termo aberto, pois organiza um fluxograma sólido e convincente das atividades macros de modelagem.",
        "O escopo restrito, pois apresenta um balanço sólido e convincente dos requisitos técnicos mapeados.",
        "O objetivo prático, pois mensura um indicador sólido e convincente para a conclusão total do sistema.",
        "O contexto inicial, pois mapeia um panorama sólido e convincente sobre todo o ecossistema analisado.",
      ],
      correctIndex: 0,
    },
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "Na gestão de requisitos de TI, um item que é absolutamente indispensável para que o software funcione em sua premissa básica é classificado como um {{0}}. Já uma funcionalidade que agrega muito valor, mas cuja ausência não impede o lançamento, é um {{1}}.",
      blanksCorrect: ["requisito essencial", "requisito importante"],
      options: [
        "requisito essencial",
        "requisito desejável",
        "requisito importante",
        "requisito contratual",
        "requisito preliminar",
        "requisito normativo",
      ],
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um grande banco decide modernizar seu sistema de transações apenas porque o Banco Central publicou uma nova lei regulatória com prazo final imposto. Esse projeto nasceu primordialmente de qual contexto?",
      options: [
        "De um problema operacional iminente gerado por falhas intermitentes no sistema de processamento atual.",
        "De uma oportunidade valiosa de alavancar negócios internacionais por meio de integrações financeiras.",
        "De uma necessidade obrigatória fundamentada estritamente em novas demandas normativas e regulatórias.",
        "De um requisito classificado como desejável que passou a ser testado na fase de homologação bancária.",
        "De uma inovação disruptiva sugerida pela própria equipe interna para otimizar os fluxos de trabalho.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Na construção da documentação inicial, como o 'Objetivo' de um projeto de TI deve ser elaborado para garantir o máximo de eficácia e alinhamento corporativo?",
      options: [
        "Através de uma explicação detalhada e prolixa das restrições financeiras mapeadas até o encerramento.",
        "Através de uma definição genérica e abrangente sobre as tecnologias escolhidas para a execução lógica.",
        "Através de uma estimativa de tempo e recursos materiais necessários para aprovar o termo de finalização.",
        "Através de uma declaração puramente filosófica das oportunidades de mercado que justificam o trabalho.",
        "Através de uma definição clara e concisa dos resultados específicos que se planeja alcançar no projeto.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Uma equipe de desenvolvedores entrega funcionalidades extras que não foram documentadas (Gold Plating) no escopo inicial do projeto. Sob a ótica das boas práticas de documentação de TI ensinadas, por que essa atitude é tecnicamente prejudicial?",
      options: [
        "Porque invalida as premissas contratuais básicas, embora diminua o retrabalho futuro da homologação.",
        "Porque os requisitos adicionais sempre sobrecarregam os servidores locais, paralisando a operação útil.",
        "Porque o projeto perde sua previsibilidade e limites, comprometendo controle de custos e tempo investido.",
        "Porque as exclusões explícitas no documento de iniciação determinam a obrigatoriedade dessa inovação.",
        "Porque o cliente passa a exigir descontos proporcionais ao tempo não faturado pelas funções excedentes.",
      ],
      correctIndex: 2,
    },
    {
      type: "select",
      difficulty: "difícil",
      template:
        "De acordo com o comparativo de metodologias e terminologias (Aula 3), no Modelo WBS (Estrutura Analítica do Projeto), a macro-divisão de maior nível é chamada de {{0}}. Por outro lado, no Modelo Ágil (Backlog), esse mesmo agrupamento maior corresponde ao chamado {{1}}.",
      blanksOptions: [
        ["Módulo", "Requisito", "Processo"],
        ["Épico", "Feature", "História"],
      ],
      blanksCorrect: ["Módulo", "Épico"],
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "De acordo com os conceitos fundamentais apresentados, como a Tecnologia da Informação (TI) deve ser primordialmente definida dentro do ambiente corporativo moderno?",
      options: [
        "É o uso exclusivo de hardwares avançados para automatizar apenas a produção industrial de larga escala.",
        "É o conjunto de recursos e sistemas digitais para criar, processar e compartilhar dados e informações.",
        "É a aplicação de métodos puramente teóricos para o desenvolvimento de soluções na infraestrutura civil.",
        "É o uso de recursos e sistemas puramente analógicos para criar, ocultar e deletar dados irrelevantes.",
        "É a documentação de redes e sistemas autônomos, descartando a necessidade de análise de novos dados.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "O Backlog do projeto é essencial para a organização das entregas de TI. Baseado nas aulas sobre gestão de requisitos, assinale a definição que traduz corretamente este conceito na prática ágil corporativa.",
      options: [
        "É o documento estático que lista rigorosamente as entregas validadas pelo cliente e prontas para uso.",
        "É o repositório organizado e cumulativo de tarefas, demandas ou requisitos que aguardam programação.",
        "É o registro jurídico formal que consolida a justificativa financeira e o contexto histórico do problema.",
        "É um arquivo de regras de negócio abstratas que exclui por completo os requisitos técnicos essenciais.",
        "É a ferramenta analítica visual que detalha unicamente os fluxos e premissas de custos de implantação.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "A documentação de TI age como uma ponte entre a ideia e a execução. Se uma equipe decide operar sem documentação formal, qual das consequências abaixo ilustra a analogia do 'telefone sem fio' apresentada em aula?",
      options: [
        "O projeto torna-se imune a mudanças de escopo, engessando totalmente a inovação na equipe de apoio.",
        "Cada pessoa entende as metas de um jeito diferente, gerando interpretações falhas e alto retrabalho.",
        "O cliente obtém exatamente aquilo que solicitou inicialmente, pois a agilidade verbal elimina as falhas.",
        "As restrições de custos são mantidas sob controle absoluto, compensando a ausência de uma premissa.",
        "O ambiente de trabalho torna-se estritamente formal, desencorajando sugestões criativas de melhoria.",
      ],
      correctIndex: 1,
    },
    {
      type: "fill",
      difficulty: "média",
      template:
        "Para a instalação do novo totem de autoatendimento do McDonald's, assumir previamente que o cliente possuirá internet de 100Mb caracteriza uma {{0}}. Entretanto, a regra de que o projeto não pode exceder o orçamento de R$ 20 milhões é uma {{1}}.",
      blanksCorrect: ["premissa de projeto", "restrição de projeto"],
      options: [
        "premissa de projeto",
        "restrição de projeto",
        "definição de projeto",
        "exclusão de projeto",
        "validação de projeto",
        "suposição de projeto",
      ],
    },
    {
      type: "select",
      difficulty: "fácil",
      template:
        "A identificação do ambiente corporativo, das condições vigentes e dos recursos tecnológicos atualmente disponíveis na empresa formam o {{0}} do projeto, enquanto a definição de onde queremos chegar determina o {{1}}.",
      blanksOptions: [
        ["Contexto geral", "Escopo fechado", "Problema base"],
        ["Objetivo claro", "Requisito final", "Backlog ágil"],
      ],
      blanksCorrect: ["Contexto geral", "Objetivo claro"],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um e-commerce de eletrônicos deseja implantar três funcionalidades: (1) O cliente deve conseguir adicionar itens ao carrinho e finalizar o pagamento; (2) O cliente deve poder visualizar produtos recomendados baseados em IA; (3) O cliente deve ver um alerta automático caso seu frete saia grátis. Classificando corretamente do ponto de vista de negócios, essas demandas são, respectivamente:",
      options: [
        "Essencial, Desejável e Importante. A falta do primeiro inviabiliza completamente as vendas da plataforma.",
        "Importante, Desejável e Essencial. A falta do terceiro reduz vertiginosamente o volume global de vendas.",
        "Desejável, Importante e Essencial. A plataforma funciona independentemente das restrições de pagamentos.",
        "Essencial, Essencial e Importante. Nenhuma loja virtual moderna sobrevive sem recomendações dinâmicas.",
        "Importante, Essencial e Desejável. O pagamento pode ser processado manualmente sem prejuízos imediatos.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Projetos de Tecnologia da Informação nascem por motivos variados nas organizações. Assinale a alternativa que agrupa corretamente as três origens de projetos discutidas em aula.",
      options: [
        "Demandas acadêmicas teóricas, exigências estritamente sindicais e corte arbitrário de orçamentos.",
        "Falhas de execução sistêmicas, redução de qualidade proposital e obsolescência de velhos hardwares.",
        "Problemas operacionais reais, necessidades de melhoria regulatória e oportunidades plenas de negócio.",
        "Redução intencional da segurança interna, melhorias na infraestrutura e reestruturações corporativas.",
        "Apenas bugs não resolvidos e erros de implantação relatados por usuários finais após o encerramento.",
      ],
      correctIndex: 2,
    },
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "A definição formal dos 'Limites e Exclusões' no escopo de um grande projeto corporativo é crucial para evitar o famoso 'Scope Creep'. Especificar o que está INCLUÍDO determina a {{0}} técnica do projeto, enquanto especificar rigorosamente o que está EXCLUÍDO blinda a equipe contra {{1}} não previstas no orçamento.",
      blanksOptions: [
        ["Abrangência", "Justificativa", "Metodologia"],
        ["Expectativas", "Infraestruturas", "Normativas"],
      ],
      blanksCorrect: ["Abrangência", "Expectativas"],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A famosa imagem da 'árvore com balanço' ilustra falhas comuns em TI, e o Gartner Group relata que 70% das falhas nos projetos ocorrem nesta etapa. Se um sistema é entregue perfeitamente codificado segundo a documentação do gerente, mas totalmente inútil para a operação real do usuário final, onde residiu a falha central?",
      options: [
        "Residiu na falta de capacidade estrutural dos programadores em aplicar ferramentas robustas e modernas.",
        "Residiu no excesso injustificado de rigor e burocracia na coleta inicial que encareceu o escopo técnico.",
        "Residiu na ausência de justificativas financeiras sólidas para amparar todas as execuções do back-end.",
        "Residiu numa falha gravíssima de coleta, interpretação e entendimento de requisitos junto aos usuários.",
        "Residiu no sucesso parcial do projeto, dado que o cronograma base foi validado sem testes unitários.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um escopo mal definido frequentemente resulta no temido 'Scope Creep'. Qual alternativa descreve uma falha sutil de gestão que transforma um projeto funcional em um cenário de 'Scope Creep', sem que o cliente tenha formalizado novos pedidos contratuais?",
      options: [
        "A equipe técnica decide incorporar recursos não solicitados (Gold Plating) para impressionar o cliente, esgotando o orçamento original.",
        "O gerente de projetos congela o escopo na fase inicial, forçando a equipe de testes a criar novos casos de uso estritamente documentados.",
        "O cliente aprova os requisitos essenciais de forma unânime e o desenvolvimento segue um fluxo de trabalho iterativo altamente previsível.",
        "A área de negócios exige que metodologias ágeis sejam substituídas pelo modelo Cascata, reduzindo drasticamente o tempo de entrega.",
        "Os analistas documentam detalhadamente as restrições do sistema, impedindo que o time de programação crie soluções fora do esperado.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Estatísticas do Gartner Group apontam que falhas no levantamento e classificação de requisitos lideram as causas de fracasso. Se uma funcionalidade meramente 'Desejável' é erroneamente documentada como 'Essencial' e acaba atrasando o lançamento da plataforma inteira em seis meses, qual é o principal impacto estratégico negativo gerado por esse erro de categorização?",
      options: [
        "O erro afeta o 'Time-to-Market', fazendo a empresa perder a janela de oportunidade de negócio e o Retorno sobre o Investimento planejado.",
        "A documentação excessiva melhora a qualidade do código, tornando o atraso de seis meses altamente lucrativo a longo prazo para os acionistas.",
        "O erro força a equipe de redes a atualizar os servidores físicos do cliente, que de outra forma continuariam em estado acelerado de obsolescência.",
        "A mudança de categoria do requisito exige a contratação imediata de novos gerentes jurídicos para revisar as políticas internas de privacidade.",
        "O erro otimiza o ciclo de validação de funcionalidades, garantindo que o escopo desejável se transforme na principal fonte primária de receitas.",
      ],
      correctIndex: 0,
    },
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Um projeto complexo de migração para a nuvem falha catastroficamente no primeiro mês, pois a equipe técnica assumiu como verdade que o banco de dados atual do cliente era totalmente compatível com a AWS. Essa falha gravíssima originou-se de uma {{0}} não validada corretamente. Para evitar reincidência sistêmica, a gestão deve incluir essa verificação técnica obrigatória já na etapa inicial de {{1}}.",
      blanksOptions: [
        ["Premissa técnica", "Restrição financeira", "Exclusão de escopo"],
        [
          "Análise de Viabilidade",
          "Homologação de Testes",
          "Fechamento Contratual",
        ],
      ],
      blanksCorrect: ["Premissa técnica", "Análise de Viabilidade"],
    },
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Na engenharia de requisitos, a rastreabilidade é vital para o ROI. Quando mapeamos um {{0}} até a sua origem na justificativa de negócios, estamos garantindo o alinhamento estratégico. Se esse rastreio apontar para uma funcionalidade técnica que não soluciona o problema raiz inicial, identificamos um grave {{1}} no planejamento.",
      blanksCorrect: ["requisito funcional", "desvio de escopo"],
      options: [
        "requisito funcional",
        "requisito não funcional",
        "desvio de escopo",
        "ajuste arquitetural",
        "ganho de performance",
        "indicador de sucesso",
      ],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A definição de metas no formato SMART exige que o objetivo seja Específico, Mensurável, Alcançável, Relevante e Temporal. Qual dos objetivos estruturados abaixo é o ÚNICO que atende rigorosamente a todos os cinco critérios no contexto prático de implantação de um sistema de ERP?",
      options: [
        "Melhorar a velocidade de faturamento corporativo o mais rápido possível, assim que o novo ERP for configurado pelo time.",
        "Reduzir o tempo de processamento da folha de pagamento em 30% até dezembro de 2024, utilizando o módulo de RH do ERP.",
        "Automatizar todas as atividades manuais da empresa em duas semanas para que os lucros aumentem significativamente este ano.",
        "Instalar os servidores do novo ERP com excelência técnica para que o sistema não apresente falhas durante as auditorias fiscais.",
        "Aumentar a satisfação dos usuários finais através de uma interface mais limpa, garantindo que a equipe goste de usar o software.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Em um cenário de crise regulatória, a diretoria exige que um sistema legado de faturamento seja substituído em exatos 30 dias sob pena de multas milionárias, prazo que a TI inicialmente considera tecnicamente inviável. Pela ótica da Tríplice Restrição de projetos, como o gerente deve negociar para viabilizar a entrega, considerando que o Tempo é absolutamente inegociável?",
      options: [
        "O gerente deve aceitar as condições silenciosamente, mantendo o Escopo e o Custo, e exigir que os programadores façam horas extras não pagas.",
        "O gerente deve expandir agressivamente o Escopo, incluindo novas funcionalidades visuais para justificar o atraso inevitável do cronograma.",
        "O gerente deve reduzir drasticamente o Escopo (focando apenas no MVP essencial) e/ou aumentar o Custo (contratando mais recursos sêniores).",
        "O gerente deve transferir toda a responsabilidade das multas regulatórias para a equipe de testes, eliminando a fase de validação do projeto.",
        "O gerente deve reduzir o Custo do projeto imediatamente, demitindo profissionais mais caros para equilibrar a pressão imposta pela diretoria.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Na transição de uma mentalidade de EAP/WBS (Estrutura Analítica de Projetos) tradicional para a gestão através de um Backlog de Produto Ágil, qual é a mudança de paradigma mais crítica e difícil para escritórios de projetos (PMOs) rígidos?",
      options: [
        "A transição exige que a equipe deixe de focar em fluxos de valor de negócio para focar estritamente na codificação de infraestrutura.",
        "A mudança substitui o foco em 'entregas de componentes estanques' por um foco no 'fornecimento contínuo de valor e funcionalidades'.",
        "O PMO precisa aceitar que o Backlog jamais sofrerá alterações, ao contrário da EAP, que é flexível a cada nova iteração do time.",
        "A migração exige a eliminação total de testes de software e validações de qualidade, visando apenas acelerar o tempo de implantação.",
        "O novo formato obriga que todas as restrições financeiras sejam descartadas, já que o modelo Ágil não suporta limites orçamentários.",
      ],
      correctIndex: 1,
    },
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Ao definir que o novo portal de votação online deverá suportar 1 milhão de acessos simultâneos sem travamentos, a equipe está documentando um crítico {{0}}. Entretanto, caso o patrocinador limite a arquitetura impondo obrigatoriamente o uso do data center interno em vez de nuvem pública, estabelece-se uma severa {{1}}.",
      blanksCorrect: ["requisito não funcional", "restrição de infraestrutura"],
      options: [
        "requisito não funcional",
        "requisito funcional direto",
        "restrição de infraestrutura",
        "premissa de negócio ágil",
        "exclusão de escopo formal",
        "oportunidade de inovação",
      ],
    },
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Ao redigir uma Justificativa de projeto de TI de alto impacto, o analista deve conectar estritamente o problema atual à estratégia de longo prazo. Na documentação, o {{0}} demonstra as perdas financeiras ou gargalos atuais da organização, enquanto o {{1}} projeta o retorno sobre o investimento (ROI) esperado ao término da implantação.",
      blanksOptions: [
        ["Custo da Inação", "Risco Operacional", "Débito Técnico"],
        ["Benefício Tangível", "Custo Fixo Mensal", "Escopo Engessado"],
      ],
      blanksCorrect: ["Custo da Inação", "Benefício Tangível"],
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "O efeito 'telefone sem fio' na coleta de requisitos é agravado drasticamente pela assimetria de vocabulário entre as áreas de TI e de Negócios. Qual técnica ou artefato de documentação mitiga de forma mais eficiente essa distorção comunicacional ANTES da escrita de qualquer linha de código?",
      options: [
        "A criação de manuais técnicos extensos de banco de dados, que forçam o cliente a aprender a linguagem SQL de alto nível.",
        "A utilização de Histórias de Usuário (User Stories) escritas na perspectiva do cliente e amparadas por Critérios de Aceite claros.",
        "A imposição de diagramas de infraestrutura de rede robustos como a primeira e única pauta das reuniões de levantamento.",
        "O desenvolvimento de protótipos de altíssima fidelidade codificados em produção para que o cliente teste antes mesmo de pedir.",
        "A eliminação das reuniões de alinhamento, substituindo-as exclusivamente por longos formulários enviados por e-mail semanalmente.",
      ],
      correctIndex: 1,
    },
  ],
};
