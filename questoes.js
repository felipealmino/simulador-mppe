// Arquivo: questoes.js
// Banco de Dados Oficial Expandido (Múltipla Escolha + Certo/Errado)

// ---------------------------------------------------------
// 1. DISCIPLINAS COMUNS (USO CRUZADO ENTRE CARGOS)
// ---------------------------------------------------------

const banco_pt = [
    { 
        topic: "Ortografia Oficial", 
        supportText: "",
        q: "Com base nas regras do Novo Acordo Ortográfico da Língua Portuguesa, assinale a alternativa em que o emprego do hífen está totalmente adequado:", 
        options: ["auto-conhecimento e co-reflexão.", "autoavaliação, coexistência e releitura.", "infra-estrutura e auto-estima.", "pré-requisitos e meio-ambiente.", "anti-social e micro-ondas."], 
        answer: 1, 
        disclaimer: "Prefixos terminados em vogal unem-se sem hífen à palavra seguinte se esta começar por consoante diferente de 'r' ou 's' (autoavaliação). O prefixo 'co' aglutina-se em regra (coexistência)." 
    },
    { 
        topic: "Concordância Verbal", 
        supportText: "",
        q: "O verbo indicado entre parênteses deverá flexionar-se numa forma do PLURAL para integrar adequadamente a frase:", 
        options: [
            "Não (poder) mesmo caber aos médicos tentar responder às questões metafísicas que nos afligem.", 
            "Às vezes se (apresentar) para um ser humano aflito questões que ele está longe de poder responder.", 
            "As iniciativas que (tomar), por sua boa vontade, um médico dedicado, nem sempre nos consolam.", 
            "Não se (dever) imaginar que as perguntas que são hoje irrespondíveis o sejam para sempre.", 
            "Mesmo os médicos a quem se (dedicar) todo o respeito pela competência não são oniscientes."
        ], 
        answer: 1, 
        disclaimer: "Na voz passiva sintética, o verbo concorda com o sujeito paciente posposto ('questões'): 'Às vezes se apresentam [...] questões'." 
    },
    { 
        topic: "Correlação Verbal e Concordância", 
        supportText: "",
        q: "Há adequada correlação entre os tempos verbais e pleno atendimento às normas de concordância na frase:", 
        options: [
            "Houvesse no gato e no cachorro outros atributos característicos desses animais, não seria aceitável a analogia que faz o ditado chinês.", 
            "Caso não se compreenda bem as distinções entre prosa e poesia, não seria fácil distinguir entre as alusões que o ditado chinês faz.", 
            "As atribuições em que se empenham o ditado chinês para distinguir entre cachorro e gato dificilmente fossem compreensíveis.", 
            "Se o cachorro encarnasse alguns dos atributos da poesia e o gato alguns da prosa, o ditado chinês poderá ser contestado.", 
            "À medida que fôssemos observando o comportamento do cachorro e do gato, seremos levados a concordar com o que se asseguram nas palavras."
        ], 
        answer: 0, 
        disclaimer: "O verbo 'haver' no sentido de existir é impessoal ('Houvesse') e correlaciona-se perfeitamente com o futuro do pretérito ('seria')." 
    },
    { 
        topic: "Pontuação", 
        supportText: "",
        q: "Está plenamente adequada a pontuação da seguinte frase:", 
        options: [
            "Não é comum note-se bem, que alguém considere a loucura, para além da mera insanidade, vendo nela uma possibilidade criativa embora pouco explorada, da nossa imaginação.", 
            "Não é comum note-se bem que alguém considere, a loucura, para além da mera insanidade: vendo nela uma possibilidade criativa, embora pouco explorada, da nossa imaginação.", 
            "Não é comum, note-se bem, que alguém considere a loucura, para além da mera insanidade, vendo nela, uma possibilidade criativa embora pouco explorada, da nossa imaginação.", 
            "Não é comum: note-se bem que alguém considere a loucura, para além da mera insanidade, vendo nela uma possibilidade criativa embora pouco explorada da nossa imaginação.", 
            "Não é comum, note-se bem, que alguém considere a loucura para além da mera insanidade, vendo nela uma possibilidade criativa, embora pouco explorada, da nossa imaginação."
        ], 
        answer: 4, 
        disclaimer: "A alternativa E isola corretamente as expressões intercaladas ('note-se bem' e 'embora pouco explorada') sem separar o verbo do seu objeto direto." 
    },
    { 
        topic: "Crase", 
        supportText: "",
        q: "Assinale a alternativa em que o emprego do sinal indicativo de crase está em pleno acordo com a norma-padrão:", 
        options: [
            "O promotor dirigiu-se à Vossa Excelência com extremo respeito.", 
            "A sessão extraordinária terá início exatamente às quatorze horas.", 
            "Os autos foram remetidos à uma comarca do interior.", 
            "O servidor passou à analisar os documentos pendentes.", 
            "As testemunhas ficaram frente à frente durante a acareação."
        ], 
        answer: 1, 
        disclaimer: "Usa-se crase na indicação exata de horas ('às quatorze horas'). Não ocorre crase antes de pronomes de tratamento, artigos indefinidos ('uma'), verbos ('analisar') ou palavras repetidas ('frente a frente')." 
    },
    { 
        topic: "Regência Verbal e Nominal", 
        supportText: "",
        q: "Segundo a norma-padrão, a regência verbal e o emprego do pronome relativo estão corretos em:", 
        options: [
            "O cargo o qual o candidato tanto aspira exige dedicação exclusiva.", 
            "A diretriz a que os servidores devem obedecer foi publicada hoje.", 
            "O processo cujo o teor é sigiloso tramita na vara criminal.", 
            "As provas que o promotor se referiu na denúncia são robustas.", 
            "Prefiro mais atuar na área cível do que na esfera administrativa."
        ], 
        answer: 1, 
        disclaimer: "O verbo 'obedecer' é transitivo indireto e rege a preposição 'a' ('obedecer à diretriz' -> 'a diretriz a que devem obedecer')." 
    },
    { 
        topic: "Colocação Pronominal", 
        supportText: "",
        q: "De acordo com as regras de colocação pronominal da norma culta, assinale a frase correta:", 
        options: [
            "Jamais afastar-me-ei dos deveres éticos inerentes à função pública.", 
            "Me entregaram o relatório de auditoria fora do prazo estipulado.", 
            "Quando encerraram-se os debates, o colegiado proferiu a decisão.", 
            "Não se tratando de matéria urgente, o parecer seguirá o fluxo ordinário.", 
            "Os autos tinham extraviado-se antes da remessa ao tribunal."
        ], 
        answer: 3, 
        disclaimer: "O advérbio de negação ('Não') é palavra atrativa e exige a próclise ('Não se tratando'). Não se usa mesóclise com palavra atrativa antes ('Jamais me afastarei'), nem se inicia período com pronome oblíquo átono." 
    },
    { 
        topic: "Vozes do Verbo", 
        type: "vf",
        supportText: "",
        q: "Na frase 'Revisaram-se todos os contratos administrativos do setor', o verbo encontra-se na voz passiva sintética e o termo 'todos os contratos administrativos do setor' exerce a função de sujeito paciente.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O pronome 'se' atua como partícula apassivadora de um verbo transitivo direto ('revisar'), equivalendo a 'Todos os contratos administrativos foram revisados'." 
    },
    { 
        topic: "Conjunções", 
        type: "vf",
        supportText: "",
        q: "No período 'Conquanto houvesse divergência doutrinária, o parecer ministerial foi acolhido integralmente', a conjunção 'Conquanto' introduz uma ideia de conclusão, podendo ser substituída por 'Portanto' sem alteração de sentido.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. 'Conquanto' é uma conjunção subordinativa adverbial CONCESSIVA (equivale a 'embora', 'ainda que'), e não conclusiva." 
    },
];

const banco_rlm = [
    { 
        topic: "Razão e Proporção", 
        supportText: "",
        q: "Dois automóveis, A e B, percorrem a mesma estrada em sentidos opostos, ambos com velocidade constante. Os dois entram em um túnel no mesmo momento. A e B se cruzam após A percorrer 2/5 do comprimento do túnel. Nessa situação, é correto afirmar que a velocidade de B é:", 
        options: ["o dobro da de A.", "1/3 da de A.", "2,5 vezes a de A.", "1,5 vez a de A.", "2/5 da de A."], 
        answer: 3, 
        disclaimer: "Se A percorreu 2/5 do túnel até o cruzamento, B percorreu 3/5 no mesmo tempo. Logo, a velocidade de B é 1,5 vez maior que a de A (3/5 dividido por 2/5 = 1,5)." 
    },
    { 
        topic: "Análise Combinatória", 
        supportText: "",
        q: "Num restaurante você monta sua refeição escolhendo 1 proteína (4 opções), 3 acompanhamentos (8 opções), 1 sobremesa (3 opções) e 1 bebida (3 opções). Quantas refeições diferentes você pode montar?", 
        options: ["360", "2016", "120", "672", "1024"], 
        answer: 1, 
        disclaimer: "Acompanhamentos: Combinação de 8 elementos tomados 3 a 3 = 56. Multiplicando pelas demais opções: 4 * 56 * 3 * 3 = 2016." 
    },
    { 
        topic: "Lógica de Argumentação", 
        supportText: "",
        q: "Suponha que sejam verdadeiras as premissas seguintes:<br>- A maior parte dos cientistas não é constituída por pessoas ricas.<br>- Muitas pessoas que não são ricas se alimentam mal.<br>- Todas as pessoas que se alimentam bem são saudáveis.<br><br>Com base nas premissas dadas, pode-se concluir corretamente que:", 
        options: [
            "Todos os cientistas, devido a seus conhecimentos científicos, se alimentam bem.", 
            "Todas as pessoas ricas se alimentam bem.", 
            "Todo cientista que se alimenta bem é saudável.", 
            "A maior parte das pessoas ricas é saudável.", 
            "Todos os cientistas que se alimentam mal não são saudáveis."
        ], 
        answer: 2, 
        disclaimer: "Se 'TODAS as pessoas que se alimentam bem são saudáveis', qualquer subgrupo de pessoas (como os cientistas) que se alimente bem será necessariamente saudável." 
    },
    { 
        topic: "Porcentagem", 
        supportText: "",
        q: "Sessenta por cento dos funcionários de uma empresa trabalham externamente. Entre os que trabalham internamente, vinte por cento, correspondendo a 12 funcionários, ocupam cargos de chefia. O total de funcionários da empresa é um número entre:", 
        options: ["90 e 100.", "145 e 155.", "120 e 130.", "185 e 195.", "200 e 210."], 
        answer: 1, 
        disclaimer: "40% trabalham internamente. 20% de 40% = 8% do total. Se 8% equivalem a 12 funcionários, 100% equivalem a (12 / 0,08) = 150 funcionários." 
    },
    { 
        topic: "Regra de Três Composta", 
        supportText: "",
        q: "Em uma promotoria, 4 técnicos analisam 120 processos em 5 dias, trabalhando 6 horas por dia. Mantendo o mesmo ritmo, quantos processos serão analisados por 6 técnicos em 4 dias, trabalhando 8 horas por dia?", 
        options: ["160", "180", "192", "210", "240"], 
        answer: 2, 
        disclaimer: "120/x = (4/6) * (5/4) * (6/8) -> 120/x = 120/192 -> x = 192 processos." 
    },
    { 
        topic: "Juros Simples e Compostos", 
        supportText: "",
        q: "Um capital de R$ 2.000,00 é aplicado a juros compostos durante 2 meses, à taxa de 10% ao mês. O montante final e os juros obtidos ao término desse período são, respectivamente:", 
        options: ["R$ 2.400,00 e R$ 400,00.", "R$ 2.420,00 e R$ 420,00.", "R$ 2.440,00 e R$ 440,00.", "R$ 2.200,00 e R$ 200,00.", "R$ 2.500,00 e R$ 500,00."], 
        answer: 1, 
        disclaimer: "M = C * (1 + i)^t -> M = 2000 * (1,10)^2 = 2000 * 1,21 = R$ 2.420,00. Juros = 2420 - 2000 = R$ 420,00." 
    },
    { 
        topic: "Conjuntos Numéricos", 
        supportText: "",
        q: "De um grupo de 80 servidores do MPPE, 50 utilizam o sistema A, 35 utilizam o sistema B e 10 não utilizam nenhum dos dois sistemas. O número de servidores que utilizam simultaneamente os sistemas A e B é:", 
        options: ["10", "15", "20", "25", "30"], 
        answer: 1, 
        disclaimer: "Total que usa pelo menos um sistema = 80 - 10 = 70. Pela fórmula n(A U B) = n(A) + n(B) - n(A ∩ B): 70 = 50 + 35 - x -> x = 85 - 70 = 15." 
    },
    { 
        topic: "Equivalência Lógica", 
        type: "vf",
        supportText: "",
        q: "A proposição condicional 'Se o réu confessou, então a pena será atenuada' é logicamente equivalente à proposição 'Se a pena não foi atenuada, então o réu não confessou'.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Trata-se da equivalência contrapositiva de uma condicional (P -> Q equivale a ~Q -> ~P: inverte-se e nega-se ambas as partes)." 
    },
    { 
        topic: "Negação de Proposições (Leis de De Morgan)", 
        type: "vf",
        supportText: "",
        q: "A negação lógica da proposição composta 'O parecer é favorável E a licitação está regular' é 'O parecer não é favorável E a licitação não está regular'.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Pela Primeira Lei de De Morgan, para negar uma conjunção (E), negam-se as duas partes e troca-se o conectivo 'E' por 'OU': 'O parecer não é favorável OU a licitação não está regular'." 
    },
];

const banco_info = [
    { 
        topic: "Planilhas Eletrônicas (Excel)", 
        supportText: "",
        q: "Um técnico deseja somar em uma planilha do Microsoft Excel 2013, em português, somente os valores contidos nas células A1, C2, B6 e D8. Para isso, poderá utilizar a fórmula:", 
        options: ["SOMA (A1:C2:B6:D8)", "SOMA (A1, C2, B6, D8)", "SUM (A1:C2: B6: D8)", "SOMA (A1:D8)", "SOMA (A1; C2; B6; D8)"], 
        answer: 4, 
        disclaimer: "No Excel em Português-BR, o ponto e vírgula (;) separa células avulsas ('E'), enquanto os dois-pontos (:) definem um intervalo contínuo ('ATÉ')." 
    },
    { 
        topic: "Planilhas Eletrônicas (Calc)", 
        supportText: "",
        q: "No LibreOffice Calc 5.1, para somar na célula B8 os valores do intervalo de A3 a A7, SOMENTE quando os valores correspondentes do intervalo de B3 a B7 forem positivos, utiliza-se a fórmula:", 
        options: ["SE ((B3:B7)\"<0\"; SOMA (A3:A7))", "SOMASE (B3:B7;\">0\"; A3:A7)", "=SE((B3:B7)<0;SOMA(A3:A7))", "SOMASE (A3:A7;\">0\"; B3:B7)", "SOMASE ((A3:A7)>0;B3:B7)"], 
        answer: 1, 
        disclaimer: "A sintaxe da função SOMASE é: SOMASE(intervalo_avaliado ; critério ; intervalo_da_soma)." 
    },
    { 
        topic: "Edição de Textos (Word)", 
        supportText: "",
        q: "Um Advogado criou um documento no Microsoft Word 2013, em português, e deseja gerar um arquivo no formato PDF para levar em um pen drive. No Microsoft Word 2013:", 
        options: [
            "o Advogado conseguirá gerar o arquivo PDF clicando em Arquivo > Salvar Como. Depois, deverá selecionar PDF (*.pdf) no campo de tipo.", 
            "não será possível criar o arquivo PDF porque não há recursos nativos para isso nessa versão.", 
            "o Advogado poderá criar o arquivo PDF clicando em Arquivo > Exportar > Formato PDF.", 
            "só será possível gerar o arquivo se for instalado o plug-in PDF Generator baixado da Microsoft.", 
            "não há recursos para gerar PDF, devendo o Advogado realizar esse trabalho no Wordpad."
        ], 
        answer: 0, 
        disclaimer: "No Word 2013 é possível salvar diretamente em PDF através do caminho Arquivo > Salvar Como, escolhendo o tipo PDF (*.pdf)." 
    },
    { 
        topic: "Segurança da Informação (Malwares)", 
        supportText: "",
        q: "O tipo de código malicioso (malware) que torna inacessíveis os dados armazenados em um equipamento, geralmente usando criptografia, e que exige pagamento de resgate para restabelecer o acesso ao usuário é denominado:", 
        options: ["Spyware.", "Rootkit.", "Ransomware.", "Worm.", "Trojan (Cavalo de Troia)."], 
        answer: 2, 
        disclaimer: "O Ransomware sequestra os dados através de criptografia e cobra resgate (ransom), geralmente em criptomoedas." 
    },
    { 
        topic: "Sistema Operacional (Windows 10)", 
        supportText: "",
        q: "No Microsoft Windows 10, em português, o atalho de teclado utilizado para bloquear rapidamente a sessão do usuário, retornando à tela de login, é:", 
        options: ["Ctrl + Alt + L", "Tecla do logotipo do Windows + L", "Alt + F4", "Tecla do logotipo do Windows + D", "Ctrl + Shift + Esc"], 
        answer: 1, 
        disclaimer: "Win + L (Lock) bloqueia a estação de trabalho imediatamente. Win + D exibe a área de trabalho; Ctrl + Shift + Esc abre o Gerenciador de Tarefas." 
    },
    { 
        topic: "Navegadores e Correio Eletrônico", 
        supportText: "",
        q: "Ao enviar um e-mail corporativo para diversos destinatários utilizando o campo 'Cco' (Cópia Carbono Oculta ou Bcc), ocorre que:", 
        options: [
            "o e-mail é criptografado com chave pública antes do envio.", 
            "os destinatários inseridos em 'Cco' não conseguem visualizar os anexos da mensagem.", 
            "os endereços inseridos em 'Cco' ficam invisíveis para os demais destinatários da mensagem.", 
            "o remetente fica anônimo para todos os destinatários listados em 'Cco'.", 
            "a mensagem é entregue diretamente na caixa de prioridade alta."
        ], 
        answer: 2, 
        disclaimer: "Os destinatários colocados em Cco recebem a mensagem normalmente, mas seus endereços de e-mail não são exibidos para os outros destinatários." 
    },
    { 
        topic: "LibreOffice Writer", 
        type: "vf",
        supportText: "",
        q: "No LibreOffice Writer, o formato de arquivo padrão nativo para salvamento de documentos de texto é o '.odt' (OpenDocument Text).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O Writer utiliza '.odt', o Calc utiliza '.ods' (planilhas) e o Impress utiliza '.odp' (apresentações)." 
    },
    { 
        topic: "Computação em Nuvem e G Suite", 
        type: "vf",
        supportText: "",
        q: "No Google Drive, quando dois usuários editam simultaneamente um mesmo documento no Google Docs, o sistema cria cópias duplicadas do arquivo para evitar conflito de versões.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Google Docs permite colaboração em tempo real no mesmo arquivo, sincronizando as alterações instantaneamente no histórico de versões sem duplicar o documento." 
    },
];

const banco_legis_mppe = [
    { 
        topic: "Lei Orgânica Estadual (LC 12/94)", 
        supportText: "",
        q: "De acordo com a LC 12/1994, o Corregedor Geral do Ministério Público:", 
        options: [
            "será eleito pelo Colégio de Procuradores.", 
            "poderá ser destituído pelo voto de um terço dos membros.", 
            "será assessorado por até quatro Promotores de Justiça.", 
            "será substituído pelo Corregedor Substituto aprovado pelo PGJ.", 
            "será escolhido pelo Conselho Superior do MP, em votação secreta, dentre seus membros titulares."
        ], 
        answer: 4, 
        disclaimer: "Na LC 12/94 (MPPE), o Corregedor-Geral é escolhido pelo Conselho Superior do MP dentre seus membros titulares (diferente da regra geral da LONMP)." 
    },
    { 
        topic: "Lei Orgânica Nacional (8.625/93)", 
        supportText: "",
        q: "José integra, como membro nato, e preside o Colégio de Procuradores de Justiça e o Conselho Superior do MP. De acordo com a Lei 8.625/93, José é o:", 
        options: [
            "Procurador-Geral de Justiça, a quem compete propor ação civil para decretação da perda do cargo de membro vitalício.", 
            "Corregedor-Geral do Ministério Público.", 
            "Ouvidor-Geral do Ministério Público.", 
            "Subprocurador-Geral de Justiça Institucional.", 
            "Decano do Colégio de Procuradores."
        ], 
        answer: 0, 
        disclaimer: "A presidência do Colégio de Procuradores e do CSMP é atribuição legal do Procurador-Geral de Justiça." 
    },
    { 
        topic: "Estatuto da Pessoa com Deficiência (Lei 13.146/15)", 
        supportText: "",
        q: "Marilda faz questão de exercer o seu direito ao voto nas próximas eleições. Porém, ela possui determinada deficiência que a impede de votar sem o auxílio de outra pessoa. Nesse caso, de acordo com a Lei nº 13.146/2015, Marilda:", 
        options: [
            "poderá pedir permissão para que seja auxiliada na votação por pessoa de sua escolha, devendo ser instaladas seções exclusivas para pessoas com deficiência.", 
            "não poderá ser auxiliada na votação por nenhuma pessoa, tendo em vista que o voto é secreto.", 
            "poderá pedir permissão para que seja auxiliada na votação por pessoa de sua escolha, sendo vedada a instalação de seções eleitorais exclusivas para a pessoa com deficiência.", 
            "poderá ser auxiliada na votação por pessoa a ser escolhida pelo Presidente da Mesa da Seção Eleitoral respectiva.", 
            "tem em seu favor a facultatividade do voto, não podendo ser auxiliada na votação por nenhuma outra pessoa."
        ], 
        answer: 2, 
        disclaimer: "O Art. 76, § 1º, IV e § 2º do EPD garante o auxílio por pessoa de sua escolha e veda expressamente a criação de seções eleitorais exclusivas." 
    },
    { 
        topic: "Estatuto da Igualdade Racial (Lei 12.288/10)", 
        supportText: "",
        q: "De acordo com a Lei nº 12.288/2010 (Estatuto da Igualdade Racial), é correto afirmar que:", 
        options: [
            "Os programas de ações afirmativas serão implementados, excepcionalmente e apenas na esfera pública.", 
            "Nos programas de TV, deverá ser adotada a prática de conferir oportunidades de emprego exclusivamente para atores e técnicos negros.", 
            "Serão assegurados à população negra a assistência técnica rural, a simplificação do acesso ao crédito agrícola e o fortalecimento da infraestrutura de logística para a comercialização da produção.", 
            "É assegurada a assistência religiosa aos praticantes de religiões de matrizes africanas internados em hospitais, exceto àqueles submetidos a pena privativa de liberdade.", 
            "A fim de integrar a população negra que vive em áreas urbanas subutilizadas, é assegurado o direito à moradia adequada, que inclui exclusivamente o provimento habitacional."
        ], 
        answer: 2, 
        disclaimer: "Literalidade do Art. 39 da Lei 12.288/2010." 
    },
    { 
        topic: "Quadro de Apoio do MPPE (Lei 12.956/05)", 
        supportText: "",
        q: "Nos termos da Lei Estadual nº 12.956/2005, que estrutura os Órgãos de Apoio Técnico e Administrativo do MPPE, o ingresso nos cargos efetivos de Técnico Ministerial e Analista Ministerial dar-se-á:", 
        options: [
            "No padrão e classe iniciais da carreira, mediante concurso público de provas ou de provas e títulos.", 
            "No último padrão da classe inicial, mediante livre nomeação do Procurador-Geral de Justiça.", 
            "Mediante processo seletivo simplificado, seguido de curso de formação eliminatório de seis meses.", 
            "Exclusivamente por promoção vertical de servidores cedidos pelo Poder Executivo Estadual.", 
            "Mediante indicação do Conselho Superior do Ministério Público, após sabatina pública."
        ], 
        answer: 0, 
        disclaimer: "O ingresso nas carreiras do quadro de apoio técnico-administrativo do MPPE ocorre sempre na classe e padrão iniciais, mediante concurso público de provas ou de provas e títulos." 
    },
    { 
        topic: "Estatuto dos Servidores de PE (Lei 6.123/68)", 
        supportText: "",
        q: "Segundo a Lei Estadual nº 6.123/1968 (Estatuto dos Funcionários Públicos Civis do Estado de Pernambuco), o retorno à atividade do funcionário aposentado por invalidez, quando, por junta médica oficial, forem declarados insubsistentes os motivos da aposentadoria, denomina-se:", 
        options: ["Reintegração.", "Readaptação.", "Reversão.", "Aproveitamento.", "Recondução."], 
        answer: 2, 
        disclaimer: "Reversão é o retorno à atividade do servidor aposentado. Reintegração é o retorno do demitido; Aproveitamento é o retorno do servidor que estava em disponibilidade." 
    },
    { 
        topic: "Estatuto da Pessoa Idosa (Lei 10.741/03)", 
        supportText: "",
        q: "De acordo com o Estatuto da Pessoa Idosa (Lei nº 10.741/2003), a gratuidade nos transportes coletivos públicos urbanos e semiurbanos é assegurada aos maiores de:", 
        options: [
            "60 anos, de forma irrestrita em todo o território nacional.", 
            "65 anos, bastando apresentar qualquer documento pessoal que faça prova de sua idade.", 
            "65 anos, exigindo-se cadastro prévio obrigatório na prefeitura local com renovação semestral.", 
            "70 anos, sendo facultada aos maiores de 60 anos mediante pagamento de meia-tarifa.", 
            "60 anos, desde que comprovem renda inferior a um salário-mínimo."
        ], 
        answer: 1, 
        disclaimer: "Art. 39 da Lei 10.741/03: Aos maiores de 65 anos fica assegurada a gratuidade dos transportes coletivos públicos urbanos e semiurbanos, bastando apresentar qualquer documento pessoal que comprove a idade." 
    },
    { 
        topic: "Garantias dos Membros do MP (Lei 8.625/93)", 
        type: "vf",
        supportText: "",
        q: "De acordo com a Lei Orgânica Nacional do Ministério Público (Lei nº 8.625/93), a vitaliciedade é garantida aos membros do Ministério Público logo na data da posse, impedindo sua perda do cargo senão por sentença judicial transitada em julgado.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. A garantia da vitaliciedade só é adquirida pelos membros do Ministério Público após 2 (dois) anos de efetivo exercício (estágio probatório), e não na data da posse." 
    },
    { 
        topic: "Órgãos da Administração do MPPE (LC 12/94)", 
        type: "vf",
        supportText: "",
        q: "Nos termos da Lei Complementar Estadual nº 12/1994, as Promotorias de Justiça e os Promotores de Justiça integram os órgãos de execução do Ministério Público de Pernambuco.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. As Promotorias de Justiça são órgãos de Administração, enquanto os Promotores de Justiça, o PGJ, o CSMP e os Procuradores de Justiça figuram também entre os órgãos de execução." 
    },
];

// ---------------------------------------------------------
// 2. DISCIPLINAS JURÍDICAS (TÉCNICO E ANALISTA JURÍDICO)
// ---------------------------------------------------------

const banco_const = [
    { 
        topic: "Direitos e Garantias Fundamentais", 
        supportText: "",
        q: "De acordo com o que estabelece a Constituição Federal acerca dos Direitos e Garantias Fundamentais:", 
        options: [
            "a prática de racismo constitui crime inafiançável e imprescritível, sujeito à pena de detenção.", 
            "as associações somente poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial transitada em julgado.", 
            "no caso de iminente perigo público, a autoridade competente poderá usar de propriedade particular, assegurada ao proprietário indenização ulterior, se houver dano.", 
            "é assegurada a proteção às participações individuais em obras coletivas, exceto nas atividades desportivas.", 
            "são gratuitas as ações de habeas corpus, habeas data e mandado de segurança."
        ], 
        answer: 2, 
        disclaimer: "Art. 5º, XXV da CF (Requisição administrativa). Racismo é reclusão; trânsito em julgado só se exige para dissolução de associação; mandado de segurança não é gratuito." 
    },
    { 
        topic: "Direitos Sociais", 
        supportText: "",
        q: "É direito dos trabalhadores urbanos e rurais, assegurado na Constituição Federal, além de outros que visem à melhoria de sua condição social:", 
        options: [
            "a remuneração do serviço extraordinário superior, no mínimo, em sessenta por cento à do normal.", 
            "a irredutibilidade do salário, salvo o disposto em convenção coletiva ou acordo individual de trabalho.", 
            "a jornada de quatro horas para o trabalho realizado em turnos ininterruptos de revezamento, salvo negociação coletiva.", 
            "a proibição de distinção entre trabalho manual, técnico e intelectual ou entre os profissionais respectivos.", 
            "o seguro contra acidentes de trabalho, a cargo do Fundo de Amparo ao Trabalhador."
        ], 
        answer: 3, 
        disclaimer: "Literalidade do Art. 7º, XXXII da CF." 
    },
    { 
        topic: "Controle de Constitucionalidade", 
        supportText: "",
        q: "Considerado o sistema de controle de constitucionalidade no direito brasileiro, à luz das normas constitucionais e da jurisprudência do STF:", 
        options: [
            "é incabível a concessão de medida cautelar em Ação Direta de Inconstitucionalidade por omissão.", 
            "a decisão nas ações de controle concentrado somente será tomada se presentes na sessão pelo menos seis Ministros.", 
            "proclamada a constitucionalidade, julgar-se-á procedente a ação direta ou improcedente eventual ação declaratória de constitucionalidade.", 
            "viola a cláusula de reserva de plenário a decisão de órgão fracionário de tribunal que, embora não declare expressamente a inconstitucionalidade de lei ou ato normativo do poder público, afasta sua incidência, no todo ou em parte.", 
            "ao declarar a inconstitucionalidade, o STF, por maioria absoluta de seus membros, poderá restringir os efeitos daquela declaração."
        ], 
        answer: 3, 
        disclaimer: "Literalidade da Súmula Vinculante nº 10 do STF (Cláusula de Reserva de Plenário - Art. 97 da CF). A modulação de efeitos na alternativa E estaria errada por exigir 2/3 dos membros, e não maioria absoluta." 
    },
    { 
        topic: "Processo Legislativo", 
        supportText: "",
        q: "À luz das regras de processo legislativo atinentes à forma de alteração do texto constitucional vigente:", 
        options: [
            "a Constituição Federal não poderá ser emendada na vigência de intervenção federal e estadual, de estado de defesa ou de estado de sítio.", 
            "a CF poderá ser emendada mediante proposta de metade dos membros da Câmara ou do Senado.", 
            "matéria de proposta de emenda rejeitada não pode ser objeto de nova proposta na mesma sessão legislativa.", 
            "emenda à Constituição será promulgada pelo Presidente da República.", 
            "proposta de emenda será discutida e votada em cada Casa em dois turnos, por maioria absoluta."
        ], 
        answer: 2, 
        disclaimer: "Art. 60, § 5º da CF: Matéria constante de proposta de emenda rejeitada ou havida por prejudicada não pode ser objeto de nova proposta na mesma sessão legislativa." 
    },
    { 
        topic: "Nacionalidade", 
        supportText: "",
        q: "Segundo a Constituição Federal, são privativos de brasileiro NATO os cargos de:", 
        options: [
            "Presidente da República, Senador e Ministro do STF.", 
            "Oficial das Forças Armadas, Ministro de Estado da Defesa e Diplomata.", 
            "Procurador-Geral da República, Deputado Federal e Vice-Presidente da República.", 
            "Presidente do Banco Central, Governador de Estado e Ministro do STJ.", 
            "Carreira diplomática, Oficial das Polícias Militares e Presidente da Câmara dos Deputados."
        ], 
        answer: 1, 
        disclaimer: "Pelo Art. 12, § 3º da CF, os cargos privativos de nato são: Presidente e Vice da República, Presidente da Câmara, Presidente do Senado, Ministro do STF, Carreira Diplomática, Oficial das Forças Armadas e Ministro de Estado da Defesa (MP3.COM)." 
    },
    { 
        topic: "Funções Essenciais à Justiça (Ministério Público)", 
        supportText: "",
        q: "Constituem princípios institucionais do Ministério Público expressamente previstos no art. 127, § 1º, da Constituição Federal:", 
        options: [
            "A vitaliciedade, a inamovibilidade e a irredutibilidade de subsídios.", 
            "A unidade, a indivisibilidade e a independência funcional.", 
            "A moralidade, a impessoalidade e a eficiência processual.", 
            "A hierarquia administrativa, a subordinação ao Judiciário e a unidade.", 
            "O promotor natural, a inafastabilidade e a publicidade restrita."
        ], 
        answer: 1, 
        disclaimer: "Os princípios institucionais do MP são a unidade, a indivisibilidade e a independência funcional. Vitaliciedade, inamovibilidade e irredutibilidade de subsídios são garantias dos membros." 
    },
    { 
        topic: "Poder Judiciário", 
        supportText: "",
        q: "Nos termos do art. 94 da Constituição Federal (regra do Quinto Constitucional), um quinto dos lugares dos Tribunais Regionais Federais e dos Tribunais dos Estados será composto de:", 
        options: [
            "Juízes de direito de entrância final e promotores eleitorais com mais de cinco anos de carreira.", 
            "Membros do Ministério Público, com mais de dez anos de carreira, e de advogados de notório saber jurídico e de reputação ilibada, com mais de dez anos de efetiva atividade profissional.", 
            "Defensores públicos, procuradores estaduais e delegados de polícia com mais de quinze anos de atividade.", 
            "Cidadãos indicados em lista sêxtupla pelas Assembleias Legislativas e nomeados pelo Presidente do Tribunal.", 
            "Advogados e membros do Ministério Público eleitos por voto direto dos magistrados de primeira instância."
        ], 
        answer: 1, 
        disclaimer: "O Quinto Constitucional (Art. 94, CF) destina 1/5 das vagas dos TRFs, TJs, TST e TRTs a membros do MP (com mais de 10 anos de carreira) e advogados (com mais de 10 anos de efetiva atividade profissional), indicados em lista sêxtupla." 
    },
    { 
        topic: "Direitos Políticos", 
        type: "vf",
        supportText: "",
        q: "A Constituição Federal veda a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de cancelamento da naturalização por sentença transitada em julgado, incapacidade civil absoluta, condenação criminal transitada em julgado (enquanto durarem seus efeitos), recusa de cumprir obrigação a todos imposta ou prestação alternativa, e improbidade administrativa.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Trata-se da literalidade do Art. 15 da Constituição Federal." 
    },
    { 
        topic: "Vedações ao Ministério Público", 
        type: "vf",
        supportText: "",
        q: "Aos membros do Ministério Público é permitido exercer a advocacia privada em causas que não envolvam interesse direto da Fazenda Pública, bem como exercer atividade político-partidária.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Art. 128, § 5º, II, 'b' e 'e' da CF veda expressamente aos membros do MP o exercício da advocacia e o exercício de atividade político-partidária, sem exceções." 
    },
];

const banco_adm = [
    { 
        topic: "Organização Administrativa", 
        supportText: "",
        q: "Uma sociedade de economia mista prestadora de serviços públicos de abastecimento de água à população:", 
        options: [
            "integra a Administração pública indireta, submetendo-se a regime jurídico de direito privado em suas relações contratuais, o que impede a submissão a princípios da Administração.", 
            "não se submete à necessidade de realização de licitações para contratação de serviços.", 
            "responde civilmente pelos danos causados por seus servidores sob a modalidade subjetiva.", 
            "tem regime de bens integralmente aderente ao regime jurídico de direito público.", 
            "submete-se à responsabilidade extracontratual nos mesmos moldes da Administração direta, respondendo objetivamente pelos danos causados por seus agentes."
        ], 
        answer: 4, 
        disclaimer: "Pessoas jurídicas de direito privado prestadoras de serviço público respondem objetivamente pelos danos que seus agentes causarem a terceiros (Art. 37, § 6º, CF)." 
    },
    { 
        topic: "Poderes Administrativos", 
        supportText: "",
        q: "A edição de um decreto municipal que, pretendendo incentivar a reciclagem de lixo, estabelece a concessão de prêmios aos moradores e estabelece multas para aqueles que não o fizerem:", 
        options: [
            "configura expressão do poder normativo do ente público.", 
            "excede o poder normativo do município, que pode se prestar apenas a disciplinar a operacionalização de leis.", 
            "se insere no poder de polícia do ente, que pode instituir e aplicar multas.", 
            "configura excesso de poder normativo, já que extrapola os limites materiais admitidos para decretos autônomos, ingressando em matéria de lei.", 
            "pode ser convalidado se restar comprovado que o interesse público está presente."
        ], 
        answer: 3, 
        disclaimer: "Decretos não podem criar obrigações primárias ou sanções (multas) sem previsão legal anterior." 
    },
    { 
        topic: "Convênios Administrativos", 
        supportText: "",
        q: "A celebração, pela Administração pública, de convênios que prevejam repasse de recursos:", 
        options: [
            "é instrumento exclusivo para entes da Administração pública direta e indireta.", 
            "depende da finalidade pública do emprego dos recursos, que podem se destinar à remuneração dos servidores.", 
            "depende da inclusão, como anexo do instrumento, de plano de trabalho detalhado sobre a finalidade do emprego dos recursos.", 
            "é instrumento hábil a disciplinar atividades de interesse público com pretensão remuneratória.", 
            "exige a participação do ente federado cuja estrutura administrativa integram os convenentes."
        ], 
        answer: 2, 
        disclaimer: "A celebração de convênio exige a aprovação prévia de Plano de Trabalho detalhado." 
    },
    { 
        topic: "Princípios da Administração Pública", 
        supportText: "",
        q: "A proibição de que constem nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores públicos em publicidade de atos, programas e obras dos órgãos públicos (Art. 37, § 1º, CF) decorre diretamente do princípio da:", 
        options: ["Eficiência.", "Autotutela.", "Impessoalidade.", "Continuidade.", "Segurança Jurídica."], 
        answer: 2, 
        disclaimer: "A vedação à promoção pessoal de agentes públicos em campanhas institucionais é desdobramento clássico do princípio da Impessoalidade." 
    },
    { 
        topic: "Atos Administrativos", 
        supportText: "",
        q: "Constituem os cinco elementos (ou requisitos de validade) do ato administrativo segundo a doutrina clássica e a Lei da Ação Popular:", 
        options: [
            "Competência, finalidade, forma, motivo e objeto.", 
            "Presunção de legitimidade, autoexecutoriedade, tipicidade, imperatividade e forma.", 
            "Vontade, agente capaz, objeto lícito, forma prescrita e publicidade.", 
            "Discricionariedade, vinculação, mérito, oportunidade e conveniência.", 
            "Eficiência, moralidade, motivação, finalidade e exequibilidade."
        ], 
        answer: 0, 
        disclaimer: "Os 5 requisitos/elementos do ato administrativo são: Competência, Finalidade, Forma, Motivo e Objeto (CO-FI-FO-MO-OB). Presunção de legitimidade, autoexecutoriedade, tipicidade e imperatividade são atributos (PATI)." 
    },
    { 
        topic: "Improbidade Administrativa (Lei 8.429/92)", 
        supportText: "",
        q: "Com base na Lei nº 8.429/1992 (com a redação dada pela Lei nº 14.230/2021), para a configuração de qualquer ato de improbidade administrativa (enriquecimento ilícito, lesão ao erário ou violação aos princípios), exige-se:", 
        options: [
            "Conduta dolosa ou culposa do agente público, bastando a culpa leve nos casos de dano ao erário.", 
            "Exclusivamente a conduta dolosa, considerada como a vontade livre e consciente de alcançar o resultado ilícito tipificado na lei, não bastando a voluntariedade do agente.", 
            "Responsabilidade objetiva do ordenador de despesas sempre que houver perda patrimonial.", 
            "Mero exercício da função pública, presumindo-se a má-fé em caso de ilegalidade formal.", 
            "Conduta culposa grave nas hipóteses de frustração da licitude de concurso público."
        ], 
        answer: 1, 
        disclaimer: "A reforma da Lei de Improbidade (Lei 14.230/2021) extinguiu a modalidade culposa. Hoje, todo ato de improbidade exige dolo específico (vontade livre e consciente de alcançar o resultado ilícito)." 
    },
    { 
        topic: "Serviços Públicos e Concessões (Lei 8.987/95)", 
        type: "vf",
        supportText: "",
        q: "Segundo a Lei nº 8.987/1995, a encampação consiste na retomada do serviço pelo poder concedente durante o prazo da concessão, por motivo de interesse público, mediante lei autorizativa específica e após prévio pagamento da indenização.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Encampação é a extinção da concessão por razões de interesse público (exige lei autorizativa + indenização prévia). Já a extinção por inadimplemento/falha da concessionária chama-se Caducidade." 
    },
    { 
        topic: "Controle da Administração (Autotutela)", 
        type: "vf",
        supportText: "",
        q: "Pelo princípio da autotutela, a Administração Pública pode anular seus próprios atos por motivo de conveniência ou oportunidade, e revogá-los quando eivados de vícios que os tornem ilegais.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Os conceitos foram invertidos: a Administração ANULA os atos ilegais (com efeito ex tunc) e REVOGA os atos válidos por motivo de conveniência ou oportunidade (com efeito ex nunc), conforme a Súmula 473 do STF." 
    },
];

const banco_civil = [
    { 
        topic: "Pessoas Naturais (Domicílio)", 
        supportText: "",
        q: "Luísa possui residências, com ânimo definitivo, nas cidades de São Paulo, Rio de Janeiro e Belo Horizonte, nas quais alternadamente vive. Luísa possui domicílio em:", 
        options: ["São Paulo, apenas.", "Rio de Janeiro, apenas.", "Belo Horizonte, apenas.", "São Paulo, Rio de Janeiro e Belo Horizonte.", "São Paulo e Belo Horizonte, apenas."], 
        answer: 3, 
        disclaimer: "Se a pessoa natural tiver diversas residências onde alternadamente viva, considerar-se-á domicílio seu qualquer delas (Art. 71, CC)." 
    },
    { 
        topic: "Pessoas Jurídicas (Fundações)", 
        supportText: "",
        q: "Para instituir uma fundação, Ricardo deverá promover dotação especial de bens livres. De acordo com o Código Civil, o ato de criação poderá ser realizado:", 
        options: ["por instrumento particular apenas.", "somente por escritura pública.", "por contrato social em junta comercial.", "somente por escritura pública ou testamento.", "exclusivamente por testamento particular."], 
        answer: 3, 
        disclaimer: "Para criar uma fundação, o seu instituidor fará, por escritura pública ou testamento, dotação especial de bens livres (Art. 62, CC)." 
    },
    { 
        topic: "Fatos Jurídicos (Estado de Necessidade)", 
        supportText: "",
        q: "Leandro, na condução de sua motocicleta, para não causar mal maior, decide deliberadamente jogá-la contra o automóvel de Roberto, provocando-lhe dano, evitando, assim, o atropelamento de Paulo. Nesse caso, Leandro terá praticado ato:", 
        options: [
            "ilícito e injustificável em relação a Roberto, que nada tem a ver com a imprudência de Paulo.", 
            "lícito, desde que as circunstâncias o tornassem absolutamente necessário, não excedendo os limites do indispensável para evitar o atropelamento de Paulo.", 
            "ilícito, porém justificável e legítimo, ainda que houvesse outro meio menos gravoso para evitar o atropelamento de Paulo.", 
            "lícito, ainda que houvesse outro meio menos gravoso para evitar o atropelamento de Paulo.", 
            "que não se qualifica como lícito ou ilícito, ante a excepcionalidade da situação de perigo iminente provocada por terceiro."
        ], 
        answer: 1, 
        disclaimer: "Art. 188, II e parágrafo único do CC: O ato praticado em estado de necessidade é LÍCITO, desde que absolutamente necessário e sem exceder os limites do indispensável (embora gere dever de indenizar o terceiro inocente, cabendo ação regressiva)." 
    },
    { 
        topic: "Capacidade e Curatela", 
        supportText: "",
        q: "De acordo com a atual redação do Código Civil, estão sujeitos à curatela:", 
        options: [
            "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os ébrios habituais e os viciados em tóxico, os deficientes mentais; e os deficientes visuais.", 
            "aqueles que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento para os atos da vida civil; e os filhos menores de dezoito anos.", 
            "aqueles que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento para os atos da vida civil, desde que não se trate de fato transitório.", 
            "os excepcionais sem completo desenvolvimento mental; os surdos, ainda que possam exprimir sua vontade; e os pródigos.", 
            "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os ébrios habituais e os viciados em tóxico; e os pródigos."
        ], 
        answer: 4, 
        disclaimer: "Art. 1.767 do Código Civil (após o Estatuto da Pessoa com Deficiência)." 
    },
    { 
        topic: "LINDB (Vigência das Leis)", 
        supportText: "",
        q: "De acordo com a Lei de Introdução às Normas do Direito Brasileiro (Decreto-Lei nº 4.657/1942), salvo disposição contrária, a lei começa a vigorar em todo o país:", 
        options: [
            "Na data exata de sua publicação no Diário Oficial da União.", 
            "Trinta dias depois de oficialmente publicada, no país, e noventa dias no estrangeiro.", 
            "Quarenta e cinco dias depois de oficialmente publicada, no país, e três meses depois de oficialmente publicada, nos Estados estrangeiros, quando admitida.", 
            "Sessenta dias após a sanção presidencial.", 
            "No primeiro dia útil do mês subsequente à sua promulgação."
        ], 
        answer: 2, 
        disclaimer: "Art. 1º, caput e § 1º da LINDB: No silêncio da lei, a vacatio legis é de 45 dias no Brasil e de 3 meses no exterior." 
    },
    { 
        topic: "Defeitos do Negócio Jurídico", 
        supportText: "",
        q: "Configura-se o vício do negócio jurídico denominado LESÃO quando uma pessoa:", 
        options: [
            "assume obrigação excessivamente onerosa, sob premente necessidade, ou por inexperiência, se obrigando a prestação manifestamente desproporcional ao valor da prestação oposta.", 
            "premente da necessidade de salvar-se, ou a pessoa de sua família, de grave dano conhecido pela outra parte, assume obrigação excessivamente onerosa.", 
            "pratica ato de transmissão gratuita de bens ou remissão de dívida que reduz o devedor à insolvência em prejuízo de credores quirografários.", 
            "celebra negócio jurídico que aparentava conferir ou transmitir direitos a pessoas diversas daquelas às quais realmente se conferem.", 
            "manifesta vontade de forma viciada por coação física irresistível exercida por terceiro estranho ao negócio."
        ], 
        answer: 0, 
        disclaimer: "A alternativa A define a Lesão (Art. 157, CC: premente necessidade ou inexperiência + prestação desproporcional). A alternativa B define o Estado de Perigo (Art. 156, CC)." 
    },
    { 
        topic: "Responsabilidade Civil", 
        supportText: "",
        q: "Segundo o Código Civil, o empregador ou comitente responde civilmente pelos atos praticados por seus empregados, serviçais e prepostos, no exercício do trabalho que lhes competir, ou em razão dele:", 
        options: [
            "Apenas se ficar comprovada a culpa in eligendo ou in vigilando do empregador.", 
            "De forma objetiva, independentemente de culpa do empregador.", 
            "Subsidiariamente, somente se o empregado não possuir patrimônio suficiente para arcar com o dano.", 
            "Apenas quando o ato ilícito do empregado configurar simultaneamente crime doloso.", 
            "Até o limite do valor equivalente a doze salários contratuais do preposto."
        ], 
        answer: 1, 
        disclaimer: "Art. 932, III c/c Art. 933 do CC: A responsabilidade do empregador pelos atos de seus prepostos (desde que haja culpa do preposto) independe de culpa do empregador (é objetiva)." 
    },
    { 
        topic: "Prescrição e Decadência", 
        type: "vf",
        supportText: "",
        q: "Segundo o Código Civil, os prazos de prescrição podem ser alterados por acordo das partes, desde que o negócio jurídico verse sobre direitos patrimoniais disponíveis e ambas as partes sejam maiores e capazes.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Conforme o Art. 192 do Código Civil, os prazos de prescrição NÃO podem ser alterados por acordo das partes (são matéria de ordem pública)." 
    },
    { 
        topic: "Negócio Jurídico (Simulação)", 
        type: "vf",
        supportText: "",
        q: "No Código Civil de 2002, o negócio jurídico simulado é considerado NULO (causa de nulidade absoluta), mas subsistirá o que se dissimulou, se válido for na substância e na forma.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Literalidade do Art. 167 do Código Civil. Diferente dos vícios sociais (erro, dolo, coação, estado de perigo, lesão e fraude contra credores, que geram anulabilidade), a simulação gera nulidade absoluta." 
    },
];

const banco_proc_civil = [
    { 
        topic: "Litigância de Má-Fé", 
        supportText: "",
        q: "A parte que incorrer em litigância de má-fé será condenada pelo juiz ao pagamento de multa:", 
        options: [
            "correspondente a 1% do valor corrigido da causa, podendo ser fixada em até 100 vezes o valor do salário-mínimo quando o valor da causa for irrisório.", 
            "que não poderá ser superior a 1% do valor corrigido da causa, podendo ser fixada em até 10 vezes o valor do salário-mínimo quando inestimável.", 
            "que não poderá ser superior a 1% do valor corrigido da causa, podendo ser fixada em até 100 vezes o valor do salário-mínimo quando inestimável.", 
            "que deverá ser superior a 1% e inferior a 10% do valor corrigido da causa, podendo ser fixada em até 10 vezes o valor do salário-mínimo quando o valor da causa for irrisório ou inestimável.", 
            "que deverá ser superior a 1% e inferior a 10% do valor corrigido da causa, podendo ser fixada em até 100 vezes o valor do salário-mínimo."
        ], 
        answer: 3, 
        disclaimer: "Art. 81, caput e § 2º do CPC: multa superior a 1% e inferior a 10% do valor corrigido da causa (ou até 10 salários-mínimos se o valor for irrisório/inestimável)." 
    },
    { 
        topic: "Sucessão Processual", 
        supportText: "",
        q: "Diogo ajuizou ação de cobrança contra Paulo, vindo a falecer no curso do processo. Não ajuizada ação de habilitação, ao tomar conhecimento da morte do autor, o juiz deverá:", 
        options: [
            "extinguir desde logo o processo sem resolução do mérito.", 
            "extinguir desde logo o processo com resolução do mérito.", 
            "suspender o processo e marcar prazo para habilitação, sob pena de extinção sem resolução do mérito.", 
            "suspender o processo e determinar a intimação do espólio ou sucessores para promover habilitação sob pena de extinção com resolução de mérito.", 
            "suspender o processo e determinar a intimação do espólio ou sucessores para promover habilitação sob pena de extinção sem resolução de mérito."
        ], 
        answer: 4, 
        disclaimer: "Art. 313, § 2º, II, CPC: suspende-se o processo e intima-se o espólio/sucessores para habilitação, sob pena de extinção sem resolução de mérito." 
    },
    { 
        topic: "Ministério Público no CPC", 
        supportText: "",
        q: "Nos termos do Código de Processo Civil (Art. 178 e 180), quando o Ministério Público atua no processo como fiscal da ordem jurídica (custos legis):", 
        options: [
            "Gozará de prazo simples para manifestar-se nos autos, que terá início a partir da publicação no Diário da Justiça.", 
            "Terá vista dos autos depois das partes, sendo intimado de todos os atos do processo, e gozará de prazo em dobro para manifestar-se, contado de sua intimação pessoal.", 
            "Não terá legitimidade para recorrer das decisões nas quais as partes tenham transigido.", 
            "Deverá intervir obrigatoriamente em todas as ações em que figure sociedade de economia mista.", 
            "Responderá civil e regressivamente mesmo quando agir no exercício regular de suas funções sem dolo ou fraude."
        ], 
        answer: 1, 
        disclaimer: "Art. 179, I e Art. 180 do CPC: O MP como fiscal da ordem jurídica tem vista depois das partes, é intimado pessoalmente e goza de prazo em dobro." 
    },
    { 
        topic: "Tutela Provisória", 
        supportText: "",
        q: "A tutela provisória de urgência, de natureza antecipada, requerida em caráter antecedente, torna-se estável se da decisão que a conceder não for interposto o respectivo recurso. Nesse caso, o direito de rever, reformar ou invalidar a tutela estabilizada extingue-se após o prazo de:", 
        options: [
            "15 dias úteis, contados da intimação do réu.", 
            "90 dias, contados da efetivação da medida liminar.", 
            "1 ano, contado do trânsito em julgado formal da decisão interlocutória.", 
            "2 anos, contados da ciência da decisão que extinguiu o processo.", 
            "5 anos, por se tratar de prazo prescricional geral."
        ], 
        answer: 3, 
        disclaimer: "Art. 304, § 5º do CPC: O direito de rever, reformar ou invalidar a tutela antecipada estabilizada extingue-se após 2 (dois) anos, contados da ciência da decisão que extinguiu o processo." 
    },
    { 
        topic: "Ação Civil Pública (Lei 7.347/85)", 
        supportText: "",
        q: "De acordo com a Lei nº 7.347/1985 (Lei da Ação Civil Pública), caso o órgão do Ministério Público, esgotadas todas as diligências, se convença da inexistência de fundamento para a propositura da ação civil:", 
        options: [
            "Submeterá os autos do inquérito civil imediatamente ao juiz de direito da comarca para homologação do arquivamento.", 
            "Promoverá o arquivamento dos autos do inquérito civil ou das peças informativas, fazendo-o fundamentadamente, e remeterá os autos, no prazo de 3 dias, ao Conselho Superior do Ministério Público.", 
            "Determinará a destruição das peças de informação para preservar a imagem do investigado.", 
            "Remeterá o procedimento à Defensoria Pública para que esta assuma a titularidade exclusiva da investigação.", 
            "Encaminhará o pedido de arquivamento ao Procurador-Geral da República, independentemente de se tratar de MP Estadual."
        ], 
        answer: 1, 
        disclaimer: "Art. 9º, caput e § 1º da Lei 7.347/85: Diferente do inquérito policial, o arquivamento do Inquérito Civil é feito pelo próprio Promotor e submetido a reexame necessário pelo Conselho Superior do Ministério Público (CSMP) em 3 dias." 
    },
    { 
        topic: "Prazos Processuais e Recursos", 
        type: "vf",
        supportText: "",
        q: "No Código de Processo Civil de 2015, todos os recursos possuem prazo unificado de 15 (quinze) dias úteis para interposição, à exceção dos Embargos de Declaração, cujo prazo é de 5 (cinco) dias úteis.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Conforme o Art. 1.003, § 5º e Art. 1.023 do CPC, todos os recursos têm prazo de 15 dias úteis, exceto os embargos de declaração, opostos em 5 dias úteis." 
    },
    { 
        topic: "Jurisdição e Ação", 
        type: "vf",
        supportText: "",
        q: "Para postular em juízo é necessário ter legitimidade, interesse processual e possibilidade jurídica do pedido, sendo esta última mantida pelo CPC/2015 como condição autônoma da ação que gera extinção sem resolução de mérito.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O CPC/2015 (Art. 17) elenca apenas duas condições da ação: interesse e legitimidade. A possibilidade jurídica do pedido passou a integrar o exame de mérito." 
    },
];

const banco_penal = [
    { 
        topic: "Crimes contra a Adm. Pública (Concussão)", 
        supportText: "",
        q: "Gonçalo, funcionário público, em razão da função, exige para si vantagem indevida, não chegando, entretanto, a recebê-la. Tal conduta caracteriza o crime de:", 
        options: ["corrupção passiva consumada.", "tentativa de corrupção ativa.", "tentativa de prevaricação.", "concussão consumada.", "peculato consumado."], 
        answer: 3, 
        disclaimer: "O verbo 'exigir' caracteriza a Concussão (Art. 316, CP), que é crime formal e consuma-se no momento da exigência, independentemente do recebimento da vantagem." 
    },
    { 
        topic: "Crimes contra a Pessoa", 
        supportText: "",
        q: "A pena no homicídio culposo é aumentada de 1/3: I. se resulta de inobservância de regra técnica; II. se deixa de prestar socorro; III. se foge para evitar prisão em flagrante; IV. vítima maior de 60 anos.", 
        options: ["I, II e IV.", "II, III e IV.", "I, II e III.", "II, III e V.", "I, III e V."], 
        answer: 2, 
        disclaimer: "Art. 121, § 4º do CP: A idade da vítima (menor de 14 ou maior de 60) é causa de aumento apenas no homicídio DOLOSO." 
    },
    { 
        topic: "Aplicação da Lei Penal", 
        supportText: "",
        q: "No tocante ao tempo do crime e ao lugar do crime, o Código Penal Brasileiro adota, respectivamente, as teorias:", 
        options: [
            "Da atividade e da ubiquidade (ou mista).", 
            "Do resultado e da atividade.", 
            "Da ubiquidade e da atividade.", 
            "Da atividade e do resultado.", 
            "Mista e da intenção."
        ], 
        answer: 0, 
        disclaimer: "Mnemônico clássico 'LUTA': Lugar do crime = Ubiquidade (Art. 6º, CP); Tempo do crime = Atividade (Art. 4º, CP)." 
    },
    { 
        topic: "Crimes contra a Adm. Pública (Peculato)", 
        supportText: "",
        q: "No crime de peculato culposo (Art. 312, § 2º e § 3º do Código Penal), se o funcionário público repara o dano ANTES da sentença irrecorrível:", 
        options: [
            "Reduz-se de metade a pena imposta.", 
            "Extingue-se a punibilidade; se a reparação é posterior à sentença irrecorrível, reduz-se de metade a pena imposta.", 
            "Configura-se arrependimento posterior, reduzindo-se a pena de um a dois terços.", 
            "O crime é desclassificado para mera infração disciplinar.", 
            "Não há efeito penal, pois o crime contra a administração pública não admite composição do dano."
        ], 
        answer: 1, 
        disclaimer: "Art. 312, § 3º do CP: No peculato culposo, a reparação do dano antes do trânsito em julgado EXTINGUE A PUNIBILIDADE; se posterior ao trânsito em julgado, reduz a pena pela metade." 
    },
    { 
        topic: "Crimes contra a Fé Pública", 
        supportText: "",
        q: "O agente que omite, em documento público ou particular, declaração que dele devia constar, ou nele faz inserir declaração falsa ou diversa da que devia ser escrita, com o fim de prejudicar direito, criar obrigação ou alterar a verdade sobre fato juridicamente relevante, mantendo o documento materialmente verdadeiro, pratica o crime de:", 
        options: [
            "Falsificação de documento público.", 
            "Falsidade ideológica.", 
            "Certidão ou atestado ideologicamente falso.", 
            "Supressão de documento.", 
            "Falsa identidade."
        ], 
        answer: 1, 
        disclaimer: "Na Falsidade Ideológica (Art. 299, CP), a forma do documento é verdadeira, mas o seu conteúdo (a ideia/declaração nele inserida) é falso." 
    },
    { 
        topic: "Imputabilidade Penal", 
        type: "vf",
        supportText: "",
        q: "Nos termos do Código Penal, a embriaguez voluntária ou culposa, pelo álcool ou substância de efeitos análogos, exclui a imputabilidade penal quando o agente, ao tempo da ação, estava inteiramente incapaz de entender o caráter ilícito do fato.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Pelo Art. 28, II do CP (teoria da actio libera in causa), a embriaguez voluntária ou culposa NÃO exclui a imputabilidade penal. Apenas a embriaguez completa proveniente de caso fortuito ou força maior isenta de pena." 
    },
    { 
        topic: "Concurso de Pessoas", 
        type: "vf",
        supportText: "",
        q: "Segundo o art. 30 do Código Penal, não se comunicam as circunstâncias e as condições de caráter pessoal, salvo quando elementares do crime (como a condição de funcionário público no crime de peculato).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. As condições pessoais que sejam elementares do tipo penal comunicam-se ao particular coautor ou partícipe, desde que este tenha conhecimento dessa condição." 
    },
];

const banco_proc_penal = [
    { 
        topic: "Princípios Fundamentais", 
        supportText: "",
        q: "O princípio do Direito Processual Penal que impede a criação de tribunais de exceção refere-se ao princípio:", 
        options: ["do contraditório.", "da verdade real.", "da oficiosidade.", "do juiz natural.", "da indisponibilidade."], 
        answer: 3, 
        disclaimer: "O Princípio do Juiz Natural (Art. 5º, XXXVII e LIII, CF) veda juízos ou tribunais de exceção e garante o julgamento pela autoridade competente." 
    },
    { 
        topic: "Sentença", 
        supportText: "",
        q: "À luz do que dispõe o Código de Processo Penal sobre a sentença:", 
        options: [
            "qualquer das partes poderá pedir embargos no prazo de 5 dias.", 
            "o juiz, ao proferir sentença condenatória, fixará valor mínimo para reparação dos danos causados.", 
            "é vedado ao juiz atribuir definição jurídica diversa da denúncia.", 
            "a intimação será mediante edital se o réu estiver preso.", 
            "o juiz não pode condenar se o MP pedir a absolvição."
        ], 
        answer: 1, 
        disclaimer: "Art. 387, IV do CPP. Nota: o prazo dos embargos de declaração no CPP comum é de 2 dias (5 dias apenas no JECRIM)." 
    },
    { 
        topic: "Comunicação Processual (Citações)", 
        supportText: "",
        q: "Acerca do que dispõe o Código de Processo Penal sobre as diversas modalidades de comunicação processual:", 
        options: [
            "se o réu estiver preso, será citado na pessoa de seu defensor.", 
            "se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional.", 
            "estando o acusado no estrangeiro, em lugar sabido, será citado mediante carta precatória.", 
            "a intimação do defensor constituído far-se-á por oficial de justiça.", 
            "verificando que o réu se oculta para não ser citado, será citado por edital, com o prazo de 15 dias."
        ], 
        answer: 1, 
        disclaimer: "Art. 366 do CPP: Citado por edital, se o acusado não comparecer nem constituir advogado, suspendem-se o processo e o prazo prescricional." 
    },
    { 
        topic: "Inquérito Policial", 
        supportText: "",
        q: "Acerca do Inquérito Policial, é correto afirmar que:", 
        options: [
            "A autoridade policial poderá mandar arquivar os autos do inquérito caso verifique a atipicidade evidente da conduta.", 
            "Por ser peça meramente informativa, o inquérito policial tem caráter inquisitivo, mas é assegurado ao defensor amplo acesso aos elementos de prova já documentados nos autos que digam respeito ao direito de defesa.", 
            "Nos crimes de ação penal pública incondicionada, o inquérito só poderá ser iniciado mediante representação escrita da vítima.", 
            "O juiz poderá, de ofício, requisitar a abertura de inquérito e determinar o indiciamento formal do investigado.", 
            "A incomunicabilidade do indiciado preso é a regra geral durante os dez primeiros dias de investigação."
        ], 
        answer: 1, 
        disclaimer: "A autoridade policial jamais pode arquivar inquérito (Art. 17, CPP). A alternativa B reflete o teor da Súmula Vinculante nº 14 do STF." 
    },
    { 
        topic: "Prisões e Medidas Cautelares", 
        supportText: "",
        q: "De acordo com a redação do Código de Processo Penal (após a Lei nº 13.964/2019 - Pacote Anticrime), a prisão preventiva:", 
        options: [
            "Pode ser decretada de ofício pelo juiz tanto na fase de investigação quanto no curso da ação penal.", 
            "Pode ser decretada de ofício pelo juiz apenas após o recebimento da denúncia ou queixa.", 
            "Não pode ser decretada de ofício pelo juiz em nenhuma fase, dependendo sempre de requerimento do Ministério Público, do querelante ou do assistente, ou de representação da autoridade policial.", 
            "É automática e obrigatória para todos os crimes hediondos ou equiparados.", 
            "Não exige revisão periódica de sua necessidade após a prolação da decisão que a decretou."
        ], 
        answer: 2, 
        disclaimer: "Art. 311 do CPP: Foi vedada a decretação de prisão preventiva de ofício pelo juiz em qualquer fase (investigação ou processo), exigindo-se provocação e revisão a cada 90 dias (Art. 316, parágrafo único)." 
    },
    { 
        topic: "Ação Penal", 
        type: "vf",
        supportText: "",
        q: "Pelo princípio da indisponibilidade da ação penal pública (Art. 42 e Art. 576 do CPP), o Ministério Público não poderá desistir da ação penal já intentada, nem desistir de recurso que haja interposto.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Embora o MP possa pedir a absolvição em alegações finais, ele não pode desistir da ação penal pública proposta (Art. 42) nem desistir de recurso que já tenha interposto (Art. 576)." 
    },
    { 
        topic: "Provas no Processo Penal", 
        type: "vf",
        supportText: "",
        q: "São admissíveis no processo penal as provas derivadas das ilícitas quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente das primeiras.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Trata-se das exceções à Teoria dos Frutos da Árvore Envenenada previstas expressamente no Art. 157, § 1º do CPP." 
    },
];

// ---------------------------------------------------------
// 3. DISCIPLINAS ESPECÍFICAS: TÉCNICO MINISTERIAL
// ---------------------------------------------------------

const banco_noc_adm = [
    { 
        topic: "Planejamento e Indicadores", 
        supportText: "",
        q: "O Balanced Scorecard (BSC) é uma metodologia que prioriza o equilíbrio organizacional a partir das perspectivas: I. financeira; II. de processos internos; III. de clientes; IV. de aprendizado e crescimento.", 
        options: ["I, II, III e IV.", "I, III e V.", "I, II, III e V.", "I e III.", "II e III."], 
        answer: 0, 
        disclaimer: "As quatro perspectivas clássicas do BSC de Kaplan e Norton são: Financeira, Clientes, Processos Internos e Aprendizado e Crescimento." 
    },
    { 
        topic: "Gestão de Pessoas", 
        supportText: "",
        q: "A consultoria afirmou que, considerando a natural aversão ao trabalho, os empregados necessitam de direção e controle. Essa premissa denota a:", 
        options: ["Teoria da Hierarquia de Maslow.", "Teoria X, de MacGregor.", "Teoria Y, de Herzberg.", "Teoria da Expectativa.", "Teoria Bifatorial de Skinner."], 
        answer: 1, 
        disclaimer: "A Teoria X de Douglas McGregor assume que os trabalhadores têm aversão natural ao trabalho e precisam de supervisão rígida." 
    },
    { 
        topic: "Evolução da Administração Pública", 
        supportText: "",
        q: "O modelo de Administração Pública Gerencial (Nova Gestão Pública), introduzido no Brasil de forma sistemática pelo Plano Diretor da Reforma do Aparelho do Estado (1995), caracteriza-se por:", 
        options: [
            "Focar no controle rígido dos meios e procedimentos a priori, partindo da desconfiança prévia nos administradores.", 
            "Orientar-se para o cidadão-usuário e focar no controle por resultados (a posteriori), mantendo a profissionalização e a meritocracia conquistadas pelo modelo burocrático.", 
            "Confundir o patrimônio público com o patrimônio privado do governante, utilizando cargos como sinecuras.", 
            "Extinguir por completo os concursos públicos em todas as carreiras típicas de Estado.", 
            "Substituir a eficiência administrativa pelo formalismo documental absoluto."
        ], 
        answer: 1, 
        disclaimer: "A Administração Gerencial foca nos resultados (eficiência/eficácia) e no atendimento ao cidadão, sem abandonar os princípios da impessoalidade e do mérito da burocracia weberiana." 
    },
    { 
        topic: "Gestão de Processos", 
        supportText: "",
        q: "Na gestão por processos (BPM), os processos organizacionais são classificados em três categorias principais. Aqueles que entregam valor diretamente aos clientes ou cidadãos externos, relacionando-se à missão central do órgão, são denominados processos:", 
        options: [
            "De suporte (ou de apoio).", 
            "Gerenciais (ou de direção).", 
            "Primários (ou finalísticos / de negócio).", 
            "Ad-hoc (ou burocráticos).", 
            "Verticais funcionais."
        ], 
        answer: 2, 
        disclaimer: "Processos Primários (finalísticos ou essenciais) são os que tocam diretamente o usuário externo e cumprem a atividade-fim da organização." 
    },
    { 
        topic: "Planejamento Estratégico (Matriz SWOT)", 
        supportText: "",
        q: "Durante o diagnóstico estratégico de uma instituição pública pela ferramenta SWOT (FOFA), a 'alta qualificação técnica dos servidores do quadro próprio' e o 'contingenciamento orçamentário imposto por crise econômica externa' são classificados, respectivamente, como:", 
        options: [
            "Oportunidade e Ameaça.", 
            "Força e Fraqueza.", 
            "Força e Ameaça.", 
            "Oportunidade e Fraqueza.", 
            "Meta e Restrição."
        ], 
        answer: 2, 
        disclaimer: "A qualificação da equipe é um fator positivo INTERNO (Força). A crise econômica externa é um fator negativo EXTERNO fora do controle da organização (Ameaça)." 
    },
    { 
        topic: "Gestão de Pessoas (Teoria de Herzberg)", 
        type: "vf",
        supportText: "",
        q: "Segundo a Teoria dos Dois Fatores de Herzberg, os fatores higiênicos (como salário, condições físicas de trabalho e benefícios) estão no ambiente externo e, quando ótimos, apenas evitam a insatisfação, mas não elevam a motivação intrínseca de forma sustentada.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Para Herzberg, fatores higiênicos (extrínsecos) evitam a insatisfação, enquanto fatores motivacionais (intrínsecos, como reconhecimento, responsabilidade e o próprio conteúdo do cargo) geram satisfação." 
    },
    { 
        topic: "Processo Decisório", 
        type: "vf",
        supportText: "",
        q: "De acordo com Herbert Simon, o tomador de decisões nas organizações atua sob 'racionalidade absoluta', dispondo de todas as informações possíveis para encontrar sempre a decisão matematicamente ótima (maximização).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Herbert Simon formulou o conceito de 'Racionalidade Limitada' (Bounded Rationality): como o gestor não possui tempo nem todas as informações, ele busca uma decisão 'satisfatória' (suficientemente boa), e não a decisão perfeitamente ótima." 
    },
];

// ---------------------------------------------------------
// 4. DISCIPLINAS ESPECÍFICAS: ANALISTA DE SISTEMAS (TI)
// ---------------------------------------------------------

const banco_gov_ti = [
    { 
        topic: "Frameworks ITIL e COBIT", 
        supportText: "",
        q: "Considere: ( ) ITIL 4 introduz o Sistema de Valor de Serviço (SVS). ( ) No COBIT 2019, o domínio APO12 orienta sobre gestão de riscos. ( ) O uso de metodologias híbridas em projetos públicos visa conciliar licitações com agilidade. A sequência correta é:", 
        options: ["V - F - V.", "F - V - F.", "V - V - V.", "F - F - F.", "V - F - F."], 
        answer: 2, 
        disclaimer: "Todas as afirmativas estão corretas segundo as práticas do ITIL 4, COBIT 2019 e governança pública de TIC." 
    },
    { 
        topic: "COBIT (Governança vs Gestão)", 
        supportText: "",
        q: "No framework COBIT, faz-se uma distinção clara entre Governança e Gestão. Os cinco processos do domínio de Governança (EDM - Evaluate, Direct and Monitor) têm como objetivo principal:", 
        options: [
            "Planejar, construir, executar e monitorar (PBRM) as atividades operacionais diárias da infraestrutura.", 
            "Garantir que as necessidades das partes interessadas sejam avaliadas para determinar objetivos corporativos equilibrados, definindo a direção por meio de priorização e monitorando o desempenho e a conformidade.", 
            "Substituir o PMBOK no controle de cronogramas de desenvolvimento de software.", 
            "Executar o atendimento de primeiro nível (Service Desk) aos usuários internos.", 
            "Configurar regras de firewall e rotinas de backup de banco de dados."
        ], 
        answer: 1, 
        disclaimer: "No COBIT, a Governança (domínio EDM) Avalia, Dirige e Monitora, enquanto a Gestão (domínios APO, BAI, DSS e MEA) Planeja, Constrói, Executa e Monitora em alinhamento com a direção definida pela governança." 
    },
    { 
        topic: "PMBOK (Gerenciamento de Projetos)", 
        supportText: "",
        q: "Na gestão de projetos segundo o guia PMBOK, a estrutura hierárquica que decompõe o escopo total do trabalho a ser executado pela equipe do projeto para atingir os objetivos e criar as entregas necessárias denomina-se:", 
        options: [
            "Termo de Abertura do Projeto (TAP / Project Charter).", 
            "Estrutura Analítica do Projeto (EAP / WBS - Work Breakdown Structure).", 
            "Matriz de Responsabilidades RACI.", 
            "Diagrama de Rede do Caminho Crítico (CPM).", 
            "Registro das Partes Interessadas (Stakeholder Register)."
        ], 
        answer: 1, 
        disclaimer: "A EAP (WBS) é a decomposição hierárquica orientada às entregas do trabalho que será executado pela equipe do projeto." 
    },
    { 
        topic: "Arquitetura Corporativa (TOGAF)", 
        supportText: "",
        q: "No framework de Arquitetura Corporativa TOGAF, o método iterativo que constitui o núcleo do framework para o desenvolvimento e transição da arquitetura de uma organização (da arquitetura de linha de base até a arquitetura alvo) é chamado de:", 
        options: [
            "SVS (Service Value System).", 
            "ADM (Architecture Development Method).", 
            "PAM (Process Assessment Model).", 
            "CMDB (Configuration Management Database).", 
            "PDCA (Plan-Do-Check-Act)."
        ], 
        answer: 1, 
        disclaimer: "O ADM (Architecture Development Method) é o coração do TOGAF, estruturado em um ciclo de fases (Preliminar, Visão da Arquitetura, Arquitetura de Negócios, Sistemas de Informação, Tecnologia, etc.)." 
    },
    { 
        topic: "ITIL (Gerenciamento de Serviços)", 
        type: "vf",
        supportText: "",
        q: "No ITIL, o 'Gerenciamento de Incidentes' tem como objetivo principal encontrar a causa-raiz definitiva de um erro na infraestrutura, sem preocupação imediata com o tempo de restauração do serviço.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Gerenciamento de Incidentes visa restaurar a operação normal do serviço o mais rápido possível (mesmo usando solução de contorno). Quem investiga a causa-raiz de incidentes recorrentes é o 'Gerenciamento de Problemas'." 
    },
    { 
        topic: "Planejamento Estratégico de TIC (PDTIC)", 
        type: "vf",
        supportText: "",
        q: "O Plano Diretor de Tecnologia da Informação e Comunicação (PDTIC) é um instrumento de planejamento tático-estratégico setorial que detalha as ações e projetos de TIC necessários para suportar os objetivos do Planejamento Estratégico Institucional (PEI) do órgão.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O PDTIC desdobra e alinha as iniciativas de tecnologia às metas de negócio previstas no PEI da instituição." 
    },
];

const banco_seg_ti = [
    { 
        topic: "Criptografia", 
        supportText: "",
        q: "No contexto da criptografia, o algoritmo ____ é um exemplo de cifragem simétrica, amplamente utilizado para confidencialidade, substituindo o antigo DES.", 
        options: ["RSA", "AES", "SHA-2", "HMAC", "MD5"], 
        answer: 1, 
        disclaimer: "O AES (Advanced Encryption Standard) é o padrão de criptografia simétrica em uso atual." 
    },
    { 
        topic: "Normas ISO/IEC 27001 e 27002", 
        supportText: "",
        q: "A respeito das normas da família ABNT NBR ISO/IEC 27000 para Segurança da Informação, assinale a distinção correta entre a ISO/IEC 27001 e a ISO/IEC 27002:", 
        options: [
            "A 27001 trata exclusivamente de gestão de riscos financeiros, enquanto a 27002 trata de continuidade de negócios.", 
            "A 27001 especifica os requisitos para estabelecer, implementar, manter e melhorar continuamente um Sistema de Gestão da Segurança da Informação (SGSI), sendo a norma certificável, enquanto a 27002 fornece um guia de boas práticas para implementação dos controles de segurança.", 
            "A 27002 é a norma de auditoria obrigatória para certificação ISO, enquanto a 27001 é apenas um glossário de termos.", 
            "Ambas tratam exclusivamente de segurança física de data centers, não abordando controles lógicos ou organizacionais.", 
            "A 27001 aplica-se apenas a empresas privadas, e a 27002 aplica-se apenas a órgãos públicos."
        ], 
        answer: 1, 
        disclaimer: "A ISO/IEC 27001 define os requisitos do SGSI (é a norma contra a qual uma organização pode ser certificada). A ISO/IEC 27002 detalha as diretrizes de implementação dos controles." 
    },
    { 
        topic: "Gestão de Riscos (ISO 31000)", 
        supportText: "",
        q: "No processo de avaliação de riscos segundo a ABNT NBR ISO 31000, após identificar, analisar e avaliar um risco, a organização decide contratar um seguro cibernético ou terceirizar a operação crítica para outra entidade. Essa opção de tratamento do risco é classificada como:", 
        options: [
            "Evitar o risco (eliminação da fonte).", 
            "Reter o risco por decisão informada.", 
            "Compartilhar o risco (transferência contratual ou seguro).", 
            "Assumir o risco para perseguir uma oportunidade.", 
            "Ignorar a probabilidade de ocorrência."
        ], 
        answer: 2, 
        disclaimer: "Contratar seguro ou terceirizar parte da operação são exemplos clássicos de compartilhar (ou transferir) o risco com terceiros." 
    },
    { 
        topic: "Redes Seguras (VPN)", 
        supportText: "",
        q: "Para garantir a confidencialidade e integridade dos dados trafegados entre unidades remotas do MPPE através da internet pública, utiliza-se uma Rede Privada Virtual (VPN) com túnel criptografado. Dois protocolos amplamente empregados para implementar VPNs seguras nas camadas de rede e transporte são:", 
        options: [
            "FTP e Telnet.", 
            "HTTP e SNMPv1.", 
            "IPsec e TLS (OpenVPN).", 
            "ARP e ICMP.", 
            "DHCP e POP3."
        ], 
        answer: 2, 
        disclaimer: "IPsec (camada de rede) e TLS/SSL (camada de transporte/aplicação) são os protocolos padrão para construção de túneis VPN seguros." 
    },
    { 
        topic: "Gestão de Continuidade de Negócios", 
        type: "vf",
        supportText: "",
        q: "Na Gestão de Continuidade de Negócios (ISO 22301), o RPO (Recovery Point Objective) define o tempo máximo tolerável que um sistema pode ficar fora do ar após um desastre, enquanto o RTO (Recovery Time Objective) define a quantidade máxima de perda de dados medida no tempo (idade do último backup válido).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Os conceitos foram invertidos: RPO (Point) refere-se à perda máxima tolerável de dados no tempo (frequência de backup); RTO (Time) refere-se ao tempo máximo para recuperar e colocar o serviço de volta no ar." 
    },
    { 
        topic: "Autenticação e Autorização (OAuth 2.0)", 
        type: "vf",
        supportText: "",
        q: "No protocolo OAuth 2.0, o fluxo 'Authorization Code Flow com PKCE' é considerado o padrão mais seguro e recomendado para que aplicações cliente obtenham tokens de acesso em nome do usuário sem expor diretamente suas credenciais.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O Authorization Code com PKCE (Proof Key for Code Exchange) mitiga ataques de interceptação do código de autorização tanto em clientes públicos quanto confidenciais." 
    },
];

const banco_eng_soft_ia = [
    { 
        topic: "IA e Modelos Generativos", 
        supportText: "",
        q: "A combinação entre grandes modelos de linguagem (LLMs) e recuperação de informação viabilizou sistemas mais atualizados, como o RAG. Assinale a correta:", 
        options: [
            "A Engenharia de Prompt modifica os pesos da rede neural do modelo.", 
            "O RAG integra busca de documentos com modelos generativos, ampliando a relevância.", 
            "O uso de RAG impede a atualização em tempo real dos modelos.", 
            "Modelos RAG não são compatíveis com busca vetorial.", 
            "LLMs dependem exclusivamente de fine-tuning para novas informações."
        ], 
        answer: 1, 
        disclaimer: "O RAG (Retrieval-Augmented Generation) recupera documentos relevantes (frequentemente via busca vetorial) e os fornece como contexto ao LLM." 
    },
    { 
        topic: "Engenharia de Requisitos", 
        supportText: "",
        q: "Durante o levantamento de requisitos de um sistema processual, foram listados: (I) O sistema deve permitir que o promotor assine peças com certificado ICP-Brasil; (II) O tempo de resposta da consulta pública deve ser inferior a 2 segundos; (III) O sistema deve ter disponibilidade de 99,9%. Os itens I, II e III são classificados, respectivamente, como:", 
        options: [
            "Requisito Funcional, Requisito Não Funcional e Requisito Não Funcional.", 
            "Requisito Não Funcional, Requisito Funcional e Regra de Negócio.", 
            "Requisito Funcional, Requisito Funcional e Requisito Não Funcional.", 
            "Todos são Requisitos Funcionais.", 
            "Todos são Requisitos Não Funcionais."
        ], 
        answer: 0, 
        disclaimer: "O item I descreve uma funcionalidade entregue ao usuário (Funcional). Os itens II (desempenho) e III (disponibilidade) são atributos de qualidade do sistema (Não Funcionais)." 
    },
    { 
        topic: "Metodologias Ágeis (Scrum e Kanban)", 
        supportText: "",
        q: "A respeito dos métodos ágeis Scrum e Kanban, assinale a alternativa correta:", 
        options: [
            "No Scrum, uma vez iniciada a Sprint, o Product Owner deve alterar diariamente a meta da Sprint conforme novas demandas surgirem.", 
            "O princípio fundamental do Kanban para evitar gargalos e sobrecarga da equipe é limitar o trabalho em progresso (WIP - Work In Progress) em cada coluna do fluxo.", 
            "Os três papéis oficiais do Scrum Guide são Gerente de Projetos, Analista deRequisitos e Testador.", 
            "A Daily Scrum é uma reunião semanal de quatro horas voltada à prestação de contas para a alta diretoria.", 
            "O Kanban exige sprints fixas de duas semanas e proíbe entregas contínuas."
        ], 
        answer: 1, 
        disclaimer: "Limitar o WIP (Work In Progress) é a prática central do método Kanban para otimizar o fluxo (Lead Time) e evidenciar gargalos." 
    },
    { 
        topic: "Containers e Orquestração (Docker e Kubernetes)", 
        supportText: "",
        q: "No ecossistema de orquestração de containers com Kubernetes (K8s), a menor unidade implantável que pode ser criada e gerenciada, encapsulando um ou mais containers que compartilham armazenamento e rede, é denominada:", 
        options: ["Node.", "Cluster.", "Pod.", "Dockerfile.", "Hypervisor."], 
        answer: 2, 
        disclaimer: "No Kubernetes, o Pod é a menor unidade de execução implantável, podendo conter um container principal (padrão mais comum) e containers auxiliares (sidecars)." 
    },
    { 
        topic: "Desenvolvimento Orientado a Testes (TDD e BDD)", 
        type: "vf",
        supportText: "",
        q: "O ciclo clássico do TDD (Test-Driven Development) segue três etapas curtas e repetitivas conhecidas como 'Red - Green - Refactor': primeiro escreve-se um teste automatizado que falha (Red), depois escreve-se o código mínimo para o teste passar (Green) e, por fim, refatora-se o código mantendo os testes passando (Refactor).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O ciclo Red-Green-Refactor de Kent Beck é a essência do Desenvolvimento Orientado a Testes (TDD)." 
    },
    { 
        topic: "Ciência de Dados (Overfitting)", 
        type: "vf",
        supportText: "",
        q: "Em aprendizado de máquina, quando um modelo apresenta erro próximo de zero nos dados de treinamento, mas possui uma taxa de erro muito alta nos dados de teste (baixa capacidade de generalização), diz-se que ocorreu 'Underfitting' (subajuste).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Decorar os dados de treino (erro baixo no treino) e falhar nos dados novos de teste (erro alto no teste) caracteriza o 'Overfitting' (sobreajuste)." 
    },
];

const banco_infra_bd = [
    { 
        topic: "Modelagem e Banco de Dados", 
        supportText: "",
        q: "Com relação à Normalização, I. Unificação de tabelas; II. A 1FN exige que todas as colunas tenham apenas valores atômicos; III. A 3FN elimina a maioria das anomalias e é o padrão comum.", 
        options: ["I e II apenas.", "II e III apenas.", "II apenas.", "I, II e III.", "I e III apenas."], 
        answer: 1, 
        disclaimer: "A 1FN exige valores atômicos (indivisíveis) e a 3FN elimina dependências transitivas." 
    },
    { 
        topic: "Computação em Nuvem (Modelos de Serviço)", 
        supportText: "",
        q: "No modelo de responsabilidade compartilhada em Computação em Nuvem, quando um órgão público contrata um serviço do tipo IaaS (Infraestrutura como Serviço), como máquinas virtuais na nuvem, é de responsabilidade do CLIENTE (órgão):", 
        options: [
            "A manutenção física dos servidores, cabeamento de rede do data center e refrigeração.", 
            "O gerenciamento do sistema operacional convidado (guest OS), aplicação de patches de segurança do SO, configuração de chaves de acesso (SSH/IAM) e proteção dos dados.", 
            "Apenas o uso do software via navegador, ficando o sistema operacional e o banco de dados sob gestão exclusiva do provedor.", 
            "A atualização do hypervisor físico que controla a camada de virtualização do provedor.", 
            "A segurança perimetral física dos galpões do provedor de nuvem."
        ], 
        answer: 1, 
        disclaimer: "No modelo IaaS, o provedor cuida do hardware físico, rede física e virtualização (hypervisor), enquanto o cliente é responsável do Sistema Operacional para cima (SO, middleware, aplicações e dados)." 
    },
    { 
        topic: "Transações em Banco de Dados (ACID)", 
        supportText: "",
        q: "Em Sistemas Gerenciadores de Bancos de Dados Relacionais (SGBDR), a propriedade ACID que garante que todas as operações de uma transação sejam concluídas com sucesso ou, em caso de falha em qualquer etapa, nenhuma delas tenha efeito no banco (tudo ou nada), é a:", 
        options: [
            "Isolamento (Isolation).", 
            "Durabilidade (Durability).", 
            "Atomicidade (Atomicity).", 
            "Consistência (Consistency).", 
            "Concorrência (Concurrency)."
        ], 
        answer: 2, 
        disclaimer: "Atomicidade é a regra do 'tudo ou nada': ou a transação inteira é efetivada (COMMIT), ou todas as suas alterações são desfeitas (ROLLBACK)." 
    },
    { 
        topic: "Bancos de Dados NoSQL", 
        supportText: "",
        q: "Os bancos de dados não relacionais (NoSQL) MongoDB e Apache Cassandra são classificados, quanto ao seu modelo de dados primário, respectivamente, como:", 
        options: [
            "Orientado a Grafos e Chave-Valor.", 
            "Orientado a Documentos (BSON/JSON) e Orientado a Colunas Largas (Wide-Column).", 
            "Relacional Objeto e Orientado a Documentos.", 
            "Hierárquico em Rede e Chave-Valor em Memória.", 
            "Orientado a Colunas e Relacional Distribuído."
        ], 
        answer: 1, 
        disclaimer: "O MongoDB é o principal banco NoSQL orientado a documentos (armazena estruturas JSON/BSON). O Cassandra é um banco distribuído orientado a famílias de colunas (Wide-Column Store)." 
    },
    { 
        topic: "Modelagem Dimensional (Data Warehouse / BI)", 
        type: "vf",
        supportText: "",
        q: "Em um esquema em estrela (Star Schema) voltado para Business Intelligence, a Tabela Fato armazena as métricas numéricas de eventos (como valor e quantidade) e as chaves estrangeiras, enquanto as Tabelas Dimensão armazenam os atributos descritivos (como tempo, local e produto).", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. O esquema em estrela posiciona a tabela Fato no centro (eventos quantitativos) rodeada pelas tabelas Dimensão desnormalizadas (contexto descritivo: quem, o quê, onde, quando)." 
    },
    { 
        topic: "SQL e PL/pgSQL (Triggers)", 
        type: "vf",
        supportText: "",
        q: "No PostgreSQL, uma Trigger declarada com a cláusula 'FOR EACH STATEMENT' será disparada uma vez para cada linha individual afetada pelo comando UPDATE na tabela.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. 'FOR EACH STATEMENT' dispara a trigger apenas UMA única vez por comando SQL executado, independentemente de quantas linhas foram alteradas. Para disparar a cada linha alterada, utiliza-se 'FOR EACH ROW'." 
    },
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
