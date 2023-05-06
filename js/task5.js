// Дано список з віком учнів. Підрахувати скільки разів кожне значення зустрічається у списку і максимальне.

const studentsList = [
   { name: 'Ivan', age: 12 },
   { name: 'Petro', age: 13 },
   { name: 'Kate', age: 12 },
   { name: 'Oleg', age: 12 },
   { name: 'Taras', age: 14 },
   { name: 'Ann', age: 13 },
   { name: 'Olena', age: 12 },
   { name: 'Kate', age: 11 },
   { name: 'Olexander', age: 15 },
]

const map = new Map()

for (let student of studentsList) {
   const elCount = map.get(student.age) || 0
   map.set(student.age, elCount + 1)
}

const maxNumber = Math.max(...map.values())

console.log(map, maxNumber)

let result = ''

for (let elem of map) {
   result += `Вік: ${elem[0]} кількість учнів: ${elem[1]}\n`
}

document.querySelector('.block__container').innerText = `${result} Вік який зустрічається найчастіше: ${maxNumber}`
