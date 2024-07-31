// 26/06
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {enunciado: "Qual a sua profissao?",
        alternativas: ["professor",
                       "cozinheiro"]
    },
    {enunciado: "Na sua opinião, considerando a cultura contemporânea do 'fazer menos é fazer mais', a prática da castração de animais deve ser vista como: uma medida necessária para controlar a superpopulação e promover a saúde dos animais; ou como uma intervenção desnecessária que pode interferir nos processos naturais de reprodução?",
        alternativas: ["A prática da castração de animais deve ser vista como uma medida necessária para controlar a superpopulação e promover a saúde dos animais, alinhando-se com a ideia de que menos animais significa mais qualidade de vida para cada um deles.",
                       "A castração de animais pode ser vista como uma intervenção desnecessária que interfere nos processos naturais de reprodução, desconsiderando que os ecossistemas têm capacidade de ajustar suas populações naturalmente."]
    },
    {enunciado: "Qual é a visão de cada tribo indigena  diante da castração de animais sendo que é  realidade  a cultura do menos é mais já é pertinente?",
        alternativas: ["Desafiador.",
                       "Apoiam as medidas já tomadas."]
    },
    {enunciado: "Como utlizar a tecnologia para promover ações objetivas para aumentar o número de castrações, e assim diminuir a quantidade de animais em situaçação de rua, e ações de conscientização, promovendo a mudança cultural para evitar o abandono de animais, utilizando hábitos do menos é mais?",
        alternativas: ["Uso das redes sociais para apoio e divulgação das ações.",
                       "Ser parceiro das ações."]
    }

]

// reuniao 5 03/07
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// reuniao 6 31/07
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();