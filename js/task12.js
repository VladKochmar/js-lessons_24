// Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage).
// Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm).
// Якщо користувач натискає на «Ок», то видаляти цю задачу.

let tasksList = ['Піти в магазин', 'Зробити ДЗ', 'Подивитися урок', 'Відпочити', 'Повчити англійську']

localStorage.setItem('tasksList', tasksList)

function getRandomElem(arr) {
   const randomIndex = Math.floor(Math.random() * arr.length)
   return arr[randomIndex]
}

const tasksInterval = setInterval(() => {
   const randomTask = getRandomElem(localStorage.tasksList.split(','))
   const isConfirmed = confirm(randomTask)

   if (isConfirmed) localStorage.tasksList = localStorage.tasksList.split(',').filter(elem => elem !== randomTask)
   if (localStorage.tasksList.length === 0) clearInterval(tasksInterval)
   console.log(localStorage)
}, 5000)
