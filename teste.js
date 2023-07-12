function obterTelefone() {
    const nome = document.getElementById('nome').value;
  
    const contatos = {
      'Batman': '988249817',
      'Miranha': '987654321',
      'Superman': '456789123'
    };
  
    const resultado = document.getElementById('resultado');

    if (nome in contatos) {
      resultado.textContent = `Telefone: ${contatos[nome]}`;
    } else {
      resultado.textContent = 'Telefone não encontrado.';
    }
  }