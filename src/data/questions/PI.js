export const PI = {
  id: "PI",
  name: "PI",
  monogram: "PI",
  description: "PI",
  questions: [
    // Questão 1
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual é a principal espécie de cogumelo cultivada atualmente no Brasil, correspondendo à maior fatia da produção nacional segundo o contexto produtivo[cite: 1]?",
      options: [
        "Lentinula edodes (Shiitake), muito consumido em dietas asiáticas locais e regionais",
        "Pleurotus ostreatus (Shimeji), sendo o principal fungo de prateleira cultivado no país",
        "Agaricus bisporus (Champignon), liderando isoladamente o volume de produção interno",
        "Agaricus blazei (Cogumelo do Sol), exportado massivamente para o mercado da Ásia",
        "Flammulina velutipes (Enoki), que ganha espaço devido ao fácil cultivo domiciliar",
      ],
      correctIndex: 2,
    },
    // Questão 2
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "O desenvolvimento tecnológico de monitoramento ambiental é vital para o Agaricus bisporus em relação a outros cogumelos (como Shimeji), porque[cite: 1]:",
      options: [
        "Sua alta taxa metabólica gera interferências que exigem sensores blindados complexos",
        "Ele depende de um processo em várias etapas com inversões de demandas climáticas",
        "O fungo é totalmente imune ao dióxido de carbono em todas as fases de crescimento",
        "Outros cogumelos nunca requerem irrigação, simplificando completamente a produção",
        "Ele é a única espécie capaz de realizar fotossíntese sob lâmpadas de estufa indoor",
      ],
      correctIndex: 1,
    },
    // Questão 3
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Durante a fase de incubação/colonização do Agaricus bisporus, o ambiente exige uma condição específica que se inverte drasticamente na fase de frutificação. Que condição é essa[cite: 1]?",
      options: [
        "Níveis elevados de oxigênio aceleram o metabolismo, e devem ser reduzidos na colheita",
        "Ausência total de iluminação inicial é alterada para fotoperíodo contínuo na indução",
        "Umidade relativa abaixo de 60% evita doenças, sendo elevada apenas no fim do ciclo",
        "Níveis elevados de dióxido de carbono estimulam a fase e devem cair na frutificação",
        "Temperaturas congelantes quebram a dormência, seguidas por aquecimento gradual",
      ],
      correctIndex: 3,
    },
    // Questão 4
    {
      type: "fill",
      difficulty: "fácil",
      template:
        "A umidade adequada deve atuar no substrato, no ar e na camada de cobertura, também chamada de {{0}}, essencial para o fornecimento de água constante no cultivo do champignon[cite: 1].",
      blanksCorrect: ["casing"],
      options: ["casing", "compost", "spawn", "mulch"],
    },
    // Questão 5
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Considerando as características técnicas do sensor DHT11, qual é uma limitação importante na captação contínua de dados que o código do Arduino precisa respeitar obrigatoriamente[cite: 1]?",
      options: [
        "O equipamento só consegue registrar temperaturas que sejam superiores a vinte graus",
        "A taxa mínima de amostragem é de dois segundos; requisições mais frequentes falham",
        "O sensor requer uma calibração analógica diária através de amostras de ar seco puro",
        "O módulo possui um limite exato de cem leituras, após o qual necessita reinicializar",
        "A transmissão dos dados digitais sofre degradação extrema em cabos não polarizados",
      ],
      correctIndex: 1,
    },
    // Questão 6
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "O controle inadequado da umidade do ar favorece bactérias do gênero Pseudomonas. Qual é a principal consequência visível dessa infestação direta nos cogumelos cultivados[cite: 1]?",
      options: [
        "Ressecamento fulminante das lamelas inferiores, causando a morte celular estrutural",
        "Formação de uma camada densa de bolor verde, que impede totalmente a frutificação",
        "Manchas amareladas a marrom-escuras, doença que é conhecida como bacterial blotch",
        "Alteração severa da coloração do estipe para um tom translúcido de consistência mole",
        "Encolhimento celular simétrico, reduzindo seu tamanho mas mantendo sua coloração",
      ],
      correctIndex: 2,
    },
    // Questão 7
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "No projeto de automação do monitoramento, qual é a principal placa microcontroladora definida para captar e centralizar os dados dos sensores escolhidos[cite: 1]?",
      options: [
        "A Raspberry Pi Pico, que possui ampla conectividade wi-fi integrada de forma nativa",
        "O microcontrolador ESP32, selecionado pelo alto poder de processamento em nuvem",
        "A placa NodeMCU, empregada para o acionamento direto de válvulas de irrigação",
        "A plataforma Micro:bit, escolhida principalmente por ter programação em blocos fácil",
        "O sistema Arduino Uno, programado para realizar a leitura pontual de ambos sensores",
      ],
      correctIndex: 4,
    },
    // Questão 8
    {
      type: "fill",
      difficulty: "fácil",
      template:
        "No envio regular de dados ao servidor, o código lê os parâmetros, organiza-os em formato {{0}} e os repassa para a API usando uma requisição do tipo {{1}}[cite: 1].",
      blanksCorrect: ["JSON", "POST"],
      options: ["JSON", "XML", "POST", "GET", "CSV", "PUT"],
    },
    // Questão 9
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "No monitoramento do substrato, o sensor capacitivo possui vantagem sobre o resistivo em ambientes agrícolas. Como ocorre sua captação e envio de sinais de umidade[cite: 1]?",
      options: [
        "Condutividade direta da água entre duas hastes metálicas expostas, gerando dados seriais",
        "Utiliza alta frequência de ondas de rádio para medir a densidade hídrica total do substrato",
        "Detecta oscilações térmicas no solo, enviando estimativas brutas por barramento rápido I2C",
        "Não expõe partes metálicas, converte a variação de capacitância em saída de tensão analógica",
        "Apresenta autocalibração térmica que previne oxidação e transmite sinais complexos em PWM",
      ],
      correctIndex: 3,
    },
    // Questão 10
    {
      type: "select",
      difficulty: "fácil",
      template:
        "A umidade do ar na fase mais importante da frutificação deve ficar entre 80% e {{0}} para que não haja desenvolvimento de manchas no chapéu[cite: 1].",
      blanksOptions: [["90%", "70%", "100%", "50%"]],
      blanksCorrect: ["90%"],
    },
    // Questão 11
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "A umidade do solo não é fornecida diretamente em porcentagem pelo módulo capacitivo. Dessa forma, como o microcontrolador alcança o resultado numérico final[cite: 1]?",
      options: [
        "Acessa uma matriz de biblioteca externa que traduz todos os bits para a porcentagem exata",
        "Mede a frequência do pulso digital emitido pelo sensor e multiplica por uma constante física",
        "Divide matematicamente a temperatura captada localmente pela tensão da porta lógica",
        "Usa calibração prévia com valores aferidos no ar e na água para mapear a variação lida",
        "Considera o valor bruto sempre equivalente à porcentagem pura, necessitando apenas log",
      ],
      correctIndex: 3,
    },
    // Questão 12
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Com o aumento de ondas de calor intensas, o ar externo quente obriga a climatização a trabalhar em excesso, evaporando umidade e exigindo controle eficiente de {{0}} e {{1}} para evitar perdas[cite: 1].",
      blanksOptions: [
        ["oxigênio", "CO2", "monóxido"],
        ["temperatura", "luminosidade", "pressão atmosférica"],
      ],
      blanksCorrect: ["CO2", "temperatura"],
    },
    // Questão 13
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual é a consequência direta do ressecamento abrupto da camada de cobertura, gerada por ventilação excessiva na câmara climatizada[cite: 1]?",
      options: [
        "Provoca aumento instantâneo do tamanho dos primórdios pelo maior espaço liberado",
        "Causa estresse hídrico agudo, o que paralisa a formação e reduz o rendimento final",
        "Gera escurecimento total das lamelas, esverdeadas por proliferação cruzada de algas",
        "Acelera vertiginosamente a conversão do próprio substrato primário em adubo quente",
        "Estimula surgimento de fungos simbióticos que fortalecem o sistema imune da cultura",
      ],
      correctIndex: 1,
    },
    // Questão 14
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Qual é a real importância de se arquivar continuamente os dados no banco e apresentá-los em um dashboard com visão temporal expandida[cite: 1]?",
      options: [
        "Descartar permanentemente a supervisão técnica presencial dos operadores na estufa",
        "Diminuir imediatamente o consumo elétrico, desligando a refrigeração durante a noite",
        "Vincular anomalias climáticas aos resultados da safra e diagnosticar falhas de processo",
        "Erradicar patógenos bacterianos da instalação devido ao controle algorítmico do ar",
        "Mimetizar ritmos biológicos noturnos via envio de estímulos infravermelhos ao solo",
      ],
      correctIndex: 2,
    },
    // Questão 15
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "O projeto especifica um monitoramento global, abrangendo múltiplas etapas. Por que um sensor de temperatura com faixa até 80°C se mostra estritamente necessário no ciclo completo[cite: 1]?",
      options: [
        "A camada superficial (casing) absorve extrema radiação gerando calor muito alto",
        "A frutificação requere choques térmicos destrutivos que forçam o corpo frutífero",
        "A lavagem pressurizada das caixas exige mapeamento por conta da evaporação",
        "Os picos da rede de distribuição geram dissipação intensa na placa de controle",
        "O núcleo das pilhas de compostagem inicial atinge altos picos de fermentação",
      ],
      correctIndex: 4,
    },
    // Questão 16
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "O projeto descreve que as checagens manuais apresentam falhas constantes e desperdício de lotes. Qual é o principal agente humano causador disso[cite: 1]?",
      options: [
        "Os custos operacionais com treinamento para utilização e aferição de equipamentos",
        "O uso constante de baterias que descarregam rapidamente na mão do funcionário",
        "Risco inerente de erro por omissão, esquecimento e desgaste por fadiga rotineira",
        "Uso de luminárias fortes para leitura visual que alteram o microclima dos cogumelos",
        "Danos físicos na estrutura das prateleiras causados pela locomoção de agrônomos",
      ],
      correctIndex: 2,
    },
    // Questão 17
    {
      type: "fill",
      difficulty: "médio",
      template:
        "No monitoramento centralizado, o acompanhamento histórico utiliza um {{0}} integrado, emitindo {{1}} automáticos ao usuário em caso de desvios[cite: 1].",
      blanksCorrect: ["dashboard", "alertas"],
      options: [
        "dashboard",
        "aplicativo",
        "alertas",
        "telegram",
        "relatório",
        "e-mail",
      ],
    },
    // Questão 18
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        'Baseado na justificativa econômica e na dinâmica técnica do projeto de sensores analógicos: o que o trecho no código "if (porcentagemUmidade < 0) porcentagemUmidade = 0;" tenta prevenir primariamente[cite: 1]?',
      options: [
        "Distorções logarítmicas provocadas pelo circuito compensador da protoboard base",
        "Leituras elétricas variantes que acidentalmente extrapolem o limite da calibração fixada",
        "Variações bruscas na tensão da rede elétrica que acionam curtos em portas do chip",
        "A interpretação inadequada da inversão de polaridade magnética no solo turfoso",
        "Surtos capacitivos gerados quando o substrato entra em contato com muito esterco",
      ],
      correctIndex: 1,
    },
    // Questão 19
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual destes patógenos está diretamente relacionado ao excesso de umidade mal controlada, sendo citado como ameaça comercial no cultivo[cite: 1]?",
      options: [
        "Micotoxinas de Aspergilus invisíveis ao olho",
        "Vermes microscópicos de solo em ovos latentes",
        "Esporos agressivos liberados por liquens verdes",
        "Infestações bacterianas de Pseudomonas gengiri",
        "Organismos virais presentes no esterco natural",
      ],
      correctIndex: 3,
    },
    // Questão 20
    {
      type: "select",
      difficulty: "médio",
      template:
        "As condições ambientais extremas que geram doenças nos cogumelos afetam principalmente a {{0}} e exigem do sistema um protocolo constante de {{1}} via software para correção[cite: 1].",
      blanksOptions: [
        ["coloração", "qualidade", "velocidade"],
        ["irrigação", "ventilação", "alertas"],
      ],
      blanksCorrect: ["qualidade", "alertas"],
    },
    // Questão 21
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "O projeto descrito nas restrições exclui propositalmente uma etapa que demandaria a atuação de atuadores físicos. Qual é essa funcionalidade omitida[cite: 1]?",
      options: [
        "Realização automatizada de ajustes corretivos diretos de ventilação ou aspersão",
        "Visualização centralizada de gráficos e KPIs em tempo real no dashboard web",
        "Recebimento contínuo de métricas analógicas convertidas das hastes de aterramento",
        "Comunicação de pacotes via barramento serial físico para a plataforma gerencial",
        "Emissão pontual de alertas em formato visual e registro sistemático em servidor",
      ],
      correctIndex: 0,
    },
    // Questão 22
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "De acordo com o estudo sobre cultivo do champignon, uma perda estimada em 30% em salas pequenas (cenário severo) gera um prejuízo por lote de, em média[cite: 1]:",
      options: [
        "Aproximadamente trezentos e cinquenta reais, cobridos pelo seguro primário",
        "Quase mil quatrocentos e oitenta e cinco reais por cada ciclo produtivo",
        "Cerca de dois mil e duzentos reais apenas por problemas de refrigeração",
        "Prejuízo desprezível se comparado aos lucros da extração da compostagem",
        "Absolutamente zero, porque resíduos sempre geram venda para ração animal",
      ],
      correctIndex: 1,
    },
    // Questão 23
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Por que o uso de irrigação baseada unicamente em cronograma temporal fixo é considerado um agressor da sustentabilidade neste projeto[cite: 1]?",
      options: [
        "Utiliza temporizadores eletromecânicos antigos que demandam muita energia bruta",
        "Causa acúmulo desnecessário de matéria orgânica seca que contamina áreas rurais",
        "Sobrecarrega a equipe de exaustão que precisará ligar bombas de ar manualmente",
        "Leva ao consumo excessivo de água, irrigando o solo mesmo em alta umidade relativa",
        "Obriga a aplicação diária de agrotóxicos para evitar o surgimento de algas na poça",
      ],
      correctIndex: 3,
    },
    // Questão 24
    {
      type: "fill",
      difficulty: "fácil",
      template:
        "A pinagem lógica do microcontrolador para captação do módulo DHT11 envia os pulsos digitais utilizando apenas {{0}} cabo(s) principal(is) de tráfego de dados processados[cite: 1].",
      blanksCorrect: ["um"],
      options: ["um", "dois", "três", "quatro"],
    },
    // Questão 25
    {
      type: "select",
      difficulty: "médio",
      template:
        "O microcontrolador do DHT11 converte os níveis elétricos detectados no pacote em valores relativos a {{0}} e {{1}}, despachados no payload[cite: 1].",
      blanksOptions: [
        ["umidade", "luz", "acidez"],
        ["ventilação", "temperatura", "nutrientes"],
      ],
      blanksCorrect: ["umidade", "temperatura"],
    },
  ],
};
