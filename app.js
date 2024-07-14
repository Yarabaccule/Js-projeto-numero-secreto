// Seleciona os elementos do DOM
const numeroInput = document.getElementById('numero');
const reiniciarBotao = document.getElementById('reiniciar');
const resultadoElement = document.getElementById('resultado');
const botao = document.getElementById('botao');

// Inicializa as variáveis
let tentativas = 0;
const numeroMax = 100;
let numeroAleatorio = parseInt(Math.random() * numeroMax + 1);
console.log(numeroAleatorio);

// Função para exibir texto em um elemento
function exibirTela(tag, texto) {
  let campo = document.getElementById(tag);
  campo.innerHTML = texto;
}

// Configura o título do jogo e a escolha do número, e nome dos botões
exibirTela('titleGame', '<p style="font-size: 40px">Jogo do Numero Secreto!</p>');
exibirTela('escolha-num', `<p style="font-size: 30px">Escolha um numero entre 1 e ${numeroMax}</p>`);
exibirTela('botao', 'Chutar');
exibirTela('reiniciar', 'Reiniciar');

// Adiciona evento de clique ao botão
botao.addEventListener('click', handleGuess);

// Adiciona evento de clique ao botão de reiniciar
reiniciarBotao.addEventListener('click', restartGame);

// Função para lidar com a tentativa do usuário
function handleGuess() {
  tentativas++; // Incrementa tentativas a cada clique no botão
  const numeroUsuario = parseInt(numeroInput.value);

  // Limpa o campo numero
  numeroInput.value = '';

  if (!numeroUsuario || isNaN(numeroUsuario)) {
    resultadoElement.innerHTML = '<p>Você precisa digitar um número!</p>';
  } else if (numeroUsuario < 1 || numeroUsuario > numeroMax) {
    resultadoElement.innerHTML = '<p>Número inválido. Tente novamente!</p>';
  } else {
    if (numeroUsuario === numeroAleatorio) {
      if (tentativas === 1) {
        resultadoElement.innerHTML = `<p style="color: orange; font-size: 25px">Parabéns! Você acertou de primeira!</p>`;
      } else {
        resultadoElement.innerHTML = `<p style="color: orange; font-size: 25px">Parabéns! Você acertou! O valor é ${numeroUsuario}! Você encontrou o numero com ${tentativas} tentativas.</p>`;
      }
    } else if (numeroUsuario < numeroAleatorio) {
      resultadoElement.innerHTML = '<p>O número é maior que o seu palpite. Tente novamente!</p>';
    } else {
      resultadoElement.innerHTML = '<p>O número é menor que o seu palpite. Tente novamente!</p>';
    }
  }
}

// Função para reiniciar o jogo
function restartGame() {
  // Reseta as variáveis
  tentativas = 0;
  numeroAleatorio = parseInt(Math.random() * numeroMax + 1);
  console.log(numeroAleatorio);

  // Reseta o estado do jogo
  resultadoElement.innerHTML = '';
  numeroInput.value = '';
}