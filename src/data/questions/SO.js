export const SO = {
  id: "SO",
  name: "SO",
  monogram: "SO",
  description:
    "SO",
  questions: [
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "A diretoria de uma multinacional sofreu um ataque de ransomware. Graças à rigorosa política de TI adotada no ano anterior, a equipe de segurança aplicou um script que isolou as máquinas, formatou os discos e restaurou backups idênticos em menos de duas horas, com mínima paralisação. Qual pilar estratégico da TI garantiu esse sucesso?",
      options: [
        "A obsolescência mecânica programada de todos os servidores de backup.",
        "A utilização exclusiva de sistemas operacionais baseados na nuvem pública.",
        "A diversidade extrema de sistemas e hardware entre todos os colaboradores.",
        "A dependência de um Shell altamente complexo para gerenciar incidentes.",
        "A padronização da TI, que possibilitou o contingenciamento rápido e processos claros.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Durante uma manutenção, um técnico de TI percebe que os comandos digitados no terminal (ex: 'ls' ou 'dir') não estão retornando resultados, embora o núcleo do sistema esteja ativo. Qual camada do sistema operacional falhou ao interpretar as instruções?",
      options: [
        "O Shell, que atua como o interpretador direto dos comandos do usuário.",
        "O Kernel, que não conseguiu identificar fisicamente o disco rígido atual.",
        "O Middleware, que perdeu a comunicação com o banco de dados principal.",
        "O Bootloader, que não inicializou o computador da maneira mais correta.",
        "O BIOS, que bloqueou o acesso do usuário à camada de hardware de vídeo.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Uma empresa de design utiliza um software de modelagem 3D que acabou de lançar uma nova versão. O sistema operacional das ilhas de edição, por ser muito antigo, não suporta a instalação dessa nova versão do software. Qual fenômeno está ocorrendo?",
      options: [
        "Obsolescência mecânica, devido à falha física da placa de vídeo 3D.",
        "Virtualização forçada, exigindo a simulação do sistema desatualizado.",
        "Padronização restritiva, que impede a instalação de qualquer aplicativo.",
        "Isolamento de processos corporativos, segmentando a edição de imagens.",
        "Obsolescência operacional, onde o SO não comporta mais as atualizações.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "O celular de um funcionário parou de funcionar corretamente após três anos de uso, pois os componentes físicos sofreram desgaste natural e o aparelho começou a apresentar falhas na tela e nos botões. Que tipo de obsolescência é essa?",
      options: [
        "Obsolescência funcional, gerada por defeitos diretos de fabricação.",
        "Obsolescência operacional, causada por falta de espaço de disco.",
        "Obsolescência restaurativa, que impede qualquer conserto técnico.",
        "Obsolescência programada por software via atualizações do núcleo.",
        "Obsolescência mecânica, atrelada ao desgaste físico do hardware.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Uma startup desenvolve um software de autenticação que servirá como ponte entre os aplicativos móveis de clientes e o sistema operacional dos servidores centrais. Na arquitetura de sistemas operacionais, como esse tipo de software é classificado?",
      options: [
        "Como parte do Kernel, o núcleo central que realiza a gestão física.",
        "Como um Shell, atuando exclusivamente na tradução de linhas de texto.",
        "Como um Hypervisor, dividindo o processador entre diferentes clientes.",
        "Como uma BIOS (Basic Input Output System), ativando a placa de rede.",
        "Como um Middleware, um software intermediário prestando serviços comuns.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Em uma grande rede de varejo, uma atualização do Windows foi disparada sem planejamento em 300 notebooks diferentes. Metade deles falhou ao tentar aplicar a atualização devido a incompatibilidades. Qual problema fundamental de gestão gerou essa crise sistêmica?",
      options: [
        "A presença de malwares que danificaram o Hypervisor das máquinas da rede.",
        "A falta de isolamento da camada de Shell nos notebooks dos colaboradores.",
        "O uso excessivo de Middlewares que sobrecarregaram o Kernel dos sistemas.",
        "A falta de padronização da TI, resultando em ambientes desiguais e frágeis.",
        "A incompatibilidade técnica da Camada de Abstração de Hardware (HAL) da rede.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Em um datacenter, optou-se por rodar cinco servidores web pesados diretamente sobre cinco sistemas operacionais em um único hardware através de virtualização, no lugar do modelo tradicional. Qual é a principal vulnerabilidade técnica dessa arquitetura se não for bem monitorada?",
      options: [
        "A falha no Hypervisor pode comprometer todas as máquinas virtuais simultaneamente.",
        "O isolamento total das VMs impede que os servidores web recebam acessos externos.",
        "A necessidade de ter um Kernel físico diferente para cada máquina virtual rodando.",
        "A incapacidade do sistema Host de possuir seu próprio sistema operacional base.",
        "O conflito obrigatório entre os endereços de memória gerados pelos Middlewares.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um arquiteto de soluções precisa desenhar um pipeline de CI/CD para um banco. Ele decide isolar os ambientes de Desenvolvimento, Teste/Homologação e Produção em instâncias virtuais distintas na nuvem. Qual a justificativa arquitetural baseada em conceitos de SO para essa separação obrigatória?",
      options: [
        "Reduzir o custo financeiro, pois ambientes virtuais não consomem processamento real da máquina Host.",
        "Unificar todos os Kernels num único ambiente global, melhorando a velocidade de execução do banco de dados.",
        "Forçar a obsolescência funcional rápida dos códigos antigos, exigindo refatorações mensais por parte dos engenheiros.",
        "Garantir a integridade do ambiente de Produção, utilizando o isolamento das VMs para que erros no código em Teste não afetem o hardware e serviços finais.",
        "Permitir que os analistas acessem a BIOS do servidor em nuvem sem comprometer a estabilidade do painel de controle corporativo.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Uma equipe de desenvolvedores precisa testar uma aplicação em diferentes sistemas operacionais. Em vez de comprar cinco computadores físicos, eles optam por criar Máquinas Virtuais (VMs). Qual é o benefício primário dessa abordagem para o ciclo do projeto?",
      options: [
        "Diminuição da dependência de um sistema operacional no Host físico.",
        "Criação de ambientes de testes isolados compartilhando o mesmo hardware.",
        "Eliminação total de vulnerabilidades de segurança nas aplicações testadas.",
        "Garantia de que o hardware físico rodará mais rápido com as VMs ligadas.",
        "Substituição do sistema operacional tradicional por um Kernel particionado.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um smartphone recente recebeu uma atualização do núcleo do Android e, imediatamente após, a câmera parou de funcionar porque o sistema operacional não conseguiu se comunicar com o sensor fotográfico físico. Qual camada técnica específica falhou nesse cenário?",
      options: [
        "A camada de Interface do Usuário (GUI), que não exibiu o botão corretamente.",
        "O Bootloader, que corrompeu a sequência de inicialização de vídeo do aparelho.",
        "A Camada de Abstração de Hardware (HAL), que oculta as diferenças do hardware.",
        "A máquina virtual Java, que interrompeu a execução do código principal de rede.",
        "A obsolescência programada, que desativou a câmera de forma pré-determinada.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Ao analisar um erro crítico de 'Tela Azul' no Windows (BSOD), o engenheiro de suporte nota o arquivo 'hal.dll' apontado no log SrtTrail.txt. Considerando a arquitetura do sistema operacional, por que a corrupção desse arquivo é tão fatal para a máquina?",
      options: [
        "Porque ele é responsável por interpretar todos os comandos de texto digitados no Shell, travando a interface gráfica.",
        "Porque ele atua como Hypervisor secundário, controlando as permissões de acesso à internet de todos os aplicativos.",
        "Porque é a Camada de Abstração de Hardware, e sua ausência impede que o núcleo (Kernel) se comunique com os componentes físicos.",
        "Porque ele é o Middleware principal que gerencia as senhas e autenticações do usuário na inicialização do sistema.",
        "Porque ele representa o BIOS do computador, que ao falhar, desliga imediatamente a fonte de energia da placa-mãe.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um gerente de TI decidiu substituir o modelo onde cada funcionário escolhia seu computador e sistema operacional por um modelo onde todos usam a mesma imagem de sistema. Como resultado, o tempo de suporte caiu pela metade. Qual pilar da padronização foi mais impactado?",
      options: [
        "A facilidade de administração e gestão eficiente dos recursos de TI.",
        "O contingenciamento rápido através da abstração total do hardware.",
        "A virtualização completa dos desktops para a nuvem da corporação.",
        "A obsolescência mecânica que reduziu o tempo de vida útil das peças.",
        "A eliminação da necessidade de atualizações regulares de segurança.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Ao ligar um computador em um escritório, a primeira tela que aparece é a da fabricante da placa-mãe, seguida pelo carregamento do sistema. Qual é a relação correta entre o BIOS e o Sistema Operacional (SO) nesse processo diário?",
      options: [
        "O SO é ativado primeiro e depois delega o controle do hardware para o BIOS.",
        "O BIOS inicia o computador e em seguida carrega o SO para gerenciar a máquina.",
        "O BIOS e o SO concorrem pelos mesmos recursos físicos de forma simultânea.",
        "O SO substitui permanentemente o BIOS após a primeira inicialização da placa.",
        "O BIOS funciona como um aplicativo de usuário que roda por cima do SO atual.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "De acordo com as definições clássicas, enquanto Tanenbaum destaca o sistema operacional como o único programa em execução o tempo todo, Machado foca em outra função central. Qual seria o foco principal na visão de Machado num ambiente corporativo de alta demanda?",
      options: [
        "A criação de um ambiente gráfico intuitivo e amigável para o usuário final.",
        "A gestão eficiente e a alocação de recursos físicos como memória e CPU.",
        "A compilação de códigos-fonte de aplicativos para a linguagem de máquina.",
        "A distribuição de máquinas virtuais através do Hypervisor para ambientes web.",
        "O desenvolvimento de um Shell avançado para administradores de infraestrutura.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Uma empresa de software decidiu criar três ambientes virtuais (desenvolvimento, teste e produção) dentro de um único computador físico muito potente. Qual componente é responsável por tornar essa divisão possível de maneira eficiente?",
      options: [
        "O sistema operacional convidado, responsável por particionar o disco.",
        "A interface de linha de comando (CLI), que executa a divisão lógica.",
        "O Hypervisor, que gerencia os recursos físicos para as máquinas virtuais.",
        "O Middleware, que atua como ponte de comunicação entre os hardwares.",
        "O Kernel do aplicativo, que virtualiza apenas as conexões de rede locais.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante o desenvolvimento de um aplicativo, um programador utiliza a instrução 'open()' para ler um arquivo grande do disco NVMe. Nos bastidores do Sistema Operacional, ocorre uma sequência rigorosa. Qual etapa técnica comprova o alto grau de abstração que o SO provê?",
      options: [
        "O Shell processa os dados visuais diretamente sem consultar a placa de vídeo.",
        "O sistema operacional verifica a rotação mecânica correta, lê a tabela de diretórios, movimenta cabeças de leitura (se aplicável) e deposita no buffer de memória.",
        "O Hypervisor emula um disco rígido físico diretamente na memória RAM, ignorando o hardware principal para ganhar mais velocidade.",
        "O Middleware suspende a execução do Kernel e assume o controle do disco rígido até que o aplicativo de terceiros encerre o acesso.",
        "O BIOS interrompe momentaneamente o sistema operacional para garantir que os dados sejam lidos com segurança da unidade de armazenamento.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Um jogo recém-lançado exige que o sistema operacional lide intensamente com a placa de vídeo, a placa de som e o processador ao mesmo tempo. Para que o jogo rode sem que o programador conheça as especificidades físicas de cada placa, o sistema oferece:",
      options: [
        "Uma máquina virtual dedicada que emula todo o ambiente de hardware.",
        "Um isolamento total, impedindo que o hardware seja acessado pelo jogo.",
        "Uma interface homogênea resultante da correta abstração de recursos.",
        "Um interpretador Shell especializado em processamento gráfico moderno.",
        "Um sistema operacional de tempo real que elimina a necessidade do Kernel.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "média",
      template:
        "Ao utilizar um servidor virtualizado em nuvem, um cliente percebe que, mesmo que o sistema vizinho no mesmo servidor físico trave completamente, o seu sistema continua operando normalmente. Essa característica da virtualização é conhecida como:",
      options: [
        "Compartilhamento irrestrito de memória entre as instâncias alocadas.",
        "Integração de código e repositórios diretos na nuvem computacional.",
        "Distribuição de hardware via Middleware de aplicações web externas.",
        "Isolamento total dos recursos e processos de cada máquina virtual.",
        "Padronização obrigatória de todos os sistemas convidados no Host.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Uma escola adquiriu novos computadores, mas os alunos reclamam que é muito difícil usar a máquina apenas com códigos em uma tela preta. A escola decide instalar um ambiente com janelas e ícones. Qual interface o sistema operacional está fornecendo nesse novo cenário?",
      options: [
        "Uma interface gráfica do usuário (GUI), que facilita muito a interação diária.",
        "Uma interface de linha de comando (CLI) baseada puramente em textos visuais.",
        "Um núcleo de sistema (Kernel) que traduz diretamente os cliques do mouse.",
        "Um interpretador de instruções (Shell) voltado para programadores experientes.",
        "Um ambiente de virtualização (VM) focado em isolamento total do hardware.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Um usuário comum abre seu editor de textos e salva um documento. Ele não precisa saber em qual trilha ou setor do disco rígido o arquivo foi gravado. Qual recurso do sistema operacional atua nesse momento?",
      options: [
        "A obsolescência mecânica do hardware de armazenamento em uso.",
        "A criação de um ambiente de homologação para testes de software.",
        "O particionamento físico do processador e da memória principal.",
        "A abstração de recursos, ocultando a complexidade do hardware.",
        "O licenciamento do sistema operacional para uso de disco rígido.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um hospital atualizou o software de seus equipamentos de ressonância magnética. Após a atualização, os computadores que operam as máquinas, rodando um sistema operacional antigo de 32 bits, começaram a travar porque não conseguem processar as novas instruções de alta precisão. Qual o diagnóstico correto do tipo de obsolescência que afetou a infraestrutura do hospital?",
      options: [
        "Obsolescência mecânica, pois os cabos de transferência de dados se desgastaram com o uso contínuo.",
        "Obsolescência programada, visto que o fabricante do hardware limitou intencionalmente a vida útil da máquina.",
        "Obsolescência operacional, pois o hardware e o sistema base não suportam mais os requisitos do novo software.",
        "Obsolescência restaurativa, já que a equipe técnica não possui peças de reposição para o painel de controle.",
        "Obsolescência de middleware, provocada pela quebra de comunicação entre a BIOS e o Hypervisor.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um engenheiro de sistemas está analisando duas abordagens para um novo data center: a visão Top-Down (Máquina Estendida) e a visão Bottom-Up (Gerenciador de Recursos). Se ele decidir priorizar a visão Bottom-Up, qual será o foco principal do sistema operacional a ser instalado?",
      options: [
        "Criar uma interface gráfica altamente responsiva para que os analistas não precisem usar o prompt de comando.",
        "Arbitrar os acessos concorrentes à CPU, memória e discos, garantindo a eficiência e evitando conflitos.",
        "Ocultar completamente a complexidade da arquitetura de hardware por meio de uma Camada de Abstração de Hardware.",
        "Garantir a execução contínua dos interpretadores Shell para acelerar a compilação de rotinas web.",
        "Estabelecer a virtualização irrestrita de rede local para conectar múltiplos sites da empresa.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Em uma fusão de duas grandes empresas, uma utilizava servidores com hypervisores nativos (Type 1), enquanto a outra utilizava servidores com hypervisores rodando sobre o Windows Server (Type 2). Para o ambiente de produção crítico, a TI escolheu migrar tudo para a tecnologia Type 1. Qual a razão técnica para essa escolha?",
      options: [
        "O Hypervisor Type 1 exige um sistema operacional hospedeiro completo, o que aumenta a facilidade de uso.",
        "O Hypervisor Type 1 oferece menor isolamento, permitindo que as aplicações conversem diretamente entre si.",
        "O Hypervisor Type 1 elimina o overhead do Middleware corporativo na gestão de senhas do servidor central.",
        "O Hypervisor Type 1 acessa diretamente o hardware físico, resultando em maior desempenho e menor latência.",
        "O Hypervisor Type 1 transforma a obsolescência de hardware em um processo inteiramente automatizado na nuvem.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Durante a inicialização de um servidor seguro, há uma cadeia estrita de confiança. O sistema liga, o BIOS faz o POST, em seguida passa o controle para o Bootloader, que por fim carrega o Kernel. Se o Kernel for carregado, mas não conseguir montar o sistema de arquivos principal, em que ponto exato a abstração falhou?",
      options: [
        "No carregamento do Middleware, que não converteu os dados lógicos para dados físicos no disco rígido.",
        "No próprio Bootloader, que se esqueceu de informar ao BIOS a senha da interface gráfica do usuário.",
        "Na interação entre o Kernel e os drivers de dispositivo de armazenamento, impedindo a abstração do hardware.",
        "No isolamento da Máquina Virtual, que bloqueou a comunicação de rede essencial para a etapa do POST.",
        "No Shell do sistema operacional, que rejeitou as instruções automatizadas de particionamento físico.",
      ],
      correctIndex: 2,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Uma montadora de carros utiliza uma aplicação legada de gerenciamento de robôs que roda exclusivamente no antigo MS-DOS. Para manter essa aplicação ativa em um computador moderno com Windows 11, a equipe de TI precisou utilizar uma camada de software específica. Que conceito de sistemas operacionais foi aplicado?",
      options: [
        "A Emulação/Virtualização, que recria lógicamente o ambiente do MS-DOS sobre o sistema moderno.",
        "A Padronização extrema, que força o Windows 11 a desabilitar sua própria interface gráfica (GUI).",
        "O uso de Middlewares, que convertem chamadas de rede da nuvem em sinais elétricos para o robô.",
        "A Obsolescência Programada, que reverte os drivers do computador novo para versões de trinta anos atrás.",
        "A execução via Shell Scripting do núcleo monolítico integrado na inicialização (Bootloader).",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "A tentativa de padronização total em um conglomerado financeiro revelou um problema: enquanto a matriz administrativa usava o mesmo sistema operacional leve das agências, a equipe de análise quantitativa precisava compilar modelos pesados, algo que o sistema padrão impedia. Qual é a principal desvantagem da padronização ilustrada neste caso?",
      options: [
        "O excesso de flexibilidade técnica que permitiu à equipe quantitativa alterar a estrutura do núcleo livremente.",
        "A vulnerabilidade aumentada a ataques de malwares devido à utilização de sistemas antigos nas agências.",
        "A redução drástica do tempo de manutenção e suporte pelas equipes de infraestrutura do banco.",
        "A limitação da inovação técnica e a falta de flexibilidade para atender a demandas de hardware específicas.",
        "O aumento da obsolescência mecânica nos servidores da matriz devido à lentidão no processamento analítico.",
      ],
      correctIndex: 3,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Para garantir que um aplicativo malicioso não destrua dados de outros aplicativos, o Sistema Operacional utiliza dois modos de operação no processador: o Modo Usuário e o Modo Kernel. Quando um programa comum precisa ler um arquivo, qual o mecanismo exato de transição?",
      options: [
        "O programa realiza uma Chamada de Sistema (System Call), transferindo o controle com segurança para o Kernel.",
        "O aplicativo assume temporariamente o controle do Hypervisor para enviar a instrução ao disco físico.",
        "O Bootloader é reiniciado em segundo plano para validar a permissão e liberar o Modo Usuário integralmente.",
        "A Camada de Abstração de Hardware traduz a requisição para o Shell e a executa no Modo Usuário livre.",
        "O Middleware reinicia os contadores de memória do servidor virtual para evitar a obsolescência mecânica.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Uma empresa desenvolveu um sistema distribuído onde serviços em servidores Linux precisam buscar dados em servidores Windows, sem que os desenvolvedores se preocupem com o formato dos pacotes ou o protocolo de rede. Qual elemento arquitetural de SO facilita essa comunicação heterogênea?",
      options: [
        "A GUI (Graphic User Interface) nativa dos sistemas.",
        "O Middleware implementado entre as aplicações e a rede.",
        "O BIOS (Basic Input/Output System) atualizado em nuvem.",
        "O isolamento provido pelas máquinas virtuais locais.",
        "A CLI (Command Line Interface) programada via Kernel.",
      ],
      correctIndex: 1,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um banco de dados em memória sofre frequentes interrupções porque dois processos tentam alocar os mesmos blocos da memória RAM exatamente ao mesmo tempo, gerando inconsistências no sistema hospedeiro. Esse cenário descreve uma falha em qual das missões fundamentais do Sistema Operacional?",
      options: [
        "Na provisão de uma Interface de Usuário simples baseada em ícones e pastas no desktop.",
        "Na aceleração de operações criptográficas utilizando as instruções de placa de vídeo virtualizada.",
        "Na orquestração da obsolescência de software para forçar a compra de uma nova versão do banco de dados.",
        "No carregamento adequado do Bootloader a partir da placa mãe no momento da inicialização elétrica.",
        "Na multiplexação e gerenciamento concorrente e eficiente dos recursos físicos da máquina.",
      ],
      correctIndex: 4,
    },
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um desenvolvedor percebeu que um programa escrito para um microprocessador específico funciona perfeitamente, mas quando levado para outro equipamento similar, apresenta erros estranhos. Ele resolve usar o SO para contornar isso utilizando bibliotecas padronizadas (APIs). Esse é um exemplo clássico de abstração. O que exatamente a abstração oculta neste cenário?",
      options: [
        "As diferenças minuciosas e as complexidades de baixo nível da arquitetura física do hardware.",
        "Os problemas de isolamento das máquinas virtuais instaladas no Hypervisor local da empresa.",
        "A presença obrigatória de uma interface gráfica do usuário focada em usabilidade e produtividade.",
        "As atualizações de middleware necessárias para conectar o aplicativo à nuvem pública de dados.",
        "O código fonte do Kernel, que é substituído por um ambiente Shell mais fácil de ser modificado.",
      ],
      correctIndex: 0,
    },
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante a migração de um cluster de banco de dados legado financeiro, a equipe precisou isolar instâncias independentes em um mesmo servidor físico com latência quase nula. Qual arquitetura explica corretamente a solução adotada?",
      options: [
        "O hypervisor tipo 2 gerencia os anéis de privilégio da CPU delegando as chamadas diretamente ao hardware subjacente sem o SO.",
        "O hypervisor tipo 1 intercepta chamadas de sistema (syscalls) e as processa no kernel do sistema operacional convidado isolado.",
        "O hypervisor bare-metal controla recursos físicos diretamente, abstraindo a infraestrutura sem a sobrecarga de um SO hospedeiro.",
        "O hypervisor tipo 1 emula a camada de abstração de hardware (HAL) exclusivamente na memória RAM para evitar falhas no disco.",
        "O hypervisor tipo 2 isola processos no modo usuário do SO hospedeiro, garantindo acesso prioritário aos drivers de vídeo físicos.",
      ],
      correctIndex: 2,
    },
    // ------------------------------------------------------------
    // Questão 2
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "Durante a inicialização de um servidor industrial, o {{0}} conclui a verificação POST e passa o controle imediato ao {{1}}, que por sua vez aloca o {{2}} na memória. Caso um sensor crítico tente acionar um dispositivo, o sistema exige uma mudança forçada do Modo Usuário para o {{3}} para evitar corrupção.",
      blanksCorrect: ["BIOS", "Bootloader", "Kernel", "Modo Kernel"],
      options: [
        "BIOS",
        "Bootloader",
        "Kernel",
        "Modo Kernel",
        "Modo Usuário",
        "Middleware",
        "Firmware",
        "Hypervisor",
      ],
    },
    // ------------------------------------------------------------
    // Questão 3
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Em um sistema de rastreamento logístico operando sob alta demanda, um erro severo causa corrupção nas tabelas de índice na memória porque duas threads tentaram escrever no mesmo endereço simultaneamente. Qual componente do SO falhou criticamente em sua missão técnica?",
      options: [
        "O escalonador de processos falhou ao proteger as seções críticas de memória contra acessos simultâneos em múltiplos núcleos.",
        "A fragmentação de dados no disco magnético causou leituras imprecisas devido ao atraso mecânico nas cabeças de gravação.",
        "O interpretador de comandos (Shell) reteve os pacotes de rede na memória virtual antes de enviá-los ao barramento da placa.",
        "O hypervisor tipo 2 desativou a camada HAL para priorizar a interface gráfica de monitoramento sobre a consistência transacional.",
        "A obsolescência funcional do middleware de banco de dados bloqueou a execução das instruções no modo usuário do processador.",
      ],
      correctIndex: 0,
    },
    // ------------------------------------------------------------
    // Questão 4
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Ao auditar o ataque de um malware a um datacenter, o perito nota que os arquivos foram sequestrados interagindo apenas com a API de arquivos, provando o papel do SO como {{0}}. A injeção inicial do código ocorreu no {{1}}, momento antes de conseguir escalar seus privilégios de execução.",
      blanksOptions: [
        ["Máquina Estendida", "Gerenciador de CPU", "Bootloader Físico"],
        ["Modo Usuário", "Modo Kernel", "Modo de Firmware"],
      ],
      blanksCorrect: ["Máquina Estendida", "Modo Usuário"],
    },
    // ------------------------------------------------------------
    // Questão 5
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Uma plataforma IoT de distribuição elétrica foi projetada para conectar medidores Linux a um processador central Windows. Como a engenharia garante que aplicações enviem dados estruturados independentemente do Kernel que controla os nós nas extremidades?",
      options: [
        "A HAL atua traduzindo pacotes de rede entre sistemas distintos, enquanto o Middleware gerencia a voltagem elétrica do hardware.",
        "O Middleware padroniza a comunicação entre as diferentes aplicações, enquanto a HAL isola o SO das especificidades do hardware.",
        "O Middleware controla o acesso simultâneo à CPU dos sensores, enquanto a HAL converte os dados lógicos em chamadas de sistema.",
        "A HAL fornece uma interface gráfica unificada aos operadores, enquanto o Middleware opera exclusivamente no kernel da aplicação.",
        "O Middleware emula as portas de comunicação de baixo nível, enquanto a HAL atua como roteador de rede para os dados capturados.",
      ],
      correctIndex: 1,
    },
    // ------------------------------------------------------------
    // Questão 6
    {
      type: "fill",
      difficulty: "super difícil",
      template:
        "No desenvolvimento do software de um veículo autônomo, garantir acesso imediato aos dados dos sensores de freio prioriza a visão focada no {{0}}. Por outro lado, um painel multimídia que reproduz mídia sem lidar com bits de controle de áudio foca na {{1}}. Esse ecossistema roda seguro sobre um {{2}} automotivo.",
      blanksCorrect: [
        "Gerenciador de Recursos",
        "Máquina Estendida",
        "Hypervisor Tipo 1",
      ],
      options: [
        "Gerenciador de Recursos",
        "Máquina Estendida",
        "Hypervisor Tipo 1",
        "Middleware Físico",
        "Hypervisor Tipo 2",
        "Bootloader Gráfico",
      ],
    },
    // ------------------------------------------------------------
    // Questão 7
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante a esteira de integração contínua (CI/CD), um desenvolvedor cria um script que formata blocos virtuais de armazenamento a partir de instruções em texto puro no terminal. Qual é a cadeia exata de abstração desencadeada nos bastidores do sistema?",
      options: [
        "As System Calls atuam como interface gráfica (GUI), enquanto a API gerencia as interrupções físicas de disco do sistema base.",
        "A API compila todos os códigos em tempo de execução, permitindo que o Shell substitua o Hypervisor no gerenciamento da memória.",
        "O Shell processa as instruções sempre em Modo Kernel, dispensando as System Calls para acessar os logs do pipeline integrados.",
        "As bibliotecas padronizadas desativam o processador, transferindo todo o fluxo de dados diretamente ao Bootloader da máquina.",
        "O Shell converte comandos do usuário e realiza requisições ao Kernel via System Calls, abstraindo o controle de hardware físico.",
      ],
      correctIndex: 4,
    },
    // ------------------------------------------------------------
    // Questão 8
    {
      type: "select",
      difficulty: "super difícil",
      template:
        "Uma infraestrutura em nuvem privada exige novas diretivas avançadas de criptografia (instruções AES-NI). Servidores antigos não suportam o recurso e os serviços caem, ilustrando uma obsolescência {{0}}. Para contornar provisoriamente sem trocar as máquinas físicas de imediato, aplica-se a {{1}} no cluster.",
      blanksOptions: [
        ["operacional", "mecânica", "programada"],
        ["emulação via software", "troca da placa-mãe", "atualização do BIOS"],
      ],
      blanksCorrect: ["operacional", "emulação via software"],
    },
    // ------------------------------------------------------------
    // Questão 9
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Câmeras de segurança com IA de uma metrópole começaram a congelar imagens sempre que tentavam processar atualizações neurais recentes, pois a controladora nativa delas tem um limite de 32 bits de endereçamento, incompatível com o peso dos dados novos. Como se tipifica esse cenário técnico?",
      options: [
        "Trata-se de obsolescência programada, pois o fabricante incluiu um temporizador físico oculto no chip de processamento visual.",
        "Configura-se como falha de padronização mecânica, exigindo a substituição das lentes desgastadas por variações climáticas locais.",
        "Define-se como anomalia de middleware emulado, onde o hipervisor bloqueou o acesso do kernel aos blocos de memória flash isolados.",
        "Consiste em obsolescência operacional, ocorrendo pois o processador antigo não suporta os novos algoritmos vetoriais exigidos.",
        "Trata-se de um conflito de interface (GUI), no qual as chamadas de sistema foram corrompidas pela ausência do interpretador shell.",
      ],
      correctIndex: 3,
    },
    // ------------------------------------------------------------
    // Questão 10
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Para garantir o cumprimento rigoroso da Lei Geral de Proteção de Dados (LGPD) em prontuários médicos hospedados na nuvem, os microsserviços do hospital foram migrados para um cluster onde cada tenant possui seu próprio núcleo funcional. Qual arquitetura oferece o pilar de blindagem contra ataques laterais neste contexto?",
      options: [
        "O uso estrito de partições de hardware lógicas no Shell anula o risco de acessos simultâneos indevidos aos blocos de memória hospitalar.",
        "A virtualização Type 1 (bare-metal) fornece um isolamento severo executando Kernels distintos por VM, mitigando falhas entre locatários.",
        "O particionamento em nível de sistema operacional garante segurança absoluta por meio da virtualização exclusiva do BIOS da placa central.",
        "A emulação de instruções via Middleware criptografa os registros no nível físico, impedindo invasões independentes das falhas do kernel.",
        "A adoção de hypervisores Type 2 elimina a necessidade de um SO hospedeiro, alocando a memória RAM estaticamente para cada microsserviço.",
      ],
      correctIndex: 1,
    },
  ],
};
