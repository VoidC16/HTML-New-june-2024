const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma conversa com um amigo, ele te conta sobre o chatGPT, uma IA que funciona como um banco de dados. Seu primeiro pensamento é:",
        alternativas: [
            {
                texto: "Isso é incrível!",
                afirmacao: "acredita no potêncial da IA de facilitar a vida das pessoas."
            },
            {
                texto: "Isso é assustador!",
                afirmacao: "Desconfia da IA, acreditando que pode ser perigoso nas mãos das pessoas erradas."
            }
        ]
    },
    {
        enunciado: "Enquanto navegava na internet, você descobre um debate sobre como o avanço tecnológico desenfreado pode afetar a sociedade em que vivemos. Qual sua opinião sobre este tópico?",
        alternativas: [
            {
                texto: "Acredito que, embora tenha consequências negativas, os benefícios que a tecnologia pode trazer são muito mais relevantes.",
                afirmacao: "Confia que os avanços tecnológicos nas diversas áreas superam seus malefícios."
            },
            {
                texto: "É necessário atenção em relação à tecnologia, pois pode tirar o emprego de muitas pessoas e criar uma dependência na população.",
                afirmacao: "Tem medo de que muitos fiquem desempregados por causa disso, e que a população se torne dependente da tecnologia."
            }
        ]
    },
    {
        enunciado: "Investigando mais a fundo, você descobre que existem programas que criam imagens usando inteligência artificial, e que os artistas e desenhistas estão enfurecidos, você:",
        alternativas: [
            {
                texto: "Acredita que seja apenas a progressão natural das coisas, assim como muitos outros trabalhos foram substítuidos pela tecnologia no passado.",
                afirmacao: "Apoia a substituição de trabalhos por IA, acreditando que isso é necessário para a evolução da humanidade."
            },
            {
                texto: "Acredita que isso é um grande problema, pois desafia a concepção de 'arte' e duvida que uma IA pode criar 'arte' da mesma forma que um ser humano.",
                afirmacao: "Duvida que a IA possa criar arte como o ser humano, considerando que trabalha com padrões e que não pode criar algo realmente 'novo'."
            }
        ]
    },
    {
        enunciado: "Quando você chega no trabalho, percebe que a IA é usada em diversos setores e pro praticamente todos no seu trabalho, vendo isso, você pensa:",
        alternativas: [
            {
                texto: "Que a IA traz diversos benefícios para o trabalho, acelerando processos complicados e reduzindo a necessidade de pensar em tópicos e pesquisar dados.",
                afirmacao: "Gosta da forma como a IA facilita o trabalho e auxilia os diversos setores de uma empresa."
            },
            {
                texto: "Que o uso excessivo da tecnologia é perigoso, pois não há garantia que a IA dê uma informação 100% confiável, e mesmo sendo confiável, acaba por criar uma grande dependência das pessoas em relação à IA.",
                afirmacao: "Tem medo de que a IA não seja 100% confiável e que as pessoas deixem de se esforçar por dependência à IA, prejudicando o desenvolvimento do indivíduo."
            }
        ]
    },
    {
        enunciado: "Chegando em ano de eleição, você descobre uma IA que pode ser usada para simular a voz e rosto de uma pessoa, embora seja facilmente identificável que não é real, você:",
        alternativas: [
            {
                texto: "Acredita que, independente do avanço tecnológico, nunca será possível simular perfeitamente a realidade, por isso, não é um grande problema.",
                afirmacao: "Confia que a IA não precise ser regulada, pois sempre será possível identificar algo real de algo feito artificialmente."
            },
            {
                texto: "Acredita que isso seja alarmante príncipalmente em tópicos de política, pois nada garante que essa tecnologia não avance e distorça a noção da população em relação ao que é real.",
                afirmacao: "Defende a regulação da IA, alegando que eventualmente o avanço chegará a um ponto em que seja impossível diferenciar real de artificial, principalmente por pessoas que não costumam confirmar os fatos."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();