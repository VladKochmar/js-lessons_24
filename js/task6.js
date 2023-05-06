// Дано масив книг (назва, рік видання, автор). Підрахувати кількість книг для кожного автора.

class Book {
   constructor(title, year, author) {
      this.title = title
      this.year = year
      this.author = author
   }

   toString() {
      return `назва: ${this.title} рік видання: ${this.year} автор: ${this.author}`
   }
}

const booksList = [
   new Book('Книга Петра 1', '2004р.', 'Петренко Петро'),
   new Book('Я Олена', '2001р.', 'Телефон Олена'),
   new Book('Книга Петра 2', '2005р.', 'Петренко Петро'),
   new Book('Я точно Олена', '2002р.', 'Телефон Олена'),
   new Book('Книга не Петра', '2007р.', 'Петренко Петро'),
   new Book('Книга про Петра 1', '2010р.', 'Петренко Петро'),
   new Book('Іванко', '2016р.', 'Іванов Іван'),
   new Book('Книга про Петра 2', '2012р.', 'Петренко Петро'),
]

const booksMapList = new Map()

for (const book of booksList) {
   const elCount = booksMapList.get(book.author) || 0
   booksMapList.set(book.author, elCount + 1)
}

let result = ''

for (let elem of booksMapList) {
   result += `Автор: ${elem[0]} кількість книг: ${elem[1]}\n`
}

document.querySelector('.block__container').innerText = result
