// 26/06
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


const perguntas = [
    {enunciado: "1 - Qual a sua profissao?",
        alternativas: [
                    {texto: "professor",
                    afirmacao:"haaa coitado"
                    },
                    {texto: "cozinheiro",
                    afirmacao: "sempre necessario"
                    }
        ]
    },
    {enunciado: "2 - Na sua opinião, considerando a cultura contemporânea do 'fazer menos é fazer mais', a prática da castração de animais deve ser vista como: uma medida necessária para controlar a superpopulação e promover a saúde dos animais; ou como uma intervenção desnecessária que pode interferir nos processos naturais de reprodução?",
        alternativas: [
            // reuniao 7 07/08
            {texto: "A prática da castração de animais deve ser vista como uma medida necessária para controlar a superpopulação e promover a saúde dos animais, alinhando-se com a ideia de que menos animais significa mais qualidade de vida para cada um deles.",
            afirmacao: "colocar afirmacao na aula"
            },
            {texto: "A castração de animais pode ser vista como uma intervenção desnecessária que interfere nos processos naturais de reprodução, desconsiderando que os ecossistemas têm capacidade de ajustar suas populações naturalmente.",
            afirmacao: "colocar afirmacao na aula"
            }
        ]
    },
    {enunciado: "3 - Qual é a visão de cada tribo indigena  diante da castração de animais sendo que é  realidade  a cultura do menos é mais já é pertinente?",
        alternativas: [
            // reuniao 7 07/08
             {texto: "Desafiador.",
              afirmacao: "colocar afirmacao na aula"
            },
            {texto: "Apoiam as medidas já tomadas.",
                afirmacao: "colocar afirmacao na aula"
            }    
         ]
    },
    {enunciado: "4 - Como utlizar a tecnologia para promover ações objetivas para aumentar o número de castrações, e assim diminuir a quantidade de animais em situaçação de rua, e ações de conscientização, promovendo a mudança cultural para evitar o abandono de animais, utilizando hábitos do menos é mais?",
        alternativas: [
            // reuniao 7 07/08
             {texto: "Uso das redes sociais para apoio e divulgação das ações.",
             afirmacao: "colocar afirmacao na aula"
            },
            {texto: "Ser parceiro das ações.",
                afirmacao: "colocar afirmacao na aula"
            } 
         ]
    }

];

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
        // reuniao 7 07/08 está com erro verificar como acertar
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', function () {
          atual++;
          mostraPergunta();
        })
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta(); 