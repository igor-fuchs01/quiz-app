export const ARQCOMP = {
  id: "ARQCOMP",
  name: "ARQCOMP",
  monogram: "ARQCOMP",
  description: "ARQCOMP",
  questions: [
    {
      id: "arquitetura-computacional-q0",
      type: "mcq",
      difficulty: "média",
      template:
        "Sistemas modernos frequentemente utilizam o sistema hexadecimal para agrupar longas sequências binárias de forma legível. Qual é a representação em hexadecimal do número binário '111101011100'?",
      options: ["0xE5C", "0xF5C", "0xF6B", "0xD5C", "0xF5D"],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q1",
      type: "mcq",
      difficulty: "difícil",
      template:
        "A inversão acidental dos pinos de alimentação (VCC e GND) do sensor LM35 durante a montagem gera uma consequência imediata e irreversível. Qual é essa consequência e a sua respectiva justificativa física?",
      options: [
        "O sensor bloqueia instantaneamente a saída Vout em 5V, pois o circuito integrado ativa um mecanismo de segurança embutido que desarma a conversão térmica temporariamente.",
        "O sensor entra em curto-circuito interno, superaquece perceptivelmente ao toque em poucos segundos e é irremediavelmente danificado devido à dissipação extrema de energia.",
        "O sensor desvia toda a corrente invertida para a porta A0 do Arduino, causando a queima imediata e permanente do canal do conversor analógico-digital correspondente.",
        "O sensor sofre uma inversão em sua matriz linear, passando a emitir -10 mV/°C em resposta à temperatura ambiente, exigindo o ajuste matemático corretivo no software.",
        "O sensor interrompe o fluxo de elétrons, causando um travamento lógico da placa controladora, que precisará de um procedimento de reset de hardware para voltar a operar.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q2",
      type: "mcq",
      difficulty: "fácil",
      template:
        "A conversão de bases é essencial na programação de baixo nível. Qual é a representação decimal correta do número binário '1101'?",
      options: ["11", "13", "14", "26", "10"],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q3",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Considere o comportamento fundamental de transistores operando como chaves eletrônicas microscópicas na base de todo circuito lógico apresentado. Se fôssemos forçar agressivamente uma arquitetura a operar fisicamente na base 10 (decimal) alimentada com a exata tensão original padrão de 3,3 Volts nos dias atuais, qual seria o impeditivo físico colossal e prático imediato dessa implementação hipotética?",
      options: [
        "O impeditivo físico colossal é a incapacidade térmica da dissipação do silício que derreteria ao processar dez chaves lógicas integradas rodando as engrenagens físicas em frequências da ordem de GHz para tentar alcançar velocidade comparável.",
        "O impeditivo físico colossal reside no tamanho ampliado necessário para desenhar dez conexões seriais isoladas em paralelo nos sockets centrais sem gerar cruzamento eletromagnético irreversível nas superfícies contíguas de silício.",
        "O impeditivo físico colossal concentra-se na dificuldade intransponível de sincronizar eficientemente dez relógios distintos provenientes do cristal oscilador da placa mestra para reger as múltiplas etapas unificadas e decodificadas de instrução.",
        "O impeditivo físico colossal decorre da margem de ruído que seria estreitada drasticamente a cerca de irrisórios 0,33 Volts por dígito, tornando pequenas variações térmicas ou instabilidades elétricas comuns causadoras de frequente corrupção de dados silenciosa.",
        "O impeditivo físico colossal fundamenta-se na insuficiência imposta pelas pilhas internas presentes na placa controladora que esgotariam suas cargas instantaneamente numa tentativa forçosa de elevar permanentemente as dez ramificações lógicas para níveis superiores a 5 Volts reais.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q4",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na linha de código: `temperaturaCelsius = (valorLeitura * 5.0 / 1023.0) / 0.01;`, o que exatamente representam as constantes numéricas 1023 e 0.01 de acordo com as especificações da arquitetura?",
      options: [
        "1023 representa os limites da margem de erro do sensor LM35 em milivolts, e 0.01 representa o fator de divisão temporal aplicado para estabilizar o clock de processamento.",
        "1023 representa a taxa de amostragem máxima do sinal do conversor AD em hertz, e 0.01 representa o custo em microssegundos da execução flutuante na placa Arduino.",
        "1023 representa a resistência interna do sensor quando atingido o limite térmico de 25 °C, e 0.01 representa o fator de conversão de Celsius para a métrica binária.",
        "1023 representa o nível logarítmico máximo quantizado para a porta serial estendida, e 0.01 representa os graus Celsius obtidos no intervalo de medição fracionada.",
        "1023 representa o valor máximo retornado pelos 10 bits do conversor AD (correspondente a 5V), e 0.01 representa o fator de escala linear do LM35 de 10 mV/°C expresso em volts.",
      ],
      correctIndex: 4,
    },
    {
      id: "arquitetura-computacional-q5",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Considere o cenário em que a placa Arduino Uno está sendo alimentada por uma porta USB desgastada de um notebook, fornecendo apenas 4,7V ao invés dos 5,0V esperados. Sabendo que o código utiliza a equação 'temperatura = (valor * 5.0 / 1023.0) / 0.01', qual será a consequência técnica silenciosa desta variação de tensão?",
      options: [
        "O cálculo final da temperatura apresentará um valor consistentemente maior do que o real, pois o conversor ADC compara o sinal com a referência física reduzida, gerando um número binário maior, que será incorretamente multiplicado pela constante de 5.0V no código.",
        "O cálculo final da temperatura apresentará um valor consistentemente menor do que o real, pois o conversor ADC compara o sinal com a referência física reduzida, gerando um número binário menor, que será incorretamente multiplicado pela constante de 5.0V no código.",
        "O cálculo final da temperatura apresentará um valor consistentemente maior do que o real, pois o conversor ADC compara o sinal com a referência física ampliada, gerando um número binário menor, que será incorretamente dividido pela constante de 5.0V no código.",
        "O cálculo final da temperatura apresentará um valor consistentemente menor do que o real, pois o conversor ADC compara o sinal com a referência física ampliada, gerando um número binário maior, que será incorretamente dividido pela constante de 5.0V no código.",
        "O cálculo final da temperatura não apresentará alteração em relação ao valor real, pois o conversor ADC compensa automaticamente a referência física reduzida, gerando um número binário ajustado, que será corretamente interpretado pela constante de 5.0V no código.",
      ],
      correctIndex: 0,
    },
    {
      id: "arquitetura-computacional-q6",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Ao utilizar o multímetro analógico na saída central (Vout) do sensor de temperatura LM35, mediu-se a voltagem estática precisa de 0,237 Volts sem flutuações, mantendo a referência correta. Analisando a documentação, o que se pode afirmar terminantemente sobre a interpretação matemática deste valor no mundo digital (ADC 10 bits) versus físico?",
      options: [
        "A leitura indica que a temperatura real é de 23,7 °C, mas o valor bruto lido no ADC (inteiro retornado pelo analogRead) será arredondado de forma fixa para aproximadamente 48 ou 49, sofrendo a esperada perda inerente da quantização.",
        "A leitura indica que a temperatura real é de 23,7 °C, e o valor bruto lido no ADC (inteiro retornado pelo analogRead) registrará precisamente a cadeia de bits equivalentes ao valor fracionado realçando a sua exatidão impecável.",
        "A leitura indica que a temperatura real é de 2,37 °C, contudo o valor bruto lido no ADC (inteiro retornado pelo analogRead) será reportado retroativamente como zero em decorrência da insuficiência da tensão elétrica inicial contida na amostragem.",
        "A leitura indica que a temperatura real é de 237 °C, mas o valor bruto lido no ADC (inteiro retornado pelo analogRead) extrapolará o limite máximo das amarrações seriais, provocando um temido erro letal de buffer overflow interno.",
        "A leitura indica que a temperatura real é de 23,7 °C, logo o valor bruto lido no ADC (inteiro retornado pelo analogRead) multiplicará as flutuações térmicas, preenchendo inteiramente os 2 KB da SRAM num único ciclo de varredura.",
      ],
      correctIndex: 0,
    },
    {
      id: "arquitetura-computacional-q7",
      type: "mcq",
      difficulty: "média",
      template:
        "Ao analisar um endereço de memória num microcontrolador, você encontra o valor hexadecimal '0x1A3'. A qual valor decimal esse endereço corresponde?",
      options: ["411", "395", "419", "423", "319"],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q8",
      type: "fill",
      difficulty: "média",
      template:
        "O microcontrolador ATmega328P do Arduino possui {{0}} de memória Flash (onde o programa fica gravado) e apenas {{1}} de memória SRAM (onde as variáveis vivem).",
      blanksCorrect: ["32 KB", "2 KB"],
      options: ["32 KB", "2 KB", "16 MHz", "10 bits", "5 Volts"],
    },
    {
      id: "arquitetura-computacional-q9",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A frequência de clock de um processador nem sempre é uma métrica fixa e invariável. Tecnologias modernas como Turbo Boost e Throttling gerenciam essas variações de forma autônoma e dinâmica. Qual o fundamento lógico operacional que rege essas oscilações no hardware?",
      options: [
        "O processador diminui sua frequência (Throttling) sempre que o barramento serial atinge sua velocidade de saturação máxima, e eleva a frequência (Turbo) quando o sistema operacional delega rotinas de background inativas.",
        "O processador altera a frequência de clock exclusivamente em resposta aos comandos estritos do escalonador de tarefas do kernel, não havendo gerência autônoma de voltagem no nível intrínseco do silício isolado.",
        "O processador eleva autonomamente a sua frequência (Turbo) enquanto houver margem de tolerância térmica e sobra de energia disponível, e reduz a frequência agressivamente (Throttling) para se proteger de superaquecimento quando o teto térmico é violado.",
        "O processador eleva autonomamente a sua frequência (Turbo) unicamente se detectar a utilização intensiva do canal duplo de RAM (Dual Channel), e reduz a frequência (Throttling) quando os registradores flutuantes são acionados simultaneamente.",
        "O processador ajusta a margem de oscilação do ciclo contínuo em decorrência da latência presente nos dispositivos analógicos acoplados, sincronizando artificialmente as bordas do clock com os dados recebidos pelo conversor digital-analógico.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q10",
      type: "mcq",
      difficulty: "média",
      template:
        "Considerando o ATmega328P, com núcleo único e sem sistema operacional, qual é a consequência exata de inserir a instrução 'delay(2000)' no código?",
      options: [
        "A placa coloca o processo principal em segundo plano, permitindo que outras rotinas analógicas continuem rodando simultaneamente por 2 segundos.",
        "A placa suspende apenas as saídas seriais, mantendo a leitura contínua das entradas e sensores externos durante os 2 segundos estabelecidos.",
        "A placa inteira fica congelada por 2 segundos, não lendo sensores nem respondendo a eventos externos, pois não há um escalonador para trocar a tarefa.",
        "A placa reinicia o ciclo de execução da função loop() antecipadamente, ignorando quaisquer instruções seguintes por um período de 2 segundos.",
        "A placa reduz temporariamente a sua frequência de clock para economizar energia, operando em modo de segurança durante exatos 2 segundos.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q11",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Embora o Arduino Uno R3 baseie sua arquitetura geral num sistema que divide barramentos para acelerar o processo interno de buscas de instruções e acessos aos dados isolados de RAM, ele não se equipara dinamicamente a computadores de mesa mais modernos. Qual afirmação sumariza estritamente os motivos práticos dessa escolha em prol da topologia Harvard restritiva nas placas embarcadas?",
      options: [
        "A topologia de Harvard aplicada nas placas embaraçadas extingue a latência serial contínua, mas aumenta significativamente os ruídos analógicos entre os registradores estáticos, comprometendo leituras refinadas de conversores ADCs embutidos.",
        "A topologia de Harvard soluciona a escassez térmica dissipando as correntes altas diretamente para os pinos de saída laterais, porém anula qualquer forma de comunicação interativa com módulos externos via protocolos paralelos.",
        "A topologia de Harvard busca instrução e dados instantaneamente através de vias físicas independentes sem gargalos de sobreposição, ao custo indesejado de uma arquitetura rígida onde os programas não podem ser alterados ativamente durante a execução de loop().",
        "A topologia de Harvard permite o acesso estendido aos ciclos de clock inativos, multiplicando a performance bruta durante tarefas pesadas de ponto flutuante, mas demanda sistemas operacionais complexos que escalonem threads dinâmicas em modo kernel.",
        "A topologia de Harvard elimina as perdas por quantização dividindo a matriz lógica da ULA em blocos dedicados, todavia impede a alocação permanente de bootloaders nos setores da memória volátil limitando o ciclo de reinicializações seguras.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q12",
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual é a função primordial do 'clock' (relógio) em um sistema computacional síncrono, conforme apresentado na Aula 03?",
      options: [
        "Acelerar a velocidade de processamento dos transistores independentemente da temperatura gerada no núcleo.",
        "Fornecer um sinal periódico que sincroniza e autoriza as transições de estado dos circuitos digitais na borda do sinal.",
        "Armazenar temporariamente as instruções que estão aguardando o processamento pela Unidade Lógica e Aritmética.",
        "Reduzir o consumo de energia do microcontrolador desligando seletivamente os componentes que não estão em uso.",
        "Converter os dados analógicos provenientes dos sensores externos em valores numéricos digitais para o processador.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q13",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Por que operações matemáticas utilizando o tipo 'float' devem ser cuidadosamente avaliadas ao programar o microcontrolador ATmega328P de 8 bits?",
      options: [
        "Porque o uso de float corrompe os 2 KB limitados de memória Flash, exigindo a realocação constante dos registradores principais durante a execução da função loop().",
        "Porque o ATmega328P não possui unidade de ponto flutuante em hardware, o que significa que cada cálculo float precisa ser desmembrado em dezenas de instruções via software.",
        "Porque o conversor analógico-digital exige nativamente que os números da porta serial sejam fornecidos em valores inteiros exatos entre os limites de 0 a 1023.",
        "Porque as operações em ponto flutuante contornam o divisor de clock interno, forçando a CPU a operar a 16 MHz ininterruptos e provocando o superaquecimento do chip.",
        "Porque variáveis do tipo float sobrecarregam o barramento de Von Neumann, travando momentaneamente a comunicação simultânea entre a RAM e a unidade de estado lógico.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q14",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Quando implementamos um circuito medidor de temperatura com LM35 utilizando um conversor analógico-digital de exatos 10 bits referenciado em 5 Volts, o sensor relata perfeitamente um aumento físico de 24,0 °C para 24,3 °C na sala. O que será observado nos dados seriais monitorados na tela e por quê?",
      options: [
        "Os dados seriais saltarão bruscamente para 25,0 °C, ignorando completamente as frações térmicas, pois o microcontrolador ATmega328P carece de recursos aritméticos decimais, eliminando o resíduo do cálculo por imposição arquitetural.",
        "Os dados seriais exibirão flutuações randômicas oscilando entre 24,0 °C e 24,3 °C, devido à instabilidade induzida pelo divisor interno de 128 ciclos, sobrecarregando o ruído intrínseco da porta analógica não balanceada fisicamente.",
        "Os dados seriais indicarão gradativamente a progressão exata de décimos, acompanhando de forma suave a medição contínua da corrente analógica gerada pela porta A0 e compensando os saltos digitais gerados pela limitação temporal do delay().",
        "Os dados seriais continuarão exibindo firmemente os 24,0 °C ou pularão diretamente para quase 24,5 °C, visto que cada incremento detectável do ADC corresponde a degraus quantizados em faixas de aproximadamente 0,49 °C.",
        "Os dados seriais demonstrarão o erro térmico linear conhecido como desvio de fundo de escala, obrigando o operador do sistema a reiniciar a placa para calibrar dinamicamente as referências de tensão internas presentes no diodo do sensor.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q15",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Na medição do LM35 no Arduino com alimentação e referência padronizadas em 5V, foi demonstrado que duas temperaturas muito próximas podem resultar no mesmo valor bruto. Qual o limite de resolução calculado para esta montagem?",
      options: [
        "A montagem consegue distinguir variações finas de até 0,01 °C, pois o sensor produz exatos 10 milivolts para cada variação unitária de grau Celsius.",
        "A montagem consegue distinguir variações finas de até 0,50 °C, pois a especificação do datasheet garante uma precisão absoluta de ±0,5 °C a 25 °C.",
        "A montagem consegue distinguir variações finas de até 0,49 °C, pois o conversor divide a janela de 5V em 1024 níveis de aproximadamente 4,88 mV cada.",
        "A montagem consegue distinguir variações finas de até 1,00 °C, pois o microcontrolador ATmega328P trabalha exclusivamente com números inteiros truncados.",
        "A montagem consegue distinguir variações finas de até 0,25 °C, pois a variação natural da USB do computador adiciona um ruído benéfico na escala de leitura.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q16",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Converter números entre bases exige atenção ao peso posicional. Considerando o sistema octal (base 8), qual é o equivalente decimal do número octal '175'?",
      options: ["125", "175", "127", "141", "109"],
      correctIndex: 0,
    },
    {
      id: "arquitetura-computacional-q17",
      type: "mcq",
      difficulty: "fácil",
      template:
        "De acordo com a arquitetura de Von Neumann, descrita nos materiais, qual é a característica central que define como instruções e dados são armazenados e processados?",
      options: [
        "Instruções e dados residem em memórias fisicamente separadas, garantindo que o barramento nunca sofra gargalos durante a execução paralela.",
        "Instruções e dados residem na mesma memória e compartilham o mesmo formato binário, sendo diferenciados apenas pelo contexto de leitura da CPU.",
        "Instruções e dados residem na mesma memória, porém em formatos binários distintos, permitindo que a CPU os diferencie sem depender do contexto.",
        "Instruções e dados residem em memórias fisicamente separadas, mas compartilham o mesmo formato binário, sendo diferenciados pelo contexto de gravação.",
        "Instruções e dados residem na mesma memória e compartilham o formato binário, mas o processador exige a intervenção do usuário para separá-los.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q18",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Ao avaliar os ganhos reais proporcionados pela tecnologia de Hyper-Threading (SMT) em uma CPU moderna, é perceptível que a ativação dessa funcionalidade resulta em aumentos de desempenho tipicamente fixados entre 15% a 30%, nunca atingindo o valor esperado de 100% de otimização. Qual é a justificativa estrutural embasada em hardware para esse fenômeno restritivo?",
      options: [
        "O ganho nunca atinge 100% porque o hardware duplica completamente todas as unidades matemáticas especializadas, mas o sistema operacional falha em escalar o gerenciamento do barramento de dados simultâneos.",
        "O ganho nunca atinge 100% porque a tecnologia SMT replica apenas os registradores arquiteturais e os ponteiros de instrução, fazendo com que as threads concorrentes disputem intensamente os mesmos caches L1/L2 e Unidades de Execução físicas.",
        "O ganho nunca atinge 100% porque as threads de software, ao operarem em níveis mais altos, inviabilizam o escalonamento preditivo, forçando os contextos divididos a entrarem em colapso devido à falta de memória física disponível isolada.",
        "O ganho nunca atinge 100% porque as memórias separadas da topologia de Harvard limitam o tráfego veloz das requisições paralelas, impondo pausas ininterruptas aos ciclos ociosos recuperados pelo núcleo simulado.",
        "O ganho nunca atinge 100% porque o multiplicador do ciclo de relógio (Turbo Boost) é artificialmente bloqueado quando mais de uma thread de hardware tenta requisitar o recurso, protegendo assim o silício de falhas de sobretensão irreversíveis.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q19",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Em sistemas embarcados, máscaras de bits são cruciais para manipular registradores. Se aplicarmos uma operação lógica AND bit a bit entre o valor decimal '85' (que é 01010101 em binário) e a máscara hexadecimal '0x0F', qual será o resultado exato em formato binário?",
      options: ["01011111", "00001111", "01010000", "00000101", "01010101"],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q20",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "O 'gargalo de Von Neumann' é uma consequência estrutural direta do design da arquitetura clássica. Em um laço de repetição muito curto e rápido executado pela CPU de um PC desktop, qual a implicação principal desse gargalo e qual mecanismo o atenua?",
      options: [
        "A implicação principal é que a CPU gasta ciclos excessivos redecodificando as instruções estáticas, e o mecanismo que atenua isso é a instalação de múltiplos núcleos lógicos (SMT) que dispensam a Unidade Lógica Aritmética.",
        "A implicação principal é que as variáveis sobrepõem o código de máquina armazenado nos registradores, e o mecanismo que atenua isso é a introdução do sistema UEFI protegendo fisicamente o acesso aos discos voláteis.",
        "A implicação principal é que a CPU frequentemente paralisa seu pipeline esperando os dados ou as instruções trafegarem pelo barramento único, e o mecanismo que atenua essa espera constante é a utilização de memórias Cache integradas.",
        "A implicação principal é que a execução paralela eleva drasticamente o aquecimento térmico do soquete unificado, e o mecanismo que atenua isso é o emprego da técnica Throttling, derrubando artificialmente a velocidade do clock.",
        "A implicação principal é que o processo converte acidentalmente bits contínuos de dados para endereços aleatórios de instrução, e o mecanismo que atenua isso é o divisor interno de frequência presente na camada Harvard da máquina.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q21",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Embora o datasheet do LM35 indique uma faixa de operação de -55 °C a 150 °C, por que não é possível medir temperaturas negativas utilizando a montagem direta descrita no roteiro prático?",
      options: [
        "Porque o conversor analógico-digital de 10 bits do microcontrolador é fisicamente incapaz de converter números negativos em formato binário complementar de dois.",
        "Porque a resistência interna da protoboard interfere no sinal do componente, forçando os valores negativos a serem interpretados como ruído térmico aleatório pela porta A0.",
        "Porque o pino de Vout do sensor quebra o isolamento de proteção ao operar abaixo de 0 °C, exigindo a instalação urgente de capacitores de desacoplamento.",
        "Porque, ao utilizar uma fonte de alimentação simples e única de 5V, a tensão na saída do sensor nunca desce abaixo de zero volt, invalidando as leituras de graus negativos.",
        "Porque as temperaturas abaixo de 0 °C alteram drasticamente o fator de escala de 10 mV/°C para 5 mV/°C, exigindo a calibração simultânea do hardware e do software.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q22",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Em relação à etapa de inicialização de um computador contemporâneo, qual alternativa melhor define as responsabilidades atribuídas ao Firmware (como a UEFI)?",
      options: [
        "O Firmware é um software gravado no disco rígido encarregado de gerenciar as permissões dos aplicativos de alto nível assim que o sistema operacional assume o controle.",
        "O Firmware atua como um sistema operacional em miniatura, gerenciando a alocação dinâmica da memória RAM durante toda a vida útil da máquina após ser ligada.",
        "O Firmware é armazenado em hardware volátil e necessita ser carregado pelo disco de inicialização para testar e reconhecer os dispositivos físicos essenciais.",
        "O Firmware é o software contido em chip não volátil responsável por testar o hardware, inicializar barramentos, buscar e carregar o bootloader do disco para a RAM.",
        "O Firmware executa um loop infinito de verificações de segurança no hardware, impossibilitando que o processador ceda o controle para o sistema operacional residente.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q23",
      type: "mcq",
      difficulty: "média",
      template:
        "Qual é a principal justificativa, no contexto da organização de computadores, para a utilização dos sistemas octal e hexadecimal na representação de dados?",
      options: [
        "Ambos os sistemas são lidos nativamente pelo hardware da ULA, dispensando a etapa de conversão binária e acelerando a execução das instruções.",
        "Ambos os sistemas existem exclusivamente para facilitar a leitura humana, agrupando bits exatos e encurtando a representação sem exigir cálculos complexos.",
        "Ambos os sistemas foram criados para contornar o gargalo de barramento da arquitetura de Von Neumann, permitindo transferir mais bits por ciclo de clock.",
        "Ambos os sistemas possuem maior tolerância a ruídos elétricos nos circuitos internos, superando as limitações impostas pela margem de ruído do binário.",
        "Ambos os sistemas substituem o código ASCII no armazenamento de caracteres especiais, otimizando o uso dos escassos registradores de 8 bits do Arduino.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q24",
      type: "fill",
      difficulty: "super difícil",
      template:
        "O clock dita o ritmo de todo o sistema. No ciclo completo de execução (ciclo de máquina) regido pelo relógio, as quatro etapas fundamentais e consecutivas que ocorrem a cada avanço, em ordem estrita de execução arquitetural, são: primeiro {{0}}, segundo {{1}}, terceiro {{2}} e por último {{3}}.",
      blanksCorrect: ["Buscar", "Decodificar", "Executar", "Escrever"],
      options: [
        "Buscar",
        "Decodificar",
        "Executar",
        "Escrever",
        "Atualizar",
        "Suspender",
        "Armazenar",
        "Aguardar",
      ],
    },
    {
      id: "arquitetura-computacional-q25",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A Arquitetura de Von Neumann introduziu o conceito de 'programa armazenado', onde instruções e dados dividem a mesma memória. Se um analista extrair o valor binário isolado '01001000' do barramento de dados, qual afirmação explica corretamente o seu significado sob a perspectiva da arquitetura?",
      options: [
        "O valor representa indiscutivelmente o caractere 'H' da tabela ASCII, visto que sistemas Von Neumann destinam os blocos iniciais de memória física unicamente para dados textuais preestabelecidos.",
        "O valor representa inequivocamente um código de operação destinado à Unidade de Controle, pois o formato em 8 bits é uma característica imutável e exclusiva das instruções de linguagem de máquina.",
        "O valor representa um bloco integral de pixels da intensidade cinza a 28%, uma vez que a ausência de uma placa de vídeo separada obriga a CPU a pré-processar todas as matrizes visuais de saída.",
        "O valor é impossível de ser decifrado isoladamente, pois o seu significado intrínseco depende inteiramente do contexto no qual a CPU está realizando a leitura, não havendo marcação física que diferencie instrução de dado.",
        "O valor é corrompido, uma vez que dados válidos na arquitetura de Von Neumann necessitam de bits adicionais de paridade para mitigar as colisões no barramento unificado entre CPU e componentes.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q26",
      type: "fill",
      difficulty: "média",
      template:
        "Em arquiteturas de 8 bits, o valor máximo que um registrador pode armazenar é representado pelo hexadecimal '0xFF', que corresponde ao número decimal {{0}} e à sequência binária {{1}}.",
      blanksCorrect: ["255", "11111111"],
      options: ["255", "11111111", "256", "10000000", "127", "1024"],
    },
    {
      id: "arquitetura-computacional-q27",
      type: "mcq",
      difficulty: "média",
      template:
        "Por que a engenharia de hardware optou por utilizar a base 2 (binário) no nível físico dos transistores ao invés da base 10 (decimal)?",
      options: [
        "Porque a base 2 exige menos símbolos para representar o mesmo número, economizando espaço físico dentro dos minúsculos registradores.",
        "Porque a física entrega uma margem de ruído muito mais segura ao dividir a tensão de referência em apenas dois níveis distinguíveis (0 e 1).",
        "Porque a base 10 não é uma potência de 2, o que tornaria impossível a conversão matemática através de divisões e multiplicações sucessivas.",
        "Porque os programadores encontram maior facilidade em ler e interpretar longas sequências de bits do que números em formato decimal.",
        "Porque a arquitetura de Harvard exige exclusivamente a utilização de números binários para manter as memórias de dados e instruções separadas.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q28",
      type: "mcq",
      difficulty: "difícil",
      template:
        "O conversor AD do ATmega328P leva 13 ciclos de clock para realizar uma conversão. Sabendo que o clock principal é de 16 MHz e o divisor padrão do conversor é 128, qual é o tempo aproximado consumido por uma única leitura analógica (analogRead)?",
      options: [
        "Aproximadamente 13 microssegundos, resultado da divisão direta de 16 MHz pelos 13 ciclos requeridos para a leitura por aproximações sucessivas.",
        "Aproximadamente 52 microssegundos, pois o clock do conversor opera a 250 kHz, exigindo 13 ciclos para processar completamente os 10 bits de resolução.",
        "Aproximadamente 104 microssegundos, pois o clock do conversor opera a 125 kHz, e cada um dos 13 ciclos consome 8 microssegundos durante o processamento.",
        "Aproximadamente 104 milissegundos, pois o barramento do sensor LM35 introduz um atraso elétrico obrigatório antes que a porta A0 possa estabilizar o sinal.",
        "Aproximadamente 130 microssegundos, considerando a soma dos 104 microssegundos do conversor mais os ciclos consumidos pela função interna delay().",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q29",
      type: "mcq",
      difficulty: "difícil",
      template:
        "A especificação do sensor LM35 afirma uma 'exatidão assegurada de ±0,5 °C a 25 °C', além de um 'fator de escala de 10 mV/°C'. Qual é a distinção teórica entre essas duas informações no projeto da medição?",
      options: [
        "A exatidão define o desvio de precisão estatística entre ciclos de medição sucessivos, enquanto o fator de escala define o limite mínimo e máximo da temperatura operacional.",
        "A exatidão estabelece o nível de tensão que o Arduino precisará corrigir via código, enquanto o fator de escala indica a interferência de ruído nos cabos durante o envio.",
        "A exatidão descreve o limite de o quanto a leitura entregue pode diferir fisicamente da temperatura real, enquanto o fator de escala descreve a proporção de conversão elétrica por grau.",
        "A exatidão determina o erro provocado pelo autoaquecimento constante do chip, enquanto o fator de escala reflete o ruído causado pela ausência da unidade de ponto flutuante.",
        "A exatidão garante que não ocorrerá degradação de sinal nas margens operacionais do circuito, enquanto o fator de escala mensura a quantização dos bits nos registradores.",
      ],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q30",
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Você está escrevendo uma rotina de software para interfacear com um conversor ADC de 10 bits. O ADC reporta o valor máximo possível suportado pela sua resolução em binário puro. Qual será o valor exato lido representado em notação hexadecimal?",
      options: [
        "0x3FF, pois 10 bits todos em '1' equivalem ao valor decimal 1023, que convertido para hexadecimal requer agrupar os bits em 0011 1111 1111.",
        "0x400, pois 10 bits correspondem a 1024 combinações totais, sendo representados pela ativação do décimo primeiro bit da sequência.",
        "0xFF, pois o microcontrolador é de 8 bits e truncará automaticamente os dois bits mais significativos, resultando no decimal 255.",
        "0x7FF, pois 10 bits agrupados sob a forma de complemento de 2 reservam o bit mais significativo para o sinal lógico positivo.",
        "0x1FF, pois a leitura analógica sempre desconta o bit menos significativo (LSB) como margem de erro térmico do conversor AD.",
      ],
      correctIndex: 0,
    },
    {
      id: "arquitetura-computacional-q31",
      type: "mcq",
      difficulty: "difícil",
      template:
        "Comparando a arquitetura interna do microcontrolador ATmega328P (Arduino) com a de um Desktop PC moderno, como eles se diferenciam quanto ao acesso à memória de instruções e dados?",
      options: [
        "O Arduino utiliza a arquitetura de Von Neumann (barramentos separados), enquanto o PC utiliza a arquitetura de Harvard (barramento único unificado).",
        "O Arduino utiliza a arquitetura de Harvard (barramentos separados), enquanto o PC utiliza majoritariamente a arquitetura de Von Neumann (barramento único).",
        "O Arduino utiliza o gargalo de Von Neumann para otimizar instruções, enquanto o PC isola as rotinas no nível físico através do modelo estrito de Harvard.",
        "Ambos utilizam a arquitetura de Harvard, mas o PC compensa a separação de memórias através do uso intensivo de caches L1, L2 e L3 nos processadores.",
        "Ambos utilizam a arquitetura de Von Neumann, mas o Arduino sofre menos impacto de lentidão devido ao seu clock simplificado e fixo operando a 16 MHz.",
      ],
      correctIndex: 1,
    },
    {
      id: "arquitetura-computacional-q32",
      type: "mcq",
      difficulty: "fácil",
      template: "Qual é a representação em binário do número decimal '42'?",
      options: ["101011", "110010", "101010", "100100", "111000"],
      correctIndex: 2,
    },
    {
      id: "arquitetura-computacional-q33",
      type: "select",
      difficulty: "média",
      template:
        "O conceito de {{0}} refere-se à perda de precisão intrínseca quando uma grandeza infinita e contínua do mundo físico é mapeada para os degraus finitos do {{1}}.",
      blanksOptions: [
        ["quantização", "escalonamento", "sincronização"],
        [
          "conversor analógico-digital",
          "barramento do sistema",
          "registrador de instruções",
        ],
      ],
      blanksCorrect: ["quantização", "conversor analógico-digital"],
    },
    {
      id: "arquitetura-computacional-q34",
      type: "mcq",
      difficulty: "fácil",
      template:
        "Na montagem do sensor LM35 na protoboard, a identificação correta dos pinos é vital para não queimar o componente. Segurando-o com a face chanfrada para você e os pinos para baixo, qual é a ordem correta (esquerda, centro, direita)?",
      options: [
        "Pino 1 (esquerda): GND, Pino 2 (centro): Vout, Pino 3 (direita): VCC.",
        "Pino 1 (esquerda): VCC, Pino 2 (centro): GND, Pino 3 (direita): Vout.",
        "Pino 1 (esquerda): Vout, Pino 2 (centro): VCC, Pino 3 (direita): GND.",
        "Pino 1 (esquerda): VCC, Pino 2 (centro): Vout, Pino 3 (direita): GND.",
        "Pino 1 (esquerda): GND, Pino 2 (centro): VCC, Pino 3 (direita): Vout.",
      ],
      correctIndex: 3,
    },
    {
      id: "arquitetura-computacional-q35",
      type: "select",
      difficulty: "difícil",
      template:
        "Uma thread de {{0}} consiste em um conjunto de registradores e estado replicados dentro do núcleo físico. Quando o recurso Hyper-Threading é ativado, ele replica a fila de instruções, mas {{1}} as unidades de execução e caches entre as threads.",
      blanksOptions: [
        ["software", "hardware", "firmware"],
        ["duplica", "substitui", "compartilha"],
      ],
      blanksCorrect: ["hardware", "compartilha"],
    },
  ],
};
