// Дано інформацію про відвідувачів деякого сайту (для кожного відвідувача зберігається логін).
// Підрахувати для кожного клієнта кількість відвідувань.

class Client {
   constructor(login, password) {
      this.login = login
      this.password = password
   }

   toString() {
      return `Логін: ${this.login}`
   }
}

const clientsList = [
   {
      login: 'IvanKO',
      password: 'qwerty',
   },
   {
      login: 'VasyAaaaa',
      password: '1234567890',
   },
   {
      login: 'IvanKO',
      password: 'qwerty',
   },
   {
      login: 'IvanKO',
      password: 'qwerty',
   },
   {
      login: 'VasyAaaaa',
      password: '1234567890',
   },
   {
      login: 'ItsOkeeeyyy',
      password: '12fgd34afas5w',
   },
   {
      login: 'Erorr404',
      password: 'e404',
   },
   {
      login: 'ItsOkeeeyyy',
      password: '12fgd34afas5w',
   },
]

console.log(clientsList[0] === clientsList[2])

const clientsMapList = new Map()

for (const client of clientsList) {
   const elCount = clientsMapList.get(client.login) || 0
   clientsMapList.set(client.login, elCount + 1)
}

let result = ''

for (let elem of clientsMapList) {
   result += `Користувач: ${elem[0]} кількість відвідувань: ${elem[1]}\n`
}

document.querySelector('.block__container').innerText = result
