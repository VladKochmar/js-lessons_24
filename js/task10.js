// Дано два списки прізвищ студентів, що відвідують гуртки з математики і історії.
// Підрахувати скільки студентів з гуртка з історії також відвідують гурток з математики.
// Також підрахувати скільки всього студентів відвідують хоча б один гурток.

const mathStudentsList = ['Petrenko Petro', 'Tarasenko Taras', 'Ivanova Olena', 'Leleka Lesya', 'Grimm Ann']
const historyStudentsList = ['Maslo Stepan', 'Syrota Ivan', 'Tarasenko Taras', 'Leleka Lesya', 'Ivanov Ivan', 'Solovey Bogdan']

const mathSet = new Set(mathStudentsList)
const historySet = new Set(historyStudentsList)

const studentsInBothClubs = new Set([...mathSet].filter(student => historySet.has(student)))
const studentsInAtLeastOneClub = new Set(...mathSet, ...historySet)

document.querySelector('.block__container').innerText = 'Результат в консолі'

console.log(`Both clubs: ${studentsInBothClubs}`)
console.log(`At Least One Club: ${studentsInAtLeastOneClub}`)
