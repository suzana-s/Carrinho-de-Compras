
//Estruturando o html 
let div         = document.createElement('div')
let body        = document.querySelector('body')
let tagh1       = document.createElement('h1')
let tagSpan     = document.createElement('span')
let tagSpan2    = document.createElement('span')
let tagSection  = document.createElement('section')
let button      = document.createElement('button')
let tagP        = document.createElement('p')
let soma       = document.createElement('p')
let tagUl       = document.createElement('ul')
let tagUl2      = document.createElement('ul')
let tagMain     = document.createElement('main')
let section = document.createElement('section')


tagh1.innerText       = 'Virtual Market'
tagSpan.innerText     = 'Item'
tagSpan2.innerText    = 'valor'
tagP.innerText        = 'Total:'
button.innerText      = 'Finalizar'

tagMain.append(tagUl, tagUl2)
tagSection.append(tagP, soma, button)
div.append(tagh1, tagSpan, tagSpan2, tagMain,tagSection)
body.append(div)



//Lista Produtos

const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }

]

//Renderizar lista de objetos

//Criando funcção para cada lista

function listarObjeto(list, reference){
    for(let i = 0; i < list.length; i++){
        let listProducts = list[i]
        let template = criaTemplate(listProducts)
        reference.appendChild(template)
    }
}

function listarObjetoColuna2(list, reference){
    for(let i = 0; i < list.length; i++){
        let listProducts = list[i]
        let template     = criaTemplate2(listProducts)
        reference.appendChild(template)
    }
}

function criaTemplate(productsCart){
    let name = productsCart.name
    let tagLi = document.createElement('li')
    tagLi.innerText += `${name}`

    return tagLi

}

function criaTemplate2(productsCart){
    let valor = productsCart.price

    let tagLi       = document.createElement('li')

    tagLi.innerText += `R$ ${valor}`

    return tagLi

}

listarObjeto(productsCart, tagUl )

listarObjetoColuna2(productsCart, tagUl2)


// Criando Função SOMA
function somaProduct(list){
    let soma = 0
    for(let i = 0; i < list.length; i++){
        let obj = list[i]
        soma += obj.price
    }


    return soma 
}

soma.innerText = `R$ ${somaProduct(productsCart)}`
button.addEventListener('click', function(){
    alert('Compra finalizada!')
})