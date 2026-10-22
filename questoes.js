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
        q: "Verifica-res o emprego de vírgula para assinalar a supressão de um verbo no seguinte trecho:",
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
        disclaimer: "O verbo 'exprobrar' significa censurar, reprovar severamente, repreende."
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
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "Texto CG2A1\nUm dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas. Ao reconhecer as necessidades e os sentimentos dos outros, somos capazes de nos colocar em seus lugares e compreender suas perspectivas, o que facilita a resolução de conflitos e a construção de relações mais saudáveis. Como afirma Marshall Bertram Rosenberg, em sua obra Comunicação não violenta, \"a CNV nos guia na reformulação do nosso modo de expressão e escuta dos outros, pela concentração em quatro áreas: o que observamos, o que sentimos, do que necessitamos e o que pedimos para nos enriquecer a vida\". A CNV promove uma escuta, um respeito e uma empatia profundos. Algumas pessoas usam a CNV para reagir compassivamente a si mesmas; outras, para estabelecer maior profundidade em suas relações pessoais, e outras, ainda, para gerar relacionamentos eficazes no trabalho ou na política. No mundo inteiro, utiliza-se a CNV para mediar disputas e conflitos em todos os níveis.\nParticularmente no que se refere à função ministerial, é preciso que se evite o que o autor chama de comunicação alienante da vida, isto é, \"os juízos morais, que atribuem erro ou ruindade às pessoas que não agem conforme certos valores\". Com efeito, um órgão acusatório inevitavelmente terá que formular, de modo técnico, imputações acerca da prática de ilícitos (uma denúncia criminal narrará a prática de uma conduta que se amolda a um tipo penal), o que não significa, contudo, que os agentes públicos que integram a instituição estejam autorizados a proferir julgamentos morais. No modelo de um Ministério Público dialógico, ou seja, aquele que efetivamente se abre à interlocução com a sociedade, a CNV é fator que transforma o discurso em prática, pois propicia o diálogo face a face com os mais diferentes e antagônicos setores e, a partir disso, a construção de confiança e o desenvolvimento do compromisso e da compreensão comuns entre os atores envolvidos.",
        q: "Infere-se do segundo parágrafo do texto que a relevância da CNV no contexto do Ministério Público reside em impedir que acusações formuladas por seus agentes sejam influenciadas por divergências axiológicas entre as partes.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O texto afirma que a relevância está em evitar 'juízos morais' ao formular imputações técnicas, não indicando que o objetivo seja impedir influência de divergências axiológicas entre as partes." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "Segundo o texto, uma das vantagens do uso da CNV é propiciar a empatia entre as pessoas.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O primeiro período do texto afirma literalmente: 'Um dos principais benefícios da comunicação não violenta (CNV) é a promoção da empatia e da compaixão entre as pessoas'." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "As aplicações da CNV em diversos âmbitos, como o psicológico, o interpessoal ou o profissional, visam impedir o surgimento de conflitos.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O texto menciona que a CNV facilita a 'resolução de conflitos' e serve para 'mediar disputas', não tendo o condão de 'impedir o surgimento' deles." //[cite: 24]
    },
    {
        topic: "Compreensão e Interpretação de Textos",
        type: "vf",
        supportText: "",
        q: "Entende-se da leitura do texto que, no contexto do modelo dialógico de Ministério Público, a CNV favorece a conformidade entre palavras e ações.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O texto corrobora essa afirmação ao dizer que a CNV é 'fator que transforma o discurso em prática'." //[cite: 24]
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "",
        q: "O termo \"autor\" (primeiro período do segundo parágrafo) faz referência a \"Marshall Bertram Rosenberg\" (terceiro período do primeiro parágrafo).", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "'Autor' retoma a referência do criador da obra mencionado explicitamente no parágrafo anterior." //[cite: 24]
    },
    {
        topic: "Coesão e Relações Lógico-Semânticas",
        type: "vf",
        supportText: "",
        q: "Mediante o emprego da expressão \"Com efeito\", no segundo período do segundo parágrafo, os autores reforçam a ideia apresentada no período anterior.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A locução adverbial 'com efeito' tem o valor semântico de confirmação, ênfase ou reforço de uma ideia (equivale a 'de fato')." //[cite: 24]
    },
    {
        topic: "Coesão Referencial",
        type: "vf",
        supportText: "",
        q: "No último período do texto, o pronome presente na forma contraída \"disso\", em \"a partir disso\", retoma \"fator que transforma o discurso em prática\".", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O pronome anafórico 'disso' retoma a ideia imediatamente anterior: o 'diálogo face a face com os mais diferentes e antagônicos setores'." //[cite: 24]
    },
    {
        topic: "Colocação Pronominal",
        type: "vf",
        supportText: "",
        q: "No segmento \"que efetivamente se abre\" (último período do texto), o deslocamento do pronome \"se\" para a posição enclítica — que efetivamente abre-se — manteria a correção gramatical do texto.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A presença do pronome relativo 'que' e do advérbio 'efetivamente' constituem palavras atrativas que exigem obrigatoriamente a próclise." //[cite: 24]
    },
    {
        topic: "Morfologia e Classes de Palavras",
        type: "vf",
        supportText: "",
        q: "No penúltimo período do primeiro parágrafo, o termo \"ainda\" expressa circunstância de tempo.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "No trecho 'outras, ainda, para gerar relacionamentos', a palavra 'ainda' tem valor de inclusão/adição, e não temporal." //[cite: 24]
    },
    {
        topic: "Tempos e Modos Verbais",
        type: "vf",
        supportText: "",
        q: "O tempo e o modo verbais empregados em \"narrará\" (segundo período do segundo parágrafo) sinalizam a provável ocorrência da ação de narrar.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O futuro do presente do indicativo ('narrará') expressa um fato futuro tido como certo/categórico no contexto da frase, e não uma mera probabilidade." //[cite: 24]
    },
    {
        topic: "Pontuação e Figuras de Linguagem",
        type: "vf",
        supportText: "",
        q: "No trecho \"outras, para estabelecer maior profundidade em suas relações pessoais\" (penúltimo período do primeiro parágrafo), a vírgula indica supressão de palavras.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A vírgula após 'outras' marca a elipse (zeugma) da expressão 'usam a CNV' explícita na oração anterior." //[cite: 24]
    },
    {
        topic: "Sintaxe",
        type: "vf",
        supportText: "",
        q: "Na citação apresentada no terceiro período do primeiro parágrafo, o segmento 'dos outros' complementa o sentido dos substantivos 'expressão' e 'escuta'.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "O termo 'dos outros' atua como complemento nominal apenas do substantivo 'escuta' (escuta dos outros). Não há ligação sintática ou de sentido com 'expressão'." //[cite: 24]
    },
    {
        topic: "Regência",
        type: "vf",
        supportText: "",
        q: "No segmento \"terá que formular\" (segundo período do segundo parágrafo), a substituição do vocábulo \"que\" por de comprometeria a correção gramatical do texto.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A substituição está correta. As locuções verbais 'ter que' e 'ter de' são sinônimas e igualmente aceitas na norma-padrão." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Na correspondência oficial, a formalidade de tratamento está associada tanto à civilidade quanto à necessidade de uniformização das comunicações.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "De acordo com o Manual de Redação da Presidência da República, a formalidade abrange a polidez, a civilidade e a uniformidade das comunicações." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Por ser a concisão uma das principais características da redação oficial, recomenda-se que o texto de documentos oficiais seja composto de, no máximo, quatro parágrafos.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "A concisão é obrigatória, mas o Manual não estipula limite máximo de parágrafos para os documentos oficiais." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Em comunicações internas, via email, entre autoridades de mesma hierarquia, deve-se empregar o fecho Atenciosamente.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "O MRPR estabelece o uso de 'Atenciosamente' para autoridades de mesma hierarquia ou de hierarquia inferior." //[cite: 24]
    },
    {
        topic: "Redação Oficial",
        type: "vf",
        supportText: "",
        q: "Cada parágrafo de um expediente oficial deve ser numerado, mediante o uso de números romanos, ainda que o documento apresente um único parágrafo.", //[cite: 24]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Quando o documento contém apenas um parágrafo, não há numeração. Quando há mais de um, numeram-se com algarismos arábicos, e não romanos." //[cite: 24]
    }
    
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
    {
        topic: "Correio Eletrônico (Clientes de E-mail)",
        supportText: "",
        q: "Os softwares utilitários são programas que oferecem funcionalidades específicas para melhorar o desempenho, a segurança ou a usabilidade de um sistema computacional. Entre esses utilitários, existem aqueles voltados para a gestão de e-mails. Assinale a alternativa que apresenta um software classificado como cliente de e-mail.", //[cite: 6]
        options: [
            "IrfanView.",
            "Microsoft Outlook.",
            "Google Meet.",
            "VLC Media Player.",
            "Kaspersky."
        ],
        answer: 1,
        disclaimer: "O Microsoft Outlook é um cliente de e-mail e gerenciador de informações pessoais da Microsoft." //[cite: 6]
    },
    {
        topic: "Sistema Operacional (Windows 11)",
        supportText: "",
        q: "Ao utilizar o sistema operacional Microsoft Windows 11 (em português), é possível nomear pastas e arquivos, entretanto alguns caracteres e nomes são reservados do sistema operacional e, portanto, não podem ser utilizados. Considerando essa informação, assinale a alternativa que apresenta um nome de pasta permitido, ou seja, que não é reservado do sistema operacional.", //[cite: 6]
        options: [
            "AUX",
            "COM2",
            "LPT4",
            "AHL",
            "CON"
        ],
        answer: 3,
        disclaimer: "Herança do antigo MS-DOS, o Windows proíbe o uso de nomes de dispositivos reservados como CON, PRN, AUX, NUL, COM1-COM9 e LPT1-LPT9. Portanto, 'AHL' é o único permitido." //[cite: 6]
    },
    {
        topic: "Hardware (Dispositivos de Armazenamento)",
        supportText: "Os discos de armazenamento são dispositivos utilizados para guardar dados de forma permanente ou temporária, sendo essenciais para o funcionamento de qualquer computador ou sistema digital. Considerando alguns desses discos de armazenamento, informe se é verdadeiro (V) ou falso (F) o que se afirma a seguir:\n( ) Um SSD (Solid State Drive) utiliza discos magnéticos e cabeças de leitura para acessar os dados.\n( ) Um HDD (Hard Disk Drive) armazena dados usando memória flash, sem partes móveis.\n( ) O pendrive tem armazenamento portátil com memória flash.", //[cite: 6]
        q: "Assinale a alternativa com a sequência correta.", //[cite: 6]
        options: [
            "V - V - V.",
            "F - F - F.",
            "V - F - V.",
            "F - F - V.",
            "V - F - F."
        ],
        answer: 3,
        disclaimer: "A banca inverteu os conceitos nas duas primeiras: o HDD é que usa discos magnéticos e cabeças móveis; o SSD usa memória flash (chips) sem partes móveis, assim como o pendrive. Sequência: F - F - V." //[cite: 6]
    },
    {
        topic: "Navegadores (Google Chrome)",
        supportText: "",
        q: "Durante uma verificação de rotina nos sites institucionais, um servidor do MPRS identificou que algumas páginas oficiais apresentavam lentidão e erros de exibição ao serem acessadas pelo Google Chrome (em português). Ao perceber que o problema persistia mesmo após limpar os dados de navegação e reiniciar o navegador, o servidor decidiu informar o ocorrido diretamente à equipe de suporte do navegador, utilizando o formulário de feedback. Para isso, ele utilizou qual dos seguintes atalhos do teclado?", //[cite: 6]
        options: [
            "Ctrl + Shift + g",
            "Ctrl + Shift + j",
            "Ctrl + Shift + m",
            "Alt + Shift + a",
            "Alt + Shift + i"
        ],
        answer: 4,
        disclaimer: "No Google Chrome, o atalho de teclado padrão para abrir a janela de 'Enviar feedback' (informar um problema) é Alt + Shift + i." //[cite: 6]
    },
    {
        topic: "Segurança da Informação (LGPD)",
        supportText: "",
        q: "De acordo com a Lei Geral de Proteção de Dados (LGPD), Lei nº 13.709/2018 - Cap. IV - Dos Agentes de Tratamento de Dados Pessoais, Seção I - Do Encarregado pelo Tratamento de Dados Pessoais, Art. 41, § 2º, as atividades do encarregado consistem em, EXCETO", //[cite: 6]
        options: [
            "revisar contratos jurídicos da empresa com foco em cláusulas comerciais.",
            "executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.",
            "orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais.",
            "receber comunicações da autoridade nacional e adotar providências.",
            "aceitar reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências."
        ],
        answer: 0,
        disclaimer: "Revisar contratos com foco puramente comercial foge do escopo legal de atuação do DPO (Encarregado), que deve focar na conformidade de privacidade e proteção de dados." //[cite: 6]
    }
];

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
    }
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
    }
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
// =========================================================
// BANCOS DE QUESTÕES
// =========================================================
// Estas declarações evitam ReferenceError nos bancos que
// ainda não possuem questões cadastradas neste arquivo.
//
// ATENÇÃO: os arrays vazios não contêm questões.
// Será necessário preenchê-los posteriormente.

const banco_rlm = [
    {
        topic: "Equivalência e Negação Lógica",
        supportText: "",
        q: "A negação lógica da proposição condicional 'Se o processo é eletrônico, então a intimação é automática' é logicamente equivalente a:",
        options: [
            "Se o processo não é eletrônico, então a intimação não é automática.",
            "O processo não é eletrônico ou a intimação não é automática.",
            "O processo é eletrônico e a intimação não é automática.",
            "Se a intimação não é automática, então o processo não é eletrônico.",
            "O processo não é eletrônico e a intimação é automática."
        ],
        answer: 2,
        disclaimer: "A negação da condicional (P -> Q) segue a regra da 'MANÉ' (Mantém a primeira E Nega a segunda): P ^ ~Q ('O processo é eletrônico e a intimação não é automática')."
    },
    {
        topic: "Equivalência Lógica (Contrapositiva)",
        supportText: "",
        q: "Considere verdadeira a afirmação: 'Todo analista de sistemas sabe programar em Python'. A partir dessa premissa, conclui-se corretamente que:",
        options: [
            "Quem sabe programar em Python é analista de sistemas.",
            "Se Carlos não sabe programar em Python, então ele não é analista de sistemas.",
            "Se Carlos não é analista de sistemas, então ele não sabe programar em Python.",
            "Nenhum programador de Python ocupa outro cargo.",
            "Algum analista de sistemas não sabe programar em Python."
        ],
        answer: 1,
        disclaimer: "Todo A é B equivale à condicional (A -> B). Pela equivalência contrapositiva (~B -> ~A), se alguém não pertence ao conjunto de quem programa em Python, necessariamente não é analista de sistemas."
    },
    {
        topic: "Porcentagem e Variação Percentual",
        supportText: "",
        q: "O acervo de processos pendentes de um cartório judicial sofreu um aumento de 20% no primeiro semestre e, sobre o novo total, uma redução de 20% no segundo semestre. Em relação ao acervo inicial do ano, o número final de processos:",
        options: [
            "permaneceu exatamente igual.",
            "aumentou 4%.",
            "diminuiu 4%.",
            "diminuiu 2%.",
            "aumentou 2%."
        ],
        answer: 2,
        disclaimer: "Multiplicando os fatores de variação: 1,20 x 0,80 = 0,96, o que corresponde a 96% do valor inicial (uma redução acumulada de 4%)."
    },
    {
        topic: "Matemática Financeira (Juros Compostos)",
        supportText: "",
        q: "Um capital de R$ 10.000,00 é aplicado no regime de juros compostos à taxa de 10% ao mês durante 2 meses. O montante final acumulado ao término desse período será de:",
        options: [
            "R$ 12.000,00.",
            "R$ 12.100,00.",
            "R$ 11.000,00.",
            "R$ 12.200,00.",
            "R$ 12.500,00."
        ],
        answer: 1,
        disclaimer: "No regime de juros compostos, M = C * (1 + i)^t -> M = 10.000 * (1,10)^2 = 10.000 * 1,21 = R$ 12.100,00."
    },
    {
        topic: "Análise Combinatória e Probabilidade",
        type: "vf",
        supportText: "",
        q: "Em uma comissão formada por 5 servidores distintos, o número de maneiras diferentes de escolher 1 Presidente e 1 Secretário é igual a 20.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Como a ordem importa (cargos distintos), trata-se de um Arranjo de 5 elementos tomados 2 a 2: 5 x 4 = 20 maneiras distintas."
    },
        {
        topic: "Sequências Lógicas",
        supportText: "",
        q: "Ao realizar os registros das quantidades de correspondências expedidas pelo MP em cada um dos seis dias úteis de trabalho, um técnico registrou a seguinte sequência numérica: (2, 5, 10, 17, 26, x), sendo x um número inteiro e que representa a quantidade de correspondências expedidas no sexto dia útil, mas que não foi possível ser identificado no momento da leitura desses registros. Sabendo que os elementos dessa sequência obedecem a uma lei de formação, então a quantidade de correspondências expedidas no sexto dia, ou seja, o valor de x, é igual a", //[cite: 7]
        options: [
            "15.",
            "26.",
            "37.",
            "48.",
            "59."
        ],
        answer: 2,
        disclaimer: "A sequência cresce somando os números ímpares sucessivos: +3, +5, +7, +9. O próximo incremento deve ser +11. Logo, 26 + 11 = 37." //[cite: 7]
    },
    {
        topic: "Regra de Três Composta",
        supportText: "",
        q: "Considere que 3 técnicos do MP, dedicando 2 horas diárias de trabalho, realizam o fichamento de 75 processos no período de 5 dias. O número de dias necessários para 5 técnicos, com a mesma eficiência dos técnicos mencionados anteriormente, realizarem o fichamento de 300 processos, dedicando 3 horas diárias de trabalho, será de", //[cite: 7]
        options: [
            "10 dias.",
            "4 dias.",
            "16 dias.",
            "2 dias.",
            "8 dias."
        ],
        answer: 4,
        disclaimer: "Montando as proporções da regra de três composta, chega-se ao resultado de 8 dias." //[cite: 7]
    },
    {
        topic: "Associação Lógica",
        supportText: "Os técnicos André, Bete e Clóvis atuam em um setor do MP, sendo que cada um deles exerce uma atividade diferente: digitação de relatórios, fichamento de arquivos e coleta de dados para pesquisas, não necessariamente nessa ordem. Considere que somente uma das seguintes afirmações seja verdadeira:\n- André exerce a atividade de digitação de relatórios;\n- Bete não exerce a atividade de digitação de relatórios;\n- Clóvis não exerce a atividade de coleta de dados para pesquisas.", //[cite: 7]
        q: "Com base nessas informações, é correto afirmar que as respectivas atividades exercidas, nesse setor, por Bete e Clóvis são:", //[cite: 7]
        options: [
            "digitação de relatórios e fichamento de arquivos.",
            "digitação de relatórios e coleta de dados para pesquisas.",
            "fichamento de arquivos e coleta de dados para pesquisas.",
            "coleta de dados para pesquisas e digitação de relatórios.",
            "coleta de dados para pesquisas e fichamento de arquivos."
        ],
        answer: 0,
        disclaimer: "Testando as hipóteses para encontrar a única verdadeira, conclui-se que a afirmação sobre Clóvis é a única verdadeira. Logo, Bete cuida da digitação e Clóvis do fichamento." //[cite: 7]
    },
    {
        topic: "Teoria dos Conjuntos",
        supportText: "Em determinado dia de trabalho no MP, foram realizadas 400 pesquisas em bancos de dados eletrônicos. Essas pesquisas abrangeram assuntos administrativos especificamente relacionados às áreas de pessoal, patrimonial ou financeira ou trataram de outros temas. As seguintes informações são conhecidas:\n- 200 pesquisas trataram de questões de pessoal;\n- 180 pesquisas abordaram questões patrimoniais;\n- 150 pesquisas envolveram questões financeiras;\n- 70 pesquisas trataram de exatamente duas das três áreas administrativas;\n- 50 pesquisas foram referentes a outros assuntos (não administrativos);\n- A quantidade de pesquisas que se referem exclusivamente à área de pessoal é o dobro da quantidade de pesquisas que se refere exclusivamente à área financeira.", //[cite: 8]
        q: "Com base nessas informações, a quantidade de pesquisas que abordaram simultaneamente as três áreas administrativas (pessoal, patrimonial e financeira) é igual a", //[cite: 8]
        options: [
            "25.",
            "30.",
            "45.",
            "55.",
            "60."
        ],
        answer: 3,
        disclaimer: "Aplicando as fórmulas de diagramas de Venn, a intersecção tripla resulta em 55." //[cite: 8]
    },
    {
        topic: "Problemas Aritméticos e Equações",
        supportText: "Analisando os tempos de carreira atuais de dois técnicos atuantes no MP, sabe-se que:\n- Wilson tem o dobro do tempo de carreira de Fernando acrescido de 4 anos;\n- Daqui a 10 anos, a soma do tempo de carreira de ambos será 42 anos.", //[cite: 8]
        q: "Diante dessas informações, qual é o tempo de carreira atual do Técnico Wilson?", //[cite: 8]
        options: [
            "18 anos.",
            "16 anos.",
            "14 anos.",
            "12 anos.",
            "10 anos."
        ],
        answer: 1,
        disclaimer: "Montando o sistema de equações lineares: W = 2F + 4 e (W + 10) + (F + 10) = 42. Resolvendo, acha-se F = 6 e W = 16." //[cite: 8]
    },
    {
        topic: "Funções de 1º Grau",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "O número de processos autuados no primeiro mês correspondeu a menos de 10% do número total de processos autuados no ano sob análise.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Em f(1) foram 318 autuações. A soma total do ano é superior a 3.350. Como 10% do total é ~335, os 318 representam menos de 10%." //[cite: 25]
    },
    {
        topic: "Progressão Aritmética (PA)",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "A sequência formada pelo número de processos autuados mês a mês é uma progressão aritmética.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Trata-se de uma PA decrescente, com razão r = -7." //[cite: 25]
    },
    {
        topic: "Geometria Analítica e Gráficos",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Ao se plotar, em um sistema de coordenadas cartesianas, os pares ordenados formados por um número associado ao mês e pelo número associado ao número de processos autuados naquele mês, tem-se que tais pontos estarão sobre uma reta.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "A função dada é do tipo afim ou de 1º grau, cuja representação gráfica sempre descreve uma reta." //[cite: 25]
    },
    {
        topic: "Equações",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Existe um mês em que foram autuados exatamente 120 processos.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Igualando a função a 120: 325 - 7x = 120 => 7x = 205 => x = 29,28. Como o mês deve ser um número inteiro, a afirmação está errada." //[cite: 25]
    },
    {
        topic: "Funções",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "No nono mês daquele ano, foram autuados menos de 250 processos.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Substituindo x por 9: f(9) = 325 - 7(9) = 325 - 63 = 262. Como 262 não é menor que 250, a afirmativa está errada." //[cite: 25]
    },
    {
        topic: "Probabilidade",
        type: "vf",
        supportText: "Ao supervisionar um estudo de caso em certa repartição, um técnico ministerial observou que o número de processos autuados no mês x de certo ano, em que x=1,2,3,..., poderia ser calculado por meio da função f(x)=325-7x em que x=1 corresponde ao mês de janeiro.", //[cite: 25]
        q: "Ao se selecionar ao acaso um processo autuado no ano em questão, a probabilidade de ele ter sido autuado no primeiro semestre é igual à probabilidade de ter sido autuado no segundo semestre desse ano.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Como a função decresce ao longo do tempo (razão negativa), o total de processos do primeiro semestre é maior que o do segundo. Logo, as probabilidades são desiguais." //[cite: 25]
    }
];

const banco_legis_mppe = [
    {
        topic: "Princípios Institucionais do Ministério Público",
        supportText: "",
        q: "De acordo com a Lei Orgânica do Ministério Público (Lei nº 8.625/1993 e LC Estadual nº 12/1994), são princípios institucionais do Ministério Público:",
        options: [
            "a hierarquia administrativa, a subordinação ao Poder Judiciário e a vitaliciedade.",
            "a unidade, a indivisibilidade e a independência funcional.",
            "a oralidade, a concentração dos atos e a inércia jurisdicional.",
            "a autotutela, a vinculação ao Poder Executivo e a impessoalidade.",
            "a divisibilidade, a delegabilidade irrestrita e o sigilo absoluto."
        ],
        answer: 1,
        disclaimer: "Conforme o art. 127, § 1º da CF/88 e o art. 1º, parágrafo único da LONMP/LOMPPE, são princípios institucionais do MP a unidade, a indivisibilidade e a independência funcional."
    },
    {
        topic: "Órgãos da Administração Superior do MPPE",
        supportText: "",
        q: "Segundo a Lei Complementar Estadual nº 12/1994 (Lei Orgânica do MPPE), NÃO constitui órgão da Administração Superior do Ministério Público, sendo classificado como órgão de execução:",
        options: [
            "a Procuradoria-Geral de Justiça.",
            "o Colégio de Procuradores de Justiça.",
            "o Conselho Superior do Ministério Público.",
            "a Corregedoria-Geral do Ministério Público.",
            "os Promotores de Justiça."
        ],
        answer: 4,
        disclaimer: "Os Promotores de Justiça (assim como os Procuradores de Justiça, o PGJ e o Conselho Superior em certas matérias) são órgãos de execução. A Administração Superior compõe-se da PGJ, Colégio de Procuradores, Conselho Superior e Corregedoria-Geral."
    },
    {
        topic: "Garantias e Vedações dos Membros do MP",
        supportText: "",
        q: "Aos membros do Ministério Público é constitucionalmente e legalmente vedado:",
        options: [
            "exercer o magistério público ou privado, ainda que haja compatibilidade de horários.",
            "exercer a advocacia e receber, a qualquer título e sob qualquer pretexto, honorários, percentagens ou custas processuais.",
            "instaurar inquérito civil e promover a ação civil pública.",
            "requisitar diligências investigatórias e a instauração de inquérito policial.",
            "gozar de inamovibilidade, salvo por motivo de interesse público."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 128, § 5º, II da CF/88 e da Lei Orgânica do MP, é vedado aos membros do MP receber honorários, percentagens ou custas processuais, bem como exercer a advocacia."
    },
    {
        topic: "Conselho Superior do Ministério Público",
        type: "vf",
        supportText: "",
        q: "Compete ao Conselho Superior do Ministério Público rever o arquivamento de inquérito civil ou de peças de informação, na forma da lei.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A homologação ou rejeição da promoção de arquivamento de inquérito civil é atribuição típica do Conselho Superior do Ministério Público (art. 30 da Lei nº 8.625/1993)."
    },
    {
        topic: "Corregedoria-Geral do MP",
        type: "vf",
        supportText: "",
        q: "A Corregedoria-Geral do Ministério Público é o órgão orientador e fiscalizador das atividades funcionais e da conduta dos membros do Ministério Público, sendo o Corregedor-Geral eleito pelo Colégio de Procuradores de Justiça dentre os Procuradores de Justiça.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O Corregedor-Geral é eleito pelo Colégio de Procuradores de Justiça dentre os integrantes da segunda instância (Procuradores de Justiça) para mandato de dois anos."
    }
];

const banco_const = [
    {
        topic: "Direitos e Garantias Fundamentais (Art. 5º da CF/88)",
        supportText: "",
        q: "Acerca dos direitos e deveres individuais e coletivos previstos no artigo 5º da Constituição Federal de 1988, assinale a alternativa correta:",
        options: [
            "A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante a noite, por determinação judicial.",
            "É plena a liberdade de associação para fins lícitos, inclusive a de caráter paramilitar.",
            "As associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, no primeiro caso (dissolução compulsória), o trânsito em julgado.",
            "A prática do racismo constitui crime afiançável e imprescritível, sujeito à pena de detenção.",
            "Conceder-se-á habeas data sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 5º, XIX da CF/88, a suspensão de atividades de associação exige decisão judicial, mas a dissolução compulsória exige decisão judicial transitada em julgado. (Mandado judicial domiciliar só durante o dia; racismo é inafiançável e sujeito a reclusão)."
    },
    {
        topic: "Administração Pública Constitucional (Art. 37 da CF/88)",
        supportText: "",
        q: "Segundo as disposições constitucionais sobre a Administração Pública (art. 37 da CF/88), é correto afirmar que:",
        options: [
            "o prazo de validade do concurso público será de até quatro anos, prorrogável uma vez, por igual período.",
            "os cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento, devendo ser preenchidos por servidores de carreira nos casos, condições e percentuais mínimos previstos em lei.",
            "é permitida a acumulação remunerada de três cargos públicos de professor, desde que haja compatibilidade de horários.",
            "a proibição de acumular cargos estende-se apenas à administração direta, não alcançando as sociedades de economia mista e empresas públicas.",
            "as funções de confiança podem ser exercidas por pessoas estranhas ao quadro efetivo da Administração."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 37, V da CF/88, as funções de confiança são exclusivas de servidores ocupantes de cargo efetivo, e os cargos em comissão (livre nomeação e exoneração) devem observar percentuais mínimos para servidores de carreira, destinando-se apenas à direção, chefia e assessoramento."
    },
    {
        topic: "Poder Judiciário e Conselho Nacional de Justiça (CNJ)",
        supportText: "",
        q: "A respeito do Conselho Nacional de Justiça (CNJ), nos termos do art. 103-B da Constituição Federal, assinale a alternativa correta:",
        options: [
            "O CNJ exerce jurisdição em todo o território nacional e pode reformar sentenças judiciais de mérito proferidas por juízes estaduais.",
            "Compete ao CNJ o controle da atuação administrativa e financeira do Poder Judiciário e do cumprimento dos deveres funcionais dos juízes.",
            "O CNJ é presidido pelo Ministro mais antigo do Superior Tribunal de Justiça (STJ).",
            "Junto ao CNJ oficiará apenas o Advogado-Geral da União, sem participação do Procurador-Geral da República.",
            "O CNJ pode determinar a perda do cargo de magistrado vitalício independentemente de sentença judicial transitada em julgado."
        ],
        answer: 1,
        disclaimer: "O CNJ é órgão do Poder Judiciário com atuação estritamente administrativa, financeira e disciplinar (art. 103-B, § 4º da CF/88), não possuindo competência jurisdicional. É presidido pelo Presidente do STF."
    },
    {
        topic: "Tratados Internacionais de Direitos Humanos",
        type: "vf",
        supportText: "",
        q: "Os tratados e convenções internacionais sobre direitos humanos que forem aprovados, em cada Casa do Congresso Nacional, em dois turnos, por três quintos dos votos dos respectivos membros, serão equivalentes às emendas constitucionais.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. É a literalidade do art. 5º, § 3º da CF/88 (incluído pela EC nº 45/2004). Caso não passem por esse rito qualificado, possuem status supralegal (STF)."
    },
    {
        topic: "Defensoria Pública na Constituição",
        type: "vf",
        supportText: "",
        q: "Às Defensorias Públicas Estaduais e da União são asseguradas autonomia funcional e administrativa e a iniciativa de sua proposta orçamentária dentro dos limites estabelecidos na lei de diretrizes orçamentárias.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O art. 134, §§ 2º e 3º da CF/88 assegura expressamente a autonomia funcional, administrativa e a iniciativa orçamentária às Defensorias Públicas."
    },
    {
        topic: "Poder Judiciário e Funções Essenciais à Justiça",
        type: "vf",
        supportText: "",
        q: "São princípios institucionais do Ministério Público a pluralidade, a diversidade e a independência funcional.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Os princípios institucionais do Ministério Público (art. 127, § 1º, da CF) são a unidade, a indivisibilidade e a independência funcional."
    },
    {
        topic: "Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "O Supremo Tribunal Federal (STF) e os demais tribunais superiores têm jurisdição apenas na capital federal.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O STF e os tribunais superiores têm sede na capital federal, mas a sua jurisdição abrange todo o território nacional (art. 92, § 1º, da CF)."
    },
    {
        topic: "Servidores Públicos",
        type: "vf",
        supportText: "",
        q: "O servidor que possa ser submetido à readaptação não tem direito subjetivo à aposentadoria por incapacidade.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Conforme o art. 37, § 13, da CF, o servidor será mantido neste cargo até que seja julgado apto para a readaptação, sendo a aposentadoria por incapacidade permanente a última rácio."
    },
    {
        topic: "Competências do Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "Compete ao Supremo Tribunal Federal (STF) julgar os mandados de segurança impetrados contra ato de ministro de Estado.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O julgamento de mandado de segurança contra ato de Ministro de Estado é competência originária do Superior Tribunal de Justiça (STJ), conforme o art. 105, I, 'b', da CF."
    },
    {
        topic: "Competências do Poder Judiciário",
        type: "vf",
        supportText: "",
        q: "Compete aos tribunais regionais federais julgar, em grau de recurso, as causas decididas pelos juízes estaduais no exercício da competência federal da área de sua jurisdição.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É a literalidade do art. 108, II, da CF/88."
    },
    {
        topic: "Direitos Políticos",
        type: "vf",
        supportText: "",
        q: "É possível, de acordo com o texto constitucional, que um cidadão preencha as condições de elegibilidade para ser vereador, mas não as condições de elegibilidade para ser deputado federal.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A idade mínima para vereador é de 18 anos, enquanto para deputado federal é de 21 anos (art. 14, § 3º, VI, da CF)."
    },
    {
        topic: "Direitos e Garantias Fundamentais",
        type: "vf",
        supportText: "",
        q: "A CF admite a pena de morte em caso de guerra declarada.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos do art. 5º, XLVII, 'a', da Constituição Federal, não haverá penas de morte, salvo em caso de guerra declarada."
    },
    {
        topic: "Nacionalidade e Direitos Políticos",
        type: "vf",
        supportText: "",
        q: "A CF trata de forma igual os brasileiros natos e naturalizados.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O art. 5º, § 2º, veda distinções entre brasileiros natos e naturalizados, mas estabelece exceções expressas na própria Constituição (ex: cargos privativos, extradição)."
    }
];

const banco_adm = [
    {
        topic: "Atos Administrativos (Atributos e Extinção)",
        type: "multipla",
        supportText: "",
        q: "Quando a Administração Pública retira do mundo jurídico um ato administrativo válido e legítimo por motivos de conveniência e oportunidade, respeitando os direitos adquiridos e produzindo efeitos prospectivos (ex nunc), ocorre a:",
        options: [
            "Anulação.",
            "Revogação.",
            "Cassação.",
            "Caducidade.",
            "Convalidação."
        ],
        answer: 1,
        disclaimer: "A revogação recai sobre atos válidos e discricionários que se tornaram inconvenientes ou inoportunos (efeitos ex nunc). A anulação recai sobre atos ilegais (efeitos ex tunc)."
    },
    {
        topic: "Nova Lei de Licitações (Lei nº 14.133/2021)",
        type: "multipla",
        supportText: "",
        q: "De acordo com a Lei nº 14.133/2021 (Nova Lei de Licitações e Contratos Administrativos), são modalidades de licitação previstas na referida norma, EXCETO:",
        options: [
            "Pregão.",
            "Concorrência.",
            "Diálogo Competitivo.",
            "Tomada de Preços.",
            "Leilão."
        ],
        answer: 3,
        disclaimer: "A Lei nº 14.133/2021 extinguiu as modalidades Tomada de Preços e Convite (bem como o RDC), mantendo 5 modalidades: Pregão, Concorrência, Concurso, Leilão e a novidade Diálogo Competitivo (art. 28)."
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992 atualizada)",
        type: "multipla",
        supportText: "",
        q: "Com base na Lei de Improbidade Administrativa (Lei nº 8.429/1992, com a redação dada pela Lei nº 14.230/2021), assinale a alternativa correta:",
        options: [
            "Os atos de improbidade administrativa que causam prejuízo ao erário admitem a modalidade culposa em casos de imprudência grave.",
            "Configura-se o ato de improbidade administrativa exclusivamente mediante a comprovação de conduta dolosa com fim de obter proveito ou benefício indevido, não mais existindo a modalidade culposa.",
            "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, basta para configurar responsabilidade objetiva por improbidade.",
            "As sanções de improbidade prescrevem em 20 anos a contar da posse do agente público.",
            "A ação de improbidade administrativa comporta transação, exceto por meio de acordo de não persecução cível."
        ],
        answer: 1,
        disclaimer: "A reforma promovida pela Lei nº 14.230/2021 extinguiu a modalidade culposa em todas as espécies de atos de improbidade administrativa (arts. 9º, 10 e 11), exigindo sempre o dolo específico."
    },
    {
        topic: "Responsabilidade Civil do Estado",
        type: "vf",
        supportText: "",
        q: "Nos termos do art. 37, § 6º da Constituição Federal, as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos responderão pelos danos que seus agentes, nessa qualidade, causarem a terceiros, assegurado o direito de regresso contra o responsável nos casos de dolo ou culpa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. O Estado e as prestadoras de serviços públicos respondem objetivamente (Teoria do Risco Administrativo) perante terceiros, cabendo ação regressiva subjetiva (mediante dolo ou culpa) contra o agente causador."
    },
    {
        topic: "Poderes da Administração Pública",
        type: "vf",
        supportText: "",
        q: "O Poder de Polícia administrativo possui como atributos a discricionariedade, a autoexecutoriedade e a coercibilidade, sendo que a autoexecutoriedade está presente em absolutamente todos os atos de polícia, inclusive na cobrança forçada de multas não pagas sem necessidade de execução fiscal.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Embora a autoexecutoriedade seja atributo do poder de polícia, ela não está presente em todos os atos: a cobrança coativa de multas administrativas não pagas exige intervenção do Poder Judiciário (execução fiscal)."
    },
    {
        topic: "Poderes da Administração Pública",
        type: "multipla",
        supportText: "",
        q: "O Município Beta editou ato normativo da espécie 'resolução' visando ordenar, reorganizar e coordenar o bom funcionamento dos serviços prestados pelos servidores de determinado órgão público. À luz do direito administrativo, é correto afirmar que o ato deriva do poder",
        options: [
            "hierárquico.",
            "regulamentar.",
            "normativo.",
            "disciplinar.",
            "discricionário."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). A organização e coordenação interna do funcionamento dos serviços públicos decorrem do poder hierárquico."
    },
    {
        topic: "Atos Administrativos",
        type: "vf",
        supportText: "",
        q: "O motivo do ato administrativo discricionário está sujeito a controle jurisdicional.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O Poder Judiciário pode analisar a legalidade e a veracidade dos motivos declarados pela administração (Teoria dos Motivos Determinantes)."
    },
    {
        topic: "Improbidade Administrativa",
        type: "multipla",
        supportText: "",
        q: "Acerca da Lei de Improbidade Administrativa (Lei nº 8.429/1992), assinale a alternativa correta.",
        options: [
            "O mero exercício da função ou desempenho de competências públicas, sem comprovação de ato doloso com fim ilícito, não é capaz de afastar a responsabilidade por ato de improbidade administrativa.",
            "Por possuir um regramento próprio, a lei de improbidade administrativa não garante a aplicação dos princípios constitucionais do direito administrativo sancionador.",
            "Consideram-se atos de improbidade administrativa as condutas dolosas ou culposas tipificadas nos arts. 9º, 10 e 11 da lei de improbidade administrativa, ressalvados os tipos previstos em leis especiais.",
            "A responsabilidade sucessória prevista na lei de improbidade administrativa não é cabível quando decorrer de sucessão provocada por meio de fusão ou cisão societária.",
            "As disposições da lei de improbidade administrativa são aplicáveis, no que couber, àquele que, mesmo não sendo agente público, induzir ou concorrer dolosamente para a prática do ato de improbidade."
        ],
        answer: 4,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). As disposições da LIA são aplicáveis a quem, mesmo não sendo agente público, induza ou concorra dolosamente para a prática do ato (art. 3º)."
    },
    {
        topic: "Processo Administrativo",
        type: "vf",
        supportText: "",
        q: "O princípio da gratuidade do processo administrativo proíbe a cobrança de despesas processuais, ressalvadas as previstas em lei.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos da Lei nº 9.784/1999 (art. 2º, parágrafo único, XI), é proibida a cobrança de despesas processuais, ressalvadas as previstas em lei."
    },
    {
        topic: "Organização da Administração Pública",
        type: "vf",
        supportText: "",
        q: "Sob o aspecto subjetivo da administração pública estatal, o MPCE, como instituição permanente essencial à função jurisdicional do Estado, integra a administração indireta.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O Ministério Público é um órgão independente (desprovido de personalidade jurídica própria), não integrando nem a administração direta submetida ao Executivo nem a indireta."
    },
    {
        topic: "Atos Administrativos",
        type: "vf",
        supportText: "",
        q: "O ato administrativo por meio do qual os órgãos consultivos da administração emitem opinião sobre assuntos técnicos de sua competência denomina-se parecer.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O parecer é, de facto, o ato enunciativo pelo qual os órgãos consultivos se pronunciam tecnicamente."
    },
    {
        topic: "Licitações (Lei nº 14.133/2021)",
        type: "vf",
        supportText: "",
        q: "Leilão é a modalidade de licitação para a alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance, podendo ser executado por leiloeiro oficial ou por servidor designado pela autoridade competente da administração.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Trata-se da definição legal da modalidade Leilão prevista no art. 6º, XL, e art. 31, § 1º, da Nova Lei de Licitações (Lei 14.133/2021)."
    },
    {
        topic: "Licitações e Contratos",
        type: "vf",
        supportText: "",
        q: "A autoridade competente para homologar o pregão não poderá revogá-lo por razões de interesse público, por motivo de fato superveniente devidamente comprovado.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A administração tem o poder-dever de revogar a licitação (em qualquer modalidade) por razões de interesse público decorrentes de facto superveniente (art. 71, II, da Lei 14.133/2021)."
    },
    {
        topic: "Poderes Administrativos",
        type: "vf",
        supportText: "",
        q: "O poder hierárquico permite, em caráter excepcional e por motivos relevantes devidamente justificados, a avocação por tempo indeterminado de competência atribuída a órgão hierarquicamente inferior.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A avocação, embora permitida excecionalmente, deve ser sempre TEMPORÁRIA, e nunca por tempo indeterminado (art. 15 da Lei 9.784/1999)."
    },
    {
        topic: "Improbidade Administrativa",
        type: "vf",
        supportText: "",
        q: "Quem induz a prática de ato de improbidade somente poderá ser responsabilizado pela ocorrência do ilícito se for agente público.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O particular (terceiro) que induz ou concorre dolosamente para a prática do ato também responde pela improbidade, conforme o art. 3º da Lei 8.429/1992."
    },
    {
        topic: "Responsabilidade Civil do Estado",
        type: "vf",
        supportText: "",
        q: "A responsabilidade civil das pessoas jurídicas de direito privado prestadoras de serviço público é objetiva em relação a terceiros usuários e não usuários do serviço prestado.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Este é o entendimento pacificado do STF (RE 591874), aplicando-se a responsabilidade objetiva também em relação a terceiros não utilizadores do serviço (ex: peão atropelado por autocarro de transporte público)."
    },
    {
        topic: "Lei de Acesso à Informação (Lei nº 12.527/2011)",
        supportText: "Um cidadão, com mais com 75 anos de idade, solicitou, perante determinado órgão público, informações sobre assunto de interesse público municipal.", //[cite: 22]
        q: "Considerando essa situação e com base na Lei de Acesso à Informação (Lei nº 12.527/2011), é correto afirmar que", //[cite: 22]
        options: [
            "para a obtenção da informação postulada pelo cidadão, vedam-se quaisquer exigências relativas aos motivos determinantes da solicitação, considerando se tratar de informações de interesse público.",
            "sem prejuízo da segurança e da proteção das informações e do cumprimento da legislação aplicável, é obrigatório ao órgão ou entidade oferecer meios para que o próprio requerente possa pesquisar a informação de que necessitar.",
            "em razão da idade do requerente, a Lei de Acesso à Informação lhe garante prioridade no atendimento de sua solicitação, devendo a informação ser prestada em no máximo cinco dias.",
            "no caso de indeferimento de acesso a informações ou às razões da negativa do acesso, poderá o cidadão interpor recurso contra a decisão no prazo de quinze dias a contar da sua ciência.",
            "não sendo possível conceder o acesso imediato à informação disponível, o órgão ou entidade que receber o pedido deverá, em prazo não superior a trinta dias, comunicar data, local e modo para se realizar a consulta, efetuar a reprodução ou obter a certidão."
        ],
        answer: 0,
        disclaimer: "Conforme o art. 10, § 3º, da LAI: 'São vedadas quaisquer exigências relativas aos motivos determinantes da solicitação de informações de interesse público'." //[cite: 22]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf", // Mantemos o type: "vf" apenas nestas porque o seu código original precisa dele para as opções de "Certo" e "Errado".
        supportText: "",
        q: "O agente público que recebe vantagem econômica para tolerar a prática de contrabando comete ato de improbidade administrativa que causa prejuízo ao erário.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Receber vantagem econômica indevida caracteriza ato de improbidade que importa Enriquecimento Ilícito (art. 9º, I, da LIA), e não dano ao erário (art. 10)." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "Para a configuração de ato de improbidade administrativa que atenta contra os princípios da administração pública, é indispensável que o agente tenha a finalidade de obtenção de proveito indevido para si ou para outrem.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Após a reforma da Lei 14.230/2021, o caput do art. 11 passou a exigir expressamente o dolo com 'o fim de obter proveito ou benefício indevido para si ou para outra pessoa ou entidade'." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "A responsabilidade do sucessor daquele que se enriqueceu ilicitamente está limitada à reparação do valor do patrimônio transferido.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "É a literalidade do art. 8º da LIA: o sucessor ou herdeiro sujeita-se à obrigação de repará-lo até o limite do valor da herança ou do patrimônio transferido." //[cite: 25]
    },
    {
        topic: "Improbidade Administrativa (Lei nº 8.429/1992)",
        type: "vf",
        supportText: "",
        q: "A ação negligente do agente público que resultar em lesão patrimonial ao erário é suficiente para a caracterização da improbidade administrativa.", //[cite: 25]
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Com as alterações da Lei nº 14.230/2021, foi extinta a modalidade culposa de improbidade. Exige-se sempre o dolo (vontade livre e consciente de alcançar o resultado ilícito)." //[cite: 25]
    }
];

const banco_civil = [
    {
        topic: "Lei de Introdução às Normas do Direito Brasileiro (LINDB)",
        type: "multipla",
        supportText: "",
        q: "De acordo com o Decreto-Lei nº 4.657/1942 (LINDB), salvo disposição contrária, a lei começa a vigorar em todo o país:",
        options: [
            "na data exata de sua publicação no Diário Oficial.",
            "trinta dias depois de oficialmente publicada.",
            "quarenta e cinco dias depois de oficialmente publicada.",
            "sessenta dias depois de sancionada pelo Chefe do Executivo.",
            "noventa dias após a promulgação legislativa."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 1º da LINDB, salvo disposição contrária expressa na própria lei, a vacatio legis padrão no território nacional é de 45 (quarenta e cinco) dias após a publicação oficial (e de 3 meses nos Estados estrangeiros quando admitida)."
    },
    {
        topic: "Parte Geral do Código Civil (Defeitos do Negócio Jurídico)",
        type: "multipla",
        supportText: "",
        q: "Segundo o Código Civil (Lei nº 10.406/2002), quando uma pessoa, sob premente necessidade, ou por inexperiência, se obriga a prestação manifestamente desproporcional ao valor da prestação oposta, configura-se o defeito do negócio jurídico denominado:",
        options: [
            "Simulação.",
            "Lesão.",
            "Estado de Perigo.",
            "Fraude contra Credores.",
            "Coação Moral."
        ],
        answer: 1,
        disclaimer: "Nos termos do art. 157 do Código Civil, ocorre a Lesão quando uma pessoa, sob premente necessidade ou por inexperiência, assume obrigação manifestamente desproporcional. É causa de anulabilidade do negócio jurídico."
    },
    {
        topic: "Prescrição e Decadência",
        type: "multipla",
        supportText: "",
        q: "A respeito dos institutos da prescrição e da decadência no Código Civil Brasileiro, assinale a alternativa correta:",
        options: [
            "Os prazos prescricionais podem ser livremente alterados por acordo entre as partes contratantes.",
            "A prescrição, quando consumada, extingue a pretensão, e o seu prazo geral ordinário é de 10 (dez) anos quando a lei não lhe haja fixado prazo menor.",
            "A decadência convencional pode ser conhecida de ofício pelo juiz em qualquer grau de jurisdição.",
            "Correm normalmente os prazos de prescrição entre ascendentes e descendentes durante o poder familiar.",
            "A pretensão de reparação civil prescreve em 5 (cinco) anos, conforme o Código Civil."
        ],
        answer: 1,
        disclaimer: "Pelo art. 189 do CC, violado o direito, nasce para o titular a pretensão, a qual se extingue pela prescrição. O prazo geral (art. 205) é de 10 anos, e o de reparação civil no CC (art. 206, § 3º, V) é de 3 anos."
    },
    {
        topic: "Responsabilidade Civil",
        type: "vf",
        supportText: "",
        q: "Haverá obrigação de reparar o dano, independentemente de culpa, nos casos especificados em lei, ou quando a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Trata-se da cláusula geral de responsabilidade civil objetiva pelo risco da atividade, expressamente consagrada no art. 927, parágrafo único, do Código Civil."
    },
    {
        topic: "Impenhorabilidade do Bem de Família (Lei nº 8.009/1990)",
        type: "vf",
        supportText: "",
        q: "Segundo entendimento sumulado do Superior Tribunal de Justiça (STJ), o imóvel residencial do devedor que esteja locado a terceiros perde a proteção da impenhorabilidade do bem de família, ainda que a renda obtida com a locação seja revertida para a subsistência ou moradia de sua família.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Pela Súmula 486 do STJ, 'É impenhorável o único imóvel residencial do devedor que esteja locado a terceiros, desde que a renda obtida com a locação seja revertida para a subsistência ou a moradia da sua família'."
    },
    {
        topic: "Bens Públicos e Privados",
        type: "multipla",
        supportText: "",
        q: "Quanto aos bens, na forma disciplinada pelo Código Civil, é correto afirmar que",
        options: [
            "perdem o caráter de imóveis os materiais provisoriamente separados de um prédio, ainda que para nele se reempregar.",
            "o uso comum do bem público não pode ser objeto de retribuição, devendo ser assegurado o uso gratuito.",
            "consideram-se bens imóveis o solo e tudo quanto se lhe incorporar, desde que a incorporação seja por ato voluntário.",
            "é permitida a alienação de bens públicos dominicais, observadas as exigências da lei.",
            "as benfeitorias úteis são as que têm por finalidade conservar o bem ou evitar que se deteriore."
        ],
        answer: 3,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Segundo o art. 101 do CC, os bens públicos dominicais podem ser alienados, observadas as exigências da lei. As benfeitorias que evitam deterioração são necessárias, não úteis."
    },
    {
        topic: "Defeitos do Negócio Jurídico e Invalidade",
        type: "multipla",
        supportText: "",
        q: "Assinale a alternativa correta a respeito dos defeitos dos negócios jurídicos, na forma das disposições do Código Civil.",
        options: [
            "Quando a lei dispuser que determinado ato é anulável, sem estabelecer prazo para pleitear a anulação, este será de dois anos, contados da data do conhecimento do motivo que ensejou o pedido de anulação.",
            "A invalidade do instrumento induz a invalidade do negócio jurídico, ainda que este pudesse provar-se por outro modo.",
            "O falso motivo só vicia a declaração de vontade quando expresso como razão determinante.",
            "O negócio jurídico nulo não é suscetível de confirmação, mas poderá se convalescer pelo decurso do tempo.",
            "É nulo o negócio jurídico celebrado mediante fraude contra credores."
        ],
        answer: 2,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). O art. 140 do CC estabelece que o falso motivo só vicia a declaração de vontade quando expresso como razão determinante."
    },
    {
        topic: "Pessoas Naturais (Ausência)",
        type: "multipla",
        supportText: "",
        q: "Em relação às pessoas naturais, no que concerne à ausência, na forma disciplinada pelo Código Civil, assinale a alternativa correta.",
        options: [
            "Decorridos dez anos da arrecadação dos bens do ausente, poderão os interessados requerer a abertura da sucessão definitiva.",
            "Na falta de cônjuge, a curadoria dos bens do ausente incumbe aos pais ou aos descendentes, sendo que, quanto aos descendentes, os mais velhos precedem os mais novos.",
            "A sentença que determinar a abertura da sucessão provisória produzirá efeitos noventa dias após publicação na imprensa.",
            "Os imóveis do ausente só se poderão alienar, não sendo por desapropriação, ou hipotecar, quando o ordene o juiz, para lhes evitar a ruína.",
            "A abertura da sucessão definitiva também pode ser requerida se comprovado que o ausente contava com setenta e cinco anos de idade e que já se passaram cinco anos desde as últimas notícias dele."
        ],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Conforme o art. 25 do CC, o cônjuge do ausente, sempre que não esteja separado de fato, será o seu legítimo curador; em sua falta, a curadoria incumbe aos pais ou descendentes."
    },
    {
        topic: "Prescrição",
        type: "multipla",
        supportText: "",
        q: "De acordo com o Código Civil, assinale a alternativa que apresenta uma pretensão, cuja prescrição ocorre no prazo de 3 (três) anos.",
        options: [
            "A pretensão para receber prestações vencidas de rendas temporárias ou vitalícias.",
            "A pretensão do segurado contra o segurador, ou a deste contra aquele.",
            "A pretensão relativa à tutela, a contar da data da aprovação das contas.",
            "A pretensão do vencedor para haver do vencido o que despendeu em juízo.",
            "A pretensão dos tabeliães dos árbitros e peritos pela percepção dos honorários."
        ],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPRS 2025 (AOCP). Nos termos do art. 206, § 3º, II, do CC, prescreve em 3 anos a pretensão para receber prestações vencidas de rendas temporárias ou vitalícias."
    },
    {
        topic: "Capacidade e Curatela (Estatuto da Pessoa com Deficiência)",
        type: "vf",
        supportText: "",
        q: "Ao ser submetida à curatela, a pessoa com deficiência adulta apenas poderá ser considerada relativamente capaz, não mais se admitindo o reconhecimento da sua incapacidade absoluta.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Com o Estatuto da Pessoa com Deficiência, os absolutamente incapazes são apenas os menores de 16 anos. A curatela afeta apenas atos de natureza patrimonial e negocial, tornando a pessoa, no máximo, relativamente incapaz."
    },
    {
        topic: "Direito de Família (Alimentos)",
        type: "vf",
        supportText: "",
        q: "A legitimidade ativa do Ministério Público para ajuizar ação de alimentos em proveito de criança ou adolescente exige a demonstração de que o menor esteja em situação de risco, como na hipótese de omissão dos pais ou responsável.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O STJ pacificou (Súmula 594) que o MP tem legitimidade ativa para ajuizar ação de alimentos em proveito de criança/adolescente independentemente da demonstração de situação de risco."
    },
    {
        topic: "Direito do Consumidor e Desconsideração da Personalidade Jurídica",
        type: "vf",
        supportText: "",
        q: "A teoria menor da desconsideração da personalidade jurídica pode ser aplicada quando a personalidade jurídica representar um obstáculo ao ressarcimento de prejuízos causados aos consumidores.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É o texto exato do art. 28, § 5º, do CDC, que consagra a Teoria Menor, bastando o mero obstáculo ao ressarcimento, sem exigir desvio de finalidade ou confusão patrimonial."
    },
    {
        topic: "Direito do Consumidor (Proteção ao Crédito)",
        type: "vf",
        supportText: "",
        q: "A notificação prévia do consumidor acerca do registro do seu nome no cadastro de proteção ao crédito deve ser realizada pessoalmente, fazendo-se necessária a comprovação do envio e da entrega da notificação.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A Súmula 404 do STJ define que é dispensável o Aviso de Recebimento (AR) na carta de comunicação ao consumidor sobre a negativação de seu nome, não sendo exigida notificação pessoal."
    }
];

const banco_proc_civil = [
    {
        topic: "Tutelas Provisórias (CPC/2015)",
        type: "multipla",
        supportText: "",
        q: "Nos termos do Código de Processo Civil (Lei nº 13.105/2015), a tutela provisória que independe da demonstração de perigo de dano ou de risco ao resultado útil do processo, sendo concedida, por exemplo, quando ficar caracterizado o abuso do direito de defesa ou o manifesto propósito protelatório da parte, denomina-se:",
        options: [
            "Tutela cautelar antecedente.",
            "Tutela antecipada antecedente.",
            "Tutela da evidência.",
            "Tutela inibitória de urgência.",
            "Arresto executivo."
        ],
        answer: 2,
        disclaimer: "Conforme o art. 311 do CPC, a tutela da evidência será concedida independentemente da demonstração de perigo de dano ou de risco ao resultado útil do processo."
    },
    {
        topic: "Prazos Processuais e Fazenda Pública / MP / Defensoria",
        type: "multipla",
        supportText: "",
        q: "Segundo o Código de Processo Civil de 2015, gozam de prazo em dobro para todas as suas manifestações processuais (salvo quando a lei estabelecer, de forma expressa, prazo próprio):",
        options: [
            "apenas a Fazenda Pública Federal.",
            "o Ministério Público, a Advocacia Pública e a Defensoria Pública.",
            "qualquer parte que litigue sob o pálio da gratuidade da justiça, mesmo representada por advogado particular.",
            "as empresas públicas e sociedades de economia mista que exploram atividade econômica.",
            "os litisconsortes com procuradores distintos em processos integralmente eletrônicos."
        ],
        answer: 1,
        disclaimer: "O CPC/2015 assegura a prerrogativa de prazo em dobro ao Ministério Público (art. 180), à Advocacia Pública (art. 183) e à Defensoria Pública (art. 186). O prazo em dobro para litisconsortes não se aplica aos processos em autos eletrônicos (art. 229, § 2º)."
    },
    {
        topic: "Recursos no Processo Civil",
        type: "multipla",
        supportText: "",
        q: "No sistema recursal do CPC/2015, excetuados os embargos de declaração (cujo prazo é de 5 dias úteis), o prazo unificado para interpor e para responder aos recursos cíveis (como Apelação, Agravo de Instrumento, Recurso Especial e Recurso Extraordinário) é de:",
        options: [
            "8 (oito) dias corridos.",
            "10 (dez) dias úteis.",
            "15 (quinze) dias úteis.",
            "15 (quinze) dias corridos.",
            "30 (trinta) dias úteis."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 1.003, § 5º c/c art. 219 do CPC/2015, excetuados os embargos de declaração (5 dias), o prazo para interpor os recursos e para responder-lhes é de 15 (quinze) dias úteis."
    },
    {
        topic: "Estabilização da Tutela Antecipada Antecedente",
        type: "vf",
        supportText: "",
        q: "A tutela antecipada concedida em caráter antecedente torna-se estável se da decisão que a conceder não for interposto o respectivo recurso (agravo de instrumento), extinguindo-se o processo sem que essa estabilidade produza coisa julgada material.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Conforme o art. 304, caput e § 6º do CPC, a ausência de recurso contra a tutela antecipada antecedente gera sua estabilização, mas a decisão que concede a tutela não fará coisa julgada, podendo qualquer das partes demandar a revisão no prazo decadencial de 2 anos."
    },
    {
        topic: "Remessa Necessária",
        type: "vf",
        supportText: "",
        q: "Está sujeita ao duplo grau de jurisdição obrigatório (remessa necessária) toda e qualquer sentença proferida contra o Estado da Paraíba, ainda que a condenação seja de valor certo e líquido equivalente a 10 (dez) salários-mínimos.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Errado. Pelo art. 496, § 3º, II do CPC, não se aplica a remessa necessária quando a condenação ou o proveito econômico obtido na causa for de valor certo e líquido inferior a 500 salários-mínimos para os Estados."
    },
    {
        topic: "Ação Civil Pública e Inquérito Civil",
        type: "vf",
        supportText: "",
        q: "O inquérito civil é pressuposto para a propositura da ação civil pública, mas a sua falta pode ser suprida por documentos expedidos por organismo público, tais como certidões, informações, exames ou perícias ou outro documento que confirme a lesão aos direitos protegidos por esse tipo de ação.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O inquérito civil é um procedimento administrativo FACULTATIVO. Se o MP já possuir elementos suficientes (justa causa), pode dispensá-lo e ajuizar a ação civil pública diretamente."
    },
    {
        topic: "Atuação do Ministério Público e Recursos",
        type: "vf",
        supportText: "",
        q: "Considere que, em determinada ação, o juiz tenha julgado procedente o pedido de divórcio e partilha de bens, mas improcedente o pedido de guarda formulado pela requerente, não tendo esta recorrido da decisão. Nesse caso, o Ministério Público tem legitimidade para interpor recurso de apelação contra a sentença proferida.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Como o feito envolve interesse de incapazes (guarda), o MP atua como fiscal da ordem jurídica (custos legis) e possui legitimidade para recorrer, independentemente das partes (art. 179, II, e art. 996 do CPC)."
    },
    {
        topic: "Impedimento e Suspeição",
        type: "vf",
        supportText: "",
        q: "Os motivos que provocam o impedimento e a suspeição dos juízes são os mesmos que provocam o impedimento e a suspeição dos promotores de justiça e advogados das partes.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O CPC aplica os motivos de impedimento e suspeição do juiz aos membros do MP e aos auxiliares da justiça, mas NÃO se aplicam aos advogados das partes (que representam interesses parciais)."
    },
    {
        topic: "Poderes e Deveres do Juiz (Prazos Processuais)",
        type: "vf",
        supportText: "Em uma ação ordinária proposta por pais contra o município buscando assegurar matrícula e frequência escolar adequada de crianças com deficiência na rede pública municipal, o juiz identificou a necessidade de reorganizar a ordem de produção das provas para melhor compreensão dos fatos controvertidos.",
        q: "O juiz poderá dilatar prazos processuais mesmo após o encerramento do prazo regular, se entender que tal medida é necessária para conferir maior efetividade à tutela jurisdicional.",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O art. 139, parágrafo único, do CPC, determina que a dilação de prazos somente pode ser determinada ANTES de encerrado o prazo regular."
    },
    {
        topic: "Intervenção de Terceiros e Recursos",
        type: "vf",
        supportText: "Em uma ação judicial proposta por Júlia contra uma clínica médica, pleiteando indenização por danos materiais e morais, o juiz proferiu sentença condenando a clínica apenas ao pagamento de indenização por danos morais. [...] João, funcionário da clínica que não participou diretamente do processo, mas que teve sua conduta profissional mencionada desfavoravelmente na sentença, pretende desta recorrer na condição de terceiro prejudicado.",
        q: "João poderá interpor recurso contra a sentença, desde que demonstre objetivamente que a decisão judicial afeta diretamente direito seu ou interesse jurídico legítimo.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É a regra do terceiro prejudicado prevista no art. 996, parágrafo único, do CPC, que exige a demonstração do nexo de interdependência entre o seu interesse e a relação jurídica submetida à apreciação judicial."
    },
    {
        topic: "Recursos (Desistência)",
        type: "vf",
        supportText: "Em uma ação judicial proposta por Júlia contra uma clínica médica, pleiteando indenização por danos materiais e morais, o juiz proferiu sentença condenando a clínica apenas ao pagamento de indenização por danos morais.",
        q: "A clínica médica, caso decida interpor recurso, poderá desistir dele posteriormente, sem necessidade de anuência da parte contrária ou de eventuais litisconsortes.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Conforme expressa o art. 998 do CPC: 'O recorrente poderá, a qualquer tempo, sem a anuência do recorrido ou dos litisconsortes, desistir do recurso'."
    }
];

const banco_penal = [
    {
        topic: "Aplicação da Lei Penal no Tempo",
        supportText: "",
        q: "A respeito da eficácia da lei penal no tempo, nos termos do art. 2º e 3º do Código Penal, assinale a alternativa correta:",
        options: [
            "A lei penal mais grave aplica-se aos fatos anteriores à sua vigência se ainda não houver sentença transitada em julgado.",
            "A lei posterior, que de qualquer modo favorecer o agente, aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.",
            "A lei excepcional ou temporária perde completamente sua eficácia sobre os fatos praticados durante sua vigência assim que se encerra o período de sua duração.",
            "No crime permanente, aplica-se sempre a lei vigente no momento do início da execução, mesmo que sobrevenha lei mais grave antes da cessação da permanência.",
            "A abolitio criminis faz cessar a execução da pena, mas mantém intactos todos os efeitos penais secundários da condenação."
        ],
        answer: 1,
        disclaimer: "Pelo art. 2º, parágrafo único do Código Penal, a novatio legis in mellius retroage para beneficiar o réu, alcançando inclusive fatos já cobertos pelo trânsito em julgado. Já na Súmula 711 do STF, a lei mais grave aplica-se ao crime continuado ou permanente se sua vigência é anterior à cessação."
    },
    {
        topic: "Crimes contra a Administração Pública",
        supportText: "",
        q: "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, pratica o crime de:",
        options: [
            "Corrupção passiva (art. 317 do CP).",
            "Peculato-desvio (art. 312 do CP).",
            "Concussão (art. 316 do CP).",
            "Prevaricação (art. 319 do CP).",
            "Excesso de exação (art. 316, § 1º do CP)."
        ],
        answer: 2,
        disclaimer: "O núcleo verbal 'exigir' vantagem indevida em razão da função caracteriza o delito de Concussão (art. 316 do CP). Na corrupção passiva (art. 317), os verbos são 'solicitar ou receber', ou 'aceitar promessa'."
    },
    {
        topic: "Teoria do Crime (Excludentes de Ilicitude)",
        supportText: "",
        q: "Segundo o artigo 23 do Código Penal, são causas excludentes de ilicitude (antijuridicidade), EXCETO:",
        options: [
            "Estado de necessidade.",
            "Legítima defesa.",
            "Estrito cumprimento de dever legal.",
            "Exercício regular de direito.",
            "Coação moral irresistível."
        ],
        answer: 4,
        disclaimer: "A coação moral irresistível (junto com a obediência hierárquica, art. 22 do CP) é causa excludente da CULPABILIDADE (por inexigibilidade de conduta diversa), e não da ilicitude."
    },
    {
        topic: "Desistência Voluntária e Arrependimento Eficaz",
        type: "vf",
        supportText: "",
        q: "Nos termos do art. 15 do Código Penal (ponte de ouro), o agente que, voluntariamente, desiste de prosseguir na execução ou impede que o resultado se produza, só responde pelos atos já praticados, afastando-se a punição pela tentativa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Na desistência voluntária e no arrependimento eficaz (art. 15 do CP), exclui-se a tipicidade da tentativa do crime inicialmente visado, respondendo o agente apenas pelos atos efetivamente praticados."
    },
    {
        topic: "Princípio da Insignificância em Crimes contra a Administração",
        type: "vf",
        supportText: "",
        q: "Segundo a Súmula 599 do Superior Tribunal de Justiça, o princípio da insignificância é inaplicável aos crimes contra a Administração Pública, pois a norma visa resguardar também a moralidade administrativa.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. A Súmula 599 do STJ dispõe expressamente: 'O princípio da insignificância é inaplicável aos crimes contra a administração pública'."
    },
    {
        topic: "Aplicação da Lei Penal",
        type: "vf",
        supportText: "",
        q: "A lei penal posterior mais benéfica retroagirá, respeitando-se, porém, a coisa julgada, definida pelo trânsito em julgado de sentença penal condenatória.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A lei penal mais benigna (novatio legis in mellius) retroage inclusivamente aos casos já transitados em julgado, desconstituindo a coisa julgada neste aspeto (art. 2º, parágrafo único, do CP e Súmula 611 do STF).[cite: 29]"
    },
    {
        topic: "Princípios do Direito Penal",
        type: "vf",
        supportText: "",
        q: "A vedação da analogia no direito penal decorre do próprio princípio da legalidade, pois não se admite outra fonte que não a lei para o que é prescrito como crime e pena.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Em estrito cumprimento ao princípio da legalidade, é vedada a criação de crimes ou agravamento de penas por analogia (analogia in malam partem).[cite: 29]"
    },
    {
        topic: "Princípios do Direito Penal",
        type: "vf",
        supportText: "",
        q: "A teoria dos poderes implícitos excepciona o princípio da legalidade estrita, pois, como a lei permite ao juiz aplicar pena mais severa, entende-se, por extensão, que é aplicável pena mais branda, ainda que esta não venha positivada na legislação penal de modo expresso.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O princípio da legalidade estrita no Direito Penal não comporta a criação de penas (mesmo que mais brandas) por via da teoria dos poderes implícitos, carecendo de previsão legal expressa.[cite: 29]"
    },
    {
        topic: "Crimes contra a Administração Pública",
        type: "vf",
        supportText: "",
        q: "O uso indevido de bem público por servidor que lhe detenha posse legítima é suficiente para a consumação do crime de peculato na modalidade apropriação, o que difere da apropriação indébita, crime patrimonial comum para cuja configuração é exigido o dolo de integração do bem como parte de seu patrimônio.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O mero uso indevido de bem público (peculato de uso) não configura crime penal (exceto para Prefeitos), carecendo do dolo específico de apropriação definitiva do bem (animus rem sibi habendi).[cite: 29]"
    },
    {
        topic: "Crimes contra o Património",
        type: "vf",
        supportText: "",
        q: "Configura furto mediante fraude a ação do agente que se passe por mecânico para ludibriar a vítima e, após receber o carro, dele se aproprie.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A entrega voluntária da coisa pela vítima ludibriada caracteriza estelionato (art. 171, CP), e não furto mediante fraude, no qual a fraude serve apenas para diminuir a vigilância sobre a coisa subtraída.[cite: 29]"
    },
    {
        topic: "Crimes contra o Património e Consunção",
        type: "vf",
        supportText: "",
        q: "O dano a determinado patrimônio, quando praticado exclusivamente para o furto de outro bem, pode ser integrado ao crime de furto na forma de qualificadora, sendo imprópria a imputação de crime de dano em concurso com o de furto.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O crime-meio (dano) é absorvido pelo crime-fim (furto), qualificando o furto pelo rompimento de obstáculo à subtração da coisa (princípio da consunção).[cite: 29]"
    },
    {
        topic: "Crimes contra a Dignidade Sexual",
        type: "vf",
        supportText: "",
        q: "O agente que simule participação de celebridade em fotografias ou vídeos de ato sexual, ainda que se valendo tão somente do rosto da vítima na montagem das imagens, pratica crime de registro não autorizado da intimidade sexual.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A criação de montagens (deepfakes) que incluam o rosto da vítima em cena de nudez ou ato sexual está tipificada no art. 216-B, parágrafo único, do CP.[cite: 29]"
    },
    {
        topic: "Crimes contra a Dignidade Sexual",
        type: "vf",
        supportText: "",
        q: "Para configuração do crime de estupro, bastam olhares voluptuosos que notadamente reflitam desejo sexual do agente, independentemente da existência de contato físico ou de relação de autoridade entre agente e vítima.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O estupro exige que a conjunção carnal ou ato libidinoso diverso ocorra mediante violência ou grave ameaça (art. 213, CP). Olhares voluptuosos não preenchem a elementar da violência ou ameaça.[cite: 29]"
    },
    {
        topic: "Crimes contra a Vida",
        type: "vf",
        supportText: "Abelardo, membro de organização criminosa voltada à prática de furto e roubo de veículos, foi encarregado de matar Carla, sua comparsa de crime, porque ela teria prestado, em interrogatório policial de inquérito no qual era investigada, informações relevantes à investigação policial sobre a organização.[cite: 28]",
        q: "Caso Abelardo mate Carla, a ele deverá ser imputado o tipo penal feminicídio.[cite: 28]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O homicídio, neste caso hipotético, foi praticado como 'queima de arquivo' motivado pelas informações prestadas no inquérito, e não por razões da condição de sexo feminino (menosprezo ou discriminação), descaracterizando a qualificadora de feminicídio.[cite: 28]"
    }
];

const banco_proc_penal = [
    {
        topic: "Inquérito Policial",
        supportText: "",
        q: "Sobre as características e regras do Inquérito Policial no Código de Processo Penal, assinale a alternativa correta:",
        options: [
            "O inquérito policial é peça indispensável para o oferecimento da denúncia pelo Ministério Público em qualquer infração penal.",
            "A autoridade policial poderá mandar arquivar autos de inquérito caso verifique de plano a atipicidade do fato.",
            "É direito do defensor, no interesse do representado, ter amplo acesso aos elementos de prova que, já documentados em procedimento investigatório realizado por órgão com competência de polícia judiciária, digam respeito ao exercício do direito de defesa (Súmula Vinculante 14).",
            "O inquérito policial possui natureza contraditória plena, sendo nulo o indiciamento realizado sem prévia oitiva de testemunhas de defesa.",
            "Nos crimes de ação penal pública incondicionada, o inquérito policial somente pode ser iniciado mediante requerimento formal da vítima."
        ],
        answer: 2,
        disclaimer: "A Súmula Vinculante 14 do STF garante ao advogado acesso às diligências já documentadas no inquérito. O IP é dispensável (se o MP já tiver justa causa), inquisitivo e indisponível (o delegado jamais pode arquivar autos de IP - art. 17 do CPP)."
    },
    {
        topic: "Acordo de Não Persecução Penal (ANPP - Art. 28-A do CPP)",
        supportText: "",
        q: "De acordo com o art. 28-A do Código de Processo Penal (incluído pelo Pacote Anticrime - Lei nº 13.964/2019), não sendo caso de arquivamento e tendo o investigado confessado formal e circunstancialmente a prática de infração penal sem violência ou grave ameaça, o Ministério Público poderá propor Acordo de Não Persecução Penal desde que a pena mínima cominada seja:",
        options: [
            "inferior a 1 (um) ano.",
            "inferior a 2 (dois) anos.",
            "inferior a 4 (quatro) anos.",
            "igual ou inferior a 4 (quatro) anos.",
            "inferior a 8 (oito) anos."
        ],
        answer: 2,
        disclaimer: "Nos termos do art. 28-A, caput, do CPP, o ANPP é cabível para infrações penais cometidas sem violência ou grave ameaça e com pena mínima inferior a 4 (quatro) anos."
    },
    {
        topic: "Provas no Processo Penal (Cadeia de Custódia)",
        supportText: "",
        q: "Segundo o artigo 158-A do Código de Processo Penal, o conjunto de todos os procedimentos utilizados para manter e documentar a história cronológica do vestígio coletado em locais ou em vítimas de crimes, para rastrear sua posse e manuseio a partir de seu reconhecimento até o descarte, denomina-se:",
        options: [
            "Exame de corpo de delito indireto.",
            "Cadeia de custódia.",
            "Acareação pericial.",
            "Incidente de falsidade documental.",
            "Auto de apreensão circunstanciado."
        ],
        answer: 1,
        disclaimer: "Trata-se da definição legal exata de Cadeia de Custódia, introduzida no art. 158-A do CPP pela Lei nº 13.964/2019."
    },
    {
        topic: "Prisões e Medidas Cautelares",
        type: "vf",
        supportText: "",
        q: "Com as alterações promovidas pela Lei nº 13.964/2019 no Código de Processo Penal, é vedado ao juiz decretar a prisão preventiva de ofício, tanto na fase de investigação quanto no curso da ação penal, dependendo sempre de requerimento do Ministério Público, do querelante ou do assistente, ou de representação da autoridade policial.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Nos termos do art. 311 do CPP atualizado e da jurisprudência consolidada do STF e STJ, não cabe mais prisão preventiva decretada de ofício pelo magistrado em nenhuma fase da persecução penal."
    },
    {
        topic: "Provas Ilícitas e Teoria da Fonte Independente",
        type: "vf",
        supportText: "",
        q: "São inadmissíveis, devendo ser desentranhadas do processo, as provas ilícitas, assim entendidas as obtidas em violação a normas constitucionais ou legais, bem como as provas derivadas das ilícitas, salvo quando não evidenciado o nexo de causalidade entre umas e outras, ou quando as derivadas puderem ser obtidas por uma fonte independente das primeiras.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. É a literalidade do art. 157, caput e § 1º do Código de Processo Penal."
    },
    {
        topic: "Inquérito Policial e Provas",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular, sem ter obtido consentimento para acesso ao conteúdo do dispositivo.[cite: 29]",
        q: "No curso da investigação criminal, cabe ao delegado de polícia requisitar perícia no aparelho celular apreendido, porém, quando o investigado não a autoriza com base no direito fundamental à vida privada e à intimidade, a perícia fica condicionada a autorização judicial.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O acesso aos dados e comunicações armazenadas em telemóveis apreendidos depende de prévia ordem judicial (jurisprudência consolidada do STJ/STF).[cite: 29]"
    },
    {
        topic: "Provas (Exame de Corpo de Delito)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "A confissão de Heitor em depoimento formal em sede policial não desobriga a realização de exame de corpo de delito para comprovação da lesão corporal, caso esta tenha deixado vestígios.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). É regra expressa no art. 158 do CPP: quando a infração deixar vestígios, o exame de corpo de delito direto ou indireto é indispensável, não o suprindo a confissão do arguido.[cite: 29]"
    },
    {
        topic: "Prisão em Flagrante",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "A prisão de Heitor em flagrante delito foi ilegal, devido exclusivamente à ausência de prova da materialidade da lesão corporal nos autos.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A prisão em flagrante por lesão corporal que ocorreu três meses antes é ilegal não pela ausência momentânea da materialidade, mas pelo facto de já não haver qualquer estado de flagrância (art. 302, CPP).[cite: 29]"
    },
    {
        topic: "Prisão Cautelar (Prisão Preventiva)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Em eventual audiência de custódia, o juiz poderá determinar, de ofício, a prisão preventiva de Heitor, a despeito de ausência de representação por parte da autoridade policial ou de pedido de membro do Ministério Público nesse sentido.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Após a Lei nº 13.964/2019 (Pacote Anticrime), o juiz não pode converter a prisão em flagrante em preventiva de ofício durante a audiência de custódia.[cite: 29]"
    },
    {
        topic: "Medidas Cautelares Diversas da Prisão",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Se houver requerimento das partes e justificação fundamentada de que a prisão preventiva de Heitor pode ser substituída por outras medidas cautelares, o juiz poderá determinar sua liberdade provisória e aplicar, de forma cumulativa, medidas como a proibição de manter contato com Carlos e de frequentar bloquinhos de carnaval.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). As medidas cautelares previstas no art. 319 do CPP podem ser aplicadas de forma isolada ou cumulativa (art. 282, § 1º, CPP).[cite: 29]"
    },
    {
        topic: "Provas (Cadeia de Custódia)",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Caso Heitor, quando de sua prisão, tivesse entregado o canivete diretamente à autoridade policial, o princípio da fé pública dispensaria a aplicação das regras relativas à cadeia de custódia da prova em relação ao objeto apreendido.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A apreensão direta pela autoridade policial não afasta as regras da cadeia de custódia (art. 158-A e seguintes, CPP), sob pena de se quebrar a rastreabilidade probatória.[cite: 29]"
    },
    {
        topic: "Ação Penal (Juizados Especiais Criminais)",
        type: "vf",
        supportText: "",
        q: "Nos termos da Lei n.º 9.099/1995, o crime de lesão corporal leve é processado mediante ação penal privada, perante o juizado especial criminal, após oferecimento de queixa-crime por advogado contratado ou por defensor público.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O crime de lesão corporal leve, com o advento da Lei nº 9.099/1995, passou a exigir representação da vítima, sendo, portanto, de ação penal pública condicionada (art. 88 da referida lei).[cite: 29]"
    },
    {
        topic: "Prisão Temporária",
        type: "vf",
        supportText: "Heitor confessou ter lesionado Carlos, mas negou a ameaça. Diante da confissão, o delegado de polícia prendeu Heitor em flagrante delito pelo crime de lesão corporal leve e apreendeu seu aparelho celular.[cite: 29]",
        q: "Caso Heitor, intimado para comparecimento à delegacia a fim de prestar esclarecimentos, decidisse não atender à intimação, o delegado não poderia determinar sua prisão temporária, pois este é um poder que apenas a autoridade judicial pode exercer.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). Nos termos da Lei nº 7.960/1989, a prisão temporária só pode ser decretada pelo Juiz, mediante representação da autoridade policial ou a requerimento do Ministério Público.[cite: 29]"
    },
    {
        topic: "Princípios Constitucionais no Inquérito Policial",
        type: "vf",
        supportText: "",
        q: "No curso das investigações policiais, dada a natureza administrativa e não judicial, mitigam-se os princípios constitucionais da presunção de inocência e da não autoincriminação, de forma que o delegado pode, por exemplo, exigir do agente a colaboração em reconhecimento de pessoas e na cessão de senha para desbloqueio de aparelho celular.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 1,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). O princípio nemo tenetur se detegere (não autoincriminação) aplica-se plenamente ao inquérito policial. O arguido não pode ser forçado a ceder senhas ou a colaborar de modo ativo para a sua própria incriminação.[cite: 29]"
    },
    {
        topic: "Juiz das Garantias",
        type: "vf",
        supportText: "",
        q: "As normas relativas ao juiz de garantias não se aplicam aos procedimentos de competência dos juizados especiais criminais.[cite: 29]",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Questão extraída da prova do MPCE 2025 (CEBRASPE). A inaplicabilidade do juiz das garantias aos juizados especiais criminais está textualmente prevista no art. 3º-C, § 1º, inciso I, do CPP.[cite: 29]"
    }
];

const banco_noc_adm = [
    {
        topic: "Processo Organizacional (Funções Administrativas)",
        supportText: "",
        q: "Dentro do processo administrativo clássico (PODC - Planejamento, Organização, Direção e Controle), a função administrativa responsável por definir objetivos futuros, estabelecer metas e traçar os meios e recursos necessários para alcançá-los é:",
        options: [
            "o Controle.",
            "a Direção.",
            "a Organização.",
            "o Planejamento.",
            "a Departamentalização."
        ],
        answer: 3,
        disclaimer: "O Planejamento é a primeira função administrativa, voltada à definição de objetivos e à escolha antecipada do curso de ação para alcançá-los."
    },
    {
        topic: "Gestão da Qualidade (Ciclo PDCA e Ferramentas)",
        supportText: "",
        q: "Na Gestão da Qualidade, a ferramenta gráfica baseada no princípio de que a grande maioria dos problemas (cerca de 80%) decorre de um pequeno número de causas fundamentais (cerca de 20%), permitindo priorizar as ações corretivas mais relevantes, é o:",
        options: [
            "Diagrama de Pareto.",
            "Fluxograma de Processo.",
            "Histograma.",
            "Folha de Verificação.",
            "Matriz GUT."
        ],
        answer: 0,
        disclaimer: "O Diagrama de Pareto aplica a relação 80/20 (Vilfredo Pareto / Joseph Juran) em um gráfico de barras ordenadas para destacar as causas vitais que geram a maior parte dos defeitos ou problemas."
    },
    {
        topic: "Administração de Recursos Materiais (Curva ABC)",
        supportText: "",
        q: "Na gestão de estoques pelo método da Curva ABC (ou classificação ABC), os itens classificados na 'Classe A' caracterizam-se por apresentarem:",
        options: [
            "grande quantidade física em estoque e baixíssimo valor financeiro agregado.",
            "pequena quantidade de itens no estoque, porém altíssima representatividade no valor financeiro total investido, exigindo controle rigoroso.",
            "itens obsoletos ou inservíveis destinados ao desfazimento.",
            "importância financeira e quantidade física exatamente intermediárias.",
            "materiais de escritório de baixíssimo custo unitário que dispensam inventário."
        ],
        answer: 1,
        disclaimer: "Na Curva ABC, os itens Classe A representam a menor parcela quantitativa (cerca de 20% dos itens), mas concentram a maior parte do valor financeiro do estoque (cerca de 80% do valor total)."
    },
    {
        topic: "Gestão de Pessoas (Motivação e Liderança)",
        type: "vf",
        supportText: "",
        q: "Na Teoria dos Dois Fatores de Frederick Herzberg, os fatores higiênicos (extrínsecos, como salário, condições físicas de trabalho e benefícios), quando ótimos, evitam a insatisfação dos colaboradores, mas não garantem por si sós a motivação intrínseca duradoura, a qual decorre dos fatores motivacionais (ligados ao conteúdo do cargo, realização e reconhecimento).",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. Para Herzberg, fatores higiênicos apenas previnem a insatisfação (vão da insatisfação à não-insatisfação), enquanto os fatores motivacionais (intrínsecos ao trabalho) promovem a satisfação e motivação."
    },
    {
        topic: "Gestão por Processos (BPM e BPMN)",
        type: "vf",
        supportText: "",
        q: "Na notação BPMN (Business Process Model and Notation), os elementos gráficos em formato de losango (diamante) utilizados para controlar a divergência e a convergência do fluxo de sequência (decisões, desvios condicionais ou caminhos paralelos) são denominados Gateways.",
        options: ["Certo", "Errado"],
        answer: 0,
        disclaimer: "Correto. No BPMN, círculos representam Eventos, retângulos de cantos arredondados representam Atividades/Tarefas e losangos representam Gateways (decisões/controle de fluxo)."
    }
];

// =========================================================
// CATÁLOGO DE QUESTÕES
// =========================================================

const mockDB = {
    // Matérias comuns
    "Língua Portuguesa": banco_pt,
    "Matemática e RLM": banco_rlm,
    "Matemática e Raciocínio Lógico": banco_rlm,
    "Legislação MPPE": banco_legis_mppe,
    "Legislação Aplicada ao MPPE": banco_legis_mppe,
    "Informática": banco_info,

    // Matérias jurídicas
    "Direito Constitucional": banco_const,
    "Direito Administrativo": banco_adm,
    "Direito Civil": banco_civil,
    "Direito Processual Civil": banco_proc_civil,
    "Direito Penal": banco_penal,
    "Direito Processual Penal": banco_proc_penal,

    // Matéria específica do cargo de Técnico
    "Noções de Administração": banco_noc_adm,

    // Matérias específicas de TI
    "Governança em TI": banco_gov_ti,
    "Segurança, Risco e Continuidade": banco_seg_ti,
    "Engenharia de Software, DevOps e Ciência de Dados":
        banco_eng_soft_ia,
    "Infraestrutura e Banco de Dados": banco_infra_bd
};

// Disponibiliza o catálogo para scripts que utilizem window.mockDB.
if (typeof window !== "undefined") {
    window.mockDB = mockDB;
}
