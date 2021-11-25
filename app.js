const  books = require('./database')
const readline = require('readline-sync')

const begin = readline.question('Gostaria de buscar um livro?(S/N): ')

if(begin.toLocaleUpperCase() === 'S') {
    console.log('Esses são as categorias disponiveis:')
    console.log('Produtividade ', '/História brasileira ', '/Américas ', '/Tecnologia ', '/Estilo de Vida ', '/Cristão ')

    const category = readline.question('Por favor selecione a categoria que deseja: ')
    const returnCategory = books.filter(book => book.category === category)
    console.table(returnCategory)
} else {
    const listBooks = books.sort((a,b) => a.pages - b.pages)
    console.log('Esses são todos os livros disponiveis: ')
    console.table(listBooks)
}
