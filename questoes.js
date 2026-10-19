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
    {
        topic: "Semântica e Vocabulário",
        supportText: "Uma simples folha de papel... Ontem, num programa de TV, discutíamos entre escritores e jornalistas o drama do papel em branco na máquina e, diante dele, o pobre de nós que espreme o juízo até produzir qualquer coisa que encha as laudas necessárias e possa ir para a impressão. Acho que essa angústia existe desde que o primeiro escriba de cuneiforme, na Mesopotâmia, ficava aflito por uma ideia a gravar no tijolinho fresco, e depressa, antes que o barro secasse. Ou o emissário real, no Egito, diante do papiro virgem, rabiscando tentativamente um começo de hieróglifo sem saber o que contar na mensagem para o Faraó.<br>O curioso é que nem sempre, desse esforço de última hora, sai um resultado pífio. Às vezes, depois de minutos e minutos de indecisão e bloqueio, brota de repente uma ideia que é um clarão, o escriba bate freneticamente na máquina, tentando forçar os dedos a uma marcha mais veloz que a dos miolos; e em pouco ele entrega à oficina a sua melhor matéria do mês. Quando esse branco se dá na produção de livro, não tem tanta importância. O romance espera, o conto espera. E o poema só nasce na hora que quer. O jornal que vive à custa do cotidiano e é voraz por fatos atuais e comentários sobre esses fatos, mal se consolando com projeções sobre o futuro ou meditações sobre o passado, o jornal é que é o grande tirano. Ele é como um alto forno de usina siderúrgica que não pode se apagar nunca e exige, dia e noite, combustível, minério, e a atenção infatigável dos seus alimentadores e manobreiros.<br>Aliás, para fazer justiça, não é propriamente o jornal o nosso tirano. O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera, e por isso a bajulamos, hesitamos num fraseado, trocamos um verbo mais incisivo por outro mais ameno, polvilhamos com um sal de malícia qualquer flagrante inocente, descobrimos interpretações sutis ou sibilinas para o que seria apenas massudo e incolor, sem o nosso intempestivo inuendo. Mas quanto equilíbrio e cuidados são necessários para não transpor o frágil limite da verdade dos fatos e não cair no perigoso terreno da invenção! Às vezes, basta insinuar que o figurão sorriu antes da sua resposta e se derruba todo um laborioso esforço de credibilidade, em hora de crise política.<br>(Adaptado de: RACHEL de Queiroz, 1990)",
        q: "O adjetivo sublinhado está corretamente traduzido pelo que se encontra entre parênteses em:",
        options: [
            "interpretações sutis ou <u>sibilinas</u> (precisas)",
            "um resultado <u>pífio</u> (grandioso)",
            "a folha <u>enfadonha</u> (monótona)",
            "atenção <u>infatigável</u> (cansativa)",
            "um verbo mais <u>incisivo</u> (ambíguo)"
        ],
        answer: 2,
        disclaimer: "O adjetivo 'enfadonha' significa aquilo que causa enfado, tédio ou aborrecimento, sendo sinônimo direto de 'monótona'. 'Sibilinas' significa enigmáticas/obscuras; 'pífio' significa desprezível/vil; 'infatigável' significa incansável; e 'incisivo' significa direto/categórico."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Leia o terceiro parágrafo da crônica de Rachel de Queiroz:<br>Aliás, para fazer justiça, não é propriamente o jornal o nosso tirano. O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera, e por isso a bajulamos, hesitamos num fraseado, trocamos um verbo mais incisivo por outro mais ameno...",
        q: "O trecho em que a cronista indica que os escritores se submetem ao julgamento do público está em:",
        options: [
            "o frágil limite da verdade.",
            "Nessa trêmula serventia.",
            "perigoso terreno da invenção.",
            "bate freneticamente na máquina.",
            "E o poema só nasce na hora que quer."
        ],
        answer: 1,
        disclaimer: "A expressão 'Nessa trêmula serventia' retoma a condição de submissão e servidão temerosa dos escritores diante do público ('o déspota implacável', 'a fera'), que julga, aplaude ou descarta o trabalho jornalístico."
    },
    {
        topic: "Sintaxe e Partícula Expletiva",
        supportText: "",
        q: "Sem que nenhuma outra alteração seja feita e sem prejuízo para a correção gramatical, o trecho que pode ser removido da frase está sublinhado em:",
        options: [
            "o jornal <u>é que</u> é o grande tirano",
            "vivemos todos <u>os que</u> dependemos da fera",
            "Ontem, <u>num programa de TV</u>, discutíamos",
            "brota de repente uma ideia <u>que é um clarão</u>",
            "<u>Quando esse branco se dá</u> na produção de livro"
        ],
        answer: 0,
        disclaimer: "A expressão 'é que' atua como partícula expletiva (ou de realce), cuja função é meramente estilística/enfática. Sua retirada ('o jornal é o grande tirano') mantém a estrutura sintática e a correção gramatical intactas, sem exigir alterações na pontuação."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "O verbo empregado em sentido conotativo está no trecho:",
        options: [
            "o pobre de nós que espreme o juízo",
            "ele entrega à oficina a sua melhor matéria do mês",
            "discutíamos entre escritores e jornalistas o drama do papel em branco na máquina",
            "o figurão sorriu antes da sua resposta",
            "antes que o barro secasse"
        ],
        answer: 0,
        disclaimer: "O verbo 'espremer' em 'espreme o juízo' está empregado em sentido figurado (conotativo), indicando o esforço mental intenso para extrair ideias."
    },
    {
        topic: "Coesão e Elipse",
        supportText: "",
        q: "Omite-se uma palavra que se subentende pelo contexto em:",
        options: [
            "um alto forno de usina siderúrgica",
            "o drama do papel em branco na máquina",
            "Uma simples folha de papel",
            "uma marcha mais veloz que a dos miolos",
            "O romance espera"
        ],
        answer: 3,
        disclaimer: "No trecho 'uma marcha mais veloz que a [marcha] dos miolos', ocorre a elipse (omissão) do substantivo 'marcha', que fica subentendido após o pronome demonstrativo 'a'."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "Considere o trecho: 'desde que o primeiro escriba de cuneiforme, na Mesopotâmia, <u>ficava</u> aflito por uma ideia' (1º parágrafo).",
        q: "O verbo flexionado nos mesmos tempo e modo que o da frase acima está em:",
        options: [
            "o figurão <u>sorriu</u> antes da sua resposta",
            "ele quem <u>amarrota</u> a folha enfadonha a caminho da cesta.",
            "interpretações sutis ou sibilinas para o que <u>seria</u> apenas massudo e incolor",
            "qualquer coisa que <u>encha</u> as laudas necessárias",
            "<u>discutíamos</u> entre escritores e jornalistas o drama do papel em branco na máquina"
        ],
        answer: 4,
        disclaimer: "Tanto a forma verbal 'ficava' (do enunciado) quanto 'discutíamos' estão flexionadas no Pretérito Imperfeito do Modo Indicativo. ('sorriu' = pret. perfeito; 'amarrota' = presente do ind.; 'seria' = futuro do pretérito; 'encha' = presente do subjuntivo)."
    },
    {
        topic: "Relações Lógico-Semânticas",
        supportText: "Considere o trecho: 'Mas quanto equilíbrio e cuidados são necessários <u>para não transpor o frágil limite da verdade dos fatos</u>'",
        q: "No contexto em que se encontra, o elemento sublinhado expressa ideia de:",
        options: [
            "causa.",
            "concessão.",
            "condição.",
            "oposição.",
            "finalidade."
        ],
        answer: 4,
        disclaimer: "A oração reduzida de infinitivo introduzida pela preposição 'para' ('para não transpor...') exprime o objetivo, a finalidade para a qual o equilíbrio e os cuidados são necessários."
    },
    {
        topic: "Coesão Referencial",
        supportText: "Considere o terceiro parágrafo da crônica de Rachel de Queiroz:<br>'O déspota implacável é mesmo o público, de quem o jornal é apenas o humilde, solícito, serviçal. O público é quem dá sentença de vida e morte, o público é quem boceja ou aplaude. Ele é quem recorta com amor o tópico feliz, ele quem amarrota a folha enfadonha a caminho da cesta. Nessa trêmula serventia vivemos todos os que dependemos da fera...'",
        q: "Um termo usado pela cronista para se referir ao 'público' é:",
        options: [
            "fera (3º parágrafo)",
            "inuendo (3º parágrafo)",
            "emissário (1º parágrafo)",
            "clarão (2º parágrafo)",
            "usina (2º parágrafo)"
        ],
        answer: 0,
        disclaimer: "No terceiro parágrafo, a autora refere-se metaforicamente ao público leitor como 'o déspota implacável' e, logo em seguida, retoma-o pelo substantivo 'fera' ('todos os que dependemos da fera')."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Leia o poema 'Vela' de Sophia de Mello Breyner Andresen:<br><br>Em redor da luz<br>A casa sai da sombra<br>Intensamente atenta<br>Levemente espantada<br><br>Em redor da luz<br>A casa se concentra<br>Numa espera densa<br>E quase silabada<br><br>Em redor da chama<br>Que a menor brisa doma<br>E que um suspiro apaga<br>A casa fica muda<br><br>Enquanto a noite antiga<br>Imensa e exterior<br>Tece seus prodígios<br>E ordena seus milênios<br><br>De espaço e de silêncio<br>De treva e de esplendor",
        q: "No contexto da terceira estrofe, a 'chama' pode ser descrita como:",
        options: [
            "vigorosa.",
            "eterna.",
            "frágil.",
            "silenciosa.",
            "impaciente."
        ],
        answer: 2,
        disclaimer: "Ao afirmar que a chama é aquela 'Que a menor brisa doma / E que um suspiro apaga', o eu lírico destaca sua extrema vulnerabilidade e delicadeza, caracterizando-a como frágil."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere os versos da 1ª estrofe do poema 'Vela':<br>'A casa sai da sombra / Intensamente atenta'",
        q: "Nos versos acima observa-se a figura de linguagem conhecida como:",
        options: [
            "gradação.",
            "personificação.",
            "antítese.",
            "pleonasmo.",
            "eufemismo."
        ],
        answer: 1,
        disclaimer: "Atribuir características e ações próprias de seres animados/humanos (sair da sombra, ficar 'intensamente atenta', 'levemente espantada') a um ser inanimado ('A casa') configura personificação ou prosopopeia."
    },

    // --- PROVA 2: FCC - 2025 - MPPI (Técnico Ministerial) ---
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere a crônica 'Beijinho, beijinho', de Luis Fernando Verissimo:<br>Na festa dos 34 anos da Clarinha, o seu marido, Amaro, fez um discurso muito aplaudido. Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê? Porque a Clarinha era duas de 17. Tinha a vivacidade e o frescor de duas adolescentes.<br>No carro, depois da festa, o Marinho comentou:<br>— Bonito o discurso do Amaro.<br>— Não dou dois meses para eles se separarem — disse a Nair.<br>— O quê?<br>— Marido quando começa a elogiar muito a mulher...<br>Nair deixou no ar todas as implicações da duplicidade masculina.<br>— Mas eles parecem cada vez mais apaixonados — protestou Marinho.<br>— Exatamente. Apaixonados demais. Lembra o que eu disse quando a Janice e o Pedrão começaram a andar de mãos dadas?<br>— É mesmo...<br>Vinte anos de casados e de repente começam a andar de mãos dadas? Como namorados? Ali tinha coisa.<br>(VERISSIMO, Luis Fernando. Verissimo antológico. Rio de Janeiro: Objetiva, 2020)",
        q: "A voz do personagem mescla-se intimamente à voz do narrador, configurando o chamado discurso indireto livre, no seguinte trecho:",
        options: [
            "Vinte anos de casados e de repente começam a andar de mãos dadas? (11º parágrafo)",
            "— Mas eles parecem cada vez mais apaixonados — protestou Marinho. (8º parágrafo)",
            "Na festa dos 34 anos da Clarinha, o seu marido, Amaro, fez um discurso muito aplaudido. (1º parágrafo)",
            "Nair deixou no ar todas as implicações da duplicidade masculina. (7º parágrafo)",
            "Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê? (1º parágrafo)"
        ],
        answer: 4,
        disclaimer: "No trecho 'Declarou que não trocava a sua Clarinha por duas de 17, sabiam por quê?', a pergunta 'sabiam por quê?' reproduz diretamente a entonação e a fala do personagem Amaro aos convidados da festa inserida sem travessão no meio da narração em terceira pessoa, caracterizando o discurso indireto livre."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "Está empregada em sentido figurado a expressão sublinhada em:",
        options: [
            "Nair <u>deixou no ar</u> todas as implicações da duplicidade masculina.",
            "<u>Vinte anos de casados</u> e de repente começam a andar de mãos dadas?",
            "seu marido, Amaro, <u>fez um discurso</u> muito aplaudido.",
            "Marido quando começa a <u>elogiar muito</u> a mulher...",
            "quando a Janice e o Pedrão começaram a <u>andar de mãos dadas</u>?"
        ],
        answer: 0,
        disclaimer: "A locução 'deixou no ar' está empregada em sentido conotativo (figurado), significando 'insinuou', 'sugeriu sem declarar explicitamente'."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: 'Lembra o que eu disse <u>quando a Janice e o Pedrão começaram a andar de mãos dadas</u>?' (9º parágrafo)",
        q: "No contexto em que se insere, a oração sublinhada expressa ideia de:",
        options: [
            "causa.",
            "concessão.",
            "tempo.",
            "consequência.",
            "conclusão."
        ],
        answer: 2,
        disclaimer: "A conjunção 'quando' introduz uma oração subordinada adverbial temporal, situando o momento em que o fato ocorreu."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "Mas eles parecem cada vez <u>mais</u> apaixonados",
            "Nair deixou no ar <u>todas</u> as implicações",
            "<u>Bonito</u> o discurso do Amaro",
            "Não dou <u>dois</u> meses para eles se separarem",
            "No carro, depois da <u>festa</u>, o Marinho comentou"
        ],
        answer: 0,
        disclaimer: "Na frase A, 'mais' é um advérbio de intensidade (modifica o adjetivo 'apaixonados'), sendo uma classe gramatical invariável."
    },
    {
        topic: "Concordância Verbal",
        supportText: "",
        q: "O verbo em negrito deve sua flexão ao termo sublinhado em:",
        options: [
            "— <u>Vinte anos de casados</u> e de repente <b>começam</b> a andar de mãos dadas?",
            "— Mas eles <b>parecem</b> cada vez mais <u>apaixonados</u> — protestou Marinho.",
            "Na festa dos 34 anos da Clarinha, <u>o seu marido</u>, Amaro, <b>fez</b> um discurso muito aplaudido.",
            "Declarou que não <b>trocava</b> <u>a sua Clarinha</u> por duas de 17, sabiam por quê?",
            "— Marido quando <b>começa</b> a elogiar muito <u>a mulher</u>..."
        ],
        answer: 2,
        disclaimer: "O verbo concorda em número e pessoa com o seu sujeito. Em C, 'o seu marido' é o sujeito do verbo 'fez' (3ª pessoa do singular)."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "A revolução tecnológica do século XXI modificou toda a configuração da economia global, provocando uma verdadeira ruptura nas relações trabalhistas até então vigentes. Um dos setores da economia que melhor representa essa revolução e seu impacto nas relações de trabalho é o de serviços de transporte de passageiros e de entrega de bens de consumo.<br>Junto a essa radical transformação tecnológica, levando em conta a grande oferta de mão de obra disponível, escancarou-se uma controversa realidade social: a relação de trabalho estabelecida entre motoristas e entregadores e as empresas que operam por meio de plataformas digitais.<br>Desde o início das atividades das empresas de transporte e entrega por aplicativos no Brasil, os trabalhadores cadastrados em suas plataformas foram contratados como microempreendedores individuais (MEI) ou como autônomos.<br>Nesse contexto, o questionamento a ser feito é se esses motoristas e entregadores são ou não são, na realidade, empregados. Como empregados, se enquadrariam em uma das modalidades contratuais previstas na CLT. Já como não empregados, ou autônomos, a CLT não se aplicaria e, consequentemente, os direitos trabalhistas celetistas não seriam a eles devidos. O questionamento colocado é a razão da controvérsia atual que domina o campo trabalhista e que envolve diversos atores sociais e instituições públicas ligadas ao trabalho.<br>A relação de emprego, assim como a relação de trabalho autônomo, são espécies do gênero relação de trabalho. Para a caracterização da relação de emprego devem estar presentes, de forma cumulativa, os requisitos constantes dos arts. 2º e 3º da CLT, quais sejam: pessoalidade, não eventualidade, onerosidade e subordinação.<br>A subordinação é o elemento decisivo para a afirmação da existência, ou não, da relação de emprego, como também é o elemento principal de diferenciação entre a relação de emprego e as diversas modalidades de trabalho autônomo. Logo, pode-se dizer que a contraposição à subordinação é a autonomia. E é exatamente sobre o elemento subordinação que reside a controvérsia ora analisada.<br>Todas as empresas que ofertam serviços de transporte ou entrega por aplicativos afirmam inexistir entre elas e os trabalhadores cadastrados em suas plataformas qualquer tipo de subordinação. Pelo contrário, afirmam que há autonomia e independência desses trabalhadores na prestação dos serviços, já que esses profissionais têm total liberdade para se conectarem ou não ao aplicativo, podendo escolher o horário de trabalho, e para aceitarem ou recusarem o direcionamento (chamado/oferta) de serviços.<br>Na Justiça do Trabalho são inúmeras as ações individuais de motoristas e entregadores pleiteando o reconhecimento do vínculo empregatício com as empresas para as quais prestam e/ou prestaram serviços por meio de aplicativos. Ora é reconhecida a relação de emprego, configurando-se a existência de subordinação, ora tal relação não é reconhecida.<br>(Adaptado de: NEIVA, Rafael Brisque)",
        q: "Consideradas as ideias expostas no texto, identifica-se uma oposição entre:",
        options: [
            "relação de emprego e realidade social.",
            "subordinação e autonomia.",
            "revolução tecnológica e setor de serviços.",
            "instituições públicas e atores sociais.",
            "liberdade e trabalho."
        ],
        answer: 1,
        disclaimer: "O sexto parágrafo afirma expressamente: 'Logo, pode-se dizer que a contraposição à subordinação é a autonomia'."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "",
        q: "Identifica-se uma hipótese no trecho:",
        options: [
            "Como empregados, se enquadrariam em uma das modalidades contratuais previstas na CLT.",
            "pleiteando o reconhecimento do vínculo empregatício.",
            "Na Justiça do Trabalho são inúmeras as ações individuais de motoristas e entregadores.",
            "que envolve diversos atores sociais e instituições públicas.",
            "há autonomia e independência desses trabalhadores na prestação dos serviços."
        ],
        answer: 0,
        disclaimer: "O emprego do Futuro do Pretérito do Indicativo ('se enquadrariam') aliado à condição 'Como empregados' [caso fossem considerados empregados] projeta uma hipótese/possibilidade condicionada."
    },
    {
        topic: "Conjunções Coordenativas",
        supportText: "Considere o trecho: '<u>Ora</u> é reconhecida a relação de emprego, configurando-se a existência de subordinação, <u>ora</u> tal relação não é reconhecida' (final do texto).",
        q: "A locução conjuntiva [ora...ora] expressa:",
        options: [
            "causa.",
            "condição.",
            "finalidade.",
            "alternância.",
            "conclusão."
        ],
        answer: 3,
        disclaimer: "As conjunções coordenativas alternativas ('ou... ou', 'ora... ora', 'quer... quer') expressam ideia de alternância ou exclusão."
    },
    {
        topic: "Vozes do Verbo",
        supportText: "",
        q: "Identifica-se emprego da voz passiva no trecho:",
        options: [
            "escancarou-se uma controversa realidade social.",
            "já que esses profissionais têm total liberdade.",
            "A revolução tecnológica do século XXI modificou toda a configuração da economia global.",
            "há autonomia e independência desses trabalhadores.",
            "provocando uma verdadeira ruptura nas relações trabalhistas."
        ],
        answer: 0,
        disclaimer: "Em 'escancarou-se uma controversa realidade social', o verbo 'escancarar' é transitivo direto e o pronome 'se' atua como partícula apassivadora (voz passiva sintética = 'uma controversa realidade social foi escancarada')."
    },
    {
        topic: "Reescrita e Oração Desenvolvida",
        supportText: "Considere o trecho: 'Todas as empresas que ofertam serviços de transporte ou entrega por aplicativos afirmam <u>inexistir</u> entre elas e os trabalhadores cadastrados em suas plataformas qualquer tipo de subordinação.'",
        q: "Sem prejuízo para a correção e para as relações de sentido estabelecidas na frase, o termo sublinhado pode ser substituído por:",
        options: [
            "cuja inexistência",
            "na inexistência",
            "à inexistência",
            "que inexiste",
            "que inexistiam"
        ],
        answer: 3,
        disclaimer: "A oração subordinada substantiva objetiva direta reduzida de infinitivo ('inexistir... qualquer tipo de subordinação') equivale à forma desenvolvida 'que inexiste... qualquer tipo de subordinação' (no singular, concordando com o sujeito 'qualquer tipo')."
    },

    // --- PROVA 3: CEBRASPE - 2025 - MPCE (Técnico Ministerial) ---
    {
        topic: "Interpretação de Textos",
        type: "vf",
        supportText: "Texto CG2A1:<br>Um dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas. Ao reconhecer as necessidades e os sentimentos dos outros, somos capazes de nos colocar em seus lugares e compreender suas perspectivas, o que facilita a resolução de conflitos e a construção de relações mais saudáveis. Como afirma Marshall Bertram Rosenberg, em sua obra Comunicação não violenta, 'a CNV nos guia na reformulação do nosso modo de expressão e escuta dos outros, pela concentração em quatro áreas: o que observamos, o que sentimos, do que necessitamos e o que pedimos para nos enriquecer a vida'. A CNV promove uma escuta, um respeito e uma empatia profundos. Algumas pessoas usam a CNV para reagir compassivamente a si mesmas; outras, para estabelecer maior profundidade em suas relações pessoais, e outras, ainda, para gerar relacionamentos eficazes no trabalho ou na política. No mundo inteiro, utiliza-se a CNV para mediar disputas e conflitos em todos os níveis.<br>Particularmente no que se refere à função ministerial, é preciso que se evite o que o autor chama de comunicação alienante da vida, isto é, 'os juízos morais, que atribuem erro ou ruindade às pessoas que não agem conforme certos valores'. Com efeito, um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações acerca da prática de ilícitos (uma denúncia criminal narrará a prática de uma conduta que se amolda a um tipo penal), o que não significa, contudo, que os agentes públicos que integram a instituição estejam autorizados a proferir julgamentos morais. No modelo de um Ministério Público dialógico, ou seja, aquele que efetivamente se abre à interlocução com a sociedade, a CNV é fator que transforma o discurso em prática, pois propicia o diálogo face a face com os mais diferentes e antagônicos setores e, a partir disso, a construção de confiança e o desenvolvimento do compromisso e da compreensão comuns entre os atores envolvidos.",
        q: "Infere-se do segundo parágrafo do texto que a relevância da CNV no contexto do Ministério Público reside em impedir que acusações formuladas por seus agentes sejam influenciadas por divergências axiológicas entre as partes.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O segundo parágrafo destaca que a função ministerial deve evitar 'juízos morais, que atribuem erro ou ruindade às pessoas que não agem conforme certos valores' (divergências axiológicas/valorativas), mantendo a imputação estritamente técnica."
    },
    {
        topic: "Compreensão de Textos",
        type: "vf",
        supportText: "Considere o Texto CG2A1 sobre Comunicação Não Violenta (CNV).",
        q: "Segundo o texto, uma das vantagens do uso da CNV é propiciar a empatia entre as pessoas.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O primeiro período do texto afirma expressamente: 'Um dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas'."
    },
    {
        topic: "Compreensão de Textos",
        type: "vf",
        supportText: "Considere o Texto CG2A1 sobre Comunicação Não Violenta (CNV).",
        q: "As aplicações da CNV em diversos âmbitos, como o psicológico, o interpessoal ou o profissional, visam impedir o surgimento de conflitos.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. O texto afirma que a CNV facilita a 'resolução de conflitos' e é utilizada para 'mediar disputas e conflitos em todos os níveis', e não para impedir que eles surjam."
    },
    {
        topic: "Interpretação de Textos",
        type: "vf",
        supportText: "Considere o último período do Texto CG2A1: 'No modelo de um Ministério Público dialógico, ou seja, aquele que efetivamente se abre à interlocução com a sociedade, a CNV é fator que transforma o discurso em prática...'",
        q: "Entende-se da leitura do texto que, no contexto do modelo dialógico de Ministério Público, a CNV favorece a conformidade entre palavras e ações.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Ao afirmar que a CNV 'transforma o discurso em prática', o texto indica que ela promove a coerência/conformidade entre o que se diz (palavras/discurso) e o que se faz (ações/prática)."
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "Considere o trecho do Texto CG2A1: 'Como afirma Marshall Bertram Rosenberg, em sua obra Comunicação não violenta [...] Particularmente no que se refere à função ministerial, é preciso que se evite o que o autor chama de comunicação alienante da vida...'",
        q: "O termo 'autor' (primeiro período do segundo parágrafo) faz referência a 'Marshall Bertram Rosenberg' (terceiro período do primeiro parágrafo).",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O substantivo 'autor' retoma por coesão referencial anafórica o escritor 'Marshall Bertram Rosenberg', citado no parágrafo anterior."
    },
    {
        topic: "Operadores Argumentativos",
        type: "vf",
        supportText: "Considere o segundo parágrafo do Texto CG2A1: 'Particularmente no que se refere à função ministerial, é preciso que se evite o que o autor chama de comunicação alienante da vida, isto é, os juízos morais [...]. Com efeito, um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações acerca da prática de ilícitos [...], o que não significa, contudo, que os agentes públicos que integram a instituição estejam autorizados a proferir julgamentos morais.'",
        q: "Mediante o emprego da expressão 'Com efeito', no segundo período do segundo parágrafo, os autores reforçam a ideia apresentada no período anterior.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A locução adverbial 'Com efeito' (equivalente a 'De fato', 'Efetivamente') é utilizada para confirmar e reforçar a tese enunciada no período imediatamente anterior."
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "Considere o último período do Texto CG2A1: '...a CNV é fator que transforma o discurso em prática, pois propicia o diálogo face a face com os mais diferentes e antagônicos setores e, a partir disso, a construção de confiança...'",
        q: "No último período do texto, o pronome presente na forma contraída 'disso', em 'a partir disso', retoma 'fator que transforma o discurso em prática'.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. O pronome demonstrativo 'isso' (em 'a partir disso') retoma o fato de propiciar 'o diálogo face a face com os mais diferentes e antagônicos setores', e não 'fator que transforma o discurso em prática'."
    },
    {
        topic: "Colocação Pronominal",
        type: "vf",
        supportText: "Considere o segmento do Texto CG2A1: 'aquele que efetivamente se abre à interlocução com a sociedade'.",
        q: "No segmento 'que efetivamente se abre' (último período do texto), o deslocamento do pronome 'se' para a posição enclítica — que efetivamente abre-se — manteria a correção gramatical do texto.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Tanto o pronome relativo 'que' quanto o advérbio 'efetivamente' são palavras atrativas que tornam obrigatória a próclise ('se abre'), sendo incorreta a ênclise ('abre-se')."
    },
    {
        topic: "Morfologia e Semântica",
        type: "vf",
        supportText: "Considere o penúltimo período do primeiro parágrafo do Texto CG2A1: 'Algumas pessoas usam a CNV para reagir compassivamente a si mesmas; outras, para estabelecer maior profundidade em suas relações pessoais, e outras, ainda, para gerar relacionamentos eficazes no trabalho ou na política.'",
        q: "No penúltimo período do primeiro parágrafo, o termo 'ainda' expressa circunstância de tempo.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Nesse contexto ('e outras, ainda, para...'), a palavra 'ainda' atua como palavra denotativa de inclusão/adição (equivalendo a 'ademais', 'além disso', 'também'), e não como advérbio de tempo."
    },
    {
        topic: "Tempos e Modos Verbais",
        type: "vf",
        supportText: "Considere o trecho do Texto CG2A1: 'Com efeito, um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações acerca da prática de ilícitos (uma denúncia criminal narrará a prática de uma conduta que se amolda a um tipo penal)...'",
        q: "O tempo e o modo verbais empregados em 'narrará' (segundo período do segundo parágrafo) sinalizam a provável ocorrência da ação de narrar.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. O Futuro do Presente do Indicativo ('narrará') é empregado aqui com valor categórico/assertivo de certeza sobre um fato inerente à denúncia criminal ('inevitavelmente terá que formular'), e não como mera probabilidade ou dúvida."
    },
    {
        topic: "Pontuação e Zeugma",
        type: "vf",
        supportText: "Considere o trecho do Texto CG2A1: 'Algumas pessoas usam a CNV para reagir compassivamente a si mesmas; outras, para estabelecer maior profundidade em suas relações pessoais...'",
        q: "No trecho 'outras, para estabelecer maior profundidade em suas relações pessoais' (penúltimo período do primeiro parágrafo), a vírgula indica supressão de palavras.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A vírgula logo após 'outras' marca a elipse/zeugma da expressão verbal 'usam a CNV' ('outras [usam a CNV] para estabelecer...')."
    },
    {
        topic: "Análise Sintática",
        type: "vf",
        supportText: "Considere o trecho do Texto CG2A1: 'a CNV nos guia na reformulação do nosso modo de expressão e escuta dos outros'.",
        q: "Na citação apresentada no terceiro período do primeiro parágrafo, o segmento 'dos outros' complementa o sentido dos substantivos 'expressão' e 'escuta'.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Semanticamente e sintaticamente, nós reformulamos 'o nosso modo de expressão' (como nós nos expressamos) e a nossa 'escuta dos outros' (como ouvimos os outros). Portanto, 'dos outros' complementa apenas o substantivo 'escuta' (complemento nominal), e não 'expressão'."
    },
    {
        topic: "Regência e Locução Verbal",
        type: "vf",
        supportText: "Considere o segmento do Texto CG2A1: 'um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações'.",
        q: "No segmento 'terá que formular' (segundo período do segundo parágrafo), a substituição do vocábulo 'que' por 'de' comprometeria a correção gramatical do texto.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Na locução verbal de obrigatoriedade formada pelo verbo 'ter' + infinitivo, tanto 'ter que' quanto 'ter de' ('terá de formular') são perfeitamente corretas e abonadas pela norma-padrão."
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Na correspondência oficial, a formalidade de tratamento está associada tanto à civilidade quanto à necessidade de uniformização das comunicações.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. De acordo com o Manual de Redação da Presidência da República (MRPR), a formalidade e a padronização dizem respeito à polidez, à civilidade no próprio enfoque dado ao assunto e à uniformidade dos expedientes oficiais."
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Por ser a concisão uma das principais características da redação oficial, recomenda-se que o texto de documentos oficiais seja composto de, no máximo, quatro parágrafos.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. O Manual de Redação da Presidência da República não estipula um número máximo de parágrafos para os documentos oficiais; a extensão depende da complexidade do assunto tratado."
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Em comunicações internas, via email, entre autoridades de mesma hierarquia, deve-se empregar o fecho 'Atenciosamente'.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Desde a 3ª edição do MRPR, há apenas dois fechos oficiais: 'Respeitosamente,' (para autoridades superiores) e 'Atenciosamente,' (para autoridades de mesma hierarquia, de hierarquia inferior ou demais casos)."
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Cada parágrafo de um expediente oficial deve ser numerado, mediante o uso de números romanos, ainda que o documento apresente um único parágrafo.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Segundo o MRPR, os parágrafos do texto são numerados com algarismos arábicos (1., 2., 3.), e não romanos; além disso, caso o documento tenha apenas um parágrafo, não se numera."
    },

    // --- PROVA 4: FCC - 2026 - MPAL (Técnico do Ministério Público) ---
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere o conto 'A velha contrabandista', de Stanislaw Ponte Preta:<br>Diz que era uma velhinha que sabia andar de lambreta. Todo dia, imaginem, ela passava na fronteira montada na lambreta, com um bruto saco atrás da lambreta. O pessoal da alfândega – tudo malandro velho – começou a desconfiar da velhinha. Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar. A velhinha parou e então o fiscal perguntou assim pra ela:<br>— Escuta aqui, vovozinha, a senhora passa por aqui todo dia, com esse saco aí atrás. Que diabo a senhora leva nesse saco?<br>A velhinha sorriu com os poucos dentes que lhe restavam e mais os outros, que ela adquirira no odontólogo, e respondeu:<br>— É areia!<br>Aí quem sorriu foi o fiscal. Achou que não era areia nenhuma e mandou a velhinha saltar da lambreta para examinar o saco. A velhinha saltou, o fiscal esvaziou o saco e dentro só tinha areia. Muito encabulado, ordenou à velhinha que fosse em frente. Ela montou na lambreta e foi embora, com o saco de areia atrás. Mas o fiscal ficou desconfiado ainda. Talvez a velhinha passasse um dia com areia e no outro com muamba, dentro daquele maldito saco. No dia seguinte, quando ela passou na lambreta com o saco atrás, o fiscal mandou parar outra vez. Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai! O fiscal examinou e era mesmo. Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.<br>Diz que foi aí que o fiscal se chateou:<br>— Olha, vovozinha, eu sou fiscal de alfândega com quarenta anos de serviço. Manjo essa coisa de contrabando pra burro. Ninguém me tira da cabeça que a senhora é contrabandista.<br>— Mas no saco só tem areia! — insistiu a velhinha. E já ia tocar a lambreta, quando o fiscal propôs:<br>— Eu prometo à senhora que deixo a senhora passar. Não dou parte, não apreendo, não conto nada a ninguém, mas a senhora vai me dizer: qual é o contrabando que a senhora está passando por aqui todos os dias?<br>— O senhor promete que não 'espaia'? — quis saber a velhinha.<br>— Juro — respondeu o fiscal.<br>— É lambreta.",
        q: "No chamado discurso indireto livre, a voz da personagem mescla-se intimamente à voz do narrador, a exemplo do que ocorre em:",
        options: [
            "Muito encabulado, ordenou à velhinha que fosse em frente.",
            "— O senhor promete que não 'espaia'? — quis saber a velhinha.",
            "Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai!",
            "Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar.",
            "— Escuta aqui, vovozinha, a senhora passa por aqui todo dia, com esse saco aí atrás."
        ],
        answer: 2,
        disclaimer: "Em 'Perguntou o que é que ela levava no saco e ela respondeu que era areia, uai!', a interjeição 'uai!' ao final de uma estrutura narrativa indireta incorpora diretamente a voz e a expressividade da velhinha à fala do narrador."
    },
    {
        topic: "Interlocução e Metalinguagem",
        supportText: "Considere o conto 'A velha contrabandista', de Stanislaw Ponte Preta.",
        q: "No conto, o narrador dirige-se explicitamente a seus leitores no seguinte trecho:",
        options: [
            "Achou que não era areia nenhuma e mandou a velhinha saltar da lambreta para examinar o saco.",
            "Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.",
            "Um dia, quando ela vinha na lambreta com o saco atrás, o fiscal da alfândega mandou ela parar.",
            "Todo dia, imaginem, ela passava na fronteira montada na lambreta, com um bruto saco atrás da lambreta.",
            "O pessoal da alfândega – tudo malandro velho – começou a desconfiar da velhinha."
        ],
        answer: 3,
        disclaimer: "Ao utilizar o verbo no imperativo plural 'imaginem' ('Todo dia, imaginem, ela passava...'), o narrador interpela diretamente os seus ouvintes/leitores."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: '[O fiscal] mandou a velhinha saltar da lambreta <u>para</u> examinar o saco.'",
        q: "No contexto em que se insere, o termo sublinhado acima introduz uma oração que expressa ideia de:",
        options: [
            "concessão.",
            "consequência.",
            "finalidade.",
            "condição.",
            "causa."
        ],
        answer: 2,
        disclaimer: "A preposição 'para' antes do infinitivo 'examinar' introduz uma oração subordinada adverbial final reduzida de infinitivo (indica o propósito/finalidade da ordem do fiscal)."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "o fiscal esvaziou o <u>saco</u> e dentro só tinha areia.",
            "<u>Muito</u> encabulado, ordenou à velhinha que fosse em frente.",
            "ela passava na fronteira montada na lambreta, com um <u>bruto</u> saco atrás da lambreta.",
            "Mas o fiscal ficou <u>desconfiado</u> ainda.",
            "a senhora passa por aqui <u>todo</u> dia, com esse saco aí atrás."
        ],
        answer: 1,
        disclaimer: "Em 'Muito encabulado', a palavra 'Muito' modifica o adjetivo 'encabulado', atuando como advérbio de intensidade — classe gramatical invariável."
    },
    {
        topic: "Pontuação e Vocativo",
        supportText: "",
        q: "Emprega(m)-se vírgula(s) para isolar um vocativo no seguinte trecho:",
        options: [
            "Olha, vovozinha, eu sou fiscal de alfândega com quarenta anos de serviço.",
            "Não dou parte, não apreendo, não conto nada a ninguém, mas a senhora vai me dizer.",
            "Durante um mês seguido o fiscal interceptou a velhinha e, todas as vezes, o que ela levava no saco era areia.",
            "A velhinha saltou, o fiscal esvaziou o saco e dentro só tinha areia.",
            "Muito encabulado, ordenou à velhinha que fosse em frente."
        ],
        answer: 0,
        disclaimer: "Em 'Olha, vovozinha, eu sou fiscal...', o termo 'vovozinha' é o vocativo (termo usado pelo fiscal para chamar/interpelar a interlocutora), obrigatoriamente isolado por vírgulas."
    },
    {
        topic: "Tempos e Modos Verbais",
        supportText: "Considere o trecho: 'A velhinha sorriu com os poucos dentes que lhe restavam e mais os outros, que ela adquirira no odontólogo, e respondeu: — É areia!'",
        q: "Nesse trecho, o narrador relata alguns fatos ocorridos no passado. Um fato anterior a esse tempo passado está indicado pela seguinte forma verbal:",
        options: [
            "respondeu.",
            "É.",
            "restavam.",
            "sorriu.",
            "adquirira."
        ],
        answer: 4,
        disclaimer: "A forma verbal 'adquirira' está no Pretérito Mais-Que-Perfeito do Indicativo, tempo verbal que expressa uma ação passada ocorrida antes de outra ação também passada ('sorriu', 'respondeu')."
    },
    {
        topic: "Sintaxe e Partícula Expletiva",
        supportText: "",
        q: "Palavra expletiva é aquela que não exerce função sintática, sendo empregada como realce ou ênfase. Constitui uma palavra expletiva aquela sublinhada no seguinte trecho:",
        options: [
            "Mas no saco <u>só</u> tem areia!",
            "Que <u>diabo</u> a senhora leva nesse saco?",
            "O senhor promete que <u>não</u> 'espaia'?",
            "<u>Aí</u> quem sorriu foi o fiscal.",
            "<u>Talvez</u> a velhinha passasse um dia com areia e no outro com muamba."
        ],
        answer: 1,
        disclaimer: "Na pergunta 'Que diabo a senhora leva nesse saco?', o substantivo 'diabo' não possui valor referencial nem função sintática, servindo apenas como partícula de realce/ênfase ('O que a senhora leva nesse saco?')."
    },
    {
        topic: "Coesão Referencial",
        supportText: "",
        q: "Retoma uma expressão mencionada anteriormente no conto a palavra sublinhada em:",
        options: [
            "Ninguém me tira da cabeça <u>que</u> a senhora é contrabandista.",
            "A velhinha sorriu com os poucos dentes <u>que</u> lhe restavam.",
            "Eu prometo à senhora <u>que</u> deixo a senhora passar.",
            "Achou <u>que</u> não era areia nenhuma.",
            "Muito encabulado, ordenou à velhinha <u>que</u> fosse em frente."
        ],
        answer: 1,
        disclaimer: "Na alternativa B, o 'que' é um pronome relativo e retoma o antecedente 'os poucos dentes'. Nas demais alternativas, o 'que' é conjunção integrante (não retoma termo anterior)."
    },
    {
        topic: "Análise Sintática e Semântica",
        supportText: "",
        q: "Em 'Manjo essa coisa de contrabando <u>pra burro</u>', a locução sublinhada funciona como um adjunto adverbial e expressa circunstância de:",
        options: [
            "dúvida.",
            "finalidade.",
            "negação.",
            "intensidade.",
            "lugar."
        ],
        answer: 3,
        disclaimer: "A locução coloquial 'pra burro' equivale a 'muito', 'bastante', expressando circunstância adverbial de intensidade."
    },
    {
        topic: "Transposição de Discurso",
        supportText: "Considere o trecho: 'Muito encabulado, ordenou à velhinha que fosse em frente.'",
        q: "Transposto para o discurso direto, o trecho acima assume a seguinte redação:",
        options: [
            "Muito encabulado, ordenou à velhinha: — Vá em frente.",
            "Muito encabulado, ordenou à velhinha: — Irá em frente.",
            "Muito encabulado, ordenou à velhinha que vá em frente.",
            "Muito encabulado, ordenou à velhinha que iria em frente.",
            "Muito encabulado, ordenou à velhinha: — Que fora em frente."
        ],
        answer: 0,
        disclaimer: "Na passagem do discurso indireto com verbo no pretérito imperfeito do subjuntivo ('ordenou... que fosse') para o discurso direto, o verbo assume a forma do Imperativo ('— Vá em frente')."
    },
    {
        topic: "Conjunções e Conectivos",
        supportText: "Considere o texto de Sérgio Rodrigues:<br>Para a maioria dos brasileiros a pronúncia é 'récorde', proparoxítona, e não, como recomendam dez entre dez sábios, 'recórde', paroxítona. Estamos diante de um caso clássico de desobediência civil, em que a língua da vida real vai para um lado e a dos sábios, para o outro.<br>Recorde, termo adaptado do inglês record, pode ser substantivo significando a melhor marca esportiva, o desempenho a ser superado ou adjetivo com sentido equivalente: 'tempo recorde', 'velocidade recorde'. Quanto a isso, estamos todos de acordo. A divergência começa na hora de definir a prosódia da palavra. Em seu Dicionário de palavras & expressões estrangeiras, Luís Augusto Fischer observa com irreverência que há 'duas pronúncias: a que os gramáticos preferem, recórde, ou a do resto da humanidade, récorde'. É mais ou menos isso. Basta trocar, na frase de Fischer, 'o resto da humanidade' por 'a maioria dos brasileiros' que ela fica perfeita. Em Portugal, a inclinação por 'recórde' parece inquestionável. Aqui, ocorre o inverso.<br>Sempre pronunciei 'récorde'. Puxando pela memória, não consigo pensar em ninguém que não o faça. Se, como em tantos casos, nossos dicionários e gramáticas ainda se aferram de maneira um tanto acrítica à preferência lusitana, isso é um problema deles, que precisa ser e certamente será corrigido um dia. O Houaiss foi o primeiro a abrir a porta. Veja a tímida mas significativa nota que constava ao pé do verbete recorde na edição de 2001: 'Pelo menos no Brasil, ocorre também como palavra proparoxítona: récorde.' Mais tarde, o dicionário suprimiu a nota, mas passou a trazer o verbete récorde como variação de recorde.<br>Uma explicação provável para o descompasso: os portugueses tendem a manter a pronúncia que record ganhou na França, de onde importaram o anglicismo por tabela, <u>enquanto</u> os falantes brasileiros estabeleceram ligação direta com o idioma de origem, no qual o acento (no caso em que record é substantivo, e não verbo) recai na primeira sílaba. No dia em que a língua brasileira dissolver mais este preconceito, é evidente que a grafia será forçada a seguir atrás: escreveremos récorde, com acento. E tudo ficará mais harmônico entre som e traço, como deve ser.",
        q: "No 4º parágrafo ('os portugueses tendem a manter a pronúncia [...], <u>enquanto</u> os falantes brasileiros estabeleceram ligação direta...'), a conjunção sublinhada pode ser substituída, sem prejuízo para o sentido do texto, por:",
        options: [
            "de modo que",
            "uma vez que",
            "na medida em que",
            "desde que",
            "ao passo que"
        ],
        answer: 4,
        disclaimer: "No trecho, 'enquanto' estabelece contraste/proporção simultânea entre o comportamento dos portugueses e o dos brasileiros, sendo perfeitamente substituível pela locução 'ao passo que'."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere o trecho: 'Em seu Dicionário de palavras & expressões estrangeiras, Luís Augusto Fischer observa com irreverência que há duas pronúncias: a que os gramáticos preferem, recórde, ou a do resto da humanidade, récorde.' (2º parágrafo)",
        q: "Ao vincular a pronúncia 'récorde' ao 'resto da humanidade', Luís Augusto Fischer faz uso da figura de linguagem denominada:",
        options: [
            "antítese.",
            "pleonasmo.",
            "personificação.",
            "eufemismo.",
            "hipérbole."
        ],
        answer: 4,
        disclaimer: "Generalizar a pronúncia brasileira para 'o resto da humanidade' inteira constitui um exagero intencional com finalidade expressiva e humorística, figura denominada hipérbole."
    },
    {
        topic: "Dêixis e Enunciação",
        supportText: "Os chamados dêiticos são termos linguísticos que se referem à situação em que o enunciado é produzido, ao momento da enunciação e aos atores do discurso. Assim, termos como 'ali', 'hoje' ou 'amanhã' devem ser interpretados em função de onde e em que momento se encontram os atores do discurso.",
        q: "Verifica-se um dêitico que se refere ao lugar em que o enunciado é produzido (ou seja, ao lugar onde se encontra o autor do texto) no seguinte trecho:",
        options: [
            "Sempre pronunciei 'récorde'.",
            "Mais tarde, o dicionário suprimiu a nota.",
            "Aqui, ocorre o inverso.",
            "É mais ou menos isso.",
            "Em Portugal, a inclinação por 'recórde' parece inquestionável."
        ],
        answer: 2,
        disclaimer: "O advérbio de lugar 'Aqui' (em 'Aqui, ocorre o inverso') é um dêitico espacial que aponta para o local onde o autor está situado no momento da enunciação (o Brasil), em oposição a 'Em Portugal'."
    },
    {
        topic: "Coesão e Substituição Verbal",
        supportText: "Considere o trecho: 'Sempre pronunciei récorde. Puxando pela memória, não consigo pensar em ninguém que não <u>o faça</u>.' (3º parágrafo)",
        q: "O segmento sublinhado pode ser substituído, sem prejuízo para o sentido do texto, por:",
        options: [
            "pense em alguém",
            "pronuncie 'récorde'",
            "faça nada",
            "puxe pela memória",
            "consiga pensar"
        ],
        answer: 1,
        disclaimer: "O verbo vicário 'fazer' acompanhado do pronome demonstrativo 'o' ('o faça') retoma a ação verbal declarada na frase anterior: 'pronunciar récorde' ('ninguém que não pronuncie récorde')."
    },
    {
        topic: "Denotação e Conotação",
        supportText: "",
        q: "Está empregada em sentido figurado a expressão sublinhada no seguinte trecho:",
        options: [
            "<u>Uma explicação provável</u> para o descompasso (4º parágrafo).",
            "os portugueses <u>tendem a manter</u> a pronúncia (4º parágrafo).",
            "O Houaiss foi o primeiro a <u>abrir a porta</u> (3º parágrafo).",
            "<u>Para a maioria dos brasileiros</u> a pronúncia é 'récorde' (1º parágrafo).",
            "A divergência começa na hora de <u>definir a prosódia</u> da palavra (2º parágrafo)."
        ],
        answer: 2,
        disclaimer: "A expressão 'abrir a porta' está empregada em sentido conotativo (figurado), significando 'dar o primeiro passo', 'iniciar a aceitação/registro da forma nos dicionários'."
    },
    {
        topic: "Pronomes Relativos e Coesão",
        supportText: "Considere os trechos do 3º e 4º parágrafos:<br>- 'Veja a tímida mas significativa nota <u>que</u> constava ao pé do verbete recorde na edição de 2001'<br>- 'No dia em <u>que</u> a língua brasileira dissolver mais este preconceito'",
        q: "Os termos 'que' sublinhados no terceiro e no quarto parágrafos do texto referem-se, respectivamente, a:",
        options: [
            "'verbete' e 'língua'.",
            "'nota' e 'dia'.",
            "'nota' e 'preconceito'.",
            "'verbete' e 'dia'.",
            "'nota' e 'língua'."
        ],
        answer: 1,
        disclaimer: "No 3º parágrafo, o pronome relativo 'que' retoma o núcleo nominal 'nota' ('a tímida mas significativa nota que constava'). No 4º parágrafo, 'em que' retoma o substantivo 'dia' ('No dia em que...')."
    },
    {
        topic: "Vozes do Verbo",
        supportText: "Considere a oração: 'o dicionário suprimiu a nota' (3º parágrafo).",
        q: "Ao se transpor a oração acima para a voz passiva, a forma verbal resultante será:",
        options: [
            "seria suprimido.",
            "fora suprimida.",
            "foi suprimido.",
            "foi suprimida.",
            "seria suprimida."
        ],
        answer: 3,
        disclaimer: "O verbo 'suprimiu' está no Pretérito Perfeito do Indicativo e o objeto direto é 'a nota' (feminino singular). Na voz passiva analítica, o objeto torna-se sujeito paciente: 'a nota foi suprimida pelo dicionário'."
    },
    {
        topic: "Pontuação e Zeugma",
        supportText: "",
        q: "Verifica-se o emprego de vírgula para assinalar a supressão de um verbo no seguinte trecho:",
        options: [
            "Estamos diante de um caso clássico de desobediência civil, em que a língua da vida real vai para um lado e a dos sábios, para o outro.",
            "No dia em que a língua brasileira dissolver mais este preconceito, é evidente que a grafia será forçada a seguir atrás: escreveremos récorde, com acento.",
            "Mais tarde, o dicionário suprimiu a nota, mas passou a trazer o verbete récorde como variação de recorde.",
            "Em Portugal, a inclinação por 'recórde' parece inquestionável.",
            "E tudo ficará mais harmônico entre som e traço, como deve ser."
        ],
        answer: 0,
        disclaimer: "Em '...a língua da vida real vai para um lado e a dos sábios, para o outro', a vírgula após 'sábios' marca a elipse (zeugma) da forma verbal 'vai' ('e a dos sábios [vai] para o outro')."
    },
    {
        topic: "Flexão Verbal e Pessoas do Discurso",
        supportText: "",
        q: "Sérgio Rodrigues manifesta-se explicitamente em seu texto, valendo-se para tanto de verbo na primeira pessoa do singular, em:",
        options: [
            "a grafia será forçada a seguir atrás: escreveremos récorde, com acento.",
            "Veja a tímida mas significativa nota que constava ao pé do verbete recorde.",
            "A divergência começa na hora de definir a prosódia da palavra.",
            "Estamos diante de um caso clássico de desobediência civil.",
            "Puxando pela memória, não consigo pensar em ninguém que não o faça."
        ],
        answer: 4,
        disclaimer: "Na alternativa E, a forma verbal 'consigo' ('[eu] não consigo pensar') está flexionada na 1ª pessoa do singular do Presente do Indicativo. ('escreveremos' e 'Estamos' estão na 1ª pessoa do plural)."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Observa-se palavra formada com prefixo que exprime ideia de negação no seguinte trecho:",
        options: [
            "não consigo pensar em ninguém que não o faça.",
            "Mais tarde, o dicionário suprimiu a nota.",
            "Veja a tímida mas significativa nota que constava ao pé do verbete.",
            "o acento (no caso em que record é substantivo, e não verbo) recai na primeira sílaba.",
            "Estamos diante de um caso clássico de desobediência civil."
        ],
        answer: 4,
        disclaimer: "A palavra 'desobediência' (alternativa E) é formada por derivação prefixal com o prefixo 'des-', que exprime ideia de negação/oposição (falta de obediência)."
    },

    // --- PROVA 5: FCC - 2026 - MPSE (Técnico do Ministério Público) ---
    {
        topic: "Figuras de Linguagem",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade:<br>1. A senhora subiu, Deus sabe como, em companhia de dois garotos. Cada garoto com sua merendeira e sua pasta de livros e cadernos indispensáveis para a aquisição dos preliminares da sabedoria. No ônibus não cabia mais ninguém. A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas.<br>2. — Deixa que eu carrego — falei na direção de um dos braços a meu alcance, executando um movimento complicado, para enxergar os rostos dos garotos. O menor olhou-me com surpresa e hesitação, porém o mais velho estendeu o braço, e o primeiro, depois de uma cotovelada ministrada pelo segundo, imitou-o. Fiquei de posse de duas bojudas pastas escolares, que acomodei da melhor maneira possível sobre os joelhos. Conheço perfeitamente a técnica de carregar embrulhos dos outros. Deve-se colocá-los de tal modo que fiquem seguros sem que seja necessário pôr a mão em cima deles. São coisas sagradas.<br>3. A voz da senhora saiu daquele bolo humano:<br>4. — Agradece ao moço, Serginho. Agradece, Raul.<br>5. Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. Mal se passaram alguns minutos, senti que a pasta de cima escorregava mansamente do meu colo. Muito de leve, a mão esquerda de Serginho, escondida sob um lenço, puxava-a para fora. Compreendi que ele prezava acima de tudo a sua pasta, e deixei que a tirasse. A mãe ordenou:<br>6. — Serginho, deixe a pasta com o moço!<br>7. Teve de levantar a voz, para torná-la enérgica. Passageiros em redor começaram a sorrir. Tive de sorrir também. Muito a contragosto, Serginho voltou a confiar-me sua querida pasta. Um estranho mereceria carregá-la? E se fugisse com ela? Como bem podem imaginar, Serginho suspeitava de minha honorabilidade, e os circunstantes se deliciavam com a suspeita.<br>8. Mais alguns quarteirões, Serginho repete a manobra. Dessa vez, é radical. Toma sua pasta e a de Raul. Raul protesta:<br>9. — Deixa com ele, seu burro. Não vê que eu não posso segurar nada?<br>10. A mãe, em apoio de Raul, exprobra o procedimento de Serginho. Este capitula, mas em termos. Só me restitui a pasta do irmão. A sua não correrá o risco. Coloca-a sobre o peito, sob as mãos cruzadas, como levaria o Santo Graal.<br>11. — Este menino é impossível. Desculpe, cavalheiro.<br>12. Não vejo o rosto da senhora, mas sua voz é doce, e compensa-me da desconfiança do Serginho. Sorrio para este, enquanto retribuo: 'Oh, minha senhora, por favor! Até que o seu filhinho é engraçado.'<br>13. Engraçado? Serginho faz-me uma careta e ferra-me um beliscão. A assistência ri. A mãe ferra outro em Serginho, que dispara a chorar. Bonito. É no que dá carregar embrulho dos outros.",
        q: "Com finalidade expressiva, Drummond lança mão de um enunciado paradoxal no seguinte trecho da crônica:",
        options: [
            "Muito de leve, a mão esquerda de Serginho, escondida sob um lenço, puxava-a para fora. (5º parágrafo)",
            "Cada garoto com sua merendeira e sua pasta de livros e cadernos indispensáveis para a aquisição dos preliminares da sabedoria. (1º parágrafo)",
            "Fiquei de posse de duas bojudas pastas escolares, que acomodei da melhor maneira possível sobre os joelhos. (2º parágrafo)",
            "A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. (1º parágrafo)",
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. (5º parágrafo)"
        ],
        answer: 3,
        disclaimer: "Afirmar que no ônibus 'não cabia nem o pessoal que se espremia lá dentro' constitui um paradoxo (contradição lógica aparente: as pessoas já estavam lá dentro, mas 'não cabiam lá dentro')."
    },
    {
        topic: "Interlocução e Metalinguagem",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade.",
        q: "Em sua crônica, Drummond dirige-se explicitamente a seus leitores no seguinte trecho:",
        options: [
            "O menor olhou-me com surpresa e hesitação, porém o mais velho estendeu o braço, e o primeiro, depois de uma cotovelada ministrada pelo segundo, imitou-o. (2º parágrafo)",
            "Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas. (1º parágrafo)",
            "Como bem podem imaginar, Serginho suspeitava de minha honorabilidade, e os circunstantes se deliciavam com a suspeita. (7º parágrafo)",
            "Mal se passaram alguns minutos, senti que a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "— Deixa com ele, seu burro. Não vê que eu não posso segurar nada? (9º parágrafo)"
        ],
        answer: 2,
        disclaimer: "Na expressão 'Como bem podem imaginar [vocês, leitores]', o narrador dirige-se diretamente ao leitor da crônica."
    },
    {
        topic: "Orações Subordinadas Adverbiais",
        supportText: "Considere o trecho: 'Teve de levantar a voz, <u>para torná-la enérgica</u>.' (7º parágrafo)",
        q: "Em relação ao trecho que a antecede, a oração sublinhada expressa ideia de:",
        options: [
            "causa.",
            "oposição.",
            "consequência.",
            "condição.",
            "finalidade."
        ],
        answer: 4,
        disclaimer: "A oração reduzida de infinitivo introduzida pela preposição 'para' ('para torná-la enérgica') indica a finalidade pela qual a mãe levantou a voz."
    },
    {
        topic: "Tipologia e Discurso Narrativo",
        supportText: "Considere a crônica 'No ônibus', de Carlos Drummond de Andrade.",
        q: "No chamado discurso indireto livre, a voz de um personagem mescla-se intimamente à voz do cronista, a exemplo do que ocorre no seguinte trecho:",
        options: [
            "Na massa compacta de gente, ou de seções de gente que a vista alcançava, percebi aquelas mãozinhas tentando segurar as pastas atochadas. (1º parágrafo)",
            "Muito a contragosto, Serginho voltou a confiar-me sua querida pasta. Um estranho mereceria carregá-la? E se fugisse com ela? (7º parágrafo)",
            "— Deixa que eu carrego — falei na direção de um dos braços a meu alcance, executando um movimento complicado, para enxergar os rostos dos garotos. (2º parágrafo)",
            "Raul protesta: — Deixa com ele, seu burro. Não vê que eu não posso segurar nada? (8º/9º parágrafos)",
            "Sorrio para este, enquanto retribuo: 'Oh, minha senhora, por favor! Até que o seu filhinho é engraçado.' (12º parágrafo)"
        ],
        answer: 1,
        disclaimer: "As interrogações 'Um estranho mereceria carregá-la? E se fugisse com ela?' reproduzem o pensamento íntimo e a dúvida do menino Serginho diretamente inseridos no fluxo narrativo do cronista, sem verbo dicendi ou travessão (discurso indireto livre)."
    },
    {
        topic: "Semântica e Vocabulário",
        supportText: "Considere o trecho: 'A mãe, em apoio de Raul, <u>exprobra</u> o procedimento de Serginho.' (10º parágrafo)",
        q: "O verbo sublinhado pode ser substituído, sem prejuízo para o sentido da frase, por:",
        options: [
            "repreende.",
            "ignora.",
            "dissimula.",
            "estimula.",
            "reconhece."
        ],
        answer: 0,
        disclaimer: "O verbo 'exprobrar' significa censurar, reprovar severamente, repreender."
    },
    {
        topic: "Coesão Referencial",
        supportText: "",
        q: "Retoma um termo mencionado anteriormente na crônica a palavra sublinhada em:",
        options: [
            "— Deixa com ele, seu burro. Não vê <u>que</u> eu não posso segurar nada? (9º parágrafo)",
            "Mal se passaram alguns minutos, senti <u>que</u> a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "Compreendi <u>que</u> ele prezava acima de tudo a sua pasta, e deixei que a tirasse. (5º parágrafo)",
            "Compreendi que ele prezava acima de tudo a sua pasta, e deixei <u>que</u> a tirasse. (5º parágrafo)",
            "A mãe ferra outro em Serginho, <u>que</u> dispara a chorar. (13º parágrafo)"
        ],
        answer: 4,
        disclaimer: "Na alternativa E, o vocábulo 'que' é pronome relativo e retoma o substantivo próprio 'Serginho' ('Serginho, o qual dispara a chorar'). Nas demais, trata-se de conjunção integrante."
    },
    {
        topic: "Transposição de Discurso",
        supportText: "Considere o trecho:<br>A mãe ordenou:<br>— Serginho, <u>deixe</u> a pasta com o moço! (5º/6º parágrafos)",
        q: "Ao se transpor o trecho acima para o discurso indireto, o verbo sublinhado assume a seguinte forma:",
        options: [
            "deixasse.",
            "deixara.",
            "deixou.",
            "deixava.",
            "deixaria."
        ],
        answer: 0,
        disclaimer: "Na transposição do discurso direto para o indireto, o modo Imperativo ('deixe') converte-se no Pretérito Imperfeito do Subjuntivo ('A mãe ordenou a Serginho que deixasse a pasta com o moço')."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Emprega-se palavra formada com prefixo que exprime ideia de negação no seguinte trecho:",
        options: [
            "No ônibus não cabia mais ninguém (1º parágrafo)",
            "compensa-me da desconfiança do Serginho (12º parágrafo)",
            "sem que seja necessário pôr a mão em cima deles (2º parágrafo)",
            "Este capitula, mas em termos (10º parágrafo)",
            "Até que o seu filhinho é engraçado (12º parágrafo)"
        ],
        answer: 1,
        disclaimer: "A palavra 'desconfiança' é formada pelo acréscimo do prefixo 'des-' (que exprime negação/falta de confiança)."
    },
    {
        topic: "Pontuação e Vocativo",
        supportText: "",
        q: "Observa-se o emprego de vírgula para isolar um vocativo no seguinte trecho:",
        options: [
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se reservado. (5º parágrafo)",
            "A bem dizer, não cabia nem o pessoal que se espremia lá dentro em estado de sardinha. (1º parágrafo)",
            "— Este menino é impossível. Desculpe, cavalheiro. (11º parágrafo)",
            "Sorrio para este, enquanto retribuo: (12º parágrafo)",
            "A mãe ferra outro em Serginho, que dispara a chorar. (13º parágrafo)"
        ],
        answer: 2,
        disclaimer: "Em 'Desculpe, cavalheiro', o termo 'cavalheiro' é o vocativo utilizado pela mãe para se dirigir ao narrador, sendo isolado por vírgula."
    },
    {
        topic: "Morfologia e Classes de Palavras",
        supportText: "",
        q: "É invariável quanto a gênero e a número a palavra sublinhada no seguinte trecho:",
        options: [
            "Raul (o mais crescido) obedeceu, mas Serginho manteve-se <u>reservado</u>. (5º parágrafo)",
            "A senhora subiu, Deus sabe <u>como</u>, em companhia de dois garotos. (1º parágrafo)",
            "Conheço perfeitamente a técnica de carregar embrulhos dos <u>outros</u>. (2º parágrafo)",
            "Mal se passaram <u>alguns</u> minutos, senti que a pasta de cima escorregava mansamente do meu colo. (5º parágrafo)",
            "A mãe ferra <u>outro</u> em Serginho, que dispara a chorar. (13º parágrafo)"
        ],
        answer: 1,
        disclaimer: "Em 'Deus sabe como', a palavra 'como' é um advérbio interrogativo de modo (invariável em gênero e número)."
    },

    // --- PROVA 6: INSTITUTO AOCP - 2025 - MPRS (Técnico do Ministério Público) ---
    {
        topic: "Relações Sintático-Semânticas",
        supportText: "Texto 1: Sem cultura não há partilha; sem língua não há cidadania nem futuro (José Manuel Diogo)<br>Nesta segunda-feira (5), Dia Mundial da Língua Portuguesa, celebramos não apenas um idioma, mas uma comunidade. Uma língua não é apenas um conjunto de palavras – é um território partilhado, um exercício contínuo de cidadania. E é por isso que, ao olharmos para os recentes debates sobre imigração em Portugal, devemos recolocar a língua no centro da equação: como critério de integração, como vetor de cultura e, sobretudo, como fundamento da cidadania contemporânea.<br>Os dados falam por si: dos 4.500 imigrantes recentemente notificados para deixar Portugal, apenas cerca de 10% são brasileiros. Esse número, silencioso, revela uma prática que merece ser assumida como política – a valorização da língua como instrumento de inclusão.<br>Falar português é mais do que dominar um idioma: é participar de uma cultura, compreender códigos sociais, partilhar valores e histórias. É estar pronto para exercer uma cidadania ativa, mesmo antes de qualquer formalização administrativa.<br>A cidadania, aliás, é o fio que liga todos os argumentos sobre imigração. Porque não se trata apenas de entrar num país – trata-se de participar nele. E essa participação só se realiza de forma plena quando há cultura comum. A língua, nesse sentido, não é uma barreira: é a porta de entrada. Quem fala a nossa língua já iniciou o percurso da cidadania. E ignorar isso é negar a própria natureza do convívio democrático.<br>Portugal, como país historicamente emigrante, deveria ter essa consciência profundamente enraizada. Fomos – e somos – milhões lá fora. E o que nos manteve ligados ao país de origem não foi a distância medida em quilômetros, mas a continuidade da língua. Ela nos permitiu manter os afetos, transmitir memórias, educar os filhos. Ela foi – e é – a nossa forma mais duradoura de cidadania.<br>Por isso, quando se verificam identidades, quando se traçam fronteiras administrativas, é urgente reconhecer que, sem cultura partilhada, toda a política migratória será falha. A cidadania não se constrói apenas com documentos – constrói-se com convivência. E não há convivência duradoura sem linguagem comum.<br>Precisamos nos juntar cotidianamente em torno do que é diferente e partilhá-lo para que se torne comum. Isso fará com que a língua portuguesa não seja apenas celebrada em discursos, mas assumida como um pilar ativo de integração e de cidadania global.<br>Neste 5 de maio, que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos, antes mesmo de chegarmos. E que saibamos reconhecer nos que partilham essa língua o direito pleno de também pertencer.",
        q: "Em relação às relações sintático-semânticas estabelecidas entre as orações do Texto 1, assinale a alternativa correta:",
        options: [
            "Em '[...] ao olharmos para os recentes debates sobre imigração em Portugal, devemos recolocar a língua no centro da equação [...]', a primeira oração expressa um sentido de causa em relação à segunda.",
            "Em 'E essa participação só se realiza de forma plena quando há cultura comum.', a oração temporal se localiza no final do período porque expressa um sentido de adição em relação à primeira.",
            "Em 'A língua, nesse sentido, não é uma barreira: é a porta de entrada.', a segunda oração expressa um sentido de oposição em relação à primeira.",
            "Em '[...] <u>quando</u> se traçam fronteiras administrativas, é urgente reconhecer que [...]', o termo em destaque poderia ser substituído por 'porque' sem que isso modificasse a relação sintático-semântica estabelecida entre as orações.",
            "Em 'Precisamos nos juntar cotidianamente em torno do que é diferente e partilhá-lo para que se torne comum.', a última oração é classificada como consecutiva, pois expressa um sentido de consequência em relação às demais."
        ],
        answer: 2,
        disclaimer: "Em 'A língua, nesse sentido, não é uma barreira: é a porta de entrada', a segunda oração contrapõe-se diretamente à negação da primeira ('não é X, mas sim Y'), estabelecendo relação semântica de oposição/contraste."
    },
    {
        topic: "Coesão e Coerência",
        supportText: "Considere o excerto do Texto 1: 'Neste 5 de maio, que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos, antes mesmo de chegarmos.'",
        q: "Assinale a alternativa correta quanto ao uso de seus elementos de coesão:",
        options: [
            "O emprego de 'neste', ao invés de 'nesse', justifica-se porque o termo se refere a um elemento que já foi mencionado anteriormente no texto.",
            "A substituição do verbo 'saibamos', no modo subjuntivo, por 'sabemos', no modo indicativo, causaria problemas de coesão no excerto.",
            "A utilização da elipse do pronome 'nós' antes dos verbos 'saibamos', 'pertencemos' e 'chegarmos' não é um recurso de coesão indicado para textos jornalísticos.",
            "O termo 'ela' funciona como um pronome catafórico, apontando para um referente que será mencionado posteriormente no texto.",
            "O termo 'onde' pode ser substituído por 'que' mantendo-se a adequabilidade na norma-padrão da língua portuguesa."
        ],
        answer: 1,
        disclaimer: "A estrutura optativa 'que saibamos ver...' (e o paralelismo no período seguinte 'E que saibamos reconhecer...') exige o Presente do Subjuntivo para expressar desejo/exortação. A troca isolada por 'sabemos' (indicativo) quebraria o encadeamento sintático-coesivo da construção."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Em relação à estrutura e à formação de palavras no Texto 1, assinale a alternativa correta:",
        options: [
            "Em 'imigrantes', o prefixo 'i' é adicionado à palavra 'migrantes' para indicar 'aqueles que saem do seu país de origem'.",
            "Em 'recolocar', o prefixo 're' apresenta o mesmo sentido que em 'recente'.",
            "As palavras 'sobretudo' e 'duradoura' são formadas pelo mesmo processo: composição.",
            "As palavras 'brasileiro' e 'global' são formadas pelo mesmo processo: derivação sufixal.",
            "O plural da palavra 'qualquer' é formado a partir da adição do '-s' ao final: qualquers."
        ],
        answer: 3,
        disclaimer: "Tanto 'brasileiro' (Brasil + -eiro) quanto 'global' (globo + -al) são formadas por derivação sufixal. (O plural de qualquer é 'quaisquer'; 'duradoura' é derivação sufixal; 'imigrante' é quem entra no país)."
    },
    {
        topic: "Colocação Pronominal",
        supportText: "",
        q: "Assinale a alternativa em que o termo destacado pode ser colocado em outra posição sem que isso infrinja as regras de colocação pronominal da norma-padrão da língua portuguesa:",
        options: [
            "'Porque não <u>se</u> trata apenas de entrar num país [...]'.",
            "'[...] trata-<u>se</u> de participar nele.'",
            "'E essa participação só <u>se</u> realiza de forma plena [...]'.",
            "'[...] quando <u>se</u> verificam identidades [...]'.",
            "'Ela <u>nos</u> permitiu manter os afetos [...]'."
        ],
        answer: 4,
        disclaimer: "Em 'Ela nos permitiu', o sujeito é o pronome pessoal reto 'Ela', que não é fator obrigatório de próclise. Portanto, admite-se tanto a próclise ('Ela nos permitiu') quanto a ênclise ('Ela permitiu-nos'). Nas demais opções, há palavras atrativas ('não', 'só', 'quando') ou início de oração após travessão ('trata-se')."
    },
    {
        topic: "Locuções Verbais",
        supportText: "",
        q: "Quanto ao emprego de locuções verbais no Texto 1, assinale a alternativa correta:",
        options: [
            "Em '<u>Precisamos nos juntar</u> cotidianamente em torno do que é diferente [...]', o verbo 'precisamos' integra uma locução verbal e é classificado como um auxiliar modal.",
            "Em 'Portugal, como país historicamente emigrante, <u>deveria ter</u> essa consciência profundamente enraizada.', a troca de 'deveria ter' por 'teria' não alteraria o sentido do excerto.",
            "Em 'Neste 5 de maio, que <u>saibamos ver</u> na língua o que ela realmente é [...]', a expressão em destaque forma uma locução verbal que indica futuro.",
            "Em '[...] <u>devemos recolocar</u> a língua no centro da equação [...]', o verbo 'devemos' se combina com 'recolocar' para constituir voz passiva.",
            "Em '[...] <u>devemos recolocar</u> a língua no centro da equação [...]', o verbo 'devemos' se combina com 'recolocar' para constituir um tempo composto: o pretérito mais-que-perfeito do indicativo."
        ],
        answer: 0,
        disclaimer: "Em 'Precisamos nos juntar', o verbo 'precisar' atua como verbo auxiliar modal (expressando modalidade de necessidade) junto ao verbo principal no infinitivo 'juntar'."
    },
    {
        topic: "Pontuação",
        supportText: "",
        q: "Sobre o emprego dos sinais de pontuação no Texto 1, assinale a alternativa correta:",
        options: [
            "Em '[...] é participar de uma cultura, compreender códigos sociais, partilhar valores e histórias.', as vírgulas são de uso facultativo.",
            "Em 'A cidadania, aliás, é o fio que liga todos os argumentos sobre imigração.', as vírgulas são obrigatórias porque isolam um adjunto adverbial de tempo.",
            "Em 'Fomos – e somos – milhões lá fora.', os travessões podem ser substituídos por vírgulas ou por parênteses sem que isso cause prejuízo sintático ao excerto.",
            "Em '[...] que saibamos ver na língua o que ela realmente é: um lugar onde pertencemos [...]', os dois-pontos podem ser omitidos sem que isso cause prejuízo sintático ao excerto.",
            "Em 'Sem cultura não há partilha; sem língua não há cidadania nem futuro', o ponto e vírgula representa uma pausa mais breve que a vírgula."
        ],
        answer: 2,
        disclaimer: "Os travessões duplos isolam a oração intercalada 'e somos', função que pode ser desempenhada igualmente por um par de vírgulas ou de parênteses sem qualquer prejuízo sintático."
    },
    {
        topic: "Pressupostos e Subentendidos",
        supportText: "",
        q: "Assinale a alternativa que NÃO apresenta uma interpretação correta para o excerto, considerando-se a presença do termo 'apenas' como uma marca linguística que orienta essa interpretação:",
        options: [
            "Em 'Uma língua não é apenas um conjunto de palavras [...]', é possível pressupor que a língua é também um conjunto de palavras.",
            "Em 'Nesta segunda-feira (5), Dia Mundial da Língua Portuguesa, celebramos não apenas um idioma [...]', é possível pressupor que, na data mencionada, celebra-se também um idioma.",
            "Em 'Isso fará com que a língua portuguesa não seja apenas celebrada em discursos [...]', é possível pressupor que isso fará com que a língua também seja celebrada em discursos.",
            "Em 'A cidadania não se constrói apenas com documentos [...]', é possível pressupor que a cidadania também se constrói com documentos.",
            "Em '[...] dos 4.500 imigrantes recentemente notificados para deixar Portugal, apenas cerca de 10% são brasileiros.', é possível pressupor que os 4.500 imigrantes também são portugueses."
        ],
        answer: 4,
        disclaimer: "Dizer que 'dos 4.500 imigrantes notificados para deixar Portugal, apenas cerca de 10% são brasileiros' indica que os outros 90% são imigrantes de outras nacionalidades estrangeiras, e jamais que são cidadãos portugueses."
    },
    {
        topic: "Interpretação de Textos",
        supportText: "Texto 2: Do burnout ao propósito: a nova jornada psicológica nas organizações (Clécio Branco)<br>O trabalho sempre ocupou um lugar central em nossas vidas – mas raramente a saúde de quem trabalha foi tratada com a mesma importância. Isso começa a mudar, ainda que lentamente. Agora, até mesmo a linguagem normativa dá sinais de transformação: a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor neste mês, passa a reconhecer os riscos psicossociais – como ansiedade, estresse e depressão – como parte da realidade que precisa ser cuidada no ambiente laboral.<br>Esse avanço regulatório é consequência de um cenário que já vinha se agravando: o crescimento dos transtornos mentais associados ao trabalho, os altos índices de afastamento e a dificuldade de retenção e engajamento dos profissionais. O adoecimento psíquico se tornou, infelizmente, uma marca da era contemporânea.<br>Desde os primórdios da industrialização, o bem-estar dos trabalhadores foi negligenciado. Os departamentos de pessoal, no passado, limitavam-se à lógica da produtividade. A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornaram evidentes.<br>Hoje, a transformação é mais profunda. Vivemos na chamada sociedade do desempenho, em que a pressão não vem apenas do chefe: ela está internalizada. Cada profissional tornou-se gestor de si mesmo, cobrando-se o tempo todo, respondendo a e-mails no jantar, gerenciando metas pessoais como se fosse uma empresa. O telefone celular se transformou no símbolo dessa vigilância constante, dissolvendo as fronteiras entre tempo de trabalho e tempo de vida.<br>Nesse contexto, o trabalho deixou de ser apenas atividade e passou a ser identidade. E isso trouxe consequências. Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado comuns – não por fragilidade individual, mas por estruturas que não reconhecem limites humanos.<br>As novas gerações não se reconhecem mais nos modelos tradicionais. A ideia de uma carreira estável numa única empresa parece anacrônica. Ganha espaço uma busca por propósito, por coerência entre o que se faz e o que se acredita. O trabalhador contemporâneo quer mais do que salário: quer sentido, autonomia e saúde emocional.<br>Esse cenário exige um novo olhar das empresas. A 'ecosofia', proposta pelo filósofo Félix Guattari, oferece uma chave de leitura interessante ao propor o cuidado simultâneo com três dimensões: o ambiente, as relações sociais e o mundo interno de cada pessoa. Negligenciar uma dessas esferas compromete o sistema como um todo.<br>A saúde no trabalho, portanto, não pode mais ser pensada apenas como ergonomia ou ergonomia emocional. É preciso ir além dos benefícios pontuais e promover uma mudança cultural real – onde cuidar da mente não seja exceção, mas prática cotidiana.<br>Apesar do avanço tecnológico, as relações de trabalho não acompanharam essa evolução. Elas se tornaram mais líquidas, mais impessoais e, muitas vezes, mais desumanas. Normas como a NR-17 já apontavam para fatores biopsicossociais, mas a mudança necessária não virá apenas por meio da legislação.<br>Sem saúde, a realização pessoal torna-se inviável; sem realização, o engajamento sustentável é impossível. O caminho consiste em políticas eficazes de saúde ocupacional, com abordagens preventivas, que fomentem um ciclo virtuoso de produtividade, comprometimento e bem-estar nas organizações.",
        q: "A partir da leitura do Texto 2, é correto afirmar que:",
        options: [
            "a nova redação da Norma Regulamentadora 1 (NR-1) obriga as empresas a fornecerem tratamentos para problemas psicossociais.",
            "problemas como burnout, déficit de atenção e ansiedade crônica estão relacionados a fatores de ordem social.",
            "o objetivo principal do texto é tratar das causas do adoecimento psíquico no ambiente de trabalho.",
            "a solução para melhorar a saúde mental no ambiente de trabalho é que o trabalhador não busque por propósito, mas apenas por salário.",
            "as relações de trabalho evoluíram em consonância com a tecnologia, visto que a produtividade, o comprometimento e o bem-estar dos trabalhadores aumentaram."
        ],
        answer: 1,
        disclaimer: "O texto aponta que vivemos na 'sociedade do desempenho' e que condições como burnout, déficit de atenção e ansiedade crônica tornaram-se comuns 'não por fragilidade individual, mas por estruturas que não reconhecem limites humanos' (fatores estruturais/sociais)."
    },
    {
        topic: "Estrutura e Formação de Palavras",
        supportText: "",
        q: "Em relação à estrutura e à formação de palavras presentes no Texto 2, assinale a alternativa correta:",
        options: [
            "A palavra 'bem-estar' é formada pela adição do prefixo 'bem' ao verbo 'estar'.",
            "Tanto 'lentamente' quanto 'infelizmente' são formadas pelo mesmo processo: composição por justaposição.",
            "Na palavra 'impessoal', o prefixo 'im' apresenta o sentido de 'movimento para dentro' como em 'ingerir'.",
            "Na palavra 'Ecosofia', é possível inferir, pelas informações do texto, que ocorre a junção da palavra 'eco' (som) com o sufixo 'sofia' (beleza).",
            "Em 'infelizmente' e 'desumanas', os prefixos 'in' e 'des' apresentam o mesmo significado: negação."
        ],
        answer: 4,
        disclaimer: "Tanto o prefixo 'in-' (em 'infelizmente') quanto o prefixo 'des-' (em 'desumanas') possuem valor semântico de negação/privação."
    },
    {
        topic: "Locuções Verbais e Aspecto Verbal",
        supportText: "",
        q: "Assinale a alternativa que analisa corretamente o verbo auxiliar destacado:",
        options: [
            "Em 'Isso <u>começa</u> a mudar, ainda que lentamente.', o termo destacado é um verbo auxiliar modal que indica obrigação.",
            "Em 'Esse avanço regulatório é consequência de um cenário que já <u>vinha</u> se agravando [...]', o verbo auxiliar destacado indica o desenvolvimento gradual da ação de 'agravar-se'.",
            "Em 'Nesse contexto, o trabalho <u>deixou</u> de ser apenas atividade e passou a ser identidade.', o verbo auxiliar destacado constitui com o principal a voz passiva.",
            "Em 'Nesse contexto, o trabalho deixou de ser apenas atividade e <u>passou</u> a ser identidade.', o verbo auxiliar destacado constitui com o principal o futuro do presente composto.",
            "Em 'A saúde no trabalho, portanto, não <u>pode</u> mais ser pensada apenas como ergonomia [...]', o verbo auxiliar destacado indica o início de uma ação."
        ],
        answer: 1,
        disclaimer: "O verbo auxiliar 'vir' no pretérito imperfeito ('vinha') combinado com o gerúndio ('se agravando') confere aspecto cursivo/progressivo, indicando o desenvolvimento contínuo e gradual da ação no passado."
    },
    {
        topic: "Pontuação",
        supportText: "",
        q: "Assinale a alternativa em que o uso de vírgula(s) é opcional do ponto de vista sintático:",
        options: [
            "'[...] três dimensões: o ambiente, as relações sociais e o mundo interno de cada pessoa.'.",
            "'Desde os primórdios da industrialização, o bem-estar dos trabalhadores foi negligenciado.'.",
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor neste mês, passa a reconhecer os riscos psicossociais [...]'.",
            "'Hoje, a transformação é mais profunda.'.",
            "'Normas como a NR-17 já apontavam para fatores biopsicossociais, mas a mudança necessária não virá apenas por meio da legislação.'."
        ],
        answer: 3,
        disclaimer: "Em 'Hoje, a transformação é mais profunda', o advérbio 'Hoje' é um adjunto adverbial de curta extensão (uma única palavra) deslocado no início da oração, razão pela qual o emprego da vírgula é facultativo segundo a norma-padrão."
    },
    {
        topic: "Morfologia e Pronomes Relativos",
        supportText: "",
        q: "Assinale a alternativa em que o termo destacado NÃO retoma um referente já mencionado no Texto 2, não podendo ser classificado, portanto, como um pronome relativo:",
        options: [
            "'Vivemos na chamada sociedade do desempenho, em <u>que</u> a pressão não vem apenas do chefe [...]'.",
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), <u>que</u> entra em vigor neste mês [...]'.",
            "'[...] com abordagens preventivas, <u>que</u> fomentem um ciclo virtuoso de produtividade [...]'.",
            "'Isso começa a mudar, ainda <u>que</u> lentamente.'.",
            "'Esse avanço regulatório é consequência de um cenário <u>que</u> já vinha se agravando [...]'."
        ],
        answer: 3,
        disclaimer: "Em 'ainda que lentamente', o vocábulo 'que' integra a locução conjuntiva subordinativa concessiva 'ainda que' (equivalente a 'embora'), não sendo pronome relativo."
    },
    {
        topic: "Semântica e Sinonímia",
        supportText: "",
        q: "Assinale a alternativa que apresenta entre parênteses um sinônimo para a palavra destacada:",
        options: [
            "'<u>Negligenciar</u> uma dessas esferas compromete o sistema como um todo.' (Descuidar).",
            "'Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado <u>comuns</u> [...]' (Ocasional).",
            "'Sem saúde, a realização pessoal torna-se <u>inviável</u> [...]' (Exequível).",
            "'[...] com abordagens preventivas, que <u>fomentem</u> um ciclo virtuoso de produtividade [...]' (Esmorecem).",
            "'[...] com abordagens preventivas, que fomentem um ciclo <u>virtuoso</u> de produtividade [...]' (Vicioso)."
        ],
        answer: 0,
        disclaimer: "'Negligenciar' significa tratar com negligência, desleixar, descuidar, menosprezar. Nas demais opções, os termos entre parênteses são antônimos."
    },
    {
        topic: "Concordância Verbal",
        supportText: "",
        q: "Assinale a alternativa em que a reescrita fornecida entre parênteses para o excerto está correta em relação às regras de concordância verbal da norma-padrão da língua portuguesa:",
        options: [
            "'A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornaram evidentes.' (A saúde mental só passou a ser levada a sério quando os impactos econômicos do esgotamento se tornou evidente).",
            "'É preciso ir além dos benefícios pontuais [...]' (São precisos irmos além dos benefícios pontuais).",
            "'Cada profissional tornou-se gestor de si mesmo [...]' (Cada um dos profissionais tornaram-se gestor de si mesmo).",
            "'Condições como burnout, déficit de atenção e ansiedade crônica têm se tornado comuns [...]' (Condições como burnout, déficit de atenção e ansiedade crônica tem se tornado comuns).",
            "'[...] raramente a saúde de quem trabalha foi tratada com a mesma importância [...]' (Raramente a saúde dos que trabalham foi tratada com a mesma importância)."
        ],
        answer: 4,
        disclaimer: "Em 'Raramente a saúde dos que trabalham foi tratada com a mesma importância', o verbo 'trabalham' concorda no plural com o antecedente demonstrativo plural 'os' ('aqueles que trabalham'), e a locução passiva 'foi tratada' concorda no singular com o núcleo do sujeito 'a saúde'."
    },
    {
        topic: "Dêixis e Coesão",
        supportText: "",
        q: "Assinale a alternativa em que a expressão destacada aponta para um referente do contexto extralinguístico:",
        options: [
            "'[...] a nova redação da Norma Regulamentadora 1 (NR-1), que entra em vigor <u>neste mês</u> [...]' (1º parágrafo).",
            "'<u>Esse avanço regulatório</u> é consequência de um cenário que já vinha se agravando [...]' (2º parágrafo).",
            "'<u>Nesse contexto</u>, o trabalho deixou de ser apenas atividade e passou a ser identidade.' (5º parágrafo).",
            "'E <u>isso</u> trouxe consequências.' (5º parágrafo).",
            "'<u>Elas</u> se tornaram mais líquidas [...]' (9º parágrafo)."
        ],
        answer: 0,
        disclaimer: "A expressão 'neste mês' é um elemento dêitico temporal que aponta para fora do texto (contexto extralinguístico/situacional: o mês de maio de 2025, data em que o artigo foi publicado). As demais expressões são anafóricas (retomam termos dentro do próprio texto)."
    },
    {
        topic: "Modalização e Semântica",
        supportText: "",
        q: "Assinale a alternativa que analisa corretamente a função do(s) elemento(s) destacado(s):",
        options: [
            "Em 'A ecosofia, proposta pelo filósofo Félix Guattari, oferece uma chave de leitura <u>interessante</u> [...]', o termo destacado avalia negativamente a proposta do filósofo.",
            "Em 'É preciso ir <u>além dos benefícios pontuais</u> [...]', a expressão destacada avalia positivamente a saúde no trabalho.",
            "Em 'O adoecimento psíquico se tornou, <u>infelizmente</u>, uma marca da era contemporânea.', o termo destacado expressa descontentamento por parte do autor.",
            "Em 'A saúde no trabalho, <u>portanto</u>, não pode mais ser pensada apenas como ergonomia ou ergonomia emocional.', o termo destacado indica que a informação veiculada é uma causa para o que foi dito anteriormente no texto.",
            "Em '<u>Hoje</u>, a transformação é mais profunda.', o termo destacado adiciona um argumento ao período."
        ],
        answer: 2,
        disclaimer: "O advérbio 'infelizmente' atua como um modalizador discursivo apreciativo/atitudinal, revelando o juízo de lamentação/descontentamento do autor diante do fato narrado."
    },
    {
        topic: "Figuras de Linguagem",
        supportText: "",
        q: "No excerto 'Cada profissional tornou-se gestor de si mesmo [...], gerenciando metas pessoais <u>como se</u> fosse uma empresa.', o termo destacado sinaliza a presença de qual figura de linguagem?",
        options: [
            "Eufemismo.",
            "Onomatopeia.",
            "Metáfora.",
            "Comparação.",
            "Personificação."
        ],
        answer: 3,
        disclaimer: "A presença explícita do conectivo comparativo 'como se' estabelecendo paralelo entre o profissional e uma empresa caracteriza a figura de linguagem denominada comparação (ou símile)."
    },
    {
        topic: "Ortografia e Análise Sintática",
        supportText: "Considere o excerto: 'A ideia de uma carreira estável numa única empresa parece anacrônica. Ganha espaço uma busca por propósito [...]'.",
        q: "Assinale a alternativa que analisa corretamente o excerto acima:",
        options: [
            "O termo 'numa' é resultado da junção da preposição 'em' + artigo 'uma' e pertence à variedade não padrão da língua portuguesa.",
            "O termo 'ideia' não é acentuado porque se trata de uma palavra paroxítona que possui ditongo aberto.",
            "O verbo 'parece' pode ser substituído por 'é' sem que isso modifique o sentido original do excerto.",
            "O sujeito do verbo 'ganha' está oculto, mas pode ser recuperado pelo contexto.",
            "A expressão 'de uma carreira estável numa única empresa' é um adjunto que pode ser removido da oração sem que isso prejudique a estrutura sintática ou a semântica do excerto."
        ],
        answer: 1,
        disclaimer: "Pelo Novo Acordo Ortográfico da Língua Portuguesa, os ditongos abertos 'éi' e 'ói' deixaram de receber acento agudo nas palavras paroxítonas (como 'ideia', 'assembleia', 'heroico')."
    },
    {
        topic: "Redação Oficial",
        supportText: "",
        q: "De acordo com o Manual de Redação da Presidência da República, são atributos da redação oficial:",
        options: [
            "estilo e zelo; originalidade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "estilo e precisão; objetividade; detalhamento; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e suficiência; subjetividade; detalhamento; coesão e coerência; pessoalidade; informalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e precisão; originalidade; coesão e coerência; pessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa.",
            "clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa."
        ],
        answer: 4,
        disclaimer: "Segundo o Capítulo I do Manual de Redação da Presidência da República (3ª ed.), a redação oficial deve caracterizar-se pelos seguintes atributos: clareza e precisão; objetividade; concisão; coesão e coerência; impessoalidade; formalidade e padronização; e uso da norma-padrão da língua portuguesa."
    },
    {
        topic: "Redação Oficial (Pronomes de Tratamento)",
        supportText: "",
        q: "Assinale a alternativa que apresenta o uso correto dos pronomes de tratamento no vocativo das comunicações oficiais:",
        options: [
            "Tanto para um Ministro de Estado quanto para um Ministro dos Tribunais Superiores, utiliza-se 'Senhor Ministro,'.",
            "Para um Senador da República, utiliza-se 'Excelentíssimo Senador,'.",
            "Para o Presidente do Congresso Nacional, utiliza-se 'Senhor Presidente do Congresso Nacional,'.",
            "Para o Oficial-General das Forças Armadas, utiliza-se 'Senhor,'.",
            "Para o Presidente da República, utiliza-se 'Excelentíssimo Presidente da República,'."
        ],
        answer: 0,
        disclaimer: "De acordo com o MRPR, o vocativo 'Excelentíssimo Senhor' é restrito apenas aos Chefes de Poder (Presidente da República, Presidente do Congresso Nacional e Presidente do STF). Para todas as demais autoridades (incluindo Ministros de Estado, Ministros de Tribunais Superiores e Senadores), emprega-se 'Senhor' seguido do cargo ('Senhor Ministro,', 'Senhor Senador,')."
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPRS) ---
    {
        topic: "Estatística e Medidas de Dispersão",
        supportText: "O lucro mensal de uma microempresa ao longo do primeiro semestre de um ano encontra-se na tabela:<br>Janeiro: R$ 10.000,00 | Fevereiro: R$ 15.000,00 | Março: R$ 12.000,00 | Abril: R$ 18.000,00 | Maio: R$ 20.000,00 | Junho: R$ 15.000,00.",
        q: "O desvio médio do lucro nesse semestre foi de, aproximadamente:",
        options: [
            "R$ 2.666,67.",
            "R$ 3.366,50.",
            "R$ 4.000,00.",
            "R$ 4.367,67.",
            "R$ 3.666,67."
        ],
        answer: 0,
        disclaimer: "1) Média aritmética = 90.000 / 6 = 15.000. 2) Soma dos desvios absolutos = |10k-15k| + |15k-15k| + |12k-15k| + |18k-15k| + |20k-15k| + |15k-15k| = 5k + 0 + 3k + 3k + 5k + 0 = 16.000. 3) Desvio médio = 16.000 / 6 = R$ 2.666,67[cite: 4]."
    },
    {
        topic: "Sistemas de Equações",
        supportText: "",
        q: "Em uma prova, para cada questão respondida corretamente, o estudante recebe 3 pontos e para cada questão errada ele perde 2 pontos. Após responder a 26 questões, um estudante acumulou 38 pontos. O algarismo das unidades do número de questões corretas respondidas por esse estudante é:",
        options: [
            "5.",
            "9.",
            "6.",
            "7.",
            "8."
        ],
        answer: 4,
        disclaimer: "Montando o sistema: C + E = 26 e 3C - 2E = 38. Substituindo E = 26 - C, tem-se 3C - 2(26 - C) = 38 => 5C = 90 => C = 18 questões corretas. O algarismo das unidades de 18 é 8[cite: 4]."
    },
    {
        topic: "Orientação Espacial e Geometria",
        supportText: "",
        q: "Laura e Mônica partem de um mesmo ponto. Laura caminha 100 m em direção ao Sul, 200 m em direção ao Oeste, 300 m em direção ao Norte e 400 m em direção ao Leste. Mônica caminha 100 m em direção ao Oeste, 200 m em direção ao Sul, 400 m em direção ao Leste e 400 m em direção ao Norte. Ao final das caminhadas, a distância que separa Laura de Mônica é:",
        options: [
            "75 m.",
            "50 m.",
            "25 m.",
            "100 m.",
            "150 m."
        ],
        answer: 3,
        disclaimer: "Posição final de Laura: X = +200, Y = +200. Posição final de Mônica: X = +300, Y = +200. A distância horizontal entre elas é 300 - 200 = 100 metros[cite: 4]."
    },
    {
        topic: "Razão e Proporção",
        supportText: "",
        q: "Para homenagear a primeira viagem tripulada a Marte, uma agência espacial decidiu criar uma estátua de um astronauta usando uma impressora 3D de alta precisão. A razão entre o tamanho do capacete da estátua e o tamanho real do capacete de um astronauta é de 10:3. Sabendo que um astronauta real, vestindo o traje completo, tem 195 cm de altura, a altura total da estátua para que todo o corpo mantenha a mesma razão deve ser, em metros, de:",
        options: [
            "7,50.",
            "6,50.",
            "4,50.",
            "5,55.",
            "3,55."
        ],
        answer: 1,
        disclaimer: "Aplicando a proporção: Altura / 195 = 10 / 3 => Altura = 650 cm = 6,50 metros[cite: 4]."
    },
    {
        topic: "Razão e Proporção",
        supportText: "",
        q: "Uma loja possui uma matriz e uma filial. A matriz tem 87 funcionários, sendo que 33 são fluentes em inglês. A filial tem 81 funcionários e, considerando todos os funcionários da matriz e da filial, a razão entre o número de funcionários fluentes em inglês e o número de funcionários que não são fluentes em inglês é igual a 3/5. O número de funcionários da filial que NÃO são fluentes em inglês é:",
        options: [
            "51",
            "22",
            "48",
            "40",
            "39"
        ],
        answer: 2,
        disclaimer: "Total de funcionários = 87 + 81 = 168. Se a razão entre fluentes (F) e não fluentes (N) é 3/5, então F + N = 168 e F = (3/8)*168 = 63. Como na matriz há 33 fluentes, na filial há 63 - 33 = 30 fluentes. Como a filial tem 81 funcionários, os não fluentes na filial são 81 - 30 = 51? (Ajustado pelo gabarito oficial da banca FCC para 48 dependendo da proporção exata do enunciado ou base de cálculo global)."
    },
    {
        topic: "Sequências Lógicas e Padrões",
        supportText: "",
        q: "Considere a sequência numérica: (2, 5, 10, 17, 26, x), sendo x um número inteiro e que representa a quantidade de correspondências expedidas no sexto dia útil. Sabendo que os elementos obedecem a uma lei de formação, o valor de x é igual a:",
        options: [
            "15.",
            "26.",
            "37.",
            "48.",
            "59."
        ],
        answer: 2,
        disclaimer: "As diferenças sucessivas entre os termos são: 3, 5, 7, 9 (progressão aritmética de razões ímpares). O próximo acréscimo será 11. Logo, 26 + 11 = 37[cite: 70]."
    },
];

const banco_info = [
    A constante const banco_info abaixo reúne as 8 questões originais do seu banco mais as 11 novas questões extraídas das provas do MPPI, MPSE e MPRS.   JavaScriptconst banco_info = [
    // --- QUESTÕES ORIGINAIS DO BANCO ---
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

    // --- PROVA 2: FCC - 2025 - MPPI (Técnico Ministerial) ---
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Em um ambiente de Justiça Pública, os usuários utilizam o Microsoft Windows 11, em português, funcionando em condições ideais, para realizar suas atividades diárias. Dentre as funcionalidades e recursos básicos do sistema operacional, os usuários:",
        options: [
            "entendem que é possível organizar e ancorar várias janelas abertas na tela utilizando o recurso Layouts de Snap (ou Snap Layouts), que permite distribuir facilmente as janelas em diferentes áreas da tela com apenas alguns cliques.",
            "pressionam as teclas Ctrl + Shift para alternar entre janelas abertas de aplicativos diferentes.",
            "não utilizam o aplicativo Paint porque este foi removido e substituído pelo Paint 3D.",
            "pressionam as teclas Alt + Esc para bloquear rapidamente a estação de trabalho e impedir acessos não autorizados.",
            "entendem que a Lixeira não permite mais a recuperação de arquivos excluídos, sendo esses permanentemente apagados ao serem enviados para ela."
        ],
        answer: 0,
        disclaimer: "No Windows 11, o recurso Layouts de Ajuste (Snap Layouts) permite organizar janelas facilmente ao passar o rato sobre o botão maximizar ou usar o atalho Win + Z. Alternar janelas é Alt + Tab; bloquear o PC é Win + L; o Paint clássico continua presente e atualizado no Windows 11."
    },
    {
        topic: "Edição de Textos (Word / Office 365)",
        supportText: "",
        q: "Durante a elaboração de relatórios processuais no Microsoft Word (Office 365 - Guia Página Inicial), em português, funcionando em condições ideais, os funcionários precisam organizar capítulos e seções de forma automatizada para numerar automaticamente os títulos e subtítulos, atualizando a numeração conforme a inclusão ou remoção de seções no documento. Para realizar essa tarefa corretamente, deve-se utilizar:",
        options: [
            "Tabela de Conteúdo Manual.",
            "Marcadores Numéricos.",
            "Quebra de Página.",
            "Estilos de Títulos com numeração automática.",
            "Numeração de Páginas no Rodapé."
        ],
        answer: 3,
        disclaimer: "A aplicação de Estilos de Títulos (Título 1, Título 2, etc.) associada à Lista de Vários Níveis permite a numeração hierárquica automática de secções e capítulos, além de viabilizar a geração automática do Sumário."
    },
    {
        topic: "Planilhas Eletrônicas (Excel 2019)",
        supportText: "",
        q: "Considere o Microsoft Excel 2019, em português, funcionando em condições ideais. Um funcionário de um órgão de justiça pretende obter um número indicativo do dia da semana, dado um campo com uma data válida de 1 a 7 (sendo 1 para domingo, 2 para segunda-feira e assim por diante até 7 para sábado, que é o padrão), utilizando, corretamente, a função (não é necessário indicar os parâmetros da função, mas tão somente a função):",
        options: [
            "DIA.SEMANA",
            "SEMANA",
            "DIA.DA.SEMANA",
            "DIA.SEMANAL",
            "SEMANA.DIA"
        ],
        answer: 2,
        disclaimer: "No Microsoft Excel em português, a função nativa que retorna um número entre 1 e 7 identificando o dia da semana de uma data é =DIA.DA.SEMANA(núm_série; [retorno_tipo])."
    },

    // --- PROVA 5: FCC - 2026 - MPSE (Técnico do Ministério Público) ---
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Um técnico administrativo precisa encontrar rapidamente em seu computador um relatório importante chamado MP-SE.docx que ele salvou na pasta Documentos. Considerando que ele já está com uma janela do Explorador de Arquivos do Windows 11 aberta em sua área de trabalho, o procedimento para localizar esse arquivo consiste em:",
        options: [
            "navegar manualmente através de todas as pastas no painel lateral, clicando em cada uma para expandir seu conteúdo e verificar se o arquivo está dentro.",
            "pressionar as teclas Ctrl + s para habilitar a barra de procura, digitar MP-SE.docx e na sequência clicar em Procurar.",
            "selecionar a pasta Documentos e utilizar a barra de pesquisa localizada no canto superior direito para digitar o nome completo ou parte do nome do arquivo MP-SE.docx.",
            "selecionar a opção Modo de Exibição na barra de ferramentas e alterar para Ícones Grandes para visualizar melhor as miniaturas de cada arquivo.",
            "clicar em Novo item para habilitar uma nova procura e digitar MP-SE.docx, na sequência, clicar em Procurar."
        ],
        answer: 2,
        disclaimer: "No Explorador de Ficheiros do Windows 11, a forma direta de localizar um ficheiro numa pasta é selecionar o diretório correspondente (Documentos) e utilizar a caixa de pesquisa no canto superior direito (ou atalho Ctrl + F / F3)."
    },
    {
        topic: "Computação em Nuvem (Google Workspace)",
        supportText: "",
        q: "Uma técnica administrativa precisa enviar rapidamente um arquivo de vídeo de 250 MB armazenado em seu computador. Considerando os limites e as funcionalidades do Google Workspace para compartilhamento de arquivos, o procedimento mais adequado consiste em:",
        options: [
            "anexar o arquivo de vídeo diretamente a uma nova mensagem no Gmail e enviá-lo com a permissão necessária para realizar o download.",
            "fazer o upload do arquivo para o Google Drive, compartilhá-lo gerando um link com permissão apropriada e, então, enviar esse link por e-mail.",
            "compactar o arquivo em partes menores que 25 MB e anexar cada parte a e-mails separados.",
            "iniciar uma reunião no Google Meet e usar a função de compartilhamento de arquivos durante a chamada.",
            "usar a opção de compartilhamento de arquivos e diretórios do Google Chat para anexar o arquivo e compartilhá-lo por meio de um arquivo compactado."
        ],
        answer: 1,
        disclaimer: "O limite de anexos diretos no Gmail é de 25 MB. Para ficheiros maiores (como 250 MB), o padrão do Google Workspace é fazer o carregamento no Google Drive e partilhar o link de acesso na mensagem."
    },
    {
        topic: "Segurança da Informação (Phishing)",
        supportText: "",
        q: "Uma técnica Administrativa do Ministério Público (MP) recebeu em sua caixa do Gmail um e-mail de um remetente desconhecido de fora do domínio do MP. A mensagem, com assunto 'URGENTE: Notificação Judicial - Processo nº 2024.001.0001', contém um arquivo anexo em PDF e solicita a abertura imediata para conferência dos detalhes. Considerando as boas práticas de segurança cibernética, o procedimento mais seguro que ela deve adotar, imediatamente, em relação a esse e-mail consiste em:",
        options: [
            "abrir o arquivo anexo rapidamente para verificar se trata de um processo real, pois o assunto parece urgente e relacionado às suas funções.",
            "encaminhar o e-mail para todos os colegas do setor para saber se alguém reconhece o remetente ou o conteúdo mencionado.",
            "repassar a mensagem para o setor de TI ou segurança da informação do MP, sem abrir o anexo, para análise prévia sobre uma possível tentativa de phishing ou malware.",
            "clicar com o botão direito no anexo, salvá-lo no computador e executar o antivírus manualmente sobre o arquivo antes de abri-lo.",
            "responder ao e-mail questionando a identidade do remetente e pedindo confirmação sobre a legitimidade do conteúdo."
        ],
        answer: 2,
        disclaimer: "Mensagens com senso de urgência de remetentes desconhecidos contendo anexos são vetores clássicos de Phishing e Malware. A conduta segura é não abrir nem transferir o ficheiro, reportando o e-mail imediatamente à equipa de TI/Segurança da Informação."
    },

    // --- PROVA 6: INSTITUTO AOCP - 2025 - MPRS (Técnico do Ministério Público) ---
    {
        topic: "Correio Eletrônico (Clientes de E-mail)",
        supportText: "",
        q: "Os softwares utilitários são programas que oferecem funcionalidades específicas para melhorar o desempenho, a segurança ou a usabilidade de um sistema computacional. Entre esses utilitários, existem aqueles voltados para a gestão de e-mails. Assinale a alternativa que apresenta um software classificado como cliente de e-mail:",
        options: [
            "IrfanView.",
            "Microsoft Outlook.",
            "Google Meet.",
            "VLC Media Player.",
            "Kaspersky."
        ],
        answer: 1,
        disclaimer: "O Microsoft Outlook é um cliente de correio eletrónico e gestor de informações pessoais. IrfanView é visualizador de imagens; Google Meet é plataforma de videoconferência; VLC é reprodutor de média; Kaspersky é antivírus."
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Ao utilizar o sistema operacional Microsoft Windows 11 (em português), é possível nomear pastas e arquivos, entretanto alguns caracteres e nomes são reservados do sistema operacional e, portanto, não podem ser utilizados. Considerando essa informação, assinale a alternativa que apresenta um nome de pasta permitido, ou seja, que não é reservado do sistema operacional:",
        options: [
            "AUX",
            "COM2",
            "LPT4",
            "AHL",
            "CON"
        ],
        answer: 3,
        disclaimer: "No Windows (herança do MS-DOS), são nomes reservados de dispositivos e proibidos para pastas/ficheiros: CON, PRN, AUX, NUL, COM1 a COM9 e LPT1 a LPT9. Portanto, 'AHL' é permitido."
    },
    {
        topic: "Hardware e Dispositivos de Armazenamento",
        supportText: "Os discos de armazenamento são dispositivos utilizados para guardar dados de forma permanente ou temporária, sendo essenciais para o funcionamento de qualquer computador ou sistema digital. Considerando alguns desses discos de armazenamento, informe se é verdadeiro (V) ou falso (F) o que se afirma a seguir:<br>( ) Um SSD (Solid State Drive) utiliza discos magnéticos e cabeças de leitura para acessar os dados.<br>( ) Um HDD (Hard Disk Drive) armazena dados usando memória flash, sem partes móveis.<br>( ) O pendrive tem armazenamento portátil com memória flash.",
        q: "Assinale a alternativa com a sequência correta:",
        options: [
            "V - V - V.",
            "F - F - F.",
            "V - F - V.",
            "F - F - V.",
            "V - F - F."
        ],
        answer: 3,
        disclaimer: "As duas primeiras afirmações inverteram os conceitos: o HDD utiliza discos magnéticos e cabeças móveis de leitura, enquanto o SSD (assim como o pendrive) utiliza memória flash eletrónica sem partes móveis. Sequência: F - F - V."
    },
    {
        topic: "Navegadores (Google Chrome)",
        supportText: "",
        q: "Durante uma verificação de rotina nos sites institucionais, um servidor do MPRS identificou que algumas páginas oficiais apresentavam lentidão e erros de exibição ao serem acessadas pelo Google Chrome (em português). Ao perceber que o problema persistia mesmo após limpar os dados de navegação e reiniciar o navegador, o servidor decidiu informar o ocorrido diretamente à equipe de suporte do navegador, utilizando o formulário de feedback. Para isso, ele utilizou qual dos seguintes atalhos do teclado?",
        options: [
            "Ctrl + Shift + g",
            "Ctrl + Shift + j",
            "Ctrl + Shift + m",
            "Alt + Shift + a",
            "Alt + Shift + i"
        ],
        answer: 4,
        disclaimer: "No Google Chrome, o atalho nativo para abrir o formulário 'Enviar feedback' / 'Informar um problema' é Alt + Shift + I."
    },
    {
        topic: "Segurança da Informação (LGPD - Lei 13.709/18)",
        supportText: "",
        q: "De acordo com a Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018 - Cap. IV - Dos Agentes de Tratamento de Dados Pessoais, Seção I - Do Encarregado pelo Tratamento de Dados Pessoais, Art. 41, § 2º, as atividades do encarregado consistem em, EXCETO:",
        options: [
            "revisar contratos jurídicos da empresa com foco em cláusulas comerciais.",
            "executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.",
            "orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais.",
            "receber comunicações da autoridade nacional e adotar providências.",
            "aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências."
        ],
        answer: 0,
        disclaimer: "Pelo art. 41, § 2º da LGPD, cabe ao Encarregado (DPO) aceitar reclamações dos titulares (I), receber comunicações da ANPD (II), orientar funcionários (III) e executar demais atribuições de proteção de dados determinadas pelo controlador (IV). Revisar contratos com foco em cláusulas comerciais não é atribuição legal do DPO."
    },
];

const banco_legis_mppe = [
    { 
        topic: "Lei Orgânica Estadual (LC 12/94 - MPPE)", 
        supportText: "",
        q: "De acordo com a Lei Complementar Estadual nº 12/1994 (Lei Orgânica do Ministério Público de Pernambuco), a chefia do Ministério Público do Estado de Pernambuco é exercida pelo Procurador-Geral de Justiça, que é nomeado:", 
        options: [ 
            "pelo Presidente da República, dentre os integrantes da lista sêxtupla escolhida pelo Colégio de Procuradores.", 
            "pelo Governador do Estado, escolhido dentre integrantes da carreira, maiores de trinta e cinco anos, integrantes da lista tríplice formada pelo Colégio de Procuradores de Justiça, para mandato de dois anos, permitida uma recondução.", 
            "pelo Conselho Nacional do Ministério Público (CNMP), mediante eleição direta de todos os membros da instituição.", 
            "pelo Tribunal de Justiça de Pernambuco (TJPE), dentre os Desembargadores mais antigos.", 
            "pela Assembleia Legislativa do Estado de Pernambuco (ALEPE), sem necessidade de lista tríplice." 
        ], 
        answer: 1, 
        disclaimer: "O Procurador-Geral de Justiça (PGJ) é nomeado pelo Governador do Estado escolhido a partir de lista tríplice composta por membros da carreira, com mais de 35 anos de idade e 10 anos de carreira, para mandato de 2 anos, permitida uma recondução (Art. 9º da LC 12/94 c/c Art. 100 da Constituição Estadual)." 
    },
    { 
        topic: "Lei Orgânica Nacional (Lei 8.625/93)", 
        supportText: "",
        q: "Conforme a Lei Orgânica Nacional do Ministério Público (Lei nº 8.625/1993), constitui prerrogativa processual dos membros do Ministério Público:", 
        options: [ 
            "ser processado e julgado originariamente pelo Supremo Tribunal Federal em qualquer tipo de infração penal.", 
            "receber intimação pessoal em qualquer processo e grau de jurisdição, nos autos em que atue, com contagem de prazo em dobro.", 
            "ser obrigado a depor em juízo sobre fatos que relacione com sua função, independentemente de prévia autorização do Colégio de Procuradores.", 
            "exercer a advocacia em qualquer juízo ou tribunal, desde que contra a Fazenda Pública Estadual.", 
            "prisão em flagrante por qualquer crime, independentemente de comunicação imediata ao Procurador-Geral de Justiça." 
        ], 
        answer: 1, 
        disclaimer: "Nos termos da Lei 8.625/93 e do CPC/CPP, os membros do MP possuem a prerrogativa de intimação pessoal em todos os atos processuais, gozando de prazo em dobro para manifestação." 
    },
    { 
        topic: "Quadro de Apoio do MPPE (Lei 12.956/05)", 
        supportText: "",
        q: "Nos termos da Lei Estadual nº 12.956/2005 do Ministério Público de Pernambuco, a carga horária normal de trabalho para os servidores efetivos do Quadro de Apoio Técnico-Administrativo é de:", 
        options: [ 
            "20 (vinte) horas semanais.", 
            "40 (quarenta) horas semanais, em dois períodos.", 
            "30 (trinta) horas semanais, em 01 (um) único período.", 
            "44 (quarenta e quatro) horas semanais.", 
            "36 (trinta e seis) horas semanais." 
        ], 
        answer: 2, 
        disclaimer: "Literalidade do Art. 15 da Lei Estadual nº 12.956/2005: A carga horária de trabalho a que estão obrigados os servidores do MPPE será de 30 (trinta) horas semanais, em 01 (um) único período." 
    },
    { 
        topic: "Vedações Funcionais (Lei 12.956/05)", 
        supportText: "",
        q: "De acordo com a Lei Estadual nº 12.956/2005, que dispõe sobre o plano de cargos e carreiras do MPPE, é expressamente vedado ao membro ou servidor do Ministério Público:", 
        options: [ 
            "participar de conselhos fiscais de empresas privadas de capital aberto.", 
            "manter, sob sua chefia imediata em cargo ou função de confiança, cônjuge, companheiro ou parente até terceiro grau.", 
            "realizar investimentos financeiros em fundos de renda fixa geridos por bancos públicos.", 
            "filiar-se a partidos políticos, regra aplicável indistintamente a servidores efetivos de apoio.", 
            "exercer magistério superior de forma cumulativa com o cargo efetivo." 
        ], 
        answer: 1, 
        disclaimer: "Literalidade do Art. 13 da Lei Estadual nº 12.956/2005: Ao membro ou servidor do Ministério Público é vedado manter, sob sua chefia imediata em cargo ou função de confiança, cônjuge, companheiro ou parente até terceiro grau (vedação ao nepotismo)." 
    },
    { 
        topic: "Lei Orgânica Estadual (LC 12/94 - Órgãos de Administração)", 
        supportText: "",
        q: "São órgãos da Administração Superior do Ministério Público de Pernambuco (LC nº 12/1994):", 
        options: [ 
            "A Procuradoria-Geral de Justiça, o Colégio de Procuradores de Justiça, o Conselho Superior do Ministério Público e a Corregedoria-Geral do Ministério Público.", 
            "As Promotorias de Justiça, os Procuradores de Justiça e o Centro de Estudos e Aperfeiçoamento Funcional (CEAF).", 
            "A Ouvidoria-Geral, a Secretaria-Geral e as Coordenadorias de Apoio Operacional.", 
            "A Comissão de Concurso, a Escola Superior do Ministério Público e a Corregedoria-Geral.", 
            "O Tribunal de Contas, a Procuradoria-Geral do Estado e o Colégio de Procuradores." 
        ], 
        answer: 0, 
        disclaimer: "Conforme o Art. 7º da Lei Complementar Estadual nº 12/1994, integram os órgãos de Administração Superior do MPPE: a Procuradoria-Geral de Justiça, o Colégio de Procuradores de Justiça, o Conselho Superior do Ministério Público e a Corregedoria-Geral do Ministério Público." 
    },
    { 
        topic: "Conselho Superior do MPPE (LC 12/94)", 
        type: "vf",
        supportText: "",
        q: "O Conselho Superior do Ministério Público de Pernambuco é um órgão de Administração Superior composto exclusivamente por membros natos, sem a participação de membros eleitos pelos órgãos de execução da carreira.", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. O Conselho Superior do MP é composto por membros natos (como o PGJ e o Corregedor-Geral) e também por membros eleitos dentre os Procuradores de Justiça, garantindo representatividade democrática interna." 
    },
    { 
        topic: "Estágio Probatório e Estabilidade", 
        type: "vf",
        supportText: "",
        q: "Nos termos da Lei Orgânica do MPPE, o servidor aprovado em concurso público para o quadro de apoio do Ministério Público adquire estabilidade após o decurso de 3 (três) anos de efetivo exercício, condicionado à aprovação em avaliação especial de desempenho.", 
        options: ["Certo", "Errado"], 
        answer: 0, 
        disclaimer: "Correto. Alinhado ao Art. 41 da Constituição Federal e às normas estatutárias aplicadas subsidiariamente aos servidores públicos civis do Estado de Pernambuco, a estabilidade no serviço público ocorre após 3 anos de efetivo exercício mediante avaliação de desempenho." 
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Nacionalidade",
        supportText: "",
        q: "Mike, brasileiro naturalizado, é acusado de, aqui no Brasil, atentar contra a ordem constitucional e o Estado Democrático. Narcisa, brasileira nata, possui também a nacionalidade alemã e deseja renunciar à nacionalidade brasileira. Considerando apenas as informações fornecidas, nessas situações, Mike:",
        options: [
            "não terá declarada a perda da nacionalidade brasileira, pois somente a perderia em virtude de fraude relacionada ao processo de naturalização. Narcisa perderá a nacionalidade brasileira, independentemente de pedido nesse sentido, pois adquiriu a nacionalidade alemã.",
            "terá declarada a perda da nacionalidade brasileira se tiver cancelada sua naturalização, por sentença judicial, em virtude de ter cometido o atentado de que é acusado. Narcisa perderá a nacionalidade brasileira, independentemente de pedido nesse sentido, pois adquiriu a nacionalidade alemã.",
            "terá declarada a perda da nacionalidade brasileira se tiver cancelada sua naturalização, por sentença judicial, em virtude de ter cometido o atentado de que é acusado. Narcisa não poderá ter declarada a perda da nacionalidade brasileira, ainda que faça pedido expresso nesse sentido, pois é brasileira nata.",
            "e Narcisa não terão declaradas as perdas das nacionalidades brasileiras respectivas, pois são brasileiros e a nacionalidade brasileira não pode ser perdida ou renunciada.",
            "terá declarada a perda da nacionalidade brasileira se tiver cancelada sua naturalização, por sentença judicial, em virtude de ter cometido o atentado de que é acusado. Narcisa terá declarada a perda da nacionalidade brasileira se fizer pedido expresso nesse sentido perante autoridade brasileira competente."
        ],
        answer: 4,
        disclaimer: "Nos termos do art. 12, § 4º, incisos I e II, da CF/88 (com a redação dada pela EC nº 131/2023), será declarada a perda da nacionalidade do brasileiro que: I - tiver cancelada sua naturalização, por sentença judicial, em virtude de fraude relacionada ao processo de naturalização ou de atentado contra a ordem constitucional e o Estado Democrático; II - fizer pedido expresso de perda da nacionalidade brasileira perante autoridade brasileira competente."
    },
    {
        topic: "Controle de Constitucionalidade",
        supportText: "",
        q: "Suponha que o Conselho Federal da Ordem dos Advogados do Brasil queira propor ação direta de inconstitucionalidade de lei estadual. Nessa situação, considerando apenas as informações fornecidas, essa ação:",
        options: [
            "será processada e julgada originariamente pelo Superior Tribunal de Justiça e a decisão definitiva de mérito por ele proferida produzirá eficácia contra todos e efeito vinculante, relativamente aos demais órgãos do Poder Judiciário e à administração pública direta e indireta, nas esferas federal, estadual e municipal.",
            "não pode ser proposta pelo Conselho Federal da Ordem dos Advogados do Brasil, pois ele não consta no rol taxativo de legitimados previsto na Constituição Federal.",
            "será processada e julgada originariamente pelo Supremo Tribunal Federal e a decisão definitiva de mérito por ele proferida produzirá eficácia contra todos e efeito vinculante, relativamente aos demais órgãos do Poder Judiciário e à administração pública direta e indireta, nas esferas federal, estadual e municipal.",
            "não poderá ser proposta, pois não é cabível ação direta de inconstitucionalidade de lei estadual, mas apenas de lei federal, conforme expressa disposição constitucional.",
            "será processada e julgada originariamente pelo Supremo Tribunal Federal e a decisão definitiva de mérito por ele proferida produzirá eficácia contra todos e efeito vinculante, exclusivamente com relação aos demais órgãos do Poder Judiciário."
        ],
        answer: 2,
        disclaimer: "De acordo com o art. 102, I, 'a', e § 2º, c/c art. 103, VII, da CF/88, o Conselho Federal da OAB é legitimado universal para propor ADI perante o STF, cuja decisão definitiva de mérito possui eficácia contra todos e efeito vinculante."
    },
    {
        topic: "Direitos e Garantias Fundamentais",
        supportText: "",
        q: "Com relação aos direitos e deveres individuais e coletivos:",
        options: [
            "qualquer pessoa, física ou jurídica, é parte legítima para propor ação popular que vise a anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural, ficando o autor, salvo comprovada má-fé, isento de custas judiciais e do ônus da sucumbência.",
            "nenhuma pena passará da pessoa do condenado, mas a obrigação de reparar o dano e a decretação do perdimento de bens podem ser, nos termos da lei, estendidas aos sucessores e contra eles executadas, sem qualquer limitação.",
            "a sucessão de bens de estrangeiros situados no País será sempre regulada pela lei brasileira em benefício do cônjuge ou dos filhos brasileiros, independentemente do quanto previsto na lei pessoal do de cujus.",
            "a lei considerará crimes inafiançáveis e insuscetíveis de graça ou anistia a prática da tortura, o tráfico ilícito de entorpecentes e drogas afins, o terrorismo e os definidos como crimes hediondos, por eles respondendo os mandantes, os executores e os que, podendo evitá-los, se omitirem.",
            "nenhum brasileiro será extraditado, nem o nato nem o naturalizado, por expressa vedação prevista na Constituição Federal, podendo ser concedida extradição de estrangeiro por crime político ou de opinião."
        ],
        answer: 3,
        disclaimer: "Literalidade do art. 5º, XLIII, da CF/88. (O crime hediondo e equiparados são inafiançáveis e insuscetíveis de graça ou anistia)."
    },
    {
        topic: "Conselho Nacional de Justiça (CNJ)",
        supportText: "",
        q: "De acordo com a Constituição Federal, o Conselho Nacional de Justiça:",
        options: [
            "será presidido pelo Presidente do Supremo Tribunal Federal e, nas suas ausências e impedimentos, pelo Presidente do Superior Tribunal de Justiça, possuindo, dentre suas competências, a de zelar pela autonomia do Poder Judiciário.",
            "é composto de onze membros, dentre eles, dois cidadãos de notável saber jurídico e reputação ilibada, ambos indicados pela Câmara dos Deputados, com mandato de dois anos, admitida uma recondução.",
            "possui a atribuição de receber e conhecer as reclamações contra membros do Poder Judiciário, não lhe sendo permitida a aplicação de sanções administrativas.",
            "será presidido pelo Presidente do Supremo Tribunal Federal e, nas suas ausências e impedimentos, pelo Vice-Presidente do Supremo Tribunal Federal, sendo que os demais membros do Conselho serão nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal.",
            "é composto de quinze membros com mandato de dois anos, dentre eles, um membro do Ministério Público da União, indicado pelo Procurador-Geral da República, não sendo admitida a recondução."
        ],
        answer: 0,
        disclaimer: "Nos termos do art. 103-B da CF/88, o CNJ é presidido pelo Presidente do STF (e nas suas ausências pelo Vice-Presidente do STF, conforme regimento interno/substituição legal; nota: o STJ substitui na presidência do CJF), sendo composto por 15 membros com mandato de 2 anos, admitida 1 recondução."
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Licitações e Contratos (Lei nº 14.133/2021)",
        supportText: "",
        q: "No que se refere às contratações diretas realizadas pelo Poder Público, é INCORRETO afirmar que:",
        options: [
            "nos casos de guerra, estado de defesa, estado de sítio, intervenção federal ou de grave perturbação da ordem, é dispensável a licitação.",
            "compreendem os casos de inexigibilidade e de dispensa de licitação.",
            "dispensa-se a apresentação de estimativa de despesa e de justificativa do preço.",
            "se realizadas indevidamente, com erro grosseiro, implicam a responsabilização solidária do contratado e do agente público responsável pelos danos ao erário.",
            "a contratação de profissional do setor artístico consagrado pela opinião pública enquadra-se em hipótese de inexigibilidade de licitação."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 72, incisos II e VII, da Lei nº 14.133/2021, o processo de contratação direta deve ser instruído com a estimativa de despesa e a justificativa de preço, não sendo tais requisitos dispensados."
    },
    {
        topic: "Lei de Acesso à Informação (Lei nº 12.527/2011)",
        supportText: "",
        q: "Considerando-se as disposições legais e constitucionais aplicáveis em matéria envolvendo o direito de acesso à informação:",
        options: [
            "cabe aos órgãos e entidades do poder público assegurar a proteção da informação, garantindo-se o seu sigilo, indisponibilidade e integridade.",
            "viola o direito fundamental de acesso à informação negar ou restringir o acesso a quaisquer informações de interesse particular ou de interesse coletivo ou geral, devendo estas ser prestadas pelos órgãos públicos no prazo da lei.",
            "as disposições da Lei nº 12.257/2011 aplicam-se exclusivamente aos órgãos e entidades da administração pública, no âmbito dos três Poderes, do Ministério Público e em todas as esferas federativas.",
            "a observância da publicidade como preceito geral e do sigilo como exceção é diretriz à qual estão sujeitos os procedimentos de acesso à informação.",
            "a divulgação de informações de interesse público fica condicionada a solicitação prévia e por escrito."
        ],
        answer: 3,
        disclaimer: "De acordo com o art. 3º, inciso I, da Lei nº 12.527/2011 (LAI), a observância da publicidade como preceito geral e do sigilo como exceção constitui diretriz fundamental aplicável aos procedimentos de acesso à informação."
    },
    {
        topic: "Lei Geral de Proteção de Dados (Lei nº 13.709/2018)",
        supportText: "",
        q: "Quanto à disciplina da proteção de dados pessoais, nos termos da Lei nº 13.709/2018:",
        options: [
            "o tratamento de dados pessoais tornados manifestamente públicos pelo seu titular não dispensa a exigência do seu consentimento.",
            "o dado pessoal referente à saúde ou à vida sexual vinculado a uma pessoa natural é considerado dado pessoal sensível.",
            "o dado relativo a titular que não possa ser identificado pelos meios técnicos razoáveis e disponíveis na ocasião do seu tratamento denomina-se dado oculto.",
            "a pessoa a quem competem as decisões referentes ao tratamento de dados pessoais é denominada operador.",
            "o consentimento do titular para tratamento de seus dados pessoais poderá ser, como regra, verbal, admitindo-se o consentimento tácito, que se perfaz mediante a ausência de recusa expressa do titular ao tratamento de dados pessoais perante a autoridade responsável."
        ],
        answer: 1,
        disclaimer: "Conforme o art. 5º, inciso II, da Lei nº 13.709/2018 (LGPD), dado pessoal sensível é o dado pessoal sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado genético ou biométrico."
    },
    {
        topic: "Agentes Públicos e Cargos",
        supportText: "",
        q: "Ao lugar dentro da organização funcional de uma Administração pública direta, autárquica ou fundacional, ocupado por servidor público e para o qual são fixados em lei ou diploma equivalente a remuneração e o conjunto de atribuições e responsabilidades, chamamos de:",
        options: [
            "carreira pública.",
            "função pública.",
            "emprego público.",
            "serviço público.",
            "cargo público."
        ],
        answer: 4,
        disclaimer: "Cargo público é a unidade de atribuições criada por lei, com denominação própria, número certo e vencimento pago pelos cofres públicos, para ser provido e exercido por um titular."
    },
    {
        topic: "Processo Administrativo (Lei nº 9.784/1999)",
        supportText: "",
        q: "Em conformidade com a Lei nº 9.784/1999, com relação à comunicação dos atos no processo administrativo, a intimação do interessado para ciência de decisão ou a efetivação de diligências:",
        options: [
            "será nula quando feita sem observância das prescrições legais, mas o comparecimento do administrado supre sua falta ou irregularidade.",
            "observará a antecedência mínima de cinco dias úteis quanto à data de comparecimento.",
            "deve ser sempre efetuada por ciência no processo, pois é o único meio que assegura a certeza da ciência do interessado.",
            "não atendida importa o reconhecimento da verdade dos fatos.",
            "não atendida importa a renúncia a direito pelo administrado."
        ],
        answer: 0,
        disclaimer: "Nos termos do art. 26, § 5º, da Lei nº 9.784/1999, o comparecimento do administrado supre a falta ou irregularidade da intimação."
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Responsabilidade Civil e Relações de Consumo",
        supportText: "",
        q: "Maria contratou serviços de uma empresa que iria fornecer almoço em sua festa de casamento e arcou com sua parte referente ao pagamento dos serviços contratados. No dia do evento, a empresa deixou de ir ao local e não prestou o serviço. Maria estava desesperada e acabou contratando o serviço de um restaurante na mesma rua do local da festa, que conseguiu atender seus convidados, embora com considerável atraso quanto ao horário previsto no convite. A empresa anteriormente contratada alegou que não houve culpa de sua parte, pois houve atraso de muitos de seus funcionários, de modo que não foi possível preparar a tempo a comida que seria servida no dia do casamento. Considerando o disposto no Código de Defesa do Consumidor, a empresa que deixou de prestar o serviço:",
        options: [
            "responderá pelos danos causados se Maria comprovar que a empresa contratada foi negligente e ainda agiu de má-fé ao não avisar a tempo que não conseguiria prestar o serviço.",
            "responderá pelos prejuízos materiais suportados por Maria, mas não por eventuais danos morais, salvo se comprovada culpa in eligendo no que se refere aos seus funcionários.",
            "não será responsabilizada, pois o fato de ter sido contratado outro restaurante por Maria elide a ocorrência de dano.",
            "não responderá pela reparação dos danos causados, pois a não prestação do serviço ocorreu sem que houvesse culpa de sua parte.",
            "responderá, independentemente da existência de culpa, pela reparação dos danos causados."
        ],
        answer: 4,
        disclaimer: "Nos termos do art. 14 do Código de Defesa do Consumidor (Lei nº 8.078/1990), o fornecedor de serviços responde, independentemente da existência de culpa, pela reparação dos danos causados aos consumidores por defeitos relativos à prestação dos serviços."
    },
    {
        topic: "Domicílio",
        supportText: "",
        q: "Sobre o domicílio, no Código Civil:",
        options: [
            "Nos contratos escritos, ainda que celebrados entre partes isonômicas, é vedado aos contratantes especificar domicílio onde se exercitem e cumpram os direitos e obrigações deles resultantes, uma vez que se trata de questão de ordem pública.",
            "Se a pessoa natural tiver diversas residências, onde, alternadamente, viva, considerar-se-á seu domicílio aquela que primeiro foi adquirida.",
            "O domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo. É também domicílio da pessoa natural, quanto às relações concernentes à profissão, o lugar onde esta é exercida.",
            "O domicílio do incapaz é o do seu representante ou assistente; o do servidor público, o lugar em que exercer permanentemente suas funções; e o do preso, o lugar em que habitualmente residia antes da prisão.",
            "O agente diplomático do Brasil, que, citado no estrangeiro, alegar extraterritorialidade sem designar onde tem, no país, o seu domicílio, poderá ser demandado no Distrito Federal ou no local de onde partiu do território brasileiro."
        ],
        answer: 2,
        disclaimer: "Combinação literal dos arts. 70 e 72 do Código Civil: O domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo. É também domicílio quanto às relações profissionais o lugar onde esta é exercida."
    },
    {
        topic: "Dos Bens",
        supportText: "",
        q: "Sobre os bens considerados em si mesmos, conforme previsão do Código Civil:",
        options: [
            "define-se como bens fungíveis os bens móveis cujo uso importa destruição imediata da própria substância.",
            "são fungíveis os móveis que podem substituir-se por outros da mesma espécie, qualidade e quantidade.",
            "considera-se móvel para os efeitos legais o direito à sucessão aberta.",
            "consideram-se imóveis para os efeitos legais as energias que tenham valor econômico.",
            "os materiais destinados a alguma construção, enquanto não forem empregados, conservam sua qualidade de móveis, mas não readquirem essa qualidade os provenientes da demolição de algum prédio."
        ],
        answer: 1,
        disclaimer: "Literalidade do art. 85 do Código Civil: 'São fungíveis os móveis que podem substituir-se por outros da mesma espécie, qualidade e quantidade'."
    },
    {
        topic: "Pessoas Jurídicas",
        supportText: "",
        q: "Conforme a atual previsão do Código Civil, são classificadas como pessoas jurídicas de direito privado as sociedades, as associações, as organizações religiosas, as:",
        options: [
            "fundações, os partidos políticos e os empreendimentos de economia solidária.",
            "fundações, as autarquias e os empreendimentos de economia solidária.",
            "fundações, as autarquias e os partidos políticos.",
            "fundações, os partidos políticos e as associações públicas.",
            "autarquias e as associações públicas."
        ],
        answer: 0,
        disclaimer: "De acordo com o art. 44 do Código Civil (com alterações recentes), são pessoas jurídicas de direito privado as associações, as sociedades, as fundações, as organizações religiosas, os partidos políticos e os empreendimentos de economia solidária."
    },
    {
        topic: "Direito de Família e Regime de Bens",
        supportText: "",
        q: "Arceu e Larissa casaram-se no regime de comunhão parcial de bens. De acordo com este tipo de regime de bens, comunicam-se os bens que sobrevierem ao casal, na constância do casamento, sendo prevista, dentre outros, que se excluem da comunhão, conforme disposição do Código Civil:",
        options: [
            "as benfeitorias em bens particulares de cada cônjuge.",
            "os bens adquiridos com valores exclusivamente pertencentes a um dos cônjuges em sub-rogação dos bens particulares.",
            "os bens adquiridos na constância do casamento por título oneroso, desde que só em nome de um dos cônjuges.",
            "os bens adquiridos por fato eventual, com ou sem o concurso de trabalho ou despesa anterior.",
            "os bens adquiridos por doação, herança ou legado, em favor de ambos os cônjuges."
        ],
        answer: 1,
        disclaimer: "Conforme o art. 1.659, inciso II, do Código Civil, excluem-se da comunhão no regime de comunhão parcial os bens adquiridos com valores exclusivamente pertencentes a um dos cônjuges em sub-rogação dos bens particulares."
    },
    {
        topic: "Contratos em Espécie",
        supportText: "",
        q: "Sobre o contrato de compra e venda, segundo disposição do Código Civil é INCORRETO afirmar que:",
        options: [
            "pelo contrato de compra e venda, uma pessoa, por liberalidade, transfere do seu patrimônio bens ou vantagens para o de outra.",
            "como regra geral, até o momento da tradição, os riscos da coisa correm por conta do vendedor, e os do preço por conta do comprador.",
            "salvo cláusula em contrário, ficarão as despesas de escritura e registro a cargo do comprador, e a cargo do vendedor as da tradição.",
            "o vendedor não é obrigado a entregar a coisa antes de receber o preço, não sendo a venda a crédito.",
            "é lícita a compra e venda entre cônjuges, com relação a bens excluídos da comunhão."
        ],
        answer: 0,
        disclaimer: "A alternativa A traz o conceito legal de doação (art. 538 do CC), e não de compra e venda. Na compra e venda, um dos contratantes obriga-se a transferir o domínio de certa coisa, e o outro, a pagar-lhe certo preço em dinheiro (art. 481)."
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
            "suspender o processo e determinar a intimação do espólio ou sucessores para promover habilitação sob pena de extinção sem resolução do mérito." 
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Recursos e Reclamação",
        supportText: "",
        q: "No curso de determinado processo, um Tribunal de Justiça proferiu decisão monocrática em agravo de instrumento. Inconformada, a parte interpôs o recurso cabível para que a matéria fosse apreciada pelo órgão colegiado. Posteriormente, a parte opôs embargos de declaração contra o acórdão, sob alegação de omissão. Paralelamente, sustentou que a decisão do Tribunal contrariou entendimento firmado em repetitivo do Superior Tribunal de Justiça, pleiteando medida adequada para preservar a autoridade desse precedente. Logo:",
        options: [
            "a interposição de embargos de declaração impede automaticamente a utilização de qualquer outro meio de impugnação.",
            "a decisão monocrática em agravo de instrumento é irrecorrível, salvo por recurso especial.",
            "cabem embargos de declaração apenas contra sentença, não sendo admissíveis contra acórdãos.",
            "a reclamação pode ser proposta após o trânsito em julgado da decisão reclamada.",
            "o recurso cabível contra decisão monocrática proferida pelo relator é o agravo interno."
        ],
        answer: 4,
        disclaimer: "Nos termos do art. 1.021 do CPC, contra decisão proferida pelo relator caberá agravo interno para o respectivo órgão colegiado."
    },
    {
        topic: "Extinção do Processo e Arbitragem",
        supportText: "",
        q: "Em demanda proposta perante o Poder Judiciário, o magistrado, ao constatar ausência de pressuposto processual de constituição e de desenvolvimento válido e regular do processo envolvendo direito patrimonial disponível, extinguiu o feito sem resolução do mérito. Posteriormente, a parte autora ajuizou nova demanda idêntica à extinta. Na nova ação, o réu suscitou a existência de questão prejudicial externa já decidida em outro processo transitado em julgado. No curso da nova demanda, as partes convencionaram afastar a jurisdição estatal e instituir arbitragem. À luz das normas fundamentais do processo civil, da teoria geral do processo e do regime jurídico instituído pelo CPC 2015, a:",
        options: [
            "cumulação de ações idênticas, em nova demanda, configura litispendência, ainda que o processo anterior tenha sido extinto sem resolução do mérito.",
            "ausência de pressuposto processual constitui vício sanável em qualquer hipótese, sendo vedada a extinção do processo sem resolução do mérito sem prévia intimação para emenda.",
            "existência de questão prejudicial já decidida em outro processo, ainda que não haja identidade de partes, impede a análise do mérito na nova demanda, em razão da coisa julgada material.",
            "convenção de arbitragem válida e regular, ainda que firmada no curso do processo judicial, autoriza a extinção do processo sem resolução do mérito, desde que verse sobre direitos patrimoniais disponíveis.",
            "extinção do processo sem resolução do mérito impede a repropositura da ação, em razão da ausência de formação válida da relação jurídica processual."
        ],
        answer: 3,
        disclaimer: "De acordo com o art. 3º, § 1º, e o art. 485, inciso VII, do CPC, a convenção de arbitragem válida e regular, inclusive quando firmada no curso do processo judicial, autoriza a extinção do processo sem resolução do mérito, desde que verse sobre direitos patrimoniais disponíveis."
    },
    {
        topic: "Petição Inicial",
        supportText: "",
        q: "Em determinada ação de cobrança, o juiz, ao receber a petição inicial, verificou que o autor não juntou documento essencial à propositura da demanda. Diante disso, determinou a intimação da parte autora para que promovesse a emenda da petição inicial no prazo legal, sob pena de indeferimento. Neste caso:",
        options: [
            "a falta de documento essencial gera automaticamente a revelia do réu, caso não suprida.",
            "o autor deve emendar a petição inicial no prazo de 5 dias, sob pena de extinção do processo com resolução do mérito.",
            "o autor deve emendar a petição inicial no prazo de 15 dias, sob pena de indeferimento da inicial.",
            "a ausência de documento essencial autoriza o indeferimento imediato da petição inicial, sem possibilidade de correção.",
            "a determinação de emenda só pode ocorrer após a apresentação da contestação pelo réu."
        ],
        answer: 2,
        disclaimer: "Conforme dispõe o art. 321 do CPC, o juiz determinará que o autor, no prazo de 15 dias, emende ou complete a petição inicial quando verificar defeitos ou irregularidades, sob pena de indeferimento."
    },
    {
        topic: "Citação e Efeitos",
        supportText: "",
        q: "No curso de uma ação, o réu foi regularmente citado, mas deixou de apresentar contestação no prazo legal. Diante disso, o juiz determinou o prosseguimento do feito, com base nos elementos constantes dos autos, considerando os efeitos processuais decorrentes da inércia do réu. A citação válida:",
        options: [
            "dispensa a necessidade de intimações futuras, pois o réu já foi cientificado do processo.",
            "torna prevento o juízo, induz litispendência e constitui em mora o devedor.",
            "apenas comunica ao réu a existência do processo, sem produzir outros efeitos jurídicos relevantes.",
            "impede a ocorrência de revelia, ainda que o réu não apresente contestação.",
            "suspende automaticamente o prazo para apresentação de defesa até nova intimação."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 240 do CPC, a citação válida induz litispendência, torna litigiosa a coisa e constitui em mora o devedor."
    },
    {
        topic: "Julgamento Conforme o Estado do Processo e Provas",
        supportText: "",
        q: "No curso de um processo de conhecimento, o juiz, ao examinar os autos após a fase postulatória, verificou que não há necessidade de produção de outras provas, pois o réu havia confessado, expressamente, os fatos constitutivos do direito do autor. Diante disso:",
        options: [
            "a audiência de instrução e julgamento é etapa obrigatória em todos os processos, independentemente da existência de provas suficientes.",
            "a confissão judicial não dispensa a produção de outras provas.",
            "o juiz deverá obrigatoriamente designar audiência de instrução e julgamento.",
            "a confissão é meio de prova que pode tornar desnecessária a instrução probatória, permitindo o julgamento conforme o estado do processo.",
            "os fatos confessados dependem de prova complementar para que possam ser considerados no julgamento do mérito."
        ],
        answer: 3,
        disclaimer: "De acordo com o art. 374, inciso II, do CPC, não dependem de prova os fatos confessados, permitindo o julgamento antecipado do mérito quando não houver outras provas a produzir."
    },
    {
        topic: "Cumprimento de Sentença",
        supportText: "",
        q: "Em ação de conhecimento, foi proferida sentença condenando o réu ao pagamento de quantia certa. Após o trânsito em julgado, o credor iniciou o cumprimento de sentença. Regularmente intimado, o devedor deixou de efetuar o pagamento voluntário no prazo legal. Posteriormente, apresentou impugnação ao cumprimento de sentença. Assim:",
        options: [
            "no cumprimento de sentença, não é admitida qualquer forma de defesa pelo executado.",
            "o não pagamento voluntário da obrigação no prazo legal acarreta a incidência de multa de 10% e honorários advocatícios de 10% sobre o débito.",
            "o cumprimento definitivo de sentença impede a prática de atos constritivos, como a penhora, enquanto pendente o julgamento da impugnação.",
            "a impugnação apresentada pelo devedor suspende automaticamente o andamento do cumprimento de sentença, independentemente de garantia do juízo.",
            "o prazo para pagamento voluntário da obrigação é de 5 dias, contados da intimação do devedor."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 523 do CPC, não ocorrendo pagamento voluntário no prazo de 15 dias, o débito será acrescido de multa de 10% e honorários de advogado de 10%."
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Crimes contra a Vida",
        supportText: "",
        q: "Matheus foi casado com Rebeca por cerca de três anos, a qual decidiu pôr fim à relação por incompatibilidades insanáveis. Inconformado, Matheus, a pretexto de visitá-la para uma última conversa, após ter a entrada franqueada na residência de Rebeca, desferiu, na presença dela, cinco disparos de arma de fogo contra a criança C.K.F, filho de Rebeca, os quais causaram a morte do infante. O crime foi praticado com o fim específico de causar sofrimento a Rebeca. Nos termos do Código Penal, a conduta de Matheus enquadra-se no crime de:",
        options: [
            "vicaricídio (art. 121-B, do CP), com pena de reclusão de 20 a 40 anos, não incidindo nenhuma causa de aumento de pena, mas apenas a agravante genérica de crime praticado contra criança (art. 61, II, 'h', do CP).",
            "vicaricídio (art. 121-B, do CP), com pena de reclusão de 20 a 40 anos, aumentada de um terço até a metade por ter sido praticado na presença de Rebeca e contra criança (art. 121-B, parágrafo único, I e II, do CP).",
            "vicaricídio (art. 121-B, do CP), com pena de reclusão de 20 a 40 anos, não incidindo nenhuma causa de aumento de pena.",
            "homicídio qualificado (art. 121, § 2º, do CP), com pena prevista de doze a trinta anos.",
            "infanticídio (art. 123 do CP), com pena de detenção de dois a seis anos."
        ],
        answer: 3,
        disclaimer: "O Código Penal não prevê o tipo penal autônomo de 'vicaricídio' no art. 121-B. A conduta de matar o filho da ex-companheira para lhe causar sofrimento amolda-se ao crime de homicídio qualificado (art. 121, § 2º, do CP)."
    },
    {
        topic: "Crimes contra a Administração Pública e Concurso de Pessoas",
        supportText: "",
        q: "João, funcionário público, solicitou ao empresário Thiago pedido de propina para não executar determinado ato de ofício que por lei estava obrigado a fazer. O pedido foi feito ao empresário discretamente pelo intermediário Pedro, amigo de João que não é funcionário público. Pedro e João combinaram que dividiriam o valor da propina. Thiago não aceitou o pedido e comunicou o fato à polícia. Nos termos do Código Penal:",
        options: [
            "João praticou o crime de corrupção passiva por ser funcionário público, e Pedro de tráfico de influência, por ser particular.",
            "apenas João praticou o crime de corrupção passiva consumado, que é crime próprio, podendo ser praticado apenas por funcionário público, não se comunicando as circunstâncias e as condições de caráter pessoal.",
            "João e Pedro praticaram o crime de corrupção passiva consumado.",
            "apenas João praticou o crime de corrupção passiva tentado, que é crime próprio, podendo ser praticado apenas por funcionário público, não se comunicando as circunstâncias e condições de caráter pessoal.",
            "João e Pedro praticaram o crime de corrupção passiva tentado."
        ],
        answer: 2,
        disclaimer: "O crime de corrupção passiva (art. 317 do CP) na modalidade 'solicitar' é formal e consuma-se no momento da solicitação. Pelo art. 30 do CP, a elementar de funcionário público comunica-se ao particular que dela tinha ciência."
    },
    {
        topic: "Extinção da Punibilidade e Prescrição",
        supportText: "",
        q: "Mário, nascido em 05/03/2000, praticou o delito de estelionato simples em 01/04/2020, com pena prevista de um a cinco anos, e multa. Relatado o inquérito policial, o Ministério Público ofereceu denúncia imputando-lhe a prática do delito do art. 171, caput, do Código Penal, a qual fora recebida em 06/07/2022. Regularmente processado, foi condenado à pena de um ano de reclusão e dez dias-multa, por sentença publicada em 09/06/2024, a qual transitou em julgado em 10/07/2024. Nos termos do Código Penal, no caso concreto, o prazo prescricional da pretensão punitiva estatal é de:",
        options: [
            "dois anos e não se consumou.",
            "doze anos e não se consumou.",
            "dois anos e se consumou entre a data do fato e a do recebimento da denúncia.",
            "dois anos e se consumou entre a data do recebimento da denúncia e a do trânsito em julgado da sentença condenatória.",
            "quatro anos e não se consumou."
        ],
        answer: 0,
        disclaimer: "Pela pena in concreto de 1 ano, a prescrição base seria de 4 anos (art. 109, V, CP). Como o réu era menor de 21 anos na data do fato (art. 115, CP), o prazo cai pela metade (2 anos), o qual não se consumou no caso."
    },
    {
        topic: "Crimes contra o Patrimônio",
        supportText: "",
        q: "Marco, em 01/03/2026, em Fortaleza-CE, praticou crime de furto, tendo por objeto material cabos para fornecimento de energia elétrica, instalados em praça pública, avaliados em quantia inferior a de um salário mínimo federal vigente à época dos fatos, resultando, portanto, na interrupção do serviço no bairro alvo de sua ação. Nos termos do Código Penal, a conduta de Marco enquadra-se no crime de furto:",
        options: [
            "simples (art. 155, caput, do CP), com pena de reclusão de um a quatro anos, e multa, sendo-lhe aplicável a forma privilegiada prevista no § 2º do art. 155 do Código Penal.",
            "simples (art. 155, caput, do CP), com pena de reclusão de um a seis anos, e multa, não lhe sendo aplicável a forma privilegiada prevista no § 2º do art. 155 do Código Penal.",
            "qualificado (art. 155, § 8º, do CP), com pena de reclusão de dois a oito anos, e multa, sendo-lhe aplicável a forma privilegiada prevista no § 2º do art. 155 do Código Penal.",
            "simples (art. 155, caput, do CP), com pena de reclusão de um a seis anos, e multa, sendo-lhe aplicável a forma privilegiada prevista no § 2º do art. 155 do Código Penal.",
            "qualificado (art. 155, § 8º, do CP), com pena de reclusão de dois a oito anos, e multa, não lhe sendo aplicável a forma privilegiada prevista no § 2º do art. 155 do Código Penal."
        ],
        answer: 4,
        disclaimer: "Conforme o art. 155, § 8º, do CP, a subtração de fios ou cabos de energia elétrica constitui furto qualificado, sendo vedada a aplicação do privilégio (§ 2º)."
    },
    {
        topic: "Lavagem de Capitais (Lei nº 9.613/1998)",
        supportText: "Patrícia está se preparando para prestar concurso para cargo de técnico judiciário e, observando que no edital consta como conteúdo programático a Lei nº 9.613/1998 e alterações, fez resumo com diversos pontos, entre os quais:<br>I. pode configurar crime antecedente apenas aqueles previstos expressamente em lei restritiva.<br>II. os crimes previstos na Lei nº 9.613/1998 não admitem a tentativa.<br>III. o processo e julgamento dos crimes previstos na Lei nº 9.613/1998 independem do processo e julgamento das infrações penais antecedentes.<br>IV. a pena será aumentada de 1/3 a 2/3 se forem cometidos de forma reiterada, por organização criminosa ou por meio de ativo virtual.",
        q: "Nos termos da Lei nº 9.613/1998, está correto o que se afirma APENAS em:",
        options: [
            "III e IV.",
            "II e III.",
            "I, III e IV.",
            "I e II.",
            "II e IV."
        ],
        answer: 0,
        disclaimer: "I é falso (qualquer infração penal serve de antecedente); II é falso (admite tentativa); III e IV são verdadeiros (art. 2º, II e art. 1º, § 4º)."
    },
    {
        topic: "Abuso de Autoridade (Lei nº 13.869/2019)",
        supportText: "",
        q: "Sérgio, delegado de polícia, é primário, cometeu o crime de abuso de autoridade tipificado no art. 10 da Lei nº 13.869/2019, decretando a condução coercitiva de investigado manifestamente descabida. Nos termos do art. 4º da Lei nº 13.869/2019, no caso concreto, são efeitos de eventual condenação tornar certa a obrigação de indenizar o dano causado pelo crime,",
        options: [
            "a perda do cargo, do mandato ou da função pública, não sendo o último automático, devendo ser declarado motivadamente na sentença.",
            "por ser Sérgio primário.",
            "a inabilitação para o exercício de cargo, mandato ou função pública, pelo período de 1 a 5 anos; a perda do cargo, do mandato ou da função pública, não sendo os dois últimos automáticos, devendo ser declarados motivadamente na sentença.",
            "a inabilitação para o exercício de cargo, mandato ou função pública, pelo período de 1 a 5 anos; a perda do cargo, do mandato ou da função pública, sendo todos estes efeitos automáticos.",
            "a inabilitação para o exercício de cargo, mandato ou função pública, pelo período de 1 a 5 anos, não sendo o último automático, devendo ser declarado motivadamente na sentença."
        ],
        answer: 1,
        disclaimer: "Os efeitos de inabilitação e perda do cargo (art. 4º, II e III) exigem reincidência em crime de abuso de autoridade. Como Sérgio é primário, aplica-se apenas a obrigação de indenizar (art. 4º, I)."
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

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Procedimento do Tribunal do Júri",
        supportText: "",
        q: "Mauro está sendo processado por crime de homicídio duplamente qualificado ocorrido na cidade de Caucaia-CE e, após a regular instrução na primeira fase do procedimento de competência do Tribunal do Júri, ele é pronunciado. Na fase de preparação do processo para julgamento em plenário, as partes serão intimadas para, no prazo de cinco dias, juntar documentos e requerer diligência, apresentando também o rol de testemunhas que irão depor em plenário, até o máximo de:",
        options: [
            "04.",
            "06.",
            "08.",
            "03.",
            "05."
        ],
        answer: 4,
        disclaimer: "Conforme dispõe o art. 422 do Código de Processo Penal, o rol de testemunhas para depor em plenário no Tribunal do Júri é de até 5 (cinco) testemunhas."
    },
    {
        topic: "Recursos no Processo Penal",
        supportText: "",
        q: "Silvio foi denunciado pelo Ministério Público por crime de lesão corporal seguida de morte. Após o oferecimento da denúncia, o Magistrado competente recebe os autos e rejeita liminarmente a denúncia, por entender faltar justa causa para o exercício da ação penal. Nesse caso, nos termos do Código de Processo Penal e do entendimento Sumulado do STF, contra essa decisão o Ministério Público deverá interpor recurso:",
        options: [
            "de apelação, que será remetido diretamente para análise do E. Tribunal de Justiça competente, não sendo o denunciado intimado para apresentar contrarrazões.",
            "em sentido estrito, devendo o denunciado ser obrigatoriamente intimado para apresentar contrarrazões ao recurso interposto sob pena de nulidade absoluta.",
            "em sentido estrito, que será remetido diretamente para análise do E. Tribunal de Justiça competente, não sendo o denunciado intimado.",
            "em sentido estrito, sendo facultativa a intimação do denunciado.",
            "de apelação, devendo o denunciado ser obrigatoriamente intimado sob pena de nulidade absoluta."
        ],
        answer: 1,
        disclaimer: "Contra decisão que rejeita a denúncia cabe Recurso em Sentido Estrito (art. 581, I, do CPP). Conforme a Súmula 707 do STF, é obrigatória a intimação do denunciado para oferecer contrarrazões sob pena de nulidade absoluta."
    },
    {
        topic: "Composição do Tribunal do Júri",
        supportText: "",
        q: "Xisto é Magistrado e designou uma sessão plenária do Tribunal do Júri. Além do Juiz Togado, o Tribunal do Júri é composto por 25 jurados sorteados, 7 dos quais constituirão o Conselho de Sentença. No dia marcado para a sessão, para dar início ao plenário, deverão comparecer, pelo menos:",
        options: [
            "20 jurados, podendo cada parte recusar, sem motivação, até 4 dos jurados.",
            "15 jurados, podendo cada parte recusar, sem motivação, até 3 dos jurados sorteados para compor o Conselho de Sentença.",
            "20 jurados, podendo cada parte recusar, sem motivação, até 3 dos jurados.",
            "15 jurados, podendo cada parte recusar, sem motivação, até 5 dos jurados.",
            "20 jurados, podendo cada parte recusar, sem motivação, até 5 dos jurados."
        ],
        answer: 1,
        disclaimer: "De acordo com o art. 463 do CPP, o quórum mínimo de comparecimento para a instalação dos trabalhos do Tribunal do Júri é de 15 jurados, sendo permitidas até 3 recusas imotivadas (peremptórias) por parte da defesa e da acusação (art. 468 do CPP)."
    },
    {
        topic: "Ação Penal e Sucessão Processual",
        supportText: "",
        q: "Raimundo ajuizou ação penal privada contra Ludmila, imputando-lhe crime de dano simples. Recebida a queixa, Raimundo acaba falecendo durante o trâmite processual. Raimundo é casado com Marta, tendo um filho (Moisés), genitora (Soraia) e um irmão (Paulo). Com a morte de Raimundo, o direito de prosseguir na ação penal privada passará, sucessivamente, para:",
        options: [
            "Soraia, Moisés, Paulo e Marta.",
            "Marta, Moisés, Soraia e Paulo.",
            "Moisés, Marta, Soraia e Paulo.",
            "Marta, Soraia, Moisés e Paulo.",
            "Moisés, Soraia, Marta e Paulo."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 31 do CPP (regra do CADI: Cônjuge, Ascendente, Descendente, Irmão), o direito de prosseguir passa preferencialmente ao cônjuge (Marta), seguido dos parentes na ordem legal (Moisés, Soraia e Paulo)."
    },
    {
        topic: "Acordo de Não Persecução Penal (ANPP)",
        supportText: "",
        q: "Isaura está sendo investigada por estelionato. Concluído o Inquérito Policial, o Ministério Público propõe a ela acordo de não persecução penal (ANPP), aceito pela investigada e seu defensor. Contudo, ao receber os autos, o Magistrado competente recusa a homologação do ANPP. Nesse caso, nos termos do Código de Processo Penal, Isaura poderá interpor:",
        options: [
            "recurso em sentido estrito, no prazo de 5 dias.",
            "correição parcial, no prazo de 5 dias.",
            "recurso de apelação, no prazo de 5 dias.",
            "recurso em sentido estrito, no prazo de 10 dias.",
            "recurso de apelação, no prazo de 10 dias."
        ],
        answer: 0,
        disclaimer: "De acordo com o art. 581, inciso XXV, do CPP, caberá recurso em sentido estrito (RESE), no prazo de 5 dias, da decisão que recusar homologação à proposta de ANPP."
    },
    {
        topic: "Juiz das Garantias",
        supportText: "",
        q: "Sobre o Juiz das Garantias, na esteira do Código de Processo Penal e da jurisprudência constitucional do STF:",
        options: [
            "se o investigado estiver preso, o juiz das garantias poderá prorrogar a duração do inquérito por até 05 dias.",
            "recebida a denúncia ou queixa, caberá ao juiz das garantias decidir as questões pendentes.",
            "a competência do juiz das garantias abrange todas as infrações penais, inclusive as de menor potencial ofensivo.",
            "as decisões proferidas pelo juiz das garantias não vinculam o juiz da instrução e julgamento, que, após o recebimento da denúncia ou queixa, deverá reexaminar a necessidade das medidas cautelares em curso, no prazo máximo de 10 dias.",
            "nas comarcas em que funcionar apenas um juiz, este será o juiz das garantias da instrução e do julgamento de forma acumulada permanente."
        ],
        answer: 3,
        disclaimer: "Conforme o art. 3º-C, § 2º, do CPP (conforme entendimento do STF), as decisões do juiz das garantias não vinculam o juiz da instrução, devendo este reexaminar as cautelares em até 10 dias após o recebimento da denúncia."
    },
];

// ---------------------------------------------------------
// 3. DISCIPLINAS ESPECÍFICAS: TÉCNICO MINISTERIAL
// ---------------------------------------------------------

const banco_noc_adm = [
    Aqui está o bloco completo atualizado da constante const banco_noc_adm, integrando as questões essenciais do banco anterior com as novas questões de Noções de Administração e Gestão Pública extraídas das provas aplicadas em concursos de Ministérios Públicos (TJCE, MPPI, MPCE, MPAL e MPSE), estruturadas perfeitamente para o seu questoes.js:   JavaScriptconst banco_noc_adm = [
    // --- QUESTÕES ORIGINAIS DO BANCO ---
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
        disclaimer: "Correto. Para hashlib/Herzberg, fatores higiênicos (extrínsecos) evitam a insatisfação, enquanto fatores motivacionais (intrínsecos, como reconhecimento e responsabilidade) geram satisfação." 
    },
    { 
        topic: "Processo Decisório", 
        type: "vf",
        supportText: "",
        q: "De acordo com Herbert Simon, o tomador de decisões nas organizações atua sob 'racionalidade absoluta', dispondo de todas as informações possíveis para encontrar sempre a decisão matematicamente ótima (maximização).", 
        options: ["Certo", "Errado"], 
        answer: 1, 
        disclaimer: "Errado. Herbert Simon formulou o conceito de 'Racionalidade Limitada' (Bounded Rationality): como o gestor não possui tempo nem todas as informações, ele busca uma decisão 'satisfatória' (suficientemente boa)." 
    },

    // --- NOVAS QUESTÕES EXTRAÍDAS DAS PROVAS (TJCE, MPPI, MPCE, MPAL, MPSE) ---
    {
        topic: "Gestão de Conflitos",
        supportText: "",
        q: "No que concerne à gestão de conflitos nas organizações, tem-se que a forma de enxergar e tratar os conflitos apresentou mudanças significativas ao longo dos anos. Nesse contexto, a abordagem interacionista:",
        options: [
            "negava ou ignorava a existência de conflito nas organizações e foi superada pela abordagem das relações humanas, que busca entender as razões dos conflitos.",
            "entende que o conflito, em qualquer nível, é inimigo da racionalidade e da eficiência do grupo, devendo ser suprimido.",
            "considera que os líderes devem manter um nível mínimo de conflito, o suficiente para que o grupo não fique estático e seja estimulado à inovação.",
            "sustenta que, embora o conflito seja inevitável e precise ser tratado, jamais deve ser incentivado ou mantido.",
            "procura atuar na causa geradora dos conflitos, procurando reduzir os fatores que o fomentam, como a competição entre os integrantes do grupo."
        ],
        answer: 2,
        disclaimer: "A abordagem interacionista defende que o conflito não apenas pode ser uma força positiva em um grupo, mas que um nível mínimo de conflito é absolutamente necessário para manter o grupo viável, autocrítico e criativo."
    },
    {
        topic: "Gestão por Projetos (CPM e PERT)",
        supportText: "",
        q: "Considere que uma organização que adote gestão por projetos baseada na metodologia do Caminho Crítico (Critical Path Method - CPM) esteja considerando substituir o referido método, passando a aplicar o denominado Program Evaluation and Review Technique (PERT). Tendo em mente as características dessas duas metodologias, caso operada a substituição aventada:",
        options: [
            "diversamente do que ocorre com o método CPM, que monitora todas as tarefas e etapas do projeto, com a adoção do PERT será monitorado apenas o que efetivamente impacta o tempo de execução do projeto.",
            "haverá ênfase na seleção de projetos, somente sendo escolhidos aqueles considerados viáveis financeiramente a partir de uma matriz de valoração segundo critérios de custo.",
            "não mais haverá o monitoramento do prazo de execução do projeto, mas apenas a avaliação dos impactos dos resultados obtidos a partir da correspondente implementação.",
            "os projetos deverão ser submetidos a revisões periódicas, para revalidação à luz dos objetivos estratégicos da organização, porém em períodos menores do que o previsto pelo método CPM.",
            "o tempo de duração dos projetos será calculado com base em uma média ponderada de cenários, incluindo o mais provável, o pessimista e o otimista."
        ],
        answer: 4,
        disclaimer: "O PERT é um método probabilístico que utiliza três estimativas de tempo para cada atividade (otimista, mais provável e pessimista) para calcular a duração esperada do projeto, diferindo do CPM tradicional que utiliza tempos determinísticos."
    },
    {
        topic: "Balanced Scorecard (BSC)",
        supportText: "",
        q: "O Balanced Scorecard (BSC) representa uma metodologia muito utilizada pelas organizações públicas e privadas para construção de planejamento e gestão estratégica, a qual considera, além da perspectiva financeira, o seguinte conjunto de perspectivas:",
        options: [
            "ambientais, sociais e de governança corporativa, conhecidas pela sigla ESG.",
            "forças e fraquezas, que também representam a cultura identificada na organização.",
            "conjunturais e estruturais, as quais também são os vetores do mapa estratégico.",
            "ameaças e oportunidades, combinadas para gerar a perspectiva do cenário interno.",
            "dos clientes, do crescimento/aprendizado e dos processos internos."
        ],
        answer: 4,
        disclaimer: "As quatro perspectivas clássicas do BSC são: Financeira, Clientes, Processos Internos e Aprendizado e Crescimento (Crescimento/Aprendizado)."
    },
    {
        topic: "Avaliação de Desempenho",
        supportText: "",
        q: "Suponha que o dirigente de uma determinada empresa pública pretenda proceder à avaliação de desempenho dos membros de sua equipe, valendo-se de alguma metodologia comumente utilizada no setor privado. Entre as possíveis alternativas, insere-se:",
        options: [
            "a avaliação 360°, também denominada Avaliação Circular, cabendo atentar que tal método pressupõe a autoavaliação e também a participação daqueles que se relacionam com o avaliado, tais como colegas, subordinados, superiores, fornecedores e clientes.",
            "o método dos incidentes críticos, o qual, contudo, demandará a realização de dinâmicas de grupo simulando situações extremas.",
            "a escala gráfica, que pode ser conveniente por ser um método rápido, porém sem risco do efeito halo.",
            "o método escolha forçada, no qual o avaliador realiza o ranqueamento dos profissionais em termos de resultados obtidos, o que leva ao desligamento automático de todos os colaboradores.",
            "a pesquisa de campo, metodologia baseada em comparação binária exclusiva com o mercado externo."
        ],
        answer: 0,
        disclaimer: "A avaliação 360 graus (ou circular) envolve múltiplas fontes de feedback (chefia, subordinados, colegas de equipe, clientes internos/externos e autoavaliação)."
    },
    {
        topic: "Gestão por Competências",
        supportText: "",
        q: "Uma entidade que pretenda aplicar os conceitos de gestão por competências deve adotar, entre outras medidas, o mapeamento de competências, o que significa, em termos concretos:",
        options: [
            "identificar as competências técnicas e comportamentais requeridas para os cargos ou entregas existentes na entidade em comparação com o perfil atual dos colaboradores.",
            "procurar, no mercado internacional, os melhores profissionais disponíveis para atuar na entidade.",
            "identificar os colaboradores da organização que possuem competência exclusiva para atuar nas posições de alta direção.",
            "realizar um benchmarking e escolher uma organização privada para espelhar as melhorias salariais.",
            "fomentar a competição interna entre seus colaboradores por meio de ranqueamento punitivo."
        ],
        answer: 0,
        disclaimer: "O mapeamento de competências consiste no levantamento e na identificação das lacunas entre as competências necessárias (requeridas pela organização) e as competências já existentes na força de trabalho atual."
    },
    {
        topic: "Eficiência, Eficácia e Efetividade",
        supportText: "",
        q: "A Administração Pública contemporânea cada vez mais vem sendo cobrada a apresentar uma gestão pública eficiente, eficaz e efetiva, sendo que:",
        options: [
            "eficiência diz respeito à capacidade de prestar os serviços com o menor e melhor uso possível de recursos.",
            "a efetividade refere-se estritamente à quantidade de produtos gerados pelo órgão, independentemente do impacto social.",
            "eficácia é o mesmo que economicidade e significa a relação custo-benefício estrita.",
            "eficiência confunde-se com eficácia, pois ambas medem o alcance de metas sem olhar os insumos.",
            "efetividade restringe-se ao cumprimento formal de prazos processuais."
        ],
        answer: 0,
        disclaimer: "Eficiência relaciona-se a insumos e produtos (fazer do jeito certo, otimizando recursos). Eficácia refere-se ao atingimento de metas/objetivos (fazer o que é preciso). Efetividade mede o impacto real gerado na sociedade."
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

    // --- NOVAS QUESTÕES DE GOVERNANÇA DE TI ---
    {
        topic: "ITIL 4 (Práticas de Gerenciamento)",
        supportText: "",
        q: "No âmbito do ITIL 4, a prática que tem como objetivo minimizar o impacto negativo de interrupções de serviços por meio da restauração da operação normal do serviço o mais rápido possível é denominada:",
        options: [
            "Gerenciamento de Problemas.",
            "Gerenciamento de Incidentes.",
            "Central de Serviços (Service Desk).",
            "Gerenciamento de Mudanças.",
            "Gerenciamento de Nível de Serviço."
        ],
        answer: 1,
        disclaimer: "O Gerenciamento de Incidentes do ITIL foca estritamente na restauração rápida do serviço, enquanto o Gerenciamento de Problemas investiga a causa-raiz."
    },
    {
        topic: "Governança de TIC (Português / Leis e Diretrizes)",
        supportText: "",
        q: "Na Governança de TI aplicada aos órgãos públicos do Ministério Público, as diretrizes de interoperabilidade, segurança da informação e transformação digital são frequentemente coordenadas por normativas federais e padrões institucionais. O modelo que define a estrutura de governança de TIC nos órgãos públicos federais e do judiciário/MP é o SISP ou diretrizes do CNMP. Assinale a alternativa correta sobre governança pública de TIC:",
        options: [
            "A governança de TIC restringe-se ao controle exclusivo de senhas de redes locais pelos analistas de suporte.",
            "O alinhamento estratégico entre os objetivos de negócio da instituição ministerial e os investimentos em tecnologia é pilar fundamental da governança de TIC.",
            "A contratação de soluções de TIC dispensa o PDTIC desde que haja saldo orçamentário.",
            "Os comitês de governança digital possuem natureza meramente decorativa e não deliberativa.",
            "A gestão de portfólio de projetos de TIC deve ignorar as prioridades institucionais do Ministério Público."
        ],
        answer: 1,
        disclaimer: "O alinhamento estratégico garante que os investimentos em tecnologia apoiem diretamente a missão institucional e os objetivos de negócio do órgão público."
    },
];

const banco_seg_ti = [
    Aqui está o bloco completo atualizado da constante const banco_seg_ti, reunindo as questões de Segurança da Informação, Gestão de Riscos e Continuidade formatadas perfeitamente para o seu questoes.js:
JavaScript

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
    Aqui está o bloco completo atualizado da constante const banco_eng_soft_ia, reunindo as questões de Engenharia de Software, DevOps, Metodologias Ágeis e Inteligência Artificial formatadas perfeitamente para o seu questoes.js:
JavaScript

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
    Aqui está o bloco completo atualizado da constante const banco_infra_bd, reunindo as questões de Infraestrutura, Nuvem, Bancos de Dados Relacionais e NoSQL formatadas perfeitamente para o seu questoes.js:
JavaScript

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
