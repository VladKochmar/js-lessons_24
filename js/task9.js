// Дано масив показів температур.
// Підрахувати кількість входжень кожного із показів let temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]
// Заокруглити вверх значення та підрахувати кількість різних показів.

const temperatures = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

const temperaturesMap = new Map()

for (const temperature of temperatures) {
   const elCount = temperaturesMap.get(temperature) || 0
   temperaturesMap.set(temperature, elCount + 1)
}

const temperaturesSet = new Set()

for (const temperature of temperatures) {
   temperaturesSet.add(Math.ceil(temperature))
}

const difTempNumber = temperaturesSet.size

let result = ''

for (let elem of temperaturesMap) {
   result += `${elem[0]}: ${elem[1]}\n`
}

result += `кількість різних показів: ${difTempNumber}`

document.querySelector('.block__container').innerText = result
