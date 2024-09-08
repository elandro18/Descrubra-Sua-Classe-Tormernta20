
   // Selecionar os botões e as seções
    const btnInicio = document.getElementById('btnInicio');
    const btnHistoria = document.getElementById('btnHistoria');
    const btnCriePersonagem = document.getElementById('btnCriePersonagem');
    const btnMaisInformacoes = document.getElementById('btnMaisInformacoes');

    const startBtn = document.getElementById('startBtn');
    const resetBtn = document.getElementById('resetBtn');
    const questionarioDiv = document.getElementById('questionario');
    const resultadoDiv =  document.getElementById('resultado');

    const classeRecomendada1 = document.getElementById('classeRecomendada1');
    const classeRecomendada2 = document.getElementById('classeRecomendada2');
    const imgClasse1 = document.getElementById('imgClasse1');
    const imgClasse2 = document.getElementById('imgClasse2');
    const descricaoClasse1 = document.getElementById('descricaoClasse1');
    const descricaoClasse2 = document.getElementById('descricaoClasse2');
    const linkClasse1 = document.getElementById('linkClasse1');
    const linkClasse2 = document.getElementById('linkClasse2');

    const inicioSection = document.getElementById('inicio');
    const historiaSection = document.getElementById('historia');
    const criePersonagemSection = document.getElementById('criePersonagem');
    const maisInformacoesSection = document.getElementById('maisInformacoes')

    // Função para exibir uma seção e ocultar as outras
    function mostrarSeccao(seccao) {
    // Ocultar todas as seções
    document.querySelectorAll('.section1').forEach((section) => {
        
        section.classList.remove('active');
        resultadoDiv.classList.remove('visible');
        resultadoDiv.style.display = 'none';
        resetarQuestionario();        

    });
    // Mostrar apenas a seção clicada
    seccao.classList.add('active');
    
    console.log(seccao);
    }

    // Event listeners para os botões
    btnInicio.addEventListener('click', () => {
        event.preventDefault();
       
        mostrarSeccao(inicioSection);
    });

    btnHistoria.addEventListener('click', () => {
        event.preventDefault();
        mostrarSeccao(historiaSection);
    });

    btnCriePersonagem.addEventListener('click', () => {
        event.preventDefault();
        mostrarSeccao(criePersonagemSection);
    });

    btnMaisInformacoes.addEventListener('click', () => {
        event.preventDefault();
        mostrarSeccao(maisInformacoesSection);
    });

    startBtn.addEventListener('click', iniciarQuestionario);
    resetBtn.addEventListener('click', resetarQuestionario);

    const classes = {
        guerreiro: { fisico: 8, estrategia: 4, magia: 0, vida: 7, agilidade: 6, resistencia: 6, carisma: 3 },
        barbaro:{fisico: 8, estrategia: 0, magia:0, vida: 8, agilidade: 2, resistencia: 7, carisma: 0},
        mago: { fisico: 1, estrategia: 7, magia: 8, vida: 4, agilidade: 3, resistencia: 3, carisma: 4 },
        ladino: { fisico: 6, estrategia: 5, magia: 2, vida: 6, agilidade: 8, resistencia: 3,carisma: 7 },
        druida: {fisico: 4,  estrategia: 4, magia: 6, vida: 5, agilidade: 3, resistencia: 4, carisma: 4 },
        bardo: { fisico: 3, estrategia: 5, magia: 4, vida: 4, agilidade: 4, resistencia: 2, carisma: 7 },
        clerigo: { fisico: 4,  estrategia: 4, magia: 7, vida: 7, agilidade: 2, resistencia: 6, carisma: 4 },
        paladino: { fisico: 8,  estrategia: 4,  magia: 3, vida: 8, agilidade: 5, resistencia: 8, carisma: 4 }
    };      
    var perguntaAtual = 0;
    // Função para iniciar o questionário
    function iniciarQuestionario() {
        questionarioDiv.style.display = 'block';  // Exibe as perguntas
        questionarioDiv.classList.remove('invisible'); 
        setTimeout(() => {
            questionarioDiv.classList.add('visible');
        }, 100); // 100ms para garantir que o elemento foi inserido no DOM
        startBtn.style.display = 'none';        // Oculta o botão "Iniciar"
        resetBtn.style.display = 'block';       // Exibe o botão "Resetar"
         
    }  
    // Função para resetar o questionário
    function resetarQuestionario() {
        questionarioDiv.classList.remove('visible');   // Remove a classe para esconder com animação
        setTimeout(() => {                          // Espera a animação terminar antes de resetar
            questionarioDiv.style.display = 'none';     // Oculta as perguntas completamente
            startBtn.style.display = 'block';         // Exibe o botão "Iniciar"
            resetBtn.style.display = 'none';          // Oculta o botão "Resetar"
            resultadoDiv.style.display = 'none';
        }, 500);            
        // Aqui você pode limpar qualquer resposta ou progresso do questionário
        pontuacaoClasses = {guerreiro: 0, barbaro:0, mago: 0, ladino: 0, druida:0, bardo: 0, clerigo:0, paladino:0 };
        perguntaAtual = 0;
        atualizarProgresso()
        mostrarPergunta(perguntaAtual);         
        
        console.log(pontuacaoClasses, perguntaAtual);
    }  

    let pontuacaoClasses = {guerreiro: 0, barbaro:0, mago: 0, ladino: 0, druida:0, bardo: 0, clerigo:0, paladino:0 };
    console.log(pontuacaoClasses);
    
    const perguntas = [
        { texto: "1 - Como você se sente em relação ao uso de magia arcana?", 
            opcoes: ["Prefiro confiar em habilidades físicas e treinamento", "A magia me intriga!"] 
        },
        { texto: "2 - Você prefere agir como o líder estratégico ou alguém que age nos bastidores?", 
            opcoes: ["Gosto de ser a face do grupo", "Sinto-me mais confortável em funções de suporte ou controle"] },
        
        {texto: "3 - Diante de uma situação difícil? ?",
            opcoes:["Gosto de ser político","Quero quebrar o pau da barraca"]
        },
        {texto: "4 - Você valoriza mais a proteção dos outros ou focar em causar o maior dano possível?",
            opcoes:["Fogo no parquinho!","Proteção acima de tudo"]
        },
        {texto: " 5 - Como você gostaria de se mover em combate?", 
            opcoes:["Ataques rápidos e ágeis, usar magia no campo de batalha"," Avançar lentamente e com poder"]
        },
        {texto: "6 - Você acredita mais em?",
            opcoes:["Na força das tradições ","Na inovação e criatividade"]
        },
        {texto: "7 - O quanto você gosta de lidar com criaturas e a natureza ao seu redor?",
            opcoes:["Muito","Pouco"]
        },
        {texto: "8 - Você prefere armas físicas como espadas e escudos, ou prefere conjurar feitiços?",
            opcoes:["Armas","Feitiços"]
        },
        {texto: "9 - Você prefere lutar na linha de frente ou agir nas sombras?",
            opcoes:["Linha de Frente","Nas sombras"]
        },
        {texto: "10 - Preferência por combate à distância ou corpo a corpo",
            opcoes:["Distância", "Corpo a corpo"]
        }

    ];

     //a pontuação será de 0 a 8 para cada pergunta
    const respostas = {
        pergunta1: { 
            resposta1: { guerreiro: 8, barbaro: 8, mago: 1, ladino: 5,  druida:4, bardo: 3, clerigo:5, paladino:7 }, 
            resposta2: { guerreiro: 0, barbaro:0, mago: 7, ladino: 3, druida:6, bardo: 5, clerigo:4, paladino:1 }
        },
        pergunta2: { 
            resposta1: { guerreiro: 3, barbaro:0, mago: 2, ladino: 7, druida:5, bardo: 8, clerigo:4, paladino:3 }, 
            resposta2: { guerreiro: 6, barbaro:5, mago: 3, ladino: 4, druida:4, bardo: 0, clerigo:6, paladino:2 },            
        },
        pergunta3: { 
            resposta1: { guerreiro: 3, barbaro:0, mago: 3, ladino: 6, druida:5, bardo: 8, clerigo:6, paladino:3 }, 
            resposta2: { guerreiro: 6, barbaro:8, mago: 4, ladino: 4, druida:4, bardo: 0, clerigo:4, paladino:2 },           
        },
        pergunta4: { 
            resposta1: { guerreiro: 3, barbaro:3, mago: 8, ladino: 5,  druida:2, bardo: 0, clerigo:0, paladino:0 }, 
            resposta2: { guerreiro: 4, barbaro:0, mago: 2, ladino: 1,  druida:6, bardo: 4, clerigo:8, paladino:6 }, 
        },
        pergunta5: { 
            resposta1: { guerreiro: 3, barbaro:0, mago: 7, ladino: 8,  druida:8, bardo: 6, clerigo:5, paladino:3 }, 
            resposta2: { guerreiro: 6, barbaro:5, mago: 0, ladino: 0, druida:5, bardo: 4, clerigo:2, paladino:6 }, 
        },
        pergunta6: { 
            resposta1: { guerreiro: 4, barbaro:3, mago: 4, ladino: 0,  druida:6, bardo: 0, clerigo:6, paladino:6 }, 
            resposta2: { guerreiro: 3, barbaro:0, mago: 0, ladino: 4,  druida:3, bardo: 8, clerigo:2, paladino:2 }, 
        },
        pergunta7: { 
            resposta1: { guerreiro: 2, barbaro:3, mago: 0, ladino: 0,  druida:8, bardo: 2, clerigo:2, paladino:3 }, 
            resposta2: { guerreiro: 4, barbaro:0, mago: 5, ladino: 3, druida:3, bardo: 0, clerigo:4, paladino:4 }, 
            },
        pergunta8: { 
            resposta1: { guerreiro: 8, barbaro:8, mago: 0, ladino: 7, druida:5, bardo: 5, clerigo:8, paladino:7 }, 
            resposta2: { guerreiro: 0, barbaro:0, mago: 8, ladino: 0,  druida:4, bardo: 3, clerigo:4, paladino:3 }, 
            },
        pergunta9: { 
            resposta1: { guerreiro: 6, barbaro:7, mago: 0, ladino: 0, druida:1, bardo: 1, clerigo:3, paladino:8 }, 
            resposta2: { guerreiro: 2, barbaro:0, mago: 7, ladino: 8,  druida:3, bardo: 6, clerigo:0, paladino:0 }, 
            },
        pergunta10: { 
            resposta1: { guerreiro: 3, barbaro:0, mago: 5, ladino: 5,  druida:6, bardo: 6, clerigo:4, paladino:0 }, 
            resposta2: { guerreiro: 6, barbaro:8, mago: 0, ladino: 5,  druida:5, bardo: 3, clerigo:7, paladino:8 }, 
            }
        
    };
    
    mostrarPergunta(perguntaAtual)

    function mostrarPergunta(perguntaAtual) {
      
        
        const perguntasDiv = document.getElementById('perguntas');
        perguntasDiv.innerHTML = '';
        let numeroPergunta = perguntaAtual;
        const novaPergunta = criarPergunta(perguntas[numeroPergunta]);
        perguntasDiv.appendChild(novaPergunta);
    
        // Pequeno delay para aplicar a animação
        setTimeout(() => {
            novaPergunta.classList.add('visible');
        }, 100); // 100ms para garantir que o elemento foi inserido no DOM
    }
    
    function criarPergunta(pergunta) {
        const perguntaDiv = document.createElement('div');
        perguntaDiv.classList.add('pergunta');    
        const perguntaTexto = document.createElement('p');
        perguntaTexto.textContent = pergunta.texto;
        perguntaDiv.appendChild(perguntaTexto);
    
        pergunta.opcoes.forEach((opcao, index) => {
            const button = document.createElement('button');
            button.textContent = opcao;
            button.onclick = () => registrarResposta(perguntaAtual, 'resposta' + (index + 1));
            perguntaDiv.appendChild(button);
        });
    
        return perguntaDiv;
    }
    
    function registrarResposta(perguntaIndex, resposta) {
        for (let classe in pontuacaoClasses) {
            pontuacaoClasses[classe] += respostas['pergunta' + (perguntaIndex + 1)][resposta][classe];
        }
        console.log(pontuacaoClasses);        
        perguntaAtual++;
        if (perguntaAtual < perguntas.length) {
            atualizarProgresso();
            console.log(perguntaAtual);
            mostrarPergunta(perguntaAtual);
        } else {
            recomendarClasse();
        }
    }   

    function atualizarProgresso() {
       
        if(perguntaAtual == 0){
            console.log("acessou");
            document.getElementById('progressBar').style.width = 0 + '%';
        }else{
            const progresso = ((perguntaAtual + 1) / perguntas.length) * 100;
            document.getElementById('progressBar').style.width = progresso + '%';
        }
         
    }    
    function recomendarClasse() {
        resultadoDiv.style.display = 'block';
        
        console.log(pontuacaoClasses);         
        const classesArray = Object.entries(pontuacaoClasses);

        classesArray.sort((a, b) => b[1] - a[1]);
        
        const top3Classes = classesArray.slice(0, 2);            
        console.log(top3Classes);
        let nomeclasse1 = top3Classes[0][0].toLocaleUpperCase()
        let numero = 0;
        classeRecomendada1.innerHTML = nomeclasse1;
        montaDescricao(nomeclasse1, numero)

        let nomeclasse2 = top3Classes[1][0].toLocaleUpperCase();
        numero = 1      
        classeRecomendada2.innerHTML = nomeclasse2;
        montaDescricao(nomeclasse2, numero);  

        //document.getElementById('classeRecomendada').textContent = top3Classes;          
        
        // Animação de transição para o resultado
        setTimeout(() => {
            resultadoDiv.classList.add('visible');
            questionarioDiv.style.display = 'none';
        }, 100); // Pequeno delay para suavizar a transição
    }

    function montaDescricao(nomeClasse, numero){
        if(numero == 0){            
            if(nomeClasse.toLocaleLowerCase() == "guerreiro"){
                descricaoClasse1.innerHTML = dados[0].descricao;
                imgClasse1.src = dados[0].img;
                linkClasse1.setAttribute('href',dados[0].siteInformacoes); 
            }if(nomeClasse.toLocaleLowerCase() == "barbaro"){
                descricaoClasse1.innerHTML = dados[1].descricao;
                imgClasse1.src = dados[1].img;
                linkClasse1.setAttribute('href',dados[1].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "mago"){
                descricaoClasse1.innerHTML = dados[2].descricao;
                imgClasse1.src = dados[2].img;
                linkClasse1.setAttribute('href',dados[2].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "ladino"){
                descricaoClasse1.innerHTML = dados[3].descricao;
                imgClasse1.src = dados[3].img;
                linkClasse1.setAttribute('href',dados[3].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "druida"){
                descricaoClasse1.innerHTML = dados[4].descricao;
                imgClasse1.src = dados[4].img;
                linkClasse1.setAttribute('href',dados[4].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "bardo"){
                descricaoClasse1.innerHTML = dados[5].descricao;
                imgClasse1.src = dados[5].img;
                linkClasse1.setAttribute('href',dados[5].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "clerigo"){
                descricaoClasse1.innerHTML = dados[6].descricao;
                imgClasse1.src = dados[6].img;
                linkClasse1.setAttribute('href',dados[6].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "paladino"){
                descricaoClasse1.innerHTML = dados[7].descricao;
                imgClasse1.src = dados[7].img;
                linkClasse1.setAttribute('href',dados[7].siteInformacoes);
            }
        }else{
            if(nomeClasse.toLocaleLowerCase() == "guerreiro"){
                descricaoClasse2.innerHTML = dados[0].descricao;
                imgClasse2.src = dados[0].img;
                linkClasse2.setAttribute('href',dados[0].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "barbaro"){
                descricaoClasse2.innerHTML = dados[1].descricao;
                imgClasse2.src = dados[1].img;
                linkClasse2.setAttribute('href',dados[1].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "mago"){
                descricaoClasse2.innerHTML = dados[2].descricao;
                imgClasse2.src = dados[2].img;
                linkClasse2.setAttribute('href',dados[2].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "ladino"){
                descricaoClasse2.innerHTML = dados[3].descricao;
                imgClasse2.src = dados[3].img;
                linkClasse2.setAttribute('href',dados[3].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "druida"){
                descricaoClasse2.innerHTML = dados[4].descricao;
                imgClasse2.src = dados[4].img;
                linkClasse2.setAttribute('href',dados[4].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "bardo"){
                descricaoClasse2.innerHTML = dados[5].descricao;
                imgClasse2.src = dados[5].img;
                linkClasse2.setAttribute('href',dados[5].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "clerigo"){
                descricaoClasse2.innerHTML = dados[6].descricao;
                imgClasse2.src = dados[6].img;
                linkClasse2.setAttribute('href',dados[6].siteInformacoes);
            }if(nomeClasse.toLocaleLowerCase() == "paladino"){
                descricaoClasse2.innerHTML = dados[7].descricao;
                imgClasse2.src = dados[7].img;
                linkClasse2.setAttribute('href',dados[7].siteInformacoes);
            }
        }
    }