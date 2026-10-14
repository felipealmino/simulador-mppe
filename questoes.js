// Arquivo: questoes.js
// Banco de Dados Oficial - Provas Reais (FCC / IBFC)

// ---------------------------------------------------------
// 1. DISCIPLINAS COMUNS (USO CRUZADO ENTRE CARGOS)
// ---------------------------------------------------------

const banco_pt = [
    { 
        topic: "Intelecção de Texto", 
        q: "Sobre o texto 'A família dos porquês': Ao considerar os distintos empregos da palavra 'porque', o autor defende sobretudo a ideia de que:", 
        options: [
            "os distintos usos lógicos dessa palavra asseguram respostas para todas as perguntas.", 
            "as causas e explicações apontadas por esse termo esgotam suas funções na linguagem.", 
            "o campo aberto pelas interrogações humanas vai muito além das respostas dadas pela ciência.", 
            "a ciência se vale dessa palavra tanto para interrogar como para explicar o inexplicável.", 
            "a razão de ser dessa palavra é expressar a curiosidade diante dos fenômenos naturais."
        ], 
        answer: 2, 
        disclaimer: "O texto afirma categoricamente que 'os porquês da ciência são por vezes rasos' e 'nem sequer arranham os porquês que mais importam'." 
    },
    { 
        topic: "Ortografia Oficial", 
        q: "Com base nas regras do Novo Acordo Ortográfico da Língua Portuguesa, assinale a alternativa em que o emprego do hífen está totalmente adequado:", 
        options: [
            "auto-conhecimento e co-reflexão.", 
            "autoavaliação, coexistência e releitura.", 
            "infra-estrutura e auto-estima.", 
            "pré-requisitos e meio-ambiente.",
            "anti-social e micro-ondas."
        ], 
        answer: 1, 
        disclaimer: "Pelo novo acordo, prefixos terminados em vogal unem-se sem hífen à palavra seguinte se esta começar por consoante diferente de 'r' ou 's' (autoavaliação, coexistência)." 
    }
];

const banco_rlm = [
    { 
        topic: "Razão e Proporção", 
        q: "Dois automóveis, A e B, percorrem a mesma estrada em sentidos opostos, ambos com velocidade constante. Os dois entram em um túnel no mesmo momento. A e B se cruzam após A percorrer 2/5 do comprimento do túnel. Nessa situação, é correto afirmar que a velocidade de B é:", 
        options: [
            "o dobro da de A.", 
            "1/3 da de A.", 
            "2,5 vezes a de A.", 
            "1,5 vez a de A.", 
            "2/5 da de A."
        ], 
        answer: 3, 
        disclaimer: "Se A percorreu 2/5 do túnel até o cruzamento, B percorreu 3/5 no mesmo tempo. Logo, a velocidade de B é 1,5 vez maior que a de A (3/5 dividido por 2/5 = 1,5)." 
    },
    { 
        topic: "Análise Combinatória", 
        q: "Num restaurante você monta sua refeição escolhendo 1 proteína (4 opções), 3 acompanhamentos (8 opções), 1 sobremesa (3 opções) e 1 bebida (3 opções). Quantas refeições diferentes você pode montar?", 
        options: [
            "360", 
            "2016", 
            "120", 
            "672",
            "1024"
        ], 
        answer: 1, 
        disclaimer: "Acompanhamentos: Combinação de 8 elementos tomados 3 a 3 = 56. Multiplicando pelas demais opções: 4 * 56 * 3 * 3 = 2016." 
    }
];

const banco_info = [
    { 
        topic: "Navegadores", 
        q: "Para acessar a página pela qual será possível encontrar a opção que permitirá limpar os dados de navegação do Google Chrome, basta digitar, na linha de endereço do navegador, o comando:", 
        options: [
            "google://settings/", 
            "goto history", 
            "chrome://history/", 
            "http://history", 
            "clear://history"
        ], 
        answer: 2, 
        disclaimer: "O atalho oficial de protocolo do Chrome para o histórico é chrome://history/." 
    },
    { 
        topic: "Sistemas Operacionais", 
        q: "No ambiente Microsoft Windows, para criar uma pasta rapidamente, basta:", 
        options: [
            "pressionar Ctrl + P no local desejado.", 
            "clicar com o botão esquerdo e selecionar 'Criar Pasta'.", 
            "clicar com o botão direito e escolher a opção 'Nova Pasta' no menu 'Arquivo'.", 
            "clicar com o botão direito no local e selecionar as opções 'Novo' > 'Pasta'.", 
            "clicar com o botão direito e selecionar a opção 'Nova Pasta'."
        ], 
        answer: 3, 
        disclaimer: "A sequência correta de menus de contexto do Windows é Botão Direito > Novo > Pasta." 
    }
];

const banco_legis_mppe = [
    { 
        topic: "Lei Orgânica Estadual (LC 12/94)", 
        q: "De acordo com a LC 12/1994, o Corregedor Geral do Ministério Público:", 
        options: [
            "será eleito pelo Colégio de Procuradores.", 
            "poderá ser destituído pelo voto de um terço dos membros.", 
            "será assessorado por até quatro Promotores de Justiça.", 
            "será substituído pelo Corregedor Substituto aprovado pelo PGJ.", 
            "será escolhido pelo Conselho Superior do MP, em votação secreta, dentre seus membros titulares."
        ], 
        answer: 4, 
        disclaimer: "O Corregedor-Geral é eleito pelo CSMP, dentre seus titulares, para mandato de dois anos (Art. 16, LC 12/94)." 
    },
    { 
        topic: "Lei Orgânica Nacional (8.625/93)", 
        q: "José integra, como membro nato, e preside o Colégio de Procuradores de Justiça e o Conselho Superior do MP. De acordo com a Lei 8.625/93, José é o:", 
        options: [
            "Procurador-Geral de Justiça, a quem compete propor ação civil para decretação da perda do cargo de membro vitalício.", 
            "Corregedor-Geral do Ministério Público.", 
            "Ouvidor-Geral do Ministério Público.", 
            "Subprocurador-Geral de Justiça Institucional.", 
            "Decano do Colégio de Procuradores."
        ], 
        answer: 0, 
        disclaimer: "A presidência dos órgãos colegiados do MP (Colégio e Conselho) é atribuição legal inerente ao cargo de Procurador-Geral de Justiça." 
    }
];

// ---------------------------------------------------------
// 2. DISCIPLINAS JURÍDICAS (TÉCNICO E ANALISTA JURÍDICO)
// ---------------------------------------------------------

const banco_const = [
    { 
        topic: "Direitos e Garantias Fundamentais", 
        q: "Segundo a Constituição Federal, NÃO haverá penas: I. de caráter perpétuo. II. de perda de bens. III. de banimento. IV. cruéis. V. de interdição temporária de direitos. Está correto o que se afirma APENAS em:", 
        options: ["I, II e III.", "II e IV.", "I, IV e V.", "II, III e V.", "I, III e IV."], 
        answer: 4, 
        disclaimer: "A CF (Art. 5º, XLVII) veda expressamente penas de morte (salvo guerra declarada), de caráter perpétuo (I), de trabalhos forçados, de banimento (III) e cruéis (IV)." 
    },
    { 
        topic: "Organização dos Poderes", 
        q: "É da competência exclusiva do Congresso Nacional:", 
        options: [
            "julgar anualmente as contas prestadas pelo Presidente da República e apreciar relatórios de execução.", 
            "aprovar, por maioria absoluta, a exoneração de ofício do PGR.", 
            "autorizar a instauração de processo contra Ministros de Estado.", 
            "avaliar periodicamente o Sistema Tributário Nacional.", 
            "aprovar previamente a escolha dos chefes de missão diplomática."
        ], 
        answer: 0, 
        disclaimer: "O julgamento das contas prestadas anualmente pelo Presidente da República é competência exclusiva do Congresso Nacional (Art. 49, IX, CF)." 
    }
];

const banco_adm = [
    { 
        topic: "Licitações e Contratos", 
        q: "Uma auditoria identificou aquisição de software mediante pregão presencial. Não houve irregularidade no valor e houve ampla disputa. A auditoria opinou pela irregularidade por inaplicabilidade do pregão. Essa análise:", 
        options: [
            "procede, sendo vedada a utilização do pregão para bens de informática.", 
            "não pode ser presumida verdadeira, cabendo analisar se os bens poderiam ser descritos como 'comuns'.", 
            "tem caráter meramente opinativo discricionário.", 
            "vincula a decisão do administrador à anulação.", 
            "se insere no poder de revisão sumária de contratos vigentes."
        ], 
        answer: 1, 
        disclaimer: "Bens e serviços de informática podem ser licitados via pregão, desde que enquadrados como 'comuns', isto é, com padrões de desempenho e qualidade definidos no edital." 
    },
    { 
        topic: "Organização Administrativa", 
        q: "Os órgãos públicos que integram a organização administrativa, na qualidade de 'centros de competência':", 
        options: [
            "responsabilizam-se exclusiva e pessoalmente pelas consequências.", 
            "são representados por agentes públicos, mas não se confundem com estes.", 
            "possuem personalidade jurídica própria.", 
            "exercem os poderes inerentes à Administração, exceto polícia.", 
            "são entes dotados de personalidade em estrutura descentralizada."
        ], 
        answer: 1, 
        disclaimer: "Órgãos são despersonalizados (Teoria do Órgão); as ações de seus agentes são imputadas à pessoa jurídica que integram." 
    }
];

const banco_civil = [
    { 
        topic: "Pessoas Naturais (Domicílio)", 
        q: "Luísa possui residências, com ânimo definitivo, nas cidades de São Paulo, Rio de Janeiro e Belo Horizonte, nas quais alternadamente vive. Luísa possui domicílio em:", 
        options: [
            "São Paulo, apenas.", 
            "Rio de Janeiro, apenas.", 
            "Belo Horizonte, apenas.", 
            "São Paulo, Rio de Janeiro e Belo Horizonte.", 
            "São Paulo e Belo Horizonte, apenas."
        ], 
        answer: 3, 
        disclaimer: "Se a pessoa natural tiver diversas residências, onde, alternadamente, viva, considerar-se-á domicílio seu qualquer delas (Art. 71, CC)." 
    },
    { 
        topic: "Pessoas Jurídicas (Fundações)", 
        q: "Para instituir uma fundação, Ricardo deverá promover dotação especial de bens livres. De acordo com o Código Civil, o ato de criação poderá ser realizado:", 
        options: [
            "por instrumento particular apenas.", 
            "somente por escritura pública.", 
            "por contrato social em junta comercial.", 
            "somente por escritura pública ou testamento.", 
            "exclusivamente por testamento particular."
        ], 
        answer: 3, 
        disclaimer: "A fundação cria-se por escritura pública ou por testamento, através de dotação especial de bens (Art. 62, CC)." 
    }
];

const banco_proc_civil = [
    { 
        topic: "Petição Inicial", 
        q: "Em regra, caberá ao autor deduzir pedido determinado. Admite-se, porém, a formulação de pedido genérico:", 
        options: [
            "quando não for possível determinar, desde logo, as consequências do ato ou do fato.", 
            "nas ações universais, mesmo se puder individuar os bens.", 
            "quando depender de ato de terceiro.", 
            "quando a parte for hipossuficiente.", 
            "quando desconhecido o réu."
        ], 
        answer: 0, 
        disclaimer: "O pedido deve ser determinado, mas a lei processual admite exceções, como nas ações de indenização onde não for possível avaliar desde logo a extensão do dano (Art. 324, § 1º, II)." 
    },
    { 
        topic: "Sentença", 
        q: "Nas causas que dispensem a fase instrutória, o juiz julgará liminarmente improcedente o pedido que contrariar:", 
        options: [
            "súmula do STF ou do STJ, desde que já tenha havido a citação do réu.", 
            "enunciado de súmula de tribunal de justiça sobre direito local, independentemente da citação do réu.", 
            "decisões anteriores suas proferidas em casos análogos.", 
            "qualquer acórdão proferido pelo STF nos últimos 5 anos.", 
            "incidente de resolução, desde que o réu seja citado."
        ], 
        answer: 1, 
        disclaimer: "A improcedência liminar do pedido dispensa a citação do réu e ocorre quando o pleito contrariar, entre outros, súmula de tribunal de justiça sobre direito local (Art. 332, CPC)." 
    }
];

const banco_penal = [
    { 
        topic: "Crimes contra a Adm. Pública", 
        q: "Gonçalo, funcionário público, em razão da função, exige para si vantagem indevida, não chegando, entretanto, a recebê-la. Tal conduta caracteriza o crime de:", 
        options: [
            "corrupção passiva consumada.", 
            "tentativa de corrupção ativa.", 
            "tentativa de prevaricação.", 
            "concussão consumada.", 
            "peculato consumado."
        ], 
        answer: 3, 
        disclaimer: "O crime de concussão (exigir vantagem indevida) é formal, ou seja, consuma-se no momento da exigência, sendo o recebimento mero exaurimento do crime." 
    },
    { 
        topic: "Crimes contra a Pessoa", 
        q: "A pena no homicídio culposo é aumentada de 1/3: I. se resulta de inobservância de regra técnica; II. se deixa de prestar socorro; III. se foge para evitar prisão em flagrante; IV. vítima maior de 60 anos.", 
        options: ["I, II e IV.", "II, III e IV.", "I, II e III.", "II, III e V.", "I, III e V."], 
        answer: 2, 
        disclaimer: "As causas de aumento do homicídio culposo incluem a inobservância de regra técnica, omissão de socorro e fuga para evitar o flagrante. A idade da vítima (maior de 60 ou menor de 14) majora o homicídio doloso." 
    }
];

const banco_proc_penal = [
    { 
        topic: "Princípios Fundamentais", 
        q: "O princípio do Direito Processual Penal que impede a criação de tribunais de exceção refere-se ao princípio:", 
        options: ["do contraditório.", "da verdade real.", "da oficiosidade.", "do juiz natural.", "da indisponibilidade."], 
        answer: 3, 
        disclaimer: "A garantia constitucional de que ninguém será processado senão pela autoridade competente consagra o Princípio do Juiz Natural, coibindo juízos e tribunais de exceção." 
    },
    { 
        topic: "Sentença", 
        q: "À luz do que dispõe o Código de Processo Penal sobre a sentença:", 
        options: [
            "qualquer das partes poderá pedir embargos no prazo de 5 dias.", 
            "o juiz, ao proferir sentença condenatória, fixará valor mínimo para reparação dos danos causados.", 
            "é vedado ao juiz atribuir definição jurídica diversa da denúncia.", 
            "a intimação será mediante edital se o réu estiver preso.", 
            "o juiz não pode condenar se o MP pedir a absolvição."
        ], 
        answer: 1, 
        disclaimer: "É dever do magistrado, na sentença penal condenatória, fixar valor mínimo para a reparação dos danos civis causados pela infração (Art. 387, IV, CPP)." 
    }
];

// ---------------------------------------------------------
// 3. DISCIPLINAS ESPECÍFICAS: TÉCNICO MINISTERIAL
// ---------------------------------------------------------

const banco_noc_adm = [
    { 
        topic: "Planejamento e Indicadores", 
        q: "O Balanced Scorecard (BSC) é uma metodologia que prioriza o equilíbrio organizacional a partir das perspectivas: I. financeira; II. de processos internos; III. de clientes; IV. de aprendizado e crescimento.", 
        options: ["I, II, III e IV.", "I, III e V.", "I, II, III e V.", "I e III.", "II e III."], 
        answer: 0, 
        disclaimer: "O BSC baseia-se exatamente nas quatro perspectivas clássicas citadas: Financeira, Clientes, Processos Internos e Aprendizado/Crescimento." 
    },
    { 
        topic: "Gestão de Pessoas", 
        q: "A consultoria afirmou que, considerando a natural aversão ao trabalho, os empregados necessitam de direção e controle. Essa premissa denota a:", 
        options: [
            "Teoria da Hierarquia de Maslow.", 
            "Teoria X, de MacGregor.", 
            "Teoria Y, de Herzberg.", 
            "Teoria da Expectativa.", 
            "Teoria Bifatorial de Skinner."
        ], 
        answer: 1, 
        disclaimer: "A Teoria X de McGregor pressupõe que o ser humano médio tem aversão intrínseca ao trabalho e precisa ser coagido e controlado." 
    }
];

// ---------------------------------------------------------
// 4. DISCIPLINAS ESPECÍFICAS: ANALISTA DE SISTEMAS (TI)
// ---------------------------------------------------------

const banco_gov_ti = [
    { 
        topic: "Frameworks ITIL e COBIT", 
        q: "Considere: ( ) ITIL 4 introduz o Sistema de Valor de Serviço (SVS). ( ) No COBIT 2019, o domínio APO12 orienta sobre gestão de riscos. ( ) O uso de metodologias híbridas em projetos públicos visa conciliar licitações com agilidade. A sequência correta é:", 
        options: ["V - F - V.", "F - V - F.", "V - V - V.", "F - F - F.", "V - F - F."], 
        answer: 2, 
        disclaimer: "Todas as afirmativas de governança estão corretas. O ITIL 4 substituiu o ciclo de vida linear pelo SVS, e o COBIT mantém forte viés em gestão de risco (APO12)." 
    }
];

const banco_seg_ti = [
    { 
        topic: "Criptografia", 
        q: "No contexto da criptografia, o algoritmo ____ é um exemplo de cifragem simétrica, amplamente utilizado para confidencialidade, substituindo o antigo DES.", 
        options: ["RSA", "AES", "SHA-2", "HMAC", "MD5"], 
        answer: 1, 
        disclaimer: "O Advanced Encryption Standard (AES) é a principal e mais robusta cifra de blocos simétrica em uso atual, tendo superado a vulnerabilidade técnica do obsoleto DES." 
    }
];

const banco_eng_soft_ia = [
    { 
        topic: "IA e Modelos Generativos", 
        q: "A combinação entre grandes modelos de linguagem (LLMs) e recuperação de informação viabilizou sistemas mais atualizados, como o RAG. Assinale a correta:", 
        options: [
            "A Engenharia de Prompt modifica os pesos da rede neural do modelo.", 
            "O RAG integra busca de documentos com modelos generativos, ampliando a relevância.", 
            "O uso de RAG impede a atualização em tempo real dos modelos.", 
            "Modelos RAG não são compatíveis com busca vetorial.", 
            "LLMs dependem exclusivamente de fine-tuning para novas informações."
        ], 
        answer: 1, 
        disclaimer: "O conceito de RAG (Retrieval-Augmented Generation) injeta contexto em tempo real na janela de prompt do LLM, melhorando respostas baseadas em dados atualizados sem precisar retreinar a rede." 
    }
];

const banco_infra_bd = [
    { 
        topic: "Modelagem e Banco de Dados", 
        q: "Com relação à Normalização, I. Unificação de tabelas; II. A 1FN exige que todas as colunas tenham apenas valores atômicos; III. A 3FN elimina a maioria das anomalias e é o padrão comum.", 
        options: ["I e II apenas.", "II e III apenas.", "II apenas.", "I, II e III.", "I e III apenas."], 
        answer: 1, 
        disclaimer: "A 1FN foca na atomicidade dos dados (II) e a 3FN é de fato o padrão de mercado normalizado para tabelas transacionais (III). A 'I' está errada porque a definição refere-se à Dependência Funcional, não 'unificação'." 
    }
];

// ---------------------------------------------------------
// 5. MAPEAMENTO OFICIAL DO SIMULADOR (CHAVES EXATAS)
// ---------------------------------------------------------

const mockDB = {
    // Matérias Transversais (Todos)
    "Língua Portuguesa": banco_pt,
    "Matemática e RLM": banco_rlm,
    "Matemática e Raciocínio Lógico": banco_rlm,
    "Legislação MPPE": banco_legis_mppe,
    "Legislação Aplicada ao MPPE": banco_legis_mppe,
    "Informática": banco_info,

    // Matérias Jurídicas (Técnico e Analista Jurídico)
    "Direito Constitucional": banco_const,
    "Direito Administrativo": banco_adm,
    "Direito Civil": banco_civil,
    "Direito Processual Civil": banco_proc_civil,
    "Direito Penal": banco_penal,
    "Direito Processual Penal": banco_proc_penal,

    // Específica (Técnico)
    "Noções de Administração": banco_noc_adm,

    // Específicas (Analista de Sistemas)
    "Governança em TI": banco_gov_ti,
    "Segurança, Risco e Continuidade": banco_seg_ti,
    "Engenharia de Software, DevOps e Ciência de Dados": banco_eng_soft_ia,
    "Infraestrutura e Banco de Dados": banco_infra_bd
};