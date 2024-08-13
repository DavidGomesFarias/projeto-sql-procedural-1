document.querySelector('#executeBtn').addEventListener('click', function() {
    const sqlInput = document.querySelector('#sqlInput').value
    const resultDiv = document.querySelector('#result')

    // Simulação básica de execução do SQL
    if(sqlInput.toLowerCase().includes('select')) {
        resultDiv.innerHTML = '<p>Resultado da consulta: (Exemplo de dados retornados).</p>'
    } else if(sqlInput.toLowerCase().includes('insert')) {
        resultDiv.innerHTML = '<p>Dados inseridos com sucesso!</p>'
    } else if(sqlInput.toLowerCase().includes('update')) {
        resultDiv.innerHTML = '<p>Dados atualizados com sucesso!</p>'
    } else if(sqlInput.toLowerCase().includes('delete')) {
        resultDiv.innerHTML = '<p>Dados deletados com sucesso!</p>'
    } else {
        resultDiv.innerHTML = '<p>Erro: Comando SQL não reconhecido ou não suportado.</p>'
    }
})