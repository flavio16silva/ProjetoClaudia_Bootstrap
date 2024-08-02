// Aguarda o evento de carregamento do DOM para garantir que o documento HTML tenha sido completamente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', function() {
  // Chama a função contagemregressiva quando o DOM estiver carregado
  contagemregressiva('.contagem-regressiva-um');
});


// Declaração de uma função autoinvocada que recebe um objeto exports como parâmetro
(function (exports) {
  'use strict';

  // Declaração da variável contagemregressiva
  var contagemregressiva;

  // Define a função contagemregressiva
  contagemregressiva = function (elt, args) {
      // Definição dos parâmetros padrão e personalizáveis do contador regressivo
      var parameters = {
          year: new Date().getFullYear() + 1, // Define o ano para o próximo ano
          month: 0, // Janeiro (0 é o índice de Janeiro)
          day: 1, // Define o dia como o primeiro dia do mês
          hours: 0, // Define as horas como 0
          minutes: 0, // Define os minutos como 0
          seconds: 0, // Define os segundos como 0
          words: {
              days: 'dia',
              hours: 'hora',
              minutes: 'minuto',
              seconds: 'segundo',
              pluralLetter: 's'
          },
          plural: true, // Define se deve usar plural ou singular para as palavras
          inline: false, // Define se o contador deve ser exibido em linha ou não
          enableUtc: true, // Define se deve usar UTC para o cálculo do tempo
          onEnd: function () { // Função a ser chamada quando o contador chegar ao fim
              return;
          },
          refresh: 1000, // Define o intervalo de atualização do contador em milissegundos
          inlineClass: 'contagem-regressiva-inline', // Classe CSS para o contador inline
          sectionClass: 'simples-sessao', // Classe CSS para cada seção do contador
          amountClass: 'simples-quantidade', // Classe CSS para a quantidade de tempo
          wordClass: 'simples-palavra', // Classe CSS para as palavras de tempo
          zeroPad: false // Define se os valores menores que 10 devem ser preenchidos com zero
      };

      // Declaração de variáveis usadas no cálculo do tempo restante
      var interval,
          targetDate,
          now,
          nowUtc,
          secondsLeft,
          days,
          hours,
          minutes,
          seconds,
          cd = document.querySelectorAll(elt);

      // Itera sobre todos os elementos selecionados com o seletor especificado
      Array.prototype.forEach.call(cd, function (countdown) {
          // Função para atualizar o contador
          var refresh = function () {
              // Obtém a hora atual
              now = new Date();
              // Verifica se deve usar UTC para o cálculo do tempo
              if (parameters.enableUtc) {
                  nowUtc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
                      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
                  secondsLeft = (targetDate.getTime() - nowUtc.getTime()) / 1000;

              } else {
                  secondsLeft = (targetDate.getTime() - now.getTime()) / 1000;
              }

              // Calcula os dias, horas, minutos e segundos restantes
              if (secondsLeft > 0) {
                  days = Math.floor(secondsLeft / 86400);
                  secondsLeft -= days * 86400;

                  hours = Math.floor(secondsLeft / 3600);
                  secondsLeft -= hours * 3600;

                  minutes = Math.floor(secondsLeft / 60);
                  seconds = Math.floor(secondsLeft % 60);
              } else {
                  // Caso o tempo restante seja menor ou igual a zero, zera os valores e chama a função onEnd
                  days = 0;
                  hours = 0;
                  minutes = 0;
                  seconds = 0;
                  window.clearInterval(interval);
                  parameters.onEnd();
              }

              // Verifica se deve usar plural ou singular para as palavras de tempo
              if (parameters.plural) {
                  var dayWord = days > 1
                      ? parameters.words.days + parameters.words.pluralLetter
                      : parameters.words.days;

                  var hourWord = hours > 1
                      ? parameters.words.hours + parameters.words.pluralLetter
                      : parameters.words.hours;

                  var minuteWord = minutes > 1
                      ? parameters.words.minutes + parameters.words.pluralLetter
                      : parameters.words.minutes;

                  var secondWord = seconds > 1
                      ? parameters.words.seconds + parameters.words.pluralLetter
                      : parameters.words.seconds;
              } else {
                  var dayWord = parameters.words.days;
                  var hourWord = parameters.words.hours;
                  var minuteWord = parameters.words.minutes;
                  var secondWord = parameters.words.seconds;
              }

              // Atualiza o contador na página com os valores calculados
              if (parameters.inline) {
                  countdown.innerHTML =
                      days + ' ' + dayWord + ', ' +
                      hours + ' ' + hourWord + ', ' +
                      minutes + ' ' + minuteWord + ', ' +
                      seconds + ' ' + secondWord + '.';
              } else {
                  countdown.querySelector('.simples-dia .simples-quantidade').textContent = (parameters.zeroPad && days.toString().length < 2 ? '0' : '') + days;
                  countdown.querySelector('.simples-dia .simples-palavra').textContent = dayWord;

                  countdown.querySelector('.simples-hora .simples-quantidade').textContent = (parameters.zeroPad && hours.toString().length < 2 ? '0' : '') + hours;
                  countdown.querySelector('.simples-hora .simples-palavra').textContent = hourWord;

                  countdown.querySelector('.simples-minuto .simples-quantidade').textContent = (parameters.zeroPad && minutes.toString().length < 2 ? '0' : '') + minutes;
                  countdown.querySelector('.simples-minuto .simples-palavra').textContent = minuteWord;

                  countdown.querySelector('.simples-segundo .simples-quantidade').textContent = (parameters.zeroPad && seconds.toString().length < 2 ? '0' : '') + seconds;
                  countdown.querySelector('.simples-segundo .simples-palavra').textContent = secondWord;
              }
          };

          // Obtenha a data atual
          var now = new Date();

          // Obtenha o próximo ano
          var currentYear = now.getFullYear();
          var nextYear = currentYear + 1;

          // Crie uma data para o último segundo do último dia do ano atual
          var endOfYear = new Date(currentYear, 11, 31, 23, 59, 59); // Dezembro é representado como mês 11

          // Calcule a diferença em milissegundos entre a data atual e o final do ano
          var difference = endOfYear.getTime() - now.getTime();

          // Converta a diferença de milissegundos para dias, horas, minutos e segundos
          var days = Math.floor(difference / (1000 * 60 * 60 * 24));
          var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((difference % (1000 * 60)) / 1000);

          // Configura a data alvo como o final do ano atual
          targetDate = endOfYear;

          // Refresh imediatamente para evitar um Flash de Conteúdo Não Estilizado
          refresh();
          interval = window.setInterval(refresh, parameters.refresh);
      });
  };

  // Exporta a função contagemregressiva para o objeto global (window)
  exports.contagemregressiva = contagemregressiva;
})(window);