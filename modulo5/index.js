// 1. Função para calcular o tempo restante até uma data futura
function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const tempoRestante = dataFutura - agora;

  const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);
  const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
  const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

  return { dias, horas, minutos, segundos };
}

// 2. Função para atualizar o temporizador na tela
function atualizarTemporizador(dataFutura) {
  const tempo = calcularTempoRestante(dataFutura);

  // Exibe o resultado no console (você pode modificar para exibir no HTML se preferir)
  console.log(`${tempo.dias} dias, ${tempo.horas} horas, ${tempo.minutos} minutos e ${tempo.segundos} segundos restantes`);

  // Verifica se o tempo acabou
  if (tempo.dias < 0 && tempo.horas < 0 && tempo.minutos < 0 && tempo.segundos < 0) {
    clearInterval(intervalo);
    console.log("A contagem regressiva acabou!");
  }
}

// Defina a data futura (exemplo: 31 de dezembro de 2024)
const dataFutura = new Date('2024-12-31T23:59:59');

// 3. Use setInterval para atualizar o temporizador a cada segundo
const intervalo = setInterval(() => atualizarTemporizador(dataFutura), 1000);
