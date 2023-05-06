// Задача  1. Дано масив рядкових представлень чисел (тобто масив чисел у лапках (string).
// З використанням перевірки за допомогою регулярних виразів і груп підрахувати кількість тих,
// у яких перша і остання літери однакові.

const stringNumbersArray = ['142', '11', '235', '865478', '52', '27842', '46', '75', '23', '11', '3803053', '4064', '865478', '545936']

let counter = 0
for (let elem of stringNumbersArray) {
   if (/(\d)\d*\1/.test(elem)) counter++
}

document.getElementById('task1').innerText = `Кількість тих, у яких перша і остання літери однакові: ${counter}`

// Задача 2. Замінити номер розділяючи послідовності цифр дефісом згідно з форматом
// 0504546626   🡪  +380-50-45-466-26

const telInput = document.getElementById('userPhoneNumber')

telInput.addEventListener('change', e => {
   e.target.value = e.target.value.replace(/(\d)(\d{2})(\d{2})(\d{3})(\d{2})/, '+38$1-$2-$3-$4-$5')
})

// Задача 3. Після кожного значення року після 2000 року додати «р.»
// «Я народився 2001, а в школі пішов 2007» 🡪 «Я народився 2001р., а в школі пішов 2007р.»

const yearsInput = document.getElementById('strWithYears')

yearsInput.addEventListener('change', e => {
   e.target.value = e.target.value.replace(/([2-9]\d{3})(?!р\.)/g, '$1р.')
})

// Задача 4. Вводиться велике число. Кожні 3 розряди відділяти пробілом.
// 7457896524 🡪 7 457 896 524

const bigNumber = document.getElementById('bigNumber')

bigNumber.addEventListener('change', e => {
   e.target.value = e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
})
