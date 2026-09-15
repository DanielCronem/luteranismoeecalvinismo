"use strict";


/* =========================================================
   CONFIGURAÇÃO
========================================================= */

const BOARD_SIZE = 36;
const FINAL_POSITION = BOARD_SIZE - 1;


/* =========================================================
   ELEMENTOS
========================================================= */

const startScreen =
    document.getElementById("startScreen");

const gameScreen =
    document.getElementById("gameScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const themeToggle =
    document.getElementById("themeToggle");


const board =
    document.getElementById("board");

const rollButton =
    document.getElementById("rollButton");

const dice =
    document.getElementById("dice");


const gameStatus =
    document.getElementById("gameStatus");

const turnName =
    document.getElementById("turnName");

const turnOrigin =
    document.getElementById("turnOrigin");

const sidebarTurn =
    document.getElementById("sidebarTurn");

const sidebarPosition =
    document.getElementById("sidebarPosition");


const influence0 =
    document.getElementById("influence0");

const influence1 =
    document.getElementById("influence1");

const correct0 =
    document.getElementById("correct0");

const correct1 =
    document.getElementById("correct1");


const playerCard0 =
    document.getElementById("playerCard0");

const playerCard1 =
    document.getElementById("playerCard1");

const gameLog =
    document.getElementById("gameLog");


/* PERGUNTA */

const questionModal =
    document.getElementById("questionModal");

const questionTypeLabel =
    document.getElementById("questionTypeLabel");

const questionModalTitle =
    document.getElementById("questionModalTitle");

const questionBadge =
    document.getElementById("questionBadge");

const questionCategory =
    document.getElementById("questionCategory");

const questionText =
    document.getElementById("questionText");

const questionOptions =
    document.getElementById("questionOptions");

const answerFeedback =
    document.getElementById("answerFeedback");

const feedbackTitle =
    document.getElementById("feedbackTitle");

const feedbackText =
    document.getElementById("feedbackText");

const continueQuestionButton =
    document.getElementById(
        "continueQuestionButton"
    );


/* EVENTOS */

const eventModal =
    document.getElementById("eventModal");

const eventSymbol =
    document.getElementById("eventSymbol");

const eventCategory =
    document.getElementById("eventCategory");

const eventTitle =
    document.getElementById("eventTitle");

const eventText =
    document.getElementById("eventText");

const eventEffect =
    document.getElementById("eventEffect");

const continueEventButton =
    document.getElementById(
        "continueEventButton"
    );


/* FIM */

const gameOverModal =
    document.getElementById("gameOverModal");

const winnerTitle =
    document.getElementById("winnerTitle");

const winnerDescription =
    document.getElementById(
        "winnerDescription"
    );

const finalInfluence0 =
    document.getElementById(
        "finalInfluence0"
    );

const finalInfluence1 =
    document.getElementById(
        "finalInfluence1"
    );


/* =========================================================
   JOGADORES
========================================================= */

const PLAYERS = [

    {
        name: "Luteranismo",
        short: "L",
        origin: "Wittenberg"
    },

    {
        name: "Calvinismo",
        short: "C",
        origin: "Genebra"
    }

];


/* =========================================================
   CASAS
========================================================= */

function normalSpace(label = "Caminho") {

    return {
        type: "normal",
        symbol: "",
        label
    };

}


const SPACES =
    Array.from(
        { length: BOARD_SIZE },
        () => normalSpace()
    );


SPACES[0] = {
    type: "start",
    symbol: "1",
    label: "Início"
};


SPACES[1] = {
    type: "question",
    symbol: "Q",
    label: "Conhecimento"
};


SPACES[2] = {
    type: "press",
    symbol: "I",
    label: "Imprensa"
};


SPACES[3] =
    normalSpace("Expansão");


SPACES[4] = {
    type: "document",
    symbol: "D",
    label: "95 Teses",

    title:
        "As 95 Teses",

    text:
        "Em 1517, Martinho Lutero divulgou suas 95 Teses, criticando principalmente práticas relacionadas às indulgências.",

    bonus: 10
};


SPACES[5] = {
    type: "city",
    symbol: "C",
    label: "Wittenberg",

    city:
        "Wittenberg",

    favored:
        0
};


SPACES[6] = {
    type: "politics",
    symbol: "P",
    label: "Política"
};


SPACES[7] = {
    type: "question",
    symbol: "Q",
    label: "Doutrinas"
};


SPACES[8] = {
    type: "debate",
    symbol: "B",
    label: "Debate"
};


SPACES[9] =
    normalSpace("Territórios");


SPACES[10] = {
    type: "city",
    symbol: "C",
    label: "Worms",

    city:
        "Worms",

    favored:
        0
};


SPACES[11] = {
    type: "question",
    symbol: "Q",
    label: "Reforma"
};


SPACES[12] = {
    type: "document",
    symbol: "D",
    label: "Worms",

    title:
        "Dieta de Worms",

    text:
        "Em 1521, Lutero foi convocado à Dieta de Worms e recusou-se a abandonar suas ideias.",

    bonus: 10
};


SPACES[13] = {
    type: "press",
    symbol: "I",
    label: "Imprensa"
};


SPACES[14] = {
    type: "question",
    symbol: "Q",
    label: "Escrituras"
};


SPACES[15] = {
    type: "city",
    symbol: "C",
    label: "Augsburgo",

    city:
        "Augsburgo",

    favored:
        0
};


SPACES[16] = {
    type: "politics",
    symbol: "P",
    label: "Príncipes"
};


SPACES[17] = {
    type: "debate",
    symbol: "B",
    label: "Debate"
};


SPACES[18] =
    normalSpace("Expansão");


SPACES[19] = {
    type: "question",
    symbol: "Q",
    label: "Calvino"
};


SPACES[20] = {
    type: "city",
    symbol: "C",
    label: "Zurique",

    city:
        "Zurique",

    favored:
        null
};


SPACES[21] = {
    type: "document",
    symbol: "D",
    label: "Augsburgo",

    title:
        "Confissão de Augsburgo",

    text:
        "A Confissão de Augsburgo, apresentada em 1530, tornou-se uma importante exposição das crenças luteranas.",

    bonus: 10
};


SPACES[22] = {
    type: "question",
    symbol: "Q",
    label: "Predestinação"
};


SPACES[23] = {
    type: "press",
    symbol: "I",
    label: "Imprensa"
};


SPACES[24] = {
    type: "city",
    symbol: "C",
    label: "Genebra",

    city:
        "Genebra",

    favored:
        1
};


SPACES[25] = {
    type: "debate",
    symbol: "B",
    label: "Debate"
};


SPACES[26] = {
    type: "politics",
    symbol: "P",
    label: "Autoridade"
};


SPACES[27] = {
    type: "question",
    symbol: "Q",
    label: "Comparação"
};


SPACES[28] = {
    type: "document",
    symbol: "D",
    label: "Institutas",

    title:
        "Institutas da Religião Cristã",

    text:
        "João Calvino publicou uma das principais obras sistemáticas do pensamento reformado, as Institutas da Religião Cristã.",

    bonus: 10
};


SPACES[29] = {
    type: "city",
    symbol: "C",
    label: "Estrasburgo",

    city:
        "Estrasburgo",

    favored:
        1
};


SPACES[30] = {
    type: "question",
    symbol: "Q",
    label: "Europa"
};


SPACES[31] = {
    type: "press",
    symbol: "I",
    label: "Imprensa"
};


SPACES[32] = {
    type: "debate",
    symbol: "B",
    label: "Debate final"
};


SPACES[33] = {
    type: "politics",
    symbol: "P",
    label: "Conflitos"
};


SPACES[34] = {
    type: "question",
    symbol: "Q",
    label: "Revisão"
};


SPACES[35] = {
    type: "finish",
    symbol: "F",
    label: "Expansão"
};


/* =========================================================
   PERGUNTAS
========================================================= */

const QUESTIONS = [

    {
        category: "Luteranismo",

        question:
            "Quem foi a principal figura associada ao surgimento do Luteranismo?",

        options: [
            "Martinho Lutero",
            "João Calvino",
            "Henrique VIII",
            "Inácio de Loyola"
        ],

        answer: 0,

        explanation:
            "Martinho Lutero foi o principal nome do movimento que deu origem ao Luteranismo."
    },

    {
        category: "Luteranismo",

        question:
            "Em qual região Martinho Lutero desenvolveu sua atuação inicial?",

        options: [
            "Territórios alemães",
            "Península Ibérica",
            "Império Otomano",
            "Escandinávia exclusivamente"
        ],

        answer: 0,

        explanation:
            "Lutero atuou no Sacro Império Romano Germânico, especialmente em Wittenberg."
    },

    {
        category: "Luteranismo",

        question:
            "Qual princípio possui grande importância na doutrina luterana?",

        options: [
            "Justificação pela fé",
            "Salvação pela compra de indulgências",
            "Autoridade absoluta dos reis sobre a religião",
            "Predomínio da tradição oral sobre as Escrituras"
        ],

        answer: 0,

        explanation:
            "Lutero defendia que a justificação do cristão ocorria fundamentalmente pela fé."
    },

    {
        category: "Luteranismo",

        question:
            "Qual prática religiosa foi fortemente criticada por Lutero?",

        options: [
            "Comercialização de indulgências",
            "Leitura da Bíblia",
            "Uso da imprensa",
            "Construção de escolas"
        ],

        answer: 0,

        explanation:
            "A comercialização de indulgências foi um dos principais alvos das críticas presentes nas 95 Teses."
    },

    {
        category: "Luteranismo",

        question:
            "Qual cidade está diretamente relacionada à atuação de Martinho Lutero?",

        options: [
            "Wittenberg",
            "Genebra",
            "Roma antiga",
            "Constantinopla"
        ],

        answer: 0,

        explanation:
            "Wittenberg foi um centro fundamental da atuação acadêmica e religiosa de Lutero."
    },

    {
        category: "Luteranismo",

        question:
            "Lutero defendia que a Bíblia deveria possuir:",

        options: [
            "Papel central na fé cristã",
            "Importância inferior às indulgências",
            "Acesso exclusivo dos reis",
            "Proibição de tradução"
        ],

        answer: 0,

        explanation:
            "A valorização das Escrituras tornou-se um elemento central da Reforma luterana."
    },

    {
        category: "Luteranismo",

        question:
            "A tradução da Bíblia realizada por Lutero contribuiu para:",

        options: [
            "Ampliar o acesso ao texto bíblico",
            "Eliminar o uso da escrita",
            "Impedir a alfabetização",
            "Proibir a impressão de livros"
        ],

        answer: 0,

        explanation:
            "A tradução para o alemão facilitou o acesso de um público mais amplo às Escrituras."
    },

    {
        category: "Luteranismo",

        question:
            "As 95 Teses foram divulgadas em qual século?",

        options: [
            "Século XVI",
            "Século XI",
            "Século XVIII",
            "Século XX"
        ],

        answer: 0,

        explanation:
            "As 95 Teses são tradicionalmente associadas ao ano de 1517, no século XVI."
    },

    {
        category: "Calvinismo",

        question:
            "Quem foi a principal figura associada ao Calvinismo?",

        options: [
            "João Calvino",
            "Martinho Lutero",
            "Carlos Magno",
            "Tomás de Aquino"
        ],

        answer: 0,

        explanation:
            "João Calvino tornou-se o principal nome do Calvinismo."
    },

    {
        category: "Calvinismo",

        question:
            "Qual cidade tornou-se importante centro do Calvinismo?",

        options: [
            "Genebra",
            "Wittenberg",
            "Madri",
            "Lisboa"
        ],

        answer: 0,

        explanation:
            "Genebra tornou-se um dos principais centros da Reforma calvinista."
    },

    {
        category: "Calvinismo",

        question:
            "Qual doutrina ficou especialmente associada ao Calvinismo?",

        options: [
            "Predestinação",
            "Venda de indulgências",
            "Politeísmo",
            "Direito divino dos faraós"
        ],

        answer: 0,

        explanation:
            "A predestinação é uma das ideias mais conhecidas associadas à teologia calvinista."
    },

    {
        category: "Calvinismo",

        question:
            "João Calvino escreveu uma obra conhecida como:",

        options: [
            "Institutas da Religião Cristã",
            "95 Teses",
            "Divina Comédia",
            "O Príncipe"
        ],

        answer: 0,

        explanation:
            "As Institutas da Religião Cristã são uma das principais obras de Calvino."
    },

    {
        category: "Calvinismo",

        question:
            "O Calvinismo ganhou influência em diferentes partes da Europa, incluindo:",

        options: [
            "Suíça, França e Países Baixos",
            "Apenas a Península Arábica",
            "Somente o Império Bizantino",
            "Exclusivamente Portugal"
        ],

        answer: 0,

        explanation:
            "Ideias calvinistas alcançaram diferentes regiões europeias, assumindo formas locais."
    },

    {
        category: "Calvinismo",

        question:
            "Na organização religiosa calvinista, havia forte preocupação com:",

        options: [
            "Disciplina da comunidade religiosa",
            "Comercialização de indulgências",
            "Culto aos imperadores romanos",
            "Retorno ao politeísmo"
        ],

        answer: 0,

        explanation:
            "As comunidades reformadas influenciadas por Calvino valorizavam disciplina religiosa e moral."
    },

    {
        category: "Comparação",

        question:
            "Luteranismo e Calvinismo possuem em comum o fato de terem surgido no contexto da:",

        options: [
            "Reforma Protestante",
            "Revolução Industrial",
            "Antiguidade Clássica",
            "Revolução Francesa"
        ],

        answer: 0,

        explanation:
            "Ambos são movimentos protestantes surgidos no contexto das reformas religiosas do século XVI."
    },

    {
        category: "Comparação",

        question:
            "Lutero e Calvino compartilhavam a valorização:",

        options: [
            "Das Escrituras",
            "Da comercialização de indulgências",
            "Do politeísmo",
            "Da autoridade religiosa dos faraós"
        ],

        answer: 0,

        explanation:
            "Os dois movimentos atribuíram grande importância às Escrituras."
    },

    {
        category: "Comparação",

        question:
            "Uma diferença importante entre Luteranismo e Calvinismo está relacionada:",

        options: [
            "A aspectos de suas doutrinas e organização religiosa",
            "Ao fato de apenas um deles ser cristão",
            "Ao uso de idiomas completamente inexistentes na Europa",
            "Ao fato de um deles ter surgido na Antiguidade"
        ],

        answer: 0,

        explanation:
            "Embora ambos sejam protestantes, existem diferenças teológicas e institucionais entre os movimentos."
    },

    {
        category: "Contexto histórico",

        question:
            "Qual tecnologia favoreceu a rápida circulação das ideias reformistas?",

        options: [
            "Imprensa de tipos móveis",
            "Máquina a vapor",
            "Telégrafo",
            "Rádio"
        ],

        answer: 0,

        explanation:
            "A imprensa permitiu produzir livros, panfletos e textos religiosos em escala muito maior."
    },

    {
        category: "Contexto histórico",

        question:
            "A Reforma Protestante ocorreu principalmente durante:",

        options: [
            "A Idade Moderna",
            "A Pré-História",
            "A Antiguidade Oriental",
            "O século XXI"
        ],

        answer: 0,

        explanation:
            "A Reforma Protestante começou no século XVI, durante a Idade Moderna."
    },

    {
        category: "Contexto histórico",

        question:
            "Além das questões religiosas, a expansão da Reforma também envolveu interesses:",

        options: [
            "Políticos e econômicos",
            "Somente esportivos",
            "Apenas astronômicos",
            "Exclusivamente marítimos"
        ],

        answer: 0,

        explanation:
            "Governantes e grupos sociais também possuíam interesses políticos e econômicos ligados às reformas."
    },

    {
        category: "Política",

        question:
            "Por que alguns príncipes alemães apoiaram a Reforma de Lutero?",

        options: [
            "Buscavam também maior autonomia política e religiosa",
            "Pretendiam restaurar o Egito Antigo",
            "Queriam proibir qualquer forma de escrita",
            "Desejavam acabar com todas as cidades"
        ],

        answer: 0,

        explanation:
            "O apoio de parte dos príncipes também estava ligado à autonomia diante do imperador e de autoridades religiosas."
    },

    {
        category: "Consequências",

        question:
            "Uma consequência das reformas religiosas foi:",

        options: [
            "Maior fragmentação religiosa na Europa ocidental",
            "Unificação de todos os cristãos em uma única igreja",
            "Fim imediato de todas as monarquias",
            "Desaparecimento das cidades europeias"
        ],

        answer: 0,

        explanation:
            "Novas confissões cristãs se consolidaram, alterando profundamente a organização religiosa europeia."
    },

    {
        category: "Consequências",

        question:
            "A expansão das reformas religiosas provocou também:",

        options: [
            "Conflitos políticos e religiosos",
            "Fim de todas as disputas europeias",
            "Desaparecimento do comércio",
            "Fim da imprensa"
        ],

        answer: 0,

        explanation:
            "As divisões religiosas se combinaram a disputas políticas, contribuindo para diversos conflitos."
    },

    {
        category: "Imprensa",

        question:
            "A imprensa favoreceu Lutero e outros reformadores porque:",

        options: [
            "Permitiu ampla reprodução de seus textos",
            "Impediam qualquer publicação",
            "Funcionava apenas para reis",
            "Era utilizada somente para mapas"
        ],

        answer: 0,

        explanation:
            "Panfletos e livros puderam circular rapidamente entre diferentes regiões."
    },

    {
        category: "Escrituras",

        question:
            "Uma característica comum de diferentes movimentos protestantes foi:",

        options: [
            "Maior valorização da leitura bíblica",
            "Defesa obrigatória das indulgências",
            "Retorno à religião romana antiga",
            "Proibição universal da alfabetização"
        ],

        answer: 0,

        explanation:
            "A centralidade das Escrituras foi uma característica importante das reformas protestantes."
    }

];


/* =========================================================
   QUESTÕES DE DEBATE
========================================================= */

const DEBATE_QUESTIONS = [

    {
        category: "Debate",

        question:
            "Qual alternativa apresenta corretamente uma diferença entre Luteranismo e Calvinismo?",

        options: [
            "A predestinação recebeu destaque particular na teologia calvinista",
            "O Calvinismo defendia a comercialização de indulgências",
            "O Luteranismo surgiu no século XIX",
            "Lutero atuou principalmente em Genebra"
        ],

        answer: 0,

        explanation:
            "A predestinação possui grande destaque no pensamento calvinista, enquanto o Luteranismo desenvolveu outras ênfases teológicas."
    },

    {
        category: "Debate",

        question:
            "Qual associação histórica está correta?",

        options: [
            "Lutero, Wittenberg, e Calvino, Genebra",
            "Lutero, Genebra, e Calvino, Roma",
            "Lutero, Paris, e Calvino, Wittenberg",
            "Lutero, Londres, e Calvino, Madri"
        ],

        answer: 0,

        explanation:
            "Wittenberg está fortemente associada à atuação de Lutero, enquanto Genebra tornou-se centro importante da atuação de Calvino."
    },

    {
        category: "Debate",

        question:
            "O que Luteranismo e Calvinismo compartilhavam?",

        options: [
            "Críticas a elementos da Igreja Católica e valorização das Escrituras",
            "Defesa da venda de indulgências",
            "Rejeição completa da Bíblia",
            "Defesa do politeísmo"
        ],

        answer: 0,

        explanation:
            "Apesar de suas diferenças, ambos integravam a Reforma Protestante e valorizavam a autoridade das Escrituras."
    },

    {
        category: "Debate",

        question:
            "Qual afirmação descreve melhor a Reforma Protestante?",

        options: [
            "Foi um processo religioso com importantes dimensões políticas e sociais",
            "Foi apenas uma guerra militar",
            "Foi exclusivamente uma transformação artística",
            "Não teve qualquer consequência política"
        ],

        answer: 0,

        explanation:
            "A Reforma teve dimensão religiosa, mas também produziu profundas consequências políticas, culturais e sociais."
    },

    {
        category: "Debate",

        question:
            "A circulação das ideias de Lutero e Calvino foi favorecida principalmente por:",

        options: [
            "Imprensa, textos e redes de circulação europeias",
            "Internet e rádio",
            "Ferrovias e telégrafo",
            "Televisão"
        ],

        answer: 0,

        explanation:
            "A imprensa e a circulação de livros e panfletos foram fundamentais para a expansão das novas ideias."
    },

    {
        category: "Debate",

        question:
            "Qual alternativa caracteriza corretamente João Calvino?",

        options: [
            "Reformador ligado à consolidação do Calvinismo em Genebra",
            "Papa responsável pelo Concílio de Trento",
            "Rei responsável pelo Anglicanismo",
            "Artista responsável pela Capela Sistina"
        ],

        answer: 0,

        explanation:
            "Calvino foi um dos grandes reformadores protestantes e teve atuação marcante em Genebra."
    },

    {
        category: "Debate",

        question:
            "Qual alternativa caracteriza corretamente Martinho Lutero?",

        options: [
            "Reformador alemão ligado às 95 Teses",
            "Fundador da Companhia de Jesus",
            "Monarca inglês responsável pelo Anglicanismo",
            "Humanista italiano do século XIV"
        ],

        answer: 0,

        explanation:
            "Lutero foi um teólogo alemão e tornou-se conhecido especialmente pelas 95 Teses de 1517."
    }

];


/* =========================================================
   EVENTOS POLÍTICOS
========================================================= */

const POLITICAL_EVENTS = [

    {
        title:
            "Apoio de autoridades locais",

        text:
            "Governantes locais permitem maior circulação das ideias do seu movimento.",

        effect:
            12
    },

    {
        title:
            "Resistência política",

        text:
            "Autoridades da região dificultam a expansão do movimento.",

        effect:
            -8
    },

    {
        title:
            "Proteção territorial",

        text:
            "A proteção de autoridades favorece a continuidade das atividades reformistas.",

        effect:
            10
    },

    {
        title:
            "Conflito religioso",

        text:
            "Tensões políticas e religiosas reduzem temporariamente sua influência.",

        effect:
            -6
    },

    {
        title:
            "Nova região alcançada",

        text:
            "As ideias do movimento conseguem alcançar uma nova região.",

        effect:
            14
    }
];


/* =========================================================
   ESTADO
========================================================= */

let state = {};

let questionQueue = [];

let debateQueue = [];


/* =========================================================
   UTILIDADES
========================================================= */

function sleep(ms) {

    return new Promise(
        resolve =>
            setTimeout(
                resolve,
                ms
            )
    );

}


function shuffle(array) {

    const copy =
        [...array];


    for (
        let i =
            copy.length - 1;

        i > 0;

        i--
    ) {

        const j =
            Math.floor(
                Math.random() *
                (i + 1)
            );


        [
            copy[i],
            copy[j]
        ] =
        [
            copy[j],
            copy[i]
        ];

    }


    return copy;

}


function randomItem(array) {

    return array[
        Math.floor(
            Math.random() *
            array.length
        )
    ];

}


/* =========================================================
   TABULEIRO
========================================================= */

function getGridPosition(index) {

    const rowFromBottom =
        Math.floor(
            index / 6
        );


    const positionInRow =
        index % 6;


    const gridRow =
        6 -
        rowFromBottom;


    let gridColumn;


    if (
        rowFromBottom %
        2 === 0
    ) {

        gridColumn =
            positionInRow + 1;

    } else {

        gridColumn =
            6 -
            positionInRow;

    }


    return {
        row: gridRow,
        column: gridColumn
    };

}


/* =========================================================
   RENDERIZAR TABULEIRO
========================================================= */

function renderBoard() {

    board.innerHTML =
        "";


    for (
        let index = 0;
        index < BOARD_SIZE;
        index++
    ) {

        const space =
            SPACES[index];


        const cell =
            document.createElement(
                "div"
            );


        cell.className =
            "board-cell";


        if (
            space.type !==
            "normal"
        ) {

            cell.classList.add(
                "special"
            );

        }


        if (
            state.positions.includes(
                index
            )
        ) {

            cell.classList.add(
                "current-space"
            );

        }


        const gridPosition =
            getGridPosition(
                index
            );


        cell.style.gridRowStart =
            gridPosition.row;


        cell.style.gridColumnStart =
            gridPosition.column;


        /* TOPO */

        const top =
            document.createElement(
                "div"
            );


        top.className =
            "cell-top";


        const number =
            document.createElement(
                "span"
            );


        number.className =
            "cell-number";


        number.textContent =
            index + 1;


        top.appendChild(
            number
        );


        if (space.symbol) {

            const symbol =
                document.createElement(
                    "span"
                );


            symbol.className =
                "cell-symbol";


            symbol.textContent =
                space.symbol;


            top.appendChild(
                symbol
            );

        }


        cell.appendChild(
            top
        );


        /* NOME */

        const label =
            document.createElement(
                "div"
            );


        label.className =
            "cell-label";


        label.textContent =
            space.label;


        cell.appendChild(
            label
        );


        /* PEÇAS */

        const tokens =
            document.createElement(
                "div"
            );


        tokens.className =
            "tokens-container";


        state.positions.forEach(
            (position, player) => {

                if (
                    position ===
                    index
                ) {

                    const token =
                        document.createElement(
                            "div"
                        );


                    token.className =
                        `board-token ${
                            player === 0
                                ? "luther"
                                : "calvin"
                        }`;


                    token.textContent =
                        PLAYERS[
                            player
                        ].short;


                    tokens.appendChild(
                        token
                    );

                }

            }
        );


        cell.appendChild(
            tokens
        );


        board.appendChild(
            cell
        );

    }

}


/* =========================================================
   INTERFACE
========================================================= */

function updateInterface() {

    influence0.textContent =
        state.influence[0];


    influence1.textContent =
        state.influence[1];


    correct0.textContent =
        state.correct[0];


    correct1.textContent =
        state.correct[1];


    const current =
        state.currentPlayer;


    turnName.textContent =
        PLAYERS[current].name;


    turnOrigin.textContent =
        PLAYERS[current].origin;


    sidebarTurn.textContent =
        PLAYERS[current].name;


    sidebarPosition.textContent =
        `Casa ${
            state.positions[current] + 1
        } de ${BOARD_SIZE}`;


    playerCard0.classList.toggle(
        "active",
        current === 0 &&
        !state.finished[0]
    );


    playerCard1.classList.toggle(
        "active",
        current === 1 &&
        !state.finished[1]
    );


    playerCard0.classList.toggle(
        "finished",
        state.finished[0]
    );


    playerCard1.classList.toggle(
        "finished",
        state.finished[1]
    );


    renderBoard();

}


/* =========================================================
   LOG
========================================================= */

function addLog(
    player,
    text
) {

    state.logs.unshift({
        player,
        text
    });


    state.logs =
        state.logs.slice(
            0,
            8
        );


    renderLog();

}


function renderLog() {

    gameLog.innerHTML =
        "";


    if (
        state.logs.length === 0
    ) {

        const empty =
            document.createElement(
                "div"
            );


        empty.className =
            "log-item";


        empty.textContent =
            "A partida ainda não possui acontecimentos.";


        gameLog.appendChild(
            empty
        );

        return;

    }


    state.logs.forEach(
        log => {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "log-item";


            const strong =
                document.createElement(
                    "strong"
                );


            strong.textContent =
                PLAYERS[
                    log.player
                ].name +
                ": ";


            item.appendChild(
                strong
            );


            item.append(
                log.text
            );


            gameLog.appendChild(
                item
            );

        }
    );

}


/* =========================================================
   INFLUÊNCIA
========================================================= */

function addInfluence(
    player,
    amount
) {

    state.influence[player] =
        Math.max(
            0,
            state.influence[player] +
            amount
        );


    updateInterface();

}


/* =========================================================
   DADO
========================================================= */

async function rollDice() {

    if (
        state.busy ||
        state.gameOver ||
        state.finished[
            state.currentPlayer
        ]
    ) {

        return;

    }


    state.busy =
        true;


    rollButton.disabled =
        true;


    dice.classList.add(
        "rolling"
    );


    for (
        let i = 0;
        i < 9;
        i++
    ) {

        dice.textContent =
            Math.floor(
                Math.random() * 6
            ) + 1;


        await sleep(
            70
        );

    }


    const result =
        Math.floor(
            Math.random() * 6
        ) + 1;


    dice.textContent =
        result;


    dice.classList.remove(
        "rolling"
    );


    const player =
        state.currentPlayer;


    addLog(
        player,
        `lançou o dado e tirou ${result}.`
    );


    await movePlayer(
        player,
        result
    );


    resolveSpace(
        player
    );

}


/* =========================================================
   MOVIMENTO
========================================================= */

async function movePlayer(
    player,
    amount
) {

    const start =
        state.positions[
            player
        ];


    const target =
        Math.min(
            start + amount,
            FINAL_POSITION
        );


    while (
        state.positions[player] <
        target
    ) {

        state.positions[player]++;


        updateInterface();


        await sleep(
            150
        );

    }

}


/* =========================================================
   RESOLVER CASA
========================================================= */

function resolveSpace(player) {

    const position =
        state.positions[
            player
        ];


    const space =
        SPACES[
            position
        ];


    switch (
        space.type
    ) {

        case "question":

            openQuestion(
                "question",
                player
            );

            break;


        case "debate":

            openQuestion(
                "debate",
                player
            );

            break;


        case "press":

            resolvePress(
                player
            );

            break;


        case "document":

            resolveDocument(
                player,
                space
            );

            break;


        case "city":

            resolveCity(
                player,
                space
            );

            break;


        case "politics":

            resolvePolitics(
                player
            );

            break;


        case "finish":

            resolveFinish(
                player
            );

            break;


        default:

            addInfluence(
                player,
                2
            );


            addLog(
                player,
                "avançou pelo caminho e recebeu 2 pontos de influência."
            );


            finishTurn();

            break;

    }

}


/* =========================================================
   IMPRENSA
========================================================= */

function resolvePress(
    player
) {

    const bonus = 8;


    addInfluence(
        player,
        bonus
    );


    addLog(
        player,
        `utilizou a imprensa e recebeu ${bonus} pontos de influência.`
    );


    openEvent({

        symbol: "I",

        category:
            "Imprensa",

        title:
            "Circulação de ideias",

        text:
            "A imprensa de tipos móveis permitiu produzir livros e panfletos em escala muito maior, favorecendo a rápida circulação das ideias religiosas pela Europa.",

        effect:
            `+${bonus} pontos de influência`

    });

}


/* =========================================================
   DOCUMENTO
========================================================= */

function resolveDocument(
    player,
    space
) {

    addInfluence(
        player,
        space.bonus
    );


    addLog(
        player,
        `encontrou o documento histórico "${space.title}".`
    );


    openEvent({

        symbol: "D",

        category:
            "Documento histórico",

        title:
            space.title,

        text:
            space.text,

        effect:
            `+${space.bonus} pontos de influência`

    });

}


/* =========================================================
   CIDADE
========================================================= */

function resolveCity(
    player,
    space
) {

    let bonus = 10;


    let message =
        `${space.city} foi alcançada pelo movimento.`;


    if (
        space.favored ===
        player
    ) {

        bonus = 20;


        message =
            `${space.city} possui importância especial para o ${PLAYERS[player].name}.`;

    }


    addInfluence(
        player,
        bonus
    );


    addLog(
        player,
        `alcançou ${space.city} e recebeu ${bonus} pontos de influência.`
    );


    openEvent({

        symbol: "C",

        category:
            "Centro histórico",

        title:
            space.city,

        text:
            message,

        effect:
            `+${bonus} pontos de influência`

    });

}


/* =========================================================
   POLÍTICA
========================================================= */

function resolvePolitics(
    player
) {

    const event =
        randomItem(
            POLITICAL_EVENTS
        );


    addInfluence(
        player,
        event.effect
    );


    const effectText =
        event.effect >= 0
            ? `+${event.effect} pontos de influência`
            : `${event.effect} pontos de influência`;


    addLog(
        player,
        `${event.title}: ${effectText}.`
    );


    openEvent({

        symbol: "P",

        category:
            "Política e poder",

        title:
            event.title,

        text:
            event.text,

        effect:
            effectText

    });

}


/* =========================================================
   CHEGADA
========================================================= */

function resolveFinish(
    player
) {

    if (
        !state.finished[
            player
        ]
    ) {

        state.finished[
            player
        ] =
            true;


        const arrivalOrder =
            state.finished.filter(
                Boolean
            ).length;


        const bonus =
            arrivalOrder === 1
                ? 25
                : 15;


        addInfluence(
            player,
            bonus
        );


        addLog(
            player,
            `chegou ao final da rota e recebeu ${bonus} pontos de influência.`
        );


        openEvent({

            symbol: "F",

            category:
                "Fim da rota",

            title:
                arrivalOrder === 1
                    ? "Primeiro movimento a chegar"
                    : "Rota concluída",

            text:
                arrivalOrder === 1

                    ? "Seu movimento foi o primeiro a concluir a rota. A partida, porém, ainda não terminou. O vencedor será definido pelos pontos de influência."

                    : "Os dois movimentos concluíram a rota. Agora será calculado o resultado final.",

            effect:
                `+${bonus} pontos de influência`

        });

    }

}


/* =========================================================
   EVENT MODAL
========================================================= */

function openEvent(data) {

    state.waitingEvent =
        true;


    eventSymbol.textContent =
        data.symbol;


    eventCategory.textContent =
        data.category;


    eventTitle.textContent =
        data.title;


    eventText.textContent =
        data.text;


    eventEffect.textContent =
        data.effect;


    eventModal.classList.remove(
        "hidden"
    );

}


continueEventButton.addEventListener(
    "click",
    () => {

        eventModal.classList.add(
            "hidden"
        );


        state.waitingEvent =
            false;


        finishTurn();

    }
);


/* =========================================================
   PEGAR PERGUNTA
========================================================= */

function getNextQuestion(
    type
) {

    if (
        type === "debate"
    ) {

        if (
            debateQueue.length === 0
        ) {

            debateQueue =
                shuffle(
                    DEBATE_QUESTIONS
                );

        }


        return debateQueue.pop();

    }


    if (
        questionQueue.length === 0
    ) {

        questionQueue =
            shuffle(
                QUESTIONS
            );

    }


    return questionQueue.pop();

}


/* =========================================================
   ABRIR PERGUNTA
========================================================= */

function openQuestion(
    type,
    player
) {

    const question =
        getNextQuestion(
            type
        );


    state.activeQuestion = {

        ...question,

        type,

        player,

        answered:
            false

    };


    questionTypeLabel.textContent =
        type === "debate"
            ? "Debate histórico"
            : "Desafio histórico";


    questionModalTitle.textContent =
        PLAYERS[player].name;


    questionBadge.textContent =
        type === "debate"
            ? "B"
            : "Q";


    questionCategory.textContent =
        question.category;


    questionText.textContent =
        question.question;


    questionOptions.innerHTML =
        "";


    answerFeedback.classList.add(
        "hidden"
    );


    answerFeedback.classList.remove(
        "correct-feedback",
        "incorrect-feedback"
    );


    continueQuestionButton
        .classList
        .add(
            "hidden"
        );


    const options =
        question.options.map(
            (text, index) => ({

                text,

                correct:
                    index ===
                    question.answer

            })
        );


    const shuffled =
        shuffle(
            options
        );


    shuffled.forEach(
        option => {

            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "option-button";


            button.textContent =
                option.text;


            button.addEventListener(
                "click",
                () => {

                    answerQuestion(
                        button,
                        option
                    );

                }
            );


            questionOptions.appendChild(
                button
            );

        }
    );


    questionModal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   RESPONDER
========================================================= */

function answerQuestion(
    selectedButton,
    option
) {

    const current =
        state.activeQuestion;


    if (
        !current ||
        current.answered
    ) {

        return;

    }


    current.answered =
        true;


    const buttons =
        [
            ...questionOptions.querySelectorAll(
                ".option-button"
            )
        ];


    buttons.forEach(
        button => {

            button.disabled =
                true;

        }
    );


    const player =
        current.player;


    if (
        option.correct
    ) {

        const points =
            current.type ===
            "debate"
                ? 25
                : 15;


        addInfluence(
            player,
            points
        );


        state.correct[
            player
        ]++;


        selectedButton
            .classList
            .add(
                "correct"
            );


        feedbackTitle.textContent =
            "Resposta correta";


        feedbackText.textContent =
            `${current.explanation} Você recebeu ${points} pontos de influência.`;


        answerFeedback
            .classList
            .add(
                "correct-feedback"
            );


        addLog(
            player,
            `acertou ${
                current.type ===
                "debate"
                    ? "um debate"
                    : "uma pergunta"
            }.`
        );

    } else {

        selectedButton
            .classList
            .add(
                "incorrect"
            );


        /* MARCAR CORRETA */

        const correctText =
            current.options[
                current.answer
            ];


        buttons.forEach(
            button => {

                if (
                    button.textContent ===
                    correctText
                ) {

                    button.classList.add(
                        "correct"
                    );

                }

            }
        );


        if (
            current.type ===
            "debate"
        ) {

            addInfluence(
                player,
                -5
            );


            feedbackText.textContent =
                `${current.explanation} Como era uma casa de debate, foram perdidos 5 pontos de influência.`;

        } else {

            feedbackText.textContent =
                current.explanation;

        }


        feedbackTitle.textContent =
            "Resposta incorreta";


        answerFeedback
            .classList
            .add(
                "incorrect-feedback"
            );


        addLog(
            player,
            "não acertou o desafio histórico."
        );

    }


    updateInterface();


    answerFeedback
        .classList
        .remove(
            "hidden"
        );


    continueQuestionButton
        .classList
        .remove(
            "hidden"
        );

}


/* =========================================================
   CONTINUAR PERGUNTA
========================================================= */

continueQuestionButton
    .addEventListener(
        "click",
        () => {

            questionModal.classList.add(
                "hidden"
            );


            state.activeQuestion =
                null;


            finishTurn();

        }
    );


/* =========================================================
   FINALIZAR TURNO
========================================================= */

function finishTurn() {

    if (
        state.finished[0] &&
        state.finished[1]
    ) {

        endGame();

        return;

    }


    let next =
        state.currentPlayer === 0
            ? 1
            : 0;


    if (
        state.finished[next]
    ) {

        next =
            next === 0
                ? 1
                : 0;

    }


    state.currentPlayer =
        next;


    state.busy =
        false;


    dice.textContent =
        "?";


    rollButton.disabled =
        false;


    gameStatus.textContent =
        "Partida em andamento";


    updateInterface();

}


/* =========================================================
   FIM DA PARTIDA
========================================================= */

function endGame() {

    state.gameOver =
        true;


    state.busy =
        true;


    rollButton.disabled =
        true;


    gameStatus.textContent =
        "Partida finalizada";


    const luther =
        state.influence[0];


    const calvin =
        state.influence[1];


    finalInfluence0.textContent =
        luther;


    finalInfluence1.textContent =
        calvin;


    if (
        luther >
        calvin
    ) {

        winnerTitle.textContent =
            "Vitória do Luteranismo";


        winnerDescription.textContent =
            `O Luteranismo encerrou a partida com ${luther} pontos de influência, contra ${calvin} do Calvinismo.`;

    } else if (
        calvin >
        luther
    ) {

        winnerTitle.textContent =
            "Vitória do Calvinismo";


        winnerDescription.textContent =
            `O Calvinismo encerrou a partida com ${calvin} pontos de influência, contra ${luther} do Luteranismo.`;

    } else {

        winnerTitle.textContent =
            "Empate histórico";


        winnerDescription.textContent =
            `Os dois movimentos terminaram a partida com ${luther} pontos de influência.`;

    }


    saveRecord(
        Math.max(
            luther,
            calvin
        )
    );


    gameOverModal.classList.remove(
        "hidden"
    );

}


/* =========================================================
   RECORDES
========================================================= */

function saveRecord(score) {

    const current =
        Number(
            localStorage.getItem(
                "caminhosReformaRecord"
            )
        ) || 0;


    if (
        score >
        current
    ) {

        localStorage.setItem(
            "caminhosReformaRecord",
            String(score)
        );

    }

}


/* =========================================================
   INICIAR JOGO
========================================================= */

function startGame() {

    state = {

        positions: [
            0,
            0
        ],

        influence: [
            0,
            0
        ],

        correct: [
            0,
            0
        ],

        finished: [
            false,
            false
        ],

        currentPlayer:
            0,

        busy:
            false,

        gameOver:
            false,

        waitingEvent:
            false,

        activeQuestion:
            null,

        logs: []

    };


    questionQueue =
        shuffle(
            QUESTIONS
        );


    debateQueue =
        shuffle(
            DEBATE_QUESTIONS
        );


    dice.textContent =
        "?";


    rollButton.disabled =
        false;


    startScreen.classList.add(
        "hidden"
    );


    gameScreen.classList.remove(
        "hidden"
    );


    questionModal.classList.add(
        "hidden"
    );


    eventModal.classList.add(
        "hidden"
    );


    gameOverModal.classList.add(
        "hidden"
    );


    gameStatus.textContent =
        "Partida em andamento";


    addLog(
        0,
        "iniciou sua trajetória a partir de Wittenberg."
    );


    addLog(
        1,
        "iniciou sua trajetória representando o Calvinismo de Genebra."
    );


    updateInterface();


    window.scrollTo({

        top: 0,

        behavior:
            "smooth"

    });

}


/* =========================================================
   EVENTOS
========================================================= */

startButton.addEventListener(
    "click",
    startGame
);


rollButton.addEventListener(
    "click",
    rollDice
);


restartButton.addEventListener(
    "click",
    () => {

        const confirmed =
            window.confirm(
                "Deseja reiniciar a partida?"
            );


        if (
            confirmed
        ) {

            startGame();

        }

    }
);


playAgainButton.addEventListener(
    "click",
    startGame
);


/* =========================================================
   TEMA
========================================================= */

function setTheme(
    theme
) {

    if (
        theme === "dark"
    ) {

        document.body
            .classList
            .add(
                "dark-theme"
            );


        themeToggle.textContent =
            "☀";

    } else {

        document.body
            .classList
            .remove(
                "dark-theme"
            );


        themeToggle.textContent =
            "☾";

    }


    localStorage.setItem(
        "caminhosReformaTheme",
        theme
    );

}


themeToggle.addEventListener(
    "click",
    () => {

        const dark =
            document.body
                .classList
                .contains(
                    "dark-theme"
                );


        setTheme(
            dark
                ? "light"
                : "dark"
        );

    }
);


/* =========================================================
   CONFIGURAÇÕES INICIAIS
========================================================= */

function loadSettings() {

    const saved =
        localStorage.getItem(
            "caminhosReformaTheme"
        );


    if (
        saved
    ) {

        setTheme(
            saved
        );

        return;

    }


    const dark =
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    setTheme(
        dark
            ? "dark"
            : "light"
    );

}


loadSettings();