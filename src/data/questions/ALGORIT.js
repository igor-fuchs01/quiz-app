export const ALGORIT = {
  id: "ALGORIT",
  name: "ALGORIT",
  monogram: "ALGORIT",
  description: "ALGORIT",
  questions: [
    {
      id: "logica-diagramas-01",
      type: "fill",
      difficulty: "super difícil",
      template:
        'Se o usuário executar duas simulações idênticas seguidas que gastam 10 litros cada, na segunda simulação a variável local "tanque" valerá {{0}} litros imediatamente antes do bloco condicional de parada.[cite: 12]',
      blanksCorrect: ["5"],
      options: ["5", "10", "15", "20", "25"],
    },
    {
      id: "logica-diagramas-02",
      type: "select",
      difficulty: "fácil",
      template:
        "Em um diagrama de atividades, o losango representa um(a) {{0}} e o texto alocado entre os colchetes [ ] indica a {{1}} específica associada ao fluxo.[cite: 8]",
      blanksOptions: [
        ["atividade", "condicional", "iteração", "finalização"],
        ["condição", "variável", "repetição", "função"],
      ],
      blanksCorrect: ["condicional", "condição"],
    },
    {
      id: "logica-diagramas-03",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Como é feito o cálculo matemático exato para encontrar o valor limite que corresponde aos 30% mínimos da capacidade do tanque?[cite: 12]",
      options: [
        "let minimo = (tanqueCheio / 100) * 30;",
        "let minimo = tanqueCheio * 0.30;      ",
        "let minimo = tanqueCheio * 3.0;       ",
        "let minimo = (tanqueCheio * 30) / 10; ",
        "let minimo = tanqueCheio * 0.3;       ",
      ],
      correctIndex: 4,
    },
    {
      id: "logica-diagramas-04",
      type: "fill",
      difficulty: "média",
      template:
        "Para abater permanentemente o combustível gasto do total disponível no veículo (atualizando a memória global), o código utiliza a operação de atribuição: tanque {{0}} consumo;[cite: 12]",
      blanksCorrect: ["-="],
      options: ["-=", "+=", "*=", "==", "==="],
    },
    {
      id: "logica-diagramas-05",
      type: "select",
      difficulty: "super difícil",
      template:
        'Ao processar o valor do campo "input_velo", o comando {{0}} força a conversão do atributo de captura textual {{1}} para um número utilizável nos cálculos operacionais subsequentes.[cite: 12]',
      blanksOptions: [
        ["Number()", "parseInt()", "String()", "Boolean()"],
        [
          "input_velo.value",
          "input_velo.innerHTML",
          "input_velo.text",
          "input_velo.textContent",
        ],
      ],
      blanksCorrect: ["Number()", "input_velo.value"],
    },
    {
      id: "logica-diagramas-06",
      type: "select",
      difficulty: "difícil",
      template:
        'A fim de validar se o nível de combustível é satisfatório de forma segura, a instrução de decisão testa se a variável "tanque" é estatisticamente {{0}} em comparação com o piso de contingência {{1}}.[cite: 12]',
      blanksOptions: [
        ["maior ou igual", "menor ou igual", "estritamente igual", "maior que"],
        ["minimo", "tanqueCheio", "consumo", "perc"],
      ],
      blanksCorrect: ["maior ou igual", "minimo"],
    },
    {
      id: "logica-diagramas-07",
      type: "mcq",
      difficulty: "média",
      template:
        'Sabendo que a variável "d" guarda a distância e "vm" gerencia a velocidade de transição, como se calcula matematicamente o tempo total da viagem corrida no sistema?[cite: 12]',
      options: [
        "let tempo = vm / d;            ",
        "let tempo = d / vm;            ",
        "let tempo = d * vm;            ",
        "let tempo = d + vm;            ",
        "let tempo = vm - d;            ",
      ],
      correctIndex: 1,
    },
    {
      id: "logica-diagramas-08",
      type: "mcq",
      difficulty: "super difícil",
      template:
        'No escopo "else" do programa de controle da frota, qual formatação literal descreve EXATAMENTE a estrutura textual processada pelo "div_exibir.innerHTML"?[cite: 12]',
      options: [
        "Ao percorrer ${d} km, com velocidade média de ${vm} km/h, a corrida durou ${tempo} horas. Ao todo, gastou-se ${consumo} litros de combustível (${perc}%).",
        "Ao percorrer ${d} km, na velocidade média de ${vm} km/h, a viagem demorou ${tempo} horas. Ao todo, foram gastos ${consumo} litros do tanque (${perc}%).",
        "Ao percorrer ${d} quilômetros, a velocidade média de ${vm} km/h fez a viagem durar ${tempo} horas. Ao todo, foram gastos ${consumo} litros (${perc}%).",
        "Ao percorrer ${d} km, em velocidade média de ${vm} km/h, a viagem durou ${tempo} horas. Ao todo, foram gastos ${consumo} litros de combustível (${perc}%).",
        "Ao percorrer ${d} km, com a velocidade de ${vm} km/h, a viagem durou ${tempo} horas. Totalizando os gastos: ${consumo} litros de todo combustível (${perc}%).",
      ],
      correctIndex: 3,
    },
    {
      id: "logica-diagramas-09",
      type: "mcq",
      difficulty: "fácil",
      template:
        'Para realizar a leitura padronizada de um valor numérico armazenado nativamente no campo de input HTML cuja identidade é "input_dist", qual é a sintaxe rigorosamente correta?[cite: 12]',
      options: [
        "let d = String(input_dist.texto);",
        "let d = window(input_dist.texto);",
        "let d = Number(input_dist.value);",
        "let d = String(input_dist.value);",
        "let d = Number(input_dist.inner);",
      ],
      correctIndex: 2,
    },
    {
      id: "logica-diagramas-10",
      type: "fill",
      difficulty: "difícil",
      template:
        "Garantindo o cálculo correto do tanque na linha número 30, declara-se estaticamente a variável imutável correspondente ao tanque de gasolina total usando {{0}} tanqueCheio = Number(25);[cite: 12]",
      blanksCorrect: ["let"],
      options: ["let", "var", "const", "int", "float"],
    },
    {
      id: "logica-diagramas-11",
      type: "select",
      difficulty: "média",
      template:
        'Tendo em vista o desempenho veicular atrelado à relação "10km por Litro", o consumo integral projetado é estruturado por: let consumo = {{0}} {{1}} 10;[cite: 12]',
      blanksOptions: [
        ["d", "vm", "tempo", "perc"],
        ["/", "*", "+", "-"],
      ],
      blanksCorrect: ["d", "/"],
    },
    {
      id: "logica-diagramas-12",
      type: "fill",
      difficulty: "super difícil",
      template:
        'Durante a reatribuição da volumetria, a instrução sintética redutora estruturada como "tanque -= consumo;" demonstra comportamento perfeitamente idêntico à construção: "tanque = tanque {{0}} consumo;".[cite: 12]',
      blanksCorrect: ["-"],
      options: ["-", "+", "/", "*", "%"],
    },
    {
      id: "logica-diagramas-13",
      type: "select",
      difficulty: "difícil",
      template:
        "Trabalhando com as Template Literals de formatação gráfica, delimita-se todo o encapsulamento interno do parágrafo por {{0}} e referenciam-se os identificadores lógicos mediante prefixação em {{1}}.[cite: 12]",
      blanksOptions: [
        ["crases (`)", "aspas simples", "aspas duplas", "parênteses"],
        ["${variavel}", "$(variavel)", "#{variavel}", "&{variavel}"],
      ],
      blanksCorrect: ["crases (`)", "${variavel}"],
    },
    {
      id: "logica-diagramas-14",
      type: "mcq",
      difficulty: "difícil",
      template:
        'Qual a diferença técnica de escopo e arquitetura lógica mais determinante entre os alocadores de estado "tanque" e "tanqueCheio" neste código JavaScript?[cite: 12]',
      options: [
        '"tanque" guarda o volume atualizado após as subtrações sucessivas e "tanqueCheio" permanece inalterado para referenciar a base do cálculo percentual.',
        '"tanqueCheio" guarda o volume atualizado após as subtrações sucessivas e "tanque" permanece inalterado para referenciar a base do cálculo percentual.',
        '"tanque" e "tanqueCheio" sofrem subtrações ao longo do tempo, mas apenas "tanqueCheio" é exibido na string literal formatada no fim do processamento.',
        '"tanque" determina a parada de abastecimento (30% do total) e "tanqueCheio" determina a quantidade de quilômetros percorrida por litro de combustível.',
        "Não existe qualquer distinção; ambas são criadas no escopo local da função simulacao(), sendo recriadas a cada clique, zerando o volume no reservatório.",
      ],
      correctIndex: 0,
    },
    {
      id: "logica-diagramas-15",
      type: "select",
      difficulty: "super difícil",
      template:
        'Nos processos de renderização front-end e cálculos locais, o total da corrida gasta projeta-se sintaticamente no parágrafo do resultado da seguinte maneira exata: "Ao todo, foram gastos {{0}} litros de combustível ({{1}}%).".[cite: 12]',
      blanksOptions: [
        ["${consumo}", "${perc}", "${tanque}", "${tanquePerc}"],
        ["${perc}", "${consumo}", "${tanquePerc}", "${tanque}"],
      ],
      blanksCorrect: ["${consumo}", "${perc}"],
    },
    {
      id: "logica-diagramas-16",
      type: "fill",
      difficulty: "média",
      template:
        'Por definição nativa do sistema em HTML, o encadeamento assíncrono entre a ação no botão da interface visual e a lógica do JavaScript é providenciado pela assinatura tag <button {{0}}="simulacao()">SIMULAR</button>.[cite: 12]',
      blanksCorrect: ["onclick"],
      options: ["onclick", "onchange", "onpress", "onhover", "onsubmit"],
    },
    {
      id: "logica-diagramas-17",
      type: "fill",
      difficulty: "difícil",
      template:
        'Dentro do sistema de renderização do simulador virtual, a quebra em espaço do parágrafo da "div_exibir" foi elaborada pela aplicação literal da tag espacial {{0}} imediatamente ao final da string interpolada.[cite: 12]',
      blanksCorrect: ["<br>"],
      options: ["<br>", "<hr>", "<div>", "<span>", "<p>"],
    },
    {
      id: "logica-diagramas-18",
      type: "mcq",
      difficulty: "super difícil",
      template:
        'Avaliando estritamente a sintaxe da linguagem, qual alternativa retrata graficamente a abertura principal do bloco condicional ("if") verificado pelo motor de execução na fase terminal da função "simulacao"?[cite: 12]',
      options: [
        "if (tanque => minimo) {",
        "if (tanque <= minimo) {",
        "if (tanque != minimo) {",
        "if (tanque == minimo) {",
        "if (tanque >= minimo) {",
      ],
      correctIndex: 4,
    },
    {
      id: "logica-diagramas-19",
      type: "fill",
      difficulty: "fácil",
      template:
        'Buscando inserir conteúdo complementar progressivo à área da "div_exibir" sem incorrer no apagamento de históricos precedentes, usa-se o encadeamento div_exibir.innerHTML {{0}} "texto".[cite: 12]',
      blanksCorrect: ["+="],
      options: ["+=", "-=", "*=", "/=", "=="],
    },
    {
      id: "logica-diagramas-20",
      type: "select",
      difficulty: "difícil",
      template:
        'Limitando as interações no ambiente virtual, as propriedades quantitativas de uso momentâneo como "d" e "vm" são estruturadas {{0}} da função mestre, garantindo estritamente possuírem escopo de natureza {{1}}.[cite: 12]',
      blanksOptions: [
        ["dentro", "fora", "antes", "depois"],
        ["local", "global", "estático", "dinâmico"],
      ],
      blanksCorrect: ["dentro", "local"],
    },
    {
      id: "logica-diagramas-21",
      type: "fill",
      difficulty: "super difícil",
      template:
        "Mantendo o tipo base fundamental da variável constante nas atribuições operacionais iniciais do escopo pai, utilizou-se a formulação nativa let tanqueCheio = {{0}}(25); nas engrenagens iniciais do script.[cite: 12]",
      blanksCorrect: ["Number"],
      options: ["Number", "Integer", "Float", "Double", "String"],
    },
    {
      id: "logica-diagramas-22",
      type: "mcq",
      difficulty: "média",
      template:
        'Entre as formulações algébricas a seguir, qual delineia o procedimento preciso acionado para computar em porcentagem o montante volumétrico "perc" dispendido diante da capacidade veicular original?[cite: 12]',
      options: [
        "let perc = (tanque / tanqueCheio) * 100;  ",
        "let perc = (consumo / 100) * tanqueCheio; ",
        "let perc = (tanqueCheio / consumo) * 100; ",
        "let perc = (consumo / tanqueCheio) * 100; ",
        "let perc = (consumo * tanqueCheio) / 100; ",
      ],
      correctIndex: 3,
    },
    {
      id: "logica-diagramas-23",
      type: "fill",
      difficulty: "difícil",
      template:
        "Atribuindo dinamicamente o saldo combustível restante para a avaliação final imposta pelo sistema, utilizou-se o algoritmo linear let tanquePerc = ({{0}} / tanqueCheio) * 100; garantindo os descontos passados.[cite: 12]",
      blanksCorrect: ["tanque"],
      options: ["tanque", "consumo", "tanqueCheio", "minimo", "tempo"],
    },
    {
      id: "logica-diagramas-24",
      type: "select",
      difficulty: "super difícil",
      template:
        'Garantindo o isolamento da abstração progressiva, a entidade "tanque" foi instanciada {{0}} da respectiva função "simulacao()", recebendo as sucessivas perdas de viagem unicamente por intermédio do sub-operador de carga {{1}}.[cite: 12]',
      blanksOptions: [
        ["fora", "dentro", "abaixo", "acima"],
        ["-=", "+=", "/=", "*="],
      ],
      blanksCorrect: ["fora", "-="],
    },
    {
      id: "logica-diagramas-25",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Diante do processamento de um losango condicional (como o [idade >= 16] ensinado teoricamente), como o comportamento de vazão atua nos diagramas em conformidade aos pilares de lógica sistêmica?[cite: 8]",
      options: [
        "O processamento retrocede ao evento inicial obrigatoriamente, desde que a condição descrita no texto interno seja processada de forma lógica (verdadeira).",
        "O fluxo se fragmenta assincronamente por todos os ramos que possuem as condições citadas no bloco delimitador de início do programa e continua operando.",
        "O fluxo deve seguir por SOMENTE um (1) dos direcionamentos de saída, estritamente de acordo com qual das alternativas limitadoras impostas for alcançada.",
        "O losango tranca a execução da estrutura temporariamente, simbolizando a necessidade obrigatória de uma entrada de dados feita por um utilizador final.",
        "O interpretador compila uma constante imutável em tempo de execução para avaliar e reter o valor binário oriundo da intersecção das duas linhas criadas.",
      ],
      correctIndex: 2,
    },
    {
      id: "logica-diagramas-26",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Analisando os limites e exigências sintáticas da padronização Case-Sensitive do JS, a variável percentual mínima do código base é referenciada de maneira 100% autêntica através de qual estrutura abaixo?[cite: 12]",
      options: [
        "let minimo = tanqueCheio * 0.3;",
        "Let minimo = tanqueCheio * 0.3;",
        "let Minimo = tanqueCheio * 0.3;",
        "let minimo = TanqueCheio * 0.3;",
        "let minimo = tanquecheio * 0.3;",
      ],
      correctIndex: 0,
    },
    {
      id: "logica-diagramas-27",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Decompondo as normas avaliativas previstas para o ciclo das Sprints 2 e 3 de Algoritmos, qual delineamento corresponde inquestionavelmente à matriz oficial de formulação da nota nas disciplinas técnicas vigentes?[cite: 11]",
      options: [
        "30% das notas referem-se às entregas de atividades avaliativas e 70% derivam da Avaliação Integrada (questionário online no Moodle com uso de consultas).",
        "30% das notas referem-se às entregas de atividades avaliativas e 70% derivam da Avaliação Prática (questionário online no Moodle totalmente sem consulta).",
        "40% das notas referem-se às entregas de atividades avaliativas e 60% derivam da Avaliação Prática (questionário online no Moodle totalmente sem consulta).",
        "70% das notas referem-se às entregas de atividades avaliativas e 30% derivam da Avaliação Prática (questionário online no Moodle totalmente sem consulta).",
        "30% das notas referem-se às entregas de atividades avaliativas e 70% derivam de Projetos em Grupos (questionário online no Moodle totalmente sem consulta).",
      ],
      correctIndex: 1,
    },
    {
      id: "logica-diagramas-28",
      type: "select",
      difficulty: "super difícil",
      template:
        'Ao projetar interativamente as informações na caixa receptora, inseriu-se a marcação espaçadora {{0}} de forma a efetivar o distanciamento exato para exibir isoladamente a frase final encorajadora: "{{1}}".[cite: 12]',
      blanksOptions: [
        ["<br>", "<hr>", "<p>", "<div>"],
        [
          "Continue a rodar!",
          "Acabou o combustível!",
          "Você chegou ao destino!",
          "O carro quebrou!",
        ],
      ],
      blanksCorrect: ["<br>", "Continue a rodar!"],
    },
  ],
};
