const button1 = document.querySelector(".button-1")
const button2 = document.querySelector(".button-2")
const button3 = document.querySelector(".button-3")
const button4 = document.querySelector(".button-4")
const paragraph = document.querySelector('.item-price')

const ul = document.querySelector('ul')

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
}

function cliquei(array) {
    let myLi = ''
    array.forEach((product) => {
        myLi += `
    <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="item-price">${formatCurrency(product.price)}</p>
        </li>
    `
        ul.innerHTML = myLi
    })
}

function mapear() {
    const newPrice = menuOptions.map(mapear => ({
        ...mapear,
        price: mapear.price * 0.9
    }))
    cliquei(newPrice)
}

function sumAll() {
    const soma = menuOptions.reduce((acc, value) => {
        return acc + value.price
    }, 0)
    ul.innerHTML = `
    <li>
        A soma de todos os produtos é: <strong>R$ ${soma.toFixed(2)}</strong>
    </li>
`
    ul.style.color = '#FFFFFF'
}

function filtro() {
    const filtter = menuOptions.filter((element) => element.vegan === true)
    cliquei(filtter)
}







button1.addEventListener('click', () => cliquei(menuOptions))
button2.addEventListener('click', mapear)
button3.addEventListener('click', sumAll)
button4.addEventListener('click', filtro)