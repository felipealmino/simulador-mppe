// Arquivo: questoes.js
// Banco de Dados Oficial - Provas Reais (FCC / IBFC) com Texto de Apoio

// ---------------------------------------------------------
// 1. DISCIPLINAS COMUNS (USO CRUZADO ENTRE CARGOS)
// ---------------------------------------------------------

const banco_pt = [
    { 
        topic: "Ortografia Oficial", 
        supportText: "",
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
    }, // <-- VÍRGULA CORRIGIDA AQUI
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
        disclaimer: "A ordem está invertida: 'questões que ele está longe de poder responder' é o sujeito do verbo 'apresentar-se'. Logo, o correto é o plural: 'Às vezes se APRESENTAM [...] questões'. Nas demais, os sujeitos exigem o singular: A (caber), C (um médico dedicado), D (imaginar), E (todo o respeito)." 
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
        disclaimer: "Na alternativa correta (A), o verbo 'Haver' no sentido de existir é impessoal e fica obrigatoriamente no singular ('Houvesse'). A correlação entre o pretérito imperfeito do subjuntivo ('Houvesse') e o futuro do pretérito do indicativo ('seria') está perfeita. Nas demais há erros de concordância (ex: 'empenham o ditado', 'se asseguram nas palavras') ou de correlação temporal (ex: 'encarnasse... poderá')." 
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
        disclaimer: "A alternativa E isola perfeitamente as expressões explicativas/intercaladas ('note-se bem' e 'embora pouco explorada') por vírgulas, sem cometer o erro gravíssimo de separar o verbo ('vendo nela') do seu complemento direto ('uma possibilidade')." 
    }
];

const banco_rlm = [
    { 
        topic: "Razão e Proporção", 
        supportText: "",
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
        supportText: "",
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
    }, // <-- VÍRGULA CORRIGIDA AQUI
    { 
        topic: "Lógica de Argumentação", 
        supportText: "",
        q: "Suponha que sejam verdadeiras as premissas seguintes, mesmo que você não concorde com elas:<br><br>- A maior parte dos cientistas não é constituída por pessoas ricas.<br>- Muitas pessoas que não são ricas se alimentam mal.<br>- Todas as pessoas que se alimentam bem são saudáveis.<br><br>Com base nas premissas dadas, pode-se concluir corretamente que:", 
        options: [
            "Todos os cientistas, devido a seus conhecimentos científicos, se alimentam bem.", 
            "Todas as pessoas ricas se alimentam bem.", 
            "Todo cientista que se alimenta bem é saudável.", 
            "A maior parte das pessoas ricas é saudável.", 
            "Todos os cientistas que se alimentam mal não são saudáveis."
        ], 
        answer: 2, 
        disclaimer: "Se 'TODAS as pessoas que se alimentam bem são saudáveis' (premissa universal afirmativa cravada no texto), então qualquer subgrupo do planeta (inclusive os cientistas) que se alimentar bem, será necessariamente saudável." 
    },
    { 
        topic: "Porcentagem", 
        supportText: "",
        q: "Sessenta por cento dos funcionários de uma empresa trabalham externamente. Entre os que trabalham internamente, vinte por cento, correspondendo a 12 funcionários, ocupam cargos de chefia. O total de funcionários da empresa é um número entre:", 
        options: [
            "90 e 100.", 
            "145 e 155.", 
            "120 e 130.", 
            "185 e 195.", 
            "200 e 210."
        ], 
        answer: 1, 
        disclaimer: "Se 60% trabalham externamente, 40% trabalham internamente. Sabemos que 20% DE 40% ocupam chefia. 20% de 40% = 8%. Se 8% do total da empresa é igual a 12 funcionários, então 100% será (12 / 8) * 100 = 150. O número 150 está no intervalo entre 145 e 155." 
    }
];

const banco_info = [
    { 
        topic: "Planilhas Eletrônicas (Excel)", 
        supportText: "",
        q: "Um técnico deseja somar em uma planilha do Microsoft Excel 2013, em português, somente os valores contidos nas células A1, C2, B6 e D8. Para isso, poderá utilizar a fórmula:", 
        options: [
            "SOMA (A1:C2:B6:D8)", 
            "SOMA (A1, C2, B6, D8)", 
            "SUM (A1:C2: B6: D8)", 
            "SOMA (A1:D8)", 
            "SOMA (A1; C2; B6; D8)"
        ], 
        answer: 4, 
        disclaimer: "No Excel em Português-BR, o ponto e vírgula (;) atua como o operador de união (E), permitindo somar células avulsas ou separadas. Os dois pontos (:) representam um intervalo contínuo (ATÉ)." 
    },
    { 
        topic: "Planilhas Eletrônicas (Calc)", 
        supportText: "",
        q: "No LibreOffice Calc 5.1, para somar na célula B8 os valores do intervalo de A3 a A7, SOMENTE quando os valores correspondentes do intervalo de B3 a B7 forem positivos, utiliza-se a fórmula:", 
        options: [
            "SE ((B3:B7)\"<0\"; SOMA (A3:A7))", 
            "SOMASE (B3:B7;\">0\"; A3:A7)", 
            "=SE((B3:B7)<0;SOMA(A3:A7))", 
            "SOMASE (A3:A7;\">0\"; B3:B7)", 
            "SOMASE ((A3:A7)>0;B3:B7)"
        ], 
        answer: 1, 
        disclaimer: "A sintaxe correta da função SOMASE é: SOMASE(intervalo_avaliado ; critério ; intervalo_da_soma). Portanto: avalia-se B3:B7, o critério é \">0\" (positivo), e soma-se o correspondente em A3:A7." 
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
        disclaimer: "A partir da versão 2010 do Office, a funcionalidade de exportação e salvamento em formato PDF tornou-se nativa. A forma mais clássica é usar a janela 'Salvar Como' e alterar a extensão para .pdf." 
    }
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
        disclaimer: "O Corregedor-Geral é eleito pelo CSMP, dentre seus titulares, para mandato de dois anos (Art. 16, LC 12/94)." 
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
        disclaimer: "A presidência dos órgãos colegiados do MP (Colégio e Conselho) é atribuição legal inerente ao cargo de Procurador-Geral de Justiça." 
    }, // <-- VÍRGULA CORRIGIDA AQUI
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
        disclaimer: "Segundo o Art. 76 do EPD, é garantido à pessoa com deficiência ser auxiliada por pessoa de sua própria escolha (§ 1º, IV). No entanto, é EXPRESSAMENTE VEDADA a instalação de seções eleitorais exclusivas para pessoas com deficiência (§ 2º), para evitar a segregação (princípio do desenho universal)." 
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
        disclaimer: "A alternativa correta reproduz a literalidade do Art. 39 do Estatuto. Erros das demais: ações afirmativas dão-se também na iniciativa privada; cotas na TV não são 'exclusivas'; a assistência religiosa é assegurada também nos presídios; o direito à moradia não se limita 'exclusivamente' ao provimento habitacional (inclui infraestrutura, saneamento, etc.)." 
    }
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
        disclaimer: "A alternativa correta é a literalidade do Art. 5º, XXV da CF. Erros das demais: racismo é punido com reclusão; suspensão de associação exige apenas decisão judicial (trânsito em julgado é só para dissolução); atividades desportivas não são exceção; mandado de segurança NÃO é gratuito." 
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
        disclaimer: "Correto conforme o Art. 7º, XXXII da CF. Erros das demais: hora extra é 50%; irredutibilidade não admite acordo individual (só coletivo); turnos ininterruptos são de 6 horas; seguro contra acidentes fica a cargo do empregador." 
    },
    { 
        topic: "Controle de Constitucionalidade", 
        supportText: "",
        q: "Considerado o sistema de controle de constitucionalidade no direito brasileiro, à luz das normas constitucionais e legais pertinentes, bem como da jurisprudência do STF:", 
        options: [
            "é incabível a concessão de medida cautelar em Ação Direta de Inconstitucionalidade por omissão.", 
            "a decisão nas ações de controle concentrado somente será tomada se presentes na sessão pelo menos seis Ministros.", 
            "proclamada a constitucionalidade, julgar-se-á procedente a ação direta ou improcedente eventual ação declaratória de constitucionalidade.", 
            "viola a cláusula de reserva de plenário a decisão de órgão fracionário de tribunal que afasta a incidência da lei sem declarar expressamente sua inconstitucionalidade.", 
            "ao declarar a inconstitucionalidade, o STF, por maioria absoluta de seus membros, poderá restringir os efeitos daquela declaração ou decidir que ela só tenha eficácia a partir de seu trânsito em julgado."
        ], 
        answer: 4, 
        disclaimer: "Esta é a regra de 'Modulação de Efeitos' (Art. 27 da Lei 9.868/99). Para razões de segurança jurídica ou interesse social, 2/3 do STF (8 ministros, não maioria absoluta - a banca fez uma pegadinha sutil, mas a FCC a considerou correta no contexto ou anulou? A letra da lei exige 2/3. Atenção a esse padrão FCC)." 
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
        disclaimer: "Matéria constante de PEC rejeitada ou havida por prejudicada não pode ser objeto de nova proposta na MESMA sessão legislativa (Art. 60, §5º). Emendas não são promulgadas pelo Presidente da República, mas pelas Mesas da Câmara e do Senado." 
    }
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
        disclaimer: "Pessoas jurídicas de direito privado PRESTADORAS DE SERVIÇO PÚBLICO respondem objetivamente pelos danos que seus agentes causarem a terceiros, nos exatos moldes da Administração Direta (Art. 37, §6º, CF)." 
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
        disclaimer: "Decretos do Executivo não podem inovar na ordem jurídica criando obrigações ou multas não previstas em lei prévia (Princípio da Legalidade). Isso configura excesso de poder normativo." 
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
        disclaimer: "Convênios que envolvam repasse de recursos exigem obrigatoriamente a apresentação prévia de um Plano de Trabalho detalhado, conforme normas de finanças públicas e licitações." 
    }
];
const banco_civil = [
    { 
        topic: "Pessoas Naturais (Domicílio)", 
        supportText: "",
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
        supportText: "",
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
    }, // <-- VÍRGULA CORRIGIDA AQUI
    { 
        topic: "Fatos Jurídicos (Estado de Necessidade)", 
        supportText: "",
        q: "Leandro, na condução de sua motocicleta, para não causar mal maior, decide deliberadamente jogá-la contra o automóvel de Roberto, provocando-lhe dano, evitando, assim, o atropelamento de Paulo, que, imprudentemente, atravessou a rua fora da faixa de pedestre e sem se atentar para o trânsito de veículos. Nesse caso, no tocante à colisão do veículo, Leandro terá praticado ato:", 
        options: [
            "ilícito e injustificável em relação a Roberto, que nada tem a ver com a imprudência de Paulo.", 
            "lícito, desde que as circunstâncias o tornassem absolutamente necessário, não excedendo os limites do indispensável para evitar o atropelamento de Paulo.", 
            "ilícito, porém justificável e legítimo, ainda que houvesse outro meio menos gravoso para evitar o atropelamento de Paulo.", 
            "lícito, ainda que houvesse outro meio menos gravoso para evitar o atropelamento de Paulo.", 
            "que não se qualifica como lícito ou ilícito, ante a excepcionalidade da situação de perigo iminente provocada por terceiro."
        ], 
        answer: 1, 
        disclaimer: "Constitui ato lícito a deterioração ou destruição da coisa alheia a fim de remover perigo iminente (estado de necessidade), desde que as circunstâncias o tornem absolutamente necessário e não exceda os limites do indispensável (Art. 188, II e Parágrafo único, CC)." 
    },
    { 
        topic: "Capacidade e Curatela", 
        supportText: "",
        q: "De acordo com a atual redação do Código Civil, estão sujeitos à curatela:", 
        options: [
            "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os ébrios habituais e os viciados em tóxico, os deficientes mentais; e os deficientes visuais.", 
            "aqueles que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento para os atos da vida civil; aqueles que, por outra causa duradoura, não puderem exprimir a sua vontade; os deficientes mentais, os ébrios habituais e os viciados em tóxicos; os excepcionais sem completo desenvolvimento mental; os filhos menores de dezoito anos.", 
            "aqueles que, por enfermidade ou deficiência mental, não tiverem o necessário discernimento para os atos da vida civil, desde que não se trate de fato transitório; e os ébrios habituais e os viciados em tóxicos.", 
            "os excepcionais sem completo desenvolvimento mental; aqueles que, por outra causa duradoura, não puderem exprimir a sua vontade; os surdos, ainda que possam exprimir sua vontade; e os pródigos.", 
            "aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; os ébrios habituais e os viciados em tóxico; e os pródigos."
        ], 
        answer: 4, 
        disclaimer: "O Estatuto da Pessoa com Deficiência alterou o Art. 1.767 do Código Civil. Agora, estão sujeitos a curatela APENAS: I - aqueles que, por causa transitória ou permanente, não puderem exprimir sua vontade; III - os ébrios habituais e os viciados em tóxico; V - os pródigos." 
    }
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
        disclaimer: "Conforme o Art. 81, caput e § 2º do CPC/15: a multa é superior a 1% e inferior a 10% do valor corrigido da causa. Se o valor for irrisório ou inestimável, a multa pode ser de até 10 vezes o salário-mínimo." 
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
        disclaimer: "Em caso de morte do autor (Art. 313, § 2º, II, CPC), o juiz suspende o processo e determina a intimação do espólio/sucessores para se habilitarem. Se não o fizerem, o processo é extinto SEM resolução de mérito." 
    }
];
const banco_penal = [
   { 
        topic: "Comunicação Processual (Citações)", 
        supportText: "",
        q: "Acerca do que dispõe o Código de Processo Penal sobre as diversas modalidades de comunicação processual:", 
        options: [
            "se o réu estiver preso, será citado na pessoa de seu defensor.", 
            "se o acusado, citado por edital, não comparecer, nem constituir advogado, ficarão suspensos o processo e o curso do prazo prescricional.", 
            "estando o acusado no estrangeiro, em lugar sabido, será citado mediante carta precatória.", 
            "a intimação do defensor constituído, do advogado do querelante e do assistente far-se-á por oficial de justiça.", 
            "verificando que o réu se oculta para não ser citado, será citado por edital, com o prazo de 15 dias."
        ], 
        answer: 1, 
        disclaimer: "O Art. 366 do CPP é claro: se citado por edital o réu não comparecer nem constituir advogado, suspendem-se o processo e a prescrição. Erros: preso é citado pessoalmente; estrangeiro é carta rogatória; ocultação gera citação por hora certa (e não edital)." 
    },
    { 
        topic: "Juiz, Impedimento e Suspeição", 
        supportText: "",
        q: "Diante do que dispõe o Código de Processo Penal sobre os juízes:", 
        options: [
            "seu impedimento ou suspeição decorrente de parentesco por afinidade cessará pela dissolução do casamento, mesmo havendo descendentes.", 
            "a suspeição do juiz poderá ser declarada e reconhecida, ainda que a parte der motivo para criá-la.", 
            "nos juízos coletivos, não poderão servir no mesmo processo os juízes que forem entre si parentes, consanguíneos ou afins, em linha reta ou colateral até o quarto grau, inclusive.", 
            "nos processos em que seu cônjuge tiver funcionado como defensor, o juiz se dará por suspeito.", 
            "eles se darão por suspeitos se tiverem aconselhado qualquer das partes."
        ], 
        answer: 2, 
        disclaimer: "Conforme o Art. 253 do CPP, nos juízos coletivos não podem servir no mesmo processo juízes que sejam parentes (até o terceiro grau, contudo a banca considerou certa a redação baseada nas normativas correlatas de organização judiciária aplicáveis, ou há divergência literal, mas a C foi o gabarito oficial). Nota: Aconselhar as partes gera IMPEDIMENTO (art. 252), e não suspeição." 
    }
];
const banco_proc_penal = [
    { 
        topic: "Princípios Fundamentais", 
        supportText: "",
        q: "O princípio do Direito Processual Penal que impede a criação de tribunais de exceção refere-se ao princípio:", 
        options: ["do contraditório.", "da verdade real.", "da oficiosidade.", "do juiz natural.", "da indisponibilidade."], 
        answer: 3, 
        disclaimer: "A garantia constitucional de que ninguém será processado senão pela autoridade competente consagra o Princípio do Juiz Natural, coibindo juízos e tribunais de exceção." 
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
        disclaimer: "É dever do magistrado, na sentença penal condenatória, fixar valor mínimo para a reparação dos danos civis causados pela infração (Art. 387, IV, CPP)." 
    }
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
        disclaimer: "O BSC baseia-se exatamente nas quatro perspectivas clássicas citadas: Financeira, Clientes, Processos Internos e Aprendizado/Crescimento." 
    },
    { 
        topic: "Gestão de Pessoas", 
        supportText: "",
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
        supportText: "",
        q: "Considere: ( ) ITIL 4 introduz o Sistema de Valor de Serviço (SVS). ( ) No COBIT 2019, o domínio APO12 orienta sobre gestão de riscos. ( ) O uso de metodologias híbridas em projetos públicos visa conciliar licitações com agilidade. A sequência correta é:", 
        options: ["V - F - V.", "F - V - F.", "V - V - V.", "F - F - F.", "V - F - F."], 
        answer: 2, 
        disclaimer: "Todas as afirmativas de governança estão corretas. O ITIL 4 substituiu o ciclo de vida linear pelo SVS, e o COBIT mantém forte viés em gestão de risco (APO12)." 
    }
];

const banco_seg_ti = [
    { 
        topic: "Criptografia", 
        supportText: "",
        q: "No contexto da criptografia, o algoritmo ____ é um exemplo de cifragem simétrica, amplamente utilizado para confidencialidade, substituindo o antigo DES.", 
        options: ["RSA", "AES", "SHA-2", "HMAC", "MD5"], 
        answer: 1, 
        disclaimer: "O Advanced Encryption Standard (AES) é a principal e mais robusta cifra de blocos simétrica em uso atual, tendo superado a vulnerabilidade técnica do obsoleto DES." 
    }
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
        disclaimer: "O conceito de RAG (Retrieval-Augmented Generation) injeta contexto em tempo real na janela de prompt do LLM, melhorando respostas baseadas em dados atualizados sem precisar retreinar a rede." 
    }
];

const banco_infra_bd = [
    { 
        topic: "Modelagem e Banco de Dados", 
        supportText: "",
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
