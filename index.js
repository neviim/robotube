const readline = require('readline-sync')

function start() {
    const content = {}

    // Metodos
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    // Implementação dos metodos
    function askAndReturnSearchTerm() {
        return readline.question('Tecle um termo da Wikpedia: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opcao: ' )
        const selectedPrefixText  = prefixes[selectedPrefixIndex] 

        // console.log(selectedPrefixText)
        return selectedPrefixText
    }

    console.log(content)
}

start() 