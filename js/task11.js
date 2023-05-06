// Користувач може змінювати колір фону, що вибирає користувач з використанням
// <input type="color">
// Зберігати цей колір і відновлювати при наступному відкритті.
// Також зберігати і відображати кількість змін протягом одного сеансу.

class BgChanger {
   constructor() {
      this.statNum = 0
      this.el = this.createElement()
   }

   changeBgColor() {
      document.body.style.backgroundColor = this.input.value
      localStorage.setItem('backgroundColor', this.input.value)
      this.changeStatNum()
   }

   changeStatNum() {
      this.statNum += 1
      sessionStorage.setItem('changesCount', this.statNum)
      this.statsSpan.innerText = this.statNum
   }

   createElement() {
      const container = document.createElement('div')

      this.input = document.createElement('input')
      this.input.type = 'color'
      this.input.addEventListener('change', this.changeBgColor.bind(this))
      container.append(this.input)

      const changingStatsContainer = document.createElement('div')
      changingStatsContainer.innerText = 'Кількість змін: '
      container.append(changingStatsContainer)

      this.statsSpan = document.createElement('span')
      this.statsSpan.innerText = sessionStorage.getItem('changesCount') || 0
      changingStatsContainer.append(this.statsSpan)

      return container
   }

   render(selectedContainer) {
      if (localStorage.getItem('backgroundColor')) document.body.style.backgroundColor = localStorage.getItem('backgroundColor')
      document.querySelector(selectedContainer).append(this.el)
   }
}

new BgChanger().render('.block__container')
