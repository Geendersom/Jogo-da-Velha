// Criado por Geêndersom Araújo
// Arquivo auxiliar JavaScript para exibição de mensagens


/**
 * Exibe mensagem de turno acima do card do jogador
 * @param {number} jogadorNum - Número do jogador (1 ou 2)
 * @param {string} nomeJogador - Nome do jogador
 */
function exibirMensagemTurno(jogadorNum, nomeJogador) {
    console.log('🔵 exibirMensagemTurno chamada:', { jogadorNum, nomeJogador });
    try {
        // Esconde todas as mensagens de turno
        const turnoDisplay1 = document.getElementById('turno-display-jogador1');
        const turnoDisplay2 = document.getElementById('turno-display-jogador2');
        
        console.log('🔵 Elementos encontrados:', {
            turnoDisplay1: !!turnoDisplay1,
            turnoDisplay2: !!turnoDisplay2
        });
        
        if (turnoDisplay1) turnoDisplay1.style.display = 'none';
        if (turnoDisplay2) turnoDisplay2.style.display = 'none';
        
        // Esconde mensagem de vitória se estiver visível
        const vitoriaDisplay = document.getElementById('vitoria-display');
        if (vitoriaDisplay) vitoriaDisplay.style.display = 'none';
        
        // Mostra mensagem no card do jogador atual
        const mensagem = `${nomeJogador}, agora é a sua vez!`;
        if (jogadorNum === 1 && turnoDisplay1) {
            turnoDisplay1.textContent = mensagem;
            turnoDisplay1.style.display = 'block';
            console.log('✅ Mensagem de turno exibida para jogador 1:', mensagem);
            console.log('🔵 Estilo aplicado:', {
                display: turnoDisplay1.style.display,
                textContent: turnoDisplay1.textContent
            });
        } else if (jogadorNum === 2 && turnoDisplay2) {
            turnoDisplay2.textContent = mensagem;
            turnoDisplay2.style.display = 'block';
            console.log('✅ Mensagem de turno exibida para jogador 2:', mensagem);
            console.log('🔵 Estilo aplicado:', {
                display: turnoDisplay2.style.display,
                textContent: turnoDisplay2.textContent
            });
        } else {
            console.warn('⚠️ Condição não atendida:', { jogadorNum, turnoDisplay1: !!turnoDisplay1, turnoDisplay2: !!turnoDisplay2 });
        }
        
        // Atualiza estilo dos cards (ativo/esmaecido)
        const cardJogador1 = document.getElementById('contador-jogador1');
        const cardJogador2 = document.getElementById('contador-jogador2');
        
        if (cardJogador1 && cardJogador2) {
            if (jogadorNum === 1) {
                cardJogador1.classList.remove('esmaecido');
                cardJogador2.classList.add('esmaecido');
            } else if (jogadorNum === 2) {
                cardJogador2.classList.remove('esmaecido');
                cardJogador1.classList.add('esmaecido');
            }
        }
    } catch (error) {
        console.error('❌ Erro ao exibir mensagem de turno:', error);
        console.error('❌ Stack trace:', error.stack);
    }
}

/**
 * Exibe mensagem de vitória dentro do card do tabuleiro
 * @param {string} nomeJogador - Nome do jogador vencedor
 */
function exibirMensagemVitoria(nomeJogador) {
    console.log('🟢 exibirMensagemVitoria chamada:', nomeJogador);
    try {
        // Esconde mensagens de turno
        const turnoDisplay1 = document.getElementById('turno-display-jogador1');
        const turnoDisplay2 = document.getElementById('turno-display-jogador2');
        if (turnoDisplay1) turnoDisplay1.style.display = 'none';
        if (turnoDisplay2) turnoDisplay2.style.display = 'none';
        
        // Mostra mensagem de vitória dentro do card do tabuleiro
        const vitoriaDisplay = document.getElementById('vitoria-display');
        console.log('🟢 Elemento vitoria-display encontrado:', !!vitoriaDisplay);
        if (vitoriaDisplay) {
            vitoriaDisplay.textContent = `${nomeJogador} ganhou essa partida!`;
            vitoriaDisplay.style.display = 'block';
            console.log('✅ Mensagem de vitória exibida:', vitoriaDisplay.textContent);
            console.log('🟢 Estilo aplicado:', {
                display: vitoriaDisplay.style.display,
                textContent: vitoriaDisplay.textContent
            });
        } else {
            console.error('❌ Elemento vitoria-display não encontrado');
        }
        
        // Remove esmaecimento dos cards
        const cardJogador1 = document.getElementById('contador-jogador1');
        const cardJogador2 = document.getElementById('contador-jogador2');
        if (cardJogador1) {
            cardJogador1.classList.remove('esmaecido');
            cardJogador1.classList.add('ativo');
        }
        if (cardJogador2) {
            cardJogador2.classList.remove('esmaecido');
            cardJogador2.classList.add('ativo');
        }
    } catch (error) {
        console.error('❌ Erro ao exibir mensagem de vitória:', error);
        console.error('❌ Stack trace:', error.stack);
    }
}

/**
 * Esconde todas as mensagens (turno e vitória)
 */
function esconderTodasMensagens() {
    try {
        const turnoDisplay1 = document.getElementById('turno-display-jogador1');
        const turnoDisplay2 = document.getElementById('turno-display-jogador2');
        const vitoriaDisplay = document.getElementById('vitoria-display');
        
        if (turnoDisplay1) turnoDisplay1.style.display = 'none';
        if (turnoDisplay2) turnoDisplay2.style.display = 'none';
        if (vitoriaDisplay) vitoriaDisplay.style.display = 'none';
    } catch (error) {
        console.error('❌ Erro ao esconder mensagens:', error);
    }
}

// Exporta funções para uso global
window.exibirMensagemTurno = exibirMensagemTurno;
window.exibirMensagemVitoria = exibirMensagemVitoria;
window.esconderTodasMensagens = esconderTodasMensagens;

console.log('✅ Módulo de mensagens carregado');

