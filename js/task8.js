// Дано масив студентів (піб, курс, факультет).
// Підрахувати кількість різних факультетів, та кількість студентів кожного з курсів.

const studentsList = [
   {
      fullName: 'Онушко Еммануїл Жданович',
      course: 1,
      faculty: 'Факультет комп’ютерних наук',
   },
   {
      fullName: 'Марушевська Гаїна Адамівна',
      course: 1,
      faculty: 'Факультет комп’ютерних наук',
   },
   {
      fullName: 'Лопатинський Устим Арсенович',
      course: 2,
      faculty: 'Факультет економічних наук',
   },
   {
      fullName: 'Неділько Віленіна Арсенівна',
      course: 4,
      faculty: 'Факультет комп’ютерних наук',
   },
   {
      fullName: 'Пеленський Зорегляд Добромирович',
      course: 2,
      faculty: 'Факультет економічних наук',
   },
   {
      fullName: 'Юзефович Шушана Полянівна',
      course: 3,
      faculty: 'Факультет політичних наук',
   },
   {
      fullName: 'Марчак Афанасій Костянтинович',
      course: 4,
      faculty: 'Факультет економічних наук',
   },
   {
      fullName: 'Ярчук Йовілла Чеславівна',
      course: 2,
      faculty: 'Факультет політичних наук',
   },
   {
      fullName: 'Огоновський Фауст Антонович',
      course: 3,
      faculty: 'Факультет політичних наук',
   },
   {
      fullName: 'Кузьма Огняна Азарівна',
      course: 1,
      faculty: 'Факультет комп’ютерних наук',
   },
]

const map = new Map()

for (const student of studentsList) {
   const facultiesCount = map.get(student.faculty) || 0
   map.set(student.faculty, facultiesCount + 1)

   const coursesCount = map.get(student.course) || 0
   map.set(student.course, coursesCount + 1)
}

console.log(map)

let result = ''

for (let elem of map) {
   result += `${elem[0]}: ${elem[1]}\n`
}

document.querySelector('.block__container').innerText = result
