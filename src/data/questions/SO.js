export const SO = {
  id: "SO",
  name: "SO",
  monogram: "SO",
  description: "SO",
  questions: [
    // 1 (Super Difícil) - Projeto TI / Metas SMART
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        'Ao analisar a aderência SMART da documentação do projeto da estufa inteligente para cultivo de Champignon de Paris, o critério "Mensurável" é atendido de forma objetiva por qual das condições a seguir?[cite: 2]',
      options: [
        "Uso de tecnologia Arduino compatível com prazo e orçamento acadêmico.",
        "Resolução do problema de perda de lotes na maior espécie produzida no país.",
        "Definição estrita da data de entrega conforme o cronograma do curso.",
        "Entrega de protótipo funcional com leituras armazenadas por 8 a 12 semanas.",
      ],
      correctIndex: 3,
    },

    // 2 (Fácil) - Linux
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "No terminal Linux da VM de testes, qual comando é utilizado exclusivamente para criar um novo diretório de arquivos?[cite: 1]",
      options: ["mkdir", "touch", "cd ..", "nano"],
      correctIndex: 0,
    },

    // 3 (Difícil) - Definições de SO / Autores
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Segundo a definição clássica de Tanenbaum (2009) sobre a relação entre o hardware e o Sistema Operacional, pode-se afirmar que:[cite: 1]",
      options: [
        "É um programa que gerencia exclusivamente serviços de entrada e saída enquanto houver requisições ativas.",
        "É um conjunto de bibliotecas utilitárias ativadas somente durante o boot inicial do sistema operacional.",
        "É uma interface gráfica que atua na alocação pontual de recursos de rede e memória para as aplicações.",
        "O SO é o único programa em execução o tempo todo no computador (kernel), desde que o hardware esteja ativo.",
      ],
      correctIndex: 3,
    },

    // 4 (Difícil) - PowerShell Operadores
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Um analista precisa registrar o nome do servidor local em um arquivo de log pré-existente sem apagar os registros anteriores via PowerShell. Qual operador deve ser utilizado?[cite: 1]",
      options: [
        "$env:computername > log.txt",
        "$env:computername | log.txt",
        "$env:computername >> log.txt",
        "$env:computername +> log.txt",
      ],
      correctIndex: 2,
    },

    // 5 (Super Difícil) - Teoria de SO / Machado
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Segundo a abordagem teórica de Machado (2007), a função precípua e a utilidade fundamental do Sistema Operacional na arquitetura computacional consistem em:[cite: 1]",
      options: [
        "Atuar na alocação de recursos e serviços como memória, processadores e dispositivos.",
        "Manter a interface gráfica (GUI) ativa continuamente durante a execução do usuário.",
        "Executar a compilação do código das aplicações do usuário direto na camada física.",
        "Configurar os parâmetros da BIOS e do bootloader para evitar falhas do sistema.",
      ],
      correctIndex: 0,
    },

    // 6 (Médio) - Linux Comandos
    {
      type: "mcq",
      difficulty: "médio",
      template:
        'No ambiente Linux, um estagiário precisa remover simultaneamente dois arquivos de texto ("atividade.txt" e "aluno.txt") da pasta atual. O comando correto para essa ação é:[cite: 1]',
      options: [
        "del atividade.txt aluno.txt",
        "erase atividade.txt aluno.txt",
        "unlink atividade.txt aluno.txt",
        "rm atividade.txt aluno.txt",
      ],
      correctIndex: 3,
    },

    // 7 (Super Difícil) - PowerShell / Processos e Memória
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Para identificar rapidamente os 5 processos que mais consomem memória de trabalho no Windows utilizando o PowerShell, qual pipeline de comandos deve ser executado?[cite: 1]",
      options: [
        "ps | select -first 5 | sort -p ws",
        "ps | sort -p ws | select -last 5",
        "ps | sort -p cpu | select -first 5",
        "ps | where -p ws | select -last 5",
      ],
      correctIndex: 1,
    },

    // 8 (Fácil) - Linux pwd
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        "Qual comando do terminal Linux deve ser executado por um usuário para exibir o caminho absoluto do diretório em que ele se encontra atualmente?[cite: 1]",
      options: ["ls", "dir", "pwd", "cd"],
      correctIndex: 2,
    },

    // 9 (Difícil) - PowerShell / Comandos e Parâmetros (Select)
    {
      type: "select",
      difficulty: "difícil",
      template:
        "Ao utilizar o PowerShell, para obter ajuda sobre comandos relacionados a serviços do sistema utiliza-se {{0}}, e para excluir uma pasta e todo o seu conteúdo interno utiliza-se {{1}}.[cite: 1]",
      blanksOptions: [
        ["Get-Help *-Service", "Get-Service *", "Get-Command -Service"],
        [
          "Remove-Item nome_diretorio -Recurse",
          "Remove-Item nome_diretorio -Force",
          "Clear-Item nome_diretorio -All",
        ],
      ],
      blanksCorrect: [
        "Get-Help *-Service",
        "Remove-Item nome_diretorio -Recurse",
      ],
    },

    // 10 (Super Difícil) - Projeto TI / Limites e Escopo
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Um consultor propôs instalar atuadores automáticos para acionar umidificadores na câmara de cultivo do Champignon de Paris. De acordo com a documentação do projeto, essa solicitação:[cite: 2]",
      options: [
        "Está inclusa no escopo principal, pois visa garantir a umidade relativa entre 90% e 95%.",
        "Trata-se de uma premissa básica do projeto para validar o ciclo completo de frutificação.",
        "Constitui um requisito funcional obrigatório do módulo de aquisição e comunicação.",
        "Está excluída do escopo do projeto, pois este contempla apenas monitoramento e registro.",
      ],
      correctIndex: 3,
    },

    // 11 (Médio) - Inicialização do Computador
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Assinale a alternativa que apresenta a ordem cronológica e correta da sequência de inicialização de um computador:[cite: 1]",
      options: [
        "Hardware -> SO -> BIOS -> BootLoader",
        "BIOS -> Hardware -> BootLoader -> SO",
        "Hardware -> BIOS -> BootLoader -> SO",
        "BootLoader -> Hardware -> BIOS -> SO",
      ],
      correctIndex: 2,
    },

    // 12 (Difícil) - Champignon / Indução e Frutificação
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Durante o cultivo do Champignon de Paris (Agaricus bisporus), na fase de indução e frutificação, qual alteração ambiental específica é necessária para o desenvolvimento dos cogumelos?[cite: 2]",
      options: [
        "Elevar a temperatura do substrato a 80°C para esterilização final.",
        "Reduzir a umidade relativa do ar para níveis inferiores a 40%.",
        "Desligar totalmente os sensores para evitar a contaminação de esporos.",
        "Aumentar a ventilação do espaço interno para reduzir o nível de CO2.",
      ],
      correctIndex: 3,
    },

    // 13 (Super Difícil) - PowerShell / Aliases e Cmdlets
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        'No PowerShell, comandos tradicionais como "dir" e "ps" funcionam como atalhos para cmdlets internos. O comando nativo usado para listar esses apelidos (aliases) armazenados é:[cite: 1]',
      options: ["Get-AliasObj", "Get-Command", "Get-Process", "Get-Service"],
      correctIndex: 1,
    },

    // 14 (Médio) - Diagnóstico e Gestão de Energia no Windows
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Um administrador de rede precisa gerar um relatório completo da saúde da bateria de um notebook corporativo em formato HTML. Qual comando do prompt/PowerShell atende a esse objetivo?[cite: 1]",
      options: [
        "systeminfo /batteryreport",
        "sfc /scannow /battery",
        "Powercfg /batteryreport",
        "driverquery /battery",
      ],
      correctIndex: 2,
    },

    // 15 (Super Difícil) - Arquitetura de SO / Pilares
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Em uma estrutura corporativa, a camada de software intermediária responsável por fornecer pontes de comunicação, APIs, autenticação e drivers entre o núcleo do SO e as aplicações é denominada:[cite: 1]",
      options: [
        "Kernel, que gerencia diretamente as chamadas de APIs de autenticação e os drivers.",
        "Middleware, que disponibiliza serviços comuns, autenticação e suporte a APIs de sistema.",
        "Shell, que executa os scripts de validação de credenciais e traduz para o hardware.",
        "Bootloader, que inicializa os protocolos de segurança antes do carregamento da GUI.",
      ],
      correctIndex: 1,
    },

    // 16 (Fácil) - PowerShell / Criar arquivos
    {
      type: "mcq",
      difficulty: "fácil",
      template:
        'Para criar um novo arquivo de texto vazio chamado "teste.txt" no diretório atual utilizando o PowerShell, utiliza-se a seguinte sintaxe:[cite: 1]',
      options: [
        'Make-Item "teste.txt"',
        'Create-File "teste.txt"',
        'Add-Content "teste.txt"',
        'New-Item "teste.txt"',
      ],
      correctIndex: 3,
    },

    // 17 (Difícil) - Fases Biológicas do Champignon
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Em relação ao processo produtivo do Champignon de Paris, quais são os parâmetros técnicos de temperatura e duração recomendados para a etapa de Pasteurização?[cite: 2]",
      options: [
        "58°C a 60°C por um período contínuo de 6 a 10 horas de ciclo",
        "70°C a 80°C por um período contínuo de 4 a 6 dias em estufa",
        "45°C a 48°C por um período contínuo de 8 a 12 semanas totais",
        "25°C a 30°C por um período contínuo de 10 a 15 dias de cultivo",
      ],
      correctIndex: 0,
    },

    // 18 (Super Difícil) - PowerShell / Manutenção do Windows
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Qual comando deve ser executado no terminal com privilégios administrativos para fazer uma varredura completa e corrigir automaticamente arquivos de sistema corrompidos?[cite: 1]",
      options: ["sfc /scannow", "driverquery", "systeminfo", "Powercfg /s"],
      correctIndex: 0,
    },

    // 19 (Médio) - Padronização de TI
    {
      type: "mcq",
      difficulty: "médio",
      template:
        "Em uma organização com centenas de computadores, a padronização dos Sistemas Operacionais e do hardware proporciona como benefício direto:[cite: 1]",
      options: [
        "Eliminação da necessidade de atualizações de segurança perante falhas operacionais.",
        "Garantia de que todo hardware antigo execute versões recentes sem testes prévios.",
        "Redução de custos, facilidade de administração e contingenciamento mais rápido.",
        "Substituição automática do Kernel do sistema em caso de falhas de periféricos.",
      ],
      correctIndex: 2,
    },

    // 20 (Super Difícil) - Incubação do Champignon
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Durante a fase de Incubação do Champignon de Paris, a literatura técnica estabelece que o substrato e a Umidade Relativa (UR) do ar devem ser mantidos, respectivamente, em:[cite: 2]",
      options: [
        "Substrato a 15°C e umidade relativa do ar de 50% a 60%",
        "Substrato a 25°C e umidade relativa do ar de 90% a 95%",
        "Substrato a 35°C e umidade relativa do ar de 70% a 75%",
        "Substrato a 45°C e umidade relativa do ar de 30% a 40%",
      ],
      correctIndex: 1,
    },

    // 21 (Difícil) - Preenchimento de Lacunas / Linux (Fill)
    {
      type: "fill",
      difficulty: "difícil",
      template:
        "No ecossistema Linux, para criar um arquivo vazio utiliza-se o comando {{0}}, enquanto para visualizar o conteúdo desse arquivo de texto no terminal usa-se o comando {{1}}.[cite: 1]",
      blanksCorrect: ["touch", "cat"],
      options: ["touch", "cat", "mkdir", "nano"],
    },

    // 22 (Super Difícil) - WMI no PowerShell
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Para consultar informações detalhadas e estruturadas sobre o Sistema Operacional instalado via instrumentação WMI no PowerShell, utiliza-se o cmdlet:[cite: 1]",
      options: [
        "Get-WmiClass -Name Win32_OperatingSystem",
        "Get-SystemInfo -Object Win32_OperatingSystem",
        "Get-Process -Class Win32_OperatingSystem",
        "Get-WmiObject -Class Win32_OperatingSystem",
      ],
      correctIndex: 3,
    },

    // 23 (Difícil) - Validando caminhos no PowerShell
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Para evitar exceções e erros de execução em scripts PowerShell ao tentar manipular pastas inexistentes, o cmdlet utilizado para retornar True ou False sobre a existência de um caminho é:[cite: 1]",
      options: [
        'Test-Path -Path "C:\\dados"',
        'Get-ChildItem -Path "C:\\dados"',
        'Set-Location -Path "C:\\dados"',
        'Get-Command -Path "C:\\dados"',
      ],
      correctIndex: 0,
    },

    // 24 (Médio) - Pilares do SO / Shell
    {
      type: "mcq",
      difficulty: "médio",
      template:
        'Qual é a definição correta para o pilar "Shell" na arquitetura de um Sistema Operacional e quais são seus representantes práticos?[cite: 1]',
      options: [
        "É o núcleo do SO responsável pelo hardware; exemplos: CPU, memória RAM e Disco Rígido.",
        "É um software intermediário de rede; exemplos: servidores web, APIs e drivers de SO.",
        "É um interpretador de comandos do usuário; exemplos: PowerShell, Bash, Zsh e Cmd.",
        "É o programa de inicialização gráfica da BIOS; exemplos: Firmware, UEFI e CMOS.",
      ],
      correctIndex: 2,
    },

    // 25 (Super Difícil) - Módulos do Projeto da Estufa
    {
      type: "mcq",
      difficulty: "super difícil",
      template:
        "Considerando os módulos e requisitos do projeto da estufa inteligente de cogumelos, o Módulo de Sensoriamento possui como atribuição estrita:[cite: 2]",
      options: [
        "Acionamento automatizado de bombas de água e exaustores.",
        "Uso de sensor de umidade do substrato e de umidade do ar.",
        "Exportação gráfica dos dados para aplicativo móvel iOS.",
        "Controle de acesso físico e biossegurança na câmara real.",
      ],
      correctIndex: 1,
    },

    // 26 (Difícil) - Obsolescência de Hardware/SO
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Quando uma nova versão do Sistema Operacional é lançada e os dispositivos legados da empresa deixam de suportar essa atualização por restrições técnicas, ocorre uma obsolescência:[cite: 1]",
      options: [
        "Mecânica, caracterizada por falhas na estrutura física do equipamento fornecido.",
        "Funcional, caracterizada por defeitos de fabricação no hardware de fábrica.",
        "Operacional, caracterizada por incompatibilidade entre SO atualizado e o aparelho.",
        "Restaurativa, caracterizada pela troca de peças internas na assistência técnica.",
      ],
      correctIndex: 2,
    },

    // 27 (Difícil) - Comandos PowerShell de Navegação e Listagem
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "Ao administrar diretórios no Windows via PowerShell, os cmdlets específicos para listar os itens de uma pasta e para navegar entre diretórios são, respectivamente:[cite: 1]",
      options: [
        "Get-ChildItem e Set-Location",
        "Set-Location e Get-ChildItem",
        "Get-Content e Move-Item path",
        "Copy-Item e Remove-Item path",
      ],
      correctIndex: 0,
    },

    // 28 (Difícil) - Restrições do Projeto de TI
    {
      type: "mcq",
      difficulty: "difícil",
      template:
        "No contexto de gestão do projeto da estufa de Champignon de Paris, qual das alternativas apresenta uma restrição real explicitada na documentação?[cite: 2]",
      options: [
        "Necessidade obrigatória de comercialização imediata do dispositivo criado no mercado.",
        "Inexistência de energia elétrica e ausência total de sensores no mercado local.",
        "Obrigatoriedade de uso de licenças proprietárias pagas do sistema operacional.",
        "Ausência de atuação automática sobre o ambiente (apenas monitoramento e registro).",
      ],
      correctIndex: 3,
    },
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
